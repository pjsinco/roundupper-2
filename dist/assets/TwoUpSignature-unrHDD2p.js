import{W as D,c as K,a as J}from"./useButtonFunctions-rKceW1rL.js";import{u as Q}from"./renderer-aoa-general-P0pOEpI4.js";import{e as W}from"./useEditorFromTextArea-Vu5XOOF9.js";import"./markdown-dpzZz7rj.js";import{m as _}from"./marked.esm-KKTQJ6Gi.js";import{b as X,w as M,e as Y,o as Z,d as e,g,v as c,A as $,s as ee,h as k,x as v,_ as te,k as i,q as z,m as V,l as oe}from"./index-YBrPOYWF.js";import"./styles-base-aoa-general-5iRRJacY.js";const ne=e("h1",{class:"component__title"},"Two-up signature",-1),ie={class:"item-group"},se=e("h4",null,"Signature 1",-1),le={class:"form-group"},de=e("label",{for:"sig1Url"},"Image URL",-1),ae={class:"form-group"},re=e("label",{for:"sig1Input"},"Text (in Markdown)",-1),ge={class:"form-group"},ce=e("label",{for:"sig1ImageWidth"},"Image size",-1),pe={class:"form-group"},ue=e("label",{for:"sig1Spacer"},"Image spacer",-1),me={class:"item-group"},fe=e("h4",null,"Signature 2",-1),he={class:"form-group"},_e=e("label",{for:"sig2Url"},"Image URL",-1),ve={class:"form-group"},xe=e("label",{for:"sig2Input"},"Text (in Markdown)",-1),be={class:"form-group"},we=e("label",{for:"sig2ImageWidth"},"Image size",-1),ye={class:"form-group"},Ie=e("label",{for:"sig2Spacer"},"Image spacer",-1),ke={class:"row"},Ue={class:"col-xs"},Se={class:"form-group"},Ee={class:"checkbox-inline"},Te=["disabled"],Le={class:"form-group clearfix",style:{"margin-top":"40px"}},We=e("span",{class:"glyphicon glyphicon-refresh"},null,-1),Me={class:"btn-group pull-right"},ze=e("span",{class:"glyphicon glyphicon-copy"},null,-1),Ve={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0",overflow:"hidden"}},Ce={id:"rendered"},Ge={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},Pe={style:{direction:"ltr","font-size":"0px",padding:"0px","text-align":"center"}},He={class:"mj-column-per-50 mj-outlook-group-fix two-up-image-left",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Be={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Ae={style:{"vertical-align":"top",padding:"0 18px 24px 36px"}},Ne={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Oe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},Re=["src","width"],je={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},Fe=["innerHTML"],qe={class:"mj-column-per-50 mj-outlook-group-fix two-up-image-right",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},De={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Ke={style:{"vertical-align":"top",padding:"0 36px 24px 18px"}},Je={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Qe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},Xe=["src","width"],Ye={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},Ze=["innerHTML"];function $e(C,o,U,t,S,E){const u=Y("Workspace");return Z(),X(u,null,{form:M(()=>[ne,e("div",ie,[se,e("div",le,[de,g(e("input",{class:"form-control",type:"text",id:"sig1Url","onUpdate:modelValue":o[0]||(o[0]=n=>t.sig1Url=n)},null,512),[[c,t.sig1Url]])]),e("div",ae,[re,g(e("textarea",{class:"form-control",id:"sig1Input","onUpdate:modelValue":o[1]||(o[1]=n=>t.sig1Input=n),rows:"4"},null,512),[[c,t.sig1Input]])]),e("div",ge,[ce,g(e("input",{class:"form-control",type:"range",max:"252",step:"1",min:"0",id:"sig1ImageWidth",ref:"sig1Image","onUpdate:modelValue":o[2]||(o[2]=n=>t.sig1ImageWidth=n),onInput:o[3]||(o[3]=n=>t.showGuides=!0)},null,544),[[c,t.sig1ImageWidth]])]),e("div",pe,[ue,g(e("input",{class:"form-control",type:"range",max:"100",step:"1",min:"0",id:"sig1Spacer",ref:"sig1Spacer","onUpdate:modelValue":o[4]||(o[4]=n=>t.sig1Padding=n),onInput:o[5]||(o[5]=n=>t.showGuides=!0)},null,544),[[c,t.sig1Padding]])])]),e("div",me,[fe,e("div",he,[_e,g(e("input",{class:"form-control",type:"text",id:"sig2Url","onUpdate:modelValue":o[6]||(o[6]=n=>t.sig2Url=n)},null,512),[[c,t.sig2Url]])]),e("div",ve,[xe,g(e("textarea",{class:"form-control",id:"sig2Input","onUpdate:modelValue":o[7]||(o[7]=n=>t.sig2Input=n),rows:"4"},null,512),[[c,t.sig2Input]])]),e("div",be,[we,g(e("input",{class:"form-control",type:"range",max:"252",step:"1",min:"0",id:"sig2ImageWidth",ref:"sig2Image","onUpdate:modelValue":o[8]||(o[8]=n=>t.sig2ImageWidth=n),onInput:o[9]||(o[9]=n=>t.showGuides=!0)},null,544),[[c,t.sig2ImageWidth]])]),e("div",ye,[Ie,g(e("input",{class:"form-control",type:"range",max:"100",step:"1",min:"0",id:"sig2Spacer",ref:"sig2Spacer","onUpdate:modelValue":o[10]||(o[10]=n=>t.sig2Padding=n),onInput:o[11]||(o[11]=n=>t.showGuides=!0)},null,544),[[c,t.sig2Padding]])])]),e("div",ke,[e("div",Ue,[e("div",Se,[e("div",Ee,[e("label",{class:$({disabled:!t.canShowGuides})},[g(e("input",{type:"checkbox",name:"showGuides","onUpdate:modelValue":o[12]||(o[12]=n=>t.showGuides=n),disabled:!t.canShowGuides},null,8,Te),[[ee,t.showGuides]]),k("Show guide")],2)])])])]),e("div",Le,[e("button",{class:"btn btn-default",id:"refresh",onClick:o[13]||(o[13]=(...n)=>t.reset&&t.reset(...n))},[We,k(" Reset")]),e("div",Me,[e("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[14]||(o[14]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[ze,k(" Copy HTML")])])])]),"render-container":M(()=>[e("div",Ve,[e("div",Ce,[e("table",Ge,[e("tbody",null,[e("tr",null,[e("td",Pe,[e("div",He,[e("table",Be,[e("tbody",null,[e("tr",null,[e("td",Ae,[e("table",Ne,[e("tbody",null,[e("tr",null,[e("td",{align:"left",style:v({fontSize:"0px",padding:t.sig1Padding/2+"px 0 "+(12+t.sig1Padding/2)+"px 0",wordBreak:"break-word"})},[e("table",Oe,[e("tbody",null,[e("tr",null,[e("td",{style:v({width:t.sig1ImageWidth+"px"})},[e("img",{alt:"Signature",src:t.sig1Url,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:t.sig1ImageWidth,height:"auto"},null,8,Re)],4)])])])],4)]),e("tr",null,[e("td",je,[e("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:t.sig1Output,ref:"guideEl"},null,8,Fe)])])])])])])])])]),e("div",qe,[e("table",De,[e("tbody",null,[e("tr",null,[e("td",Ke,[e("table",Je,[e("tbody",null,[e("tr",null,[e("td",{align:"left",style:v({fontSize:"0px",padding:t.sig2Padding/2+"px 0 "+(12+t.sig2Padding/2)+"px 0",wordBreak:"break-word"})},[e("table",Qe,[e("tbody",null,[e("tr",null,[e("td",{style:v({width:t.sig2ImageWidth+"px"})},[e("img",{alt:"Signature",src:t.sig2Url,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:t.sig2ImageWidth,height:"auto"},null,8,Xe)],4)])])])],4)]),e("tr",null,[e("td",Ye,[e("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:t.sig2Output},null,8,Ze)])])])])])])])])])])])])])])])]),_:1})}const et={components:{Workspace:D},props:["currentTemplate"],setup(C){const o="https://resources.osteopathic.org/l/979203/2024-02-15/d6dwq/979203/1708018507zc9ErKRp/signature_monka_228_2x.png",U="https://resources.osteopathic.org/l/979203/2024-02-15/d6dwm/979203/1708018506pNSVFVsl/signature_creason_228_2x.png",t=`**Lorem Ipsum Dolor**  
Nullam Fringilla`,S=i(o),E=i(U),u=i(null),n=i(null),G=i(0),P=i(0),x=i(null),b=i(null),H=i(252),B=i(252),m=i(t),w=i(t),d=i(!1);let y=d.value;const T=i(null),I=i(!0),L="guide";z(m,()=>{m.value==""?I.value=!1:I.value=!0}),z(d,()=>{const a=T.value.querySelector("p");if(d.value===!0){let s=null,r=null;if(a){const l=a.firstChild;if(l.tagName=="SPAN")return;if(l.nodeType==1?(s=l.firstChild,r=l):l.nodeType==3&&(s=l,r=a),s&&r){const p=document.createElement("span");p.appendChild(document.createTextNode(s.nodeValue)),p.style.position="relative",p.setAttribute("id",L),p.classList.add("guide"),r.replaceChild(p,s)}}}else{const s=document.getElementById(L);s.parentElement.innerHTML=s.innerHTML}});const{renderer:A}=Q();_.use({renderer:A}),_.setOptions({gfm:!0,headerIds:!1});const N=V(()=>_(m.value)),O=V(()=>_(w.value));function R(){const a=document.getElementById("sig1Input");W(m,a).on("change",()=>{d.value=!1});const r=document.getElementById("sig2Input");W(w,r)}function f(a){y=d.value}function h(a){d.value=y}function j(){function a(s){const r=['[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="two-up-image-left-outlook" style="vertical-align:top;width:300px;" ><![endif]','[if mso | IE]></td><td class="two-up-image-right-outlook" style="vertical-align:top;width:300px;" ><![endif]',"[if mso | IE]></td></tr></table><![endif]"];for(let l=0,p=r.length;l<p;l++)s=s.replace(`%%MSO_${l}%%`,r[l]);return s}d.value=!1,y=d.value,K(a)}function F(){J()}function q(){window.location.reload()}return oe(()=>{R(),u.value.addEventListener("mousedown",f),u.value.addEventListener("mouseup",h),x.value.addEventListener("mousedown",f),x.value.addEventListener("mouseup",h),n.value.addEventListener("mousedown",f),n.value.addEventListener("mouseup",h),b.value.addEventListener("mousedown",f),b.value.addEventListener("mouseup",h)}),{sig1Image:u,sig2Image:n,sig1Url:S,sig2Url:E,sig1ImageWidth:H,sig2ImageWidth:B,sig1Spacer:x,sig2Spacer:b,sig1Padding:G,sig2Padding:P,sig1Input:m,sig2Input:w,sig1Output:N,sig2Output:O,showGuides:d,canShowGuides:I,guideEl:T,copy:j,copyTextVersion:F,reset:q}}},at=te(et,[["render",$e]]);export{at as default};