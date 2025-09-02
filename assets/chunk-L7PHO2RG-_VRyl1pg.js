import{i as pe,a as we,R as ye,c as Ce,d as Ee}from"./chunk-SUWDRJLB-D3Y1Nrnh.js";import{bI as be,_ as bt,v as z,w as V,V as Be,W,n as P,A as Re,r as Ae}from"./index-BNM2Gi5R.js";var j={},Z,Mt;function Ie(){return Mt||(Mt=1,Z=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Z}var X={},D={},Tt;function k(){if(Tt)return D;Tt=1;let r;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return D.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},D.getSymbolTotalCodewords=function(n){return o[n]},D.getBCHDigit=function(i){let n=0;for(;i!==0;)n++,i>>>=1;return n},D.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},D.isKanjiModeEnabled=function(){return typeof r<"u"},D.toSJIS=function(n){return r(n)},D}var tt={},Nt;function Bt(){return Nt||(Nt=1,function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+i)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,t){if(r.isValid(n))return n;try{return o(n)}catch{return t}}}(tt)),tt}var et,St;function Me(){if(St)return et;St=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(o){const i=Math.floor(o/8);return(this.buffer[i]>>>7-o%8&1)===1},put:function(o,i){for(let n=0;n<i;n++)this.putBit((o>>>i-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),o&&(this.buffer[i]|=128>>>this.length%8),this.length++}},et=r,et}var nt,Pt;function Te(){if(Pt)return nt;Pt=1;function r(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}return r.prototype.set=function(o,i,n,t){const e=o*this.size+i;this.data[e]=n,t&&(this.reservedBit[e]=!0)},r.prototype.get=function(o,i){return this.data[o*this.size+i]},r.prototype.xor=function(o,i,n){this.data[o*this.size+i]^=n},r.prototype.isReserved=function(o,i){return this.reservedBit[o*this.size+i]},nt=r,nt}var rt={},vt;function Ne(){return vt||(vt=1,function(r){const o=k().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const t=Math.floor(n/7)+2,e=o(n),s=e===145?26:Math.ceil((e-13)/(2*t-2))*2,a=[e-7];for(let u=1;u<t-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},r.getPositions=function(n){const t=[],e=r.getRowColCoords(n),s=e.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||t.push([e[a],e[u]]);return t}}(rt)),rt}var ot={},Lt;function Se(){if(Lt)return ot;Lt=1;const r=k().getSymbolSize,o=7;return ot.getPositions=function(n){const t=r(n);return[[0,0],[t-o,0],[0,t-o]]},ot}var it={},xt;function Pe(){return xt||(xt=1,function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(t){const e=t.size;let s=0,a=0,u=0,l=null,f=null;for(let c=0;c<e;c++){a=u=0,l=f=null;for(let y=0;y<e;y++){let d=t.get(c,y);d===l?a++:(a>=5&&(s+=o.N1+(a-5)),l=d,a=1),d=t.get(y,c),d===f?u++:(u>=5&&(s+=o.N1+(u-5)),f=d,u=1)}a>=5&&(s+=o.N1+(a-5)),u>=5&&(s+=o.N1+(u-5))}return s},r.getPenaltyN2=function(t){const e=t.size;let s=0;for(let a=0;a<e-1;a++)for(let u=0;u<e-1;u++){const l=t.get(a,u)+t.get(a,u+1)+t.get(a+1,u)+t.get(a+1,u+1);(l===4||l===0)&&s++}return s*o.N2},r.getPenaltyN3=function(t){const e=t.size;let s=0,a=0,u=0;for(let l=0;l<e;l++){a=u=0;for(let f=0;f<e;f++)a=a<<1&2047|t.get(l,f),f>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|t.get(f,l),f>=10&&(u===1488||u===93)&&s++}return s*o.N3},r.getPenaltyN4=function(t){let e=0;const s=t.data.length;for(let u=0;u<s;u++)e+=t.data[u];return Math.abs(Math.ceil(e*100/s/5)-10)*o.N4};function i(n,t,e){switch(n){case r.Patterns.PATTERN000:return(t+e)%2===0;case r.Patterns.PATTERN001:return t%2===0;case r.Patterns.PATTERN010:return e%3===0;case r.Patterns.PATTERN011:return(t+e)%3===0;case r.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case r.Patterns.PATTERN101:return t*e%2+t*e%3===0;case r.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case r.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(t,e){const s=e.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)e.isReserved(u,a)||e.xor(u,a,i(t,u,a))},r.getBestMask=function(t,e){const s=Object.keys(r.Patterns).length;let a=0,u=1/0;for(let l=0;l<s;l++){e(l),r.applyMask(l,t);const f=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(l,t),f<u&&(u=f,a=l)}return a}}(it)),it}var J={},qt;function ne(){if(qt)return J;qt=1;const r=Bt(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return J.getBlocksCount=function(t,e){switch(e){case r.L:return o[(t-1)*4+0];case r.M:return o[(t-1)*4+1];case r.Q:return o[(t-1)*4+2];case r.H:return o[(t-1)*4+3];default:return}},J.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[(t-1)*4+0];case r.M:return i[(t-1)*4+1];case r.Q:return i[(t-1)*4+2];case r.H:return i[(t-1)*4+3];default:return}},J}var st={},H={},_t;function ve(){if(_t)return H;_t=1;const r=new Uint8Array(512),o=new Uint8Array(256);return function(){let n=1;for(let t=0;t<255;t++)r[t]=n,o[n]=t,n<<=1,n&256&&(n^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),H.log=function(n){if(n<1)throw new Error("log("+n+")");return o[n]},H.exp=function(n){return r[n]},H.mul=function(n,t){return n===0||t===0?0:r[o[n]+o[t]]},H}var Dt;function Le(){return Dt||(Dt=1,function(r){const o=ve();r.mul=function(n,t){const e=new Uint8Array(n.length+t.length-1);for(let s=0;s<n.length;s++)for(let a=0;a<t.length;a++)e[s+a]^=o.mul(n[s],t[a]);return e},r.mod=function(n,t){let e=new Uint8Array(n);for(;e.length-t.length>=0;){const s=e[0];for(let u=0;u<t.length;u++)e[u]^=o.mul(t[u],s);let a=0;for(;a<e.length&&e[a]===0;)a++;e=e.slice(a)}return e},r.generateECPolynomial=function(n){let t=new Uint8Array([1]);for(let e=0;e<n;e++)t=r.mul(t,new Uint8Array([1,o.exp(e)]));return t}}(st)),st}var at,kt;function xe(){if(kt)return at;kt=1;const r=Le();function o(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return o.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(n.length+this.degree);t.set(n);const e=r.mod(t,this.genPoly),s=this.degree-e.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(e,s),a}return e},at=o,at}var ut={},ct={},lt={},Ut;function re(){return Ut||(Ut=1,lt.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),lt}var L={},Ft;function oe(){if(Ft)return L;Ft=1;const r="[0-9]+",o="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(i,"g"),L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),L.BYTE=new RegExp(n,"g"),L.NUMERIC=new RegExp(r,"g"),L.ALPHANUMERIC=new RegExp(o,"g");const t=new RegExp("^"+i+"$"),e=new RegExp("^"+r+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return L.testKanji=function(u){return t.test(u)},L.testNumeric=function(u){return e.test(u)},L.testAlphanumeric=function(u){return s.test(u)},L}var zt;function U(){return zt||(zt=1,function(r){const o=re(),i=oe();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(e,s){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!o.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?e.ccBits[0]:s<27?e.ccBits[1]:e.ccBits[2]},r.getBestModeForData=function(e){return i.testNumeric(e)?r.NUMERIC:i.testAlphanumeric(e)?r.ALPHANUMERIC:i.testKanji(e)?r.KANJI:r.BYTE},r.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},r.isValid=function(e){return e&&e.bit&&e.ccBits};function n(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}r.from=function(e,s){if(r.isValid(e))return e;try{return n(e)}catch{return s}}}(ct)),ct}var jt;function qe(){return jt||(jt=1,function(r){const o=k(),i=ne(),n=Bt(),t=U(),e=re(),s=7973,a=o.getBCHDigit(s);function u(y,d,I){for(let M=1;M<=40;M++)if(d<=r.getCapacity(M,I,y))return M}function l(y,d){return t.getCharCountIndicator(y,d)+4}function f(y,d){let I=0;return y.forEach(function(M){const S=l(M.mode,d);I+=S+M.getBitsLength()}),I}function c(y,d){for(let I=1;I<=40;I++)if(f(y,I)<=r.getCapacity(I,d,t.MIXED))return I}r.from=function(d,I){return e.isValid(d)?parseInt(d,10):I},r.getCapacity=function(d,I,M){if(!e.isValid(d))throw new Error("Invalid QR Code version");typeof M>"u"&&(M=t.BYTE);const S=o.getSymbolTotalCodewords(d),h=i.getTotalCodewordsCount(d,I),N=(S-h)*8;if(M===t.MIXED)return N;const w=N-l(M,d);switch(M){case t.NUMERIC:return Math.floor(w/10*3);case t.ALPHANUMERIC:return Math.floor(w/11*2);case t.KANJI:return Math.floor(w/13);case t.BYTE:default:return Math.floor(w/8)}},r.getBestVersionForData=function(d,I){let M;const S=n.from(I,n.M);if(Array.isArray(d)){if(d.length>1)return c(d,S);if(d.length===0)return 1;M=d[0]}else M=d;return u(M.mode,M.getLength(),S)},r.getEncodedBits=function(d){if(!e.isValid(d)||d<7)throw new Error("Invalid QR Code version");let I=d<<12;for(;o.getBCHDigit(I)-a>=0;)I^=s<<o.getBCHDigit(I)-a;return d<<12|I}}(ut)),ut}var ft={},Vt;function _e(){if(Vt)return ft;Vt=1;const r=k(),o=1335,i=21522,n=r.getBCHDigit(o);return ft.getEncodedBits=function(e,s){const a=e.bit<<3|s;let u=a<<10;for(;r.getBCHDigit(u)-n>=0;)u^=o<<r.getBCHDigit(u)-n;return(a<<10|u)^i},ft}var dt={},ht,Kt;function De(){if(Kt)return ht;Kt=1;const r=U();function o(i){this.mode=r.NUMERIC,this.data=i.toString()}return o.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(n){let t,e,s;for(t=0;t+3<=this.data.length;t+=3)e=this.data.substr(t,3),s=parseInt(e,10),n.put(s,10);const a=this.data.length-t;a>0&&(e=this.data.substr(t),s=parseInt(e,10),n.put(s,a*3+1))},ht=o,ht}var gt,Ht;function ke(){if(Ht)return gt;Ht=1;const r=U(),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(n){this.mode=r.ALPHANUMERIC,this.data=n}return i.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let s=o.indexOf(this.data[e])*45;s+=o.indexOf(this.data[e+1]),t.put(s,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},gt=i,gt}var mt,Qt;function Ue(){if(Qt)return mt;Qt=1;const r=U();function o(i){this.mode=r.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}return o.getBitsLength=function(n){return n*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){for(let n=0,t=this.data.length;n<t;n++)i.put(this.data[n],8)},mt=o,mt}var pt,Jt;function Fe(){if(Jt)return pt;Jt=1;const r=U(),o=k();function i(n){this.mode=r.KANJI,this.data=n}return i.getBitsLength=function(t){return t*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=o.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}},pt=i,pt}var wt={exports:{}},$t;function ze(){return $t||($t=1,function(r){var o={single_source_shortest_paths:function(i,n,t){var e={},s={};s[n]=0;var a=o.PriorityQueue.make();a.push(n,0);for(var u,l,f,c,y,d,I,M,S;!a.empty();){u=a.pop(),l=u.value,c=u.cost,y=i[l]||{};for(f in y)y.hasOwnProperty(f)&&(d=y[f],I=c+d,M=s[f],S=typeof s[f]>"u",(S||M>I)&&(s[f]=I,a.push(f,I),e[f]=l))}if(typeof t<"u"&&typeof s[t]>"u"){var h=["Could not find a path from ",n," to ",t,"."].join("");throw new Error(h)}return e},extract_shortest_path_from_predecessor_list:function(i,n){for(var t=[],e=n;e;)t.push(e),i[e],e=i[e];return t.reverse(),t},find_path:function(i,n,t){var e=o.single_source_shortest_paths(i,n,t);return o.extract_shortest_path_from_predecessor_list(e,t)},PriorityQueue:{make:function(i){var n=o.PriorityQueue,t={},e;i=i||{};for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t.queue=[],t.sorter=i.sorter||n.default_sorter,t},default_sorter:function(i,n){return i.cost-n.cost},push:function(i,n){var t={value:i,cost:n};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=o}(wt)),wt.exports}var Yt;function je(){return Yt||(Yt=1,function(r){const o=U(),i=De(),n=ke(),t=Ue(),e=Fe(),s=oe(),a=k(),u=ze();function l(h){return unescape(encodeURIComponent(h)).length}function f(h,N,w){const g=[];let v;for(;(v=h.exec(w))!==null;)g.push({data:v[0],index:v.index,mode:N,length:v[0].length});return g}function c(h){const N=f(s.NUMERIC,o.NUMERIC,h),w=f(s.ALPHANUMERIC,o.ALPHANUMERIC,h);let g,v;return a.isKanjiModeEnabled()?(g=f(s.BYTE,o.BYTE,h),v=f(s.KANJI,o.KANJI,h)):(g=f(s.BYTE_KANJI,o.BYTE,h),v=[]),N.concat(w,g,v).sort(function(B,b){return B.index-b.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function y(h,N){switch(N){case o.NUMERIC:return i.getBitsLength(h);case o.ALPHANUMERIC:return n.getBitsLength(h);case o.KANJI:return e.getBitsLength(h);case o.BYTE:return t.getBitsLength(h)}}function d(h){return h.reduce(function(N,w){const g=N.length-1>=0?N[N.length-1]:null;return g&&g.mode===w.mode?(N[N.length-1].data+=w.data,N):(N.push(w),N)},[])}function I(h){const N=[];for(let w=0;w<h.length;w++){const g=h[w];switch(g.mode){case o.NUMERIC:N.push([g,{data:g.data,mode:o.ALPHANUMERIC,length:g.length},{data:g.data,mode:o.BYTE,length:g.length}]);break;case o.ALPHANUMERIC:N.push([g,{data:g.data,mode:o.BYTE,length:g.length}]);break;case o.KANJI:N.push([g,{data:g.data,mode:o.BYTE,length:l(g.data)}]);break;case o.BYTE:N.push([{data:g.data,mode:o.BYTE,length:l(g.data)}])}}return N}function M(h,N){const w={},g={start:{}};let v=["start"];for(let p=0;p<h.length;p++){const B=h[p],b=[];for(let m=0;m<B.length;m++){const A=B[m],C=""+p+m;b.push(C),w[C]={node:A,lastCount:0},g[C]={};for(let R=0;R<v.length;R++){const E=v[R];w[E]&&w[E].node.mode===A.mode?(g[E][C]=y(w[E].lastCount+A.length,A.mode)-y(w[E].lastCount,A.mode),w[E].lastCount+=A.length):(w[E]&&(w[E].lastCount=A.length),g[E][C]=y(A.length,A.mode)+4+o.getCharCountIndicator(A.mode,N))}}v=b}for(let p=0;p<v.length;p++)g[v[p]].end=0;return{map:g,table:w}}function S(h,N){let w;const g=o.getBestModeForData(h);if(w=o.from(N,g),w!==o.BYTE&&w.bit<g.bit)throw new Error('"'+h+'" cannot be encoded with mode '+o.toString(w)+`.
 Suggested mode is: `+o.toString(g));switch(w===o.KANJI&&!a.isKanjiModeEnabled()&&(w=o.BYTE),w){case o.NUMERIC:return new i(h);case o.ALPHANUMERIC:return new n(h);case o.KANJI:return new e(h);case o.BYTE:return new t(h)}}r.fromArray=function(N){return N.reduce(function(w,g){return typeof g=="string"?w.push(S(g,null)):g.data&&w.push(S(g.data,g.mode)),w},[])},r.fromString=function(N,w){const g=c(N,a.isKanjiModeEnabled()),v=I(g),p=M(v,w),B=u.find_path(p.map,"start","end"),b=[];for(let m=1;m<B.length-1;m++)b.push(p.table[B[m]].node);return r.fromArray(d(b))},r.rawSplit=function(N){return r.fromArray(c(N,a.isKanjiModeEnabled()))}}(dt)),dt}var Ot;function Ve(){if(Ot)return X;Ot=1;const r=k(),o=Bt(),i=Me(),n=Te(),t=Ne(),e=Se(),s=Pe(),a=ne(),u=xe(),l=qe(),f=_e(),c=U(),y=je();function d(p,B){const b=p.size,m=e.getPositions(B);for(let A=0;A<m.length;A++){const C=m[A][0],R=m[A][1];for(let E=-1;E<=7;E++)if(!(C+E<=-1||b<=C+E))for(let T=-1;T<=7;T++)R+T<=-1||b<=R+T||(E>=0&&E<=6&&(T===0||T===6)||T>=0&&T<=6&&(E===0||E===6)||E>=2&&E<=4&&T>=2&&T<=4?p.set(C+E,R+T,!0,!0):p.set(C+E,R+T,!1,!0))}}function I(p){const B=p.size;for(let b=8;b<B-8;b++){const m=b%2===0;p.set(b,6,m,!0),p.set(6,b,m,!0)}}function M(p,B){const b=t.getPositions(B);for(let m=0;m<b.length;m++){const A=b[m][0],C=b[m][1];for(let R=-2;R<=2;R++)for(let E=-2;E<=2;E++)R===-2||R===2||E===-2||E===2||R===0&&E===0?p.set(A+R,C+E,!0,!0):p.set(A+R,C+E,!1,!0)}}function S(p,B){const b=p.size,m=l.getEncodedBits(B);let A,C,R;for(let E=0;E<18;E++)A=Math.floor(E/3),C=E%3+b-8-3,R=(m>>E&1)===1,p.set(A,C,R,!0),p.set(C,A,R,!0)}function h(p,B,b){const m=p.size,A=f.getEncodedBits(B,b);let C,R;for(C=0;C<15;C++)R=(A>>C&1)===1,C<6?p.set(C,8,R,!0):C<8?p.set(C+1,8,R,!0):p.set(m-15+C,8,R,!0),C<8?p.set(8,m-C-1,R,!0):C<9?p.set(8,15-C-1+1,R,!0):p.set(8,15-C-1,R,!0);p.set(m-8,8,1,!0)}function N(p,B){const b=p.size;let m=-1,A=b-1,C=7,R=0;for(let E=b-1;E>0;E-=2)for(E===6&&E--;;){for(let T=0;T<2;T++)if(!p.isReserved(A,E-T)){let _=!1;R<B.length&&(_=(B[R]>>>C&1)===1),p.set(A,E-T,_),C--,C===-1&&(R++,C=7)}if(A+=m,A<0||b<=A){A-=m,m=-m;break}}}function w(p,B,b){const m=new i;b.forEach(function(T){m.put(T.mode.bit,4),m.put(T.getLength(),c.getCharCountIndicator(T.mode,p)),T.write(m)});const A=r.getSymbolTotalCodewords(p),C=a.getTotalCodewordsCount(p,B),R=(A-C)*8;for(m.getLengthInBits()+4<=R&&m.put(0,4);m.getLengthInBits()%8!==0;)m.putBit(0);const E=(R-m.getLengthInBits())/8;for(let T=0;T<E;T++)m.put(T%2?17:236,8);return g(m,p,B)}function g(p,B,b){const m=r.getSymbolTotalCodewords(B),A=a.getTotalCodewordsCount(B,b),C=m-A,R=a.getBlocksCount(B,b),E=m%R,T=R-E,_=Math.floor(m/R),K=Math.floor(C/R),he=K+1,Rt=_-K,ge=new u(Rt);let $=0;const Q=new Array(R),At=new Array(R);let Y=0;const me=new Uint8Array(p.buffer);for(let F=0;F<R;F++){const G=F<T?K:he;Q[F]=me.slice($,$+G),At[F]=ge.encode(Q[F]),$+=G,Y=Math.max(Y,G)}const O=new Uint8Array(m);let It=0,x,q;for(x=0;x<Y;x++)for(q=0;q<R;q++)x<Q[q].length&&(O[It++]=Q[q][x]);for(x=0;x<Rt;x++)for(q=0;q<R;q++)O[It++]=At[q][x];return O}function v(p,B,b,m){let A;if(Array.isArray(p))A=y.fromArray(p);else if(typeof p=="string"){let _=B;if(!_){const K=y.rawSplit(p);_=l.getBestVersionForData(K,b)}A=y.fromString(p,_||40)}else throw new Error("Invalid data");const C=l.getBestVersionForData(A,b);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!B)B=C;else if(B<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const R=w(B,b,A),E=r.getSymbolSize(B),T=new n(E);return d(T,B),I(T),M(T,B),h(T,b,0),B>=7&&S(T,B),N(T,R),isNaN(m)&&(m=s.getBestMask(T,h.bind(null,T,b))),s.applyMask(m,T),h(T,b,m),{modules:T,version:B,errorCorrectionLevel:b,maskPattern:m,segments:A}}return X.create=function(B,b){if(typeof B>"u"||B==="")throw new Error("No input text");let m=o.M,A,C;return typeof b<"u"&&(m=o.from(b.errorCorrectionLevel,o.M),A=l.from(b.version),C=s.from(b.maskPattern),b.toSJISFunc&&r.setToSJISFunction(b.toSJISFunc)),v(B,A,m,C)},X}var yt={},Ct={},Gt;function ie(){return Gt||(Gt=1,function(r){function o(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(e){return[e,e]}))),n.length===6&&n.push("F","F");const t=parseInt(n.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const t=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,e=n.width&&n.width>=21?n.width:void 0,s=n.scale||4;return{width:e,scale:e?4:s,margin:t,color:{dark:o(n.color.dark||"#000000ff"),light:o(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,t){return t.width&&t.width>=n+t.margin*2?t.width/(n+t.margin*2):t.scale},r.getImageWidth=function(n,t){const e=r.getScale(n,t);return Math.floor((n+t.margin*2)*e)},r.qrToImageData=function(n,t,e){const s=t.modules.size,a=t.modules.data,u=r.getScale(s,e),l=Math.floor((s+e.margin*2)*u),f=e.margin*u,c=[e.color.light,e.color.dark];for(let y=0;y<l;y++)for(let d=0;d<l;d++){let I=(y*l+d)*4,M=e.color.light;if(y>=f&&d>=f&&y<l-f&&d<l-f){const S=Math.floor((y-f)/u),h=Math.floor((d-f)/u);M=c[a[S*s+h]?1:0]}n[I++]=M.r,n[I++]=M.g,n[I++]=M.b,n[I]=M.a}}}(Ct)),Ct}var Wt;function Ke(){return Wt||(Wt=1,function(r){const o=ie();function i(t,e,s){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=s,e.width=s,e.style.height=s+"px",e.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(e,s,a){let u=a,l=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(l=n()),u=o.getOptions(u);const f=o.getImageWidth(e.modules.size,u),c=l.getContext("2d"),y=c.createImageData(f,f);return o.qrToImageData(y.data,e,u),i(c,l,f),c.putImageData(y,0,0),l},r.renderToDataURL=function(e,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const l=r.render(e,s,u),f=u.type||"image/png",c=u.rendererOpts||{};return l.toDataURL(f,c.quality)}}(yt)),yt}var Et={},Zt;function He(){if(Zt)return Et;Zt=1;const r=ie();function o(t,e){const s=t.a/255,a=e+'="'+t.hex+'"';return s<1?a+" "+e+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function i(t,e,s){let a=t+e;return typeof s<"u"&&(a+=" "+s),a}function n(t,e,s){let a="",u=0,l=!1,f=0;for(let c=0;c<t.length;c++){const y=Math.floor(c%e),d=Math.floor(c/e);!y&&!l&&(l=!0),t[c]?(f++,c>0&&y>0&&t[c-1]||(a+=l?i("M",y+s,.5+d+s):i("m",u,0),u=0,l=!1),y+1<e&&t[c+1]||(a+=i("h",f),f=0)):u++}return a}return Et.render=function(e,s,a){const u=r.getOptions(s),l=e.modules.size,f=e.modules.data,c=l+u.margin*2,y=u.color.light.a?"<path "+o(u.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+o(u.color.dark,"stroke")+' d="'+n(f,l,u.margin)+'"/>',I='viewBox="0 0 '+c+" "+c+'"',S='<svg xmlns="http://www.w3.org/2000/svg" '+(u.width?'width="'+u.width+'" height="'+u.width+'" ':"")+I+' shape-rendering="crispEdges">'+y+d+`</svg>
`;return typeof a=="function"&&a(null,S),S},Et}var Xt;function Qe(){if(Xt)return j;Xt=1;const r=Ie(),o=Ve(),i=Ke(),n=He();function t(e,s,a,u,l){const f=[].slice.call(arguments,1),c=f.length,y=typeof f[c-1]=="function";if(!y&&!r())throw new Error("Callback required as last argument");if(y){if(c<2)throw new Error("Too few arguments provided");c===2?(l=a,a=s,s=u=void 0):c===3&&(s.getContext&&typeof l>"u"?(l=u,u=void 0):(l=u,u=a,a=s,s=void 0))}else{if(c<1)throw new Error("Too few arguments provided");return c===1?(a=s,s=u=void 0):c===2&&!s.getContext&&(u=a,a=s,s=void 0),new Promise(function(d,I){try{const M=o.create(a,u);d(e(M,s,u))}catch(M){I(M)}})}try{const d=o.create(a,u);l(null,e(d,s,u))}catch(d){l(d)}}return j.create=o.create,j.toCanvas=t.bind(null,i.render),j.toDataURL=t.bind(null,i.renderToDataURL),j.toString=t.bind(null,function(e,s,a){return n.render(e,a)}),j}var Je=Qe();const $e=be(Je);function Ye({ecl:r="M",size:o=200,uri:i,clearArea:n=!1,image:t,imageBackground:e="transparent"}){const s=n?76:0,a=o-10*2,u=Ae.useMemo(()=>{const l=[],f=se(i,r),c=a/f.length;if([{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:S,y:h})=>{const N=(f.length-7)*c*S,w=(f.length-7)*c*h;for(let g=0;g<3;g++)l.push(P.jsx("rect",{fill:g%2!==0?"var(--pcm-body-background)":"var(--pcm-body-color)",rx:(g-2)*-5+(g===0?2:3),ry:(g-2)*-5+(g===0?2:3),width:c*(7-g*2),height:c*(7-g*2),x:N+c*g,y:w+c*g},`${g}-${S}-${h}`))}),t){const S=(f.length-7)*c*1,h=(f.length-7)*c*1;l.push(P.jsxs(P.Fragment,{children:[P.jsx("rect",{fill:e,rx:-2*-5+2,ry:-2*-5+2,width:c*(7-0*2),height:c*(7-0*2),x:S+c*0,y:h+c*0}),P.jsx("foreignObject",{width:c*(7-0*2),height:c*(7-0*2),x:S+c*0,y:h+c*0,children:P.jsx("div",{style:{borderRadius:-2*-5+2,overflow:"hidden"},children:t})})]}))}const d=Math.floor((s+25)/c),I=f.length/2-d/2,M=f.length/2+d/2-1;return f.forEach((S,h)=>{S.forEach((N,w)=>{f[h][w]&&(h<7&&w<7||h>f.length-8&&w<7||h<7&&w>f.length-8||(t||!(h>I&&h<M&&w>I&&w<M))&&l.push(P.jsx("circle",{cx:h*c+c/2,cy:w*c+c/2,fill:"var(--pcm-body-color)",r:c/3},`circle-${h}-${w}`)))})}),l},[r,a,i]);return P.jsxs("svg",{height:a,width:a,viewBox:`0 0 ${a} ${a}`,style:{width:a,height:a},children:[P.jsx("rect",{fill:"transparent",height:a,width:a}),u]})}var se,Oe=bt({"src/components/CustomQRCode/QRCode.tsx"(){se=(r,o)=>{const i=Array.prototype.slice.call($e.create(r,{errorCorrectionLevel:o}).modules.data,0),n=Math.sqrt(i.length);return i.reduce((t,e,s)=>(s%n===0?t.push([e]):t[t.length-1].push(e))&&t,[])}}}),ae,ue,te,ce,le,fe,de,Ge=bt({"src/components/CustomQRCode/styles.ts"(){ae=z(V.div)`
  z-index: 3;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 2px;
  border-radius: var(--pcm-rounded-lg);
  background: var(--pcm-body-background);
  box-shadow: 0 0 0 1px var(--pcm-button-border-color);
  backface-visibility: hidden;
  svg {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`,ue=z(V.div)`
  position: absolute;
  inset: 13px;
  svg {
    width: 100% !important;
    height: auto !important;
  }
`,te=Be`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,ce=z(V.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    z-index: 4;
    position: relative;
    width: 28%;
    height: 28%;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 0 0 7px #fff;
  }
  > span {
    z-index: 4;
    position: absolute;
    background: var(--pcm-body-color-secondary);
    border-radius: var(--pcm-rounded-lg);
    width: 13.25%;
    height: 13.25%;
    box-shadow: 0 0 0 4px #fff;
    &:before {
      content: '';
      position: absolute;
      inset: 9px;
      border-radius: 3px;
      box-shadow: 0 0 0 4px #fff;
    }
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    background: repeat;
    background-size: 1.888% 1.888%;
    background-image: radial-gradient(var(--pcm-body-color-secondary) 41%, transparent 41%);
  }
  &:after {
    z-index: 5;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.6) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    background-size: 200% 100%;
    animation: ${te} 1000ms linear infinite both;
    ${r=>r.$failed&&W`
        animation: none;
      `}
  }
`,le=z(V.div)`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%) scale(0.9999); // Shifting fix
`,fe=z(V.div)`
  z-index: 6;
  position: absolute;
  left: 50%;
  overflow: hidden;

  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix

  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100% !important;
  }

  ${r=>r.$wcLogo?W`
          width: 29%;
          height: 20.5%;
        `:W`
          width: 24%;
          height: 24%;
          border-radius: 17px;
          &:before {
            pointer-events: none;
            z-index: 2;
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            /* box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02); */
          }
        `}
