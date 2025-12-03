import{C as f}from"./index-q_ibDTZ2.js";import"./marked.esm-Ajh4Nhzb.js";function x(y){if(!y)return"";const c=Object.entries(y);return c.length?c.map(([S,g])=>`${S}:${String(g)}`).join(";"):""}function A(y){return String(y).replace(/["&<>]/g,c=>{switch(c){case'"':return"&quot;";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return c}})}function w(){function y(e){const i=this.parser.parseInline(e.tokens||[]),l=x(e.styleAttrs),a=(l?`${A(l)}`:"").split(";");return`
      <p style="${[...new Set([...f.Styles.P_STYLE,...a])].join("; ")}">${i}</p>`}const c=function(e){const i=this.parser.parseInline(e.tokens||[]),l=x(e.styleAttrs),a=(l?`${A(l)}`:"").split(";");let r;switch(e.depth){case 1:return r=[...new Set([...f.Styles.H1_STYLE,...a])],`<h1 style="${r.join("; ")}">${i}</h1>
`;case 2:return r=[...new Set([...f.Styles.H2_STYLE,...a])],console.info("styles",r),`<h2 style="${r.join("; ")}">${i}</h1>
`;case 3:return r=[...new Set([...f.Styles.H3_STYLE,...a])],`<h3 style="${r.join("; ")}">${i}</h3>
`;case 4:return r=[...new Set([...f.Styles.H4_STYLE,...a])],`<h4 style="${r.join("; ")}">${i}</h4>
`;case 5:default:return r=[...new Set([...f.Styles.H5_STYLE,...a])],`<h5 style="${r.join("; ")}">${i}</h5>
`}};function S(e){const i=this.parser.parseInline(e.tokens||[]),l=e.href?A(e.href):"",u=e.title?` title="${A(e.title)}"`:"",a=x(e.styleAttrs),d=(a?`${A(a)}`:"").split(";"),h=[...new Set([...f.Styles.LINK_STYLE,...d])];return`
      <a href="${l}" 
         style="${h.join("; ")}"
         ${u}">${i}</a>`}function g(e){const i=e.ordered;e.start;let l="";for(let h=0;h<e.items.length;h++){const t=e.items[h];l+=this.listitem(t)}const u=["text-align: left","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],a=["margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],r=i?"ol":"ul",d=i?"1":"disc";return`
      <div class="forOutlooks" pardot-region="unordered_list" style="${u.join("; ")}">
        <${r} 
          class="glist" 
          style="${a.join("; ")}" 
          align="left" 
          type="${d}"
        >
          ${l}</ol>
        <${r}></div>
`}function $({href:e,title:i,text:l,tokens:u}){return`
      <img src="${e}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" title=${i} alt="${l}" />`}return{paragraph:y,heading:c,link:S,list:g,image:$}}function L(){const{heading:y,paragraph:c,link:S,image:g,list:$}=w();function e(t){const s={};if(!t)return s;const o=/([a-zA-Z0-9_-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"']+))/g;let n;for(;(n=o.exec(t))!==null;){const p=n[1],m=n[2]??n[3]??n[4]??"";s[p]=m}return s}const i=new Set(["link"]);function l(t){if(Array.isArray(t))for(let s=0;s<t.length;s++){const o=t[s];if(o.type==="styleAttributes"){const n=t[s-1];if(n&&i.has(n.type)){const p=e(o.attrs);n.styleAttrs=Object.assign(n.styleAttrs||{},p),t.splice(s,1),s--}}}}function u(t){const s=t.tokens;if(!Array.isArray(s)||s.length===0)return;const o=s[s.length-1];if(o&&o.type==="styleAttributes"){const n=e(o.attrs);t.styleAttrs=Object.assign(t.styleAttrs||{},n),s.pop()}}function a(t){for(let s=0;s<t.length-1;s++){const o=t[s],n=t[s+1];if(o.type==="list"&&n.type==="paragraph"&&Array.isArray(n.tokens)&&n.tokens.length===1&&n.tokens[0].type==="styleAttributes"){const p=e(n.tokens[0].attrs);o.styleAttrs={...o.styleAttrs||{},...p},t.splice(s+1,1),s--}}}return{renderer:{paragraph:c,heading:y,link:S,list:$,image:g},walkTokens:t=>{(t.type==="heading"||t.type==="paragraph")&&Array.isArray(t.tokens)&&(l(t.tokens),u(t))},attachListStyles:a,styleAttributesExtension:{name:"styleAttributes",level:"inline",start(t){return t.indexOf("{:")},tokenizer(t,s){const n=/^\{:\s*([^}]+)\}/.exec(t);if(!n)return;const p=n[0],m=n[1].trim();return{type:"styleAttributes",raw:p,attrs:m}}}}}export{L as u};
