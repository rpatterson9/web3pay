"use strict";(self.webpackChunkreact_demo=self.webpackChunkreact_demo||[]).push([[163],{3163:function(e,a,n){n.r(a);var t=n(4942),i=n(1413),s=n(5861),r=n(885),o=n(7757),l=n.n(o),c=n(4569),d=n.n(c),u=n(2791),m=n(8371),v=n(3360),f=n(3027),h=n(1830),p=n.n(h),x=n(1258),j=n(1368),w=n(184);a.default=function(){var e=(0,u.useState)([]),a=(0,r.Z)(e,2),n=a[0],o=a[1],c=(0,u.useState)({email:""}),h=(0,r.Z)(c,2),Z=h[0],N=h[1],b=(0,u.useState)(!0),k=(0,r.Z)(b,2),y=k[0],g=k[1],C=(0,u.useState)(!1),S=(0,r.Z)(C,2),B=S[0],R=S[1],D=(0,u.useState)(!1),E=(0,r.Z)(D,2),F=E[0],_=E[1],z=(0,u.useState)(""),G=(0,r.Z)(z,2),I=G[0],O=G[1],P=function(e){return!!n&&(e in n||void 0)},T=function(){var e=(0,s.Z)(l().mark((function e(a){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!1),_(!1),O(""),a.preventDefault(),d().post("".concat("https://web3pay.xyz/backend/api","/password/remind"),Z).then((function(e){var a,n;o([]),g(!0),O("".concat(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message)),R(!0),setTimeout((function(){_(!0)}),6e4),p().fire({icon:"success",title:"Done",showConfirmButton:!0,text:"".concat(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)})})).catch((function(e){var a,n,t,i,s,r;g(!0),p().fire({icon:"error",title:"Oops!",showConfirmButton:!0,text:null!==e&&void 0!==e&&null!==(a=e.response)&&void 0!==a&&null!==(n=a.data)&&void 0!==n&&n.message?null===e||void 0===e||null===(t=e.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message:"Some error occured"}),o(null===e||void 0===e||null===(s=e.response)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.errors)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(x.default,{}),(0,w.jsx)("div",{id:"",className:"contact-form form-top",children:(0,w.jsx)("div",{className:"container",children:(0,w.jsxs)("div",{className:"row d-flex justify-content-center",children:[(0,w.jsx)("div",{className:"col-12",children:(0,w.jsx)("div",{className:"heading",children:(0,w.jsx)("h3",{children:"Forgot Password"})})}),(0,w.jsx)("div",{className:"col-md-6 col-xs-12  col-sm-12 mx-auto",children:B?(0,w.jsxs)("div",{className:"text-center",children:[(0,w.jsx)("h4",{className:"mt-5 text-white",children:I}),(0,w.jsx)("p",{children:"If you do not receive an email , please click the Resend email link below after  60 sec."}),F?(0,w.jsxs)(v.Z,{variant:"primary",className:"mt-2",onClick:T,children:[y?"Resend email":"...wait","  "]}):(0,w.jsxs)(v.Z,{variant:"primary",className:"mt-2",disabled:!0,onClick:T,children:[" ",y?"Resend email":"...wait","  "]})]}):(0,w.jsxs)("form",{onSubmit:T,autoComplete:"off",children:[(0,w.jsxs)(f.Z.Group,{className:"contact-form-error-wrapper",controlid:"formBasicEmail",children:[(0,w.jsx)(f.Z.Control,{type:"email",placeholder:"Enter email",autoComplete:"off",name:"email",value:null===Z||void 0===Z?void 0:Z.email,onChange:function(e){return function(e){var a=e.target,n=a.name,s=a.value,r="number"===a.type?+s:s;N((0,i.Z)((0,i.Z)({},Z),{},(0,t.Z)({},n,r||"")))}(e)},className:"form-control ".concat(P("email")?"is-invalid":"")}),function(e){if(P(e))return(0,w.jsx)("div",{className:"error-wrapper",children:(0,w.jsx)("span",{className:"invalid-feedback",children:(0,w.jsx)("strong",{children:n[e]})})})}("email")]}),(0,w.jsxs)(v.Z,{variant:"primary",type:"submit",children:[y?"Submit":"...wait","  "]}),!y&&(0,w.jsx)(m.Z,{})]})})]})})}),(0,w.jsx)(j.default,{})]})}}}]);
//# sourceMappingURL=163.85884fb3.chunk.js.map