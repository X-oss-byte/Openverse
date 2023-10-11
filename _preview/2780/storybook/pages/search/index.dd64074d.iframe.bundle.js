(window.webpackJsonp=window.webpackJsonp||[]).push([[198,8,9],{"./src/components/VSearchResultsGrid/VAllResultsGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),vue=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),ui=__webpack_require__("./src/stores/ui.ts"),types_media=__webpack_require__("./src/types/media.ts"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VSnackbar=__webpack_require__("./src/components/VSnackbar.vue"),VImageCell=__webpack_require__("./src/components/VImageCell/VImageCell.vue"),VAudioCell=__webpack_require__("./src/components/VSearchResultsGrid/VAudioCell.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VContentLink=__webpack_require__("./src/components/VContentLink/VContentLink.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VSearchResultsGrid_VAllResultsGridvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAllResultsGrid",components:{VSnackbar:VSnackbar.default,VImageCell:VImageCell.default,VAudioCell:VAudioCell.default,VLoadMore:VLoadMore.default,VGridSkeleton:VGridSkeleton.default,VContentLink:VContentLink.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),searchTerm=Object(vue.computed)((function(){return searchStore.searchTerm})),resultsLoading=Object(vue.computed)((function(){return Boolean(mediaStore.fetchState.fetchingError)||mediaStore.fetchState.isFetching||!mediaStore.fetchState.hasStarted})),allMedia=Object(vue.computed)((function(){return mediaStore.allMedia})),isError=Object(vue.computed)((function(){return!!mediaStore.fetchState.fetchingError})),fetchState=Object(vue.computed)((function(){return mediaStore.fetchState})),errorHeader=Object(vue.computed)((function(){var type=i18n.t("browsePage.searchForm.audio");return i18n.t("browsePage.fetchingError",{type:type})})),resultCounts=Object(vue.computed)((function(){return mediaStore.resultCountsPerMediaType})),noResults=Object(vue.computed)((function(){return fetchState.value.isFinished&&0===allMedia.value.length})),uiStore=Object(ui.a)(),snackbar=Object(use_audio_snackbar.a)(),isSidebarVisible=Object(vue.computed)((function(){return uiStore.isFilterVisible}));return{searchTerm:searchTerm,isError:isError,errorHeader:errorHeader,allMedia:allMedia,fetchState:fetchState,resultsLoading:resultsLoading,resultCounts:resultCounts,noResults:noResults,contentLinkPath:function contentLinkPath(mediaType){return searchStore.getSearchPath({type:mediaType})},isSidebarVisible:isSidebarVisible,snackbar:snackbar,isDetail:types_media.a}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAllResultsGridvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",[_vm.noResults?_vm._e():_c("div",{staticClass:"results-grid mb-4 mt-2 grid grid-cols-2 gap-4 md:mt-0"},_vm._l(_vm.resultCounts,(function(_ref){var _ref2=Object(slicedToArray.a)(_ref,2),mediaType=_ref2[0],count=_ref2[1];return _c("VContentLink",{key:mediaType,attrs:{"media-type":mediaType,"search-term":_vm.searchTerm,"results-count":count,to:_vm.contentLinkPath(mediaType)}})})),1),_vm._v(" "),_c("VSnackbar",{attrs:{size:"large","is-visible":_vm.snackbar.isVisible.value}},[_c("i18n",{attrs:{path:"allResults.snackbar.text",tag:"p"},scopedSlots:_vm._u([{key:"spacebar",fn:function fn(){return[_c("kbd",{staticClass:"font-sans"},[_vm._v(_vm._s(_vm.$t("allResults.snackbar.spacebar")))])]},proxy:!0}])})],1),_vm._v(" "),_vm.resultsLoading&&0===_vm.allMedia.length?_c("VGridSkeleton",{attrs:{"is-for-tab":"all"}}):_c("ol",{staticClass:"results-grid grid grid-cols-2 gap-4",class:_vm.isSidebarVisible?"lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",attrs:{"aria-label":_vm.$t("browsePage.aria.results",{query:_vm.searchTerm}).toString()}},[_vm._l(_vm.allMedia,(function(item){return[_vm.isDetail.image(item)?_c("VImageCell",{key:item.id,attrs:{image:item,"search-term":_vm.searchTerm,"aspect-ratio":"square"}}):_vm._e(),_vm._v(" "),_vm.isDetail.audio(item)?_c("VAudioCell",{key:item.id,attrs:{audio:item,"search-term":_vm.searchTerm},on:{interacted:_vm.snackbar.hide,focus:_vm.snackbar.show}}):_vm._e()]}))],2),_vm._v(" "),_c("VLoadMore",{staticClass:"mb-6 mt-4 lg:mb-10"})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VContentLink:__webpack_require__("./src/components/VContentLink/VContentLink.vue").default,VSnackbar:__webpack_require__("./src/components/VSnackbar.vue").default,VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VImageCell:__webpack_require__("./src/components/VImageCell/VImageCell.vue").default,VAudioCell:__webpack_require__("./src/components/VSearchResultsGrid/VAudioCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAllResultsGrid",exportName:"default",description:"",tags:{}}},"./src/components/VSearchResultsGrid/VAudioCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),media=__webpack_require__("./src/constants/media.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var VSearchResultsGrid_VAudioCellvue_type_script_lang_ts_=Object(vue.defineComponent)({components:{VAudioTrack:VAudioTrack.default},inheritAttrs:!1,props:{audio:{type:Object,required:!0},searchTerm:{type:String,required:!0}},setup:function setup(props){var sendCustomEvent=Object(use_analytics.a)().sendCustomEvent;return{sendSelectSearchResultEvent:function sendSelectSearchResultEvent(audio){sendCustomEvent("SELECT_SEARCH_RESULT",{id:audio.id,mediaType:media.b,query:props.searchTerm,provider:audio.provider,relatedTo:null})},sendInteractionEvent:function sendInteractionEvent(data){sendCustomEvent("AUDIO_INTERACTION",_objectSpread(_objectSpread({},data),{},{component:"VAllResultsGrid"}))}}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioCellvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("li",[_c("VAudioTrack",_vm._g(_vm._b({attrs:{audio:_vm.audio,layout:"box","search-term":_vm.searchTerm},on:{interacted:_vm.sendInteractionEvent,mousedown:function mousedown($event){return _vm.sendSelectSearchResultEvent(_vm.audio)}}},"VAudioTrack",_vm.$attrs,!1),_vm.$listeners))],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VAudioCell",description:"",tags:{},props:[{name:"audio",type:{name:"AudioDetail"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0}]}},"./src/composables/use-audio-snackbar.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useAudioSnackbar}));var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),_stores_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stores/ui.ts"),useAudioSnackbar=function useAudioSnackbar(){var isMouseDown=Object(vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1);return{isVisible:Object(vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){return Object(_stores_ui__WEBPACK_IMPORTED_MODULE_1__.a)().areInstructionsVisible})),show:function show(){isMouseDown.value?isMouseDown.value=!1:Object(_stores_ui__WEBPACK_IMPORTED_MODULE_1__.a)().showInstructionsSnackbar()},hide:function hide(){Object(_stores_ui__WEBPACK_IMPORTED_MODULE_1__.a)().hideInstructionsSnackbar()},handleMouseDown:function handleMouseDown(){isMouseDown.value=!0}}}},"./src/pages/search/index.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),VAllResultsGrid=__webpack_require__("./src/components/VSearchResultsGrid/VAllResultsGrid.vue"),pages_searchvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"SearchIndex",components:{VAllResultsGrid:VAllResultsGrid.default}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_searchvue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VAllResultsGrid")}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAllResultsGrid:__webpack_require__("./src/components/VSearchResultsGrid/VAllResultsGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"SearchIndex",exportName:"default",description:"",tags:{}}}}]);