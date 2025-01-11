var le=Object.defineProperty;var ie=(n,e,t)=>e in n?le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var E=(n,e,t)=>(ie(n,typeof e!="symbol"?e+"":e,t),t);import{d as h,o as m,c as w,w as c,u as _,r as N,_ as ce,a as i,z as ue,b as V,M as de,m as R,e as pe,f as J,g as v,h as Y,i as x,j as g,F as _e,k as $,I as G,l as me,n as ge,C as fe,B as Q,p as ve,q as X,s as ye,t as Z,v as C,x as T,y as ee,A as he,D as be,S as we,E as ke,G as xe,H as Le,J as te,K as $e,L as I,N as Me,O as Ce,P as Ie,Q as Se,R as Pe,T as Ee,U as Oe,V as ne,W as Re,X as Ae,Y as Ne,Z as oe,$ as Te,a0 as j,a1 as O,a2 as ze,a3 as Ve,a4 as je,a5 as Ue,a6 as De,a7 as U,a8 as qe,a9 as Be,aa as We,ab as He}from"./vendor-bf6225e2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Ke=h({__name:"App",setup(n){return(e,t)=>{const s=N("router-view"),o=ce;return m(),w(o,{locale:_(ue)},{default:c(()=>[i(s)]),_:1},8,["locale"])}}}),Fe="modulepreload",Je=function(n){return"/vue3-quick-start/"+n},D={},q=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=Je(a),a in D)return;D[a]=!0;const r=a.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const u=o[f];if(u.href===a&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Fe,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((f,u)=>{p.addEventListener("load",f),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a})};function Ye(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("charset","utf-8"),s.setAttribute("src",n),document.body.appendChild(s),s.onload=o=>{console.log(`${n} is loaded`),e(o)},s.onerror=o=>{console.warn(`${n} is load failed`),t(o)}})}const Ge=()=>{console.log("%c APP_VERSION %c vue3-quick-start %c","background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:#e6a23c; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;","background:transparent"),console.log("%c APP_BUILD_TIME %c 2025-01-11 22:50:27 %c","background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:#409eff; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;","background:transparent"),console.log("%c APP_VERSION %c 0.1.0 %c","background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:#67c23a; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;","background:transparent"),console.groupEnd();const n="//cdn.jsdelivr.net/npm/eruda";/debug=true/.test(window.location.href)&&Ye(n).then(()=>{eruda.init()})};class Qe{constructor(e){E(this,"instance");E(this,"abortControllerMap");this.instance=V.create(e),this.abortControllerMap=new Map,this.setInterceptors(this.instance)}request(e){return this.instance(e)}handleResponse(e){const{userLogout:t}=S(),s=e.config.url||"";if(this.abortControllerMap.delete(s),V.isCancel(e))return console.log("Request canceled",e),Promise.reject(e);if(e.status===200){const{showError:o=!0}=e.config,{code:a}=e.data;if(a===200)return Promise.resolve(e.data);if(a===401)de.confirm({title:"确认",content:"登录已过期，请重新登录~",onOk(){return t(),Promise.reject(e.data)}});else return o&&R.warning(e.data.message||"服务繁忙，请重试~"),Promise.reject(e.data)}else{const{showError:o=!0}=e.config;o&&R.warning(e.message||e.data.message||e.response.statusText||"服务繁忙，请重试~")}return Promise.reject(e)}setInterceptors(e){e.interceptors.request.use(t=>{const{token:s}=S(),o=t.url||"",a=new AbortController;return t.signal=a.signal,this.abortControllerMap.set(o,a),t&&t.headers&&s&&t.headers.set("Authorization",`Bearer ${s}`),t}),e.interceptors.response.use(t=>this.handleResponse(t),t=>this.handleResponse(t))}cancelAllRequest(){for(const[,e]of this.abortControllerMap)e.abort();this.abortControllerMap.clear()}cancelRequest(e){var s;const t=Array.isArray(e)?e:[e];for(const o of t)(s=this.abortControllerMap.get(o))==null||s.abort(),this.abortControllerMap.delete(o)}}const Xe=new Qe({baseURL:"https://forguo.cn/api"}),Ze=n=>Xe.request(n),et=n=>Ze({url:"/v1/login",method:"post",data:n}),S=pe("userStore",()=>{const n=J(),e=v(""),t=v({username:""}),s=()=>{e.value=""},o=()=>{t.value={username:""}},a=async u=>{const{data:b}=await et(u);l(b.token),d({...b}),await n.push({path:"/"}),R.success("登录成功～")},r=async()=>{console.log("userLogout ---> clearToken"),localStorage.clear(),s(),o(),await n.push({path:"/login"})},l=u=>{localStorage.setItem("token",u),e.value=u},d=u=>{localStorage.setItem("userInfo",JSON.stringify(u)),t.value=u},p=()=>{const u=localStorage.getItem("token");u&&(e.value=u)},f=()=>{try{const u=localStorage.getItem("userInfo");u&&(t.value=JSON.parse(u))}catch{t.value={username:""}}};return p(),f(),{token:e,userInfo:t,userLogout:r,userLogin:a}}),tt={class:"page login-page"},nt={class:"page-inner"},ot=h({name:"LoginView",__name:"index",setup(n){const e=S(),t=v(!1),s=Y({username:"",password:"",remember:!0}),o=async r=>{try{t.value=!0,await e.userLogin({...r}),t.value=!1}catch(l){t.value=!1,console.log(l)}},a=r=>{console.log("Failed:",r)};return(r,l)=>{const d=G,p=me,f=ge,u=fe,b=Q,M=_e;return m(),x("div",tt,[g("div",nt,[i(M,{model:s,name:"basic","wrapper-col":{span:24},autocomplete:"off",onFinish:o,onFinishFailed:a},{default:c(()=>[i(p,{label:"",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:c(()=>[i(d,{value:s.username,"onUpdate:value":l[0]||(l[0]=y=>s.username=y),placeholder:"username"},null,8,["value"])]),_:1}),i(p,{label:"",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:c(()=>[i(f,{value:s.password,"onUpdate:value":l[1]||(l[1]=y=>s.password=y),placeholder:"password"},null,8,["value"])]),_:1}),i(p,{name:"remember","wrapper-col":{span:24}},{default:c(()=>[i(u,{checked:s.remember,"onUpdate:checked":l[2]||(l[2]=y=>s.remember=y)},{default:c(()=>l[3]||(l[3]=[$("Remember me")])),_:1},8,["checked"])]),_:1}),i(p,{"wrapper-col":{span:24}},{default:c(()=>[i(b,{type:"primary","html-type":"submit",loading:_(t),block:""},{default:c(()=>l[4]||(l[4]=[$("Submit")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])}}});const L=(n,e)=>{const t=n.__vccOpts||n;for(const[s,o]of e)t[s]=o;return t},at=L(ot,[["__scopeId","data-v-92f84263"]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),st={key:0,style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"}},rt={href:"https://www.antdv.com/"},B=3,lt=h({name:"MessageView",title:"消息列表",__name:"index",setup(n){const e=`https://randomuser.me/api/?results=${B}&inc=name,gender,email,nat,picture&noinfo`,t=v(!0),s=v(!1),o=v([]),a=v([]);ve(()=>{fetch(e).then(l=>l.json()).then(l=>{t.value=!1,o.value=l.results,a.value=l.results})});const r=()=>{s.value=!0,a.value=o.value.concat([...new Array(B)].map(()=>({loading:!0,name:{},picture:{}}))),fetch(e).then(l=>l.json()).then(l=>{const d=o.value.concat(l.results);s.value=!1,o.value=d,a.value=d,ee(()=>{window.dispatchEvent(new Event("resize"))})})};return(l,d)=>{const p=Q,f=he,u=be,b=we,M=ke,y=ye,P=Z("loading");return X((m(),w(y,{class:"message","item-layout":"horizontal","data-source":a.value},{loadMore:c(()=>[!t.value&&!s.value?(m(),x("div",st,[i(p,{onClick:r},{default:c(()=>d[0]||(d[0]=[$("loading more")])),_:1})])):C("",!0)]),renderItem:c(({item:k})=>[i(M,null,{actions:c(()=>d[1]||(d[1]=[g("a",{key:"list-loadmore-edit"},"edit",-1),g("a",{key:"list-loadmore-more"},"more",-1)])),default:c(()=>[i(b,{avatar:"",title:!1,loading:!!k.loading,active:""},{default:c(()=>[i(u,{description:"Ant Design, a design language for background applications, is refined by Ant UED Team"},{title:c(()=>[g("a",rt,T(k.name.last),1)]),avatar:c(()=>[i(f,{src:k.picture.large},null,8,["src"])]),_:2},1024),d[2]||(d[2]=g("div",null,"content",-1))]),_:2},1032,["loading"])]),_:2},1024)]),_:1},8,["data-source"])),[[P,t.value]])}}});const it=L(lt,[["__scopeId","data-v-2c235391"]]),ct=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),ut=()=>{const n=v(!1);return{loading:n,showLoading:()=>{n.value=!0},hideLoading:()=>{n.value=!1}}},dt=(n,e)=>{const t=()=>{var r;const{width:o=0,height:a=0}=((r=n.value)==null?void 0:r.getBoundingClientRect())||{};e({width:Math.ceil(o),height:Math.ceil(a-55)})},s=xe(n,async o=>{o&&(await ee(()=>{t()}),window.addEventListener("resize",t))},{immediate:!0,deep:!0});Le(()=>{s(),window.removeEventListener("resize",t)})},pt={class:"page"},_t={class:"page-header"},mt={key:0,class:"page-actions"},gt={key:1,class:"page-pagination"},ft=h({name:"LayoutPage",__name:"LayoutPage",props:{scrollY:{type:Boolean,default:!0},title:{default:""}},setup(n){const e=te(),t=v(),s=v(0);dt(t,({height:a})=>{s.value=a});const o=$e(()=>{var a;return((a=e==null?void 0:e.meta)==null?void 0:a.title)||""});return(a,r)=>(m(),x("div",pt,[g("div",_t,[I(a.$slots,"header",{},()=>[$(T(a.title||_(o)||""),1)])]),a.$slots.actions?(m(),x("div",mt,[I(a.$slots,"actions")])):C("",!0),g("div",{class:Me(["page-table",{"scroll-y":a.scrollY}]),ref_key:"pageTableRef",ref:t},[I(a.$slots,"default",{height:_(s)})],2),a.$slots.pagination?(m(),x("div",gt,[I(a.$slots,"pagination")])):C("",!0)]))}});const vt=h({name:"WorkView",title:"WorkView",__name:"index",setup(n){const{loading:e,showLoading:t,hideLoading:s}=ut(),o=new Array(100).fill({}).map(d=>({key:d+1,username:"username"+Math.random(),userID:"123456"+Math.random(),gender:"男"+Math.random(),phoneNumber:"13888888888"+Math.random()})),a=[{title:"用户昵称",dataIndex:"username",align:"center"},{title:"用户ID",dataIndex:"userID",align:"center"},{title:"性别",dataIndex:"gender",align:"center"},{title:"手机号码",dataIndex:"phoneNumber",align:"center"}];let r=v({username:""});const l=()=>{e.value?s():t(),setTimeout(()=>{s()},1500)};return l(),(d,p)=>{const f=G,u=N("WeButton"),b=Ce,M=Ie,y=ft,P=Z("loading");return X((m(),w(y,{class:"work"},{actions:c(()=>[i(f,{value:_(r).username,"onUpdate:value":p[0]||(p[0]=k=>_(r).username=k),placeholder:"请输入用户名",style:{width:"180px"}},null,8,["value"]),i(u,{type:"primary",onClick:l},{default:c(()=>p[1]||(p[1]=[$("查询")])),_:1})]),default:c(({height:k})=>[i(b,{scroll:{y:k},columns:a,"data-source":_(o),pagination:!1},null,8,["scroll","data-source"])]),pagination:c(()=>[i(M,{total:_(o).length,"show-size-changer":""},null,8,["total"])]),_:1})),[[P,_(e)]])}}});const yt=L(vt,[["__scopeId","data-v-524bf8be"]]),ht=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),se="/vue3-quick-start/png/logo-867e276b.png",bt={class:"menu-item__user"},wt={class:"user-name"},kt={class:"user-drop-icon"},xt=h({name:"LayoutMainUser",__name:"LayoutMainUser",setup(n){const e=S(),{userInfo:t}=Se(e),s=async()=>{try{await e.userLogout()}catch(o){console.log(o)}};return(o,a)=>{const r=Oe,l=ne,d=Re;return m(),w(d,null,{overlay:c(()=>[i(l,null,{default:c(()=>[i(r,{onClick:s},{default:c(()=>[i(_(Pe),{style:{"font-size":"14px","margin-right":"4px"}}),a[1]||(a[1]=$(" 退出登录 "))]),_:1})]),_:1})]),default:c(()=>[g("div",bt,[a[0]||(a[0]=g("img",{src:se,alt:"",class:"user-avatar"},null,-1)),g("div",wt,T(_(t).username),1),g("div",kt,[i(_(Ee))])])]),_:1})}}});const Lt=L(xt,[["__scopeId","data-v-3cb153e0"]]),$t={class:"layout-header"},Mt={class:"page-header__menu"},Ct=h({name:"LayoutMainHeader",__name:"LayoutMainHeader",emits:["back"],setup(n,{emit:e}){const t=e;return(s,o)=>(m(),x("header",$t,[o[1]||(o[1]=g("div",{class:"page-header__logo"},[g("img",{src:se,alt:""})],-1)),g("div",Mt,[i(_(Ae),{onClick:o[0]||(o[0]=a=>t("back"))}),i(Lt)])]))}});const It=L(Ct,[["__scopeId","data-v-78369ab3"]]),W=[{key:"WorkView",label:"工作台"},{key:"MessageView",label:"消息中心"}],St={class:"layout-menu"},Pt=h({name:"LayoutMainMenu",__name:"LayoutMainMenu",setup(n){const e=te(),t=J(),s=v([W[0].key]),o=a=>{t.push({name:a.key})};return Ne(()=>{s.value=[e.name]}),(a,r)=>{const l=ne;return m(),x("div",St,[i(l,{selectedKeys:_(s),"onUpdate:selectedKeys":r[0]||(r[0]=d=>oe(s)?s.value=d:null),mode:"inline",style:{height:"100%",borderRight:0},items:_(W),onClick:o},null,8,["selectedKeys","items"])])}}});const Et=L(Pt,[["__scopeId","data-v-ace34703"]]),Ot=h({name:"LayoutMain",__name:"LayoutMain",setup(n){const{Content:e}=O;return(t,s)=>{const o=N("router-view");return m(),w(_(O),{class:"layout-page"},{default:c(()=>[i(It,{onBack:s[0]||(s[0]=a=>t.$router.back())}),i(_(O),{class:"layout-content"},{default:c(()=>[i(Et),i(_(e),{class:"layout-inner"},{default:c(()=>[i(o,null,{default:c(({Component:a,route:r})=>[(m(),w(Te,null,[r.meta&&r.meta.keepAlive?(m(),w(j(a),{key:r.fullPath})):C("",!0)],1024)),r.meta&&r.meta.keepAlive?C("",!0):(m(),w(j(a),{key:r.fullPath}))]),_:1})]),_:1})]),_:1})]),_:1})}}});const Rt=L(Ot,[["__scopeId","data-v-d329266a"]]),z=[{path:"/",redirect:{path:"/WorkView"},component:Rt,children:[{path:"/:pathMatch(.*)*",component:()=>q(()=>import("./NotFound-a206b69e.js"),["js/NotFound-a206b69e.js","js/vendor-bf6225e2.js","css/vendor-e73e60e3.css","css/NotFound-fdfc72a6.css"])}]},{path:"/login",name:"login",meta:{title:"登录"},component:()=>q(()=>Promise.resolve().then(()=>ae),void 0)}],H=Object.assign({"/src/views/LoginView/index.vue":ae,"/src/views/MessageView/index.vue":ct,"/src/views/WorkView/index.vue":ht});for(const n in H){const e=H[n].default;if(e&&!e.hidden&&e.name!=="LoginView"){const{name:t,title:s}=e;z[0].children.push({path:t==="WorkView"?"/":`/${t}`,name:t,title:s,component:e,meta:{name:t,title:s}})}}const At=ze({history:Ve("/vue3-quick-start/"),routes:[...z]});console.log(z);function Nt(n,e=!1){const t=n.target,s={...n};delete s.target,delete s.parent;const o=Y({...s}),a=je(Ue,{style:{fontSize:"24px"},spin:!0}),r=i(De,{delay:o.delay,indicator:a,size:o.size,spinning:o.spinning,tip:o.tip||"加载中...",wrapperClassName:o.wrapperClassName,style:o.style},{});e?setTimeout(()=>{U(r,document.createElement("div"))},0):U(r,document.createElement("div"));function l(){r!=null&&r.el&&r.el.parentNode&&r.el.parentNode.removeChild(r.el),t==null||t.classList.remove("v-loading-target")}function d(p=document.body){!r||!r.el||(p.appendChild(r.el),p.classList.add("v-loading-target"))}return t&&d(t),{...qe(o),vm:r,close:l,open:d,get loading(){return o.spinning},get $el(){return r==null?void 0:r.el}}}const A=Symbol("ElLoading"),Tt=n=>typeof n=="string",zt=n=>toString.call(n)==="[object Object]",Vt=n=>{let e;return Tt(n.target)?e=document.querySelector(n.target)??document.body:e=n.target||document.body,{delay:Number(n.delay||0),indicator:n.indicator||!1,size:n.size||"default",spinning:n.spinning||!1,tip:n.tip||"",wrapperClassName:n.wrapperClassName||"",parent:e===document.body?document.body:e,background:n.background||"",fullscreen:e===document.body&&(n.fullscreen??!0),target:e}},K=(n,e)=>{const t=l=>n.getAttribute(`loading-${l}`),s=t("fullscreen")??e.modifiers.fullscreen,o=Vt({delay:t("delay"),indicator:t("indicator"),size:t("size"),spinning:!!e.value,tip:t("tip"),wrapperClassName:t("wrapperClassName"),background:t("background"),target:t("target")??(s?void 0:n),fullscreen:!!s}),r={display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",flexDirection:"column",gap:"12px",backgroundColor:o.background||"rgba(255, 255, 255, 0.55)",opacity:"1",zIndex:"998",top:"0",right:"0",left:"0",bottom:"0",transition:"opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)"};n[A]={options:o,instance:Nt({...o,style:r})}},jt=(n,e)=>{for(const t of Object.keys(e)){const s=t;oe(e[s])&&(e[s].value=n[s])}},Ut={mounted(n,e){e.value&&K(n,e)},updated(n,e){const t=n[A];e.oldValue!==e.value&&(e.value&&!e.oldValue?K(n,e):e.value&&e.oldValue?zt(e.value)&&jt(e.value,t.options):t==null||t.instance.close())},unmounted(n){var e;(e=n[A])==null||e.instance.close()}},re=document.createElement("style");re.innerHTML=`
  .v-loading-target {
    position: relative;
    pointer-events: none;
  }
  .v-loading-target > :not(.ant-spin) {
    pointer-events: none;
    user-select: none;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  .v-loading-target > .ant-spin {
    opacity: 0;
    transition: opacity 0.3s;
    color: #1677ff
  }
  .v-loading-target > .ant-spin .ant-spin-dot-item {
    background-color: var(--text-important)
  }
`;document.head.appendChild(re);const F={loading:Ut},Dt={install:n=>{for(const e in F)n.directive(e,F[e])}},qt={install:n=>{n.use(Dt)}};Ge();const Bt=Be(Ke);Bt.use(We()).use(At).use(qt).use(He).mount("#app");export{L as _};
