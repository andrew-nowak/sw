(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,t){e.exports=t(12)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(3),c=t.n(r),i=(t(10),t(1)),l=(t(11),function(e){var n=e.data;return n&&n.length?a.a.createElement("ul",null,n.map(function(e){return a.a.createElement("li",{key:e},e)})):a.a.createElement("p",null,"There wasn't any data found for this, sorry!")}),s=["default","happy","sad","angry"],u=function(){var e=Object(o.useState)("default"),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)([]),u=Object(i.a)(c,2),f=u[0],d=u[1];return Object(o.useEffect)(function(){fetch("".concat("/sw","/data/").concat(t,".json")).then(function(e){return e.json()}).then(d)},[t]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("nav",null,a.a.createElement("ul",null,s.map(function(e){return a.a.createElement("li",{key:e},a.a.createElement("button",{onClick:function(){return r(e)}},e))})))),a.a.createElement("main",null,a.a.createElement("h1",null,"Alternatives to ",t),a.a.createElement(l,{data:f})))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/sw","/service-worker.js");f?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):d(n,e)})}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.f2f6a42f.chunk.js.map