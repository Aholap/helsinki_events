(this.webpackJsonphelsinkiapi=this.webpackJsonphelsinkiapi||[]).push([[0],{23:function(e,t,n){e.exports=n(63)},43:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(5),r=n.n(l),i=n(8),c=n.n(i),u=n(21),s=n(3),m=n(29),d=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],d=c[1],p=m.htmlToDOM(e.page.description.body),f=m.domToReact(p);return l?o.a.createElement("div",null,o.a.createElement("button",{className:"button",onClick:function(){return r(!1===l)}},"- ",e.page.name.fi," "),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,e.page.name.en),o.a.createElement("p",null,"Miss\xe4 ja milloin? : ",e.page.where_when_duration.where_and_when?e.page.where_when_duration.where_and_when:"Ei tietoa"),o.a.createElement("p",null,"Kesto: ",e.page.where_when_duration.duration?e.page.where_when_duration.duration:"Ei tietoa"),o.a.createElement("p",null,"Sivut :",o.a.createElement("a",{href:e.page.info_url},e.page.info_url)),o.a.createElement("button",{className:"button",onClick:function(){return d(!1===u)}},u?"- Less Info":"+ More Info"),u?f:null)):o.a.createElement("button",{className:"button",onClick:function(){return r(!1===l)}},"+ ",e.page.name.fi," ")},p=(n(43),n(22)),f=n.n(p),h=n(4),E=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),l=n[0],r=n[1],i=e.data;console.log(null===l);return null===l?o.a.createElement(h.d,{key:i.id,onRightClick:function(){return r(1)},title:i.name.fi+" (right click for more info)",onClick:e.setC,position:{lat:i.location.lat,lng:i.location.lon},zoom:9}):o.a.createElement("div",null,o.a.createElement(h.d,{key:i.id,title:i.name.fi+"(right click for more info)",onClick:e.setC,position:{lat:i.location.lat,lng:i.location.lon},zoom:9}),o.a.createElement((function(){return o.a.createElement(h.b,{key:i.id,onCloseClick:function(){return r(null)},onLoad:function(){return console.log("LOL")},position:{lat:i.location.lat,lng:i.location.lon}},o.a.createElement("div",null,i.name.fi+"\n",o.a.createElement("a",{href:i.info_url},i.info_url)))}),null))};n(60).config();var g=function(){var e=Object(a.useState)({lat:60.192059,lng:24.945831}),t=Object(s.a)(e,2),n=t[0],l=t[1],r=Object({NODE_ENV:"production",PUBLIC_URL:""}).KEY,i=Object(a.useState)(null),m=Object(s.a)(i,2),p=m[0],g=m[1],b=null;Object(a.useEffect)((function(){b=document.getElementById("toTop")}));window.onscroll=function(){console.log(b),b&&(document.body.scrollTop>1e3||document.documentElement.scrollTop>1e3?b.style.display="block":b.style.display="none")};var w=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://tranquil-brushlands-44401.herokuapp.com/events");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w().then((function(e){return g(e.data)}))}),[]),null===p?o.a.createElement("div",{className:"loader"},"Loading.."):o.a.createElement("div",{className:"sub-bod"},o.a.createElement("button",{id:"toTop",className:"topButton",onClick:function(){return document.body.scrollTop=550,void(document.documentElement.scrollTop=550)}},"Scroll to top"),o.a.createElement("h1",{className:"App-header"},"Tapahtumat Helsingiss\xe4"),o.a.createElement(h.c,{id:"script-loader",googleMapsApiKey:r},o.a.createElement(h.a,{id:"circle-example",mapContainerStyle:{height:400,width:window.width,position:"relative"},zoom:9,center:n},p.map((function(e){return o.a.createElement(E,{key:e.id,setC:function(){return l({lat:e.location.lat,lng:e.location.lon})},data:e})})))),p.map((function(e){return o.a.createElement(d,{key:e.id,page:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.727bc891.chunk.js.map