(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d61fc"],{"70e2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("q-list",{attrs:{bordered:"",separator:""}},[n("q-item"),n("q-item",[n("q-item-section",[n("q-input",{attrs:{label:e.$t("insert_name")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("q-item-section",[n("q-btn",{attrs:{color:"green",disable:!e.name},on:{click:function(t){e.addCard(e.name),e.name=""}}},[e._v("\n          "+e._s(e.$t("add"))+"\n        ")])],1)],1),e._l(e.card_list,function(t,i){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,attrs:{clickable:"",active:t.hide}},[n("q-item-section",[e._v(e._s(t.name))]),n("q-item-section",[n("q-btn",{attrs:{color:"red"},on:{click:function(t){return e.removeCard(i)}}},[e._v("\n          "+e._s(e.$t("delete"))+"\n        ")])],1),n("q-item-section",[e._v("\n        "+e._s(e.$t("hide"))+"\n        "),n("q-toggle",{model:{value:t.hide,callback:function(n){e.$set(t,"hide",n)},expression:"c.hide"}})],1)],1)}),n("q-item",[n("q-item-section",[e._v("\n        "+e._s(e.$t("importJSON"))+"\n      ")]),n("q-item-section",[n("input",{attrs:{type:"file",name:"json",id:"json",accept:"application/json"},on:{change:e.importJSON}})])],1)],2)],1)},a=[],r={name:"Edit",props:["card_list"],data:function(){return{url:"",hasImage:!1,name:"",my_card_list:[]}},methods:{addCard:function(e){this.$emit("addCard",e),this.$forceUpdate()},removeCard:function(e){this.$emit("removeCard",e)},hideShow:function(e,t){this.$emit("hideShow",e,t)},exportCards:function(){var e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.card_list)),t=document.getElementById("downloadAnchorElem");t.setAttribute("href",e),t.setAttribute("download","card_list.json"),t.click()},importJSON:function(e){var t=this,n=e.target;if(n.files&&n.files[0]){var i=new FileReader;i.onload=function(e){t.my_card_list=t.card_list.concat(JSON.parse(e.target.result)),t.$emit("saveCards",t.my_card_list)},i.readAsText(n.files[0])}}}},s=r,o=n("2877"),c=Object(o["a"])(s,i,a,!1,null,null,null);t["default"]=c.exports}}]);