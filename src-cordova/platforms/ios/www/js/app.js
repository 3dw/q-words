(function(e){function n(n){for(var o,a,l=n[0],c=n[1],s=n[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(n);while(p.length)p.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var l=t[a];0!==i[l]&&(o=!1)}o&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},a={1:0},i={1:0},r=[];function l(e){return c.p+"js/"+({}[e]||e)+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{2:"51593271",3:"fbfc200a",4:"927d4902",5:"6e3961ac",6:"b7ed41c2",7:"eb73a987",8:"b27cfb6d",9:"0991ccb9",10:"eb6b72c9",11:"31d6cfe0",12:"31d6cfe0"}[e]+".css",i=c.p+o,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var s=r[l],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===i))return n()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){s=p[l],d=s.getAttribute("data-href");if(d===o||d===i)return n()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=n,u.onerror=function(n){var o=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],u.parentNode.removeChild(u),t(r)},u.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=l(e);var p=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(u);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,t[1](p)}i[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var u=d;r.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var o=t("306c"),a=t.n(o);a.a},"2f39":function(e,n,t){"use strict";t.r(n);t("7d6e"),t("e54f"),t("62f2"),t("7e6d");var o=t("2b0e"),a=t("b05d"),i=t("cb32"),r=t("f09f"),l=t("a370"),c=t("4b7e"),s=t("8169"),d=t("4d5a"),p=t("e359"),u=t("7ff0"),h=t("9404"),m=t("09e3"),f=t("9989"),g=t("9564"),_=t("65c6"),y=t("6ac5"),v=t("9c40"),w=t("e7a9"),b=t("0016"),S=t("1c1c"),Q=t("6b1d"),O=t("27f9"),P=t("66e5"),k=t("4074"),I=t("0170"),J=t("3786"),x=t("ddd8"),N=t("714f"),C=t("2a19"),T=t("18d6");o["a"].use(a["a"],{config:{cordova:{iosStatusBarPadding:!0,backButtonExit:!0}},components:{QAvatar:i["a"],QCard:r["a"],QCardSection:l["a"],QCardActions:c["a"],QChatMessage:s["a"],QLayout:d["a"],QHeader:p["a"],QFooter:u["a"],QDrawer:h["a"],QPageContainer:m["a"],QPage:f["a"],QToggle:g["a"],QToolbar:_["a"],QToolbarTitle:y["a"],QBtn:v["a"],QBtnGroup:w["a"],QIcon:b["a"],QList:S["a"],QLinearProgress:Q["a"],QInput:O["a"],QItem:P["a"],QItemSection:k["a"],QItemLabel:I["a"],QRadio:J["a"],QSelect:x["a"]},directives:{Ripple:N["a"]},plugins:{Notify:C["a"],LocalStorage:T["a"]}});var L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},j=[],G={name:"App",data(){return{}}},E=G,B=(t("034f"),t("2877")),A=Object(B["a"])(E,L,j,!1,null,null,null),M=A.exports,W=t("8c4f");const q=[{path:"/",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"f241")),children:[{path:"",component:()=>t.e(7).then(t.bind(null,"8b24"))},{path:"w/:id",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"d345"))},{path:"pair",component:()=>t.e(4).then(t.bind(null,"3125"))},{path:"edit",component:()=>t.e(12).then(t.bind(null,"70e2"))},{path:"name",component:()=>t.e(3).then(t.bind(null,"6806"))},{path:"fishing",component:()=>t.e(2).then(t.bind(null,"d3ce"))},{path:"spin",component:()=>t.e(5).then(t.bind(null,"b48c"))},{path:"write",component:()=>t.e(6).then(t.bind(null,"317a"))},{path:"block",component:()=>t.e(9).then(t.bind(null,"5dbe"))}]}];q.push({path:"*",component:()=>t.e(11).then(t.bind(null,"e51e"))});var z=q;o["a"].use(W["a"]);var D=function(){const e=new W["a"]({scrollBehavior:()=>({x:0,y:0}),routes:z,mode:"hash",base:""});return e},Y=async function(){const e="function"===typeof D?await D({Vue:o["a"]}):D,n={router:e,render:e=>e(M),el:"#q-app"};return{app:n,router:e}},F=t("a925"),R={"/":"Words Game","/edit":"Editor","/contact":"Contact","/pair":"Pairing Game","/fishing":"Fishing Game","/spin":"Spinning Game","/name":"Recongnizing Game","/privacy":"Privacy","/write":"Writing Game",write_game:"Writing Game",write_note:"Please write down the word",privacy_note:'Privacy Notice: All photos and materials you store in the "Photo Game" are stored only on your machine, independent of others, and developers will not collect them. ',privacy:"Privacy",lang:"lang",title:"Photo Game",intro_0:"Do you have a child learning Chinese?",intro_1:"You may custom your own words to let them rembemer them.",failed:"Action failed",success:"Action was successful",home:"home",pair:"pair",pair_game:"Pair Game",pair_note:"Tap an image when both are same",speed:"speed",img_vs_text:"name vs. image",game:"game",name:"name",insert_name:"insert name",contact:"contact",setting:"setting",edit:"Edit",importJSON:"Import JSON file",genJSON:"Generate JSON file",add:"add",delete:"x",hide:"hide",phone:"phone","e-mail":"e-mail",name_game:"Recognization","who_is_this?":"Who is this one？",spin_game:"Spinning Game",spin_note:"Click image when it turn to center",block_game:"Block Game","3d_spin":"3D spin",fishing_game:"Fishing Game",fishing_note:"Click and find the same card pair","good!":"good!",memory_mode:"Memory mode",human_vs_bot:"challenge John","john wins!":"John wins!",bot_level:"John level","hello! I'm John":"Hi, I'm John","I like to play with you.":"I like to play with you.","Let's play":"Let's play","I'm thinking...":"I'm thinking...","Be relexed...":"Be relexed...","I win!":"I win!","You win!":"You win!","Type and Shoot":"Type and Shoot",Shoot:"Shoot"},H={"/":"認字遊戲","/edit":"編輯器","/contact":"聯絡方式","/pair":"配對遊戲","/fishing":"釣魚遊戲","/spin":"旋轉遊戲","/name":"認人遊戲","/privacy":"隱私權","/write":"寫字遊戲",write_game:"寫字遊戲",write_note:"請寫出左側的字",privacy:"隱私權",privacy_note:"隱私權說明：所有您儲存於「認照片遊戲」中的照片和資料只儲存在您的機器中，和其他人是獨立的，開發者也不會收集它們。",lang:"語言",title:"認字遊戲",intro_0:"您家中有學認字的小朋友嗎？",intro_1:"您可以輸入自己的字庫，幫助小朋友記得單字。",failed:"失敗",success:"成功",home:"首頁",pair:"配對",pair_game:"配對遊戲",block_game:"方塊遊戲",pair_note:"出現同一字時，請按其中一張卡",speed:"速度",img_vs_text:"字配圖",game:"遊戲",setting:"設定",edit:"編輯",contact:"聯絡",phone:"電話","e-mail":"電子郵件",delete:"刪除",hide:"隱藏",name:"名字",insert_name:"輸入名字",name_game:"認人遊戲",add:"新增",importJSON:"匯入JSON檔",genJSON:"產生JSON檔",update:"更新","who_is_this?":"這是誰呀？","who_is_missing?":"誰不見了？",spin_game:"旋轉遊戲",spin_note:"轉到正中間時請按圖","3d_spin":"8字旋轉",fishing_game:"釣魚遊戲",fishing_note:"點擊上下排卡片，找出相同的","good!":"讚!",memory_mode:"記憶模式",human_vs_bot:"挑戰老江","john wins!":"老江贏了",bot_level:"老江等級","hello! I'm John":"嗨，我是老江","I like to play with you.":"我喜歡和你玩","Let's play":"來玩吧","I'm thinking...":"我在想...","Be relexed...":"放輕鬆...","I win!":"我贏了!","You win!":"你贏了!","Type and Shoot":"打字射擊",Shoot:"射擊"},V={"/":"认字游戏","/edit":"编辑器","/contact":"联络方式","/pair":"配对游戏","/fishing":"钓鱼游戏","/spin":"旋转游戏","/name":"认人游戏","/privacy":"隐私权","/write":"写字游戏",write_game:"写字游戏",write_note:"請写出左側的字",privacy:"隐私权",privacy_note:"隐私权说明：所有您储存于「认照片游戏」中的照片和资料只储存在您的机器中，和其他人是独立的，开发者也不会收集它们。 ",lang:"语言",title:"认字游戏",intro_0:"您家中有学认字的小朋友吗？",intro_1:"您可以输入自己的字库，帮助小朋友记得单字。",failed:"失败",success:"成功",home:"首页",pair:"配对",pair_game:"配对游戏",pair_note:"出现同一字时，请按其中一张卡",block_game:"方塊游戏",speed:"速度",img_vs_text:"字配图",game:"游戏",setting:"设定",edit:"编辑",contact:"联络",phone:"电话","e-mail":"电子邮件",delete:"删除",hide:"隐藏",name:"名字",insert_name:"输入名字",name_game:"认人游戏",add:"新增",importJSON:"汇入JSON档",genJSON:"产生JSON档",update:"更新","who_is_this?":"这是谁呀？","who_is_missing?":"谁不见了？",spin_game:"旋转游戏",spin_note:"转到正中间时请按图","3d_spin":"8字旋转",fishing_game:"钓鱼游戏",fishing_note:"点击上下排卡片，找出相同的","good!":"讚!",memory_mode:"记忆模式",human_vs_bot:"挑战老江","john wins!":"老江赢了",bot_level:"老江等级","hello! I'm John":"嗨，我是老江","I like to play with you.":"我喜欢和你玩","Let's play":"来玩吧","I'm thinking...":"我在想...","Be relexed...":"放轻松...","I win!":"我赢了!","You win!":"你赢了!","Type and Shoot":"打字射擊",Shoot:"射擊"},$={"en-us":R,"zh-TW":H,"zh-CN":V},K=t("e3c4"),U=t.n(K),X=t("bc3a"),Z=t.n(X);o["a"].prototype.$axios=Z.a;var ee=async({app:e,Vue:n})=>{n.use(F["a"]),n.use(U.a),e.i18n=new F["a"]({locale:"zh-TW",fallbackLocale:"en-us",messages:$})};t("a0db");async function ne(){const{app:e,router:n}=await Y();let t=!0;const a=e=>{t=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),r=[ee];for(let c=0;!0===t&&c<r.length;c++)if("function"===typeof r[c])try{await r[c]({app:e,router:n,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!1!==t&&document.addEventListener("deviceready",()=>{o["a"].prototype.$q.cordova=window.cordova,new o["a"](e)},!1)}ne()},"306c":function(e,n,t){},"7e6d":function(e,n,t){}});