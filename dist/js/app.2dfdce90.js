(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0208":function(t,e,n){var a={"./01.jpg":"5168","./02.jpg":"6396","./03.jpg":"1360","./04.jpg":"1548"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="0208"},1360:function(t,e,n){t.exports=n.p+"img/03.67530012.jpg"},1548:function(t,e,n){t.exports=n.p+"img/04.8fd9cca2.jpg"},5168:function(t,e,n){t.exports=n.p+"img/01.5ca6b0d4.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("HeaderTop"),n("HeaderNav")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrapper_div"},[t._m(0),n("div",{staticClass:"right_content"},[n("ul",{staticClass:"social_list"},t._l(t.socials,(function(t,e){return n("li",{key:e},[n("a",{attrs:{href:t.url,target:"_blank"}},[n("i",{class:t.name})])])})),0)])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left_content"},[n("ul",{staticClass:"contact_info"},[n("li",[n("i",{staticClass:"fas fa-map-marker-alt"}),t._v("701 Shadow Ln, Las Vegas, NV 89106 ")]),n("li",[n("i",{staticClass:"fas fa-phone-alt"}),t._v("1 (800) 233-2742")]),n("li",[n("i",{staticClass:"far fa-envelope"}),t._v("info@example.com")])])])}],u={data:function(){return{socials:[{name:"fab fa-facebook-f",url:"https://www.facebook.com"},{name:"fab fa-twitter",url:"https://www.twitter.com"},{name:"fab fa-linkedin-in",url:"https://www.linkedin.com"},{name:"fab fa-pinterest-p",url:"https://www.pinterest.com/"},{name:"fab fa-google-plus-g",url:"https://www.google.com"}]}}},p=u,f=n("2877"),m=Object(f["a"])(p,l,c,!1,null,null,null),d=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_nav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrapper_div"},[n("h1",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("ChyMedical")])],1),n("nav",[n("ul",{staticClass:"nav_area"},[n("li",{staticClass:"nav_list"},[n("router-link",{staticClass:"nav_item",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav_item",attrs:{to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"nav_item",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])},g=[],h={},b=h,_=Object(f["a"])(b,v,g,!1,null,"e50a9034",null),w=_.exports,C={name:"Navigation",components:{HeaderTop:d,HeaderNav:w}},O=C,j=Object(f["a"])(O,s,o,!1,null,null,null),y=j.exports,E={components:{Navigation:y}},x=E,k=(n("5c0b"),Object(f["a"])(x,r,i,!1,null,null,null)),H=k.exports,S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var A=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomeBanner")],1)},$=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.banners,(function(e,a){return n("div",{key:a,staticClass:"swiper-slide"},[n("img",{attrs:{src:t.getBanner(e.img)}})])})),0),t._m(0),t._m(1)])])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-custom-button-prev"},[n("span",{staticClass:"prev_btn"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-custom-button-next"},[n("span",{staticClass:"next_btn"})])}],P=[{img:"03.jpg",title:"Health Care Services",text:"WE CARE ABOUT YOUR ",bold:"HEALTH",para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt."},{img:"02.jpg",title:"Health Care Services",text:"WE CARE ABOUT YOUR ",bold:"HEALTH",para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt."},{img:"01.jpg",title:"Health Care Services",text:"WE CARE ABOUT YOUR ",bold:"HEALTH",para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt."},{img:"04.jpg",title:"Health Care Services",text:"WE CARE ABOUT YOUR ",bold:"HEALTH",para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt."}],U=P,B={data:function(){return{banners:U,swiperOption:{autoplay:{delay:3e3},loop:!0,navigation:{nextEl:".swiper-custom-button-next",prevEl:".swiper-custom-button-prev"}}}},mounted:function(){this.mySwiper.slideTo(3,1e3,!1)},methods:{getBanner:function(t){return n("0208")("./"+t)}}},R=B,M=(n("f95a"),Object(f["a"])(R,N,L,!1,null,"c4053b5c",null)),I=M.exports,W={name:"Home",components:{HomeBanner:I}},Y=W,F=Object(f["a"])(Y,T,$,!1,null,null,null),D=F.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",{staticClass:"title"},[t._v("This is About page")])])}],q={name:"about"},z=q,G=Object(f["a"])(z,J,V,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("h1",{staticClass:"title"},[t._v("This is Contact page")])])}],Z={name:"contact"},tt=Z,et=Object(f["a"])(tt,Q,X,!1,null,null,null),nt=et.exports;a["default"].use(A["a"]);var at=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:K},{path:"/contact",name:"Contact",component:nt}],rt=new A["a"]({mode:"history",base:"/",routes:at}),it=rt,st=n("2f62");a["default"].use(st["a"]);var ot=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}}),lt=n("7212"),ct=n.n(lt);n("a7a3");a["default"].use(ct.a),a["default"].config.productionTip=!1,new a["default"]({router:it,store:ot,render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6396:function(t,e,n){t.exports=n.p+"img/02.79b1464d.jpg"},"9c0c":function(t,e,n){},f95a:function(t,e,n){"use strict";var a=n("fa16"),r=n.n(a);r.a},fa16:function(t,e,n){}});
//# sourceMappingURL=app.2dfdce90.js.map