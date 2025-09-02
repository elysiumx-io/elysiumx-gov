import{A as u}from"./chunk-JWIG6G2P-BXw1gh3O.js";import{E as z}from"./chunk-XE7R4DL5-oCW6SOWb.js";import{d as w}from"./chunk-YNAB6HVU-DFiaPr4v.js";import{aw as P,$ as S,r as o,a4 as e,a5 as g,ao as C,bl as j}from"./index-gOj9jnM2.js";import{u as R}from"./useRequest-DVefpZfi.js";import"./chunk-TT34D6R6-D8w5J4WX.js";import"./index-kj9BnZKG.js";import"./throttle-CstCubZb.js";var y=`.set-password-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  color: var(--text-color);
}
.set-password-container .display-none {
  display: none;
}
.set-password-container .password-mistake {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  margin-top: 50px;
  text-align: center;
  color: var(--error-color);
}
.set-password-container .payment-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-password-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-password-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-password-container .payment-buttons2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 50px;
}
.set-password-container .payment-buttons2 .payment-main-button2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 47px;
  border: none !important;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.set-password-container .payment-buttons2 .payment-main-button2:hover {
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.set-password-container .payment-buttons2 .payment-main-button2:disabled {
  opacity: 0.5;
}
@media (max-width: 565px) {
  .set-password-container .payment-buttons2 {
    height: 47px;
    position: absolute;
    bottom: 262px;
  }
}
.set-password-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-password-container .payment-desc-1 {
  box-sizing: border-box;
  margin: 15px 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-password-container .keyboard-container {
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 50px;
}
@media (max-width: 565px) {
  .set-password-container .keyboard-container {
    margin-top: 10px;
  }
}
`,q=x=>{let r=P(),{t:n}=S(),a=x,[b,s]=o.useState("loading"),[l,i]=o.useState(""),[d,p]=o.useState(""),[f,m]=o.useState(),[h,c]=o.useState(!1),{errorHandle:v}=z(),{loading:E,run:k}=R(j,{manual:!0,onSuccess:()=>{r(-1)},onError:t=>{v(t),t?.error_code===50104&&(i(""),p(""),m(!1),s("password"))}});o.useEffect(()=>{s("password")},[]);let _=t=>{t.length===6?t===d?(i(t),c(!0)):(i(""),p(""),m(!0),s("password"),c(!1)):(i(t),c(!1))},N=()=>{if(a!=null&&a.account)r("/account/verify",{state:{account:a?.account,password:l,pageType:"reset_payment_password"}});else if(a!=null&&a.oldPassword){let t=a?.oldPassword;k({password:l,oldPassword:t})}};return b==="confirm"?e.createElement("div",{className:"set-password-container"},e.createElement("style",null,g(y)),e.createElement(w,{className:"icon-navigation-back",name:"circle_back",onClick:()=>r(-1)}),e.createElement("h2",{className:"payment-title"},n("account.set_payment_password")),e.createElement("p",{className:"payment-desc-1"},n("account.re_enter_confirm")),e.createElement("div",{className:"keyboard-container"},e.createElement(u,{onChange:_,value:l})),e.createElement("div",{className:"payment-buttons2"},e.createElement(C,{className:"payment-main-button2",disabled:!h,loading:a!=null&&a.oldPassword?E:!1,onClick:N},n("account.done")))):e.createElement(e.Fragment,null,e.createElement("style",null,g(y)),e.createElement("div",{className:"set-password-container"},e.createElement(w,{className:"icon-navigation-back",name:"circle_back",onClick:()=>r(-1)}),e.createElement("h2",{className:"payment-title"},n("account.set_payment_password")),e.createElement("p",{className:"payment-desc-1"},n("account.set_payment_password_tip")),e.createElement("div",{className:"keyboard-container"},e.createElement(u,{onChange:t=>{p(t),t.length>5&&(m(!1),c(!1),s("confirm"))},value:d})),f&&e.createElement("div",{className:"password-mistake"},n("account.password_do_not_match"))))},$=q;export{$ as default};
