import{W as Xe,c as Qe,a as Ze}from"./useButtonFunctions-3LVv21f5.js";import"./marked.esm-KKTQJ6Gi.js";import{b as Je,w as se,e as Ve,o as B,d as g,g as ke,n as et,c as ue,p as tt,F as rt,h as fe,i as nt,_ as at,k as q,q as it}from"./index-4JgYDzZU.js";import{S as G,i as k,t as ot,a as ee,b as L,r as w,c as C,f as st}from"./toNumber-vM6Efxel.js";function ut(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var m=Array.isArray,ft=1/0,ce=G?G.prototype:void 0,le=ce?ce.toString:void 0;function Me(e){if(typeof e=="string")return e;if(m(e))return ut(e,Me)+"";if(k(e))return le?le.call(e):"";var t=e+"";return t=="0"&&1/e==-ft?"-0":t}var pe=1/0,ct=17976931348623157e292;function lt(e){if(!e)return e===0?e:0;if(e=ot(e),e===pe||e===-pe){var t=e<0?-1:1;return t*ct}return e===e?e:0}function pt(e){var t=lt(e),r=t%1;return t===t?r?t-r:t:0}function dt(e){return e}var ht="[object AsyncFunction]",gt="[object Function]",_t="[object GeneratorFunction]",yt="[object Proxy]";function Re(e){if(!ee(e))return!1;var t=L(e);return t==gt||t==_t||t==ht||t==yt}var K=w["__core-js_shared__"],de=function(){var e=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function vt(e){return!!de&&de in e}var mt=Function.prototype,At=mt.toString;function x(e){if(e!=null){try{return At.call(e)}catch{}try{return e+""}catch{}}return""}var Tt=/[\\^$.*+?()[\]{}|]/g,bt=/^\[object .+?Constructor\]$/,wt=Function.prototype,Ot=Object.prototype,Pt=wt.toString,Et=Ot.hasOwnProperty,St=RegExp("^"+Pt.call(Et).replace(Tt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xt(e){if(!ee(e)||vt(e))return!1;var t=Re(e)?St:bt;return t.test(x(e))}function $t(e,t){return e==null?void 0:e[t]}function $(e,t){var r=$t(e,t);return xt(r)?r:void 0}var X=$(w,"WeakMap");function It(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1}var Ct=9007199254740991,Mt=/^(?:0|[1-9]\d*)$/;function Le(e,t){var r=typeof e;return t=t??Ct,!!t&&(r=="number"||r!="symbol"&&Mt.test(e))&&e>-1&&e%1==0&&e<t}function Fe(e,t){return e===t||e!==e&&t!==t}var Rt=9007199254740991;function te(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rt}function De(e){return e!=null&&te(e.length)&&!Re(e)}var Lt=Object.prototype;function Ft(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Lt;return e===r}function Dt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Nt="[object Arguments]";function he(e){return C(e)&&L(e)==Nt}var Ne=Object.prototype,Gt=Ne.hasOwnProperty,Ut=Ne.propertyIsEnumerable,Ge=he(function(){return arguments}())?he:function(e){return C(e)&&Gt.call(e,"callee")&&!Ut.call(e,"callee")};function Ht(){return!1}var Ue=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ge=Ue&&typeof module=="object"&&module&&!module.nodeType&&module,jt=ge&&ge.exports===Ue,_e=jt?w.Buffer:void 0,zt=_e?_e.isBuffer:void 0,Q=zt||Ht,Bt="[object Arguments]",qt="[object Array]",Kt="[object Boolean]",Wt="[object Date]",Yt="[object Error]",Xt="[object Function]",Qt="[object Map]",Zt="[object Number]",Jt="[object Object]",Vt="[object RegExp]",kt="[object Set]",er="[object String]",tr="[object WeakMap]",rr="[object ArrayBuffer]",nr="[object DataView]",ar="[object Float32Array]",ir="[object Float64Array]",or="[object Int8Array]",sr="[object Int16Array]",ur="[object Int32Array]",fr="[object Uint8Array]",cr="[object Uint8ClampedArray]",lr="[object Uint16Array]",pr="[object Uint32Array]",f={};f[ar]=f[ir]=f[or]=f[sr]=f[ur]=f[fr]=f[cr]=f[lr]=f[pr]=!0;f[Bt]=f[qt]=f[rr]=f[Kt]=f[nr]=f[Wt]=f[Yt]=f[Xt]=f[Qt]=f[Zt]=f[Jt]=f[Vt]=f[kt]=f[er]=f[tr]=!1;function dr(e){return C(e)&&te(e.length)&&!!f[L(e)]}function hr(e){return function(t){return e(t)}}var He=typeof exports=="object"&&exports&&!exports.nodeType&&exports,I=He&&typeof module=="object"&&module&&!module.nodeType&&module,gr=I&&I.exports===He,W=gr&&st.process,ye=function(){try{var e=I&&I.require&&I.require("util").types;return e||W&&W.binding&&W.binding("util")}catch{}}(),ve=ye&&ye.isTypedArray,je=ve?hr(ve):dr,_r=Object.prototype,yr=_r.hasOwnProperty;function vr(e,t){var r=m(e),n=!r&&Ge(e),i=!r&&!n&&Q(e),a=!r&&!n&&!i&&je(e),s=r||n||i||a,o=s?Dt(e.length,String):[],c=o.length;for(var u in e)(t||yr.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||a&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Le(u,c)))&&o.push(u);return o}function mr(e,t){return function(r){return e(t(r))}}var Ar=mr(Object.keys,Object),Tr=Object.prototype,br=Tr.hasOwnProperty;function wr(e){if(!Ft(e))return Ar(e);var t=[];for(var r in Object(e))br.call(e,r)&&r!="constructor"&&t.push(r);return t}function re(e){return De(e)?vr(e):wr(e)}var Or=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pr=/^\w*$/;function ne(e,t){if(m(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||k(e)?!0:Pr.test(e)||!Or.test(e)||t!=null&&e in Object(t)}var M=$(Object,"create");function Er(){this.__data__=M?M(null):{},this.size=0}function Sr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var xr="__lodash_hash_undefined__",$r=Object.prototype,Ir=$r.hasOwnProperty;function Cr(e){var t=this.__data__;if(M){var r=t[e];return r===xr?void 0:r}return Ir.call(t,e)?t[e]:void 0}var Mr=Object.prototype,Rr=Mr.hasOwnProperty;function Lr(e){var t=this.__data__;return M?t[e]!==void 0:Rr.call(t,e)}var Fr="__lodash_hash_undefined__";function Dr(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=M&&t===void 0?Fr:t,this}function S(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}S.prototype.clear=Er;S.prototype.delete=Sr;S.prototype.get=Cr;S.prototype.has=Lr;S.prototype.set=Dr;function Nr(){this.__data__=[],this.size=0}function H(e,t){for(var r=e.length;r--;)if(Fe(e[r][0],t))return r;return-1}var Gr=Array.prototype,Ur=Gr.splice;function Hr(e){var t=this.__data__,r=H(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Ur.call(t,r,1),--this.size,!0}function jr(e){var t=this.__data__,r=H(t,e);return r<0?void 0:t[r][1]}function zr(e){return H(this.__data__,e)>-1}function Br(e,t){var r=this.__data__,n=H(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}A.prototype.clear=Nr;A.prototype.delete=Hr;A.prototype.get=jr;A.prototype.has=zr;A.prototype.set=Br;var R=$(w,"Map");function qr(){this.size=0,this.__data__={hash:new S,map:new(R||A),string:new S}}function Kr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function j(e,t){var r=e.__data__;return Kr(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Wr(e){var t=j(this,e).delete(e);return this.size-=t?1:0,t}function Yr(e){return j(this,e).get(e)}function Xr(e){return j(this,e).has(e)}function Qr(e,t){var r=j(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function T(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}T.prototype.clear=qr;T.prototype.delete=Wr;T.prototype.get=Yr;T.prototype.has=Xr;T.prototype.set=Qr;var Zr="Expected a function";function ae(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Zr);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var s=e.apply(this,n);return r.cache=a.set(i,s)||a,s};return r.cache=new(ae.Cache||T),r}ae.Cache=T;var Jr=500;function Vr(e){var t=ae(e,function(n){return r.size===Jr&&r.clear(),n}),r=t.cache;return t}var kr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,en=/\\(\\)?/g,tn=Vr(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(kr,function(r,n,i,a){t.push(i?a.replace(en,"$1"):n||r)}),t});function rn(e){return e==null?"":Me(e)}function ze(e,t){return m(e)?e:ne(e,t)?[e]:tn(rn(e))}var nn=1/0;function z(e){if(typeof e=="string"||k(e))return e;var t=e+"";return t=="0"&&1/e==-nn?"-0":t}function Be(e,t){t=ze(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[z(t[r++])];return r&&r==n?e:void 0}function an(e,t,r){var n=e==null?void 0:Be(e,t);return n===void 0?r:n}function on(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function sn(){this.__data__=new A,this.size=0}function un(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function fn(e){return this.__data__.get(e)}function cn(e){return this.__data__.has(e)}var ln=200;function pn(e,t){var r=this.__data__;if(r instanceof A){var n=r.__data__;if(!R||n.length<ln-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new T(n)}return r.set(e,t),this.size=r.size,this}function v(e){var t=this.__data__=new A(e);this.size=t.size}v.prototype.clear=sn;v.prototype.delete=un;v.prototype.get=fn;v.prototype.has=cn;v.prototype.set=pn;function dn(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var s=e[r];t(s,r,e)&&(a[i++]=s)}return a}function hn(){return[]}var gn=Object.prototype,_n=gn.propertyIsEnumerable,me=Object.getOwnPropertySymbols,yn=me?function(e){return e==null?[]:(e=Object(e),dn(me(e),function(t){return _n.call(e,t)}))}:hn;const vn=yn;function mn(e,t,r){var n=t(e);return m(e)?n:on(n,r(e))}function Ae(e){return mn(e,re,vn)}var Z=$(w,"DataView"),J=$(w,"Promise"),V=$(w,"Set"),Te="[object Map]",An="[object Object]",be="[object Promise]",we="[object Set]",Oe="[object WeakMap]",Pe="[object DataView]",Tn=x(Z),bn=x(R),wn=x(J),On=x(V),Pn=x(X),E=L;(Z&&E(new Z(new ArrayBuffer(1)))!=Pe||R&&E(new R)!=Te||J&&E(J.resolve())!=be||V&&E(new V)!=we||X&&E(new X)!=Oe)&&(E=function(e){var t=L(e),r=t==An?e.constructor:void 0,n=r?x(r):"";if(n)switch(n){case Tn:return Pe;case bn:return Te;case wn:return be;case On:return we;case Pn:return Oe}return t});const Ee=E;var En=w.Uint8Array;const Se=En;var Sn="__lodash_hash_undefined__";function xn(e){return this.__data__.set(e,Sn),this}function $n(e){return this.__data__.has(e)}function U(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new T;++t<r;)this.add(e[t])}U.prototype.add=U.prototype.push=xn;U.prototype.has=$n;function In(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function Cn(e,t){return e.has(t)}var Mn=1,Rn=2;function qe(e,t,r,n,i,a){var s=r&Mn,o=e.length,c=t.length;if(o!=c&&!(s&&c>o))return!1;var u=a.get(e),p=a.get(t);if(u&&p)return u==t&&p==e;var d=-1,l=!0,y=r&Rn?new U:void 0;for(a.set(e,t),a.set(t,e);++d<o;){var h=e[d],_=t[d];if(n)var b=s?n(_,h,d,t,e,a):n(h,_,d,e,t,a);if(b!==void 0){if(b)continue;l=!1;break}if(y){if(!In(t,function(O,P){if(!Cn(y,P)&&(h===O||i(h,O,r,n,a)))return y.push(P)})){l=!1;break}}else if(!(h===_||i(h,_,r,n,a))){l=!1;break}}return a.delete(e),a.delete(t),l}function Ln(e){var t=-1,r=Array(e.size);return e.forEach(function(n,i){r[++t]=[i,n]}),r}function Fn(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var Dn=1,Nn=2,Gn="[object Boolean]",Un="[object Date]",Hn="[object Error]",jn="[object Map]",zn="[object Number]",Bn="[object RegExp]",qn="[object Set]",Kn="[object String]",Wn="[object Symbol]",Yn="[object ArrayBuffer]",Xn="[object DataView]",xe=G?G.prototype:void 0,Y=xe?xe.valueOf:void 0;function Qn(e,t,r,n,i,a,s){switch(r){case Xn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Yn:return!(e.byteLength!=t.byteLength||!a(new Se(e),new Se(t)));case Gn:case Un:case zn:return Fe(+e,+t);case Hn:return e.name==t.name&&e.message==t.message;case Bn:case Kn:return e==t+"";case jn:var o=Ln;case qn:var c=n&Dn;if(o||(o=Fn),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;n|=Nn,s.set(e,t);var p=qe(o(e),o(t),n,i,a,s);return s.delete(e),p;case Wn:if(Y)return Y.call(e)==Y.call(t)}return!1}var Zn=1,Jn=Object.prototype,Vn=Jn.hasOwnProperty;function kn(e,t,r,n,i,a){var s=r&Zn,o=Ae(e),c=o.length,u=Ae(t),p=u.length;if(c!=p&&!s)return!1;for(var d=c;d--;){var l=o[d];if(!(s?l in t:Vn.call(t,l)))return!1}var y=a.get(e),h=a.get(t);if(y&&h)return y==t&&h==e;var _=!0;a.set(e,t),a.set(t,e);for(var b=s;++d<c;){l=o[d];var O=e[l],P=t[l];if(n)var oe=s?n(P,O,l,t,e,a):n(O,P,l,e,t,a);if(!(oe===void 0?O===P||i(O,P,r,n,a):oe)){_=!1;break}b||(b=l=="constructor")}if(_&&!b){var F=e.constructor,D=t.constructor;F!=D&&"constructor"in e&&"constructor"in t&&!(typeof F=="function"&&F instanceof F&&typeof D=="function"&&D instanceof D)&&(_=!1)}return a.delete(e),a.delete(t),_}var ea=1,$e="[object Arguments]",Ie="[object Array]",N="[object Object]",ta=Object.prototype,Ce=ta.hasOwnProperty;function ra(e,t,r,n,i,a){var s=m(e),o=m(t),c=s?Ie:Ee(e),u=o?Ie:Ee(t);c=c==$e?N:c,u=u==$e?N:u;var p=c==N,d=u==N,l=c==u;if(l&&Q(e)){if(!Q(t))return!1;s=!0,p=!1}if(l&&!p)return a||(a=new v),s||je(e)?qe(e,t,r,n,i,a):Qn(e,t,c,r,n,i,a);if(!(r&ea)){var y=p&&Ce.call(e,"__wrapped__"),h=d&&Ce.call(t,"__wrapped__");if(y||h){var _=y?e.value():e,b=h?t.value():t;return a||(a=new v),i(_,b,r,n,a)}}return l?(a||(a=new v),kn(e,t,r,n,i,a)):!1}function ie(e,t,r,n,i){return e===t?!0:e==null||t==null||!C(e)&&!C(t)?e!==e&&t!==t:ra(e,t,r,n,ie,i)}var na=1,aa=2;function ia(e,t,r,n){var i=r.length,a=i,s=!n;if(e==null)return!a;for(e=Object(e);i--;){var o=r[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){o=r[i];var c=o[0],u=e[c],p=o[1];if(s&&o[2]){if(u===void 0&&!(c in e))return!1}else{var d=new v;if(n)var l=n(u,p,c,e,t,d);if(!(l===void 0?ie(p,u,na|aa,n,d):l))return!1}}return!0}function Ke(e){return e===e&&!ee(e)}function oa(e){for(var t=re(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ke(i)]}return t}function We(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function sa(e){var t=oa(e);return t.length==1&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===e||ia(r,e,t)}}function ua(e,t){return e!=null&&t in Object(e)}function fa(e,t,r){t=ze(t,e);for(var n=-1,i=t.length,a=!1;++n<i;){var s=z(t[n]);if(!(a=e!=null&&r(e,s)))break;e=e[s]}return a||++n!=i?a:(i=e==null?0:e.length,!!i&&te(i)&&Le(s,i)&&(m(e)||Ge(e)))}function ca(e,t){return e!=null&&fa(e,t,ua)}var la=1,pa=2;function da(e,t){return ne(e)&&Ke(t)?We(z(e),t):function(r){var n=an(r,e);return n===void 0&&n===t?ca(r,e):ie(t,n,la|pa)}}function ha(e){return function(t){return t==null?void 0:t[e]}}function ga(e){return function(t){return Be(t,e)}}function _a(e){return ne(e)?ha(z(e)):ga(e)}function Ye(e){return typeof e=="function"?e:e==null?dt:typeof e=="object"?m(e)?da(e[0],e[1]):sa(e):_a(e)}function ya(e){return function(t,r,n){var i=Object(t);if(!De(t)){var a=Ye(r);t=re(t),r=function(o){return a(i[o],o,i)}}var s=e(t,r,n);return s>-1?i[a?t[s]:s]:void 0}}var va=Math.max;function ma(e,t,r){var n=e==null?0:e.length;if(!n)return-1;var i=r==null?0:pt(r);return i<0&&(i=va(n+i,0)),It(e,Ye(t),i)}var Aa=ya(ma);const Ta={SECTION_HEADERS:[{name:"Advocacy",short:"advocacy",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlcc/979203/1704489952oSIItfoY/affiliate_header_advocacy.png"},{name:"Affiliate Contact",short:"contact",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlcr/979203/1704489953zQbAQzJQ/affiliate_header_contact.png"},{name:"Affilate Leader Spotlight",short:"leader-spotlight",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqld2/979203/170448995476aRThfg/affiliate_header_leader_spotlight.png"},{name:"Affiliate Recognition",short:"recognition",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqld8/979203/1704489954VpCGinWs/affiliate_header_recognition.png"},{name:"Affiliate Resources",short:"resources",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqldg/979203/1704489954VG2E0OLC/affiliate_header_resources.pngk"},{name:"Affiliate Spotlight",short:"spotlight",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqldn/979203/1704489954eB5YrULw/affiliate_header_spotlight.png"},{name:"AOA Staff Announcment",short:"aoa-staff-announcement",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlck/979203/1704489953MQvr68Cy/affiliate_header_aoa_staff_announcement.jpg"},{name:"AOA Updates",short:"aoa-updates",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlcg/979203/1704489953geiOsc2B/affiliate_header_aoa_updates.png"},{name:"AOF Update",short:"aof-update",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlcn/979203/1704489953TSTbdHKO/affiliate_header_aof_update.png"},{name:"Association Management Tools",short:"association-management-tools",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlcv/979203/1704489953v6r8le7b/affiliate_header_association_management_tools.png"},{name:"Message From Affiliate Relations",short:"message-from",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqlcy/979203/1704489954EkPSyrF7/affiliate_header_message_from_affiliate_relations.png"},{name:"Partner Funding Opportunities",short:"partner-funding",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqldc/979203/1704489954ONE0pgUw/affiliate_header_partner_funding_opportunites.png"},{name:"SOMA Foundation",short:"soma-foundation",url:"https://resources.osteopathic.org/l/979203/2024-02-21/d8mwm/979203/1708536219rRgzTAHK/affiliate_header_soma_foundation.png"},{name:"Soma News",short:"soma-news",url:"https://resources.osteopathic.org/l/979203/2024-01-05/cqldk/979203/1704489954La84P2bW/affiliate_header_soma_news.png"}]},ba=g("h1",{class:"component__title"},"Section head",-1),wa={class:"form-group"},Oa=g("label",{for:"select"},"Section head",-1),Pa=["selected","value"],Ea={class:"form-group clearfix",style:{"margin-top":"40px"}},Sa=g("span",{class:"glyphicon glyphicon-refresh"},null,-1),xa={class:"btn-group pull-right"},$a=g("span",{class:"glyphicon glyphicon-copy"},null,-1),Ia=["alt","src"];function Ca(e,t,r,n,i,a){const s=Ve("Workspace");return B(),Je(s,null,{form:se(()=>[ba,g("div",null,[g("div",wa,[Oa,ke(g("select",{class:"form-control",id:"select","onUpdate:modelValue":t[0]||(t[0]=o=>n.selected=o)},[(B(!0),ue(rt,null,tt(n.headers,o=>(B(),ue("option",{selected:n.selected.short==o.short,value:o.short,key:o.short},nt(o.name),9,Pa))),128))],512),[[et,n.selected]])])]),g("div",Ea,[g("button",{class:"btn btn-default",id:"refresh",onClick:t[1]||(t[1]=(...o)=>n.reset&&n.reset(...o))},[Sa,fe(" Reset")]),g("div",xa,[g("button",{class:"btn btn-primary",id:"copyHtml",onClick:t[2]||(t[2]=(...o)=>n.copy&&n.copy(...o)),"aria-label":"Copied HTML!"},[$a,fe(" Copy HTML")])])])]),render:se(()=>[g("img",{class:"img",align:"left",alt:n.altText,border:"0",height:"46",src:n.imageUrl,style:{margin:"0","text-align":"center"},width:"590"},null,8,Ia)]),_:1})}const Ma={components:{Workspace:Xe},props:["currentTemplate"],setup(e){const t=Ta.SECTION_HEADERS,r=q(t[0].short),n=q(t[0].name),i=q(t[0].url);it(r,c=>{const u=Aa(t,function(p){return p.short===c});i.value=u.url,n.value=u.name});const a=()=>{r.value=t[0].short,i.value=t[0].url,n.value=t[0].name};function s(){Qe()}function o(){Ze()}return{imageUrl:i,altText:n,selected:r,headers:t,props:e,reset:a,copy:s,copyTextVersion:o}}},Na=at(Ma,[["render",Ca]]);export{Na as default};
