webpackJsonp([41],{1087:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{value:"let a = 1;",mode:"javascript",datas:["javascript","sql","markdown"]}},mounted:function(){},methods:{change:function(){this.value={javascript:"let a = 1;",sql:"select * from user",markdown:"# title"}[this.mode]}},computed:{}}},1212:function(e,t){},1319:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-panel frame-page"},[e._m(0),e._v(" "),s("div",{staticClass:"h-panel-bar"},[s("SwitchList",{attrs:{datas:e.datas},on:{input:e.change},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}})],1),e._v(" "),s("div",{staticClass:"h-panel-body"},[s("CodeEditor",{attrs:{mode:e.mode},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-panel-bar"},[s("span",{staticClass:"h-panel-title"},[e._v("代码编辑器")])])}]},e.exports.render._withStripped=!0},595:function(e,t,s){function n(e){a||s(1212)}var a=!1,o=s(62)(s(1087),s(1319),n,null,null);o.options.__file="/Users/apple/Documents/dev/github/jscms/jscms-admin/src/components/demo-components/components/code-editor.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),o.options.functional,e.exports=o.exports}});