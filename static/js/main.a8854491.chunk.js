(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(6),i=c.n(s),o=(c(11),c(12),c(4)),b=c(2),r=c.n(b),l=c(0),j=function(e){var t=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{className:r.a.buttons,children:[Object(l.jsx)("li",{className:r.a.buttonItem,children:Object(l.jsx)("button",{className:r.a.feedbackButton,type:"button",name:"good",onClick:t,children:"Good"})}),Object(l.jsx)("li",{className:r.a.buttonItem,children:Object(l.jsx)("button",{className:r.a.feedbackButton,type:"button",name:"neutral",onClick:t,children:"Neutral"})}),Object(l.jsx)("li",{className:r.a.buttonItem,children:Object(l.jsx)("button",{className:r.a.feedbackButton,type:"button",name:"bad",onClick:t,children:"Bad"})})]})})},u=function(e){var t=e.title,c=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),c]})},d=c(3),O=c.n(d),m=function(e){var t=e.good,c=e.neutral,a=e.bad,n=e.total,s=e.positive;return Object(l.jsxs)("ul",{className:O.a.list,children:[Object(l.jsxs)("li",{className:O.a.item,children:["Good: ",t]}),Object(l.jsxs)("li",{className:O.a.item,children:["Neutral: ",c]}),Object(l.jsxs)("li",{className:O.a.item,children:["Bad: ",a]}),Object(l.jsxs)("li",{className:O.a.item,children:["Total: ",n]}),Object(l.jsxs)("li",{className:O.a.item,children:["Positive percentage: ",s,"%"]})]})},h=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})};function f(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),b=i[0],r=i[1],d=Object(a.useState)(0),O=Object(o.a)(d,2),f=O[0],x=O[1],k=Object(a.useState)(0),p=Object(o.a)(k,2),N=p[0],v=p[1],_=Object(a.useState)(""),g=Object(o.a)(_,2),S=g[0],B=g[1];return Object(a.useEffect)((function(){v(c+b+f)}),[c,b,f]),Object(a.useEffect)((function(){B((c/N*100).toFixed())}),[c,N]),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{title:"Please leave feedback",children:Object(l.jsx)(j,{onLeaveFeedback:function(e){switch(e.target.name){case"good":n((function(e){return e+1}));break;case"neutral":r((function(e){return e+1}));break;case"bad":x((function(e){return e+1}))}}})}),0===N?Object(l.jsx)(h,{message:"No feedback given"}):Object(l.jsx)(u,{title:"Statistics",children:Object(l.jsx)(m,{good:c,neutral:b,bad:f,total:N,positive:S})})]})}var x=function(){return Object(l.jsx)(f,{})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={feedbackButton:"FeedbackOptions_feedbackButton__1axgk",buttonItem:"FeedbackOptions_buttonItem__23AsQ",buttons:"FeedbackOptions_buttons__jRyo4"}},3:function(e,t,c){e.exports={item:"Statistics_item__AeE7i",list:"Statistics_list__1O3lf"}}},[[14,1,2]]]);
//# sourceMappingURL=main.a8854491.chunk.js.map