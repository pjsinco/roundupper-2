import"./animate-KdRnERix.js";function a(t,e,n="#1ccacd"){const o=document.getElementById("toastContainer");document.getElementsByClassName("toast")[0].style.backgroundColor=n,o.querySelector(".toast-title").innerText=t,o.querySelector(".toast-message").innerText=e,o.classList.add("active"),window.setTimeout(()=>{o.classList.remove("active")},3e3)}function u(){}function d(t,e="Copied!",n="Ready to paste",o="#1ccacd"){const c=document.getElementById("rendered");c.classList.add("animate__animated","animate__jello"),c.addEventListener("animationend",i=>{i.target.classList.remove("animate__animated","animate__jello")},{once:!0}),a(e,n,o)}function s(t){const e=document.getElementById(t);window.getSelection()&&window.getSelection().collapse(e,0)}function r(){return document.getElementById("rendered").innerHTML}function l(t){document.getElementById("clone").innerText=t}function p(t=e=>e){s("clone");const e=r();let n=t(e);l(n);const o=new ClipboardJS("#copyHtml",{target:function(c){return document.getElementById("clone")}});o.on("success",c=>{d(document.getElementById("copyHtml"),"HTML code copied","The HTML code is copied to your clipboard. Ready to paste!","#ff3366"),o.destroy()})}function y(t){const e=new ClipboardJS("#copyTextVersion",{text:n=>t});e.on("success",function(n){d(document.getElementById("copyTextVersion"),"Text version copied","The text version is copied to your clipboard. Ready to paste!","#1ccacd"),e.destroy()})}export{y as a,p as c,u as r};
