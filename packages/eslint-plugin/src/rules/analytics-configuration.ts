import { ESLintUtils, TSESTree } from "@typescript-eslint/utils"

type Options = readonly [
  {
    reservedPropNames: string[]
  }
]

const messages = {
  reservedPayloadPropNames: "{{ propName }} is a reserved payload prop name.",
  eventNameFormat:
    "Event name {{ eventName }} must be in SCREAMING_SNAKE_CASE.",
  emptyPayloadType:
    "Events with empty payloads must use `never` for the payload type.",
  invalidPayloadFormat:
    "Payloads must be specific key-value pairs where keys are strings and values are either string, boolean, or number.",
} as const

type MessageIds = keyof typeof messages

/**
 * Require event names to:
 * - Be all caps
 * - Start and end with a letter
 * - Only use underscore to delimit words
 */
const eventNameRegex = /^[A-Z][A-Z_]*[A-Z]$/

const isTypeAnnotationEmpty = (node: TSESTree.TSPropertySignature): boolean => {
  const typeAnnotation = node.typeAnnotation as TSESTree.TSTypeAnnotation
  const innerTypeAnnotation = typeAnnotation.typeAnnotation

  if (
    innerTypeAnnotation.type === "TSTypeLiteral" &&
    innerTypeAnnotation.members.length === 0
  ) {
    // Disallow empty objects
    return true
  }

  if (
    innerTypeAnnotation.type === "TSNullKeyword" ||
    innerTypeAnnotation.type === "TSUndefinedKeyword"
  ) {
    return true
  }

  return false
}

const getPropertyName = (node: TSESTree.TSPropertySignature): string => {
  if (node.key.type === "Identifier") {
    return node.key.name
  }

  if (node.key.type === "Literal" && node.key.value) {
    return node.key.value?.toString()
  }

  throw new Error(
    `Could not identify event name on node type: ${node.key.type}`
  )
}

// Use without docs for now... should we add a section in the reference
// documentation explaining custom rules?
export const analyticsConfiguration = ESLintUtils.RuleCreator.withoutDocs<
  Options,
  MessageIds
>({
  meta: {
    type: "problem",
    messages,
    schema: [
      {
        type: "object",
        properties: {
          reservedPropNames: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        additionalProperties: false,
        required: ["reservedPropNames"],
      },
    ],
  },
  defaultOptions: [{ reservedPropNames: [] }],
  create(context, [options]) {
    const validatePayloadProp = (payloadNode: TSESTree.TypeElement) => {
      if (payloadNode.type === "TSPropertySignature") {
        const propName = getPropertyName(payloadNode)
        if (options.reservedPropNames.includes(propName)) {
          context.report({
            messageId: "reservedPayloadPropNames",
            data: {
              propName: propName,
            },
            node: payloadNode.key,
          })
        }

        const allowedPayloadValueTypes = [
          "TSStringKeyword",
          "TSNumberKeyword",
          "TSBooleanKeyword",
        ]
        if (
          payloadNode.typeAnnotation?.type === "TSTypeAnnotation" &&
          !allowedPayloadValueTypes.includes(
            payloadNode.typeAnnotation.typeAnnotation.type
          )
        ) {
          context.report({
            messageId: "invalidPayloadFormat",
            node: payloadNode.typeAnnotation.typeAnnotation,
          })
        }
      }

      if (payloadNode.type === "TSIndexSignature") {
        context.report({
          messageId: "invalidPayloadFormat",
          node: payloadNode,
        })
      }
    }

    const validateCustomEvent = (
      customEventNode: TSESTree.TSPropertySignature
    ) => {
      const eventName = getPropertyName(customEventNode)
      if (!eventNameRegex.test(eventName)) {
        context.report({
          messageId: "eventNameFormat",
          data: {
            eventName: eventName,
          },
          node: customEventNode.key,
        })
      }

      if (!customEventNode.typeAnnotation) return

      if (isTypeAnnotationEmpty(customEventNode)) {
        context.report({
          messageId: "emptyPayloadType",
          node: customEventNode.typeAnnotation,
        })
      }

      if (
        customEventNode.typeAnnotation.typeAnnotation.type === "TSLiteralType"
      ) {
        context.report({
          messageId: "invalidPayloadFormat",
          node: customEventNode.typeAnnotation.typeAnnotation,
        })
      }

      if (
        customEventNode.typeAnnotation.typeAnnotation.type !== "TSTypeLiteral"
      ) {
        // We can't check the properties of referenced types, so ignore anything
        // that isn't a literal type definition
        return
      }

      customEventNode.typeAnnotation.typeAnnotation.members.forEach((m) => {
        validatePayloadProp(m)
      })
    }

    return {
      "ExportNamedDeclaration > TSTypeAliasDeclaration > Identifier[name='Events']"(
        node: TSESTree.Identifier
      ): void {
        const isAnalyticsFile = context
          .getFilename()
          .endsWith("types/analytics.ts")
        if (!isAnalyticsFile) return

        if (
          node.parent?.type !== "TSTypeAliasDeclaration" ||
          node.parent?.typeAnnotation.type !== "TSTypeLiteral"
        )
          return
        node.parent.typeAnnotation.members.forEach((m) => {
          if (m.type === "TSPropertySignature") validateCustomEvent(m)
        })
      },
    }
  },
})