"use strict";(self.webpackChunkreact_demo=self.webpackChunkreact_demo||[]).push([[750],{7750:function(o,e,n){n.r(e);var r=n(4942),a=n(1413),s=n(5861),t=n(885),i=n(7757),c=n.n(i),l=n(4569),d=n.n(l),u=n(2791),m=n(6871),p=n(8371),f=n(3027),v=n(3360),h=n(1830),w=n.n(h),x=n(184);e.default=function(){var o=(0,m.TH)().search,e=(0,m.s0)(),n=new URLSearchParams(o),i=n.get("token"),l=atob(n.get("uhash")),h=(0,u.useState)([]),j=(0,t.Z)(h,2),C=j[0],Z=j[1],g=(0,u.useState)({email:l,password:"",token:i,password_confirmation:""}),N=(0,t.Z)(g,2),y=N[0],b=N[1],k=(0,u.useState)(!0),S=(0,t.Z)(k,2),_=S[0],B=S[1];(0,u.useEffect)((function(){i||e("/login")}),[]);var E=function(o){return!!C&&(o in C||void 0)},P=function(o){if(E(o))return(0,x.jsx)("div",{className:"error-wrapper",children:(0,x.jsx)("span",{className:"invalid-feedback",children:(0,x.jsx)("strong",{children:C[o]})})})},G=function(){var o=(0,s.Z)(c().mark((function o(n){return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:B(!1),n.preventDefault(),d().post("".concat("https://web3pay.xyz/backend/api","/password/reset"),y).then((function(o){var n;b({email:l,password_confirmation:"",token:i,password:""}),Z([]),B(!0),w().fire({icon:"success",title:"Done",showConfirmButton:!0,text:"".concat(null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.message)}),e("/login")})).catch((function(o){var e,n,r,a,s,t;B(!0),w().fire({icon:"error",title:"Oops!",showConfirmButton:!0,text:null!==o&&void 0!==o&&null!==(e=o.response)&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.message?null===o||void 0===o||null===(r=o.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message:"Some error occured"}),Z(null===o||void 0===o||null===(s=o.response)||void 0===s||null===(t=s.data)||void 0===t?void 0:t.errors)}));case 3:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),D=function(o){var e=o.target,n=e.name,s=e.value,t="number"===e.type?+s:s;b((0,a.Z)((0,a.Z)({},y),{},(0,r.Z)({},n,t||"")))};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{id:"contact-us",className:"contact-form form-top",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row d-flex justify-content-center",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("div",{className:"heading",children:(0,x.jsx)("h3",{children:"Reset Password"})})}),(0,x.jsx)("div",{className:"col-md-6 col-xs-12  col-sm-12 mx-auto",children:(0,x.jsxs)("form",{onSubmit:G,autoComplete:"off",children:[(0,x.jsxs)(f.Z.Group,{className:"contact-form-error-wrapper",controlid:"formBasicEmail",children:[(0,x.jsx)(f.Z.Control,{type:"email",placeholder:"Enter email",autoComplete:"off",name:"email",readOnly:!0,value:null===y||void 0===y?void 0:y.email,onChange:function(o){return D(o)},className:"form-control ".concat(E("email")?"is-invalid":"")}),P("email")]}),(0,x.jsxs)(f.Z.Group,{className:"contact-form-error-wrapper",controlid:"formBasicPhone",children:[(0,x.jsx)(f.Z.Control,{type:"password",placeholder:"Enter password",autoComplete:"off",name:"password",value:null===y||void 0===y?void 0:y.phone,onChange:function(o){return D(o)},className:"form-control ".concat(E("password")?"is-invalid":"")}),P("password")]}),(0,x.jsxs)(f.Z.Group,{className:"contact-form-error-wrapper",controlid:"formBasicPhone",children:[(0,x.jsx)(f.Z.Control,{type:"password",placeholder:"Confirmation password",autoComplete:"off",name:"password_confirmation",value:null===y||void 0===y?void 0:y.phone,onChange:function(o){return D(o)},className:"form-control ".concat(E("password_confirmation")?"is-invalid":"")}),P("password_confirmation")]}),(0,x.jsxs)(v.Z,{variant:"primary",type:"submit",children:[_?"Submit":"...wait","  "]}),!_&&(0,x.jsx)(p.Z,{})]})})]})})})})}}}]);
//# sourceMappingURL=750.17e8f83a.chunk.js.map