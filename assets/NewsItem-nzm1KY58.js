import{W as f,c as _,a as g}from"./useButtonFunctions-qtrtxZGy.js";import{g as h}from"./useMdRendererForAffiliates-ZBZJ_Ke2.js";import{e as y}from"./useEditorFromTextArea-YaS29rLp.js";import{m as r}from"./marked.esm-KKTQJ6Gi.js";import{b as x,w as l,e as b,o as v,d as o,g as k,v as T,h as d,_ as w,k as M,l as C,m as H}from"./index-zazyN03S.js";import"./markdown--qxOycaS.js";const L=o("h1",{class:"component__title"},"News item",-1),I={class:"form-group"},B=o("label",{for:"input"},"Text (in Markdown)",-1),N={class:"form-group clearfix",style:{"margin-top":"40px"}},V=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),W={class:"btn-group pull-right"},E=o("span",{class:"glyphicon glyphicon-copy"},null,-1),R={style:{"max-width":"590px",margin:"0 auto","background-color":"#fff"}},q={id:"rendered"},A=["innerHTML"];function D(i,e,p,t,a,c){const s=b("Workspace");return v(),x(s,null,{form:l(()=>[L,o("div",I,[B,k(o("textarea",{class:"form-control",id:"input","onUpdate:modelValue":e[0]||(e[0]=n=>t.input=n)},null,512),[[T,t.input]])]),o("div",N,[o("button",{class:"btn btn-default",id:"refresh",onClick:e[1]||(e[1]=(...n)=>t.reset&&t.reset(...n))},[V,d(" Reset")]),o("div",W,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:e[2]||(e[2]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[E,d(" Copy HTML")])])])]),"render-container":l(()=>[o("div",R,[o("div",q,[o("div",{align:"left",bgcolor:"#ffffff",innerHTML:t.output},null,8,A)])])]),_:1})}const F={components:{Workspace:f},props:["currentTemplate"],setup(i){const e=h();r.use({renderer:e}),r.setOptions({gfm:!0,headerIds:!1});const t=M(`# Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`);function a(){const u=document.getElementById("input");y(t,u,"calc(100vh - 400px)")}C(a);const c=H(()=>r(t.value));function s(){_()}function n(){g()}function m(){window.location.reload()}return{input:t,props:i,reset:m,copy:s,copyTextVersion:n,output:c}}},K=w(F,[["render",D]]);export{K as default};