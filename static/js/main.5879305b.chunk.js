(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n.n(c),j=n(5),s=(n(16),n(0)),a=n(2),i=n(1),o=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"30px"},children:[Object(i.jsx)("div",{children:Object(i.jsx)(j.b,{style:{color:"black",lineHeight:"10px",textDecoration:"none"},to:"/",children:"Home"})}),Object(i.jsx)("div",{children:Object(i.jsx)(j.b,{style:{color:"black",lineHeight:"10px",textDecoration:"none"},to:"/people",children:"People"})})]})})},b=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{children:"Home page"})})},l=n(9),h=n(4),d=n(11),x=n(8),p=n.n(x),O="https://mate-academy.github.io/react_people-table/api/people.json";function u(){return(u=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Server failed to load");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){var t=e.person;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.name}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{children:t.motherName}),Object(i.jsx)("td",{children:t.fatherName})]})},m=function(e){var t=e.people;return Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]}),t.map((function(e){return Object(i.jsx)(f,{person:e})}))]})},v=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){(function(){return u.apply(this,arguments)})().then((function(e){var t=e.map((function(t){var n=e.find((function(e){return e.name===t.fatherName})),c=e.find((function(e){return e.name===t.motherName}));return Object(l.a)(Object(l.a)({},t),{},{mother:c,father:n})}));c(t)}))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"People page"}),Object(i.jsx)(m,{people:n})]})},g=function(){return Object(i.jsx)("h1",{children:"Page not found"})},y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"People table"}),Object(i.jsx)(o,{}),Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{path:"/people",element:Object(i.jsx)(v,{})}),Object(i.jsx)(a.b,{path:"/home",element:Object(i.jsx)(a.a,{to:"/"})}),Object(i.jsx)(a.b,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(a.b,{path:"*",element:Object(i.jsx)(g,{})})]})]})};r.a.render(Object(i.jsx)(j.a,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5879305b.chunk.js.map