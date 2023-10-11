(window.webpackJsonp=window.webpackJsonp||[]).push([[195,8,9,10],{"./src/components/VSearchResultsGrid/VAudioCollection.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),VAudioList=__webpack_require__("./src/components/VSearchResultsGrid/VAudioList.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VSnackbar=__webpack_require__("./src/components/VSnackbar.vue"),VSearchResultsGrid_VAudioCollectionvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioCollection",components:{VSnackbar:VSnackbar.default,VAudioList:VAudioList.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:{results:{type:Array,default:function _default(){return[]}},isRelated:{type:Boolean,required:!0},fetchState:{type:Object,required:!0},collectionLabel:{type:String,required:!0}},setup:function setup(){return{isSnackbarVisible:Object(use_audio_snackbar.a)().isVisible}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioCollectionvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",[_vm.results&&0===_vm.results.length&&!_vm.fetchState.isFinished?_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}):_vm._e(),_vm._v(" "),_c("VSnackbar",{attrs:{size:"large","is-visible":_vm.isSnackbarVisible}},[_c("i18n",{attrs:{path:"audioResults.snackbar.text",tag:"p"},scopedSlots:_vm._u([_vm._l(["spacebar","left","right"],(function(keyboardKey){return{key:keyboardKey,fn:function fn(){return[_c("kbd",{key:keyboardKey,staticClass:"font-sans"},[_vm._v(_vm._s(_vm.$t("audioResults.snackbar.".concat(keyboardKey))))])]},proxy:!0}}))],null,!0)})],1),_vm._v(" "),_c("VAudioList",{attrs:{"collection-label":_vm.collectionLabel,"is-related":_vm.isRelated,results:_vm.results}}),_vm._v(" "),_vm.isRelated?_vm._e():_c("footer",{staticClass:"mt-4"},[_c("VLoadMore")],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VSnackbar:__webpack_require__("./src/components/VSnackbar.vue").default,VAudioList:__webpack_require__("./src/components/VSearchResultsGrid/VAudioList.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioCollection",description:"This component shows a loading skeleton if the results are not yet loaded,\nand then shows the list of audio, with the Load more button if needed.",tags:{},exportName:"default",props:[{name:"results",type:{name:"AudioDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isRelated",description:"If used for Related audio, do not show the Load more button.",type:{name:"boolean"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0},{name:"collectionLabel",description:"The label used for the list of audio for accessibility.",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VAudioList.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),ui=__webpack_require__("./src/stores/ui.ts"),VAudioResult=__webpack_require__("./src/components/VSearchResultsGrid/VAudioResult.vue"),VSearchResultsGrid_VAudioListvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioList",components:{VAudioResult:VAudioResult.default},props:{results:{type:Array,default:function _default(){return[]}},isRelated:{type:Boolean,required:!0},collectionLabel:{type:String,required:!0}},setup:function setup(props){var uiStore=Object(ui.a)(),audioTrackSize=Object(vue.computed)((function(){return props.isRelated?uiStore.isBreakpoint("md")?"l":"s":uiStore.isDesktopLayout?uiStore.isFilterVisible?"l":"m":"s"})),searchStore=Object(search.b)();return{audioTrackSize:audioTrackSize,searchTerm:Object(vue.computed)((function(){return searchStore.searchTerm}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioListvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("ol",{staticClass:"-mx-2 flex flex-col md:-mx-4",class:_vm.isRelated?"gap-4":"gap-2 md:gap-1",attrs:{"aria-label":_vm.collectionLabel}},_vm._l(_vm.results,(function(audio){return _c("VAudioResult",{key:audio.id,attrs:{"search-term":_vm.searchTerm,audio:audio,layout:"row",size:_vm.audioTrackSize,"is-related":_vm.isRelated}})})),1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioResult:__webpack_require__("./src/components/VSearchResultsGrid/VAudioResult.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioList",description:"The list of audio for the search results and the related audio.",tags:{},exportName:"default",props:[{name:"results",type:{name:"AudioDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isRelated",type:{name:"boolean"},required:!0},{name:"collectionLabel",description:"The label used for the list of audio for accessibility.",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VAudioResult.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),vue=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js")),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),use_sensitive_media=__webpack_require__("./src/composables/use-sensitive-media.ts"),media=__webpack_require__("./src/constants/media.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var VAudioResultvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioResult",components:{VAudioTrack:VAudioTrack.default},inheritAttrs:!1,props:{layout:{type:String,required:!0},size:{type:String},audio:{type:Object,required:!0},searchTerm:{type:String,required:!0},isRelated:{type:Boolean,required:!0}},setup:function setup(props){var sendCustomEvent=Object(use_analytics.a)().sendCustomEvent,audio=Object(vue.toRefs)(props).audio,shouldBlur=Object(use_sensitive_media.a)(audio).isHidden;return{sendSelectSearchResultEvent:function sendSelectSearchResultEvent(audio,_ref){var _a,_b;_ref.inWaveform||(Object(use_audio_snackbar.a)().hide(),sendCustomEvent("SELECT_SEARCH_RESULT",{id:audio.id,mediaType:media.b,query:props.searchTerm,provider:audio.provider,relatedTo:null,sensitivities:null!==(_b=null===(_a=audio.sensitivity)||void 0===_a?void 0:_a.join(","))&&void 0!==_b?_b:"",isBlurred:shouldBlur.value}))},sendInteractionEvent:function sendInteractionEvent(data){var component=props.isRelated?"VRelatedAudio":"box"===props.layout?"VAllResultsGrid":"AudioSearch";sendCustomEvent("AUDIO_INTERACTION",_objectSpread(_objectSpread({},data),{},{component:component}))}}}}),VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_=VAudioResultvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("li",[_c("VAudioTrack",_vm._g(_vm._b({attrs:{audio:_vm.audio,layout:_vm.layout,size:_vm.size,"search-term":_vm.searchTerm},on:{interacted:_vm.sendInteractionEvent,mousedown:function mousedown($event){return _vm.sendSelectSearchResultEvent(_vm.audio,$event)}}},"VAudioTrack",_vm.$attrs,!1),_vm.$listeners))],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioResult",exportName:"default",description:"",tags:{},props:[{name:"layout",type:{name:'Extract<AudioLayout, "box" | "row">'},required:!0},{name:"size",type:{name:"AudioSize"}},{name:"audio",type:{name:"AudioDetail"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0},{name:"isRelated",type:{name:"boolean"},required:!0}]}},"./src/pages/search/audio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VAudioCollection=__webpack_require__("./src/components/VSearchResultsGrid/VAudioCollection.vue"),search_audiovue_type_script_lang_ts_=Object(vue.defineComponent)({name:"AudioSearch",components:{VAudioCollection:VAudioCollection.default},props:{results:{type:Array,required:!0},fetchState:{type:Object,required:!0}},setup:function setup(){var i18n=Object(use_i18n.a)();return{collectionLabel:Object(vue.computed)((function(){var query=Object(search.b)().searchTerm;return i18n.t("browsePage.aria.results",{query:query}).toString()}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VAudioCollection",{attrs:{results:this.results,"is-related":!1,"fetch-state":this.fetchState,"collection-label":this.collectionLabel}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioCollection:__webpack_require__("./src/components/VSearchResultsGrid/VAudioCollection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{},props:[{name:"results",type:{name:"AudioDetail[]"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0}]}}}]);