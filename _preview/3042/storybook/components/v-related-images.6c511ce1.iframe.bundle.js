(window.webpackJsonp=window.webpackJsonp||[]).push([[19,15],{"../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=5e9507e2&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width:768px){.image-grid[data-v-5e9507e2]:after{content:"";flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=5e9507e2&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=5e9507e2&prod&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("4282cb2e",content,!0,{sourceMap:!1})},"./src/components/VImageDetails/VRelatedImages.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js");var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),vue=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js")),dist_runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_2fbzhtyog7bmybvhyeifufnl3a/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),related_media=__webpack_require__("./src/stores/media/related-media.ts"),VImageGrid=__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue"),VRelatedImagesvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VRelatedImages",components:{VImageGrid:VImageGrid.default},setup:function setup(){var relatedMediaStore=Object(related_media.a)(),route=Object(dist_runtime.k)();Object(vue.watch)(route,function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(newRoute){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(newRoute.params.id===relatedMediaStore.mainMediaId){_context.next=3;break}return _context.next=3,relatedMediaStore.fetchMedia("image",newRoute.params.id);case 3:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}(),{immediate:!0});var showRelated=Object(vue.computed)((function(){return media.value.length>0||relatedMediaStore.fetchState.isFetching})),media=Object(vue.computed)((function(){var _a;return null!==(_a=relatedMediaStore.media)&&void 0!==_a?_a:[]})),fetchState=Object(vue.computed)((function(){return relatedMediaStore.fetchState}));return{showRelated:showRelated,media:media,fetchState:fetchState}}}),VImageDetails_VRelatedImagesvue_type_script_lang_ts_=VRelatedImagesvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageDetails_VRelatedImagesvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _vm.showRelated?_c("aside",[_c("h2",{staticClass:"heading-6 md:heading-5 mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("imageDetails.relatedImages"))+"\n  ")]),_vm._v(" "),_c("VImageGrid",{attrs:{images:_vm.media,"is-single-page":!0,"fetch-state":_vm.fetchState,"image-grid-label":_vm.$t("imageDetails.relatedImages").toString()}})],1):_vm._e()}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageGrid:__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedImages",exportName:"default",description:"",tags:{}}},"./src/components/VSearchResultsGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),related_media=__webpack_require__("./src/stores/media/related-media.ts"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VImageCell/VImageCell.vue"),VSearchResultsGrid_VImageGridvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"ImageGrid",components:{VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{type:Array,default:function _default(){return[]}},isSinglePage:{type:Boolean,required:!0},fetchState:{type:Object,required:!0},imageGridLabel:{type:String,required:!0}},setup:function setup(props){var searchStore=Object(search.b)(),searchTerm=Object(vue.computed)((function(){return searchStore.searchTerm}));return{isError:Object(vue.computed)((function(){return null!==props.fetchState.fetchingError})),searchTerm:searchTerm,relatedTo:Object(vue.computed)((function(){return props.isSinglePage?Object(related_media.a)().mainMediaId:null}))}}}),componentNormalizer=(__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=5e9507e2&prod&scoped=true&lang=css&"),__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VSearchResultsGrid_VImageGridvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{staticClass:"pt-2 sm:pt-0"},[!_vm.images||_vm.images.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"image"}}),_vm._v(" "),_c("ol",{staticClass:"image-grid flex flex-wrap gap-4",attrs:{"aria-label":_vm.imageGridLabel}},_vm._l(_vm.images,(function(image){return _c("VImageCell",{key:image.id,attrs:{image:image,"search-term":_vm.searchTerm,"aspect-ratio":"intrinsic","related-to":_vm.relatedTo}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_vm.isSinglePage?_vm._e():_c("footer",{staticClass:"pt-4"},[_c("VLoadMore")],1)],1)}),[],!1,null,"5e9507e2",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VImageCell:__webpack_require__("./src/components/VImageCell/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"ImageDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isSinglePage",description:'VImageGrid is used for the search grid and the related images.\nIn the related images, it is just a single page of results without the\n"Load More" button, and in the search grid it is a grid that can load\nmore images on the "Load More" button click.',type:{name:"boolean"},required:!0},{name:"fetchState",type:{name:"FetchState | FetchState<NuxtError>"},required:!0},{name:"imageGridLabel",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=5e9507e2&prod&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=5e9507e2&prod&scoped=true&lang=css&")}}]);