(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0ac2":function(t,s,i){"use strict";var e=i("861b"),n=i.n(e);n.a},2298:function(t,s,i){"use strict";var e=i("4af0"),n=i.n(e);n.a},"4af0":function(t,s,i){},"7c0a":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page"},[e("div",{staticClass:"ui image card"},[e("img",{attrs:{src:i("a5aa")}}),e("h4",{staticClass:"text-white shadow"},[t._v(t._s(t.$t("john wins!")))])])])])},n=[],a={name:"win",data:function(){return{}}},o=a,c=(i("0ac2"),i("2877")),r=Object(c["a"])(o,e,n,!1,null,"22f9480a",null);s["a"]=r.exports},"7d56":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page"},[e("div",{staticClass:"ui image card"},[e("img",{attrs:{src:i("984c")}}),e("h1",{staticClass:"text-white shadow"},[t._v(t._s(t.$t("good!")))])])])])},n=[],a={name:"win",data:function(){return{}}},o=a,c=(i("2298"),i("2877")),r=Object(c["a"])(o,e,n,!1,null,"1a3cb920",null);s["a"]=r.exports},"861b":function(t,s,i){},"984c":function(t,s,i){t.exports=i.p+"img/th.jpg"},a5aa:function(t,s,i){t.exports=i.p+"img/john_1.jpg"},b9c9:function(t,s,i){t.exports=i.p+"img/john.png"},be50:function(t,s,i){},bea5:function(t,s,i){"use strict";var e=i("be50"),n=i.n(e);n.a},d3ce:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{attrs:{padding:""}},[e("q-toolbar",[e("q-toolbar-title",[t._v("\n      "+t._s(t.$t("fishing_note"))+"\n    ")])],1),t.human_vs_bot?e("q-toolbar",[e("q-avatar",[e("img",{attrs:{src:i("b9c9")}})]),e("q-linear-progress",{staticClass:"q-mt-md",staticStyle:{height:"25px"},attrs:{stripe:"",rounded:"",value:t.progress,color:t.progress>.62?"red":"blue"}})],1):t._e(),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"row"},t._l(t.fishs1,(function(s,i){return e("div",{key:i,staticClass:"col",class:[t.memory&&t.face0!=i?"back":"face",s.name?"good":"null",t.face0==i?"focus":"other"]},[e("q-card",{on:{click:function(s){return t.flip(i,0)}}},[e("div",{staticClass:"content"},[e("span",{staticClass:"header"},[t._v(t._s(t.memory&&t.face0!=i?"?":s.name))])])])],1)})),0),e("div",{staticClass:"row"},t._l(t.fishs2,(function(s,i){return e("div",{key:i,staticClass:"col",class:[t.memory&&t.face1!=i?"back":"face",s.name?"good":"null",t.face1==i?"focus":"other"]},[e("q-card",{on:{click:function(s){return t.flip(i,1)}}},[e("div",{staticClass:"content"},[e("span",{staticClass:"header"},[t._v(t._s(t.memory&&t.face1!=i?"?":s.name))])])])],1)})),0)]),e("span",[t._v(t._s(t.$t("memory_mode"))+":")]),e("q-toggle",{attrs:{color:"green"},model:{value:t.memory,callback:function(s){t.memory=s},expression:"memory"}}),e("win",{directives:[{name:"show",rawName:"v-show",value:t.winning,expression:"winning"}]}),e("john-win",{directives:[{name:"show",rawName:"v-show",value:t.loosing,expression:"loosing"}]})],1)},n=[],a=(i("7f7f"),i("7d56")),o=i("7c0a"),c={name:"Fishing",props:["card_list","human_vs_bot","bot_level"],components:{win:a["a"],johnWin:o["a"]},data:function(){return{w:!1,progress:.1,winning:!1,loosing:!1,memory:!0,fishs1:[],fishs2:[],face0:-1,face1:-1}},methods:{flip:function(t,s){0!==s||this.w||(this.face0=t),1!==s||this.w||(this.face1=t),!this.w&&this.fishs1[this.face0]&&this.fishs2[this.face1]&&this.fishs1[this.face0].name===this.fishs2[this.face1].name?(this.w=!0,setTimeout(this.remove,1e3)):!this.w&&this.face0>-1&&this.face1>-1&&(this.w=!0,setTimeout(this.flipback,1e3))},isWin:function(){for(var t=!0,s=0;s<this.fishs1.length;s++)""!==this.fishs1[s].img&&(t=!1);return t},remove:function(){this.fishs1[this.face0]={img:"",name:""},this.fishs2[this.face1]={img:"",name:""},this.flipback(),this.isWin()&&(this.win(),setTimeout(this.reset,3e3))},flipback:function(){this.face0=-1,this.face1=-1,this.w=!1},reset:function(){this.fishs1=this.card_list.filter((function(t){return!t.hide})).slice().sort((function(){return Math.random()-.5})).slice(0,4),this.fishs2=this.fishs1.filter((function(t){return!t.hide})).slice().sort((function(){return Math.random()-.5})),this.winning=!1,this.loosing=!1,this.progress=0,this.$emit("johnSay","Be relexed...")},win:function(){this.winning=!0,this.$emit("johnSay","You win!")},loose:function(){this.loosing=!0,this.$emit("johnSay","I win!"),setTimeout(this.reset,2e3)},go:function(){this.winning||this.loosing||(this.progress+=this.bot_level/200,this.progress>=1&&this.human_vs_bot&&this.loose())}},mounted:function(){setInterval(this.go,500),setTimeout(this.reset,500)}},r=c,h=(i("bea5"),i("2877")),f=Object(h["a"])(r,e,n,!1,null,null,null);s["default"]=f.exports}}]);