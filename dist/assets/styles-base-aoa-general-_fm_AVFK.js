const e={black:"#2a2a2a",navy:"#000066",teal:"#22a49c",seaSerpent:"#11c7eb",warm:"#f9f7f5",grey:"#f5f5f5",lightGrey:"#eee",lighterGrey:"#f8f8f8"},h={unit:24},n={lineDrop:`${h.unit}px`,halfLineDrop:`${h.unit/2}px`,fontFamily:"Arial, Helvetica, sans-serif",layout:{fullWidth:600,liveAreaWidth:528},colors:{headline:e.navy,text:e.black,link:e.teal,background:e.warm,primary:e.navy,secondary:e.teal,accent:e.seaSerpent,grey:e.grey,lightGrey:e.lightGrey,lighterGrey:e.lighterGrey}},m={P_STYLE:["margin: 0 0 0 0"],H1_STYLE:[`margin-bottom: ${n.halfLineDrop}`,"margin-top: 0",`font-family: ${n.fontFamily}`,"font-size: 20px","font-weight: bold","line-height: 28px","text-align: center",`color: ${n.colors.headline}`],H2_STYLE:[`margin-bottom: ${n.halfLineDrop}`,"margin-top: 0",`font-family: ${n.fontFamily}`,"font-size: 18px","font-weight: normal","text-align: center","line-height: 24px",`color: ${n.colors.text}`],H3_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${n.fontFamily}`,"font-size: 20px","font-weight: bold","line-height: 28px","text-align: left"],H4_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${n.fontFamily}`,"font-size: 18px","font-weight: bold","line-height: 24px","text-align: left"],H5_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${n.fontFamily}`,"font-size: 16px","font-weight: bold","line-height: 24px","text-align: left"],LINK_STYLE:[`color: ${n.colors.link}`,"font-weight: bold","text-decoration: none"]},o={DEFAULT_TEXT_MARKDOWN:"**Lorem ipsum dolor** sit amet, consectetur adipisicing elit, sed do eiusmod [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.",DEFAULT_HEADER_URL:"https://resources.osteopathic.org/l/979203/2024-02-01/czs3n/979203/17067972618vJSBE23/placeholder_100px.png",Styles:m};function d(){function y(t){return`
      <p style="${o.Styles.P_STYLE.join("; ")}">${t}</p>`}function f(t,i){switch(i){case 1:return`<h1 style="${o.Styles.H1_STYLE.join("; ")}">${t}</h1>
`;case 2:return`<h2 style="${o.Styles.H2_STYLE.join("; ")}">${t}</h1>
`;case 3:return`<h3 style="${o.Styles.H3_STYLE.join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${o.Styles.H4_STYLE.join("; ")}">${t}</h4>
`;case 5:default:return`<h5 style="${o.Styles.H5_STYLE.join("; ")}">${t}</h5>
`}}function c(t,i,l){const a=o.Styles.LINK_STYLE.join("; ");return`
      <a href="${t}" 
         style="${a}"
         title="${i}">${l}</a>`}function p(t,i){const l=["text-align: left","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],a=["margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],s=i?"ol":"ul",r=i?"1":"disc";return`
      <div class="forOutlooks" pardot-region="unordered_list" style="${l.join("; ")}">
        <${s} 
          class="glist" 
          style="${a.join("; ")}" 
          align="left" 
          type="${r}"
        >
          ${t}</ol>
        <${s}></div>
`}function g(t,i,l){return`
      <img src="${t}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" title=${i} alt="${l}" />`}return{paragraph:y,heading:f,link:c,list:p,image:g}}export{o as C,m as S,n as b,d as u};
