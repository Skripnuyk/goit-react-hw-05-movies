"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[214],{214:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,o,c,s=t(433),u=t(439),a=t(576),l=t(791),h=t(168),d=t(444),f=d.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n"]))),p=d.ZP.button(i||(i=(0,h.Z)(["\n  height: 28px;\n  width: 28px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  cursor: pointer;\n  :hover,\n  :active {\n    background-color: #1111;\n  }\n"]))),x=d.ZP.span(o||(o=(0,h.Z)(["\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  list-style: none;\n"]))),m=d.ZP.input(c||(c=(0,h.Z)(["\n  width: 200px;\n  height: 28px;\n  border-radius: 4px;\n  font-size: 14px;\n"]))),g=t(184),v=function(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,u.Z)(t,2),i=r[0],o=r[1],c=function(){o("")};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(f,{onSubmit:function(n){n.preventDefault(),""!==i.trim()?(e(i),c()):alert("Search query can not be empty.")},children:[(0,g.jsx)(p,{type:"submit",children:(0,g.jsx)(x,{children:"\ud83d\udd0d"})}),(0,g.jsx)(m,{onChange:function(n){var e=n.currentTarget.value;o(e)},value:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films in database"})]})})},b=t(87),j=t(689),y=t(252),Z=function(){var n,e=(0,l.useState)([]),t=(0,u.Z)(e,2),r=t[0],i=t[1],o=(0,b.lr)(),c=(0,u.Z)(o,2),h=c[0],d=c[1],f=null!==(n=h.get("query"))&&void 0!==n?n:"",p=(0,j.TH)();return(0,l.useEffect)((function(){if(f)try{(0,y.Wf)(f).then((function(n){i((0,s.Z)(n.results))}))}catch(n){console.log(n)}}),[f]),(0,g.jsxs)(a.E,{children:[(0,g.jsx)(v,{onSubmit:function(n){d(""!==n?{query:n}:{})}}),0===r.length&&""!==f&&(0,g.jsx)("p",{children:"The search has not given any results"}),r.length>0&&(0,g.jsxs)("h1",{children:["Search results for keyword ",(0,g.jsx)("em",{children:f}),":"]}),(0,g.jsx)("ul",{children:r.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsx)(b.rU,{to:"".concat(n.id),state:{from:p},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=214.570460d0.chunk.js.map