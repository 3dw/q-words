(function(e){function n(n){for(var a,r,c=n[0],s=n[1],u=n[2],l=0,d=[];l<c.length;l++)r=c[l],o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(a=!1)}a&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={17279364:1,"05235cd5":1,"2dcb15e0":1,"3697fa32":1,"827f6a9a":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{17279364:"c33b05df","05235cd5":"a7396762","2d0d61fc":"31d6cfe0","2dcb15e0":"a26ed442","3697fa32":"b663a0b6","4b47640d":"31d6cfe0","5d250345":"31d6cfe0","827f6a9a":"a5662af0"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var a=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),t(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,t){a=o[e]=[n,t]});n.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}o[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var p=l;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var a=t("306c"),r=t.n(a);r.a},"2f39":function(e,n,t){"use strict";t.r(n);var a=t("967e"),r=t.n(a),o=(t("96cf"),t("fa84")),i=t.n(o),c=(t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),s=t("b05d"),u=t("cb32"),l=t("f09f"),d=t("a370"),p=t("4b7e"),f=t("8169"),h=t("4d5a"),m=t("9898"),g=t("07d0"),v=t("f2cc"),_=t("c7a0"),y=t("2ea3"),b=t("9564"),w=t("65c6"),S=t("6ac5"),x=t("9c40"),k=t("8c8f"),Q=t("0016"),O=t("497d"),I=t("6b1d"),J=t("27f9"),P=t("6ab5"),N=t("033f"),C=t("e208"),L=t("3786"),E=t("ddd8"),j=t("714f"),T=t("2a19"),A=t("18d6");c["a"].use(s["a"],{config:{cordova:{iosStatusBarPadding:!0,backButtonExit:!0}},components:{QAvatar:u["a"],QCard:l["a"],QCardSection:d["a"],QCardActions:p["a"],QChatMessage:f["a"],QLayout:h["a"],QHeader:m["a"],QFooter:g["a"],QDrawer:v["a"],QPageContainer:_["a"],QPage:y["a"],QToggle:b["a"],QToolbar:w["a"],QToolbarTitle:S["a"],QBtn:x["a"],QBtnGroup:k["a"],QIcon:Q["a"],QList:O["a"],QLinearProgress:I["a"],QInput:J["a"],QItem:P["a"],QItemSection:N["a"],QItemLabel:C["a"],QRadio:L["a"],QSelect:E["a"]},directives:{Ripple:j["a"]},plugins:{Notify:T["a"],LocalStorage:A["a"]}});var B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},G=[],M={name:"App",data:function(){return{}}},D=M,q=(t("034f"),t("2877")),z=Object(q["a"])(D,B,G,!1,null,null,null),Y=z.exports,F=t("8c4f"),R=[{path:"/",component:function(){return t.e("5d250345").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("3697fa32").then(t.bind(null,"8b24"))}},{path:"pair",component:function(){return t.e("827f6a9a").then(t.bind(null,"3125"))}},{path:"edit",component:function(){return t.e("2d0d61fc").then(t.bind(null,"70e2"))}},{path:"name",component:function(){return t.e("05235cd5").then(t.bind(null,"6806"))}},{path:"fishing",component:function(){return t.e("2dcb15e0").then(t.bind(null,"d3ce"))}},{path:"spin",component:function(){return t.e("17279364").then(t.bind(null,"b48c"))}}]}];R.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var H=R;c["a"].use(F["a"]);var V=function(){var e=new F["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:H,mode:"hash",base:""});return e},W=function(){var e="function"===typeof V?V({Vue:c["a"]}):V,n={el:"#q-app",router:e,render:function(e){return e(Y)}};return{app:n,router:e}},$=t("a925"),K={"/":"Photo Game","/edit":"Editor","/contact":"Contact","/pair":"Pairing Game","/fishing":"Fishing Game","/spin":"Spinning Game","/name":"Recongnizing Game","/privacy":"Privacy",privacy_note:'Privacy Notice: All photos and materials you store in the "Photo Game" are stored only on your machine, independent of others, and developers will not collect them. ',privacy:"Privacy",lang:"lang",title:"Photo Game",intro_0:"Do you have elders in your family?",intro_1:"You may use photos of your family members to let the elders rembemer them.",failed:"Action failed",success:"Action was successful",home:"home",pair:"pair",pair_game:"Pair Game",pair_note:"Tap an image when both are same",speed:"speed",img_vs_text:"name vs. image",game:"game",name:"name",insert_name:"insert name",contact:"contact",setting:"setting",edit:"Edit",importJSON:"Import JSON file",genJSON:"Generate JSON file",add:"add",delete:"x",hide:"hide",phone:"phone","e-mail":"e-mail",name_game:"Recognization","who_is_this?":"Who is this one？",spin_game:"Spinning Game",spin_note:"Click image when it turn to center","3d_spin":"3D spin",fishing_game:"Fishing Game",fishing_note:"Click and find the same card pair","good!":"good!",memory_mode:"Memory mode",human_vs_bot:"challenge John","john wins!":"John wins!",bot_level:"John level","hello! I'm John":"Hi, I'm John","I like to play with you.":"I like to play with you.","Let's play":"Let's play","I'm thinking...":"I'm thinking...","Be relexed...":"Be relexed...","I win!":"I win!","You win!":"You win!"},U={"/":"認照片遊戲","/edit":"編輯器","/contact":"聯絡方式","/pair":"配對遊戲","/fishing":"釣魚遊戲","/spin":"旋轉遊戲","/name":"認人遊戲","/privacy":"隱私權",privacy:"隱私權",privacy_note:"隱私權說明：所有您儲存於「認照片遊戲」中的照片和資料只儲存在您的機器中，和其他人是獨立的，開發者也不會收集它們。",lang:"語言",title:"認字遊戲",intro_0:"您家中有學認字的小朋友嗎？",intro_1:"您可以輸入自己的字庫，幫助小朋友記得單字。",failed:"失敗",success:"成功",home:"首頁",pair:"配對",pair_game:"配對遊戲",pair_note:"出現同一字時，請按其中一張卡",speed:"速度",img_vs_text:"字配圖",game:"遊戲",setting:"設定",edit:"編輯",contact:"聯絡",phone:"電話","e-mail":"電子郵件",delete:"刪除",hide:"隱藏",name:"名字",insert_name:"輸入名字",name_game:"認人遊戲",add:"新增",importJSON:"匯入JSON檔",genJSON:"產生JSON檔",update:"更新","who_is_this?":"這是誰呀？","who_is_missing?":"誰不見了？",spin_game:"旋轉遊戲",spin_note:"轉到正中間時請按圖","3d_spin":"8字旋轉",fishing_game:"釣魚遊戲",fishing_note:"點擊上下排卡片，找出相同的","good!":"讚!",memory_mode:"記憶模式",human_vs_bot:"挑戰老江","john wins!":"老江贏了",bot_level:"老江等級","hello! I'm John":"嗨，我是老江","I like to play with you.":"我喜歡和你玩","Let's play":"來玩吧","I'm thinking...":"我在想...","Be relexed...":"放輕鬆...","I win!":"我贏了!","You win!":"你贏了!"},X={"/":"认照片游戏","/edit":"编辑器","/contact":"联络方式","/pair":"配对游戏","/fishing":"钓鱼游戏","/spin":"旋转游戏","/name":"认人游戏","/privacy":"隐私权",privacy:"隐私权",privacy_note:"隐私权说明：所有您储存于「认照片游戏」中的照片和资料只储存在您的机器中，和其他人是独立的，开发者也不会收集它们。 ",lang:"语言",title:"认字游戏",intro_0:"您家中有学认字的小朋友吗？",intro_1:"您可以输入自己的字库，帮助小朋友记得单字。",failed:"失败",success:"成功",home:"首页",pair:"配对",pair_game:"配对游戏",pair_note:"出现同一字时，请按其中一张卡",speed:"速度",img_vs_text:"字配图",game:"游戏",setting:"设定",edit:"编辑",contact:"联络",phone:"电话","e-mail":"电子邮件",delete:"删除",hide:"隐藏",name:"名字",insert_name:"输入名字",name_game:"认人游戏",add:"新增",importJSON:"汇入JSON档",genJSON:"产生JSON档",update:"更新","who_is_this?":"这是谁呀？","who_is_missing?":"谁不见了？",spin_game:"旋转游戏",spin_note:"转到正中间时请按图","3d_spin":"8字旋转",fishing_game:"钓鱼游戏",fishing_note:"点击上下排卡片，找出相同的","good!":"讚!",memory_mode:"记忆模式",human_vs_bot:"挑战老江","john wins!":"老江赢了",bot_level:"老江等级","hello! I'm John":"嗨，我是老江","I like to play with you.":"我喜欢和你玩","Let's play":"来玩吧","I'm thinking...":"我在想...","Be relexed...":"放轻松...","I win!":"我赢了!","You win!":"你赢了!"},Z={"en-us":K,"zh-TW":U,"zh-CN":X},ee=t("e3c4"),ne=t.n(ee),te=function(){var e=i()(r.a.mark(function e(n){var t,a;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.app,a=n.Vue,a.use($["a"]),a.use(ne.a),t.i18n=new $["a"]({locale:"zh-TW",fallbackLocale:"en-us",messages:Z});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),ae=t("fe3c"),re=t.n(ae),oe=W(),ie=oe.app,ce=oe.router;function se(){return ue.apply(this,arguments)}function ue(){return ue=i()(r.a.mark(function e(){var n,t;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[te],t=0;case 2:if(!(t<n.length)){e.next=20;break}if("function"===typeof n[t]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[t]({app:ie,router:ce,Vue:c["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:t++,e.next=2;break;case 20:document.addEventListener("deviceready",function(){c["a"].prototype.$q.cordova=window.cordova,new c["a"](ie)},!1);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),ue.apply(this,arguments)}document.addEventListener("DOMContentLoaded",function(){re.a.attach(document.body)},!1),se()},"306c":function(e,n,t){},"7e6d":function(e,n,t){}});