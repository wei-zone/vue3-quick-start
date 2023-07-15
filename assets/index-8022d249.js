import{d as h,o as i,c as _,a as e,t as x,p as $,b as V,e as t,f as a,w as r,u as p,F as M,R as f,g as H,h as k,E as A,i as E,j,r as g,k as C,l as P,m as I,n as L}from"./vendor-3f47dac3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function c(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerPolicy&&(u.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?u.credentials="include":n.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(n){if(n.ep)return;n.ep=!0;const u=c(n);fetch(n.href,u)}})();const S=o=>($("data-v-d822910b"),o=o(),V(),o),O={class:"greetings"},T={class:"green"},R=S(()=>e("h3",null,[t(" You’ve successfully created a project with "),e("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),t(" + "),e("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),t(" . What's next? ")],-1)),D=h({__name:"HelloWorld",props:{msg:{}},setup(o){return(s,c)=>(i(),_("div",O,[e("h1",T,x(s.msg),1),R]))}});const d=(o,s)=>{const c=o.__vccOpts||o;for(const[l,n]of s)c[l]=n;return c},N=d(D,[["__scopeId","data-v-d822910b"]]),z=o=>($("data-v-21b437bd"),o=o(),V(),o),B={href:"https://github.com/wforguo/vue3-quick-start",target:"_blank",style:{display:"flex","flex-wrap":"wrap","align-items":"center","justify-content":"center","margin-right":"99px"},title:"star me"},q={role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{width:"48px",height:"48px"}},W=z(()=>e("title",null,"GitHub",-1)),U=z(()=>e("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1)),Y=[W,U],F=z(()=>e("span",{style:{padding:"6px","white-space":"nowrap"}},"star me",-1)),G={class:"wrapper"},J=h({__name:"App",setup(o){return(s,c)=>(i(),_(M,null,[e("header",null,[e("a",B,[(i(),_("svg",q,Y)),F]),e("div",G,[a(N,{msg:"You did it!"}),e("nav",null,[a(p(f),{to:"/"},{default:r(()=>[t("HomeView")]),_:1}),a(p(f),{to:"/AboutView"},{default:r(()=>[t("AboutView")]),_:1}),a(p(f),{to:"/ElementView"},{default:r(()=>[t("ElementView")]),_:1})])])]),a(p(H))],64))}});const K=d(J,[["__scopeId","data-v-21b437bd"]]);const Q={class:"about"},X=e("h1",null,"This is an about page",-1),Z=[X],e1={name:"AboutView",title:"关于"},t1=h({...e1,setup(o){return(s,c)=>(i(),_("div",Q,Z))}});const o1=Object.freeze(Object.defineProperty({__proto__:null,default:t1},Symbol.toStringTag,{value:"Module"}));const s1={class:"element"},n1={name:"ElementView",title:"ElementPlus"},r1=h({...n1,setup(o){return k(()=>{A.success("ElementPlus page mounted")}),(s,c)=>{const l=j,n=E;return i(),_("div",s1,[a(n,{header:"This is an ElementPlus page"},{default:r(()=>[a(l,{type:"primary"},{default:r(()=>[t("ElementPlus")]),_:1})]),_:1})])}}});const a1=Object.freeze(Object.defineProperty({__proto__:null,default:r1},Symbol.toStringTag,{value:"Module"}));const c1={},l1={class:"item"},i1={class:"details"};function _1(o,s){return i(),_("div",l1,[e("i",null,[g(o.$slots,"icon",{},void 0,!0)]),e("div",i1,[e("h3",null,[g(o.$slots,"heading",{},void 0,!0)]),g(o.$slots,"default",{},void 0,!0)])])}const m=d(c1,[["render",_1],["__scopeId","data-v-c6e95af5"]]),u1={},d1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},h1=e("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),m1=[h1];function p1(o,s){return i(),_("svg",d1,m1)}const v1=d(u1,[["render",p1]]),f1={},g1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},z1=e("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),w1=[z1];function b1(o,s){return i(),_("svg",g1,w1)}const y1=d(f1,[["render",b1]]),$1={},V1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},M1=e("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),x1=[M1];function H1(o,s){return i(),_("svg",V1,x1)}const k1=d($1,[["render",H1]]),A1={},E1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},j1=e("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),C1=[j1];function P1(o,s){return i(),_("svg",E1,C1)}const I1=d(A1,[["render",P1]]),L1={},S1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},O1=e("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),T1=[O1];function R1(o,s){return i(),_("svg",S1,T1)}const D1=d(L1,[["render",R1]]),N1=e("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),B1=e("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),q1=e("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),W1=e("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),U1=e("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),Y1=e("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),F1=e("br",null,null,-1),G1=e("code",null,"README.md",-1),J1=e("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),K1=e("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Q1=e("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),X1=e("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),Z1=e("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),ee=e("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),te=e("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),oe=e("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),se=e("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),ne=e("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),re=h({__name:"TheWelcome",setup(o){return(s,c)=>(i(),_(M,null,[a(m,null,{icon:r(()=>[a(v1)]),heading:r(()=>[t("Documentation")]),default:r(()=>[t(" Vue’s "),N1,t(" provides you with all information you need to get started. ")]),_:1}),a(m,null,{icon:r(()=>[a(y1)]),heading:r(()=>[t("Tooling")]),default:r(()=>[t(" This project is served and bundled with "),B1,t(" . The recommended IDE setup is "),q1,t(" + "),W1,t(" . If you need to test your components and web pages, check out "),U1,t(" and "),Y1,t(" . "),F1,t(" More instructions are available in "),G1,t(" . ")]),_:1}),a(m,null,{icon:r(()=>[a(k1)]),heading:r(()=>[t("Ecosystem")]),default:r(()=>[t(" Get official tools and libraries for your project: "),J1,t(" , "),K1,t(" , "),Q1,t(" , and "),X1,t(" . If you need more resources, we suggest paying "),Z1,t(" a visit. ")]),_:1}),a(m,null,{icon:r(()=>[a(I1)]),heading:r(()=>[t("Community")]),default:r(()=>[t(" Got stuck? Ask your question on "),ee,t(" , our official Discord server, or "),te,t(" . You should also subscribe to "),oe,t(" and follow the official "),se,t(" twitter account for latest news in the Vue world. ")]),_:1}),a(m,null,{icon:r(()=>[a(D1)]),heading:r(()=>[t("Support Vue")]),default:r(()=>[t(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),ne,t(" . ")]),_:1})],64))}}),ae={class:"home"},ce={name:"HomeView",title:"首页"},le=h({...ce,setup(o){return(s,c)=>(i(),_("div",ae,[a(re)]))}}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),w=[],y=Object.assign({"/src/views/AboutView/index.vue":o1,"/src/views/ElementView/index.vue":a1,"/src/views/HomeView/index.vue":ie});for(const o in y){const s=y[o].default;if(s&&!s.hidden){const{name:c,title:l}=s;w.push({path:c==="HomeView"?"/":`/${c}`,name:c,title:l,component:s,meta:{name:c,title:l}})}}const _e=C({history:P("/vue3-quick-start/"),routes:[...w]});console.log(w);function ue(o){return new Promise((s,c)=>{const l=document.createElement("script");l.setAttribute("type","text/javascript"),l.setAttribute("charset","utf-8"),l.setAttribute("src",o),document.body.appendChild(l),l.onload=n=>{console.log(`${o} is loaded`),s(n)},l.onerror=n=>{console.warn(`${o} is load failed`),c(n)}})}(function(){console.log({VITE_BASE_URL:"/vue3-quick-start/",VITE_API_URL:"https://cloud-app.com.cn/",BASE_URL:"/vue3-quick-start/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,APP_VERSION:"0.0.0",APP_NAME:"vue3-quick-start",APP_BUILD_TIME:"2023-07-15 23:32:11"}),console.log({APP_VERSION:"0.0.0",APP_NAME:"vue3-quick-start",APP_BUILD_TIME:"2023-07-15 23:32:11"});const o="//cdn.jsdelivr.net/npm/eruda";/debug=true/.test(window.location.href)&&ue(o).then(()=>{eruda.init()})})();const b=I(K);b.use(L());b.use(_e);b.mount("#app");