`,de=z.div`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 50%;
  left: 50%;
  transform: translate(12px, 12px);
  z-index: 10;
  border-radius: 9999px;
  cursor: pointer;
  button {
    width: 100%;
    height: 100%;
  }
`}});function ee({value:r,image:o,imageBackground:i,ecl:n="M",imagePosition:t="center",failed:e,failedCallback:s}){const a=o;return P.jsxs(ae,{children:[e&&P.jsx(de,{children:P.jsx(ye,{"aria-label":"Retry",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileTap:{scale:.9},transition:{duration:.1},onClick:s,children:P.jsx(Ce,{children:P.jsx(Ee,{})})})}),P.jsxs(ue,{children:[o&&P.jsx(le,{children:P.jsx(fe,{$wcLogo:t!=="center",style:{background:t==="center"?i:void 0},children:a})}),P.jsx(Re,{initial:!1,children:r?P.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.2},children:P.jsx(Ye,{uri:r,size:288,ecl:n,clearArea:!!(t==="center"&&o)})},r):P.jsxs(ce,{initial:{opacity:.2},animate:{opacity:.2},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.2},$failed:e,children:[P.jsx("span",{}),P.jsx("span",{}),P.jsx("span",{}),P.jsx("div",{})]})})]})]})}var We,tn=bt({"src/components/CustomQRCode/index.tsx"(){pe(),we(),Oe(),Ge(),ee.displayName="CustomQRCode",We=ee}});export{We as C,tn as i};
