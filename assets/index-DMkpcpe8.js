import{cX as Be,fo as Ya,r as i,cR as Ce,bK as ae,cS as Q,cN as re,df as nn,cK as j,cU as Hi,c8 as Ui,a4 as $e,de as Za,cV as qr,cW as Gi,cY as it,dk as W,c_ as at,d$ as Xi,dE as Kr,cP as Oe,dh as Yi,dy as Zi,dx as Ji,cO as Y,fp as Ja,ea as Qi,cT as rn,dH as Qa,dd as ea,dz as na,e8 as Br,dv as es,dw as ns,dc as ts,db as rs,dB as ta,cL as st,bJ as ra,dg as os,d_ as is,ee as as,eJ as oa,fq as Nr,c$ as ss,d4 as ls,dp as cs,fr as Fr,fs as ia,ft as fs,fu as qn,fv as us,fw as Wr,fx as Kn,fy as pn,fz as gs,fA as Vr,fB as ds,bH as Hr,fC as ps,fD as ms,bI as aa,fE as vs,Y as sa,a7 as bs,fF as hs,fG as xs,aw as _s,fH as ys,bd as ws,b8 as Ss,fI as fo,fJ as Cs}from"./index-gOj9jnM2.js";import{R as zn,g as la,a as ca,T as fa,u as wn,i as $s}from"./colors-CWLdg5Ur.js";import{d as Rs,H as Is,s as Es}from"./chunk-YNAB6HVU-DFiaPr4v.js";import{r as Ps}from"./index-BqT3UfUb.js";const Os=new Be("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),Ts=new Be("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),Ms=new Be("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),Ns=new Be("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),As=new Be("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ks=new Be("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),js=new Be("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),zs=new Be("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),Ls={"slide-up":{inKeyframes:Os,outKeyframes:Ts},"slide-down":{inKeyframes:Ms,outKeyframes:Ns},"slide-left":{inKeyframes:As,outKeyframes:ks},"slide-right":{inKeyframes:js,outKeyframes:zs}},uo=(e,n)=>{const{antCls:r}=e,t=`${r}-${n}`,{inKeyframes:o,outKeyframes:a}=Ls[n];return[Ya(t,o,a,e.motionDurationMid),{[`
      ${t}-enter,
      ${t}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${t}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var Ds=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],hn=void 0;function qs(e,n){var r=e.prefixCls,t=e.invalidate,o=e.item,a=e.renderItem,s=e.responsive,l=e.responsiveDisabled,f=e.registerSize,c=e.itemKey,d=e.className,u=e.style,m=e.children,w=e.display,x=e.order,I=e.component,S=I===void 0?"div":I,$=Ce(e,Ds),v=s&&!w;function R(b){f(c,b)}i.useEffect(function(){return function(){R(null)}},[]);var P=a&&o!==hn?a(o,{index:x}):m,p;t||(p={opacity:v?0:1,height:v?0:hn,overflowY:v?"hidden":hn,order:s?x:hn,pointerEvents:v?"none":hn,position:v?"absolute":hn});var g={};v&&(g["aria-hidden"]=!0);var y=i.createElement(S,ae({className:re(!t&&r,d),style:Q(Q({},p),u)},g,$,{ref:n}),P);return s&&(y=i.createElement(zn,{onResize:function(C){var O=C.offsetWidth;R(O)},disabled:l},y)),y}var Ln=i.forwardRef(qs);Ln.displayName="Item";function Ks(e){if(typeof MessageChannel>"u")nn(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function Bs(){var e=i.useRef(null),n=function(t){e.current||(e.current=[],Ks(function(){Ui.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(t)};return n}function Pn(e,n){var r=i.useState(n),t=j(r,2),o=t[0],a=t[1],s=Hi(function(l){e(function(){a(l)})});return[o,s]}var rt=$e.createContext(null),Fs=["component"],Ws=["className"],Vs=["className"],Hs=function(n,r){var t=i.useContext(rt);if(!t){var o=n.component,a=o===void 0?"div":o,s=Ce(n,Fs);return i.createElement(a,ae({},s,{ref:r}))}var l=t.className,f=Ce(t,Ws),c=n.className,d=Ce(n,Vs);return i.createElement(rt.Provider,{value:null},i.createElement(Ln,ae({ref:r,className:re(l,c)},f,d)))},ua=i.forwardRef(Hs);ua.displayName="RawItem";var Us=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],ga="responsive",da="invalidate";function Gs(e){return"+ ".concat(e.length," ...")}function Xs(e,n){var r=e.prefixCls,t=r===void 0?"rc-overflow":r,o=e.data,a=o===void 0?[]:o,s=e.renderItem,l=e.renderRawItem,f=e.itemKey,c=e.itemWidth,d=c===void 0?10:c,u=e.ssr,m=e.style,w=e.className,x=e.maxCount,I=e.renderRest,S=e.renderRawRest,$=e.suffix,v=e.component,R=v===void 0?"div":v,P=e.itemComponent,p=e.onVisibleChange,g=Ce(e,Us),y=u==="full",b=Bs(),C=Pn(b,null),O=j(C,2),h=O[0],_=O[1],E=h||0,T=Pn(b,new Map),q=j(T,2),V=q[0],K=q[1],L=Pn(b,0),ee=j(L,2),M=ee[0],se=ee[1],ce=Pn(b,0),N=j(ce,2),k=N[0],G=N[1],X=Pn(b,0),Z=j(X,2),H=Z[0],U=Z[1],ue=i.useState(null),me=j(ue,2),Re=me[0],Te=me[1],B=i.useState(null),z=j(B,2),ve=z[0],D=z[1],oe=i.useMemo(function(){return ve===null&&y?Number.MAX_SAFE_INTEGER:ve||0},[ve,h]),Ie=i.useState(!1),Me=j(Ie,2),ze=Me[0],he=Me[1],ne="".concat(t,"-item"),Ee=Math.max(M,k),qe=x===ga,ge=a.length&&qe,Ve=x===da,Se=ge||typeof x=="number"&&a.length>x,de=i.useMemo(function(){var F=a;return ge?h===null&&y?F=a:F=a.slice(0,Math.min(a.length,E/d)):typeof x=="number"&&(F=a.slice(0,x)),F},[a,d,h,x,ge]),Le=i.useMemo(function(){return ge?a.slice(oe+1):a.slice(de.length)},[a,de,ge,oe]),Ne=i.useCallback(function(F,ie){var le;return typeof f=="function"?f(F):(le=f&&F?.[f])!==null&&le!==void 0?le:ie},[f]),He=i.useCallback(s||function(F){return F},[s]);function ye(F,ie,le){ve===F&&(ie===void 0||ie===Re)||(D(F),le||(he(F<a.length-1),p?.(F)),ie!==void 0&&Te(ie))}function pe(F,ie){_(ie.clientWidth)}function Ae(F,ie){K(function(le){var Ke=new Map(le);return ie===null?Ke.delete(F):Ke.set(F,ie),Ke})}function Pe(F,ie){G(ie),se(k)}function sn(F,ie){U(ie)}function on(F){return V.get(Ne(de[F],F))}Za(function(){if(E&&typeof Ee=="number"&&de){var F=H,ie=de.length,le=ie-1;if(!ie){ye(0,null);return}for(var Ke=0;Ke<ie;Ke+=1){var ke=on(Ke);if(y&&(ke=ke||0),ke===void 0){ye(Ke-1,void 0,!0);break}if(F+=ke,le===0&&F<=E||Ke===le-1&&F+on(le)<=E){ye(le,null);break}else if(F+Ee>E){ye(Ke-1,F-ke-H+k);break}}$&&on(0)+H>E&&Te(null)}},[E,V,k,H,Ne,de]);var ln=ze&&!!Le.length,mn={};Re!==null&&ge&&(mn={position:"absolute",left:Re,top:0});var Ge={prefixCls:ne,responsive:ge,component:P,invalidate:Ve},vn=l?function(F,ie){var le=Ne(F,ie);return i.createElement(rt.Provider,{key:le,value:Q(Q({},Ge),{},{order:ie,item:F,itemKey:le,registerSize:Ae,display:ie<=oe})},l(F,ie))}:function(F,ie){var le=Ne(F,ie);return i.createElement(Ln,ae({},Ge,{order:ie,key:le,item:F,renderItem:He,itemKey:le,registerSize:Ae,display:ie<=oe}))},cn={order:ln?oe:Number.MAX_SAFE_INTEGER,className:"".concat(ne,"-rest"),registerSize:Pe,display:ln},Xe=I||Gs,Ue=S?i.createElement(rt.Provider,{value:Q(Q({},Ge),cn)},S(Le)):i.createElement(Ln,ae({},Ge,cn),typeof Xe=="function"?Xe(Le):Xe),Ye=i.createElement(R,ae({className:re(!Ve&&t,w),style:m,ref:n},g),de.map(vn),Se?Ue:null,$&&i.createElement(Ln,ae({},Ge,{responsive:qe,responsiveDisabled:!ge,order:oe,className:"".concat(ne,"-suffix"),registerSize:sn,display:!0,style:mn}),$));return qe?i.createElement(zn,{onResize:pe,disabled:!ge},Ye):Ye}var tn=i.forwardRef(Xs);tn.displayName="Overflow";tn.Item=ua;tn.RESPONSIVE=ga;tn.INVALIDATE=da;const Ys=new Be("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),Zs=new Be("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),Js=new Be("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),Qs=new Be("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),el=new Be("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),nl=new Be("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),tl=e=>{const{componentCls:n,iconCls:r,antCls:t,badgeShadowSize:o,textFontSize:a,textFontSizeSM:s,statusSize:l,dotSize:f,textFontWeight:c,indicatorHeight:d,indicatorHeightSM:u,marginXS:m,calc:w}=e,x=`${t}-scroll-number`,I=la(e,(S,{darkColor:$})=>({[`&${n} ${n}-color-${S}`]:{background:$,[`&:not(${n}-count)`]:{color:$},"a:hover &":{background:$}}}));return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},it(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${n}-count`]:{display:"inline-flex",justifyContent:"center",zIndex:e.indicatorZIndex,minWidth:d,height:d,color:e.badgeTextColor,fontWeight:c,fontSize:a,lineHeight:W(d),whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:w(d).div(2).equal(),boxShadow:`0 0 0 ${W(o)} ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${n}-count-sm`]:{minWidth:u,height:u,fontSize:s,lineHeight:W(u),borderRadius:w(u).div(2).equal()},[`${n}-multiple-words`]:{padding:`0 ${W(e.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${n}-dot`]:{zIndex:e.indicatorZIndex,width:f,minWidth:f,height:f,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${W(o)} ${e.badgeShadowColor}`},[`${n}-count, ${n}-dot, ${x}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${r}-spin`]:{animationName:nl,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${n}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${n}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:l,height:l,verticalAlign:"middle",borderRadius:"50%"},[`${n}-status-success`]:{backgroundColor:e.colorSuccess},[`${n}-status-processing`]:{overflow:"visible",color:e.colorInfo,backgroundColor:e.colorInfo,borderColor:"currentcolor","&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:o,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:Ys,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${n}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${n}-status-error`]:{backgroundColor:e.colorError},[`${n}-status-warning`]:{backgroundColor:e.colorWarning},[`${n}-status-text`]:{marginInlineStart:m,color:e.colorText,fontSize:e.fontSize}}}),I),{[`${n}-zoom-appear, ${n}-zoom-enter`]:{animationName:Zs,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${n}-zoom-leave`]:{animationName:Js,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${n}-not-a-wrapper`]:{[`${n}-zoom-appear, ${n}-zoom-enter`]:{animationName:Qs,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${n}-zoom-leave`]:{animationName:el,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${n}-status)`]:{verticalAlign:"middle"},[`${x}-custom-component, ${n}-count`]:{transform:"none"},[`${x}-custom-component, ${x}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[x]:{overflow:"hidden",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack}`,[`${x}-only`]:{position:"relative",display:"inline-block",height:d,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${x}-only-unit`]:{height:d,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${x}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${n}-count, ${n}-dot, ${x}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},pa=e=>{const{fontHeight:n,lineWidth:r,marginXS:t,colorBorderBg:o}=e,a=n,s=r,l=e.colorTextLightSolid,f=e.colorError,c=e.colorErrorHover;return Gi(e,{badgeFontHeight:a,badgeShadowSize:s,badgeTextColor:l,badgeColor:f,badgeColorHover:c,badgeShadowColor:o,badgeProcessingDuration:"1.2s",badgeRibbonOffset:t,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},ma=e=>{const{fontSize:n,lineHeight:r,fontSizeSM:t,lineWidth:o}=e;return{indicatorZIndex:"auto",indicatorHeight:Math.round(n*r)-2*o,indicatorHeightSM:n,dotSize:t/2,textFontSize:t,textFontSizeSM:t,textFontWeight:"normal",statusSize:t/2}},rl=qr("Badge",e=>{const n=pa(e);return tl(n)},ma),ol=e=>{const{antCls:n,badgeFontHeight:r,marginXS:t,badgeRibbonOffset:o,calc:a}=e,s=`${n}-ribbon`,l=`${n}-ribbon-wrapper`,f=la(e,(c,{darkColor:d})=>({[`&${s}-color-${c}`]:{background:d,color:d}}));return{[l]:{position:"relative"},[s]:Object.assign(Object.assign(Object.assign(Object.assign({},it(e)),{position:"absolute",top:t,padding:`0 ${W(e.paddingXS)}`,color:e.colorPrimary,lineHeight:W(r),whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${s}-text`]:{color:e.badgeTextColor},[`${s}-corner`]:{position:"absolute",top:"100%",width:o,height:o,color:"currentcolor",border:`${W(a(o).div(2).equal())} solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),f),{[`&${s}-placement-end`]:{insetInlineEnd:a(o).mul(-1).equal(),borderEndEndRadius:0,[`${s}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${s}-placement-start`]:{insetInlineStart:a(o).mul(-1).equal(),borderEndStartRadius:0,[`${s}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},il=qr(["Badge","Ribbon"],e=>{const n=pa(e);return ol(n)},ma),al=e=>{const{className:n,prefixCls:r,style:t,color:o,children:a,text:s,placement:l="end",rootClassName:f}=e,{getPrefixCls:c,direction:d}=i.useContext(at),u=c("ribbon",r),m=`${u}-wrapper`,[w,x,I]=il(u,m),S=ca(o,!1),$=re(u,`${u}-placement-${l}`,{[`${u}-rtl`]:d==="rtl",[`${u}-color-${o}`]:S},n),v={},R={};return o&&!S&&(v.background=o,R.color=o),w(i.createElement("div",{className:re(m,f,x,I)},a,i.createElement("div",{className:re($,x),style:Object.assign(Object.assign({},v),t)},i.createElement("span",{className:`${u}-text`},s),i.createElement("div",{className:`${u}-corner`,style:R}))))},go=e=>{const{prefixCls:n,value:r,current:t,offset:o=0}=e;let a;return o&&(a={position:"absolute",top:`${o}00%`,left:0}),i.createElement("span",{style:a,className:re(`${n}-only-unit`,{current:t})},r)};function sl(e,n,r){let t=e,o=0;for(;(t+10)%10!==n;)t+=r,o+=r;return o}const ll=e=>{const{prefixCls:n,count:r,value:t}=e,o=Number(t),a=Math.abs(r),[s,l]=i.useState(o),[f,c]=i.useState(a),d=()=>{l(o),c(a)};i.useEffect(()=>{const w=setTimeout(d,1e3);return()=>clearTimeout(w)},[o]);let u,m;if(s===o||Number.isNaN(o)||Number.isNaN(s))u=[i.createElement(go,Object.assign({},e,{key:o,current:!0}))],m={transition:"none"};else{u=[];const w=o+10,x=[];for(let v=o;v<=w;v+=1)x.push(v);const I=f<a?1:-1,S=x.findIndex(v=>v%10===s);u=(I<0?x.slice(0,S+1):x.slice(S)).map((v,R)=>{const P=v%10;return i.createElement(go,Object.assign({},e,{key:v,value:P,offset:I<0?R-S:R,current:R===S}))}),m={transform:`translateY(${-sl(s,o,I)}00%)`}}return i.createElement("span",{className:`${n}-only`,style:m,onTransitionEnd:d},u)};var cl=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const fl=i.forwardRef((e,n)=>{const{prefixCls:r,count:t,className:o,motionClassName:a,style:s,title:l,show:f,component:c="sup",children:d}=e,u=cl(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:m}=i.useContext(at),w=m("scroll-number",r),x=Object.assign(Object.assign({},u),{"data-show":f,style:s,className:re(w,o,a),title:l});let I=t;if(t&&Number(t)%1===0){const S=String(t).split("");I=i.createElement("bdi",null,S.map(($,v)=>i.createElement(ll,{prefixCls:w,count:Number(t),value:$,key:S.length-v})))}return s?.borderColor&&(x.style=Object.assign(Object.assign({},s),{boxShadow:`0 0 0 1px ${s.borderColor} inset`})),d?Xi(d,S=>({className:re(`${w}-custom-component`,S?.className,a)})):i.createElement(c,Object.assign({},x,{ref:n}),I)});var ul=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const gl=i.forwardRef((e,n)=>{var r,t,o,a,s;const{prefixCls:l,scrollNumberPrefixCls:f,children:c,status:d,text:u,color:m,count:w=null,overflowCount:x=99,dot:I=!1,size:S="default",title:$,offset:v,style:R,className:P,rootClassName:p,classNames:g,styles:y,showZero:b=!1}=e,C=ul(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:O,direction:h,badge:_}=i.useContext(at),E=O("badge",l),[T,q,V]=rl(E),K=w>x?`${x}+`:w,L=K==="0"||K===0,ee=w===null||L&&!b,M=(d!=null||m!=null)&&ee,se=d!=null||!L,ce=I&&!L,N=ce?"":K,k=i.useMemo(()=>(N==null||N===""||L&&!b)&&!ce,[N,L,b,ce]),G=i.useRef(w);k||(G.current=w);const X=G.current,Z=i.useRef(N);k||(Z.current=N);const H=Z.current,U=i.useRef(ce);k||(U.current=ce);const ue=i.useMemo(()=>{if(!v)return Object.assign(Object.assign({},_?.style),R);const oe={marginTop:v[1]};return h==="rtl"?oe.left=parseInt(v[0],10):oe.right=-parseInt(v[0],10),Object.assign(Object.assign(Object.assign({},oe),_?.style),R)},[h,v,R,_?.style]),me=$??(typeof X=="string"||typeof X=="number"?X:void 0),Re=k||!u?null:i.createElement("span",{className:`${E}-status-text`},u),Te=!X||typeof X!="object"?void 0:Xi(X,oe=>({style:Object.assign(Object.assign({},ue),oe.style)})),B=ca(m,!1),z=re(g?.indicator,(r=_?.classNames)===null||r===void 0?void 0:r.indicator,{[`${E}-status-dot`]:M,[`${E}-status-${d}`]:!!d,[`${E}-color-${m}`]:B}),ve={};m&&!B&&(ve.color=m,ve.background=m);const D=re(E,{[`${E}-status`]:M,[`${E}-not-a-wrapper`]:!c,[`${E}-rtl`]:h==="rtl"},P,p,_?.className,(t=_?.classNames)===null||t===void 0?void 0:t.root,g?.root,q,V);if(!c&&M&&(u||se||!ee)){const oe=ue.color;return T(i.createElement("span",Object.assign({},C,{className:D,style:Object.assign(Object.assign(Object.assign({},y?.root),(o=_?.styles)===null||o===void 0?void 0:o.root),ue)}),i.createElement("span",{className:z,style:Object.assign(Object.assign(Object.assign({},y?.indicator),(a=_?.styles)===null||a===void 0?void 0:a.indicator),ve)}),u&&i.createElement("span",{style:{color:oe},className:`${E}-status-text`},u)))}return T(i.createElement("span",Object.assign({ref:n},C,{className:D,style:Object.assign(Object.assign({},(s=_?.styles)===null||s===void 0?void 0:s.root),y?.root)}),c,i.createElement(Kr,{visible:!k,motionName:`${E}-zoom`,motionAppear:!1,motionDeadline:1e3},({className:oe})=>{var Ie,Me;const ze=O("scroll-number",f),he=U.current,ne=re(g?.indicator,(Ie=_?.classNames)===null||Ie===void 0?void 0:Ie.indicator,{[`${E}-dot`]:he,[`${E}-count`]:!he,[`${E}-count-sm`]:S==="small",[`${E}-multiple-words`]:!he&&H&&H.toString().length>1,[`${E}-status-${d}`]:!!d,[`${E}-color-${m}`]:B});let Ee=Object.assign(Object.assign(Object.assign({},y?.indicator),(Me=_?.styles)===null||Me===void 0?void 0:Me.indicator),ue);return m&&!B&&(Ee=Ee||{},Ee.background=m),i.createElement(fl,{prefixCls:ze,show:!k,motionClassName:oe,className:ne,count:H,title:me,style:Ee,key:"scrollNumber"},Te)}),Re))}),va=gl;va.Ribbon=al;var dl=Oe.ESC,pl=Oe.TAB;function ml(e){var n=e.visible,r=e.triggerRef,t=e.onVisibleChange,o=e.autoFocus,a=e.overlayRef,s=i.useRef(!1),l=function(){if(n){var u,m;(u=r.current)===null||u===void 0||(m=u.focus)===null||m===void 0||m.call(u),t?.(!1)}},f=function(){var u;return(u=a.current)!==null&&u!==void 0&&u.focus?(a.current.focus(),s.current=!0,!0):!1},c=function(u){switch(u.keyCode){case dl:l();break;case pl:{var m=!1;s.current||(m=f()),m?u.preventDefault():l();break}}};i.useEffect(function(){return n?(window.addEventListener("keydown",c),o&&nn(f,3),function(){window.removeEventListener("keydown",c),s.current=!1}):function(){s.current=!1}},[n])}var vl=i.forwardRef(function(e,n){var r=e.overlay,t=e.arrow,o=e.prefixCls,a=i.useMemo(function(){var l;return typeof r=="function"?l=r():l=r,l},[r]),s=Yi(n,Zi(a));return $e.createElement($e.Fragment,null,t&&$e.createElement("div",{className:"".concat(o,"-arrow")}),$e.cloneElement(a,{ref:Ji(a)?s:void 0}))}),xn={adjustX:1,adjustY:1},_n=[0,0],bl={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-4],targetOffset:_n},top:{points:["bc","tc"],overflow:xn,offset:[0,-4],targetOffset:_n},topRight:{points:["br","tr"],overflow:xn,offset:[0,-4],targetOffset:_n},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,4],targetOffset:_n},bottom:{points:["tc","bc"],overflow:xn,offset:[0,4],targetOffset:_n},bottomRight:{points:["tr","br"],overflow:xn,offset:[0,4],targetOffset:_n}},hl=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function xl(e,n){var r,t=e.arrow,o=t===void 0?!1:t,a=e.prefixCls,s=a===void 0?"rc-dropdown":a,l=e.transitionName,f=e.animation,c=e.align,d=e.placement,u=d===void 0?"bottomLeft":d,m=e.placements,w=m===void 0?bl:m,x=e.getPopupContainer,I=e.showAction,S=e.hideAction,$=e.overlayClassName,v=e.overlayStyle,R=e.visible,P=e.trigger,p=P===void 0?["hover"]:P,g=e.autoFocus,y=e.overlay,b=e.children,C=e.onVisibleChange,O=Ce(e,hl),h=$e.useState(),_=j(h,2),E=_[0],T=_[1],q="visible"in e?R:E,V=$e.useRef(null),K=$e.useRef(null),L=$e.useRef(null);$e.useImperativeHandle(n,function(){return V.current});var ee=function(H){T(H),C?.(H)};ml({visible:q,triggerRef:L,onVisibleChange:ee,autoFocus:g,overlayRef:K});var M=function(H){var U=e.onOverlayClick;T(!1),U&&U(H)},se=function(){return $e.createElement(vl,{ref:K,overlay:y,prefixCls:s,arrow:o})},ce=function(){return typeof y=="function"?se:se()},N=function(){var H=e.minOverlayWidthMatchTrigger,U=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?H:!U},k=function(){var H=e.openClassName;return H!==void 0?H:"".concat(s,"-open")},G=$e.cloneElement(b,{className:re((r=b.props)===null||r===void 0?void 0:r.className,q&&k()),ref:Ji(b)?Yi(L,Zi(b)):void 0}),X=S;return!X&&p.indexOf("contextMenu")!==-1&&(X=["click"]),$e.createElement(fa,ae({builtinPlacements:w},O,{prefixCls:s,ref:V,popupClassName:re($,Y({},"".concat(s,"-show-arrow"),o)),popupStyle:v,action:p,showAction:I,hideAction:X,popupPlacement:u,popupAlign:c,popupTransitionName:l,popupAnimation:f,popupVisible:q,stretch:N()?"minWidth":"",popup:ce(),onPopupVisibleChange:ee,onPopupClick:M,getPopupContainer:x}),G)}const _l=$e.forwardRef(xl);var ba=i.createContext(null);function ha(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function xa(e){var n=i.useContext(ba);return ha(n,e)}var yl=["children","locked"],Je=i.createContext(null);function wl(e,n){var r=Q({},e);return Object.keys(n).forEach(function(t){var o=n[t];o!==void 0&&(r[t]=o)}),r}function Dn(e){var n=e.children,r=e.locked,t=Ce(e,yl),o=i.useContext(Je),a=Ja(function(){return wl(o,t)},[o,t],function(s,l){return!r&&(s[0]!==l[0]||!Qi(s[1],l[1],!0))});return i.createElement(Je.Provider,{value:a},n)}var Sl=[],_a=i.createContext(null);function lt(){return i.useContext(_a)}var ya=i.createContext(Sl);function Bn(e){var n=i.useContext(ya);return i.useMemo(function(){return e!==void 0?[].concat(rn(n),[e]):n},[n,e])}var wa=i.createContext(null),Ur=i.createContext({});function po(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Qa(e)){var r=e.nodeName.toLowerCase(),t=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),a=Number(o),s=null;return o&&!Number.isNaN(a)?s=a:t&&s===null&&(s=0),t&&e.disabled&&(s=null),s!==null&&(s>=0||n&&s<0)}return!1}function Cl(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=rn(e.querySelectorAll("*")).filter(function(t){return po(t,n)});return po(e,n)&&r.unshift(e),r}var Ar=Oe.LEFT,kr=Oe.RIGHT,jr=Oe.UP,et=Oe.DOWN,nt=Oe.ENTER,Sa=Oe.ESC,On=Oe.HOME,Tn=Oe.END,mo=[jr,et,Ar,kr];function $l(e,n,r,t){var o,a="prev",s="next",l="children",f="parent";if(e==="inline"&&t===nt)return{inlineTrigger:!0};var c=Y(Y({},jr,a),et,s),d=Y(Y(Y(Y({},Ar,r?s:a),kr,r?a:s),et,l),nt,l),u=Y(Y(Y(Y(Y(Y({},jr,a),et,s),nt,l),Sa,f),Ar,r?l:f),kr,r?f:l),m={inline:c,horizontal:d,vertical:u,inlineSub:c,horizontalSub:u,verticalSub:u},w=(o=m["".concat(e).concat(n?"":"Sub")])===null||o===void 0?void 0:o[t];switch(w){case a:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case f:return{offset:-1,sibling:!1};case l:return{offset:1,sibling:!1};default:return null}}function Rl(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function Il(e,n){for(var r=e||document.activeElement;r;){if(n.has(r))return r;r=r.parentElement}return null}function Gr(e,n){var r=Cl(e,!0);return r.filter(function(t){return n.has(t)})}function vo(e,n,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=Gr(e,n),a=o.length,s=o.findIndex(function(l){return r===l});return t<0?s===-1?s=a-1:s-=1:t>0&&(s+=1),s=(s+a)%a,o[s]}var zr=function(n,r){var t=new Set,o=new Map,a=new Map;return n.forEach(function(s){var l=document.querySelector("[data-menu-id='".concat(ha(r,s),"']"));l&&(t.add(l),a.set(l,s),o.set(s,l))}),{elements:t,key2element:o,element2key:a}};function El(e,n,r,t,o,a,s,l,f,c){var d=i.useRef(),u=i.useRef();u.current=n;var m=function(){nn.cancel(d.current)};return i.useEffect(function(){return function(){m()}},[]),function(w){var x=w.which;if([].concat(mo,[nt,Sa,On,Tn]).includes(x)){var I=a(),S=zr(I,t),$=S,v=$.elements,R=$.key2element,P=$.element2key,p=R.get(n),g=Il(p,v),y=P.get(g),b=$l(e,s(y,!0).length===1,r,x);if(!b&&x!==On&&x!==Tn)return;(mo.includes(x)||[On,Tn].includes(x))&&w.preventDefault();var C=function(K){if(K){var L=K,ee=K.querySelector("a");ee!=null&&ee.getAttribute("href")&&(L=ee);var M=P.get(K);l(M),m(),d.current=nn(function(){u.current===M&&L.focus()})}};if([On,Tn].includes(x)||b.sibling||!g){var O;!g||e==="inline"?O=o.current:O=Rl(g);var h,_=Gr(O,v);x===On?h=_[0]:x===Tn?h=_[_.length-1]:h=vo(O,v,g,b.offset),C(h)}else if(b.inlineTrigger)f(y);else if(b.offset>0)f(y,!0),m(),d.current=nn(function(){S=zr(I,t);var V=g.getAttribute("aria-controls"),K=document.getElementById(V),L=vo(K,S.elements);C(L)},5);else if(b.offset<0){var E=s(y,!0),T=E[E.length-2],q=R.get(T);f(T,!1),C(q)}}c?.(w)}}function Pl(e){Promise.resolve().then(e)}var Xr="__RC_UTIL_PATH_SPLIT__",bo=function(n){return n.join(Xr)},Ol=function(n){return n.split(Xr)},Lr="rc-menu-more";function Tl(){var e=i.useState({}),n=j(e,2),r=n[1],t=i.useRef(new Map),o=i.useRef(new Map),a=i.useState([]),s=j(a,2),l=s[0],f=s[1],c=i.useRef(0),d=i.useRef(!1),u=function(){d.current||r({})},m=i.useCallback(function(R,P){var p=bo(P);o.current.set(p,R),t.current.set(R,p),c.current+=1;var g=c.current;Pl(function(){g===c.current&&u()})},[]),w=i.useCallback(function(R,P){var p=bo(P);o.current.delete(p),t.current.delete(R)},[]),x=i.useCallback(function(R){f(R)},[]),I=i.useCallback(function(R,P){var p=t.current.get(R)||"",g=Ol(p);return P&&l.includes(g[0])&&g.unshift(Lr),g},[l]),S=i.useCallback(function(R,P){return R.filter(function(p){return p!==void 0}).some(function(p){var g=I(p,!0);return g.includes(P)})},[I]),$=function(){var P=rn(t.current.keys());return l.length&&P.push(Lr),P},v=i.useCallback(function(R){var P="".concat(t.current.get(R)).concat(Xr),p=new Set;return rn(o.current.keys()).forEach(function(g){g.startsWith(P)&&p.add(o.current.get(g))}),p},[]);return i.useEffect(function(){return function(){d.current=!0}},[]),{registerPath:m,unregisterPath:w,refreshOverflowKeys:x,isSubPathKey:S,getKeyPath:I,getKeys:$,getSubPathKeys:v}}function Nn(e){var n=i.useRef(e);n.current=e;var r=i.useCallback(function(){for(var t,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(a))},[]);return e?r:void 0}var Ml=Math.random().toFixed(5).toString().slice(2),ho=0;function Nl(e){var n=wn(e,{value:e}),r=j(n,2),t=r[0],o=r[1];return i.useEffect(function(){ho+=1;var a="".concat(Ml,"-").concat(ho);o("rc-menu-uuid-".concat(a))},[]),t}function Ca(e,n,r,t){var o=i.useContext(Je),a=o.activeKey,s=o.onActive,l=o.onInactive,f={active:a===e};return n||(f.onMouseEnter=function(c){r?.({key:e,domEvent:c}),s(e)},f.onMouseLeave=function(c){t?.({key:e,domEvent:c}),l(e)}),f}function $a(e){var n=i.useContext(Je),r=n.mode,t=n.rtl,o=n.inlineIndent;if(r!=="inline")return null;var a=e;return t?{paddingRight:a*o}:{paddingLeft:a*o}}function Ra(e){var n=e.icon,r=e.props,t=e.children,o;return n===null||n===!1?null:(typeof n=="function"?o=i.createElement(n,Q({},r)):typeof n!="boolean"&&(o=n),o||t||null)}var Al=["item"];function ot(e){var n=e.item,r=Ce(e,Al);return Object.defineProperty(r,"item",{get:function(){return ea(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),r}var kl=["title","attribute","elementRef"],jl=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],zl=["active"],Ll=function(e){es(r,e);var n=ns(r);function r(){return ts(this,r),n.apply(this,arguments)}return rs(r,[{key:"render",value:function(){var o=this.props,a=o.title,s=o.attribute,l=o.elementRef,f=Ce(o,kl),c=Br(f,["eventKey","popupClassName","popupOffset","onTitleClick"]);return ea(!s,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),i.createElement(tn.Item,ae({},s,{title:typeof a=="string"?a:void 0},c,{ref:l}))}}]),r}(i.Component),Dl=i.forwardRef(function(e,n){var r=e.style,t=e.className,o=e.eventKey;e.warnKey;var a=e.disabled,s=e.itemIcon,l=e.children,f=e.role,c=e.onMouseEnter,d=e.onMouseLeave,u=e.onClick,m=e.onKeyDown,w=e.onFocus,x=Ce(e,jl),I=xa(o),S=i.useContext(Je),$=S.prefixCls,v=S.onItemClick,R=S.disabled,P=S.overflowDisabled,p=S.itemIcon,g=S.selectedKeys,y=S.onActive,b=i.useContext(Ur),C=b._internalRenderMenuItem,O="".concat($,"-item"),h=i.useRef(),_=i.useRef(),E=R||a,T=na(n,_),q=Bn(o),V=function(U){return{key:o,keyPath:rn(q).reverse(),item:h.current,domEvent:U}},K=s||p,L=Ca(o,E,c,d),ee=L.active,M=Ce(L,zl),se=g.includes(o),ce=$a(q.length),N=function(U){if(!E){var ue=V(U);u?.(ot(ue)),v(ue)}},k=function(U){if(m?.(U),U.which===Oe.ENTER){var ue=V(U);u?.(ot(ue)),v(ue)}},G=function(U){y(o),w?.(U)},X={};e.role==="option"&&(X["aria-selected"]=se);var Z=i.createElement(Ll,ae({ref:h,elementRef:T,role:f===null?"none":f||"menuitem",tabIndex:a?null:-1,"data-menu-id":P&&I?null:I},Br(x,["extra"]),M,X,{component:"li","aria-disabled":a,style:Q(Q({},ce),r),className:re(O,Y(Y(Y({},"".concat(O,"-active"),ee),"".concat(O,"-selected"),se),"".concat(O,"-disabled"),E),t),onClick:N,onKeyDown:k,onFocus:G}),l,i.createElement(Ra,{props:Q(Q({},e),{},{isSelected:se}),icon:K}));return C&&(Z=C(Z,e,{selected:se})),Z});function ql(e,n){var r=e.eventKey,t=lt(),o=Bn(r);return i.useEffect(function(){if(t)return t.registerPath(r,o),function(){t.unregisterPath(r,o)}},[o]),t?null:i.createElement(Dl,ae({},e,{ref:n}))}const ct=i.forwardRef(ql);var Kl=["className","children"],Bl=function(n,r){var t=n.className,o=n.children,a=Ce(n,Kl),s=i.useContext(Je),l=s.prefixCls,f=s.mode,c=s.rtl;return i.createElement("ul",ae({className:re(l,c&&"".concat(l,"-rtl"),"".concat(l,"-sub"),"".concat(l,"-").concat(f==="inline"?"inline":"vertical"),t),role:"menu"},a,{"data-menu-list":!0,ref:r}),o)},Yr=i.forwardRef(Bl);Yr.displayName="SubMenuList";function Zr(e,n){return ta(e).map(function(r,t){if(i.isValidElement(r)){var o,a,s=r.key,l=(o=(a=r.props)===null||a===void 0?void 0:a.eventKey)!==null&&o!==void 0?o:s,f=l==null;f&&(l="tmp_key-".concat([].concat(rn(n),[t]).join("-")));var c={key:l,eventKey:l};return i.cloneElement(r,c)}return r})}var De={adjustX:1,adjustY:1},Fl={topLeft:{points:["bl","tl"],overflow:De},topRight:{points:["br","tr"],overflow:De},bottomLeft:{points:["tl","bl"],overflow:De},bottomRight:{points:["tr","br"],overflow:De},leftTop:{points:["tr","tl"],overflow:De},leftBottom:{points:["br","bl"],overflow:De},rightTop:{points:["tl","tr"],overflow:De},rightBottom:{points:["bl","br"],overflow:De}},Wl={topLeft:{points:["bl","tl"],overflow:De},topRight:{points:["br","tr"],overflow:De},bottomLeft:{points:["tl","bl"],overflow:De},bottomRight:{points:["tr","br"],overflow:De},rightTop:{points:["tr","tl"],overflow:De},rightBottom:{points:["br","bl"],overflow:De},leftTop:{points:["tl","tr"],overflow:De},leftBottom:{points:["bl","br"],overflow:De}};function Ia(e,n,r){if(n)return n;if(r)return r[e]||r.other}var Vl={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Hl(e){var n=e.prefixCls,r=e.visible,t=e.children,o=e.popup,a=e.popupStyle,s=e.popupClassName,l=e.popupOffset,f=e.disabled,c=e.mode,d=e.onVisibleChange,u=i.useContext(Je),m=u.getPopupContainer,w=u.rtl,x=u.subMenuOpenDelay,I=u.subMenuCloseDelay,S=u.builtinPlacements,$=u.triggerSubMenuAction,v=u.forceSubMenuRender,R=u.rootClassName,P=u.motion,p=u.defaultMotions,g=i.useState(!1),y=j(g,2),b=y[0],C=y[1],O=w?Q(Q({},Wl),S):Q(Q({},Fl),S),h=Vl[c],_=Ia(c,P,p),E=i.useRef(_);c!=="inline"&&(E.current=_);var T=Q(Q({},E.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),q=i.useRef();return i.useEffect(function(){return q.current=nn(function(){C(r)}),function(){nn.cancel(q.current)}},[r]),i.createElement(fa,{prefixCls:n,popupClassName:re("".concat(n,"-popup"),Y({},"".concat(n,"-rtl"),w),s,R),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:m,builtinPlacements:O,popupPlacement:h,popupVisible:b,popup:o,popupStyle:a,popupAlign:l&&{offset:l},action:f?[]:[$],mouseEnterDelay:x,mouseLeaveDelay:I,onPopupVisibleChange:d,forceRender:v,popupMotion:T,fresh:!0},t)}function Ul(e){var n=e.id,r=e.open,t=e.keyPath,o=e.children,a="inline",s=i.useContext(Je),l=s.prefixCls,f=s.forceSubMenuRender,c=s.motion,d=s.defaultMotions,u=s.mode,m=i.useRef(!1);m.current=u===a;var w=i.useState(!m.current),x=j(w,2),I=x[0],S=x[1],$=m.current?r:!1;i.useEffect(function(){m.current&&S(!1)},[u]);var v=Q({},Ia(a,c,d));t.length>1&&(v.motionAppear=!1);var R=v.onVisibleChanged;return v.onVisibleChanged=function(P){return!m.current&&!P&&S(!0),R?.(P)},I?null:i.createElement(Dn,{mode:a,locked:!m.current},i.createElement(Kr,ae({visible:$},v,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(l,"-hidden")}),function(P){var p=P.className,g=P.style;return i.createElement(Yr,{id:n,className:p,style:g},o)}))}var Gl=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Xl=["active"],Yl=i.forwardRef(function(e,n){var r=e.style,t=e.className,o=e.title,a=e.eventKey;e.warnKey;var s=e.disabled,l=e.internalPopupClose,f=e.children,c=e.itemIcon,d=e.expandIcon,u=e.popupClassName,m=e.popupOffset,w=e.popupStyle,x=e.onClick,I=e.onMouseEnter,S=e.onMouseLeave,$=e.onTitleClick,v=e.onTitleMouseEnter,R=e.onTitleMouseLeave,P=Ce(e,Gl),p=xa(a),g=i.useContext(Je),y=g.prefixCls,b=g.mode,C=g.openKeys,O=g.disabled,h=g.overflowDisabled,_=g.activeKey,E=g.selectedKeys,T=g.itemIcon,q=g.expandIcon,V=g.onItemClick,K=g.onOpenChange,L=g.onActive,ee=i.useContext(Ur),M=ee._internalRenderSubMenuItem,se=i.useContext(wa),ce=se.isSubPathKey,N=Bn(),k="".concat(y,"-submenu"),G=O||s,X=i.useRef(),Z=i.useRef(),H=c??T,U=d??q,ue=C.includes(a),me=!h&&ue,Re=ce(E,a),Te=Ca(a,G,v,R),B=Te.active,z=Ce(Te,Xl),ve=i.useState(!1),D=j(ve,2),oe=D[0],Ie=D[1],Me=function(Pe){G||Ie(Pe)},ze=function(Pe){Me(!0),I?.({key:a,domEvent:Pe})},he=function(Pe){Me(!1),S?.({key:a,domEvent:Pe})},ne=i.useMemo(function(){return B||(b!=="inline"?oe||ce([_],a):!1)},[b,B,_,oe,a,ce]),Ee=$a(N.length),qe=function(Pe){G||($?.({key:a,domEvent:Pe}),b==="inline"&&K(a,!ue))},ge=Nn(function(Ae){x?.(ot(Ae)),V(Ae)}),Ve=function(Pe){b!=="inline"&&K(a,Pe)},Se=function(){L(a)},de=p&&"".concat(p,"-popup"),Le=i.useMemo(function(){return i.createElement(Ra,{icon:b!=="horizontal"?U:void 0,props:Q(Q({},e),{},{isOpen:me,isSubMenu:!0})},i.createElement("i",{className:"".concat(k,"-arrow")}))},[b,U,e,me,k]),Ne=i.createElement("div",ae({role:"menuitem",style:Ee,className:"".concat(k,"-title"),tabIndex:G?null:-1,ref:X,title:typeof o=="string"?o:null,"data-menu-id":h&&p?null:p,"aria-expanded":me,"aria-haspopup":!0,"aria-controls":de,"aria-disabled":G,onClick:qe,onFocus:Se},z),o,Le),He=i.useRef(b);if(b!=="inline"&&N.length>1?He.current="vertical":He.current=b,!h){var ye=He.current;Ne=i.createElement(Hl,{mode:ye,prefixCls:k,visible:!l&&me&&b!=="inline",popupClassName:u,popupOffset:m,popupStyle:w,popup:i.createElement(Dn,{mode:ye==="horizontal"?"vertical":ye},i.createElement(Yr,{id:de,ref:Z},f)),disabled:G,onVisibleChange:Ve},Ne)}var pe=i.createElement(tn.Item,ae({ref:n,role:"none"},P,{component:"li",style:r,className:re(k,"".concat(k,"-").concat(b),t,Y(Y(Y(Y({},"".concat(k,"-open"),me),"".concat(k,"-active"),ne),"".concat(k,"-selected"),Re),"".concat(k,"-disabled"),G)),onMouseEnter:ze,onMouseLeave:he}),Ne,!h&&i.createElement(Ul,{id:de,open:me,keyPath:N},f));return M&&(pe=M(pe,e,{selected:Re,active:ne,open:me,disabled:G})),i.createElement(Dn,{onItemClick:ge,mode:b==="horizontal"?"vertical":b,itemIcon:H,expandIcon:U},pe)}),Jr=i.forwardRef(function(e,n){var r=e.eventKey,t=e.children,o=Bn(r),a=Zr(t,o),s=lt();i.useEffect(function(){if(s)return s.registerPath(r,o),function(){s.unregisterPath(r,o)}},[o]);var l;return s?l=a:l=i.createElement(Yl,ae({ref:n},e),a),i.createElement(ya.Provider,{value:o},l)});function Ea(e){var n=e.className,r=e.style,t=i.useContext(Je),o=t.prefixCls,a=lt();return a?null:i.createElement("li",{role:"separator",className:re("".concat(o,"-item-divider"),n),style:r})}var Zl=["className","title","eventKey","children"],Jl=i.forwardRef(function(e,n){var r=e.className,t=e.title;e.eventKey;var o=e.children,a=Ce(e,Zl),s=i.useContext(Je),l=s.prefixCls,f="".concat(l,"-item-group");return i.createElement("li",ae({ref:n,role:"presentation"},a,{onClick:function(d){return d.stopPropagation()},className:re(f,r)}),i.createElement("div",{role:"presentation",className:"".concat(f,"-title"),title:typeof t=="string"?t:void 0},t),i.createElement("ul",{role:"group",className:"".concat(f,"-list")},o))}),Pa=i.forwardRef(function(e,n){var r=e.eventKey,t=e.children,o=Bn(r),a=Zr(t,o),s=lt();return s?a:i.createElement(Jl,ae({ref:n},Br(e,["warnKey"])),a)}),Ql=["label","children","key","type","extra"];function Dr(e,n,r){var t=n.item,o=n.group,a=n.submenu,s=n.divider;return(e||[]).map(function(l,f){if(l&&st(l)==="object"){var c=l,d=c.label,u=c.children,m=c.key,w=c.type,x=c.extra,I=Ce(c,Ql),S=m??"tmp-".concat(f);return u||w==="group"?w==="group"?i.createElement(o,ae({key:S},I,{title:d}),Dr(u,n,r)):i.createElement(a,ae({key:S},I,{title:d}),Dr(u,n,r)):w==="divider"?i.createElement(s,ae({key:S},I)):i.createElement(t,ae({key:S},I,{extra:x}),d,(!!x||x===0)&&i.createElement("span",{className:"".concat(r,"-item-extra")},x))}return null}).filter(function(l){return l})}function xo(e,n,r,t,o){var a=e,s=Q({divider:Ea,item:ct,group:Pa,submenu:Jr},t);return n&&(a=Dr(n,s,o)),Zr(a,r)}var ec=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],dn=[],nc=i.forwardRef(function(e,n){var r,t=e,o=t.prefixCls,a=o===void 0?"rc-menu":o,s=t.rootClassName,l=t.style,f=t.className,c=t.tabIndex,d=c===void 0?0:c,u=t.items,m=t.children,w=t.direction,x=t.id,I=t.mode,S=I===void 0?"vertical":I,$=t.inlineCollapsed,v=t.disabled,R=t.disabledOverflow,P=t.subMenuOpenDelay,p=P===void 0?.1:P,g=t.subMenuCloseDelay,y=g===void 0?.1:g,b=t.forceSubMenuRender,C=t.defaultOpenKeys,O=t.openKeys,h=t.activeKey,_=t.defaultActiveFirst,E=t.selectable,T=E===void 0?!0:E,q=t.multiple,V=q===void 0?!1:q,K=t.defaultSelectedKeys,L=t.selectedKeys,ee=t.onSelect,M=t.onDeselect,se=t.inlineIndent,ce=se===void 0?24:se,N=t.motion,k=t.defaultMotions,G=t.triggerSubMenuAction,X=G===void 0?"hover":G,Z=t.builtinPlacements,H=t.itemIcon,U=t.expandIcon,ue=t.overflowedIndicator,me=ue===void 0?"...":ue,Re=t.overflowedIndicatorPopupClassName,Te=t.getPopupContainer,B=t.onClick,z=t.onOpenChange,ve=t.onKeyDown;t.openAnimation,t.openTransitionName;var D=t._internalRenderMenuItem,oe=t._internalRenderSubMenuItem,Ie=t._internalComponents,Me=Ce(t,ec),ze=i.useMemo(function(){return[xo(m,u,dn,Ie,a),xo(m,u,dn,{},a)]},[m,u,Ie]),he=j(ze,2),ne=he[0],Ee=he[1],qe=i.useState(!1),ge=j(qe,2),Ve=ge[0],Se=ge[1],de=i.useRef(),Le=Nl(x),Ne=w==="rtl",He=wn(C,{value:O,postState:function(fe){return fe||dn}}),ye=j(He,2),pe=ye[0],Ae=ye[1],Pe=function(fe){var _e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function Fe(){Ae(fe),z?.(fe)}_e?Ui.flushSync(Fe):Fe()},sn=i.useState(pe),on=j(sn,2),ln=on[0],mn=on[1],Ge=i.useRef(!1),vn=i.useMemo(function(){return(S==="inline"||S==="vertical")&&$?["vertical",$]:[S,!1]},[S,$]),cn=j(vn,2),Xe=cn[0],Ue=cn[1],Ye=Xe==="inline",F=i.useState(Xe),ie=j(F,2),le=ie[0],Ke=ie[1],ke=i.useState(Ue),Qe=j(ke,2),Wn=Qe[0],gt=Qe[1];i.useEffect(function(){Ke(Xe),gt(Ue),Ge.current&&(Ye?Ae(ln):Pe(dn))},[Xe,Ue]);var dt=i.useState(0),fn=j(dt,2),un=fn[0],Vn=fn[1],an=un>=ne.length-1||le!=="horizontal"||R;i.useEffect(function(){Ye&&mn(pe)},[pe]),i.useEffect(function(){return Ge.current=!0,function(){Ge.current=!1}},[]);var en=Tl(),Hn=en.registerPath,Sn=en.unregisterPath,Un=en.refreshOverflowKeys,Gn=en.isSubPathKey,pt=en.getKeyPath,Cn=en.getKeys,gn=en.getSubPathKeys,$n=i.useMemo(function(){return{registerPath:Hn,unregisterPath:Sn}},[Hn,Sn]),Rn=i.useMemo(function(){return{isSubPathKey:Gn}},[Gn]);i.useEffect(function(){Un(an?dn:ne.slice(un+1).map(function(we){return we.key}))},[un,an]);var Xn=wn(h||_&&((r=ne[0])===null||r===void 0?void 0:r.key),{value:h}),In=j(Xn,2),J=In[0],A=In[1],te=Nn(function(we){A(we)}),be=Nn(function(){A(void 0)});i.useImperativeHandle(n,function(){return{list:de.current,focus:function(fe){var _e,Fe=Cn(),We=zr(Fe,Le),Jn=We.elements,xt=We.key2element,Ga=We.element2key,lo=Gr(de.current,Jn),co=J??(lo[0]?Ga.get(lo[0]):(_e=ne.find(function(Xa){return!Xa.props.disabled}))===null||_e===void 0?void 0:_e.key),En=xt.get(co);if(co&&En){var _t;En==null||(_t=En.focus)===null||_t===void 0||_t.call(En,fe)}}}});var xe=wn(K||[],{value:L,postState:function(fe){return Array.isArray(fe)?fe:fe==null?dn:[fe]}}),je=j(xe,2),Ze=je[0],Yn=je[1],mt=function(fe){if(T){var _e=fe.key,Fe=Ze.includes(_e),We;V?Fe?We=Ze.filter(function(xt){return xt!==_e}):We=[].concat(rn(Ze),[_e]):We=[_e],Yn(We);var Jn=Q(Q({},fe),{},{selectedKeys:We});Fe?M?.(Jn):ee?.(Jn)}!V&&pe.length&&le!=="inline"&&Pe(dn)},bn=Nn(function(we){B?.(ot(we)),mt(we)}),Zn=Nn(function(we,fe){var _e=pe.filter(function(We){return We!==we});if(fe)_e.push(we);else if(le!=="inline"){var Fe=gn(we);_e=_e.filter(function(We){return!Fe.has(We)})}Qi(pe,_e,!0)||Pe(_e,!0)}),vt=function(fe,_e){var Fe=_e??!pe.includes(fe);Zn(fe,Fe)},bt=El(le,J,Ne,Le,de,Cn,pt,A,vt,ve);i.useEffect(function(){Se(!0)},[]);var ht=i.useMemo(function(){return{_internalRenderMenuItem:D,_internalRenderSubMenuItem:oe}},[D,oe]),Ha=le!=="horizontal"||R?ne:ne.map(function(we,fe){return i.createElement(Dn,{key:we.key,overflowDisabled:fe>un},we)}),Ua=i.createElement(tn,ae({id:x,ref:de,prefixCls:"".concat(a,"-overflow"),component:"ul",itemComponent:ct,className:re(a,"".concat(a,"-root"),"".concat(a,"-").concat(le),f,Y(Y({},"".concat(a,"-inline-collapsed"),Wn),"".concat(a,"-rtl"),Ne),s),dir:w,style:l,role:"menu",tabIndex:d,data:Ha,renderRawItem:function(fe){return fe},renderRawRest:function(fe){var _e=fe.length,Fe=_e?ne.slice(-_e):null;return i.createElement(Jr,{eventKey:Lr,title:me,disabled:an,internalPopupClose:_e===0,popupClassName:Re},Fe)},maxCount:le!=="horizontal"||R?tn.INVALIDATE:tn.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(fe){Vn(fe)},onKeyDown:bt},Me));return i.createElement(Ur.Provider,{value:ht},i.createElement(ba.Provider,{value:Le},i.createElement(Dn,{prefixCls:a,rootClassName:s,mode:le,openKeys:pe,rtl:Ne,disabled:v,motion:Ve?N:null,defaultMotions:Ve?k:null,activeKey:J,onActive:te,onInactive:be,selectedKeys:Ze,inlineIndent:ce,subMenuOpenDelay:p,subMenuCloseDelay:y,forceSubMenuRender:b,builtinPlacements:Z,triggerSubMenuAction:X,getPopupContainer:Te,itemIcon:H,expandIcon:U,onItemClick:bn,onOpenChange:Zn},i.createElement(wa.Provider,{value:Rn},Ua),i.createElement("div",{style:{display:"none"},"aria-hidden":!0},i.createElement(_a.Provider,{value:$n},Ee)))))}),Fn=nc;Fn.Item=ct;Fn.SubMenu=Jr;Fn.ItemGroup=Pa;Fn.Divider=Ea;var tc={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},rc=function(n,r){return i.createElement(ra,ae({},n,{ref:r,icon:tc}))},oc=i.forwardRef(rc),ic={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},ac=function(n,r){return i.createElement(ra,ae({},n,{ref:r,icon:ic}))},sc=i.forwardRef(ac);const ft=i.createContext(null);var lc=function(n){var r=n.activeTabOffset,t=n.horizontal,o=n.rtl,a=n.indicator,s=a===void 0?{}:a,l=s.size,f=s.align,c=f===void 0?"center":f,d=i.useState(),u=j(d,2),m=u[0],w=u[1],x=i.useRef(),I=$e.useCallback(function($){return typeof l=="function"?l($):typeof l=="number"?l:$},[l]);function S(){nn.cancel(x.current)}return i.useEffect(function(){var $={};if(r)if(t){$.width=I(r.width);var v=o?"right":"left";c==="start"&&($[v]=r[v]),c==="center"&&($[v]=r[v]+r.width/2,$.transform=o?"translateX(50%)":"translateX(-50%)"),c==="end"&&($[v]=r[v]+r.width,$.transform="translateX(-100%)")}else $.height=I(r.height),c==="start"&&($.top=r.top),c==="center"&&($.top=r.top+r.height/2,$.transform="translateY(-50%)"),c==="end"&&($.top=r.top+r.height,$.transform="translateY(-100%)");return S(),x.current=nn(function(){var R=m&&$&&Object.keys($).every(function(P){var p=$[P],g=m[P];return typeof p=="number"&&typeof g=="number"?Math.round(p)===Math.round(g):p===g});R||w($)}),S},[JSON.stringify(r),t,o,c,I]),{style:m}},_o={width:0,height:0,left:0,top:0};function cc(e,n,r){return i.useMemo(function(){for(var t,o=new Map,a=n.get((t=e[0])===null||t===void 0?void 0:t.key)||_o,s=a.left+a.width,l=0;l<e.length;l+=1){var f=e[l].key,c=n.get(f);if(!c){var d;c=n.get((d=e[l-1])===null||d===void 0?void 0:d.key)||_o}var u=o.get(f)||Q({},c);u.right=s-u.left-u.width,o.set(f,u)}return o},[e.map(function(t){return t.key}).join("_"),n,r])}function yo(e,n){var r=i.useRef(e),t=i.useState({}),o=j(t,2),a=o[1];function s(l){var f=typeof l=="function"?l(r.current):l;f!==r.current&&n(f,r.current),r.current=f,a({})}return[r.current,s]}var fc=.1,wo=.01,tt=20,So=Math.pow(.995,tt);function uc(e,n){var r=i.useState(),t=j(r,2),o=t[0],a=t[1],s=i.useState(0),l=j(s,2),f=l[0],c=l[1],d=i.useState(0),u=j(d,2),m=u[0],w=u[1],x=i.useState(),I=j(x,2),S=I[0],$=I[1],v=i.useRef();function R(C){var O=C.touches[0],h=O.screenX,_=O.screenY;a({x:h,y:_}),window.clearInterval(v.current)}function P(C){if(o){var O=C.touches[0],h=O.screenX,_=O.screenY;a({x:h,y:_});var E=h-o.x,T=_-o.y;n(E,T);var q=Date.now();c(q),w(q-f),$({x:E,y:T})}}function p(){if(o&&(a(null),$(null),S)){var C=S.x/m,O=S.y/m,h=Math.abs(C),_=Math.abs(O);if(Math.max(h,_)<fc)return;var E=C,T=O;v.current=window.setInterval(function(){if(Math.abs(E)<wo&&Math.abs(T)<wo){window.clearInterval(v.current);return}E*=So,T*=So,n(E*tt,T*tt)},tt)}}var g=i.useRef();function y(C){var O=C.deltaX,h=C.deltaY,_=0,E=Math.abs(O),T=Math.abs(h);E===T?_=g.current==="x"?O:h:E>T?(_=O,g.current="x"):(_=h,g.current="y"),n(-_,-_)&&C.preventDefault()}var b=i.useRef(null);b.current={onTouchStart:R,onTouchMove:P,onTouchEnd:p,onWheel:y},i.useEffect(function(){function C(E){b.current.onTouchStart(E)}function O(E){b.current.onTouchMove(E)}function h(E){b.current.onTouchEnd(E)}function _(E){b.current.onWheel(E)}return document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",h,{passive:!0}),e.current.addEventListener("touchstart",C,{passive:!0}),e.current.addEventListener("wheel",_,{passive:!1}),function(){document.removeEventListener("touchmove",O),document.removeEventListener("touchend",h)}},[])}function Oa(e){var n=i.useState(0),r=j(n,2),t=r[0],o=r[1],a=i.useRef(0),s=i.useRef();return s.current=e,os(function(){var l;(l=s.current)===null||l===void 0||l.call(s)},[t]),function(){a.current===t&&(a.current+=1,o(a.current))}}function gc(e){var n=i.useRef([]),r=i.useState({}),t=j(r,2),o=t[1],a=i.useRef(typeof e=="function"?e():e),s=Oa(function(){var f=a.current;n.current.forEach(function(c){f=c(f)}),n.current=[],a.current=f,o({})});function l(f){n.current.push(f),s()}return[a.current,l]}var Co={width:0,height:0,left:0,top:0,right:0};function dc(e,n,r,t,o,a,s){var l=s.tabs,f=s.tabPosition,c=s.rtl,d,u,m;return["top","bottom"].includes(f)?(d="width",u=c?"right":"left",m=Math.abs(r)):(d="height",u="top",m=-r),i.useMemo(function(){if(!l.length)return[0,0];for(var w=l.length,x=w,I=0;I<w;I+=1){var S=e.get(l[I].key)||Co;if(Math.floor(S[u]+S[d])>Math.floor(m+n)){x=I-1;break}}for(var $=0,v=w-1;v>=0;v-=1){var R=e.get(l[v].key)||Co;if(R[u]<m){$=v+1;break}}return $>x?[0,-1]:[$,x]},[e,n,t,o,a,m,f,l.map(function(w){return w.key}).join("_"),c])}function $o(e){var n;return e instanceof Map?(n={},e.forEach(function(r,t){n[t]=r})):n=e,JSON.stringify(n)}var pc="TABS_DQ";function Ta(e){return String(e).replace(/"/g,pc)}function Qr(e,n,r,t){return!(!r||t||e===!1||e===void 0&&(n===!1||n===null))}var Ma=i.forwardRef(function(e,n){var r=e.prefixCls,t=e.editable,o=e.locale,a=e.style;return!t||t.showAdd===!1?null:i.createElement("button",{ref:n,type:"button",className:"".concat(r,"-nav-add"),style:a,"aria-label":o?.addAriaLabel||"Add tab",onClick:function(l){t.onEdit("add",{event:l})}},t.addIcon||"+")}),Ro=i.forwardRef(function(e,n){var r=e.position,t=e.prefixCls,o=e.extra;if(!o)return null;var a,s={};return st(o)==="object"&&!i.isValidElement(o)?s=o:s.right=o,r==="right"&&(a=s.right),r==="left"&&(a=s.left),a?i.createElement("div",{className:"".concat(t,"-extra-content"),ref:n},a):null}),mc=i.forwardRef(function(e,n){var r=e.prefixCls,t=e.id,o=e.tabs,a=e.locale,s=e.mobile,l=e.more,f=l===void 0?{}:l,c=e.style,d=e.className,u=e.editable,m=e.tabBarGutter,w=e.rtl,x=e.removeAriaLabel,I=e.onTabClick,S=e.getPopupContainer,$=e.popupClassName,v=i.useState(!1),R=j(v,2),P=R[0],p=R[1],g=i.useState(null),y=j(g,2),b=y[0],C=y[1],O=f.icon,h=O===void 0?"More":O,_="".concat(t,"-more-popup"),E="".concat(r,"-dropdown"),T=b!==null?"".concat(_,"-").concat(b):null,q=a?.dropdownAriaLabel;function V(N,k){N.preventDefault(),N.stopPropagation(),u.onEdit("remove",{key:k,event:N})}var K=i.createElement(Fn,{onClick:function(k){var G=k.key,X=k.domEvent;I(G,X),p(!1)},prefixCls:"".concat(E,"-menu"),id:_,tabIndex:-1,role:"listbox","aria-activedescendant":T,selectedKeys:[b],"aria-label":q!==void 0?q:"expanded dropdown"},o.map(function(N){var k=N.closable,G=N.disabled,X=N.closeIcon,Z=N.key,H=N.label,U=Qr(k,X,u,G);return i.createElement(ct,{key:Z,id:"".concat(_,"-").concat(Z),role:"option","aria-controls":t&&"".concat(t,"-panel-").concat(Z),disabled:G},i.createElement("span",null,H),U&&i.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(E,"-menu-item-remove"),onClick:function(me){me.stopPropagation(),V(me,Z)}},X||u.removeIcon||"×"))}));function L(N){for(var k=o.filter(function(U){return!U.disabled}),G=k.findIndex(function(U){return U.key===b})||0,X=k.length,Z=0;Z<X;Z+=1){G=(G+N+X)%X;var H=k[G];if(!H.disabled){C(H.key);return}}}function ee(N){var k=N.which;if(!P){[Oe.DOWN,Oe.SPACE,Oe.ENTER].includes(k)&&(p(!0),N.preventDefault());return}switch(k){case Oe.UP:L(-1),N.preventDefault();break;case Oe.DOWN:L(1),N.preventDefault();break;case Oe.ESC:p(!1);break;case Oe.SPACE:case Oe.ENTER:b!==null&&I(b,N);break}}i.useEffect(function(){var N=document.getElementById(T);N&&N.scrollIntoView&&N.scrollIntoView(!1)},[b]),i.useEffect(function(){P||C(null)},[P]);var M=Y({},w?"marginRight":"marginLeft",m);o.length||(M.visibility="hidden",M.order=1);var se=re(Y({},"".concat(E,"-rtl"),w)),ce=s?null:i.createElement(_l,ae({prefixCls:E,overlay:K,visible:o.length?P:!1,onVisibleChange:p,overlayClassName:re(se,$),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:S},f),i.createElement("button",{type:"button",className:"".concat(r,"-nav-more"),style:M,"aria-haspopup":"listbox","aria-controls":_,id:"".concat(t,"-more"),"aria-expanded":P,onKeyDown:ee},h));return i.createElement("div",{className:re("".concat(r,"-nav-operations"),d),style:c,ref:n},ce,i.createElement(Ma,{prefixCls:r,locale:a,editable:u}))});const vc=i.memo(mc,function(e,n){return n.tabMoving});var bc=function(n){var r=n.prefixCls,t=n.id,o=n.active,a=n.focus,s=n.tab,l=s.key,f=s.label,c=s.disabled,d=s.closeIcon,u=s.icon,m=n.closable,w=n.renderWrapper,x=n.removeAriaLabel,I=n.editable,S=n.onClick,$=n.onFocus,v=n.onBlur,R=n.onKeyDown,P=n.onMouseDown,p=n.onMouseUp,g=n.style,y=n.tabCount,b=n.currentPosition,C="".concat(r,"-tab"),O=Qr(m,d,I,c);function h(V){c||S(V)}function _(V){V.preventDefault(),V.stopPropagation(),I.onEdit("remove",{key:l,event:V})}var E=i.useMemo(function(){return u&&typeof f=="string"?i.createElement("span",null,f):f},[f,u]),T=i.useRef(null);i.useEffect(function(){a&&T.current&&T.current.focus()},[a]);var q=i.createElement("div",{key:l,"data-node-key":Ta(l),className:re(C,Y(Y(Y(Y({},"".concat(C,"-with-remove"),O),"".concat(C,"-active"),o),"".concat(C,"-disabled"),c),"".concat(C,"-focus"),a)),style:g,onClick:h},i.createElement("div",{ref:T,role:"tab","aria-selected":o,id:t&&"".concat(t,"-tab-").concat(l),className:"".concat(C,"-btn"),"aria-controls":t&&"".concat(t,"-panel-").concat(l),"aria-disabled":c,tabIndex:c?null:o?0:-1,onClick:function(K){K.stopPropagation(),h(K)},onKeyDown:R,onMouseDown:P,onMouseUp:p,onFocus:$,onBlur:v},a&&i.createElement("div",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"Tab ".concat(b," of ").concat(y)),u&&i.createElement("span",{className:"".concat(C,"-icon")},u),f&&E),O&&i.createElement("button",{type:"button",role:"tab","aria-label":x||"remove",tabIndex:o?0:-1,className:"".concat(C,"-remove"),onClick:function(K){K.stopPropagation(),_(K)}},d||I.removeIcon||"×"));return w?w(q):q},hc=function(n,r){var t=n.offsetWidth,o=n.offsetHeight,a=n.offsetTop,s=n.offsetLeft,l=n.getBoundingClientRect(),f=l.width,c=l.height,d=l.left,u=l.top;return Math.abs(f-t)<1?[f,c,d-r.left,u-r.top]:[t,o,s,a]},yn=function(n){var r=n.current||{},t=r.offsetWidth,o=t===void 0?0:t,a=r.offsetHeight,s=a===void 0?0:a;if(n.current){var l=n.current.getBoundingClientRect(),f=l.width,c=l.height;if(Math.abs(f-o)<1)return[f,c]}return[o,s]},Qn=function(n,r){return n[r?0:1]},Io=i.forwardRef(function(e,n){var r=e.className,t=e.style,o=e.id,a=e.animated,s=e.activeKey,l=e.rtl,f=e.extra,c=e.editable,d=e.locale,u=e.tabPosition,m=e.tabBarGutter,w=e.children,x=e.onTabClick,I=e.onTabScroll,S=e.indicator,$=i.useContext(ft),v=$.prefixCls,R=$.tabs,P=i.useRef(null),p=i.useRef(null),g=i.useRef(null),y=i.useRef(null),b=i.useRef(null),C=i.useRef(null),O=i.useRef(null),h=u==="top"||u==="bottom",_=yo(0,function(J,A){h&&I&&I({direction:J>A?"left":"right"})}),E=j(_,2),T=E[0],q=E[1],V=yo(0,function(J,A){!h&&I&&I({direction:J>A?"top":"bottom"})}),K=j(V,2),L=K[0],ee=K[1],M=i.useState([0,0]),se=j(M,2),ce=se[0],N=se[1],k=i.useState([0,0]),G=j(k,2),X=G[0],Z=G[1],H=i.useState([0,0]),U=j(H,2),ue=U[0],me=U[1],Re=i.useState([0,0]),Te=j(Re,2),B=Te[0],z=Te[1],ve=gc(new Map),D=j(ve,2),oe=D[0],Ie=D[1],Me=cc(R,oe,X[0]),ze=Qn(ce,h),he=Qn(X,h),ne=Qn(ue,h),Ee=Qn(B,h),qe=Math.floor(ze)<Math.floor(he+ne),ge=qe?ze-Ee:ze-ne,Ve="".concat(v,"-nav-operations-hidden"),Se=0,de=0;h&&l?(Se=0,de=Math.max(0,he-ge)):(Se=Math.min(0,ge-he),de=0);function Le(J){return J<Se?Se:J>de?de:J}var Ne=i.useRef(null),He=i.useState(),ye=j(He,2),pe=ye[0],Ae=ye[1];function Pe(){Ae(Date.now())}function sn(){Ne.current&&clearTimeout(Ne.current)}uc(y,function(J,A){function te(be,xe){be(function(je){var Ze=Le(je+xe);return Ze})}return qe?(h?te(q,J):te(ee,A),sn(),Pe(),!0):!1}),i.useEffect(function(){return sn(),pe&&(Ne.current=setTimeout(function(){Ae(0)},100)),sn},[pe]);var on=dc(Me,ge,h?T:L,he,ne,Ee,Q(Q({},e),{},{tabs:R})),ln=j(on,2),mn=ln[0],Ge=ln[1],vn=Hi(function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s,A=Me.get(J)||{width:0,height:0,left:0,right:0,top:0};if(h){var te=T;l?A.right<T?te=A.right:A.right+A.width>T+ge&&(te=A.right+A.width-ge):A.left<-T?te=-A.left:A.left+A.width>-T+ge&&(te=-(A.left+A.width-ge)),ee(0),q(Le(te))}else{var be=L;A.top<-L?be=-A.top:A.top+A.height>-L+ge&&(be=-(A.top+A.height-ge)),q(0),ee(Le(be))}}),cn=i.useState(),Xe=j(cn,2),Ue=Xe[0],Ye=Xe[1],F=i.useState(!1),ie=j(F,2),le=ie[0],Ke=ie[1],ke=R.filter(function(J){return!J.disabled}).map(function(J){return J.key}),Qe=function(A){var te=ke.indexOf(Ue||s),be=ke.length,xe=(te+A+be)%be,je=ke[xe];Ye(je)},Wn=function(A,te){var be=ke.indexOf(A),xe=R.find(function(Ze){return Ze.key===A}),je=Qr(xe?.closable,xe?.closeIcon,c,xe?.disabled);je&&(te.preventDefault(),te.stopPropagation(),c.onEdit("remove",{key:A,event:te}),be===ke.length-1?Qe(-1):Qe(1))},gt=function(A,te){Ke(!0),te.button===1&&Wn(A,te)},dt=function(A){var te=A.code,be=l&&h,xe=ke[0],je=ke[ke.length-1];switch(te){case"ArrowLeft":{h&&Qe(be?1:-1);break}case"ArrowRight":{h&&Qe(be?-1:1);break}case"ArrowUp":{A.preventDefault(),h||Qe(-1);break}case"ArrowDown":{A.preventDefault(),h||Qe(1);break}case"Home":{A.preventDefault(),Ye(xe);break}case"End":{A.preventDefault(),Ye(je);break}case"Enter":case"Space":{A.preventDefault(),x(Ue??s,A);break}case"Backspace":case"Delete":{Wn(Ue,A);break}}},fn={};h?fn[l?"marginRight":"marginLeft"]=m:fn.marginTop=m;var un=R.map(function(J,A){var te=J.key;return i.createElement(bc,{id:o,prefixCls:v,key:te,tab:J,style:A===0?void 0:fn,closable:J.closable,editable:c,active:te===s,focus:te===Ue,renderWrapper:w,removeAriaLabel:d?.removeAriaLabel,tabCount:ke.length,currentPosition:A+1,onClick:function(xe){x(te,xe)},onKeyDown:dt,onFocus:function(){le||Ye(te),vn(te),Pe(),y.current&&(l||(y.current.scrollLeft=0),y.current.scrollTop=0)},onBlur:function(){Ye(void 0)},onMouseDown:function(xe){return gt(te,xe)},onMouseUp:function(){Ke(!1)}})}),Vn=function(){return Ie(function(){var A,te=new Map,be=(A=b.current)===null||A===void 0?void 0:A.getBoundingClientRect();return R.forEach(function(xe){var je,Ze=xe.key,Yn=(je=b.current)===null||je===void 0?void 0:je.querySelector('[data-node-key="'.concat(Ta(Ze),'"]'));if(Yn){var mt=hc(Yn,be),bn=j(mt,4),Zn=bn[0],vt=bn[1],bt=bn[2],ht=bn[3];te.set(Ze,{width:Zn,height:vt,left:bt,top:ht})}}),te})};i.useEffect(function(){Vn()},[R.map(function(J){return J.key}).join("_")]);var an=Oa(function(){var J=yn(P),A=yn(p),te=yn(g);N([J[0]-A[0]-te[0],J[1]-A[1]-te[1]]);var be=yn(O);me(be);var xe=yn(C);z(xe);var je=yn(b);Z([je[0]-be[0],je[1]-be[1]]),Vn()}),en=R.slice(0,mn),Hn=R.slice(Ge+1),Sn=[].concat(rn(en),rn(Hn)),Un=Me.get(s),Gn=lc({activeTabOffset:Un,horizontal:h,indicator:S,rtl:l}),pt=Gn.style;i.useEffect(function(){vn()},[s,Se,de,$o(Un),$o(Me),h]),i.useEffect(function(){an()},[l]);var Cn=!!Sn.length,gn="".concat(v,"-nav-wrap"),$n,Rn,Xn,In;return h?l?(Rn=T>0,$n=T!==de):($n=T<0,Rn=T!==Se):(Xn=L<0,In=L!==Se),i.createElement(zn,{onResize:an},i.createElement("div",{ref:na(n,P),role:"tablist","aria-orientation":h?"horizontal":"vertical",className:re("".concat(v,"-nav"),r),style:t,onKeyDown:function(){Pe()}},i.createElement(Ro,{ref:p,position:"left",extra:f,prefixCls:v}),i.createElement(zn,{onResize:an},i.createElement("div",{className:re(gn,Y(Y(Y(Y({},"".concat(gn,"-ping-left"),$n),"".concat(gn,"-ping-right"),Rn),"".concat(gn,"-ping-top"),Xn),"".concat(gn,"-ping-bottom"),In)),ref:y},i.createElement(zn,{onResize:an},i.createElement("div",{ref:b,className:"".concat(v,"-nav-list"),style:{transform:"translate(".concat(T,"px, ").concat(L,"px)"),transition:pe?"none":void 0}},un,i.createElement(Ma,{ref:O,prefixCls:v,locale:d,editable:c,style:Q(Q({},un.length===0?void 0:fn),{},{visibility:Cn?"hidden":null})}),i.createElement("div",{className:re("".concat(v,"-ink-bar"),Y({},"".concat(v,"-ink-bar-animated"),a.inkBar)),style:pt}))))),i.createElement(vc,ae({},e,{removeAriaLabel:d?.removeAriaLabel,ref:C,prefixCls:v,tabs:Sn,className:!Cn&&Ve,tabMoving:!!pe})),i.createElement(Ro,{ref:g,position:"right",extra:f,prefixCls:v})))}),Na=i.forwardRef(function(e,n){var r=e.prefixCls,t=e.className,o=e.style,a=e.id,s=e.active,l=e.tabKey,f=e.children;return i.createElement("div",{id:a&&"".concat(a,"-panel-").concat(l),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":a&&"".concat(a,"-tab-").concat(l),"aria-hidden":!s,style:o,className:re(r,s&&"".concat(r,"-active"),t),ref:n},f)}),xc=["renderTabBar"],_c=["label","key"],yc=function(n){var r=n.renderTabBar,t=Ce(n,xc),o=i.useContext(ft),a=o.tabs;if(r){var s=Q(Q({},t),{},{panes:a.map(function(l){var f=l.label,c=l.key,d=Ce(l,_c);return i.createElement(Na,ae({tab:f,key:c,tabKey:c},d))})});return r(s,Io)}return i.createElement(Io,t)},wc=["key","forceRender","style","className","destroyInactiveTabPane"],Sc=function(n){var r=n.id,t=n.activeKey,o=n.animated,a=n.tabPosition,s=n.destroyInactiveTabPane,l=i.useContext(ft),f=l.prefixCls,c=l.tabs,d=o.tabPane,u="".concat(f,"-tabpane");return i.createElement("div",{className:re("".concat(f,"-content-holder"))},i.createElement("div",{className:re("".concat(f,"-content"),"".concat(f,"-content-").concat(a),Y({},"".concat(f,"-content-animated"),d))},c.map(function(m){var w=m.key,x=m.forceRender,I=m.style,S=m.className,$=m.destroyInactiveTabPane,v=Ce(m,wc),R=w===t;return i.createElement(Kr,ae({key:w,visible:R,forceRender:x,removeOnLeave:!!(s||$),leavedClassName:"".concat(u,"-hidden")},o.tabPaneMotion),function(P,p){var g=P.style,y=P.className;return i.createElement(Na,ae({},v,{prefixCls:u,id:r,tabKey:w,animated:d,active:R,style:Q(Q({},I),g),className:re(S,y),ref:p}))})})))};function Cc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},n;return e===!1?n={inkBar:!1,tabPane:!1}:e===!0?n={inkBar:!0,tabPane:!1}:n=Q({inkBar:!0},st(e)==="object"?e:{}),n.tabPaneMotion&&n.tabPane===void 0&&(n.tabPane=!0),!n.tabPaneMotion&&n.tabPane&&(n.tabPane=!1),n}var $c=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],Eo=0,Rc=i.forwardRef(function(e,n){var r=e.id,t=e.prefixCls,o=t===void 0?"rc-tabs":t,a=e.className,s=e.items,l=e.direction,f=e.activeKey,c=e.defaultActiveKey,d=e.editable,u=e.animated,m=e.tabPosition,w=m===void 0?"top":m,x=e.tabBarGutter,I=e.tabBarStyle,S=e.tabBarExtraContent,$=e.locale,v=e.more,R=e.destroyInactiveTabPane,P=e.renderTabBar,p=e.onChange,g=e.onTabClick,y=e.onTabScroll,b=e.getPopupContainer,C=e.popupClassName,O=e.indicator,h=Ce(e,$c),_=i.useMemo(function(){return(s||[]).filter(function(B){return B&&st(B)==="object"&&"key"in B})},[s]),E=l==="rtl",T=Cc(u),q=i.useState(!1),V=j(q,2),K=V[0],L=V[1];i.useEffect(function(){L($s())},[]);var ee=wn(function(){var B;return(B=_[0])===null||B===void 0?void 0:B.key},{value:f,defaultValue:c}),M=j(ee,2),se=M[0],ce=M[1],N=i.useState(function(){return _.findIndex(function(B){return B.key===se})}),k=j(N,2),G=k[0],X=k[1];i.useEffect(function(){var B=_.findIndex(function(ve){return ve.key===se});if(B===-1){var z;B=Math.max(0,Math.min(G,_.length-1)),ce((z=_[B])===null||z===void 0?void 0:z.key)}X(B)},[_.map(function(B){return B.key}).join("_"),se,G]);var Z=wn(null,{value:r}),H=j(Z,2),U=H[0],ue=H[1];i.useEffect(function(){r||(ue("rc-tabs-".concat(Eo)),Eo+=1)},[]);function me(B,z){g?.(B,z);var ve=B!==se;ce(B),ve&&p?.(B)}var Re={id:U,activeKey:se,animated:T,tabPosition:w,rtl:E,mobile:K},Te=Q(Q({},Re),{},{editable:d,locale:$,more:v,tabBarGutter:x,onTabClick:me,onTabScroll:y,extra:S,style:I,panes:null,getPopupContainer:b,popupClassName:C,indicator:O});return i.createElement(ft.Provider,{value:{tabs:_,prefixCls:o}},i.createElement("div",ae({ref:n,id:r,className:re(o,"".concat(o,"-").concat(w),Y(Y(Y({},"".concat(o,"-mobile"),K),"".concat(o,"-editable"),d),"".concat(o,"-rtl"),E),a)},h),i.createElement(yc,ae({},Te,{renderTabBar:P})),i.createElement(Sc,ae({destroyInactiveTabPane:R},Re,{animated:T}))))});const Ic={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Ec(e,n={inkBar:!0,tabPane:!1}){let r;return n===!1?r={inkBar:!1,tabPane:!1}:n===!0?r={inkBar:!0,tabPane:!0}:r=Object.assign({inkBar:!0},typeof n=="object"?n:{}),r.tabPane&&(r.tabPaneMotion=Object.assign(Object.assign({},Ic),{motionName:is(e,"switch")})),r}var Pc=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};function Oc(e){return e.filter(n=>n)}function Tc(e,n){if(e)return e.map(t=>{var o;const a=(o=t.destroyOnHidden)!==null&&o!==void 0?o:t.destroyInactiveTabPane;return Object.assign(Object.assign({},t),{destroyInactiveTabPane:a})});const r=ta(n).map(t=>{if(i.isValidElement(t)){const{key:o,props:a}=t,s=a||{},{tab:l}=s,f=Pc(s,["tab"]);return Object.assign(Object.assign({key:String(o)},f),{label:l})}return null});return Oc(r)}const Mc=e=>{const{componentCls:n,motionDurationSlow:r}=e;return[{[n]:{[`${n}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${r}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${r}`}}}}},[uo(e,"slide-up"),uo(e,"slide-down")]]},Nc=e=>{const{componentCls:n,tabsCardPadding:r,cardBg:t,cardGutter:o,colorBorderSecondary:a,itemSelectedColor:s}=e;return{[`${n}-card`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab`]:{margin:0,padding:r,background:t,border:`${W(e.lineWidth)} ${e.lineType} ${a}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${n}-tab-active`]:{color:s,background:e.colorBgContainer},[`${n}-tab-focus:has(${n}-tab-btn:focus-visible)`]:oa(e,-3),[`& ${n}-tab${n}-tab-focus ${n}-tab-btn:focus-visible`]:{outline:"none"},[`${n}-ink-bar`]:{visibility:"hidden"}},[`&${n}-top, &${n}-bottom`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab + ${n}-tab`]:{marginLeft:{_skip_check_:!0,value:W(o)}}}},[`&${n}-top`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab`]:{borderRadius:`${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0`},[`${n}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${n}-bottom`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab`]:{borderRadius:`0 0 ${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)}`},[`${n}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${n}-left, &${n}-right`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab + ${n}-tab`]:{marginTop:W(o)}}},[`&${n}-left`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab`]:{borderRadius:{_skip_check_:!0,value:`${W(e.borderRadiusLG)} 0 0 ${W(e.borderRadiusLG)}`}},[`${n}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${n}-right`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0`}},[`${n}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ac=e=>{const{componentCls:n,itemHoverColor:r,dropdownEdgeChildVerticalPadding:t}=e;return{[`${n}-dropdown`]:Object.assign(Object.assign({},it(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${n}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${W(t)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},as),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${W(e.paddingXXS)} ${W(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorIcon,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},kc=e=>{const{componentCls:n,margin:r,colorBorderSecondary:t,horizontalMargin:o,verticalItemPadding:a,verticalItemMargin:s,calc:l}=e;return{[`${n}-top, ${n}-bottom`]:{flexDirection:"column",[`> ${n}-nav, > div > ${n}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${W(e.lineWidth)} ${e.lineType} ${t}`,content:"''"},[`${n}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${n}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${n}-nav-wrap-ping-left::before`]:{opacity:1},[`&${n}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${n}-top`]:{[`> ${n}-nav,
        > div > ${n}-nav`]:{"&::before":{bottom:0},[`${n}-ink-bar`]:{bottom:0}}},[`${n}-bottom`]:{[`> ${n}-nav, > div > ${n}-nav`]:{order:1,marginTop:r,marginBottom:0,"&::before":{top:0},[`${n}-ink-bar`]:{top:0}},[`> ${n}-content-holder, > div > ${n}-content-holder`]:{order:0}},[`${n}-left, ${n}-right`]:{[`> ${n}-nav, > div > ${n}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${n}-tab`]:{padding:a,textAlign:"center"},[`${n}-tab + ${n}-tab`]:{margin:s},[`${n}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${n}-nav-wrap-ping-top::before`]:{opacity:1},[`&${n}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${n}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${n}-nav-list, ${n}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${n}-left`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${n}-content-holder, > div > ${n}-content-holder`]:{marginLeft:{_skip_check_:!0,value:W(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${n}-content > ${n}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${n}-right`]:{[`> ${n}-nav, > div > ${n}-nav`]:{order:1,[`${n}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${n}-content-holder, > div > ${n}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${n}-content > ${n}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},jc=e=>{const{componentCls:n,cardPaddingSM:r,cardPaddingLG:t,cardHeightSM:o,cardHeightLG:a,horizontalItemPaddingSM:s,horizontalItemPaddingLG:l}=e;return{[n]:{"&-small":{[`> ${n}-nav`]:{[`${n}-tab`]:{padding:s,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${n}-nav`]:{[`${n}-tab`]:{padding:l,fontSize:e.titleFontSizeLG,lineHeight:e.lineHeightLG}}}},[`${n}-card`]:{[`&${n}-small`]:{[`> ${n}-nav`]:{[`${n}-tab`]:{padding:r},[`${n}-nav-add`]:{minWidth:o,minHeight:o}},[`&${n}-bottom`]:{[`> ${n}-nav ${n}-tab`]:{borderRadius:`0 0 ${W(e.borderRadius)} ${W(e.borderRadius)}`}},[`&${n}-top`]:{[`> ${n}-nav ${n}-tab`]:{borderRadius:`${W(e.borderRadius)} ${W(e.borderRadius)} 0 0`}},[`&${n}-right`]:{[`> ${n}-nav ${n}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${W(e.borderRadius)} ${W(e.borderRadius)} 0`}}},[`&${n}-left`]:{[`> ${n}-nav ${n}-tab`]:{borderRadius:{_skip_check_:!0,value:`${W(e.borderRadius)} 0 0 ${W(e.borderRadius)}`}}}},[`&${n}-large`]:{[`> ${n}-nav`]:{[`${n}-tab`]:{padding:t},[`${n}-nav-add`]:{minWidth:a,minHeight:a}}}}}},zc=e=>{const{componentCls:n,itemActiveColor:r,itemHoverColor:t,iconCls:o,tabsHorizontalItemMargin:a,horizontalItemPadding:s,itemSelectedColor:l,itemColor:f}=e,c=`${n}-tab`;return{[c]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:s,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:f,"&-btn, &-remove":{"&:focus:not(:focus-visible), &:active":{color:r}},"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${c}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":Object.assign({flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorIcon,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},Nr(e)),"&:hover":{color:t},[`&${c}-active ${c}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${c}-focus ${c}-btn:focus-visible`]:oa(e),[`&${c}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${c}-disabled ${c}-btn, &${c}-disabled ${n}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${c}-remove ${o}`]:{margin:0},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${c} + ${c}`]:{margin:{_skip_check_:!0,value:a}}}},Lc=e=>{const{componentCls:n,tabsHorizontalItemMarginRTL:r,iconCls:t,cardGutter:o,calc:a}=e;return{[`${n}-rtl`]:{direction:"rtl",[`${n}-nav`]:{[`${n}-tab`]:{margin:{_skip_check_:!0,value:r},[`${n}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[t]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:W(e.marginSM)}},[`${n}-tab-remove`]:{marginRight:{_skip_check_:!0,value:W(e.marginXS)},marginLeft:{_skip_check_:!0,value:W(a(e.marginXXS).mul(-1).equal())},[t]:{margin:0}}}},[`&${n}-left`]:{[`> ${n}-nav`]:{order:1},[`> ${n}-content-holder`]:{order:0}},[`&${n}-right`]:{[`> ${n}-nav`]:{order:0},[`> ${n}-content-holder`]:{order:1}},[`&${n}-card${n}-top, &${n}-card${n}-bottom`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-tab + ${n}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${n}-dropdown-rtl`]:{direction:"rtl"},[`${n}-menu-item`]:{[`${n}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Dc=e=>{const{componentCls:n,tabsCardPadding:r,cardHeight:t,cardGutter:o,itemHoverColor:a,itemActiveColor:s,colorBorderSecondary:l}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},it(e)),{display:"flex",[`> ${n}-nav, > div > ${n}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${n}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${n}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${n}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${n}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${n}-nav-more`]:{position:"relative",padding:r,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${n}-nav-add`]:Object.assign({minWidth:t,minHeight:t,marginLeft:{_skip_check_:!0,value:o},background:"transparent",border:`${W(e.lineWidth)} ${e.lineType} ${l}`,borderRadius:`${W(e.borderRadiusLG)} ${W(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:a},"&:active, &:focus:not(:focus-visible)":{color:s}},Nr(e,-3))},[`${n}-extra-content`]:{flex:"none"},[`${n}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),zc(e)),{[`${n}-content`]:{position:"relative",width:"100%"},[`${n}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${n}-tabpane`]:Object.assign(Object.assign({},Nr(e)),{"&-hidden":{display:"none"}})}),[`${n}-centered`]:{[`> ${n}-nav, > div > ${n}-nav`]:{[`${n}-nav-wrap`]:{[`&:not([class*='${n}-nav-wrap-ping']) > ${n}-nav-list`]:{margin:"auto"}}}}}},qc=e=>{const{cardHeight:n,cardHeightSM:r,cardHeightLG:t,controlHeight:o,controlHeightLG:a}=e,s=n||a,l=r||o,f=t||a+8;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:s,cardHeightSM:l,cardHeightLG:f,cardPadding:`${(s-e.fontHeight)/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${(l-e.fontHeight)/2-e.lineWidth}px ${e.paddingXS}px`,cardPaddingLG:`${(f-e.fontHeightLG)/2-e.lineWidth}px ${e.padding}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}},Kc=qr("Tabs",e=>{const n=Gi(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${W(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${W(e.horizontalItemGutter)}`});return[jc(n),Lc(n),kc(n),Ac(n),Nc(n),Dc(n),Mc(n)]},qc),Bc=()=>null;var Fc=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const Wc=i.forwardRef((e,n)=>{var r,t,o,a,s,l,f,c,d,u,m;const{type:w,className:x,rootClassName:I,size:S,onEdit:$,hideAdd:v,centered:R,addIcon:P,removeIcon:p,moreIcon:g,more:y,popupClassName:b,children:C,items:O,animated:h,style:_,indicatorSize:E,indicator:T,destroyInactiveTabPane:q,destroyOnHidden:V}=e,K=Fc(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator","destroyInactiveTabPane","destroyOnHidden"]),{prefixCls:L}=K,{direction:ee,tabs:M,getPrefixCls:se,getPopupContainer:ce}=i.useContext(at),N=se("tabs",L),k=ss(N),[G,X,Z]=Kc(N,k),H=i.useRef(null);i.useImperativeHandle(n,()=>({nativeElement:H.current}));let U;w==="editable-card"&&(U={onEdit:(ve,{key:D,event:oe})=>{$?.(ve==="add"?oe:D,ve)},removeIcon:(r=p??M?.removeIcon)!==null&&r!==void 0?r:i.createElement(ls,null),addIcon:(P??M?.addIcon)||i.createElement(sc,null),showAdd:v!==!0});const ue=se(),me=cs(S),Re=Tc(O,C),Te=Ec(N,h),B=Object.assign(Object.assign({},M?.style),_),z={align:(t=T?.align)!==null&&t!==void 0?t:(o=M?.indicator)===null||o===void 0?void 0:o.align,size:(f=(s=(a=T?.size)!==null&&a!==void 0?a:E)!==null&&s!==void 0?s:(l=M?.indicator)===null||l===void 0?void 0:l.size)!==null&&f!==void 0?f:M?.indicatorSize};return G(i.createElement(Rc,Object.assign({ref:H,direction:ee,getPopupContainer:ce},K,{items:Re,className:re({[`${N}-${me}`]:me,[`${N}-card`]:["card","editable-card"].includes(w),[`${N}-editable-card`]:w==="editable-card",[`${N}-centered`]:R},M?.className,x,I,X,Z,k),popupClassName:re(b,X,Z,k),style:B,editable:U,more:Object.assign({icon:(m=(u=(d=(c=M?.more)===null||c===void 0?void 0:c.icon)!==null&&d!==void 0?d:M?.moreIcon)!==null&&u!==void 0?u:g)!==null&&m!==void 0?m:i.createElement(oc,null),transitionName:`${ue}-slide-up`},y),prefixCls:N,animated:Te,indicator:z,destroyInactiveTabPane:V??q})))}),Vc=Wc;Vc.TabPane=Bc;var yt,Po;function Hc(){if(Po)return yt;Po=1;var e=Fr();function n(){this.__data__=new e,this.size=0}return yt=n,yt}var wt,Oo;function Uc(){if(Oo)return wt;Oo=1;function e(n){var r=this.__data__,t=r.delete(n);return this.size=r.size,t}return wt=e,wt}var St,To;function Gc(){if(To)return St;To=1;function e(n){return this.__data__.get(n)}return St=e,St}var Ct,Mo;function Xc(){if(Mo)return Ct;Mo=1;function e(n){return this.__data__.has(n)}return Ct=e,Ct}var $t,No;function Yc(){if(No)return $t;No=1;var e=Fr(),n=ia(),r=fs(),t=200;function o(a,s){var l=this.__data__;if(l instanceof e){var f=l.__data__;if(!n||f.length<t-1)return f.push([a,s]),this.size=++l.size,this;l=this.__data__=new r(f)}return l.set(a,s),this.size=l.size,this}return $t=o,$t}var Rt,Ao;function Zc(){if(Ao)return Rt;Ao=1;var e=Fr(),n=Hc(),r=Uc(),t=Gc(),o=Xc(),a=Yc();function s(l){var f=this.__data__=new e(l);this.size=f.size}return s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=t,s.prototype.has=o,s.prototype.set=a,Rt=s,Rt}var It,ko;function Jc(){if(ko)return It;ko=1;function e(n,r){for(var t=-1,o=n==null?0:n.length;++t<o&&r(n[t],t,n)!==!1;);return n}return It=e,It}var Et,jo;function Qc(){if(jo)return Et;jo=1;var e=qn(),n=function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch{}}();return Et=n,Et}var Pt,zo;function Aa(){if(zo)return Pt;zo=1;var e=Qc();function n(r,t,o){t=="__proto__"&&e?e(r,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):r[t]=o}return Pt=n,Pt}var Ot,Lo;function ka(){if(Lo)return Ot;Lo=1;var e=Aa(),n=us(),r=Object.prototype,t=r.hasOwnProperty;function o(a,s,l){var f=a[s];(!(t.call(a,s)&&n(f,l))||l===void 0&&!(s in a))&&e(a,s,l)}return Ot=o,Ot}var Tt,Do;function ut(){if(Do)return Tt;Do=1;var e=ka(),n=Aa();function r(t,o,a,s){var l=!a;a||(a={});for(var f=-1,c=o.length;++f<c;){var d=o[f],u=s?s(a[d],t[d],d,a,t):void 0;u===void 0&&(u=t[d]),l?n(a,d,u):e(a,d,u)}return a}return Tt=r,Tt}var Mt,qo;function ef(){if(qo)return Mt;qo=1;function e(n,r){for(var t=-1,o=Array(n);++t<n;)o[t]=r(t);return o}return Mt=e,Mt}var Nt,Ko;function nf(){if(Ko)return Nt;Ko=1;var e=Wr(),n=Kn(),r="[object Arguments]";function t(o){return n(o)&&e(o)==r}return Nt=t,Nt}var At,Bo;function tf(){if(Bo)return At;Bo=1;var e=nf(),n=Kn(),r=Object.prototype,t=r.hasOwnProperty,o=r.propertyIsEnumerable,a=e(function(){return arguments}())?e:function(s){return n(s)&&t.call(s,"callee")&&!o.call(s,"callee")};return At=a,At}var An={exports:{}},kt,Fo;function rf(){if(Fo)return kt;Fo=1;function e(){return!1}return kt=e,kt}An.exports;var Wo;function ja(){return Wo||(Wo=1,function(e,n){var r=pn(),t=rf(),o=n&&!n.nodeType&&n,a=o&&!0&&e&&!e.nodeType&&e,s=a&&a.exports===o,l=s?r.Buffer:void 0,f=l?l.isBuffer:void 0,c=f||t;e.exports=c}(An,An.exports)),An.exports}var jt,Vo;function of(){if(Vo)return jt;Vo=1;var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function r(t,o){var a=typeof t;return o=o??e,!!o&&(a=="number"||a!="symbol"&&n.test(t))&&t>-1&&t%1==0&&t<o}return jt=r,jt}var zt,Ho;function za(){if(Ho)return zt;Ho=1;var e=9007199254740991;function n(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=e}return zt=n,zt}var Lt,Uo;function af(){if(Uo)return Lt;Uo=1;var e=Wr(),n=za(),r=Kn(),t="[object Arguments]",o="[object Array]",a="[object Boolean]",s="[object Date]",l="[object Error]",f="[object Function]",c="[object Map]",d="[object Number]",u="[object Object]",m="[object RegExp]",w="[object Set]",x="[object String]",I="[object WeakMap]",S="[object ArrayBuffer]",$="[object DataView]",v="[object Float32Array]",R="[object Float64Array]",P="[object Int8Array]",p="[object Int16Array]",g="[object Int32Array]",y="[object Uint8Array]",b="[object Uint8ClampedArray]",C="[object Uint16Array]",O="[object Uint32Array]",h={};h[v]=h[R]=h[P]=h[p]=h[g]=h[y]=h[b]=h[C]=h[O]=!0,h[t]=h[o]=h[S]=h[a]=h[$]=h[s]=h[l]=h[f]=h[c]=h[d]=h[u]=h[m]=h[w]=h[x]=h[I]=!1;function _(E){return r(E)&&n(E.length)&&!!h[e(E)]}return Lt=_,Lt}var Dt,Go;function eo(){if(Go)return Dt;Go=1;function e(n){return function(r){return n(r)}}return Dt=e,Dt}var kn={exports:{}};kn.exports;var Xo;function no(){return Xo||(Xo=1,function(e,n){var r=gs(),t=n&&!n.nodeType&&n,o=t&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===t,s=a&&r.process,l=function(){try{var f=o&&o.require&&o.require("util").types;return f||s&&s.binding&&s.binding("util")}catch{}}();e.exports=l}(kn,kn.exports)),kn.exports}var qt,Yo;function sf(){if(Yo)return qt;Yo=1;var e=af(),n=eo(),r=no(),t=r&&r.isTypedArray,o=t?n(t):e;return qt=o,qt}var Kt,Zo;function La(){if(Zo)return Kt;Zo=1;var e=ef(),n=tf(),r=Vr(),t=ja(),o=of(),a=sf(),s=Object.prototype,l=s.hasOwnProperty;function f(c,d){var u=r(c),m=!u&&n(c),w=!u&&!m&&t(c),x=!u&&!m&&!w&&a(c),I=u||m||w||x,S=I?e(c.length,String):[],$=S.length;for(var v in c)(d||l.call(c,v))&&!(I&&(v=="length"||w&&(v=="offset"||v=="parent")||x&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||o(v,$)))&&S.push(v);return S}return Kt=f,Kt}var Bt,Jo;function to(){if(Jo)return Bt;Jo=1;var e=Object.prototype;function n(r){var t=r&&r.constructor,o=typeof t=="function"&&t.prototype||e;return r===o}return Bt=n,Bt}var Ft,Qo;function Da(){if(Qo)return Ft;Qo=1;function e(n,r){return function(t){return n(r(t))}}return Ft=e,Ft}var Wt,ei;function lf(){if(ei)return Wt;ei=1;var e=Da(),n=e(Object.keys,Object);return Wt=n,Wt}var Vt,ni;function cf(){if(ni)return Vt;ni=1;var e=to(),n=lf(),r=Object.prototype,t=r.hasOwnProperty;function o(a){if(!e(a))return n(a);var s=[];for(var l in Object(a))t.call(a,l)&&l!="constructor"&&s.push(l);return s}return Vt=o,Vt}var Ht,ti;function qa(){if(ti)return Ht;ti=1;var e=ds(),n=za();function r(t){return t!=null&&n(t.length)&&!e(t)}return Ht=r,Ht}var Ut,ri;function ro(){if(ri)return Ut;ri=1;var e=La(),n=cf(),r=qa();function t(o){return r(o)?e(o):n(o)}return Ut=t,Ut}var Gt,oi;function ff(){if(oi)return Gt;oi=1;var e=ut(),n=ro();function r(t,o){return t&&e(o,n(o),t)}return Gt=r,Gt}var Xt,ii;function uf(){if(ii)return Xt;ii=1;function e(n){var r=[];if(n!=null)for(var t in Object(n))r.push(t);return r}return Xt=e,Xt}var Yt,ai;function gf(){if(ai)return Yt;ai=1;var e=Hr(),n=to(),r=uf(),t=Object.prototype,o=t.hasOwnProperty;function a(s){if(!e(s))return r(s);var l=n(s),f=[];for(var c in s)c=="constructor"&&(l||!o.call(s,c))||f.push(c);return f}return Yt=a,Yt}var Zt,si;function oo(){if(si)return Zt;si=1;var e=La(),n=gf(),r=qa();function t(o){return r(o)?e(o,!0):n(o)}return Zt=t,Zt}var Jt,li;function df(){if(li)return Jt;li=1;var e=ut(),n=oo();function r(t,o){return t&&e(o,n(o),t)}return Jt=r,Jt}var jn={exports:{}};jn.exports;var ci;function pf(){return ci||(ci=1,function(e,n){var r=pn(),t=n&&!n.nodeType&&n,o=t&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===t,s=a?r.Buffer:void 0,l=s?s.allocUnsafe:void 0;function f(c,d){if(d)return c.slice();var u=c.length,m=l?l(u):new c.constructor(u);return c.copy(m),m}e.exports=f}(jn,jn.exports)),jn.exports}var Qt,fi;function mf(){if(fi)return Qt;fi=1;function e(n,r){var t=-1,o=n.length;for(r||(r=Array(o));++t<o;)r[t]=n[t];return r}return Qt=e,Qt}var er,ui;function vf(){if(ui)return er;ui=1;function e(n,r){for(var t=-1,o=n==null?0:n.length,a=0,s=[];++t<o;){var l=n[t];r(l,t,n)&&(s[a++]=l)}return s}return er=e,er}var nr,gi;function Ka(){if(gi)return nr;gi=1;function e(){return[]}return nr=e,nr}var tr,di;function io(){if(di)return tr;di=1;var e=vf(),n=Ka(),r=Object.prototype,t=r.propertyIsEnumerable,o=Object.getOwnPropertySymbols,a=o?function(s){return s==null?[]:(s=Object(s),e(o(s),function(l){return t.call(s,l)}))}:n;return tr=a,tr}var rr,pi;function bf(){if(pi)return rr;pi=1;var e=ut(),n=io();function r(t,o){return e(t,n(t),o)}return rr=r,rr}var or,mi;function Ba(){if(mi)return or;mi=1;function e(n,r){for(var t=-1,o=r.length,a=n.length;++t<o;)n[a+t]=r[t];return n}return or=e,or}var ir,vi;function Fa(){if(vi)return ir;vi=1;var e=Da(),n=e(Object.getPrototypeOf,Object);return ir=n,ir}var ar,bi;function Wa(){if(bi)return ar;bi=1;var e=Ba(),n=Fa(),r=io(),t=Ka(),o=Object.getOwnPropertySymbols,a=o?function(s){for(var l=[];s;)e(l,r(s)),s=n(s);return l}:t;return ar=a,ar}var sr,hi;function hf(){if(hi)return sr;hi=1;var e=ut(),n=Wa();function r(t,o){return e(t,n(t),o)}return sr=r,sr}var lr,xi;function Va(){if(xi)return lr;xi=1;var e=Ba(),n=Vr();function r(t,o,a){var s=o(t);return n(t)?s:e(s,a(t))}return lr=r,lr}var cr,_i;function xf(){if(_i)return cr;_i=1;var e=Va(),n=io(),r=ro();function t(o){return e(o,r,n)}return cr=t,cr}var fr,yi;function _f(){if(yi)return fr;yi=1;var e=Va(),n=Wa(),r=oo();function t(o){return e(o,r,n)}return fr=t,fr}var ur,wi;function yf(){if(wi)return ur;wi=1;var e=qn(),n=pn(),r=e(n,"DataView");return ur=r,ur}var gr,Si;function wf(){if(Si)return gr;Si=1;var e=qn(),n=pn(),r=e(n,"Promise");return gr=r,gr}var dr,Ci;function Sf(){if(Ci)return dr;Ci=1;var e=qn(),n=pn(),r=e(n,"Set");return dr=r,dr}var pr,$i;function Cf(){if($i)return pr;$i=1;var e=qn(),n=pn(),r=e(n,"WeakMap");return pr=r,pr}var mr,Ri;function ao(){if(Ri)return mr;Ri=1;var e=yf(),n=ia(),r=wf(),t=Sf(),o=Cf(),a=Wr(),s=ps(),l="[object Map]",f="[object Object]",c="[object Promise]",d="[object Set]",u="[object WeakMap]",m="[object DataView]",w=s(e),x=s(n),I=s(r),S=s(t),$=s(o),v=a;return(e&&v(new e(new ArrayBuffer(1)))!=m||n&&v(new n)!=l||r&&v(r.resolve())!=c||t&&v(new t)!=d||o&&v(new o)!=u)&&(v=function(R){var P=a(R),p=P==f?R.constructor:void 0,g=p?s(p):"";if(g)switch(g){case w:return m;case x:return l;case I:return c;case S:return d;case $:return u}return P}),mr=v,mr}var vr,Ii;function $f(){if(Ii)return vr;Ii=1;var e=Object.prototype,n=e.hasOwnProperty;function r(t){var o=t.length,a=new t.constructor(o);return o&&typeof t[0]=="string"&&n.call(t,"index")&&(a.index=t.index,a.input=t.input),a}return vr=r,vr}var br,Ei;function Rf(){if(Ei)return br;Ei=1;var e=pn(),n=e.Uint8Array;return br=n,br}var hr,Pi;function so(){if(Pi)return hr;Pi=1;var e=Rf();function n(r){var t=new r.constructor(r.byteLength);return new e(t).set(new e(r)),t}return hr=n,hr}var xr,Oi;function If(){if(Oi)return xr;Oi=1;var e=so();function n(r,t){var o=t?e(r.buffer):r.buffer;return new r.constructor(o,r.byteOffset,r.byteLength)}return xr=n,xr}var _r,Ti;function Ef(){if(Ti)return _r;Ti=1;var e=/\w*$/;function n(r){var t=new r.constructor(r.source,e.exec(r));return t.lastIndex=r.lastIndex,t}return _r=n,_r}var yr,Mi;function Pf(){if(Mi)return yr;Mi=1;var e=ms(),n=e?e.prototype:void 0,r=n?n.valueOf:void 0;function t(o){return r?Object(r.call(o)):{}}return yr=t,yr}var wr,Ni;function Of(){if(Ni)return wr;Ni=1;var e=so();function n(r,t){var o=t?e(r.buffer):r.buffer;return new r.constructor(o,r.byteOffset,r.length)}return wr=n,wr}var Sr,Ai;function Tf(){if(Ai)return Sr;Ai=1;var e=so(),n=If(),r=Ef(),t=Pf(),o=Of(),a="[object Boolean]",s="[object Date]",l="[object Map]",f="[object Number]",c="[object RegExp]",d="[object Set]",u="[object String]",m="[object Symbol]",w="[object ArrayBuffer]",x="[object DataView]",I="[object Float32Array]",S="[object Float64Array]",$="[object Int8Array]",v="[object Int16Array]",R="[object Int32Array]",P="[object Uint8Array]",p="[object Uint8ClampedArray]",g="[object Uint16Array]",y="[object Uint32Array]";function b(C,O,h){var _=C.constructor;switch(O){case w:return e(C);case a:case s:return new _(+C);case x:return n(C,h);case I:case S:case $:case v:case R:case P:case p:case g:case y:return o(C,h);case l:return new _;case f:case u:return new _(C);case c:return r(C);case d:return new _;case m:return t(C)}}return Sr=b,Sr}var Cr,ki;function Mf(){if(ki)return Cr;ki=1;var e=Hr(),n=Object.create,r=function(){function t(){}return function(o){if(!e(o))return{};if(n)return n(o);t.prototype=o;var a=new t;return t.prototype=void 0,a}}();return Cr=r,Cr}var $r,ji;function Nf(){if(ji)return $r;ji=1;var e=Mf(),n=Fa(),r=to();function t(o){return typeof o.constructor=="function"&&!r(o)?e(n(o)):{}}return $r=t,$r}var Rr,zi;function Af(){if(zi)return Rr;zi=1;var e=ao(),n=Kn(),r="[object Map]";function t(o){return n(o)&&e(o)==r}return Rr=t,Rr}var Ir,Li;function kf(){if(Li)return Ir;Li=1;var e=Af(),n=eo(),r=no(),t=r&&r.isMap,o=t?n(t):e;return Ir=o,Ir}var Er,Di;function jf(){if(Di)return Er;Di=1;var e=ao(),n=Kn(),r="[object Set]";function t(o){return n(o)&&e(o)==r}return Er=t,Er}var Pr,qi;function zf(){if(qi)return Pr;qi=1;var e=jf(),n=eo(),r=no(),t=r&&r.isSet,o=t?n(t):e;return Pr=o,Pr}var Or,Ki;function Lf(){if(Ki)return Or;Ki=1;var e=Zc(),n=Jc(),r=ka(),t=ff(),o=df(),a=pf(),s=mf(),l=bf(),f=hf(),c=xf(),d=_f(),u=ao(),m=$f(),w=Tf(),x=Nf(),I=Vr(),S=ja(),$=kf(),v=Hr(),R=zf(),P=ro(),p=oo(),g=1,y=2,b=4,C="[object Arguments]",O="[object Array]",h="[object Boolean]",_="[object Date]",E="[object Error]",T="[object Function]",q="[object GeneratorFunction]",V="[object Map]",K="[object Number]",L="[object Object]",ee="[object RegExp]",M="[object Set]",se="[object String]",ce="[object Symbol]",N="[object WeakMap]",k="[object ArrayBuffer]",G="[object DataView]",X="[object Float32Array]",Z="[object Float64Array]",H="[object Int8Array]",U="[object Int16Array]",ue="[object Int32Array]",me="[object Uint8Array]",Re="[object Uint8ClampedArray]",Te="[object Uint16Array]",B="[object Uint32Array]",z={};z[C]=z[O]=z[k]=z[G]=z[h]=z[_]=z[X]=z[Z]=z[H]=z[U]=z[ue]=z[V]=z[K]=z[L]=z[ee]=z[M]=z[se]=z[ce]=z[me]=z[Re]=z[Te]=z[B]=!0,z[E]=z[T]=z[N]=!1;function ve(D,oe,Ie,Me,ze,he){var ne,Ee=oe&g,qe=oe&y,ge=oe&b;if(Ie&&(ne=ze?Ie(D,Me,ze,he):Ie(D)),ne!==void 0)return ne;if(!v(D))return D;var Ve=I(D);if(Ve){if(ne=m(D),!Ee)return s(D,ne)}else{var Se=u(D),de=Se==T||Se==q;if(S(D))return a(D,Ee);if(Se==L||Se==C||de&&!ze){if(ne=qe||de?{}:x(D),!Ee)return qe?f(D,o(ne,D)):l(D,t(ne,D))}else{if(!z[Se])return ze?D:{};ne=w(D,Se,Ee)}}he||(he=new e);var Le=he.get(D);if(Le)return Le;he.set(D,ne),R(D)?D.forEach(function(ye){ne.add(ve(ye,oe,Ie,ye,D,he))}):$(D)&&D.forEach(function(ye,pe){ne.set(pe,ve(ye,oe,Ie,pe,D,he))});var Ne=ge?qe?d:c:qe?p:P,He=Ve?void 0:Ne(D);return n(He||D,function(ye,pe){He&&(pe=ye,ye=D[pe]),r(ne,pe,ve(ye,oe,Ie,pe,D,he))}),ne}return Or=ve,Or}var Tr,Bi;function Df(){if(Bi)return Tr;Bi=1;var e=Lf(),n=1,r=4;function t(o){return e(o,n|r)}return Tr=t,Tr}var qf=Df();const Fi=aa(qf);var Kf=({className:e="",...n})=>{let r=(Is(),ws(Es)).default;return $e.createElement(Ss,{className:e,component:r,...n})},Yf=Kf,Zf=()=>{let[e,n]=i.useState(vs()),{setPaymentPassword:r,userInfo:t,modalOptions:o,showAccountTipModal:a}=sa();return i.useEffect(()=>{var s;n(!!((s=t?.security_account)!=null&&s.has_set_payment_password))},[t]),{hasSetPaymentPassword:e,setPaymentPassword:r,showSetPaymentPasswordOrConfirm:s=>{var l,f,c,d;e?s():((l=o.promptSettingConfig)==null?void 0:l.promptPaymentPasswordSettingWhenSign)===2||((f=o.promptSettingConfig)==null?void 0:f.promptPaymentPasswordSettingWhenSign)===3?a({visible:!0,confirm:s}):((c=o.promptSettingConfig)!=null&&c.promptPaymentPasswordSettingWhenSign||bs((d=o.promptSettingConfig)==null?void 0:d.promptPaymentPasswordSettingWhenSign))&&!hs(fo.PN_OPEN_SET_PAYMENT_PASSWORD)?(xs(fo.PN_OPEN_SET_PAYMENT_PASSWORD,"1"),a({visible:!0,confirm:s})):s()}}},Jf=`.info-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 290px;
  height: 100%;
}
.info-sign .pending-warning-modal {
  top: 100px;
  display: block;
  margin: auto;
}
.info-sign .pending-warning-modal .ant-modal-body {
  padding: 18px;
}
.info-sign .pending-warning-modal .ant-modal-confirm-btns {
  display: none;
}
.info-sign .pending-warning-modal .content {
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .pending-warning-modal .anticon-exclamation-circle {
  display: none;
}
.info-sign .pending-warning-modal .anticon-close {
  color: var(--secondary-text-color);
}
.info-sign .pending-warning-modal .footer-btns {
  column-gap: 18px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.info-sign .pending-warning-modal .footer-btns .ant-btn {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: var(--background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:first-child {
  color: var(--secondary-btn-color);
  background-color: var(--secondary-btn-background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:hover,
.info-sign .pending-warning-modal .footer-btns .ant-btn:focus,
.info-sign .pending-warning-modal .footer-btns .ant-btn:active {
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);
}
.info-sign .continue-btn:hover {
  color: var(--secondary-btn-color) !important;
  background-color: var(--secondary-btn-background-color) !important;
}
.info-sign .has-payment-password {
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--set-payment-password-bar-height);
  padding: 0 16px;
  padding-right: 52px;
  background-color: var(--tips-background-color);
  opacity: 1;
}
.info-sign .has-payment-password .has-payment-password-icon {
  width: 18px;
  height: 18px;
  border: 1px solid #f7af5d;
  border-radius: 50%;
  overflow: hidden;
  background-image: var(--icon-warning);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: white;
}
.info-sign .has-payment-password .has-payment-password-tip {
  flex: 1;
  margin: 0 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: var(--text-color);
}
@media screen and (max-width: 350px) {
  .info-sign .has-payment-password .has-payment-password-tip {
    letter-spacing: -1px;
  }
}
.info-sign .has-payment-password .has-payment-password-set {
  min-width: 44px;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  cursor: pointer;
}
.info-sign .has-payment-password .has-payment-password-set:hover {
  opacity: var(--hover-opacity);
}
@media (max-width: 600px) {
  .info-sign .has-payment-password {
    padding-right: 16px;
    margin-top: 15px;
  }
  .info-sign .has-payment-password[data-telegram='true'] {
    padding-right: 52px !important;
    margin-top: 0 !important;
  }
}
.info-sign .ant-tabs {
  width: calc(100% - 36px);
  min-width: 230px;
}
.info-sign .ant-tabs-nav .ant-tabs-tab {
  padding-bottom: 4px;
  color: var(--secondary-text-color);
}
.info-sign .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--text-color);
}
.info-sign .ant-tabs-nav::before {
  display: none;
}
.info-sign .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-ink-bar {
  background: var(--text-color);
}
.info-sign .scroll-part {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 10px;
  margin: 0;
  overflow: auto;
}
.info-sign .scroll-part .top-menu-list {
  position: absolute;
  z-index: 99;
  top: 12px;
  left: 15px;
  column-gap: 5px;
  display: flex;
  justify-content: flex-start;
}
.info-sign .scroll-part .top-menu-list .item {
  cursor: pointer;
}
.info-sign .scroll-part .top-menu-list .item .anticon {
  font-size: 26px;
}
.info-sign .scroll-part .top-menu-list .item .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-entry {
  position: absolute;
  z-index: 99;
  top: 16px;
  left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .menu-icon {
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .wallet-entry {
  margin-left: 8px;
  font-size: 28px;
}
.info-sign .scroll-part .menu-entry .ant-popover {
  padding: 0;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-arrow {
  display: none;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-inner {
  border-radius: var(--primary-btn-border-radius);
  background: var(--modal-background-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list {
  display: flex;
  flex-direction: column;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge {
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge .ant-badge-dot {
  top: -1px;
  right: -4px;
}
.info-sign .scroll-part .menu-entry .ant-badge {
  column-gap: 8px;
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .ant-badge .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content {
  padding: 0;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list {
  padding-top: 6px;
  padding-bottom: 6px;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item {
  height: 45px;
  padding: 0 17px;
  border-bottom: 1px solid var(--keyword-border-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 45px;
  color: #000;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item:last-child {
  border-bottom: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item .anticon {
  font-size: 26px;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title {
  height: 19px;
  padding-top: 0;
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
  margin-bottom: 3px;
}
.info-sign .scroll-part .info-address {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 23px;
  padding: 0 5px 0 8px;
  margin-top: 5px;
  border-radius: var(--primary-btn-border-radius);
  font-size: 12px;
  line-height: 23px;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .info-address .copy-icon {
  position: relative;
  width: 14px;
  height: 100%;
  margin-left: 5px;
}
.info-sign .scroll-part .info-address .copy-icon .anticon {
  position: absolute;
  top: 5px;
}
.info-sign .scroll-part .info-request {
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  max-height: 20px;
  padding-top: 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
  gap: 6px;
}
.info-sign .scroll-part .info-request .aa-icon {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image {
  width: 22px;
  height: 22px;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image img {
  position: absolute;
  left: 0;
  top: 0;
}
.info-sign .scroll-part .info-request .aa-tag {
  padding: 0 4px;
  margin-right: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  color: var(--background-color);
  background-color: var(--text-color);
}
.info-sign .scroll-part .info-des {
  max-width: 300px;
  margin: 9px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .apart-line {
  display: none;
  width: 100%;
  border-top: 1px solid var(--card-unclickable-border-color);
}
.info-sign .scroll-part .balance-change {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  border: 1px solid var(--card-unclickable-border-color);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .balance-change .title {
  padding-bottom: 1px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-sign .scroll-part .balance-change .change-body .change-title {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body .change-title .change-val {
  font-weight: 500;
  font-size: 14px;
  color: var(--green-color);
}
.info-sign .scroll-part .balance-change .change-body .mt20 {
  margin-top: 20px;
}
.info-sign .scroll-part .balance-change .change-body .message-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
}
.info-sign .scroll-part .from-to {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border: none;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .from-to .address-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-sign .scroll-part .from-to .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .no-gas-fee {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: rgba(234, 67, 53, 0.09);
}
.info-sign .scroll-part .no-gas-fee img {
  width: 18.5px;
  height: 18.5px;
  margin-top: 3px;
  margin-right: 10px;
}
.info-sign .scroll-part .no-gas-fee .no-title {
  font-weight: 500;
}
.info-sign .scroll-part .no-gas-fee .no-warning {
  display: flex;
  padding-bottom: 9px;
  margin-top: 10px;
  border-bottom: 1px solid var(--card-divider-color);
  line-height: 15px;
}
.info-sign .scroll-part .no-gas-fee .data-title {
  margin-top: 15px;
  font-weight: bold;
}
.info-sign .scroll-part .no-gas-fee .data-item {
  margin-top: 10px;
  line-height: 14px;
}
.info-sign .scroll-part .net-fee {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .net-fee .title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .title .fee-val {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title {
  font-weight: 500;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title span {
  font-weight: 500;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row img {
  width: 9.19px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .approximately {
  font-weight: 400;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-standard {
  width: 70px;
  margin-right: 10px;
  font-weight: normal;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-time {
  width: 70px;
  margin-right: 19.19px;
  font-weight: 500;
  color: var(--green-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right .right-icon {
  width: 9.19px;
  margin-left: 15px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right {
  display: flex;
  text-align: right;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon {
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon svg {
  width: 13px;
  height: 13px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .right-time {
  margin-right: 55px;
  font-weight: bold;
  font-size: 12px;
  color: var(--green-color);
}
.info-sign .scroll-part .total {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .total .total-title {
  font-weight: bold;
}
.info-sign .scroll-part .total .mt8 {
  margin-top: 8px;
}
.info-sign .scroll-part .total .total-content span {
  font-weight: 400;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .show-btn {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
}
.info-sign .scroll-part .program-details {
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction {
  width: 100%;
  min-width: 230px;
  margin-bottom: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item {
  margin-top: 0;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item {
  padding: 13px 11px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--card-unclickable-border-color) !important;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color) !important;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-0 {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  word-break: break-all;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt15 {
  margin-top: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 span {
  max-width: 220px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 .data {
  max-width: calc(85 * var(--vw));
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message {
  width: calc(100% - 36px);
  min-width: 230px;
  padding: 0;
  margin-top: 18px;
  border: none;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .sign-message .s-row {
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row[data-index='0'] ::after {
  display: none;
}
.info-sign .scroll-part .sign-message .s-row [data-type='title'],
.info-sign .scroll-part .sign-message .s-row [data-type='index'],
.info-sign .scroll-part .sign-message .s-row .label[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .title[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .value[data-type='index'] {
  position: relative;
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row .label {
  font-weight: 400;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .s-row .value {
  flex: 1;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message {
  position: relative;
  max-height: calc(var(--doc-height) - 300px);
  padding: 8px 12px;
  overflow: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message .personal-message {
  position: relative;
}
.info-sign .scroll-part .sign-message .message pre {
  padding-bottom: 2px;
}
.info-sign .scroll-part .sign-message .message.no-password-tip {
  max-height: calc(var(--doc-height) - 300px - var(--set-payment-password-bar-height) - var(--risk-bar-height)) !important;
}
.info-sign .btn-box {
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 290px;
  height: var(--sign-bottom-menu-height);
  background: var(--theme-background-color);
  box-shadow: 0 -2px 3px 1px rgba(0, 0, 0, 0.08);
}
.info-sign .btn-box > div {
  display: flex;
  width: calc(100% - 36px);
  gap: 18px;
}
.info-sign .btn-box .footer-box {
  margin-top: 10px;
}
.info-sign .btn-box .btn-cancel {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.info-sign .btn-box .btn-cancel:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-cancel span {
  font-weight: 500;
}
.info-sign .btn-box .btn-approve {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.info-sign .btn-box .btn-approve:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-approve img {
  width: 12.75px;
  height: 18.29px;
  margin-right: 12px;
}
.info-sign.info-sign-erc20_transfer .fee-row,
.info-sign.info-sign-erc1155_transfer .fee-row,
.info-sign.info-sign-erc20_approve .fee-row,
.info-sign.info-sign-native_transfer .fee-row,
.info-sign.info-sign-erc721_transfer .fee-row,
.info-sign.info-sign-seaport_cancel_order .fee-row,
.info-sign.info-sign-seaport_nft_listing .fee-row,
.info-sign.info-sign-seaport_fulfill_order .fee-row {
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row {
  flex-wrap: wrap;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .left,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .left {
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .right,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .right {
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning {
  display: flex;
  align-items: center;
  line-height: 1.3;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning span {
  line-height: 1.4;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning img {
  flex: 1;
  align-self: flex-start;
  width: 19px;
  height: 19px;
  margin-top: 4px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .info-request,
.info-sign.info-sign-erc1155_transfer .info-request,
.info-sign.info-sign-erc20_approve .info-request,
.info-sign.info-sign-native_transfer .info-request,
.info-sign.info-sign-erc721_transfer .info-request,
.info-sign.info-sign-seaport_cancel_order .info-request,
.info-sign.info-sign-seaport_nft_listing .info-request,
.info-sign.info-sign-seaport_fulfill_order .info-request {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-title,
.info-sign.info-sign-erc1155_transfer .info-title,
.info-sign.info-sign-erc20_approve .info-title,
.info-sign.info-sign-native_transfer .info-title,
.info-sign.info-sign-erc721_transfer .info-title,
.info-sign.info-sign-seaport_cancel_order .info-title,
.info-sign.info-sign-seaport_nft_listing .info-title,
.info-sign.info-sign-seaport_fulfill_order .info-title {
  height: 20px;
  max-height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
}
.info-sign.info-sign-erc20_transfer .apart-line,
.info-sign.info-sign-erc1155_transfer .apart-line,
.info-sign.info-sign-erc20_approve .apart-line,
.info-sign.info-sign-native_transfer .apart-line,
.info-sign.info-sign-erc721_transfer .apart-line,
.info-sign.info-sign-seaport_cancel_order .apart-line,
.info-sign.info-sign-seaport_nft_listing .apart-line,
.info-sign.info-sign-seaport_fulfill_order .apart-line {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-address,
.info-sign.info-sign-erc1155_transfer .info-address,
.info-sign.info-sign-erc20_approve .info-address,
.info-sign.info-sign-native_transfer .info-address,
.info-sign.info-sign-erc721_transfer .info-address,
.info-sign.info-sign-seaport_cancel_order .info-address,
.info-sign.info-sign-seaport_nft_listing .info-address,
.info-sign.info-sign-seaport_fulfill_order .info-address {
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-sign.info-sign-erc20_transfer .info-des,
.info-sign.info-sign-erc1155_transfer .info-des,
.info-sign.info-sign-erc20_approve .info-des,
.info-sign.info-sign-native_transfer .info-des,
.info-sign.info-sign-erc721_transfer .info-des,
.info-sign.info-sign-seaport_cancel_order .info-des,
.info-sign.info-sign-seaport_nft_listing .info-des,
.info-sign.info-sign-seaport_fulfill_order .info-des {
  display: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content,
.info-sign.info-sign-erc1155_transfer .transfer-content,
.info-sign.info-sign-erc20_approve .transfer-content,
.info-sign.info-sign-native_transfer .transfer-content,
.info-sign.info-sign-erc721_transfer .transfer-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content {
  width: calc(100% - 36px);
  min-width: 230px;
  margin: auto;
  margin-top: 18px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc1155_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc20_approve .transfer-content .mg-bottom-15,
.info-sign.info-sign-native_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc721_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_cancel_order .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_nft_listing .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .mg-bottom-15 {
  margin-bottom: 15px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .flex-sp-row {
  display: flex;
  justify-content: space-between;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box,
.info-sign.info-sign-erc20_approve .transfer-content .less-box,
.info-sign.info-sign-native_transfer .transfer-content .less-box,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box {
  padding: 13px;
  padding-bottom: 3px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .pn-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .pn-row {
  width: 100%;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item {
  padding-top: 14px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--card-divider-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item:last-child {
  border-bottom: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .left {
  font-weight: 800;
  font-size: 18px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .right {
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon {
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount {
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--accent-color);
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3 {
  margin-top: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 {
  align-items: flex-start;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left {
  display: flex;
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 100%;
  overflow: hidden;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val {
  margin-right: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol {
  position: relative;
  margin-left: 2px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd {
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 {
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right {
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-overflow: ellipsis;
  color: var(--text-color);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name {
  line-height: 1.2;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row4 {
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row5 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row6 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2-0 {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 {
  padding-top: 24px;
  padding-bottom: 22px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row {
  height: 44px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1 {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right {
  text-align: right;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .pn-row2 {
  margin-top: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle {
  position: relative;
  width: 34px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 13px;
  transform: translate(-50%, -50%);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 {
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub {
  position: relative;
  padding-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub::before {
  position: absolute;
  top: 50%;
  left: 4px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: var(--accent-color);
  transform: translateY(-50%);
  content: '';
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content,
.info-sign.info-sign-native_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content img,
.info-sign.info-sign-native_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content img {
  width: 10px;
  height: 6px;
  margin-left: 5px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .wrap > div {
  display: flex;
  align-items: center;
  gap: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon {
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon svg {
  width: 11px;
  height: 11px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .fold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .fold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold .arrow-icon {
  transform: rotate(180deg);
}
.edit-approve-amount-modal .ant-modal-content {
  overflow: hidden;
  background-color: var(--modal-background-color) !important;
}
.edit-approve-amount-modal .ant-modal-header {
  border: none;
}
.edit-approve-amount-modal .ant-modal-header .ant-modal-title {
  text-align: center;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-body {
  padding-bottom: 16px;
}
.edit-approve-amount-modal .ant-form {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.edit-approve-amount-modal .ant-form .ant-row {
  flex: 1;
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input {
  height: 40px;
  border: 1px solid var(--input-border-color);
  color: var(--text-color);
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .icon {
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 0 8px;
  margin-top: 5px;
}
.edit-approve-amount-modal .ant-form .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.edit-approve-amount-modal .ant-form .symbol {
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-footer {
  display: flex !important;
  justify-content: center;
  padding-bottom: 30px;
  border: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-default {
  display: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-primary {
  width: 100%;
  max-width: 300px;
  height: 47px;
  margin-left: 0;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
`,Bf=e=>{var n;let{userInfo:r}=e,t=_s(),{modalOptions:o}=sa(),a=i.useMemo(()=>{let c=`${o.appId}_${r?.uuid}`;return`account_security_${ys(c)}`},[o.appId,r?.uuid]),[s,l]=i.useState({account:{name:"Account & Security",display:!0,badge:!1}});i.useEffect(()=>{if(r?.security_account&&a&&!localStorage.getItem(a)){let{has_set_master_password:c,has_set_payment_password:d}=r?.security_account||{};!c||!d?s.account.badge=!0:s.account.badge=!1}else s.account.badge=!1;l(Fi(s))},[r?.security_account,a]);let f=$e.createElement("div",{className:"item",onClick:()=>{s.account.badge=!1,l(Fi(s)),t("/account/security"),localStorage.setItem(a,"true")}},$e.createElement(va,{dot:!!s.account.badge},$e.createElement(Rs,{className:"wallet-icon",name:"security_icon"})));return $e.createElement("div",{className:"top-menu-list"},!!((n=s?.account)!=null&&n.display)&&f)},Qf=Bf,Mn={},Wi;function Ff(){if(Wi)return Mn;Wi=1;function e(p){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},e(p)}Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.CopyToClipboard=void 0;var n=o(Cs()),r=o(Ps()),t=["text","onCopy","options","children"];function o(p){return p&&p.__esModule?p:{default:p}}function a(p,g){var y=Object.keys(p);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(p);g&&(b=b.filter(function(C){return Object.getOwnPropertyDescriptor(p,C).enumerable})),y.push.apply(y,b)}return y}function s(p){for(var g=1;g<arguments.length;g++){var y=arguments[g]!=null?arguments[g]:{};g%2?a(Object(y),!0).forEach(function(b){R(p,b,y[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(y)):a(Object(y)).forEach(function(b){Object.defineProperty(p,b,Object.getOwnPropertyDescriptor(y,b))})}return p}function l(p,g){if(p==null)return{};var y=f(p,g),b,C;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(p);for(C=0;C<O.length;C++)b=O[C],!(g.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(p,b)&&(y[b]=p[b])}return y}function f(p,g){if(p==null)return{};var y={},b=Object.keys(p),C,O;for(O=0;O<b.length;O++)C=b[O],!(g.indexOf(C)>=0)&&(y[C]=p[C]);return y}function c(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}function d(p,g){for(var y=0;y<g.length;y++){var b=g[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(p,b.key,b)}}function u(p,g,y){return g&&d(p.prototype,g),Object.defineProperty(p,"prototype",{writable:!1}),p}function m(p,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(g&&g.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),g&&w(p,g)}function w(p,g){return w=Object.setPrototypeOf||function(b,C){return b.__proto__=C,b},w(p,g)}function x(p){var g=$();return function(){var b=v(p),C;if(g){var O=v(this).constructor;C=Reflect.construct(b,arguments,O)}else C=b.apply(this,arguments);return I(this,C)}}function I(p,g){if(g&&(e(g)==="object"||typeof g=="function"))return g;if(g!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(p)}function S(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function $(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(p){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)},v(p)}function R(p,g,y){return g in p?Object.defineProperty(p,g,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[g]=y,p}var P=function(p){m(y,p);var g=x(y);function y(){var b;c(this,y);for(var C=arguments.length,O=new Array(C),h=0;h<C;h++)O[h]=arguments[h];return b=g.call.apply(g,[this].concat(O)),R(S(b),"onClick",function(_){var E=b.props,T=E.text,q=E.onCopy,V=E.children,K=E.options,L=n.default.Children.only(V),ee=(0,r.default)(T,K);q&&q(T,ee),L&&L.props&&typeof L.props.onClick=="function"&&L.props.onClick(_)}),b}return u(y,[{key:"render",value:function(){var C=this.props;C.text,C.onCopy,C.options;var O=C.children,h=l(C,t),_=n.default.Children.only(O);return n.default.cloneElement(_,s(s({},h),{},{onClick:this.onClick}))}}]),y}(n.default.PureComponent);return Mn.CopyToClipboard=P,R(P,"defaultProps",{onCopy:void 0,options:void 0}),Mn}var Mr,Vi;function Wf(){if(Vi)return Mr;Vi=1;var e=Ff(),n=e.CopyToClipboard;return n.CopyToClipboard=n,Mr=n,Mr}var Vf=Wf();const eu=aa(Vf);export{Zf as F,eu as M,Jf as Q,Vc as T,Yf as Y,Qf as o};
