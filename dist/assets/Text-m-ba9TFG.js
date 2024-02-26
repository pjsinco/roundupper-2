import{W as f}from"./animate-KdRnERix.js";import{c as x,a as g}from"./useButtonFunctions-KfWTjEuH.js";import{m as _}from"./useMdRendererForAoaGeneral-4v_1Hj10.js";import{e as h}from"./useEditorFromTextArea-Vu5XOOF9.js";import{m as i}from"./marked.esm-KKTQJ6Gi.js";import{r as y,b,w as p,o as T,e as o,g as v,v as k,h as a,_ as C,j as w,l as H,k as M}from"./index-GHJKMDaw.js";import"./markdown-dpzZz7rj.js";const V=o("h1",null,"Text",-1),L={class:"form-group"},B=o("label",{for:"input"},"Text (in Markdown)",-1),W={class:"form-group clearfix",style:{"margin-top":"40px"}},A=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),I={class:"btn-group pull-right"},z=o("span",{class:"glyphicon glyphicon-copy"},null,-1),E=["data-component"],F=o("span",{class:"glyphicon glyphicon-copy"},null,-1),N={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0"}},R={id:"rendered"},j={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},q={class:"pardot-region",align:"left","pardot-region":"",style:{"font-size":"0px",padding:"0 36px 0 36px","word-break":"break-word"}},D=["innerHTML"];function G(l,t,r,e,d,c){const s=y("Workspace");return T(),b(s,null,{form:p(()=>[V,o("div",L,[B,v(o("textarea",{class:"form-control",id:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.input=n)},null,512),[[k,e.input]])]),o("div",W,[o("button",{class:"btn btn-default",id:"refresh",onClick:t[1]||(t[1]=(...n)=>e.reset&&e.reset(...n))},[A,a(" Reset")]),o("div",I,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:t[2]||(t[2]=(...n)=>e.copy&&e.copy(...n)),"aria-label":"Copied HTML!"},[z,a(" Copy HTML")]),o("button",{class:"btn btn-info",id:"copyTextVersion","data-component":r.currentTemplate,onClick:t[3]||(t[3]=(...n)=>e.copyTextVersion&&e.copyTextVersion(...n)),"aria-label":"Copied Text!"},[F,a(" Copy text")],8,E)])])]),"render-container":p(()=>[o("div",N,[o("div",R,[o("table",j,[o("tbody",null,[o("tr",null,[o("td",q,[o("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:e.output},null,8,D)])])])])])])]),_:1})}const O={components:{Workspace:f},props:["currentTemplate"],setup(l){const t=`# Lorem ipsum dolor sit amet
Consectetur adipisicing **elit**, sed do *eiusmod* [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.
`,r=w(t),e=_();i.use({renderer:e}),i.setOptions({gfm:!0,headerIds:!1});const d=H(()=>i(r.value));function c(){const u=document.getElementById("input");h(r,u,"calc(100vh - 275px)")}function s(){x()}function n(){g()}function m(){r.value=t}return M(c),{input:r,output:d,props:l,reset:m,copy:s,copyTextVersion:n}}},Y=C(O,[["render",G]]);export{Y as default};
