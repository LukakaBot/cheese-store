import{_ as d,o as _,c as f,F as m,p as h,m as A,k as o,a1 as r,s as p,a2 as g,a3 as v,a4 as y,a5 as P,a6 as w,a7 as C,a8 as x,a9 as E,aa as R,ab as S,V as T,d as b,u as I,j as D,y as F,ac as L,ad as V,ae as j}from"./chunks/framework.c4bbc6b9.js";import{t as i}from"./chunks/theme.d819443b.js";const B={},u=e=>(h("data-v-3037c1e9"),e=e(),A(),e),O=u(()=>o("h1",{class:"name"},[o("span",{class:"clip"},"芝士宝库")],-1)),k=u(()=>o("p",{class:"text"},"一块美味芝士",-1));function $(e,a){return _(),f(m,null,[O,k],64)}const M=d(B,[["render",$],["__scopeId","data-v-3037c1e9"]]),N={...i,Layout(){return r(i.Layout,null,{"home-hero-info":()=>r(M)})}};function l(e){if(e.extends){const a=l(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=l(N),G=b({name:"VitePressApp",setup(){const{site:e}=I();return D(()=>{F(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),L(),V(),j(),s.setup&&s.setup(),()=>r(s.Layout)}});async function H(){const e=q(),a=U();a.provide(v,e);const t=y(e.route);return a.provide(P,t),a.component("Content",w),a.component("ClientOnly",C),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:x}),{app:a,router:e,data:t}}function U(){return E(G)}function q(){let e=p,a;return R(t=>{let n=S(t),c=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),c=T(()=>import(n),[])),p&&(e=!1),c},s.NotFound)}p&&H().then(({app:e,router:a,data:t})=>{a.go().then(()=>{g(a.route,t.site),e.mount("#app")})});export{H as createApp};
