!function(s){function n(n){for(var o,e,r=n[0],a=n[1],v=n[2],l=0,g=[];l<r.length;l++)e=r[l],Object.prototype.hasOwnProperty.call(i,e)&&i[e]&&g.push(i[e][0]),i[e]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(s[o]=a[o]);for(d&&d(n);g.length;)g.shift()();return c.push.apply(c,v||[]),t()}function t(){for(var s,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var a=t[r];0!==i[a]&&(o=!1)}o&&(c.splice(n--,1),s=e(e.s=t[0]))}return s}var o={},i={0:0},c=[];function e(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return s[n].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=s,e.c=o,e.d=function(s,n,t){e.o(s,n)||Object.defineProperty(s,n,{enumerable:!0,get:t})},e.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,n){if(1&n&&(s=e(s)),8&n)return s;if(4&n&&"object"==typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&n&&"string"!=typeof s)for(var o in s)e.d(t,o,function(n){return s[n]}.bind(null,o));return t},e.n=function(s){var n=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(n,"a",n),n},e.o=function(s,n){return Object.prototype.hasOwnProperty.call(s,n)},e.p="";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=n,r=r.slice();for(var v=0;v<r.length;v++)n(r[v]);var d=a;c.push([0,1]),t()}({"/7QA":function(s,n,t){"use strict";t.r(n);var o=t("Kw5r"),i=t("YjGw"),c=t.n(i),e={props:{token:Object},created(){}},r=(t("nCIP"),t("KHd+")),a={components:{TokenItem:Object(r.a)(e,(function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"token-item col content-center"},[this.token.image?n("img",{staticClass:"token-item__img",attrs:{src:this.token.image}}):n("div",{staticClass:"token-item__img"},[this._v("Image not found")]),this._v(" "),n("h3",{staticClass:"text-secondary"},[this._v(this._s(this.token.symbol))])])}),[],!1,null,"d7003eb0",null).exports},created(){this.tokens=c.a}},v=(t("qKwF"),Object(r.a)(a,(function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"root col content-center mt-20px"},[n("h1",{staticClass:"text-primary"},[this._v("Polygon Token Assets")]),this._v(" "),n("div",{staticClass:"row xs-12 mt-20px"},this._l(this.tokens,(function(s){return n("token-item",{key:s.icon,attrs:{token:s}})})),1)])}),[],!1,null,"7ef4f064",null).exports),d=(t("NfV0"),function(s){try{var n="file-loader?name=assets/"+s+"!@maticnetwork/token-assets/"+s;console.log(n);return t("8A5I")("./"+s)}catch(s){return console.error(s),{default:""}}});for(var l in c.a)c.a[l].image=d(c.a[l].icon).default;new o.a({render:function(s){return s(v)},el:"#app",mounted:function(){}})},0:function(s,n,t){s.exports=t("/7QA")},"8A5I":function(s,n,t){var o={"./README.md":"DQbb","./build":"p0zB","./build/":"p0zB","./build/all":"xtEM","./build/all.ts":"xtEM","./build/atri":"a8UN","./build/atri.ts":"a8UN","./build/index":"p0zB","./build/index.ts":"p0zB","./build/kai":"TQdZ","./build/kai.ts":"TQdZ","./build/matic":"NzG1","./build/matic.ts":"NzG1","./dist/lib":"oL+v","./dist/lib.commonjs2":"uA1A","./dist/lib.commonjs2.js":"uA1A","./dist/lib.commonjs2.js.map":"Re23","./dist/lib.js":"oL+v","./dist/lib.js.map":"j2Xp","./dist/ts/all.d":"6lwc","./dist/ts/all.d.ts":"6lwc","./dist/ts/atri.d":"EBUL","./dist/ts/atri.d.ts":"EBUL","./dist/ts/index.d":"0/Do","./dist/ts/index.d.ts":"0/Do","./dist/ts/kai.d":"wT16","./dist/ts/kai.d.ts":"wT16","./dist/ts/matic.d":"T40Q","./dist/ts/matic.d.ts":"T40Q","./docs/install_lib":"pd+w","./docs/install_lib.js":"pd+w","./docs/package-lock.json":"jGV2","./docs/package.json":"ntA8","./docs/src":"6tb1","./docs/src/":"6tb1","./docs/src/components/root":"b/rb","./docs/src/components/root.vue":"b/rb","./docs/src/components/token-item":"1Lcw","./docs/src/components/token-item.vue":"1Lcw","./docs/src/extra/vue.d":"DbSL","./docs/src/extra/vue.d.ts":"DbSL","./docs/src/index":"6tb1","./docs/src/index.html":"NJIw","./docs/src/index.ts":"6tb1","./docs/src/utils":"5lOL","./docs/src/utils/":"5lOL","./docs/src/utils/get_image":"wkAu","./docs/src/utils/get_image.js":"wkAu","./docs/src/utils/index":"5lOL","./docs/src/utils/index.js":"5lOL","./docs/tsconfig.json":"17CG","./docs/webpack.config":"aKYt","./docs/webpack.config.js":"aKYt","./icons/0xMR.svg":"2Ug9","./icons/AAVE.svg":"64K5","./icons/AC.svg":"jf8T","./icons/ADX.svg":"7QJT","./icons/AGA.svg":"7Kgp","./icons/ATRI.svg":"N47r","./icons/BID.svg":"uzh4","./icons/BS1.svg":"RyBC","./icons/BTC2x-FLI.svg":"nkd1","./icons/BZN.svg":"vkCD","./icons/CTSI.svg":"UYQK","./icons/CUM.svg":"1KYA","./icons/CVP-1.svg":"ohTA","./icons/CVP.svg":"ykOw","./icons/DAFI.svg":"HBfW","./icons/DAM.svg":"dlA+","./icons/DAOfi.svg":"VQdK","./icons/DEV.svg":"QTqN","./icons/DHT.svg":"CJnd","./icons/DMT.svg":"vh9H","./icons/DPR.svg":"zpl9","./icons/DUST.svg":"anlg","./icons/EASY2.svg":"RA1L","./icons/EZ.svg":"EAhr","./icons/FGH.svg":"45fk","./icons/FORTH.svg":"tzXK","./icons/GCR.svg":"Gxg1","./icons/GLCH.svg":"lHT8","./icons/GRT.svg":"Lcpp","./icons/HXN.svg":"GMN+","./icons/ICE.svg":"Uy6l","./icons/INXT.svg":"YWbk","./icons/KAI.svg":"VUCT","./icons/KTN.svg":"C+Jh","./icons/LIT.svg":"YWmF","./icons/LPT.svg":"Pbvc","./icons/LUNA.svg":"wBcc","./icons/MBC.svg":"Ztfb","./icons/MEGA.svg":"66J5","./icons/MNE.svg":"7YiQ","./icons/MOD.svg":"Sfvw","./icons/NANJ.svg":"6GsE","./icons/NBU.svg":"eoe0","./icons/NDX.svg":"QImd","./icons/NFTP.svg":"BN0Y","./icons/NORD-1.svg":"qhbJ","./icons/NORD.svg":"WaZu","./icons/OMNIUNIT.svg":"4v6e","./icons/PAR.svg":"HLjT","./icons/PASS.svg":"GNnS","./icons/PRO.svg":"KEWC","./icons/QUICK.svg":"P6aR","./icons/RAMP.svg":"x5Hx","./icons/REN.svg":"1z2h","./icons/RFuel.svg":"VoYc","./icons/RLC.svg":"Wo2b","./icons/ROUTE.svg":"3d/b","./icons/SAKE.svg":"n3aG","./icons/SAND.svg":"9b23","./icons/SOAR.svg":"Mq5r","./icons/SONG.svg":"7Z4B","./icons/SUPERBID.svg":"UAxF","./icons/SX.svg":"BaqR","./icons/TEL.svg":"93nn","./icons/TORN.svg":"Gy4F","./icons/UMBR.svg":"U8U0","./icons/VIDYA.svg":"bQgc","./icons/VISION.svg":"iuxH","./icons/WAIF.svg":"BXq/","./icons/WBTC-1.svg":"LNys","./icons/WBTC.svg":"UgTn","./icons/WETH.svg":"wypH","./icons/WRX.svg":"STQg","./icons/WSTA.svg":"NM7g","./icons/YOP.svg":"gcnw","./icons/eQUAD.svg":"oyvP","./icons/eRSDL.svg":"tYPk","./icons/iFUND.svg":"j8vd","./icons/mLINK.svg":"ZByK","./icons/renDOGE.svg":"rKa+","./icons/sETH2.svg":"B4TY","./icons/wCELO.svg":"JmU+","./icons/wNXM.svg":"SBMU","./icons/٨.svg":"+JFS","./package.json":"ztfH","./src/build":"Eu68","./src/build.js":"Eu68","./src/list":"xGiY","./src/list.js":"xGiY","./tsconfig.json":"Q7n1","./webpack.config":"Unw1","./webpack.config.js":"Unw1","./webpack/webpack.src.config":"/EAL","./webpack/webpack.src.config.js":"/EAL"};function i(s){var n=c(s);return t(n)}function c(s){if(!t.o(o,s)){var n=new Error("Cannot find module '"+s+"'");throw n.code="MODULE_NOT_FOUND",n}return o[s]}i.keys=function(){return Object.keys(o)},i.resolve=c,s.exports=i,i.id="8A5I"},P8Jv:function(s,n,t){var o=t("ZLh8");"string"==typeof o&&(o=[[s.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(s.exports=o.locals)},SYdb:function(s,n,t){var o=t("bhzE");"string"==typeof o&&(o=[[s.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(s.exports=o.locals)},ZLh8:function(s,n,t){(s.exports=t("JPst")(!1)).push([s.i,"\n.token-item[data-v-d7003eb0] {\n  border: 1px solid;\n  padding: 10px 30px;\n}\n.token-item__img[data-v-d7003eb0] {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n",""])},bhzE:function(s,n,t){(s.exports=t("JPst")(!1)).push([s.i,"\n.root[data-v-7ef4f064]{\n}\n",""])},nCIP:function(s,n,t){"use strict";t("P8Jv")},qKwF:function(s,n,t){"use strict";t("SYdb")}});