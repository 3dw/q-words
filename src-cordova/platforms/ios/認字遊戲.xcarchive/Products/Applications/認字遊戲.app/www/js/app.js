(function(e){function n(n){for(var r,a,c=n[0],s=n[1],u=n[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(n);while(p.length)p.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==i[c]&&(r=!1)}r&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},a={1:0},i={1:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={2:1,3:1,4:1,5:1,6:1,7:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{2:"f91e6f5d",3:"cbf27596",4:"e511cb55",5:"2c38778d",6:"04dd7fc1",7:"f64640d7",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return n()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===i)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),t(o)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=i[e]=[n,t]}));n.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,t[1](p)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var d=l;o.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var r=t("306c"),a=t.n(r);a.a},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),a=t.n(r),i=(t("67c8"),t("96cf"),t("fa84")),o=t.n(i),c=(t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),s=t("b05d"),u=t("cb32"),l=t("f09f"),p=t("a370"),d=t("4b7e"),h=t("8169"),m=t("4d5a"),f=t("e359"),g=t("7ff0"),v=t("9404"),_=t("09e3"),w=t("9989"),y=t("9564"),b=t("65c6"),x=t("6ac5"),k=t("9c40"),S=t("e7a9"),Q=t("0016"),O=t("1c1c"),P=t("6b1d"),I=t("27f9"),J=t("66e5"),N=t("4074"),C=t("0170"),L=t("3786"),j=t("ddd8"),E=t("714f"),G=t("2a19"),T=t("18d6");c["a"].use(s["a"],{config:{cordova:{iosStatusBarPadding:!0,backButtonExit:!0}},components:{QAvatar:u["a"],QCard:l["a"],QCardSection:p["a"],QCardActions:d["a"],QChatMessage:h["a"],QLayout:m["a"],QHeader:f["a"],QFooter:g["a"],QDrawer:v["a"],QPageContainer:_["a"],QPage:w["a"],QToggle:y["a"],QToolbar:b["a"],QToolbarTitle:x["a"],QBtn:k["a"],QBtnGroup:S["a"],QIcon:Q["a"],QList:O["a"],QLinearProgress:P["a"],QInput:I["a"],QItem:J["a"],QItemSection:N["a"],QItemLabel:C["a"],QRadio:L["a"],QSelect:j["a"]},directives:{Ripple:E["a"]},plugins:{Notify:G["a"],LocalStorage:T["a"]}});var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},B=[],M={name:"App",data:function(){return{}}},W=M,q=(t("034f"),t("2877")),z=Object(q["a"])(W,A,B,!1,null,null,null),D=z.exports,Y=t("8c4f"),F=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e(7).then(t.bind(null,"8b24"))}},{path:"pair",component:function(){return t.e(4).then(t.bind(null,"3125"))}},{path:"edit",component:function(){return t.e(10).then(t.bind(null,"70e2"))}},{path:"name",component:function(){return t.e(3).then(t.bind(null,"6806"))}},{path:"fishing",component:function(){return t.e(2).then(t.bind(null,"d3ce"))}},{path:"spin",component:function(){return t.e(5).then(t.bind(null,"b48c"))}},{path:"write",component:function(){return t.e(6).then(t.bind(null,"317a"))}}]}];F.push({path:"*",component:function(){return t.e(9).then(t.bind(null,"e51e"))}});var R=F;c["a"].use(Y["a"]);var H=function(){var e=new Y["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:R,mode:"hash",base:""});return e},V=function(){return $.apply(this,arguments)};function $(){return $=o()(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof H){e.next=6;break}return e.next=3,H({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=H;case 7:return n=e.t0,t={router:n,render:function(e){return e(D)}},t.el="#q-app",e.abrupt("return",{app:t,router:n});case 11:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}var K=t("a925"),U={"/":"Words Game","/edit":"Editor","/contact":"Contact","/pair":"Pairing Game","/fishing":"Fishing Game","/spin":"Spinning Game","/name":"Recongnizing Game","/privacy":"Privacy","/write":"Writing Game",write_game:"Writing Game",write_note:"Please write down the word",privacy_note:'Privacy Notice: All photos and materials you store in the "Photo Game" are stored only on your machine, independent of others, and developers will not collect them. ',privacy:"Privacy",lang:"lang",title:"Photo Game",intro_0:"Do you have a child learning Chinese?",intro_1:"You may custom your own words to let them rembemer them.",failed:"Action failed",success:"Action was successful",home:"home",pair:"pair",pair_game:"Pair Game",pair_note:"Tap an image when both are same",speed:"speed",img_vs_text:"name vs. image",game:"game",name:"name",insert_name:"insert name",contact:"contact",setting:"setting",edit:"Edit",importJSON:"Import JSON file",genJSON:"Generate JSON file",add:"add",delete:"x",hide:"hide",phone:"phone","e-mail":"e-mail",name_game:"Recognization","who_is_this?":"Who is this one？",spin_game:"Spinning Game",spin_note:"Click image when it turn to center","3d_spin":"3D spin",fishing_game:"Fishing Game",fishing_note:"Click and find the same card pair","good!":"good!",memory_mode:"Memory mode",human_vs_bot:"challenge John","john wins!":"John wins!",bot_level:"John level","hello! I'm John":"Hi, I'm John","I like to play with you.":"I like to play with you.","Let's play":"Let's play","I'm thinking...":"I'm thinking...","Be relexed...":"Be relexed...","I win!":"I win!","You win!":"You win!"},X={"/":"認字遊戲","/edit":"編輯器","/contact":"聯絡方式","/pair":"配對遊戲","/fishing":"釣魚遊戲","/spin":"旋轉遊戲","/name":"認人遊戲","/privacy":"隱私權","/write":"寫字遊戲",write_game:"寫字遊戲",write_note:"請寫出左側的字",privacy:"隱私權",privacy_note:"隱私權說明：所有您儲存於「認照片遊戲」中的照片和資料只儲存在您的機器中，和其他人是獨立的，開發者也不會收集它們。",lang:"語言",title:"認字遊戲",intro_0:"您家中有學認字的小朋友嗎？",intro_1:"您可以輸入自己的字庫，幫助小朋友記得單字。",failed:"失敗",success:"成功",home:"首頁",pair:"配對",pair_game:"配對遊戲",pair_note:"出現同一字時，請按其中一張卡",speed:"速度",img_vs_text:"字配圖",game:"遊戲",setting:"設定",edit:"編輯",contact:"聯絡",phone:"電話","e-mail":"電子郵件",delete:"刪除",hide:"隱藏",name:"名字",insert_name:"輸入名字",name_game:"認人遊戲",add:"新增",importJSON:"匯入JSON檔",genJSON:"產生JSON檔",update:"更新","who_is_this?":"這是誰呀？","who_is_missing?":"誰不見了？",spin_game:"旋轉遊戲",spin_note:"轉到正中間時請按圖","3d_spin":"8字旋轉",fishing_game:"釣魚遊戲",fishing_note:"點擊上下排卡片，找出相同的","good!":"讚!",memory_mode:"記憶模式",human_vs_bot:"挑戰老江","john wins!":"老江贏了",bot_level:"老江等級","hello! I'm John":"嗨，我是老江","I like to play with you.":"我喜歡和你玩","Let's play":"來玩吧","I'm thinking...":"我在想...","Be relexed...":"放輕鬆...","I win!":"我贏了!","You win!":"你贏了!"},Z={"/":"认字游戏","/edit":"编辑器","/contact":"联络方式","/pair":"配对游戏","/fishing":"钓鱼游戏","/spin":"旋转游戏","/name":"认人游戏","/privacy":"隐私权","/write":"写字游戏",write_game:"写字游戏",write_note:"請写出左側的字",privacy:"隐私权",privacy_note:"隐私权说明：所有您储存于「认照片游戏」中的照片和资料只储存在您的机器中，和其他人是独立的，开发者也不会收集它们。 ",lang:"语言",title:"认字游戏",intro_0:"您家中有学认字的小朋友吗？",intro_1:"您可以输入自己的字库，帮助小朋友记得单字。",failed:"失败",success:"成功",home:"首页",pair:"配对",pair_game:"配对游戏",pair_note:"出现同一字时，请按其中一张卡",speed:"速度",img_vs_text:"字配图",game:"游戏",setting:"设定",edit:"编辑",contact:"联络",phone:"电话","e-mail":"电子邮件",delete:"删除",hide:"隐藏",name:"名字",insert_name:"输入名字",name_game:"认人游戏",add:"新增",importJSON:"汇入JSON档",genJSON:"产生JSON档",update:"更新","who_is_this?":"这是谁呀？","who_is_missing?":"谁不见了？",spin_game:"旋转游戏",spin_note:"转到正中间时请按图","3d_spin":"8字旋转",fishing_game:"钓鱼游戏",fishing_note:"点击上下排卡片，找出相同的","good!":"讚!",memory_mode:"记忆模式",human_vs_bot:"挑战老江","john wins!":"老江赢了",bot_level:"老江等级","hello! I'm John":"嗨，我是老江","I like to play with you.":"我喜欢和你玩","Let's play":"来玩吧","I'm thinking...":"我在想...","Be relexed...":"放轻松...","I win!":"我赢了!","You win!":"你赢了!"},ee={"en-us":U,"zh-TW":X,"zh-CN":Z},ne=t("e3c4"),te=t.n(ne),re=function(){var e=o()(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.app,r=n.Vue,r.use(K["a"]),r.use(te.a),t.i18n=new K["a"]({locale:"zh-TW",fallbackLocale:"en-us",messages:ee});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();t("a0db");function ae(){return ie.apply(this,arguments)}function ie(){return ie=o()(a.a.mark((function e(){var n,t,r,i,o,s,u,l;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:n=e.sent,t=n.app,r=n.router,i=!0,o=function(e){i=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),u=[re],l=0;case 10:if(!(!0===i&&l<u.length)){e.next=28;break}if("function"===typeof u[l]){e.next=13;break}return e.abrupt("continue",25);case 13:return e.prev=13,e.next=16,u[l]({app:t,router:r,Vue:c["a"],ssrContext:null,redirect:o,urlPath:s});case 16:e.next=25;break;case 18:if(e.prev=18,e.t0=e["catch"](13),!e.t0||!e.t0.url){e.next=23;break}return window.location.href=e.t0.url,e.abrupt("return");case 23:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 25:l++,e.next=10;break;case 28:if(!1!==i){e.next=30;break}return e.abrupt("return");case 30:document.addEventListener("deviceready",(function(){c["a"].prototype.$q.cordova=window.cordova,new c["a"](t)}),!1);case 31:case"end":return e.stop()}}),e,null,[[13,18]])}))),ie.apply(this,arguments)}ae()},"306c":function(e,n,t){},"7e6d":function(e,n,t){}});