import{c as w,a as B}from"./useButtonFunctions-MUEziNY_.js";import{k as s,q as E,m as S}from"./index-GhYbLKtp.js";function k(v={}){let n=Object.assign({},{spaceAbove:!0,spaceBelow:!0,text:"Learn more",link:"",colorName:"Teal"},v);const d=[{name:"Teal",hex:"#22a49c"},{name:"Navy",hex:"#000066"}],p=s(n.text),u=s(n.link),m=s(n.spaceAbove),f=s(n.spaceBelow),g=s(n.colorName),x=s(y(n.colorName).hex);function y(a){return d.find(r=>r.name===a)}E(g,a=>{const r=y(a);x.value=r.hex});function b(){function a(e){const t=['<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->',"<!--[if mso | IE]></td></tr></table><![endif]-->"],c=/<span.?id="mso_\d"><\/span>/gm,o=[...e.matchAll(c)];console.log(`Found ${o.length} targets for ${t.length} replacements`);for(let l=0,i=t.length;l<i;l++)e=e.replace(o[l],t[l]);return e}w(e=>{e=a(e);const t=new DocumentFragment,c=document.createElement("div");c.innerHTML=e,t.append(c);const o=t.getElementById("msoPadding");if(o!==null){const i=`${o.getAttribute("style")} mso-padding-alt: 10px 32px;`;o.setAttribute("style",i)}return t.firstElementChild.innerHTML})}function A(){B()}function h(){p.value="Learn more",u.value=""}const T=S(()=>({direction:"ltr",fontSize:"0px",paddingTop:m.value?"20px":"0",paddingBottom:f.value?"20px":"0",paddingLeft:"0px",textAlign:"center"}));return{text:p,link:u,spaceAbove:m,spaceBelow:f,copy:b,copyTextVersion:A,reset:h,buttonTdStyle:T,selectedColor:g,colorOptions:d,hex:x}}export{k as u};
