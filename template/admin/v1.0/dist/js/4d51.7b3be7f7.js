(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4d51"],{"4d51":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d2-multiple-page-control-group",attrs:{flex:""}},[n("div",{staticClass:"d2-multiple-page-control-content",attrs:{"flex-box":"1"}},[n("div",{staticClass:"d2-multiple-page-control-content-inner"},[n("d2-contextmenu",{attrs:{visible:t.contextmenuFlag,x:t.contentmenuX,y:t.contentmenuY},on:{"update:visible":function(e){t.contextmenuFlag=e}}},[n("d2-contextmenu-list",{attrs:{menulist:"index"===t.tagName?t.contextmenuListIndex:t.contextmenuList},on:{rowClick:t.contextmenuClick}})],1),n("el-tabs",{staticClass:"d2-multiple-page-control",attrs:{value:t.current,type:"card",closable:!0},on:{"tab-click":t.handleClick,edit:t.handleTabsEdit},nativeOn:{contextmenu:function(e){return t.handleContextmenu(e)}}},t._l(t.opened,function(t,e){return n("el-tab-pane",{key:e,attrs:{label:t.meta.title||"未命名",name:t.name}})}))],1)]),n("div",{staticClass:"d2-multiple-page-control-btn",attrs:{"flex-box":"0"}},[n("el-dropdown",{attrs:{size:"default","split-button":""},on:{click:t.handleControlBtnClick,command:function(e){return t.handleControlItemClick(e)}}},[n("d2-icon",{attrs:{name:"times-circle"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"left"}},[n("d2-icon",{staticClass:"d2-mr-10",attrs:{name:"arrow-left"}}),t._v("\n          关闭左侧\n        ")],1),n("el-dropdown-item",{attrs:{command:"right"}},[n("d2-icon",{staticClass:"d2-mr-10",attrs:{name:"arrow-right"}}),t._v("\n          关闭右侧\n        ")],1),n("el-dropdown-item",{attrs:{command:"other"}},[n("d2-icon",{staticClass:"d2-mr-10",attrs:{name:"times"}}),t._v("\n          关闭其它\n        ")],1),n("el-dropdown-item",{attrs:{command:"all"}},[n("d2-icon",{staticClass:"d2-mr-10",attrs:{name:"times-circle"}}),t._v("\n          全部关闭\n        ")],1)],1)],1)],1)])},l=[],o=(n("7f7f"),n("7514"),n("c93e")),i=n("2f62"),c={components:{D2Contextmenu:function(){return n.e("chunk-45fd").then(n.bind(null,"362c"))},D2ContextmenuList:function(){return n.e("chunk-487b").then(n.bind(null,"609e"))}},data:function(){return{contextmenuFlag:!1,contentmenuX:0,contentmenuY:0,contextmenuListIndex:[{icon:"times-circle",title:"关闭全部",value:"all"}],contextmenuList:[{icon:"arrow-left",title:"关闭左侧",value:"left"},{icon:"arrow-right",title:"关闭右侧",value:"right"},{icon:"times",title:"关闭其它",value:"other"},{icon:"times-circle",title:"关闭全部",value:"all"}],tagName:"index"}},computed:Object(o["a"])({},Object(i["e"])("d2admin/page",["opened","current"])),methods:Object(o["a"])({},Object(i["b"])("d2admin/page",["close","closeLeft","closeRight","closeOther","closeAll"]),{handleContextmenu:function(t){var e=t.target,n=!1;e.className.indexOf("el-tabs__item")>-1?n=!0:e.parentNode.className.indexOf("el-tabs__item")>-1&&(e=e.parentNode,n=!0),n&&(t.preventDefault(),t.stopPropagation(),this.contentmenuX=t.clientX,this.contentmenuY=t.clientY,this.tagName=e.getAttribute("aria-controls").slice(5),this.contextmenuFlag=!0)},contextmenuClick:function(t){this.handleControlItemClick(t,this.tagName)},handleControlItemClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(this.contextmenuFlag=!1);var n={pageSelect:e,vm:this};switch(t){case"left":this.closeLeft(n);break;case"right":this.closeRight(n);break;case"other":this.closeOther(n);break;case"all":this.closeAll(this);break;default:this.$message.error("无效的操作");break}},handleControlBtnClick:function(){this.closeAll(this)},handleClick:function(t,e){var n=this.opened.find(function(e){return e.name===t.name}),a=n.name,l=n.params,o=n.query;n&&this.$router.push({name:a,params:l,query:o})},handleTabsEdit:function(t,e){"remove"===e&&this.close({tagName:t,vm:this})}})},s=c,r=n("2877"),m=Object(r["a"])(s,a,l,!1,null,null,null);m.options.__file="index.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=4d51.7b3be7f7.js.map