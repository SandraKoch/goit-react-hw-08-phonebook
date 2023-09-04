"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[86],{3086:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(1889),a=t(4708),c=t(5527),s=t(8870),o=t(3168),i=t(6314),u=t(8292),l=t(6151),d=t(9434),p=t(5861),h=t(4687),m=t.n(h),f=t(1243),x=t(1538),v=x.fetchingInProgress,g=x.fetchingSuccess,Z=x.fetchingError,b=x.addingInProgress,j=x.addingSuccess,k=x.addingError,w=x.deletingInProgress,y=x.deletingSuccess,P=x.deletingError;f.Z.defaults.baseURL="https://connections-api.herokuapp.com";var I=t(184),_=function(){var e=(0,d.I0)();return(0,I.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target,r={name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.phone.value};e(function(e){var n=e.name,t=e.number;return function(){var e=(0,p.Z)(m().mark((function e(r){var a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(b()),a={name:n,number:t},e.next=5,f.Z.post("/contacts",a);case 5:r(j(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r(k(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}(r)),t.reset()},children:[(0,I.jsx)(o.ZP,{color:"primary",fontSize:"lg",fontWeight:"lg",paddingBottom:"15px",children:"Add new contact here:"}),(0,I.jsxs)(i.Z,{spacing:2,direction:"row",children:[(0,I.jsx)(u.Z,{id:"name",label:"Contact name",type:"text",variant:"filled",title:"Name may contain only letters, apostrophe, dash and spaces"}),(0,I.jsx)(u.Z,{id:"phone",label:"Phone number",type:"tel",variant:"filled",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,I.jsx)(l.Z,{variant:"contained",type:"submit",children:"Add contact"})]})]})},C=t(493),S=t(4852),A=t(3400),E=t(653),T=t(3044),W=t(6259),z=function(e){return e.contacts.items},B=t(7247),D=t(6773),L=t(225),M=function(){var e=(0,d.v9)(z),n=(0,d.I0)(),t=function(e){var t;n((t=e,function(){var e=(0,p.Z)(m().mark((function e(n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(w()),e.next=4,f.Z.delete("/contacts/".concat(t));case 4:n(y(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(P(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()))},r=(0,L.Z)(C.Z)({"& .MuiListItem-root:hover":{backgroundColor:"orange","&, & .MuiAvatar-root":{color:"black"}}});return(0,I.jsx)("div",{children:(0,I.jsx)(r,{children:e.map((function(e){return(0,I.jsxs)(S.ZP,{item:e,sx:{borderBottom:"1px solid grey",minWidth:"300px"},secondaryAction:(0,I.jsx)(A.Z,{edge:"end","aria-label":"delete",onClick:function(){return t(e.id)},children:(0,I.jsx)(B.Z,{})}),children:[(0,I.jsx)(E.Z,{children:(0,I.jsx)(T.Z,{children:(0,I.jsx)(D.Z,{})})}),(0,I.jsx)(W.Z,{primary:e.name,secondary:"".concat(e.number)})]},e.id)}))})})},q=t(6029),N=t(2791),R=function(){var e=(0,d.I0)();return(0,N.useEffect)((function(){e(function(){var e=(0,p.Z)(m().mark((function e(n){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(v()),e.next=4,f.Z.get("/contacts");case 4:t=e.sent,n(g(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(Z(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}())}),[e]),(0,I.jsxs)(r.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,I.jsx)(a.ZP,{}),(0,I.jsxs)(r.ZP,{item:!0,xs:12,sm:8,md:5,component:c.Z,elevation:6,square:!0,children:[(0,I.jsxs)(s.Z,{sx:{my:14,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,I.jsx)(_,{}),(0,I.jsx)(o.ZP,{marginTop:"30px",level:"h3",fontWeight:"xl",fontSize:"clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",children:"Your Phonebook Contacts:"}),(0,I.jsx)(M,{})]}),(0,I.jsx)(q.w,{})]})]})}}}]);
//# sourceMappingURL=86.4a0f368c.chunk.js.map