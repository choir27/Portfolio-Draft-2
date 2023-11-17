(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7523:function(e,t,n){Promise.resolve().then(n.t.bind(n,7438,23)),Promise.resolve().then(n.t.bind(n,1886,23)),Promise.resolve().then(n.t.bind(n,4490,23)),Promise.resolve().then(n.bind(n,7216)),Promise.resolve().then(n.bind(n,1300)),Promise.resolve().then(n.bind(n,6213)),Promise.resolve().then(n.bind(n,1517)),Promise.resolve().then(n.bind(n,2977))},7216:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Header}});var s=n(7437);n(2265);var i=n(7438),l=n.n(i);function Header(){let e=new Date;return(0,s.jsxs)("header",{id:"header",className:"".concat(l().flex," ").concat(l()["justify-between"]," ").concat(l()["align-center"]),children:[(0,s.jsxs)("ul",{className:l().icons,children:[(0,s.jsx)("li",{children:(0,s.jsx)("h1",{children:"Richard Choi"})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"NJ Frontend Software Engineer"})}),(0,s.jsx)("li",{id:"copyright",children:(0,s.jsxs)("small",{children:["Copyright \xa9 ",e.getFullYear(),". All rights are reserved"]})})]}),(0,s.jsxs)("section",{className:"".concat(l().callToAction," ").concat(l().flex," ").concat(l()["flex-col"]," ").concat(l()["justify-between"]),children:[(0,s.jsxs)("a",{target:"_blank",href:"https://github.com/choir27",className:l().button,children:["View My GitHub",(0,s.jsx)("small",{className:"fa-brands fa-github"})]}),(0,s.jsxs)("a",{target:"_blank",href:"https://www.linkedin.com/in/richard-choir/",className:l().button,children:["View My LinkedIn",(0,s.jsx)("small",{className:"fa-brands fa-linkedin"})]}),(0,s.jsxs)("a",{target:"_blank",href:"https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",className:l().button,children:["View My Resume",(0,s.jsx)("small",{className:"fa-solid fa-file-lines"})]})]}),(0,s.jsx)("div",{className:l().imageContainer,children:(0,s.jsx)("img",{src:"/_next/static/media/profile.e79de8d2.jpg",alt:"professional profile picture of myself"})})]})}},1300:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Nav}});var s,i=n(7437);let createStoreImpl=e=>{let t;let n=new Set,setState=(e,s)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=s?s:"object"!=typeof i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},getState=()=>t,s={setState,getState,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(setState,getState,s),s},createStore=e=>e?createStoreImpl(e):createStoreImpl;var l=n(2265),c=n(5401);let{useSyncExternalStoreWithSelector:o}=c,u=!1,createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?createStore(e):e,useBoundStore=(e,n)=>(function(e,t=e.getState,n){n&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let s=o(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,l.useDebugValue)(s),s})(t,e,n);return Object.assign(useBoundStore,t),useBoundStore},d=(s=e=>({menu:!1,setMenu:t=>e(()=>({menu:t}))}))?createImpl(s):createImpl;var f=n(7438),h=n.n(f);function Nav(){let e=d(e=>e.menu),t=d(e=>e.setMenu);return(0,i.jsxs)("div",{id:"nav",className:h().nav,children:[(0,i.jsx)("i",{id:"menu",className:"".concat(e?"fa-solid fa-xmark ".concat(h().bars):"fa-solid fa-bars ".concat(h().bars)),onClick:n=>{e?t(!1):t(!0)}}),(0,i.jsxs)("nav",{className:e?"menu":"hidden",children:[(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("h2",{children:"Menu"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,href:"/",children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,href:"/aboutMe",children:"About Me"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,href:"/allProjects",children:"All Projects"})})]}),(0,i.jsxs)("ul",{className:"".concat(h().flex," ").concat(h()["justify-between"]," ").concat(h().social," icons"),children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,target:"_blank",href:"https://github.com/choir27",children:(0,i.jsx)("small",{className:"fa-brands fa-github",children:(0,i.jsx)("span",{className:"hidden",children:"My Github"})})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,target:"_blank",href:"https://www.linkedin.com/in/richard-choir/",children:(0,i.jsx)("small",{className:"fa-brands fa-linkedin",children:(0,i.jsx)("span",{className:"hidden",children:"My LinkedIn"})})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,target:"_blank",href:"https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",children:(0,i.jsx)("small",{className:"fa-solid fa-file-lines",children:(0,i.jsx)("span",{className:"hidden",children:"My Resume"})})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:h().link,target:"_blank",href:"https://twitter.com/choir241",children:(0,i.jsx)("small",{className:"fa-brands fa-twitter",children:(0,i.jsx)("span",{className:"hidden",children:"Twitter"})})})})]})]})]})}},1886:function(){},4490:function(){},7438:function(e){e.exports={flex:"main_flex__DzVMV","flex-wrap":"main_flex-wrap__SvCEg","flex-col":"main_flex-col__Ozvnm","justify-center":"main_justify-center__kb7Jf","justify-between":"main_justify-between__boI9I","justify-evenly":"main_justify-evenly__gWLR0","align-center":"main_align-center__VeK_1",imageContainer:"main_imageContainer__CPWcp",callToAction:"main_callToAction__Rhs0N",icons:"main_icons__Ybb3Y",social:"main_social__VEj3Y",button:"main_button__4zvZW",icon:"main_icon__6imUc",fit:"main_fit__7fS4U",small:"main_small__DLtyZ",large:"main_large__5sAjY",link:"main_link__XN810",bars:"main_bars__fW7_o",nav:"main_nav__NZyIU"}},6213:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/autoaligners.0989c775.png",height:879,width:1900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/APn5+fr6+v////Tz9efm6Ojn6uXl6dfW2wD7+/v4+Pj7+/ve3uHFxc+5vMerrbnKydIA5ubm9PT0////zs3NcnJ3kZKZf4CKmJaaAPv7+/z8/P///+Ph36mkoK6rqKynpL65t2lNT8FMxyP2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},1517:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/echostream.aa950f5a.png",height:868,width:1897,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEX9/f3Ys8TfrL3u3OPw8fHt3+Xm3+TdusrxxLzlkqz29vfousLCLWnEAAAACXBIWXMAABJ0AAASdAHeZh94AAAAJElEQVR4nGNgZ2RiZGRn4mRgY2NlZWZmZmJgYWDgYmBg4IAzAAg+AGyWZrA5AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},2977:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/therealestatebeast.c15f0ada.png",height:853,width:1888,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ABkTDUxERbq4sczLud3g1uPd2uDY1unp5wAiHhpOSUmzsrG2tbHR0dC4tbOyr63d3NkANTczAAAAy8zM////+vr79Pb4+/z8+/z9ACooKgAAALK7xbjV9MrT48TQ4cvT4s/X5bfjP3qq2NhGAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(2265),i=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var s,u={},d=null,f=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(f=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(u[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===u[s]&&(u[s]=t[s]);return{$$typeof:i,type:e,key:d,ref:f,props:u,_owner:c.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},1853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=s.useState,c=s.useEffect,o=s.useLayoutEffect,u=s.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),s=l({inst:{value:n,getSnapshot:t}}),i=s[0].inst,d=s[1];return o(function(){i.value=n,i.getSnapshot=t,r(i)&&d({inst:i})},[e,n,t]),c(function(){return r(i)&&d({inst:i}),e(function(){r(i)&&d({inst:i})})},[e]),u(n),n};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:d},8704:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(2265),i=n(6272),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=i.useSyncExternalStore,o=s.useRef,u=s.useEffect,d=s.useMemo,f=s.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,s,i){var h=o(null);if(null===h.current){var m={hasValue:!1,value:null};h.current=m}else m=h.current;var A=c(e,(h=d(function(){function a(t){if(!o){if(o=!0,e=t,t=s(t),void 0!==i&&m.hasValue){var n=m.value;if(i(n,t))return c=n}return c=t}if(n=c,l(e,t))return n;var u=s(t);return void 0!==i&&i(n,u)?n:(e=t,c=u)}var e,c,o=!1,u=void 0===n?null:n;return[function(){return a(t())},null===u?void 0:function(){return a(u())}]},[t,n,s,i]))[0],h[1]);return u(function(){m.hasValue=!0,m.value=A},[A]),f(A),A}},6272:function(e,t,n){"use strict";e.exports=n(1853)},5401:function(e,t,n){"use strict";e.exports=n(8704)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=7523)}),_N_E=e.O()}]);