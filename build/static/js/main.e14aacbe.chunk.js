(this.webpackJsonphelsinkiapi=this.webpackJsonphelsinkiapi||[]).push([[0],{18:function(e,n,t){e.exports=t(42)},24:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(5),r=t.n(l),c=t(6),i=t.n(c),u=t(16),s=t(3),m=function(e){var n=Object(a.useState)(!1),t=Object(s.a)(n,2),l=t[0],r=t[1];return console.log("PAGE",e),l?o.a.createElement("div",null,o.a.createElement("button",{className:"button",onClick:function(){return r(!1===l)}}," ",e.page.name.fi," "),o.a.createElement("p",{className:"body"},e.page.name.en),o.a.createElement("p",{className:"body"},"Miss\xe4 ja milloin? : ",e.page.where_when_duration.where_and_when),o.a.createElement("p",{className:"body"},"Kesto: ",e.page.where_when_duration.duration),o.a.createElement("p",{className:"body"},"Sivut :",o.a.createElement("a",{href:e.page.info_url},e.page.info_url))):o.a.createElement("button",{className:"button",onClick:function(){return r(!1===l)}}," ",e.page.name.fi," ")},p=(t(24),t(17)),d=t.n(p),f=t(4),h=function(e){var n=Object(a.useState)(null),t=Object(s.a)(n,2),l=t[0],r=t[1],c=e.data;console.log(null===l);return null===l?o.a.createElement(f.d,{key:c.id,onRightClick:function(){return r(1)},title:c.name.fi+" (right click for more info)",onClick:e.setC,position:{lat:c.location.lat,lng:c.location.lon},zoom:9}):o.a.createElement("div",null,o.a.createElement(f.d,{key:c.id,title:c.name.fi+"(right click for more info)",onClick:e.setC,position:{lat:c.location.lat,lng:c.location.lon},zoom:9}),o.a.createElement((function(){return o.a.createElement(f.b,{key:c.id,onCloseClick:function(){return r(null)},onLoad:function(){return console.log("LOL")},position:{lat:c.location.lat,lng:c.location.lon}},o.a.createElement("div",null,c.name.fi+"\n",o.a.createElement("a",{href:c.info_url},c.info_url)))}),null))},g=function(){var e=Object(a.useState)({lat:60.192059,lng:24.945831}),n=Object(s.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(null),c=Object(s.a)(r,2),p=c[0],g=c[1],b=function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://tranquil-brushlands-44401.herokuapp.com/events");case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b().then((function(e){return g(e.data)}))}),[]),null===p?(console.log(typeof p),console.log(null==p),o.a.createElement("div",null,"null")):(console.log(p),o.a.createElement("div",{className:"sub-bod"},o.a.createElement("h1",{className:"App-header"},"Tapahtumat Helsingiss\xe4"),o.a.createElement(f.c,{id:"script-loader",googleMapsApiKey:"AIzaSyByr3VXd1vbL7HcpRizHpF-dy4yYd1_4Uo"},o.a.createElement(f.a,{id:"circle-example",mapContainerStyle:{height:"400px",width:"800px"},zoom:9,center:t},p.map((function(e){return o.a.createElement(h,{key:e.id,setC:function(){return l({lat:e.location.lat,lng:e.location.lon})},data:e})})))),p.map((function(e){return o.a.createElement(m,{key:e.id,page:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e14aacbe.chunk.js.map