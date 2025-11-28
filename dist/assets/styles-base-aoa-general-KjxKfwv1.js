import"./marked.esm-Ajh4Nhzb.js";const i={black:"#2a2a2a",navy:"#000066",teal:"#22a49c",seaSerpent:"#11c7eb",warm:"#f9f7f5",grey:"#f5f5f5",lightGrey:"#eee",lighterGrey:"#f8f8f8"},p={unit:24},o={lineDrop:`${p.unit}px`,halfLineDrop:`${p.unit/2}px`,fontFamily:"Arial, Helvetica, sans-serif",layout:{fullWidth:600,liveAreaWidth:528},colors:{headline:i.navy,text:i.black,link:i.teal,background:i.warm,primary:i.navy,secondary:i.teal,accent:i.seaSerpent,grey:i.grey,lightGrey:i.lightGrey,lighterGrey:i.lighterGrey}},x={P_STYLE:["margin: 0 0 0 0"],H1_STYLE:[`margin-bottom: ${o.halfLineDrop}`,"margin-top: 0",`font-family: ${o.fontFamily}`,"font-size: 20px","font-weight: bold","line-height: 28px","text-align: center",`color: ${o.colors.headline}`],H2_STYLE:[`margin-bottom: ${o.halfLineDrop}`,"margin-top: 0",`font-family: ${o.fontFamily}`,"font-size: 18px","font-weight: normal","text-align: center","line-height: 24px",`color: ${o.colors.text}`],H3_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${o.fontFamily}`,"font-size: 20px","font-weight: bold","line-height: 28px","text-align: left"],H4_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${o.fontFamily}`,"font-size: 18px","font-weight: bold","line-height: 24px","text-align: left"],H5_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${o.fontFamily}`,"font-size: 16px","font-weight: bold","line-height: 24px","text-align: left"],LINK_STYLE:[`color: ${o.colors.link}`,"font-weight: bold","text-decoration: none"]},l={DEFAULT_TEXT_MARKDOWN:"**Lorem ipsum dolor** sit amet, consectetur adipisicing elit, sed do eiusmod [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.",DEFAULT_HEADER_URL:"https://resources.osteopathic.org/l/979203/2024-02-01/czs3n/979203/17067972618vJSBE23/placeholder_100px.png",Styles:x};function $(){function y({tokens:e}){const n=this.parser.parseInline(e);return`
      <p style="${l.Styles.P_STYLE.join("; ")}">${n}</p>`}function f({tokens:e,depth:n}){const t=this.parser.parseInline(e);switch(n){case 1:return`<h1 style="${l.Styles.H1_STYLE.join("; ")}">${t}</h1>
`;case 2:return`<h2 style="${l.Styles.H2_STYLE.join("; ")}">${t}</h1>
`;case 3:return`<h3 style="${l.Styles.H3_STYLE.join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${l.Styles.H4_STYLE.join("; ")}">${t}</h4>
`;case 5:default:return`<h5 style="${l.Styles.H5_STYLE.join("; ")}">${t}</h5>
`}}function g({href:e,title:n,tokens:t}){const s=this.parser.parseInline(t),a=l.Styles.LINK_STYLE.join("; ");return`
      <a href="${e}" 
         style="${a}"
         title="${n}">${s}</a>`}function m(e){const n=e.ordered;e.start;let t="";for(let r=0;r<e.items.length;r++){const S=e.items[r];t+=this.listitem(S)}const s=["text-align: left","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],a=["margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],h=n?"ol":"ul",c=n?"1":"disc";return`
      <div class="forOutlooks" pardot-region="unordered_list" style="${s.join("; ")}">
        <${h} 
          class="glist" 
          style="${a.join("; ")}" 
          align="left" 
          type="${c}"
        >
          ${t}</ol>
        <${h}></div>
`}function d({href:e,title:n,text:t,tokens:s}){return`
      <img src="${e}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" title=${n} alt="${t}" />`}return{paragraph:y,heading:f,link:g,list:m,image:d}}export{l as C,x as a,o as b,$ as u};
