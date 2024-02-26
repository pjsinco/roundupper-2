import{W as R}from"./animate-KdRnERix.js";import{m as F}from"./useMdRendererForAoaGeneral-4v_1Hj10.js";import{e as z}from"./useEditorFromTextArea-Vu5XOOF9.js";import"./markdown-dpzZz7rj.js";import{m as b}from"./marked.esm-KKTQJ6Gi.js";import{r as q,b as D,w as V,o as K,e,g as l,v as d,z as J,x as Q,h as v,y as x,_ as X,j as i,p as C,l as M,k as Y}from"./index-GHJKMDaw.js";const Z=e("h1",{class:"component__title"},"Two-Up Signature",-1),$={class:"item-group"},ee=e("h4",null,"Signature 1",-1),te={class:"form-group"},oe=e("label",{for:"sig1Url"},"Image URL",-1),ne={class:"form-group"},ie=e("label",{for:"sig1Input"},"Text (in Markdown)",-1),se={class:"form-group"},le=e("label",{for:"sig1ImageWidth"},"Image Size",-1),de={class:"form-group"},ae=e("label",{for:"sig1Spacer"},"Image Spacer",-1),re={class:"item-group"},ge=e("h4",null,"Signature 2",-1),pe={class:"form-group"},ce=e("label",{for:"sig2Url"},"Image URL",-1),ue={class:"form-group"},me=e("label",{for:"sig2Input"},"Text (in Markdown)",-1),fe={class:"form-group"},he=e("label",{for:"sig2ImageWidth"},"Image Size",-1),_e={class:"form-group"},be=e("label",{for:"sig2Spacer"},"Image Spacer",-1),ve={class:"row"},xe={class:"col-xs"},ye={class:"form-group"},we={class:"checkbox-inline"},Ie=["disabled"],ke={class:"form-group clearfix",style:{"margin-top":"40px"}},Se=e("span",{class:"glyphicon glyphicon-refresh"},null,-1),Ue={class:"btn-group pull-right"},Te=e("span",{class:"glyphicon glyphicon-copy"},null,-1),Ee=["data-component"],Le=e("span",{class:"glyphicon glyphicon-copy"},null,-1),We={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0",overflow:"hidden"}},ze={id:"rendered"},Ve={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},Ce={style:{direction:"ltr","font-size":"0px",padding:"0px","text-align":"center"}},Me={class:"mj-column-per-50 mj-outlook-group-fix two-up-image-left",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Ge={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Pe={style:{"vertical-align":"top",padding:"0 12px 24px 36px"}},He={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Be={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},Ne=["src","width"],Ae={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},je=["innerHTML"],Oe={class:"mj-column-per-50 mj-outlook-group-fix two-up-image-right",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Re={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Fe={style:{"vertical-align":"top",padding:"0 36px 24px 12px"}},qe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},De={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},Ke=["src","width"],Je={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},Qe=["innerHTML"];function Xe(a,o,y,t,U,T){const u=q("Workspace");return K(),D(u,null,{form:V(()=>[Z,e("div",$,[ee,e("div",te,[oe,l(e("input",{class:"form-control",type:"text",id:"sig1Url","onUpdate:modelValue":o[0]||(o[0]=n=>t.sig1Url=n)},null,512),[[d,t.sig1Url]])]),e("div",ne,[ie,l(e("textarea",{class:"form-control",id:"sig1Input","onUpdate:modelValue":o[1]||(o[1]=n=>t.sig1Input=n),rows:"4"},null,512),[[d,t.sig1Input]])]),e("div",se,[le,l(e("input",{class:"form-control",type:"range",max:"252",step:"1",min:"0",id:"sig1ImageWidth",ref:"sig1Image","onUpdate:modelValue":o[2]||(o[2]=n=>t.sig1ImageWidth=n),onInput:o[3]||(o[3]=n=>t.showGuides=!0)},null,544),[[d,t.sig1ImageWidth]])]),e("div",de,[ae,l(e("input",{class:"form-control",type:"range",max:"100",step:"1",min:"0",id:"sig1Spacer",ref:"sig1Spacer","onUpdate:modelValue":o[4]||(o[4]=n=>t.sig1Padding=n),onInput:o[5]||(o[5]=n=>t.showGuides=!0)},null,544),[[d,t.sig1Padding]])])]),e("div",re,[ge,e("div",pe,[ce,l(e("input",{class:"form-control",type:"text",id:"sig2Url","onUpdate:modelValue":o[6]||(o[6]=n=>t.sig2Url=n)},null,512),[[d,t.sig2Url]])]),e("div",ue,[me,l(e("textarea",{class:"form-control",id:"sig2Input","onUpdate:modelValue":o[7]||(o[7]=n=>t.sig2Input=n),rows:"4"},null,512),[[d,t.sig2Input]])]),e("div",fe,[he,l(e("input",{class:"form-control",type:"range",max:"252",step:"1",min:"0",id:"sig2ImageWidth",ref:"sig2Image","onUpdate:modelValue":o[8]||(o[8]=n=>t.sig2ImageWidth=n),onInput:o[9]||(o[9]=n=>t.showGuides=!0)},null,544),[[d,t.sig2ImageWidth]])]),e("div",_e,[be,l(e("input",{class:"form-control",type:"range",max:"100",step:"1",min:"0",id:"sig2Spacer",ref:"sig2Spacer","onUpdate:modelValue":o[10]||(o[10]=n=>t.sig2Padding=n),onInput:o[11]||(o[11]=n=>t.showGuides=!0)},null,544),[[d,t.sig2Padding]])])]),e("div",ve,[e("div",xe,[e("div",ye,[e("div",we,[e("label",{class:J({disabled:!t.canShowGuides})},[l(e("input",{type:"checkbox",name:"showGuides","onUpdate:modelValue":o[12]||(o[12]=n=>t.showGuides=n),disabled:!t.canShowGuides},null,8,Ie),[[Q,t.showGuides]]),v("Show Guide")],2)])])])]),e("div",ke,[e("button",{class:"btn btn-default",id:"refresh",onClick:o[13]||(o[13]=(...n)=>a.reset&&a.reset(...n))},[Se,v(" Reset")]),e("div",Ue,[e("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[14]||(o[14]=(...n)=>a.copy&&a.copy(...n)),"aria-label":"Copied HTML!"},[Te,v(" Copy HTML")]),e("button",{class:"btn btn-info",id:"copyTextVersion","data-component":y.currentTemplate,onClick:o[15]||(o[15]=(...n)=>a.copyTextVersion&&a.copyTextVersion(...n)),"aria-label":"Copied Text!"},[Le,v(" Copy text")],8,Ee)])])]),"render-container":V(()=>[e("div",We,[e("div",ze,[e("table",Ve,[e("tbody",null,[e("tr",null,[e("td",Ce,[e("div",Me,[e("table",Ge,[e("tbody",null,[e("tr",null,[e("td",Pe,[e("table",He,[e("tbody",null,[e("tr",null,[e("td",{align:"left",style:x({fontSize:"0px",padding:t.sig1Padding/2+"px 0 "+(12+t.sig1Padding/2)+"px 0",wordBreak:"break-word"})},[e("table",Be,[e("tbody",null,[e("tr",null,[e("td",{style:x({width:t.sig1ImageWidth+"px"})},[e("img",{alt:"Signature",src:t.sig1Url,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:t.sig1ImageWidth,height:"auto"},null,8,Ne)],4)])])])],4)]),e("tr",null,[e("td",Ae,[e("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:t.sig1Output,ref:"guideEl"},null,8,je)])])])])])])])])]),e("div",Oe,[e("table",Re,[e("tbody",null,[e("tr",null,[e("td",Fe,[e("table",qe,[e("tbody",null,[e("tr",null,[e("td",{align:"left",style:x({fontSize:"0px",padding:t.sig2Padding/2+"px 0 "+(12+t.sig2Padding/2)+"px 0",wordBreak:"break-word"})},[e("table",De,[e("tbody",null,[e("tr",null,[e("td",{style:x({width:t.sig2ImageWidth+"px"})},[e("img",{alt:"Signature",src:t.sig2Url,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:t.sig2ImageWidth,height:"auto"},null,8,Ke)],4)])])])],4)]),e("tr",null,[e("td",Je,[e("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:t.sig2Output},null,8,Qe)])])])])])])])])])])])])])])])]),_:1})}const Ye={components:{Workspace:R},props:["currentTemplate"],setup(a){const o="https://resources.osteopathic.org/l/979203/2024-02-15/d6dwq/979203/1708018507zc9ErKRp/signature_monka_228_2x.png",y="https://resources.osteopathic.org/l/979203/2024-02-15/d6dwm/979203/1708018506pNSVFVsl/signature_creason_228_2x.png",t=`**Lorem Ipsum Dolor**  
Nullam Fringilla`,U=i(o),T=i(y),u=i(null),n=i(null),G=i(0),P=i(0),w=i(null),I=i(null),H=i(252),B=i(252),m=i(t),k=i(t),r=i(!1);let E=r.value;const L=i(null),S=i(!0),W="guide";C(m,()=>{m.value==""?S.value=!1:S.value=!0}),C(r,()=>{const g=L.value.querySelector("p");if(r.value===!0){let s=null,p=null;if(g){const c=g.firstChild;if(c.tagName=="SPAN")return;if(c.nodeType==1?(s=c.firstChild,p=c):c.nodeType==3&&(s=c,p=g),s&&p){const f=document.createElement("span");f.appendChild(document.createTextNode(s.nodeValue)),f.style.position="relative",f.setAttribute("id",W),f.classList.add("guide"),p.replaceChild(f,s)}}}else{const s=document.getElementById(W);s.parentElement.innerHTML=s.innerHTML}}),console.log("ok");const N=F();b.use({renderer:N}),b.setOptions({gfm:!0,headerIds:!1});const A=M(()=>b(m.value)),j=M(()=>b(k.value));function O(){const g=document.getElementById("sig1Input");z(m,g).on("change",()=>{r.value=!1});const p=document.getElementById("sig2Input");z(k,p)}function h(g){E=r.value}function _(g){r.value=E}return Y(()=>{O(),u.value.addEventListener("mousedown",h),u.value.addEventListener("mouseup",_),w.value.addEventListener("mousedown",h),w.value.addEventListener("mouseup",_),n.value.addEventListener("mousedown",h),n.value.addEventListener("mouseup",_),I.value.addEventListener("mousedown",h),I.value.addEventListener("mouseup",_)}),console.log("hiya"),{sig1Image:u,sig2Image:n,sig1Url:U,sig2Url:T,sig1ImageWidth:H,sig2ImageWidth:B,sig1Spacer:w,sig2Spacer:I,sig1Padding:G,sig2Padding:P,sig1Input:m,sig2Input:k,sig1Output:A,sig2Output:j,showGuides:r,canShowGuides:S,guideEl:L}}},it=X(Ye,[["render",Xe]]);export{it as default};
