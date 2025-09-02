import{i as _,c as j}from"./chunk-KFSERCOH-DAbk0Ssm.js";import{i as w,u as k}from"./chunk-BSJODNDT-CTmxNnvO.js";import{i as R,C as I}from"./chunk-L7PHO2RG-_VRyl1pg.js";import{i as M,b as W}from"./chunk-G4I34CN4-DJF7Yh4M.js";import{i as H,u as V}from"./chunk-EK3VN6OT-BoFL0tXh.js";import{i as S,P as U,a as D}from"./chunk-QH6JFFQS-RDEjgszr.js";import{_ as c,n as e,w as r,c as E,d as L,g as Q,B as Z,D as z,u as A,j as B,l as P,r as a,v as s}from"./index-BNM2Gi5R.js";import"./chunk-SUWDRJLB-D3Y1Nrnh.js";var x,m,T=c({"src/assets/icons/ShareIcon.tsx"(){x=({...t})=>{const{color:o="var(--pcm-body-color-secondary)"}=t;return e.jsxs(r.svg,{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...t,children:[e.jsx("path",{d:"M8.51997 12H3.47999C1.56119 12 0 10.4388 0 8.52003V3.48024C0 1.56144 1.5612 0.000244141 3.47999 0.000244141H5.99998C6.33135 0.000244141 6.59998 0.268873 6.59998 0.600243C6.59998 0.931614 6.33135 1.20024 5.99998 1.20024H3.47999C2.22299 1.20024 1.2 2.22304 1.2 3.48024V8.52023C1.2 9.77763 2.22299 10.8002 3.47999 10.8002H8.51997C9.77717 10.8002 10.8 9.77763 10.8 8.52023V6.00023C10.8 5.66886 11.0686 5.40024 11.4 5.40024C11.7313 5.40024 12 5.66886 12 6.00023V8.52023C12 10.439 10.439 12.0002 8.51997 12Z",fill:o}),e.jsx("path",{d:"M5.60178 6.39823C5.36733 6.16402 5.36733 5.78404 5.60178 5.54983L10.9758 0.175837C11.21 -0.0586125 11.59 -0.0586125 11.8242 0.175837C12.0586 0.410045 12.0586 0.790028 11.8242 1.02424L6.44998 6.39823C6.21577 6.63268 5.83579 6.63268 5.60178 6.39823Z",fill:o}),e.jsx("path",{d:"M12 0.599999C12 0.931369 11.7313 1.2 11.4 1.2H8.59997C8.26852 1.20011 7.99976 0.93145 7.99976 0.599999C7.99976 0.268548 8.26852 -0.000114395 8.59997 0H11.4C11.7313 1.37329e-07 12 0.268629 12 0.599999Z",fill:o}),e.jsx("path",{d:"M11.4 3.99999C11.0686 3.99999 10.8 3.73136 10.8 3.39999V0.599999C10.8 0.268629 11.0686 0 11.4 0C11.7313 0 12 0.268629 12 0.599999V3.39999C12 3.73137 11.7313 3.99999 11.4 3.99999Z",fill:o})]})},m=x}}),C,g,b,q=c({"src/pages/walletconnect/styles.ts"(){C=s(r.div)`
  padding: 15px 30px;
  padding-top: 30px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
`,s(r.div)`
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  font-weight: 500;
  margin-bottom: 30px;
`,g=s(r.div)`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  margin-top: 20px;

  button {
    border-radius: var(--pcm-rounded-lg);
    border: 1px solid var(--pcm-button-border-color);
    background-color: var(--pcm-body-background) !important;
    color: var(--pcm-body-background);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--pcm-body-color-secondary);

    &:hover {
      background-color: #fff;
    }
  }
`,b=s.div`
  margin-top: 28px;
  padding: 0 16px;
  color: var(--pcm-body-color-secondary);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`}}),f,F,G=c({"src/pages/walletconnect/index.tsx"(){T(),R(),M(),_(),S(),E(),L(),H(),Q(),Z(),w(),q(),f=({wallet:t})=>{const{navigate:o}=z(),i=A(),l=V(),{uri:n="",requestUri:d,error:h}=k(t?.connector?.id),{config:v}=B(),{isConnected:p}=P();a.useEffect(()=>{d()},[]),a.useEffect(()=>()=>{p||v.setState(u=>({...u,status:u.current?"connected":"disconnected"}))},[p]);const y=a.useMemo(()=>!(l||t?.id==="walletConnect"),[t,l]);return e.jsx(U,{style:{marginTop:0},children:e.jsxs(C,{children:[e.jsx(I,{value:n&&t.getWalletConnectDeeplink?t.getWalletConnectDeeplink(n):n,failed:!!h,failedCallback:()=>{d()},image:t?.icon}),!!n&&e.jsxs(g,{children:[e.jsx(j,{variant:"button",string:n,children:i.copyQRURI}),y&&e.jsx(W,{style:{background:"none",borderColor:"var(--pcm-button-border-color)"},onClick:()=>{o("download-app",{wallet:t})},children:e.jsxs(D,{gap:8,style:{color:"var(--pcm-body-color-secondary)"},children:[e.jsx(m,{}),i.getWallet]})})]}),e.jsx(b,{children:i.scanQRCode})]})})},F=f}});G();export{F as default};
