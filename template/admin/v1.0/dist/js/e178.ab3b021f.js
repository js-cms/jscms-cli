(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e178"],{e178:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dropdown",{attrs:{placement:"bottom",size:"small"},on:{command:e.handleChange}},[a("el-button",{staticClass:"d2-mr btn-text can-hover",attrs:{type:"text"}},[a("d2-icon",{staticStyle:{"font-size":"16px"},attrs:{name:"font"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"default"}},[a("d2-icon",{staticClass:"d2-mr-5",attrs:{name:e.iconName("default")}}),e._v("默认\n    ")],1),a("el-dropdown-item",{attrs:{command:"medium"}},[a("d2-icon",{staticClass:"d2-mr-5",attrs:{name:e.iconName("medium")}}),e._v("中\n    ")],1),a("el-dropdown-item",{attrs:{command:"small"}},[a("d2-icon",{staticClass:"d2-mr-5",attrs:{name:e.iconName("small")}}),e._v("小\n    ")],1),a("el-dropdown-item",{attrs:{command:"mini"}},[a("d2-icon",{staticClass:"d2-mr-5",attrs:{name:e.iconName("mini")}}),e._v("最小\n    ")],1)],1)],1)},i=[],s=(a("a481"),a("c93e")),o=a("2f62"),d={name:"d2-header-size",computed:Object(s["a"])({},Object(o["e"])("d2admin/size",["value"])),watch:{value:{handler:function(e){if(this.$ELEMENT.size!==e){this.$ELEMENT.size=e,this.pageKeepAliveClean();var t=this.$route,a=t.path,n=t.query;this.$router.replace({path:"/redirect/"+JSON.stringify({path:a,query:n})})}},immediate:!0}},methods:Object(s["a"])({},Object(o["d"])({pageKeepAliveClean:"d2admin/page/keepAliveClean"}),Object(o["b"])({sizeSet:"d2admin/size/set"}),{handleChange:function(e){this.sizeSet(e)},iconName:function(e){return e===this.value?"dot-circle-o":"circle-o"}})},m=d,r=a("2877"),l=Object(r["a"])(m,n,i,!1,null,null,null);l.options.__file="index.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=e178.ab3b021f.js.map