import{W as _,c as g,a as h}from"./useButtonFunctions-wh9oDudB.js";import{g as k}from"./useMdRendererForAffiliates-tUsb4XoE.js";import{e as y}from"./useEditorFromTextArea-Vu5XOOF9.js";import{m as s}from"./marked.esm-KKTQJ6Gi.js";import{g as b}from"./useBookmark-eAWRsofg.js";import{b as x,w as l,e as v,o as T,d as o,g as w,v as M,h as d,_ as C,k as H,l as L,m as B}from"./index-5IaAVlBv.js";import"./index-bQRmu1Dj.js";import"./markdown-dpzZz7rj.js";const I=o("h1",{class:"component__title"},"News item",-1),N={class:"form-group"},V=o("label",{for:"input"},"Text (in Markdown)",-1),W={class:"form-group clearfix",style:{"margin-top":"40px"}},E=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),R={class:"btn-group pull-right"},q=o("span",{class:"glyphicon glyphicon-copy"},null,-1),A={style:{"max-width":"590px",margin:"0 auto","background-color":"#fff"}},D={id:"rendered"},F=["id","name"],O=["innerHTML"];function U(i,e,p,t,a,c){const r=v("Workspace");return T(),x(r,null,{form:l(()=>[I,o("div",N,[V,w(o("textarea",{class:"form-control",id:"input","onUpdate:modelValue":e[0]||(e[0]=n=>t.input=n)},null,512),[[M,t.input]])]),o("div",W,[o("button",{class:"btn btn-default",id:"refresh",onClick:e[1]||(e[1]=(...n)=>t.reset&&t.reset(...n))},[E,d(" Reset")]),o("div",R,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:e[2]||(e[2]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[q,d(" Copy HTML")])])])]),"render-container":l(()=>[o("div",A,[o("div",D,[o("a",{id:t.bookmark,name:t.bookmark},null,8,F),o("div",{align:"left",bgcolor:"#ffffff",innerHTML:t.output},null,8,O)])])]),_:1})}const j={components:{Workspace:_},props:["currentTemplate"],setup(i){const e=k();s.use({renderer:e}),s.setOptions({gfm:!0,headerIds:!1});const t=H(`# Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`);function a(){const f=document.getElementById("input");y(t,f,"calc(100vh - 400px)")}L(a);const c=B(()=>s(t.value));function r(){g()}function n(){h()}function m(){window.location.reload()}const u=b();return{input:t,props:i,reset:m,copy:r,copyTextVersion:n,output:c,bookmark:u}}},Y=C(j,[["render",U]]);export{Y as default};
