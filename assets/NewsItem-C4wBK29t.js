import{W as f,c as _,a as g}from"./useButtonFunctions-3LVv21f5.js";import{g as h}from"./useMdRendererForAffiliates-ZBZJ_Ke2.js";import{e as y}from"./useEditorFromTextArea-Vu5XOOF9.js";import{m as i}from"./marked.esm-KKTQJ6Gi.js";import{b as x,w as d,e as b,o as v,d as o,g as k,v as T,h as p,_ as w,k as M,l as C,m as H}from"./index-4JgYDzZU.js";import"./markdown-dpzZz7rj.js";const L=o("h1",{class:"component__title"},"News item",-1),B={class:"form-group"},I=o("label",{for:"input"},"Text (in Markdown)",-1),N={class:"form-group clearfix",style:{"margin-top":"40px"}},V=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),W={class:"btn-group pull-right"},E=o("span",{class:"glyphicon glyphicon-copy"},null,-1),R={style:{"max-width":"590px",margin:"0 auto","background-color":"#fff"}},q={id:"rendered"},A=["innerHTML"];function D(a,e,s,t,c,l){const r=b("Workspace");return v(),x(r,null,{form:d(()=>[L,o("div",B,[I,k(o("textarea",{class:"form-control",id:"input","onUpdate:modelValue":e[0]||(e[0]=n=>t.input=n)},null,512),[[T,t.input]])]),o("div",N,[o("button",{class:"btn btn-default",id:"refresh",onClick:e[1]||(e[1]=(...n)=>t.reset&&t.reset(...n))},[V,p(" Reset")]),o("div",W,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:e[2]||(e[2]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[E,p(" Copy HTML")])])])]),"render-container":d(()=>[o("div",R,[o("div",q,[o("div",{align:"left",bgcolor:"#ffffff",innerHTML:t.output},null,8,A)])])]),_:1})}const F={components:{Workspace:f},props:["currentTemplate"],setup(a){const e=h();i.use({renderer:e}),i.setOptions({gfm:!0,headerIds:!1});const s=`# Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`,t=M(s);function c(){const u=document.getElementById("input");y(t,u,"calc(100vh - 400px)")}C(c);const l=H(()=>i(t.value));function r(){_()}function n(){g()}function m(){t.value=s}return{input:t,props:a,reset:m,copy:r,copyTextVersion:n,output:l}}},K=w(F,[["render",D]]);export{K as default};
