(function(e){function t(t){for(var r,i,o=t[0],s=t[1],l=t[2],p=0,b=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},c=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},6066:function(e,t,a){"use strict";a("8e05")},"85ec":function(e,t,a){},"8e05":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r,n=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-main",[a("router-view")],1)],1)],1)},i=[],o=a("d4ec"),s=a("262e"),l=a("2caf"),u=a("2fe1"),p=(a("98db"),Object(u["b"])(r=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(n["a"]))||r),b=p,d=(a("034f"),a("2877")),y=a("6544"),f=a.n(y),v=a("7496"),h=a("f6c4"),m=Object(d["a"])(b,c,i,!1,null,null,null),O=m.exports;f()(m,{VApp:v["a"],VMain:h["a"]});a("b0c0");var j=a("8c4f"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("p",[a("router-link",{attrs:{to:{name:e.ppgpPageName}}},[e._v("Start!")])],1),a("p",[a("router-link",{attrs:{to:{name:e.docPageName}}},[e._v("Documentation (not finished)")])],1)])},g=[],_=a("9ab4"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view")],1)},k=[],P=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(n["a"]);P.id="PPGP",P=Object(_["a"])([u["b"]],P);var K=P,C=K,T=Object(d["a"])(C,w,k,!1,null,null,null),S=T.exports,E=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.ppgpPageName=S.id,e}return a}(n["a"]);E.id="Home",E=Object(_["a"])([u["b"]],E);var $=E,R=$,V=Object(d["a"])(R,x,g,!1,null,null,null),B=V.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.messages,(function(e,t){return a("message-card",{key:t,attrs:{message:e,id:t},on:{"update:message":function(t){e=t}}})})),a("v-btn",{staticClass:"ma-2",on:{click:e.new_msg_in}},[e._v("New In")]),a("v-btn",{staticClass:"ma-2",on:{click:e.new_msg_out}},[e._v("New Out")]),a("div",{attrs:{id:"bottom"}})],2)},A=[],G=a("bee2"),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["in"===e.messageSynced.direction?a("decrypt-box",{attrs:{cipherText:e.messageSynced.cipherText,plainText:e.messageSynced.plainText},on:{"update:cipherText":function(t){return e.$set(e.messageSynced,"cipherText",t)},"update:cipher-text":function(t){return e.$set(e.messageSynced,"cipherText",t)},"update:plainText":function(t){return e.$set(e.messageSynced,"plainText",t)},"update:plain-text":function(t){return e.$set(e.messageSynced,"plainText",t)}}}):a("encrypt-box",{attrs:{cipherText:e.messageSynced.cipherText,plainText:e.messageSynced.plainText},on:{"update:cipherText":function(t){return e.$set(e.messageSynced,"cipherText",t)},"update:cipher-text":function(t){return e.$set(e.messageSynced,"cipherText",t)},"update:plainText":function(t){return e.$set(e.messageSynced,"plainText",t)},"update:plain-text":function(t){return e.$set(e.messageSynced,"plainText",t)}}})],1)},N=[],I=a("1b40"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",[a("v-textarea",{staticClass:"text-body-2",attrs:{solo:"","no-resize":""},model:{value:e.cipher,callback:function(t){e.cipher=t},expression:"cipher"}})],1),a("v-col",[a("v-textarea",{staticClass:"text-body-1",attrs:{solo:""},model:{value:e.plain,callback:function(t){e.plain=t},expression:"plain"}})],1),a("v-col",[a("span",[e._v("Decrypt")])])],1)},z=[],H=(a("d3b7"),a("ddb0"),a("5530")),J=(a("96cf"),a("1da1")),U=a("2f62"),Y=a("5a2b"),q=a("4187"),F=a("e13c");n["a"].use(U["a"]);var Q=Object(Y["createModule"])({namespaced:"store",strict:!1}),W=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.localPubKey="",e.localPriKey="",e.remotePubKey="",e.rawKeysCalculated=!1,e._keyConfig={algorithm:"ECC",option:"ed25519",passphrase:""},e}return Object(G["a"])(a,[{key:"setupCompleted",get:function(){return!!this.localPubKey&&!!this.localPriKey&&!!this.remotePubKey}},{key:"calculate_raw_keys",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q["key"].readArmored(this.localPubKey);case 2:return this.rawLocalPubKey=e.sent.keys,e.next=5,q["key"].readArmored(this.localPriKey);case 5:return this.rawLocalPriKey=e.sent.keys,e.next=8,q["key"].readArmored(this.remotePubKey);case 8:this.rawRemotePubKey=e.sent.keys,this.rawKeysCalculated=!0;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"gen_keypair",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q["generateKey"]({userIds:[{}],passphrase:this._keyConfig.passphrase,curve:"ECC"===this._keyConfig.algorithm?this._keyConfig.option:void 0,numBits:"RSA"===this._keyConfig.algorithm?this._keyConfig.option:void 0});case 2:t=e.sent,this.localPubKey=Object(F["b"])(t.publicKeyArmored),this.localPriKey=t.privateKeyArmored;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"encrypt",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.rawKeysCalculated||this.calculate_raw_keys(),a={message:q["message"].fromText(t),publicKeys:this.rawRemotePubKey,privateKeys:this.rawLocalPriKey},e.next=4,q["encrypt"](a);case 4:return r=e.sent.data,n=Object(F["a"])(r),console.log(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"decrypt",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.rawKeysCalculated||this.calculate_raw_keys(),a=Object(F["c"])(t,"message"),e.next=4,q["message"].readArmored(a);case 4:return e.t0=e.sent,e.t1=this.rawRemotePubKey,e.t2=this.rawLocalPriKey,r={message:e.t0,publicKeys:e.t1,privateKeys:e.t2},e.next=10,q["decrypt"](r);case 10:return e.abrupt("return",e.sent.data);case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(Q);Object(_["a"])([Y["action"]],W.prototype,"calculate_raw_keys",null),Object(_["a"])([Y["action"]],W.prototype,"gen_keypair",null),Object(_["a"])([Y["action"]],W.prototype,"encrypt",null),Object(_["a"])([Y["action"]],W.prototype,"decrypt",null);var X=new U["a"].Store({modules:Object(H["a"])({},Object(Y["extractVuexModule"])(W))}),Z=Object(Y["createProxy"])(X,W),ee=X,te=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(G["a"])(a,[{key:"decrypt",value:function(){var e=this;Z.decrypt(this.cipher).then((function(t){e.plain=t}))}}]),a}(n["a"]);Object(_["a"])([Object(I["b"])("cipherText")],te.prototype,"cipher",void 0),Object(_["a"])([Object(I["b"])("plainText")],te.prototype,"plain",void 0),Object(_["a"])([Object(I["c"])("cipher")],te.prototype,"decrypt",null),te=Object(_["a"])([u["b"]],te);var ae=te,re=ae,ne=a("62ad"),ce=a("0fd9"),ie=a("a844"),oe=Object(d["a"])(re,D,z,!1,null,null,null),se=oe.exports;f()(oe,{VCol:ne["a"],VRow:ce["a"],VTextarea:ie["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",[a("span",[e._v("Encrypt")])]),a("v-col",[a("v-textarea",{staticClass:"text-body-1",attrs:{solo:""},model:{value:e.plain,callback:function(t){e.plain=t},expression:"plain"}})],1),a("v-col",[a("v-textarea",{staticClass:"text-body-2",attrs:{solo:"","no-resize":""},model:{value:e.cipher,callback:function(t){e.cipher=t},expression:"cipher"}})],1)],1)},ue=[],pe=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(G["a"])(a,[{key:"encrypt",value:function(){var e=this;Z.encrypt(this.plain).then((function(t){e.cipher=t}))}}]),a}(n["a"]);Object(_["a"])([Object(I["b"])("plainText")],pe.prototype,"plain",void 0),Object(_["a"])([Object(I["b"])("cipherText")],pe.prototype,"cipher",void 0),Object(_["a"])([Object(I["c"])("plain")],pe.prototype,"encrypt",null),pe=Object(_["a"])([u["b"]],pe);var be=pe,de=be,ye=Object(d["a"])(de,le,ue,!1,null,null,null),fe=ye.exports;f()(ye,{VCol:ne["a"],VRow:ce["a"],VTextarea:ie["a"]});var ve=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(n["a"]);Object(_["a"])([Object(I["b"])("message")],ve.prototype,"messageSynced",void 0),Object(_["a"])([Object(I["a"])()],ve.prototype,"id",void 0),ve=Object(_["a"])([Object(u["b"])({components:{DecryptBox:se,EncryptBox:fe}})],ve);var he=ve,me=he,Oe=Object(d["a"])(me,L,N,!1,null,null,null),je=Oe.exports,xe=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.messages=[],e}return Object(G["a"])(a,[{key:"add_message_card",value:function(e){this.messages.push({plainText:"",cipherText:"",direction:e}),window.scrollTo(0,document.body.scrollHeight)}},{key:"new_msg_in",value:function(){this.add_message_card("in")}},{key:"new_msg_out",value:function(){this.add_message_card("out")}}]),a}(n["a"]);xe.id="EncryptDecrypt",xe=Object(_["a"])([Object(u["b"])({components:{MessageCard:je}})],xe);var ge=xe,_e=ge,we=(a("6066"),a("8336")),ke=Object(d["a"])(_e,M,A,!1,null,"20057d92",null),Pe=ke.exports;f()(ke,{VBtn:we["a"]});var Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Generate new keypair or import from local.")]),a("div",{staticClass:"mb-2"},[a("v-btn",{staticClass:"mx-2",on:{click:e.store.gen_keypair}},[e._v("New")])],1),a("div",{staticClass:"mb-5"},[a("v-btn",{staticClass:"mx-2",attrs:{disabled:""}},[e._v("Import")])],1),a("div",[a("v-row",[a("v-col"),a("v-col",{staticClass:"col-4"},[a("v-textarea",{staticClass:"text-body-2",attrs:{outlined:"",label:"Local Public Key",rows:"6","no-resize":""},model:{value:e.store.localPubKey,callback:function(t){e.$set(e.store,"localPubKey",t)},expression:"store.localPubKey"}})],1),a("v-col",{staticClass:"col-4"},[a("v-textarea",{staticClass:"text-body-2",attrs:{outlined:"",label:"Local Private Key",rows:"6","no-resize":""},model:{value:e.store.localPriKey,callback:function(t){e.$set(e.store,"localPriKey",t)},expression:"store.localPriKey"}})],1),a("v-col")],1)],1),a("p",[e._v("Input remote public key bellow")]),a("div",[a("v-row",[a("v-col"),a("v-col",[a("v-textarea",{staticClass:"text-body-2",attrs:{outlined:"",label:"Remote Public Key"},model:{value:e.store.remotePubKey,callback:function(t){e.$set(e.store,"remotePubKey",t)},expression:"store.remotePubKey"}})],1),a("v-col")],1)],1),a("p",[a("v-btn",{staticClass:"primary",attrs:{disabled:!e.store.setupCompleted},on:{click:e.confirm}},[e._v("Confirm")])],1)])},Ce=[],Te=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.store=Z,e}return Object(G["a"])(a,[{key:"confirm",value:function(){Z.calculate_raw_keys(),this.$router.push({name:Pe.id})}}]),a}(n["a"]);Te.id="KeypairConfig",Te=Object(_["a"])([u["b"]],Te);var Se=Te,Ee=Se,$e=Object(d["a"])(Ee,Ke,Ce,!1,null,"383de1d7",null),Re=$e.exports;f()($e,{VBtn:we["a"],VCol:ne["a"],VRow:ce["a"],VTextarea:ie["a"]}),n["a"].use(j["a"]);var Ve=[{path:"/",name:B.id,component:B},{path:"/ppgp",name:S.id,component:S,beforeEnter:function(e,t,a){e.name!==Re.id?Z.setupCompleted?a():a({name:Re.id}):a()},children:[{path:"",redirect:"keypair"},{path:"keypair",name:Re.id,component:Re},{path:"E&D",name:Pe.id,component:Pe}]}],Be=new j["a"]({mode:"history",base:"/",routes:Ve}),Me=Be,Ae=a("f309");n["a"].use(Ae["a"]);var Ge=new Ae["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Me,store:ee,vuetify:Ge,render:function(e){return e(O)}}).$mount("#app")},e13c:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i}));a("a15b"),a("fb6a"),a("d3b7"),a("ac1f"),a("25f0"),a("1276");var r=a("3835");function n(e){var t=e.split("\r\n").slice(4,-2),a=t[t.length-1];return t.slice(0,-1).join("")+"\n"+a}function c(e,t){for(var a="-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n",n="\n-----END PGP PUBLIC KEY BLOCK-----",c="-----BEGIN PGP MESSAGE-----\n\n",i="\n-----END PGP MESSAGE-----",o=e.split("\n"),s=Object(r["a"])(o,2),l=s[0],u=s[1],p=60,b=Math.ceil(l.length/p),d="key"===t?a:c,y=0;y<b;++y)d+=l.slice(y*p,(y+1)*p)+"\n";return d+=u+("key"===t?n:i),d}function i(e){return c(n(e),"key")}}).call(this,a("b639").Buffer)}});
//# sourceMappingURL=app.0d1fd4f7.js.map