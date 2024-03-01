import{W as v,c as k,a as U}from"./useButtonFunctions-Gtg0q8Hh.js";import{g as w}from"./useMdRendererForAffiliates-ZBZJ_Ke2.js";import{e as V}from"./useEditorFromTextArea-Vu5XOOF9.js";import{m as p}from"./marked.esm-KKTQJ6Gi.js";import{r as C,b as H,w as g,o as M,e as t,g as r,v as a,h as m,t as I,_ as L,j as d,l as W,k as B}from"./index-MMltP9Ln.js";import"./markdown-dpzZz7rj.js";const N=t("h1",null,"News item with image",-1),A={class:"form-group"},R=t("label",{for:"headline"},"Headline",-1),j={class:"form-group"},D=t("label",{for:"input"},"Text (in Markdown)",-1),E={class:"form-group"},F=t("label",{for:"imageUrl"},"Image URL",-1),z={class:"form-group"},O=t("label",{for:"altText"},"Alt Text",-1),S={class:"form-group clearfix",style:{"margin-top":"40px"}},q=t("span",{class:"glyphicon glyphicon-refresh"},null,-1),G={class:"btn-group pull-right"},J=t("span",{class:"glyphicon glyphicon-copy"},null,-1),K=["data-component"],P=t("span",{class:"glyphicon glyphicon-copy"},null,-1),Q={style:{"max-width":"590px",margin:"0 auto","background-color":"#fff"}},X={id:"rendered"},Y={align:"left",bgcolor:"#ffffff"},Z={style:{"margin-left":"0","margin-right":"0","margin-top":"0","margin-bottom":"6px","font-family":"Arial, Helvetica, sans-serif","font-size":"22px","font-weight":"normal","line-height":"33px","text-align":"left",color:"#235685"}},$={"pardot-removable":"","pardot-repeatable":"",bgcolor:"#ffffff",width:"100%",cellpadding:"0",cellspacing:"0",style:{border:"none","border-bottom":"none","border-collapse":"collapse","border-left":"none","border-right":"none","border-top":"none","mso-table-lspace":"0pt","mso-table-rspace":"0pt"}},tt={align:"left",style:{padding:"0"}},et={cellpadding:"0",cellspacing:"0",align:"right",style:{border:"none","border-collapse":"collapse","mso-table-lspace":"0pt","mso-table-rspace":"0pt"}},ot={style:{padding:"5px 0px 10px 10px","line-height":"1px"}},nt=["alt","src"],lt=t("tr",null,[t("td",{style:{padding:"0px"}})],-1),st=["innerHTML"];function it(u,o,s,e,c,l){const i=C("Workspace");return M(),H(i,null,{form:g(()=>[N,t("div",A,[R,r(t("input",{class:"form-control",type:"text",id:"headline","onUpdate:modelValue":o[0]||(o[0]=n=>e.headline=n)},null,512),[[a,e.headline]])]),t("div",j,[D,r(t("textarea",{class:"form-control",id:"input","onUpdate:modelValue":o[1]||(o[1]=n=>e.input=n)},null,512),[[a,e.input]])]),t("div",E,[F,r(t("input",{class:"form-control",type:"text",id:"imageUrl","onUpdate:modelValue":o[2]||(o[2]=n=>e.imageUrl=n)},null,512),[[a,e.imageUrl]])]),t("div",z,[O,r(t("input",{class:"form-control",type:"text",id:"altText","onUpdate:modelValue":o[3]||(o[3]=n=>e.altText=n)},null,512),[[a,e.altText]])]),t("div",S,[t("button",{class:"btn btn-default",id:"refresh",onClick:o[4]||(o[4]=(...n)=>e.reset&&e.reset(...n))},[q,m(" Reset")]),t("div",G,[t("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[5]||(o[5]=(...n)=>e.copy&&e.copy(...n)),"aria-label":"Copied HTML!"},[J,m(" Copy HTML")]),t("button",{class:"btn btn-info",id:"copyTextVersion","data-component":s.currentTemplate,onClick:o[6]||(o[6]=(...n)=>e.copyTextVersion&&e.copyTextVersion(...n)),"aria-label":"Copied Text!"},[P,m(" Copy text")],8,K)])])]),"render-container":g(()=>[t("div",Q,[t("div",X,[t("div",Y,[t("h3",Z,I(e.headline),1)]),t("table",$,[t("tbody",null,[t("tr",null,[t("td",tt,[t("table",et,[t("tbody",null,[t("tr",null,[t("td",ot,[t("img",{alt:e.altText,src:e.imageUrl,border:"0",width:"120",align:"right",style:{inline:"true",margin:"0",position:"center","text-align":"right"}},null,8,nt)]),lt])])]),t("span",{class:"text",style:{inline:"true"},innerHTML:e.output},null,8,st)])])])])])])]),_:1})}const rt={components:{Workspace:v},props:["currentTemplate"],setup(u){const o=w();p.use({renderer:o}),p.setOptions({gfm:!0,headerIds:!1});const s=`Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.
`,e="Lorem ipsum dolor",c="https://picsum.photos/150/150",l=d(s),i=d(e),n=d(c),f=d(""),h=W(()=>p(l.value));function _(){const T=document.getElementById("input");V(l,T,"300px")}B(_);function b(){k()}function x(){U()}function y(){l.value=s,i.value=e,n.value=c,f.value=""}return{input:l,output:h,props:u,reset:y,copy:b,copyTextVersion:x,headline:i,imageUrl:n,altText:f}}},ft=L(rt,[["render",it]]);export{ft as default};