"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[934],{934:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(434),a=t(861),c=t(757),s=t.n(c),u=t(243),i=t(538),o=i.fetchingInProgress,l=i.fetchingSuccess,p=i.fetchingError,h=i.addingInProgress,d=i.addingSuccess,f=i.addingError,m=i.deletingInProgress,v=i.deletingSuccess,x=i.deletingError;u.Z.defaults.baseURL="https://connections-api.herokuapp.com";var b=t(184),g=function(){var e=(0,r.I0)();return(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target,r={name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.phone.value};e(function(e){var n=e.name,t=e.number;return function(){var e=(0,a.Z)(s().mark((function e(r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(h()),a={name:n,number:t},e.next=5,u.Z.post("/contacts",a);case 5:r(d(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(f(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}(r)),t.reset()},children:[(0,b.jsxs)("label",{htmlFor:"name",children:["Name",(0,b.jsx)("input",{type:"text",id:"name",title:"Name may contain only letters, apostrophe, dash and spaces",required:!0})]}),(0,b.jsxs)("label",{htmlFor:"phone",children:["Phone number",(0,b.jsx)("input",{type:"tel",id:"phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{type:"submit",children:"Add contact"})]})},j=function(e){var n=e.item,t=(0,r.I0)(),c=function(e){var n;t((n=e,function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m()),e.next=4,u.Z.delete("/contacts/".concat(n));case 4:t(v(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(x(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()))};return(0,b.jsxs)("li",{children:[n.name,": ",n.number,(0,b.jsx)("button",{type:"button",onClick:function(){return c(n.id)},children:"Usu\u0144"})]})},k=function(e){return e.contacts.items},w=function(){var e=(0,r.v9)(k);return(0,b.jsx)("div",{children:(0,b.jsx)("ul",{children:e.map((function(e){return(0,b.jsx)(j,{item:e},e.id)}))})})},y=t(791),_=function(){var e=(0,r.I0)();return(0,y.useEffect)((function(){e(function(){var e=(0,a.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(o()),e.next=4,u.Z.get("/contacts");case 4:t=e.sent,n(l(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(p(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}())}),[e]),(0,b.jsxs)("div",{children:[(0,b.jsx)(g,{}),(0,b.jsx)("h3",{children:"Your Phonebook contact list:"}),(0,b.jsx)(w,{})]})}}}]);
//# sourceMappingURL=934.b19fb468.chunk.js.map