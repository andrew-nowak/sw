(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(10),n(1)),u=(n(11),function(e){var t=e.data;return t&&t.length?r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e},e)})):r.a.createElement("p",null,"There wasn't any data found for this, sorry!")}),i=["default","happy","sad","angry"],s=function(){var e=Object(a.useState)("default"),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),m=s[0],d=s[1];return Object(a.useEffect)(function(){fetch("".concat("/sw","/data/").concat(n,".json")).then(function(e){return e.json()}).then(d)},[n]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement("ul",null,i.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("button",{onClick:function(){return c(e)}},e))})))),r.a.createElement("main",null,r.a.createElement("h1",null,"Alternatives to ",n),r.a.createElement(u,{data:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.8ee7ddc7.chunk.js.map