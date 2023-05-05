"use strict";(self.webpackChunktv_shows=self.webpackChunktv_shows||[]).push([[867],{245:function(e,n,t){t.d(n,{a:function(){return i}});var r,a=t(402),o=t(168),s=t(444).ZP.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),c=t(184),i=function(){return(0,c.jsx)(s,{children:(0,c.jsx)(a.NB,{visible:!0,height:"150",width:"150",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},867:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,a,o,s,c=t(861),i=t(439),u=t(757),p=t.n(u),l=t(791),f=t(87),x=t(689),h=t(686),d=t.n(h),m=t(965),b=t(660),g=t(830),v=t(168),w=t(444),j=w.ZP.form(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: ","px;\n\n  margin: ","px;\n\n  font-size: 16px;\n\n  font-family: 'Roboto-Bold';\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]})),y=w.ZP.button(a||(a=(0,v.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n\n  background-color: ",";\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(e){return e.theme.space[7]}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.colors.lightred})),S=w.ZP.span(o||(o=(0,v.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n  font-family: 'Roboto-Medium';\n\n  text-decoration: none;\n  text-align: center;\n"]))),Z=w.ZP.input(s||(s=(0,v.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n  font-family: 'Roboto-Medium';\n  padding: ","px;\n\n  text-decoration: none;\n\n  border-radius: 8px;\n  border: none;\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  :enabled {\n    outline-color: ",";\n  }\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.colors.red})),k=t(184),C=function(e){var n=e.onSubmit,t=(0,l.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,k.jsx)("section",{children:(0,k.jsxs)(j,{className:"SearchForm",onSubmit:function(e){e.preventDefault(),a.length<2||!a.trim()?d().Notify.failure("Type the show's name"):(n(a),o(""),e.target.reset())},children:[(0,k.jsx)(y,{type:"submit",className:"SearchForm-button",children:(0,k.jsx)(S,{className:"SearchForm-button-label",children:"Search"})}),(0,k.jsx)(Z,{name:"searchValue",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search TV shows",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},N=t(245),P=function(){var e,n=(0,l.useState)([]),t=(0,i.Z)(n,2),r=t[0],a=t[1],o=(0,l.useState)("false"),s=(0,i.Z)(o,2),u=s[0],h=s[1],v=(0,l.useState)(null),w=(0,i.Z)(v,2),j=w[0],y=w[1],S=(0,f.lr)(),Z=(0,i.Z)(S,2),P=Z[0],T=Z[1],z=(0,x.TH)(),q=null!==(e=P.get("query"))&&void 0!==e?e:"";(0,l.useEffect)((function(){function e(){return(e=(0,c.Z)(p().mark((function e(){var n,t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q){e.next=3;break}return a([]),e.abrupt("return");case 3:if(h("true"),e.prev=4,!(n=localStorage.getItem("query"))||n!==q){e.next=11;break}r=JSON.parse(localStorage.getItem("response")),t=r,e.next=16;break;case 11:return e.next=13,(0,g.z)(q);case 13:t=e.sent,localStorage.setItem("query",q),localStorage.setItem("response",JSON.stringify(t));case 16:0===t.length&&d().Notify.failure("Sorry, nothing found with this search"),a((function(e){return t})),h("false"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),y(e.t0);case 24:case"end":return e.stop()}}),e,null,[[4,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[q]);return(0,k.jsxs)("section",{children:[(0,k.jsxs)(m.W2,{children:[(0,k.jsx)(C,{onSubmit:function(e){T(""!==e?{query:e}:"")}}),(0,k.jsx)(m.Pi,{children:r.map((function(e){var n,t=e.show,r=t.image,a=t.id,o=t.name,s=t.rating;return(0,k.jsx)(m.HC,{children:(0,k.jsxs)(f.rU,{to:"".concat(a),state:{from:z},children:[(0,k.jsx)(m.Ei,{src:r?r.original:b,alt:o}),(0,k.jsxs)(m.Pk,{children:[(0,k.jsx)(m.mC,{children:o}),(0,k.jsxs)(m.Tp,{children:[(0,k.jsx)("b",{children:"User score:"})," ",null!==(n=s.average)&&void 0!==n?n:"is not available yet..."]})]})]})},a)}))})]}),"true"===u&&(0,k.jsx)(N.a,{}),null!==j&&(0,k.jsx)(m.Bc,{children:j.message})]})}},830:function(e,n,t){t.d(n,{T:function(){return i},z:function(){return c}});var r=t(861),a=t(757),o=t.n(a),s=t(243).Z.create({baseURL:"https://api.tvmaze.com/",headers:{"Content-Type":"application/json"}}),c=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/shows?q=".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("shows/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},660:function(e,n,t){e.exports=t.p+"static/media/else.4421c7d0378f67f854d0.jpg"}}]);
//# sourceMappingURL=867.65e813c9.chunk.js.map