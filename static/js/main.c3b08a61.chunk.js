(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,a){e.exports={weatherLogo:"CityComponent_weatherLogo__2_ITe",chooseCityLabel:"CityComponent_chooseCityLabel__3Rgad",searchBox:"CityComponent_searchBox__PMBaY"}},29:function(e,t,a){"use strict";t.a=a.p+"static/media/perfect-day.5156c281.svg"},31:function(e,t,a){e.exports={box:"Animate_box__3TXIC",animatebox:"Animate_animatebox__261yj"}},44:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n,r,c,i,l,o=a(0),s=a.n(o),u=a(8),p=a.n(u),h=(a(44),a(13)),m=a.n(h),d=a(15),f=a(12),E=a(9),b=a(30),v=a.n(b),x=a(10),_=a(29),y=a(14),w=a.n(y),O=s.a.forwardRef((function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{className:w.a.weatherLogo,src:_.a,alt:"Perfect-Day"}),s.a.createElement("span",{className:w.a.chooseCityLabel},"Find Weather Of Your City"),s.a.createElement("form",{className:w.a.searchBox,onSubmit:e.onClickSearch},s.a.createElement("input",{type:"text",placeholder:"City",id:"city",ref:t}),s.a.createElement("button",{id:"search_btn"},"Search")))})),j=a(35),g=a.n(j),C=a(31),S=a.n(C);function A(){return s.a.createElement("div",{className:S.a.box},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null))}var R=s.a.lazy((function(){return a.e(3).then(a.bind(null,86))})),k=x.a.div(n||(n=Object(E.a)(['\n  font-family: "Open Sans", sans-serif;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: linear-gradient(#035397, #eee);\n']))),T=Object(x.b)(r||(r=Object(E.a)(["\n    0%{\n        opacity: 0;\n        transform: translateY(-100%);\n      }\n\n    80%{\n      transform: translateY(10%);\n    }\n\n    100%{\n        opacity: 1;\n        transform: translateY(0);\n      }\n"]))),H=x.a.div(c||(c=Object(E.a)(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  box-shadow: 0 3px 6px 0 #555;\n  background: white;\n  width: 25%;\n  padding: 20px 10px;\n  border-radius: 4px;\n  font-family: "Montserrat";\n  animation: '," 500ms linear;\n      @media(max-width: 500px){\n        width: 80%;\n      }\n\n      @media(min-width:500px) and (max-width: 1000px){\n        width: 50%;\n      }\n"])),T),L=x.a.span(i||(i=Object(E.a)(["\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n"]))),W=x.a.div(l||(l=Object(E.a)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n"]))),N="2d81fef83b338fbb183f884a19152898",F={searchWeatherState:!0};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_WEATHER_TRUE":return{searchWeatherState:!0};case"SEARCH_WEATHER_FALSE":return{searchWeatherState:!1};default:return e}}var D=function(){var e=Object(o.useReducer)(I,F),t=Object(f.a)(e,2),a=t[0].searchWeatherState,n=t[1],r=Object(o.useRef)(),c=Object(o.useState)(),i=Object(f.a)(c,2),l=i[0],u=i[1],p=Object(o.useState)(),h=Object(f.a)(p,2),E=h[0],b=h[1],x=Object(o.useState)(!1),_=Object(f.a)(x,2),y=_[0],w=_[1];Object(o.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=11;break}return e.prev=1,e.next=4,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&appid=").concat(N));case 4:t=e.sent,b(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]);var j=function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=r.current.value,n({type:"SEARCH_WEATHER_FALSE"}),u(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=Object(o.useCallback)(j,[]),S=s.a.createElement(O,{ref:r,onClickSearch:C});y||!E||a?y&&(S=s.a.createElement("div",{style:{color:"#FF3D68"}},"Please Enter Correct City Name")):S=s.a.createElement(o.Suspense,{fallback:s.a.createElement("div",null,"Loading...!")},s.a.createElement(R,{weatherInfo:E}));var T=null;return(E&&!a||y)&&(T=s.a.createElement(W,{onClick:function(){n({type:"SEARCH_WEATHER_TRUE"}),b(null),w(!1)}},s.a.createElement(g.a,null))),s.a.createElement(k,null,s.a.createElement(A,null),s.a.createElement(H,null,s.a.createElement(L,null,"React Weather App"),T,S))},Y=a(7),B={city:null,weather:null,error:!1},P=a(17),M=a(37),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.a,X=Object(P.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CITY":return Object(Y.a)(Object(Y.a)({},e),{},{city:t.city});case"CHANGE_WEATHER":return Object(Y.a)(Object(Y.a)({},e),{},{weather:t.weather,error:!1});case"FETCH_FAILED":return Object(Y.a)(Object(Y.a)({},e),{},{error:!0});default:return e}}),U());p.a.render(s.a.createElement(M.a,{store:X},s.a.createElement(D,null)),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c3b08a61.chunk.js.map