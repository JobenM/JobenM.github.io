(this["webpackJsonpmy-pages"]=this["webpackJsonpmy-pages"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/react-logo.0691399b.svg"},function(e,a,t){e.exports=t.p+"static/media/gatsby.2def7e70.svg"},function(e,a,t){e.exports=t.p+"static/media/graphql.6270a2d4.svg"},,function(e,a,t){e.exports=t.p+"static/media/green-checkmark.5a013bad.svg"},function(e,a,t){e.exports=t.p+"static/media/red-x.c33c3a33.svg"},function(e,a,t){e.exports=t.p+"static/media/home.27c0aebc.svg"},function(e,a,t){e.exports=t.p+"static/media/component.ac10473f.svg"},function(e,a,t){e.exports=t.p+"static/media/tech.847451b1.svg"},function(e,a,t){e.exports=t.p+"static/media/contact.5b09adca.svg"},,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),s=(t(31),t(5)),m=t(1),o=(t(32),t(14)),i=t.n(o),u=t(15),p=t.n(u),E=t(16),d=t.n(E),g=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("h2",{className:"name"},l.a.createElement("span",{className:"jay"},"J"),"oe Milne",l.a.createElement("span",{className:"location"},"London")),l.a.createElement("div",null,l.a.createElement("h1",{className:"home-title"},l.a.createElement("span",{className:"header"},"A Frontend/Fullstack Developer of web applications."),l.a.createElement("span",{className:"sub-content"},'"I create scalable web experiences for my users with quality and integrity in mind."'))))),l.a.createElement("div",{className:"react-wrapper"},l.a.createElement("img",{src:i.a,className:"logo",alt:"react-logo"})),l.a.createElement("div",{className:"gatsby-wrapper"},l.a.createElement("img",{src:p.a,className:"logo",alt:"gastby-logo"})),l.a.createElement("div",{className:"gql-wrapper"},l.a.createElement("img",{src:d.a,className:"logo",alt:"graphql-logo"})))},v=function(){return l.a.createElement("div",null,"components")},b=function(){return l.a.createElement("div",null,"Tech")},f=t(4),h=t(25),N=t(17),y=t.n(N),w=(t(35),function(e){var a=e.placeholder,t=e.label,n=e.onChange,c=e.value,r=e.isRequired;return l.a.createElement("div",{className:"input-wrapper"},l.a.createElement("div",null,l.a.createElement("span",null,t),l.a.createElement("span",null,r?l.a.createElement("span",{className:"required"},"*"):null)),l.a.createElement("input",{placeholder:a,value:c,onChange:n}))});w.defaultProps={isRequired:!1};var k=w,x=t(18),j=t.n(x),q=t(19),C=t.n(q),O=(t(36),function(e){var a=e.isSent,t=a?"Message sent!":"Oops not sent!";return l.a.createElement("div",{className:"notification"},l.a.createElement("div",{className:"model-background"}),l.a.createElement("div",{className:"model-card"},t,l.a.createElement("img",{className:"check-svg",src:a?j.a:C.a,alt:"sent-status"})))});O.defaultProps={isSent:void 0};var S=O,F=(t(37),function(){var e=Object(n.useState)({}),a=Object(h.a)(e,2),t=a[0],c=a[1],r=t.messageSubmitted||!t.message||!t.replyEmail;return l.a.createElement("div",null,l.a.createElement("form",{className:"form",name:"Contact Form"},l.a.createElement("h1",{className:"contact-header "},"Contact me"),l.a.createElement("fieldset",{className:"fields"},l.a.createElement(k,{label:"Name",placeholder:"Enter your name...",value:t.name,onChange:function(e){return c(Object(f.a)(Object(f.a)({},t),{},{name:e.target.value}))}}),l.a.createElement("br",null),l.a.createElement(k,{label:"Phone Number",placeholder:"Enter your phone number...",value:t.phoneNumber,onChange:function(e){return c(Object(f.a)(Object(f.a)({},t),{},{phoneNumber:e.target.value}))}}),l.a.createElement("br",null),l.a.createElement(k,{isRequired:!0,label:"Email",placeholder:"Enter your email...",value:t.replyEmail,onChange:function(e){return c(Object(f.a)(Object(f.a)({},t),{},{replyEmail:e.target.value}))}}),l.a.createElement("br",null),l.a.createElement("div",{className:"input-wrapper"},"Message",l.a.createElement("span",{className:"required"},"*"),l.a.createElement("textarea",{className:"message",placeholder:"Enter a message...",value:t.message,onChange:function(e){return c(Object(f.a)(Object(f.a)({},t),{},{message:e.target.value}))}})),l.a.createElement("br",null),l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("button",{disabled:r,className:"".concat(r?"button-disabled":"primary-button"," button send"),type:"submit",onClick:function(e){e.preventDefault(),y.a.send("service_gj6kb6n","template_9w5bbdt",t,"user_Gvy5EFerJiygU2R0klfg4").then((function(){c({messageSubmitted:!0})}),(function(){c({messageFailed:!0})}))},value:"Submit"},"Send"),r?l.a.createElement("span",{className:"required"},"(complete required fields)"):null))),t.messageSubmitted||t.messageFailed?l.a.createElement(S,{isSent:t.messageSubmitted}):null)}),J=t(20),M=t.n(J),R=t(21),A=t.n(R),P=t(22),_=t.n(P),B=t(23),D=t.n(B),I=(t(38),function(){return l.a.createElement("nav",{className:"nav-container"},l.a.createElement("div",{className:"nav-links"},l.a.createElement(s.b,{to:"/"},l.a.createElement("img",{src:M.a,className:"nav-icon",alt:"gastby-logo"}),l.a.createElement("span",{className:"nav-label"},"Home")),l.a.createElement(s.b,{to:"/components"},l.a.createElement("img",{src:A.a,className:"nav-icon",alt:"gastby-logo"}),l.a.createElement("span",{className:"nav-label"},"Components")),l.a.createElement(s.b,{to:"/technologies"},l.a.createElement("img",{src:_.a,className:"nav-icon",alt:"gastby-logo"}),l.a.createElement("span",{className:"nav-label"},"Technologies")),l.a.createElement(s.b,{to:"/contact"},l.a.createElement("img",{src:D.a,className:"nav-icon",alt:"gastby-logo"}),l.a.createElement("span",{className:"nav-label"},"Contact me"))))}),T=(t(44),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/components"},l.a.createElement(I,null),l.a.createElement(v,null)),l.a.createElement(m.a,{path:"/technologies"},l.a.createElement(I,null),l.a.createElement(b,null)),l.a.createElement(m.a,{path:"/contact"},l.a.createElement("div",{className:"overflow-contact"},l.a.createElement(I,null),l.a.createElement(F,null))),l.a.createElement(m.a,{path:"/"},l.a.createElement("div",{className:"hero-overflow"},l.a.createElement(I,null),l.a.createElement(g,null))))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.a0d44ce2.chunk.js.map