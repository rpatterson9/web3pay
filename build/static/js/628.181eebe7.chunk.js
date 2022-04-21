"use strict";(self.webpackChunkreact_demo=self.webpackChunkreact_demo||[]).push([[628],{2628:function(e,a,r){r.r(a),r.d(a,{default:function(){return O}});var n=r(2791),s=r(1413),c=r(5987),i=r(1694),t=r.n(i),o=r(239),d=r(162),l=r(7858);function u(e,a){return Array.isArray(e)?e.includes(a):e===a}var v=n.createContext({});v.displayName="AccordionContext";var y=v,h=r(184),f=["as","bsPrefix","className","children","eventKey"],m=n.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.bsPrefix,v=e.className,m=e.children,x=e.eventKey,p=(0,c.Z)(e,f),j=(0,n.useContext)(y).activeEventKey;return o=(0,d.vE)(o,"accordion-collapse"),(0,h.jsx)(l.Z,(0,s.Z)((0,s.Z)({ref:a,in:u(j,x)},p),{},{className:t()(v,o),children:(0,h.jsx)(i,{children:n.Children.only(m)})}))}));m.displayName="AccordionCollapse";var x=m,p=n.createContext({eventKey:""});p.displayName="AccordionItemContext";var j=p,b=["as","bsPrefix","className"],N=n.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.bsPrefix,l=e.className,u=(0,c.Z)(e,b);o=(0,d.vE)(o,"accordion-body");var v=(0,n.useContext)(j).eventKey;return(0,h.jsx)(x,{eventKey:v,children:(0,h.jsx)(i,(0,s.Z)((0,s.Z)({ref:a},u),{},{className:t()(l,o)}))})}));N.displayName="AccordionBody";var C=N,w=r(2982),K=["as","bsPrefix","className","onClick"];var P=n.forwardRef((function(e,a){var r=e.as,i=void 0===r?"button":r,o=e.bsPrefix,l=e.className,v=e.onClick,f=(0,c.Z)(e,K);o=(0,d.vE)(o,"accordion-button");var m=(0,n.useContext)(j).eventKey,x=function(e,a){var r=(0,n.useContext)(y),s=r.activeEventKey,c=r.onSelect,i=r.alwaysOpen;return function(r){var n=e===s?null:e;i&&(n=Array.isArray(s)?s.includes(e)?s.filter((function(a){return a!==e})):[].concat((0,w.Z)(s),[e]):[e]),null==c||c(n,r),null==a||a(r)}}(m,v),p=(0,n.useContext)(y).activeEventKey;return"button"===i&&(f.type="button"),(0,h.jsx)(i,(0,s.Z)((0,s.Z)({ref:a,onClick:x},f),{},{"aria-expanded":m===p,className:t()(l,o,!u(p,m)&&"collapsed")}))}));P.displayName="AccordionButton";var Z=P,k=["as","bsPrefix","className","children","onClick"],A=n.forwardRef((function(e,a){var r=e.as,n=void 0===r?"h2":r,i=e.bsPrefix,o=e.className,l=e.children,u=e.onClick,v=(0,c.Z)(e,k);return i=(0,d.vE)(i,"accordion-header"),(0,h.jsx)(n,(0,s.Z)((0,s.Z)({ref:a},v),{},{className:t()(o,i),children:(0,h.jsx)(Z,{onClick:u,children:l})}))}));A.displayName="AccordionHeader";var B=A,g=["as","bsPrefix","className","eventKey"],E=n.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.bsPrefix,l=e.className,u=e.eventKey,v=(0,c.Z)(e,g);o=(0,d.vE)(o,"accordion-item");var y=(0,n.useMemo)((function(){return{eventKey:u}}),[u]);return(0,h.jsx)(j.Provider,{value:y,children:(0,h.jsx)(i,(0,s.Z)((0,s.Z)({ref:a},v),{},{className:t()(l,o)}))})}));E.displayName="AccordionItem";var I=E,H=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],W=n.forwardRef((function(e,a){var r=(0,o.Ch)(e,{activeKey:"onSelect"}),i=r.as,l=void 0===i?"div":i,u=r.activeKey,v=r.bsPrefix,f=r.className,m=r.onSelect,x=r.flush,p=r.alwaysOpen,j=(0,c.Z)(r,H),b=(0,d.vE)(v,"accordion"),N=(0,n.useMemo)((function(){return{activeEventKey:u,onSelect:m,alwaysOpen:p}}),[u,m,p]);return(0,h.jsx)(y.Provider,{value:N,children:(0,h.jsx)(l,(0,s.Z)((0,s.Z)({ref:a},j),{},{className:t()(f,b,x&&"".concat(b,"-flush"))}))})}));W.displayName="Accordion";var S=Object.assign(W,{Button:Z,Collapse:x,Item:I,Header:B,Body:C}),O=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{id:"faq",className:"faqs",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)("div",{className:"heading",children:(0,h.jsx)("h3",{children:"FAQs"})})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(S,{children:[(0,h.jsxs)(S.Item,{eventKey:"0",children:[(0,h.jsx)(S.Header,{children:"What is Web3Pay?"}),(0,h.jsx)(S.Body,{children:"Web3 Pay enables users to buy and trade cryptocurrencies through credit cards, mobile wallets, and bank transfers."})]}),(0,h.jsxs)(S.Item,{eventKey:"1",children:[(0,h.jsx)(S.Header,{children:"Why is being able to use a credit card important?"}),(0,h.jsx)(S.Body,{children:"Buying with a credit card is quick, which helps your customers avoid this difficulty."})]}),(0,h.jsxs)(S.Item,{eventKey:"2",children:[(0,h.jsx)(S.Header,{children:"Can we still accept crypto payments?"}),(0,h.jsx)(S.Body,{children:"Yes! Our service gives your consumers another way to purchase NFTs. You can still utilise your old crypto payment methods."})]}),(0,h.jsxs)(S.Item,{eventKey:"3",children:[(0,h.jsx)(S.Header,{children:"Can I use Web3Pay if I am not a developer?"}),(0,h.jsx)(S.Body,{children:"Web3Pay was made for brands, individuals, and marketplaces to allow anybody with any level of crypto knowledge to easily buy an NFT via credit card."})]}),(0,h.jsxs)(S.Item,{eventKey:"4",children:[(0,h.jsx)(S.Header,{children:"What Blockchains does Web3Pay support?"}),(0,h.jsx)(S.Body,{children:"Supported platforms include Ethereum, Bi-nance Smart Chain, Polygon, EOS, AVAX, and Fantom."})]}),(0,h.jsxs)(S.Item,{eventKey:"5",children:[(0,h.jsx)(S.Header,{children:"What Blockchains are next on your roadmap?"}),(0,h.jsx)(S.Body,{children:"We'll be adding Solana, Algorand, Casper, and Cardano chains soon."})]}),(0,h.jsxs)(S.Item,{eventKey:"6",children:[(0,h.jsx)(S.Header,{children:"How will this affect buying crypto?"}),(0,h.jsx)(S.Body,{children:"Cryptocurrencies are still gained and used for transactions. The more people we can bring into the space, the better."})]})]})})]})})})})}}}]);
//# sourceMappingURL=628.181eebe7.chunk.js.map