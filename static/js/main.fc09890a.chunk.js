(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{56:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(6),s=n.n(c),a=n(0),i=n(5),u=n(4),o=n.n(u),d=n(7),l=n(22),p=n.n(l),f=n(23),j=n.n(f).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),h=function(e){return function(){var t=Object(d.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=Object(i.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))((function(e){var t=e.user;return Object(r.jsx)("div",{className:"header",children:t?t.name:null})})),v=Object(i.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(d.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:p.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(h(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})((function(e){var t=e.fetchPostsAndUsers,n=e.posts;return Object(a.useEffect)((function(){t()}),[t]),Object(r.jsx)("div",{className:"ui relaxed divided list",children:n.map((function(e){return Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("i",{className:"large middle aligned icon user"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.body})]}),Object(r.jsx)(b,{userId:e.userId})]})]},e.id)}))})})),O=function(){return Object(r.jsx)("div",{className:"ui container",children:Object(r.jsx)(v,{})})},x=n(3),m=n(24),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},g=n(25),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(g.a)(e),[t.payload]);default:return e}},E=Object(x.c)({posts:y,users:w}),N=Object(x.d)(E,Object(x.a)(m.a));s.a.render(Object(r.jsx)(i.a,{store:N,children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.fc09890a.chunk.js.map