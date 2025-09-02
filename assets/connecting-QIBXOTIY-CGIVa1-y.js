import{i as X,u as Y}from"./chunk-BSJODNDT-CTmxNnvO.js";import{i as ee,u as ne}from"./chunk-QXMKCDWX-DvZq4kHp.js";import{i as te,a as ie,C as oe,b as se,R as ce,c as re,d as ae,S as le}from"./chunk-SUWDRJLB-D3Y1Nrnh.js";import{i as de,u as ue}from"./chunk-EK3VN6OT-BoFL0tXh.js";import{i as Ce,P as pe}from"./chunk-QH6JFFQS-RDEjgszr.js";import{_ as x,i as me,a as fe,b as ge,c as _,d as Ee,e as U,f as V,g as he,h as xe,u as ye,r,j as R,k as O,l as Ne,m as W,n as t,I as ve,o as be,p as j,q as T,A as M,s as Ae,t as ke,v as E,w as h}from"./index-BNM2Gi5R.js";import{u as Ie}from"./use-animation-ChX7MJYg.js";var H,q,B,F,je=x({"src/components/squircleSpinner/styles.ts"(){H=E(h.div)`
  z-index: 4;
  position: relative;
  overflow: hidden;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,q=E(h.div)`
  z-index: 2;
  position: absolute;
  overflow: hidden;
  inset: ${e=>e.inset??3}px;
  border-radius: 16px;
  background: var(--pcm-body-background);
  svg,
  img {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`,B=E(h.div)`
  position: absolute;
  inset: 1px;
  /* overflow: hidden; */
`,F=E(h.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from -90deg,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      var(--pcm-accent-color)
    );
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}}),D,J,Te=x({"src/components/squircleSpinner/index.tsx"(){je(),D=({logo:e,connecting:l=!0})=>t.jsxs(H,{transition:{duration:.5,ease:[.175,.885,.32,.98]},children:[t.jsx(q,{children:e}),t.jsx(B,{children:t.jsx(M,{children:l&&t.jsx(F,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:0}}},"Spinner")})}),t.jsxs("svg",{"aria-hidden":"true",width:"64",height:"64",viewBox:"0 0 102 102",fill:"none",children:[t.jsx("rect",{x:"7.57895",y:"7.57895",width:"86.8421",height:"86.8421",rx:"19.2211",stroke:"black",strokeOpacity:"0.02",strokeWidth:"1.15789"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H102V102H0V0ZM7 38.284C7 27.5684 7 22.2106 9.01905 18.0892C10.9522 14.1431 14.1431 10.9522 18.0892 9.01905C22.2106 7 27.5684 7 38.284 7H63.716C74.4316 7 79.7894 7 83.9108 9.01905C87.8569 10.9522 91.0478 14.1431 92.9809 18.0892C95 22.2106 95 27.5684 95 38.284V63.716C95 74.4316 95 79.7894 92.9809 83.9108C91.0478 87.8569 87.8569 91.0478 83.9108 92.9809C79.7894 95 74.4316 95 63.716 95H38.284C27.5684 95 22.2106 95 18.0892 92.9809C14.1431 91.0478 10.9522 87.8569 9.01905 83.9108C7 79.7894 7 74.4316 7 63.716V38.284ZM41.5 0.5H41.4325C34.7246 0.499996 29.6023 0.499994 25.5104 0.823325C21.388 1.14906 18.1839 1.80986 15.3416 3.20227C10.0602 5.78959 5.78959 10.0602 3.20227 15.3416C1.80986 18.1839 1.14906 21.388 0.823325 25.5104C0.499994 29.6023 0.499996 34.7246 0.5 41.4325V41.5V55.5938C0.5 55.6808 0.507407 55.766 0.521624 55.849C0.507407 55.9319 0.5 56.0172 0.5 56.1042V60.5V60.5675C0.499996 67.2754 0.499994 72.3977 0.823325 76.4896C1.14906 80.612 1.80986 83.8161 3.20227 86.6584C5.78959 91.9398 10.0602 96.2104 15.3416 98.7977C18.1839 100.19 21.388 100.851 25.5104 101.177C29.6022 101.5 34.7244 101.5 41.432 101.5H41.4324H41.5H43.4227H60.5H60.5675H60.568C67.2756 101.5 72.3977 101.5 76.4896 101.177C80.612 100.851 83.8161 100.19 86.6584 98.7977C91.9398 96.2104 96.2104 91.9398 98.7977 86.6584C100.19 83.8161 100.851 80.612 101.177 76.4896C101.5 72.3978 101.5 67.2756 101.5 60.568V60.5676V60.5V41.5V41.4324V41.432C101.5 34.7244 101.5 29.6022 101.177 25.5104C100.851 21.388 100.19 18.1839 98.7977 15.3416C96.2104 10.0602 91.9398 5.78959 86.6584 3.20227C83.8161 1.80986 80.612 1.14906 76.4896 0.823325C72.3977 0.499994 67.2754 0.499996 60.5675 0.5H60.5H41.5ZM3.5 56.1042C3.5 56.0172 3.49259 55.9319 3.47838 55.849C3.49259 55.766 3.5 55.6808 3.5 55.5938V41.5C3.5 34.7112 3.50109 29.7068 3.814 25.7467C4.1256 21.8032 4.73946 19.0229 5.89635 16.6614C8.19077 11.9779 11.9779 8.19077 16.6614 5.89635C19.0229 4.73946 21.8032 4.1256 25.7467 3.814C29.7068 3.50109 34.7112 3.5 41.5 3.5H60.5C67.2888 3.5 72.2932 3.50109 76.2533 3.814C80.1968 4.1256 82.977 4.73946 85.3386 5.89635C90.022 8.19077 93.8092 11.9779 96.1036 16.6614C97.2605 19.0229 97.8744 21.8032 98.186 25.7467C98.4989 29.7068 98.5 34.7112 98.5 41.5V60.5C98.5 67.2888 98.4989 72.2932 98.186 76.2533C97.8744 80.1968 97.2605 82.9771 96.1036 85.3386C93.8092 90.022 90.022 93.8092 85.3386 96.1036C82.977 97.2605 80.1968 97.8744 76.2533 98.186C72.2932 98.4989 67.2888 98.5 60.5 98.5H43.4227H41.5C34.7112 98.5 29.7068 98.4989 25.7467 98.186C21.8032 97.8744 19.0229 97.2605 16.6614 96.1036C11.9779 93.8092 8.19077 90.022 5.89635 85.3386C4.73946 82.9771 4.1256 80.1968 3.814 76.2533C3.50109 72.2932 3.5 67.2888 3.5 60.5V56.1042Z",fill:"var(--pcm-body-background)"})]})]}),J=D}});function De(){const{connectAsync:e}=W(),{config:l}=R(),u=ne("evmWallet"),{updateLastConnectorId:o}=O(),[s,a]=r.useState();return{error:s,openW3m:async()=>{if(a(void 0),u&&u.w3mConnector){const C=document.createElement("style");C.innerHTML="w3m-modal, wcm-modal{ --wcm-z-index: 2147483647; --w3m-z-index:2147483647; }",document.head.appendChild(C);try{let d=u._internal.connectors.setup(u.w3mConnector);d=l._internal.connectors.setup(d),await e({connector:d}),o("walletConnect")}catch(d){a(d)}finally{document.head.removeChild(C)}}}}}var Le=x({"src/hooks/useWalletConnectModal.tsx"(){_(),U(),V(),ee()}}),n,L,S,Se,_e=x({"src/pages/connecting/index.tsx"(){te(),me(),Ce(),fe(),Te(),ge(),_(),Ee(),U(),de(),V(),he(),Le(),X(),xe(),ie(),n={CONNECTED:"connected",CONNECTING:"connecting",FAILED:"failed",REJECTED:"rejected",NOTCONNECTED:"notconnected",UNAVAILABLE:"unavailable"},L={initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1,transition:{ease:[.16,1,.3,1],duration:.25}}},S=({wallet:e,authParams:l,passkeyParams:u})=>{const o=ye(),[s,a]=r.useState(n.CONNECTING),m=Ie(),{config:C}=R(),{uri:d,requestUri:z,available:G,error:y}=Y(e?.connector?.id),g=ue(),{updateLastConnectorId:P}=O(),{openW3m:w,error:N}=De(),{isConnected:k}=Ne(),p=r.useCallback(i=>{if(i){if(i.code)switch(i.code){case-32002:a(n.NOTCONNECTED);break;case 4001:a(n.REJECTED);break;default:a(n.FAILED);break}else if(i.message)switch(i.message){case"User rejected request":a(n.REJECTED);break;default:a(n.FAILED);break}}},[]),Z=r.useMemo(()=>({onMutate:({connector:i})=>{a(i?n.CONNECTING:n.UNAVAILABLE)},onSettled:(i,A)=>{p(A)}}),[p]),{connect:$}=W(Z),v=r.useMemo(()=>e.connector.id==="passkeySmartWallet",[e]),c=r.useMemo(()=>{let i=e.icon;l?.socialType&&(i=t.jsx(ve,{authType:l.socialType}));const A=v?{isRegistering:u?.isRegistering??!1}:void 0;return{id:e.id,name:e.name,shortName:e.shortName??e.name,icon:i,iconShape:e.iconShape??"circle",iconShouldShrink:e.iconShouldShrink,isAuth:!!l?.socialType,passkey:A}},[e,l,u,v]),f=r.useMemo(()=>e?.downloadUrls?{name:Object.keys(e?.downloadUrls)[0],label:Object.keys(e.downloadUrls)[0].charAt(0).toUpperCase()+Object.keys(e.downloadUrls)[0].slice(1),url:e?.downloadUrls[Object.keys(e.downloadUrls)[0]]}:void 0,[e]),K=async()=>{m.stop(),m.set("initial"),await m.start("animate")},I=()=>{if(a(n.CONNECTING),g&&e.connector.chainType==="evm"&&e.getWalletConnectDeeplink&&!ke(e.connector.id)&&!e.isInstalled){if(j(e.connector.id)){w();return}else if(G){z();return}}e?.isInstalled&&e?.connector?(l?.socialType&&(C.storage?.setItem("recentConnectorId",e.connector.id),P(e.connector.id)),$({connector:e?.connector,authParams:l,passkeyParams:u})):a(n.UNAVAILABLE)};r.useEffect(()=>{const i=setTimeout(I,200);return()=>{clearTimeout(i)}},[]),r.useEffect(()=>{if(d&&g&&e.connector.chainType==="evm"&&e.getWalletConnectDeeplink){const i=e.getWalletConnectDeeplink(d);be(i)}},[d]),r.useEffect(()=>{g&&y&&p(y)},[y,p]),r.useEffect(()=>{g&&j(e.connector.id)&&N&&p(N)},[N,p]),r.useEffect(()=>()=>{k||C.setState(i=>({...i,status:i.current?"connected":"disconnected"}))},[k]);const b=r.useMemo(()=>{const i=c.shortName||c.name||"Wallet";return s==n.CONNECTED?o.connectingConnected:s==n.FAILED?o.connectingFailed:s==n.REJECTED?o.connectingRejected:s==n.NOTCONNECTED?o.connectingNotconnected.format(i):s==n.UNAVAILABLE?f?o.connectingUnavailable:T(c.id)?o.connectingPasskeyUnavailable:o.connectingInstall.format(i):o.connectingRequest},[s,o,c,f]),Q=r.useMemo(()=>{const i=c.shortName||c.name||"Wallet";return s==n.CONNECTED?o.connectingConnectedDesc:s==n.FAILED?o.connectingFailedDesc:s==n.REJECTED?o.connectingRejectedDesc:s==n.NOTCONNECTED?o.connectingNotconnectedDesc.format(i):s==n.UNAVAILABLE?f?o.connectingUnavailableDesc.format(i,f.label):T(c.id)?o.connectingPasskeyUnavailableDesc:o.connectingInstallDesc.format(i):c.isAuth?o.connectingRequestAuthDesc:c.passkey?c.passkey.isRegistering?o.setupPasskeyPrompt:o.passkeyPrompt:o.connectingRequestDesc},[s,o,c,f]);return r.useEffect(()=>{b&&K()},[b]),t.jsx(pe,{children:t.jsxs(oe,{children:[t.jsxs(se,{$shake:s===n.FAILED||s===n.REJECTED,$circle:c.iconShape==="circle",children:[t.jsx(M,{children:(s===n.FAILED||s===n.REJECTED)&&t.jsx(ce,{"aria-label":"Retry",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileTap:{scale:.9},transition:{duration:.1},onClick:I,children:t.jsx(re,{children:t.jsx(ae,{})})})}),c.iconShape==="circle"?t.jsx(Ae,{logo:s===n.UNAVAILABLE?t.jsx("div",{style:{transform:v?"scale(1)":"scale(1.14)",position:"relative",width:"100%"},children:c.icon}):t.jsx(t.Fragment,{children:c.icon}),smallLogo:c.iconShouldShrink,connecting:s===n.CONNECTING,unavailable:s===n.UNAVAILABLE}):t.jsx(J,{logo:s===n.UNAVAILABLE?t.jsx("div",{style:{position:"relative",width:"60px",height:"60px"},children:t.jsx("div",{style:{transform:"scale(0.75)"},children:c.icon})}):t.jsx(t.Fragment,{children:c.icon}),connecting:s===n.CONNECTING})]}),t.jsxs(le,{variants:L,initial:"animate",animate:m,children:[t.jsx("div",{children:b}),t.jsx("span",{children:Q})]})]})})},Se=S}});_e();export{n as States,Se as default};
