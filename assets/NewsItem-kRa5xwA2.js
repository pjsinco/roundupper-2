import{W as Y}from"./useButtonFunctions-m8950xax.js";import{o as a,c,d as t,F as Z,p as tt,B as f,A as et,i as A,_ as x,k as m,l as I,C as ot,g as h,D as lt,E as nt,G as st,s as M,y,b as F,w as i,h as u,e as g,a as _,v,x as U,m as S,z as it}from"./index-EfL-jzhz.js";import{u as at,C as dt}from"./renderer-newsletter-pe51VF_h.js";import{e as V}from"./useEditorFromTextArea-Vu5XOOF9.js";import{u as rt}from"./button-setup-wI-FOdSp.js";import{u as ct}from"./add-image-attributes-cDbFoq3Q.js";import{m as C}from"./marked.esm-KKTQJ6Gi.js";import"./styles-base-aoa-general-5iRRJacY.js";import"./markdown-dpzZz7rj.js";const pt={class:"tabs"},ut={class:"tabs__header"},_t=["textContent","onClick"],mt=t("hr",{class:"tabs__line"},null,-1);function ht(n,o,s,e,p,r){return a(),c("div",pt,[t("ul",ut,[(a(!0),c(Z,null,tt(e.tabTitles,d=>(a(),c("li",{key:d,class:et([e.selectedTitle==d?"selected":""])},[t("button",{textContent:A(d),onClick:b=>e.selectedTitle=d},null,8,_t)],2))),128))]),mt,f(n.$slots,"default")])}const gt={setup(n,{slots:o}){const s=m(o.default().map(r=>r.props.title)),e=m(null);function p(r){e.value=r}return ot("selectedTitle",e),I(()=>{s.value.length&&(e.value=s.value[0])}),{handleClick:p,tabTitles:s,selectedTitle:e}}},bt=x(gt,[["render",ht]]),ft={role:"tabpanel"};function xt(n,o,s,e,p,r){return h((a(),c("div",ft,[f(n.$slots,"default")],512)),[[lt,e.selectedTitle==s.title]])}const vt={props:["title"],setup(n){return{selectedTitle:nt("selectedTitle")}}},yt=x(vt,[["render",xt]]),kt=t("div",{class:"switch__div peer"},null,-1),wt=t("span",{class:"switch__text"},null,-1),Bt={__name:"Switch",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const o=st(n,"modelValue"),s=`switch-${Math.floor(1e3*Math.random()*4e3)}`;return(e,p)=>(a(),c("label",{class:"switch__label",for:s},[h(t("input",{class:"switch sr-only peer",type:"checkbox",id:s,"onUpdate:modelValue":p[0]||(p[0]=r=>o.value=r)},null,512),[[M,o.value]]),kt,wt]))}},Tt={class:"option"},Ct={class:"option__front"},At={class:"option__head"},$t={class:"option__tail"},St={key:0,class:"option__show"},Mt={class:"option__show-item"};function Ut(n,o,s,e,p,r){return a(),c("div",Tt,[t("div",Ct,[t("div",At,[f(n.$slots,"head")]),t("div",$t,[f(n.$slots,"tail")])]),e.props.shouldShow?(a(),c("div",St,[t("div",Mt,[f(n.$slots,"show")])])):y("",!0)])}const Vt={props:{shouldShow:{type:Boolean,default:!1}},setup(n){return{props:n}}},It=x(Vt,[["render",Ut]]),Ft={class:"button-link"};function Lt(n,o,s,e,p,r){return a(),c("button",Ft,[f(n.$slots,"text")])}const Ht={setup(){return{}}},L=x(Ht,[["render",Lt]]);function zt(n,o,s,e,p,r){const d=g("ButtonLink");return a(),F(d,{class:"pull-right",onClick:o[0]||(o[0]=b=>n.includeButton=!0)},{text:i(()=>[u("Remove")]),_:1})}const Et={components:{ButtonLink:L},setup(){return{}}},Nt=x(Et,[["render",zt]]),Ot={class:"item-group",style:{"margin-top":"-1px","margin-bottom":"-1px"}},Dt={style:{"margin-top":"13px"}};function Rt(n,o,s,e,p,r){const d=g("CloseButton");return a(),c("div",Ot,[t("h4",Dt,[u(A(e.props.text)+" ",1),_(d,{onClick:o[0]||(o[0]=b=>e.props.closer=!1)})]),f(n.$slots,"default")])}const Wt={props:{closer:{type:Boolean},title:{type:String,default:""}},setup(n){return console.log("hello"),{props:n}}},jt=x(Wt,[["render",Rt]]),Gt=t("div",{class:"row"},[t("div",{class:"col-xs-12"},[t("h1",{class:"component__title"},"News item")])],-1),Pt={class:"row"},Xt={class:"col-xs-12"},qt={class:"form-group"},Jt=t("label",{for:"headline"},"Headline (in Markdown)",-1),Kt={class:"row"},Qt={class:"col-xs-12"},Yt={class:"form-group"},Zt=t("label",{for:"input"},"Content (in Markdown)",-1),te={class:"row"},ee={class:"col-xs-12"},oe={class:"row"},le={class:"col-xs-12"},ne={class:"item-group",style:{"margin-top":"-1px","margin-bottom":"-1px"}},se={style:{"margin-top":"13px"}},ie={class:"form-group"},ae={class:"form-group"},de=t("label",{for:"text"},"Button text",-1),re={class:"form-group"},ce=t("label",{for:"link"},"Link",-1),pe={class:"form-group"},ue={class:"checkbox-inline"},_e={class:"row"},me={class:"col-xs-12"},he={class:"item-group",style:{"margin-top":"-1px","margin-bottom":"-1px"}},ge={style:{"margin-top":"13px"}},be={class:"form-group"},fe=t("label",{for:"imageUrl"},"Image URL",-1),xe=t("p",{class:"help-block"},"Image will be 120px wide",-1),ve={class:"form-group"},ye=t("label",{for:"caption"},"Caption",-1),ke={class:"row"},we={class:"col-xs-12"},Be={class:"form-group clearfix",style:{"margin-top":"40px"}},Te=t("span",{class:"glyphicon glyphicon-refresh"},null,-1),Ce={class:"btn-group pull-right"},Ae=t("span",{class:"glyphicon glyphicon-copy"},null,-1),$e={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0"}},Se={id:"rendered"},Me={key:0,bgcolor:"#FFFFFF",cellpadding:"0",cellspacing:"0",style:{border:"none","border-bottom":"none","border-collapse":"collapse","border-left":"none","border-right":"none","border-top":"none","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"100%"},Ue=t("tbody",null,[t("tr",null,[t("td",{align:"left",style:{padding:"0 36px 0 36px"}},[t("table",{bgcolor:"#FFFFFF",cellpadding:"0",cellspacing:"0",style:{border:"none","border-bottom":"none","border-collapse":"collapse","border-left":"none","border-right":"none","border-top":"none","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"100%"},[t("tbody",null,[t("tr",null,[t("td",{align:"left",style:{padding:"24px 0px 24px 0px"}},[t("table",{border:"0",cellpadding:"0",cellspacing:"0",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"100%"},[t("tbody",null,[t("tr",null,[t("td",null,[t("table",{cellpadding:"0",cellspacing:"0",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"100%"},[t("tbody",null,[t("tr",null,[t("td",{height:"1",style:{"border-bottom":"8px solid #eeeeee","line-height":"1px"},width:"1"})]),t("tr",null,[t("td",{height:"1",style:{"line-height":"1px"},width:"1"})])])])])])])])])])])])])])],-1),Ve=[Ue],Ie=["id","name"],Fe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},Le={key:0},He={class:"pardot-region","pardot-region":"",style:{"font-size":"0px",padding:"0 36px 24px 36px","word-break":"break-word"}},ze=["innerHTML"],Ee={class:"pardot-region","pardot-region":"",style:{"font-size":"0px",padding:"0 36px 0 36px","word-break":"break-word"}},Ne={key:0,class:"image",align:"right",cellpadding:"0",cellspacing:"0",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"}},Oe=["src"],De={key:0},Re={style:{padding:"8px 0px 18px 24px"}},We={class:"imagecaption",align:"right",cellpadding:"0",cellspacing:"0",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"150"},je={cellpadding:"0",cellspacing:"0",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"100%"},Ge={cellpadding:"8",cellspacing:"0",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"},width:"100%"},Pe={align:"center"},Xe={style:{color:"#666666","font-family":"Arial, Helvetica, sans-serif","font-size":"13px","font-weight":"normal","line-height":"17px","margin-bottom":"0","margin-top":"0"}},qe=["innerHTML"],Je={key:1,align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},Ke={class:"mj-column-per-100 mj-outlook-group-fix",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Qe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},Ye={align:"center","vertical-align":"middle",style:{"font-size":"0px",padding:"10px 32px","word-break":"break-word"}},Ze={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"separate","line-height":"100%"}},to={align:"center",bgcolor:"#22a49c",role:"presentation",style:{border:"none","border-radius":"0",cursor:"auto","mso-padding-alt":"10px 32px",background:"#22a49c"},valign:"middle",id:"msoPadding"},eo=["href"];function oo(n,o,s,e,p,r){const d=g("Tab"),b=g("Switch"),k=g("Option"),w=g("ButtonLink"),B=g("CloseButton"),T=g("Tabs"),$=g("Workspace");return a(),F($,null,{form:i(()=>[Gt,_(T,null,{default:i(()=>[_(d,{title:"Main"},{default:i(()=>[t("div",Pt,[t("div",Xt,[t("div",qt,[Jt,h(t("textarea",{class:"form-control",id:"headline","onUpdate:modelValue":o[0]||(o[0]=l=>e.headline=l)},null,512),[[v,e.headline]])])])]),t("div",Kt,[t("div",Qt,[t("div",Yt,[Zt,h(t("textarea",{class:"form-control",id:"input","onUpdate:modelValue":o[1]||(o[1]=l=>e.input=l)},null,512),[[v,e.input]])])])])]),_:1}),_(d,{title:"Extras"},{default:i(()=>[t("div",te,[t("div",ee,[_(k,null,{head:i(()=>[u("Divider")]),tail:i(()=>[_(b,{modelValue:e.dividerAbove,"onUpdate:modelValue":o[2]||(o[2]=l=>e.dividerAbove=l)},null,8,["modelValue"])]),_:1}),_(k,{"should-show":e.includeButton},{head:i(()=>[u("Button")]),tail:i(()=>[t("div",null,[_(w,{onClick:o[3]||(o[3]=l=>e.includeButton=!0)},{text:i(()=>[u("Add")]),_:1})])]),show:i(()=>[t("div",oe,[t("div",le,[t("div",ne,[t("h4",se,[u("Button "),_(B,{onClick:o[4]||(o[4]=l=>e.includeButton=!1)})]),t("div",ie,[t("div",ae,[de,h(t("input",{class:"form-control",type:"text",id:"text","onUpdate:modelValue":o[5]||(o[5]=l=>e.text=l)},null,512),[[v,e.text]])]),t("div",re,[ce,h(t("input",{class:"form-control",type:"text",id:"link","onUpdate:modelValue":o[6]||(o[6]=l=>e.link=l)},null,512),[[v,e.link]])]),t("div",pe,[t("div",ue,[t("label",null,[h(t("input",{type:"checkbox",name:"spaceAbove","onUpdate:modelValue":o[7]||(o[7]=l=>e.spaceAbove=l)},null,512),[[M,e.spaceAbove]]),u("Space above")]),t("label",null,[h(t("input",{type:"checkbox",name:"spaceBelow","onUpdate:modelValue":o[8]||(o[8]=l=>e.spaceBelow=l)},null,512),[[M,e.spaceBelow]]),u("Space below")])])])])])])])]),_:1},8,["should-show"]),_(k,{"should-show":e.includeImage},{head:i(()=>[u("Small image")]),tail:i(()=>[t("div",null,[_(w,{onClick:o[9]||(o[9]=l=>e.includeImage=!0)},{text:i(()=>[u("Add")]),_:1})])]),show:i(()=>[t("div",_e,[t("div",me,[t("div",he,[t("h4",ge,[u("Small image "),_(B,{onClick:o[10]||(o[10]=l=>e.includeImage=!1)})]),t("div",be,[fe,h(t("input",{class:"form-control",type:"text",id:"imageUrl","onUpdate:modelValue":o[11]||(o[11]=l=>e.imageUrl=l)},null,512),[[v,e.imageUrl]]),xe]),t("div",ve,[ye,h(t("input",{class:"form-control",type:"text",id:"caption","onUpdate:modelValue":o[12]||(o[12]=l=>e.caption=l)},null,512),[[v,e.caption]])])])])])]),_:1},8,["should-show"])])])]),_:1})]),_:1}),t("div",ke,[t("div",we,[t("div",Be,[t("button",{class:"btn btn-default",id:"refresh",onClick:o[13]||(o[13]=(...l)=>e.reset&&e.reset(...l))},[Te,u(" Reset")]),t("div",Ce,[t("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[14]||(o[14]=(...l)=>e.copy&&e.copy(...l)),"aria-label":"Copied HTML!"},[Ae,u(" Copy HTML")])])])])])]),"render-container":i(()=>[t("div",$e,[t("div",Se,[e.dividerAbove?(a(),c("table",Me,Ve)):y("",!0),t("a",{id:e.bookmark,name:e.bookmark},null,8,Ie),t("table",Fe,[t("tbody",null,[e.headlineOutput!=""?(a(),c("tr",Le,[t("td",He,[t("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:e.headlineOutput},null,8,ze)])])):y("",!0),t("tr",null,[t("td",Ee,[e.includeImage?(a(),c("table",Ne,[t("tbody",null,[t("tr",null,[t("td",{class:"null",style:U(e.imageTdStyle)},[t("img",{class:"img",align:"right",alt:"",border:"0",height:"auto",src:e.imageUrl,style:{inline:"true",margin:"0",position:"center","text-align":"right"},width:"150"},null,8,Oe)],4)]),e.caption!=""?(a(),c("tr",De,[t("td",Re,[t("table",We,[t("tbody",null,[t("tr",null,[t("td",null,[t("table",je,[t("tbody",null,[t("tr",null,[t("td",null,[t("table",Ge,[t("tbody",null,[t("tr",null,[t("td",Pe,[t("p",Xe,A(e.caption),1)])])])])])])])])])])])])])])):y("",!0)])])):y("",!0),t("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:e.output},null,8,qe)])])])]),e.includeButton?(a(),c("table",Je,[t("tbody",null,[t("tr",null,[t("td",{style:U(e.buttonTdStyle)},[t("div",Ke,[t("table",Qe,[t("tbody",null,[t("tr",null,[t("td",Ye,[t("table",Ze,[t("tbody",null,[t("tr",null,[t("td",to,[t("a",{href:e.link,style:{display:"inline-block",background:"#22a49c",color:"#ffffff","font-family":"Arial, sans-serif","font-size":"18px","font-weight":"bold","line-height":"120%",margin:"0","text-decoration":"none","text-transform":"none",padding:"10px 25px","mso-padding-alt":"0px","border-radius":"0"},target:"_blank"},A(e.text),9,eo)])])])])])])])])])],4)])])])):y("",!0)])])]),_:1})}const lo={components:{Workspace:Y,Tabs:bt,Tab:yt,Switch:Bt,Option:It,ButtonLink:L,CloseButton:Nt,ItemGroup:jt},props:["currentTemplate"],setup(n){const{renderer:o}=at();C.use({renderer:o}),C.setOptions({gfm:!0,headerIds:!1});const{errorAddingImageAttr:s}=ct();s.value&&console.error("Error adding attributes to image.");const e=dt.DEFAULT_TEXT_MD,p="### Lorem ipsum dolor",r="https://picsum.photos/150/150",d=m(e),b=m(p),k=m(r),w=m(""),B=m(!1),T=m(!0),$=m(!0),l=`bookmark-${Math.floor(1e3*Math.random()*4e3)}`,H=m({}),z=S(()=>C(d.value)),E=S(()=>C(b.value)),N=S(()=>({paddingTop:"3px",paddingBottom:w.value==""?"18px":"0px",paddingLeft:"24px",paddingRight:"0px",lineHeight:"1px"}));function O(){it(()=>{const K=document.getElementById("input");V(d,K,"300px");const Q=document.getElementById("headline");V(b,Q,"72px")})}I(O);function D(){B.value=!0}function R(){T.value=!0}const{text:W,link:j,spaceAbove:G,spaceBelow:P,copy:X,buttonTdStyle:q}=rt({spaceAbove:!0,spaceBelow:!1});function J(){window.location.reload()}return{input:d,headline:b,output:z,headlineOutput:E,props:n,reset:J,copy:X,imageUrl:k,caption:w,includeImage:B,includeButton:T,dividerAbove:$,imageTdStyle:N,bookmark:l,tabRef:H,handleAddImage:D,handleAddButton:R,text:W,link:j,spaceAbove:G,spaceBelow:P,buttonTdStyle:q}}},mo=x(lo,[["render",oo]]);export{mo as default};
