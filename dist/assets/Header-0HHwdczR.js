import{W as _}from"./animate-KdRnERix.js";import{c as g,a as u}from"./useButtonFunctions-KfWTjEuH.js";import{r as y,b as f,w as d,o as b,e as o,g as p,v as h,h as i,_ as x,j as m}from"./index-GHJKMDaw.js";const k=o("h1",null,"Header",-1),v={class:"form-group"},T=o("label",{for:"imageUrl"},"Image URL",-1),w=o("p",{class:"help-block"},"For sharpest display, the header width should be 1200px (twice the 600px display width)",-1),U={class:"form-group"},C=o("label",{for:"link"},"Image link",-1),V={class:"form-group clearfix",style:{"margin-top":"40px"}},H=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),W={class:"btn-group pull-right"},L=o("span",{class:"glyphicon glyphicon-copy"},null,-1),B=["data-component"],I=o("span",{class:"glyphicon glyphicon-copy"},null,-1),M={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"transparent"}},D={id:"rendered"},N={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"},slot:"render"},R={style:{width:"600px"}},j=["href"],z=["src"];function F(a,e,s,t,l,c){const r=y("Workspace");return b(),f(r,null,{form:d(()=>[k,o("div",v,[T,p(o("input",{class:"form-control",type:"text",id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=n=>t.imageUrl=n)},null,512),[[h,t.imageUrl]]),w]),o("div",U,[C,p(o("input",{class:"form-control",type:"text",id:"link","onUpdate:modelValue":e[1]||(e[1]=n=>t.link=n)},null,512),[[h,t.link]])]),o("div",V,[o("button",{class:"btn btn-default",id:"refresh",onClick:e[2]||(e[2]=(...n)=>t.reset&&t.reset(...n))},[H,i(" Reset")]),o("div",W,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:e[3]||(e[3]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[L,i(" Copy HTML")]),o("button",{class:"btn btn-info",id:"copyTextVersion","data-component":s.currentTemplate,onClick:e[4]||(e[4]=(...n)=>t.copyTextVersion&&t.copyTextVersion(...n)),"aria-label":"Copied Text!"},[I,i(" Copy text")],8,B)])])]),"render-container":d(()=>[o("div",M,[o("div",D,[o("table",N,[o("tbody",null,[o("tr",null,[o("td",R,[o("a",{href:t.link,target:"_blank"},[o("img",{src:t.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:"600",height:"auto"},null,8,z)],8,j)])])])])])])]),_:1})}const S={components:{Workspace:_},props:["currentTemplate"],setup(a){const e="https://storage.pardot.com/979203/1682623667W6SwDyna/aoa_blue_1.png",s="https://osteopathic.org",t=m(e),l=m(s);function c(){g()}function r(){u()}function n(){t.value=e,l.value=s}return{imageUrl:t,link:l,props:a,reset:n,copy:c,copyTextVersion:r}}},G=x(S,[["render",F]]);export{G as default};
