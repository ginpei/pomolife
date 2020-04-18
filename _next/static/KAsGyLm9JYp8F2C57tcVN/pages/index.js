(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery;return n||i&&(void 0!==a&&a)}t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"0Gl6":function(e,t,n){e.exports={TimerActivityItem:"TimerActivityItem_TimerActivityItem__2AYjn",container:"TimerActivityItem_container__SDuw_",feeling:"TimerActivityItem_feeling__11wUy",title:"TimerActivityItem_title__zWByr",time:"TimerActivityItem_time__31l60",settings:"TimerActivityItem_settings__2tcju"}},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("ODXe"),i=n("8Kt/"),a=n.n(i),o=n("q1tI"),u=n.n(o),c=n("7iiI"),l=[{emoji:"\ud83d\ude0e",id:"1",label:"Working"},{emoji:"\ud83c\udfae",id:"2",label:"Having fun"},{emoji:"\ud83c\udfc3\ud83c\udffd",id:"3",label:"Exercising"},{emoji:"\ud83c\udf75",id:"4",label:"Having break"}],s={emoji:"\u23f8\ufe0f",id:"none",label:"(None)"},f={emoji:"\u2699",id:"setting",label:"Settings"},d=n("NIPz"),m=n.n(d),p=u.a.createElement,_=function(e){var t=e.currentTask,n=e.onSelect,i=t!==s,a=Object(c.f)(),o=Object(r.a)(a,1)[0],u=Object(c.a)(o),d=Object(r.a)(u,2),_=d[0],b=d[1],g=b.getTime()-o;return p("div",{className:"".concat(m.a.TimerConsole," ui-container")},p("h1",{className:"".concat(m.a.heading," ui-center")},"Current Sprint"),p("div",{className:"".concat(m.a.clock," ui-center")},Object(c.d)(_)," - ",Object(c.d)(b)),p("div",{className:"".concat(m.a.remaining," ui-center"),"data-active":i},Object(c.b)(g),p(v,{now:o})),p("div",{className:m.a.taskList},p(y,{active:s===t,onClick:n,task:s}),l.map((function(e){return p(y,{active:e===t,key:e.id,onClick:n,task:e})})),p(y,{active:!1,onClick:n,isSystem:!0,task:f})))},y=function(e){var t=e.isSystem,n=void 0!==t&&t,r=e.task;return p("button",{className:m.a.TaskButton,"data-active":e.active,"data-system":n,onClick:function(){return e.onClick(r)}},p("span",{role:"img","aria-label":""},r.emoji),p("span",{className:m.a.TaskButton_label},r.label))},v=function(e){var t=e.now,n=0!==t&&t%1e3<500;return p("span",{className:m.a.RunningIndicator,"data-on":n},".")};Object.freeze({"":"",bad:"bad",good:"good",great:"great"});var b=new Date;b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);var g=[{endAt:15860214e5,feeling:"great",id:"100",startAt:15860196e5,title:"Breaking"},{endAt:1586025e6,feeling:"bad",id:"101",startAt:15860232e5,title:"Breaking"},{endAt:15860286e5,feeling:"bad",id:"102",startAt:15860268e5,title:"Breaking"},{endAt:15860322e5,feeling:"great",id:"103",startAt:15860304e5,title:"Breaking"},{endAt:15860358e5,feeling:"great",id:"104",startAt:1586034e6,title:"Working"},{endAt:15860394e5,feeling:"great",id:"105",startAt:15860376e5,title:"Breaking"},{endAt:1586043e6,feeling:"great",id:"106",startAt:15860412e5,title:"Working"},{endAt:15860466e5,feeling:"great",id:"107",startAt:15860448e5,title:"Breaking"},{endAt:15860502e5,feeling:"good",id:"108",startAt:15860484e5,title:"Breaking"},{endAt:15860538e5,feeling:"great",id:"109",startAt:1586052e6,title:"Working"}];var h=n("qh/X"),w=n.n(h),k=u.a.createElement,j=function(e){var t,n=e.feeling,r=e.onClick,i=e.selected,a=function(e){return"great"===e?"\ud83d\ude04":"good"===e?"\ud83d\ude42":"bad"===e?"\ud83d\ude30":""}(n);"great"===n?t="Great!":"good"===n?t="Good":"bad"===n&&(t="Bad...");return k("button",{className:w.a.FeelingButton,"data-selected":i,onClick:function(){return r(n)}},a,k("br",null),t)},O=function(e){var t=e.activity,n=e.onSelect,r=null!==t,i=function(e){return n(t,e)};return k("div",{className:w.a.ActivityEditPopup,"data-visible":r},k("div",{className:"ui-container"},k("div",{className:w.a.inner},k("button",{className:w.a.dismiss,onClick:function(){return n(t,null)}},"\xd7"),k("h1",{className:w.a.heading},k("span",{role:"img","aria-label":""},"\ud83d\udd14")," ","How was the sprint?"),k("div",{className:w.a.feelingList},["great","good","bad"].map((function(e){return k(j,{feeling:e,key:e,onClick:i,selected:e===(null===t||void 0===t?void 0:t.feeling)})}))))))},A=n("a6RD"),T=n.n(A),S=u.a.createElement,C=function(e){var t=e.feeling;return"great"===t?S(u.a.Fragment,null,"\ud83d\ude04"):"good"===t?S(u.a.Fragment,null,"\ud83d\ude42"):"bad"===t?S(u.a.Fragment,null,"\ud83d\ude30"):null},E=n("0Gl6"),P=n.n(E),x=u.a.createElement,I=T()((function(){return n.e(8).then(n.bind(null,"dmi1"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["dmi1"]},modules:["../basics/DateTime"]}}),M=function(e){var t=e.activity,n=e.onClick,r=e.selected;return x("article",{className:P.a.TimerActivityItem,"data-selected":r,onClick:function(){return n(t)}},x("div",{className:"".concat(P.a.container," ui-container")},x("span",{className:P.a.feeling},x(C,{feeling:t.feeling})),x("h1",{className:P.a.title},t.title),x("span",{className:P.a.time},x(I,{time:t.startAt}),"- (",Object(c.b)(t.endAt-t.startAt),")"),x("span",{className:P.a.settings},"\u2699")))},N=n("9QIl"),D=n.n(N),R=u.a.createElement,F=function(e){return R("div",{className:D.a.TimerForm},R("div",{className:D.a.portForm},R("input",{type:"text",className:D.a.title,placeholder:"(e.g. Homework, Game, Exercise)"}),R("button",{className:D.a.buttons},"Add")))},L=n("wlKt"),B=n.n(L),q=u.a.createElement;t.default=function(){var e=function(){var e=Object(o.useState)(Object(o.createRef)())[0],t=e.current;return[e,t?function(e){return{el:e,ready:!0,play:function(){e.currentTime=0,e.play()},stop:function(){e.pause()}}}(t):{ready:!1}]}(),t=Object(r.a)(e,2),n=t[0],i=t[1],u=Object(o.useState)(s),l=u[0],d=u[1],m=Object(o.useState)(g),p=m[0],y=m[1],v=Object(o.useState)(null),b=v[0],h=v[1],w=Object(o.useState)(0),k=w[0],j=w[1],A=function(e){b&&e?(h(null),window.setTimeout((function(){return h(e)}),100)):h(e)};Object(c.e)((function(e){if(l!==s){i.ready&&i.play();var t=p[p.length-1],n=Math.max(t.endAt,k),r={endAt:e,feeling:"",id:"".concat(Math.random).slice(2),startAt:n,title:l.label};p.push(r),y(p),A(r)}}));var T=function(e){A(b===e?null:e)};return q("div",{className:B.a.TimerPage},q(a.a,null,q("title",null,"Pomolife"),q("link",{rel:"shortcut icon",type:"image/png",href:"/images/icons/icon-512x512.png"}),q("link",{rel:"apple-touch-icon",type:"image/png",href:"/images/icons/icon-512x512.png"}),q("link",{rel:"manifest",href:"/manifest.json"}),q("meta",{name:"theme-color",content:"#003366"}),q("meta",{name:"version",content:"v".concat("0.2.4")})),q("header",{className:B.a.header},q(_,{currentTask:l,onSelect:function(e){e!==f&&(d(e),j(Date.now()))}})),q("div",{className:B.a.body},q("div",{className:B.a.activityList},p.map((function(e){return q(M,{activity:e,key:e.endAt,onClick:T,selected:e===b})})))),q("footer",{className:B.a.footer},q("div",{className:"ui-container"},q(F,null))),q(O,{activity:b,onSelect:function(e,t){i.ready&&i.stop(),e&&null!==t&&(e.feeling=t,y(p)),A(null)}}),q("audio",{ref:n,src:"/D0002070098_00000_A_001.m4a"}))}},"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ");function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=u(n("q1tI")),l=n("8L3h"),s=n("jwwS"),f=[],d=[],m=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function _(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var i=p(e[r]);i.loading?t.loading=!0:(t.loaded[r]=i.loaded,t.error=i.error),n.push(i.promise),i.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return c.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function v(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),r=null;function i(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack){var o=n.webpack();d.push((function(e){var t,n=a(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return i()}}catch(u){n.e(u)}finally{n.f()}}))}var u=function(e,t){i();var a=c.default.useContext(s.LoadableContext),o=l.useSubscription(r);return c.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),o.loading||o.error?c.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?n.render(o.loaded,e):null};return u.preload=function(){return i()},u.displayName="LoadableComponent",c.default.forwardRef(u)}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return v(p,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(_,e)},g.preloadAll=function(){return new Promise((function(e,t){h(f).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};h(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady,t.default=g},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7iiI":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s}));var r=n("ODXe"),i=n("q1tI");function a(){var e=Object(i.useState)(0),t=e[0],n=e[1];return Object(i.useEffect)((function(){var e=window.setInterval((function(){return n(Date.now())}),100);return function(){return window.clearTimeout(e)}}),[]),[t]}function o(e){var t=a(),n=Object(r.a)(t,1)[0],o=Object(i.useState)(0),c=o[0],l=o[1],s=u(n),f=Object(r.a)(s,2)[1].getTime();if(0!==n&&f!==c){var d=c;l(f),0===d||e(d,f)}}function u(e){var t=new Date(e);t.setSeconds(0),t.setMilliseconds(0);var n=t.getMinutes();t.setMinutes(n-n%30);var r=new Date(t.getTime()+18e5);return[t,r]}function c(e){var t=Math.ceil(e/1e3);if(t<60)return"".concat(t," sec");var n=Math.ceil(t/60);return"".concat(n," min")}function l(e){return s(new Date(e))}function s(e){var t=f(e.getHours()),n=f(e.getMinutes());return"".concat(t,":").concat(n)}function f(e){if(e<0||e>=100)throw new Error("Number must be equal to or more than zero, and less than 100");var t=Math.floor(e);return e<10?"0".concat(t):"".concat(t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),a=r(n("Xuae")),o=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=i.props[l],d=r[l]||new Set;d.has(s)?a=!1:(d.add(s),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var m=a.default();function p(e){var t=e.children;return i.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(m,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}p.rewind=m.rewind,t.default=p},"9QIl":function(e,t,n){e.exports={portForm:"TimerForm_portForm__1Lj0k",buttons:"TimerForm_buttons__2wtcb",title:"TimerForm_title__2Yrsu",timer:"TimerForm_timer__3XuDA",remainingLabel:"TimerForm_remainingLabel__l9JSe",remainingTime:"TimerForm_remainingTime__28LkW",remainingRatio:"TimerForm_remainingRatio__1CFiC"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.HeadManagerContext=i.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},NIPz:function(e,t,n){e.exports={TimerConsole:"TimerConsole_TimerConsole__2Zu6G",heading:"TimerConsole_heading__1fSZj",clock:"TimerConsole_clock__3KwCy",remaining:"TimerConsole_remaining__8vfLs",RunningIndicator:"TimerConsole_RunningIndicator__kEEjC",runningIndicator:"TimerConsole_runningIndicator__V4GQO",flashing:"TimerConsole_flashing__2521W",taskList:"TimerConsole_taskList__2wQ1c",TaskButton:"TimerConsole_TaskButton__Gztiv",TaskButton_label:"TimerConsole_TaskButton_label__33RUR"}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},ODXe:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),i=n("PJYZ"),a=n("W8MJ"),o=n("a1gu"),u=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(p,l);var f,m=(f=p,function(){var e,t=u(f);if(s()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function p(e){var a;return r(this,p),a=m.call(this,e),d&&(t.add(i(a)),n(i(a))),a}return a(p,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(p,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),p}(f.Component)}},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),a=r(n("2qu3")),o=!1;function u(e,t){if(delete t.webpack,delete t.modules,!o)return e(t);var n=t.loading;return function(){return i.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=u,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var i={},o=e.modules();Object.keys(o).forEach((function(e){var t=o[e];"function"!==typeof t.then?i[e]=t:i[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=i}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)}},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.LoadableContext=i.createContext(null)},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.AmpStateContext=i.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"qh/X":function(e,t,n){e.exports={ActivityEditPopup:"ActivityEditPopup_ActivityEditPopup__2063O",inner:"ActivityEditPopup_inner__2zsce",dismiss:"ActivityEditPopup_dismiss__3D9m1",heading:"ActivityEditPopup_heading__M-Ljc",feelingList:"ActivityEditPopup_feelingList__3XS9s",FeelingButton:"ActivityEditPopup_FeelingButton__3CrKr"}},wlKt:function(e,t,n){e.exports={TimerPage:"TimerPage_TimerPage__27whw",title:"TimerPage_title__1yEBr",symbol:"TimerPage_symbol__2RCTH",header:"TimerPage_header__rsiu-",body:"TimerPage_body__28voX",footer:"TimerPage_footer__2eXm0",activityList:"TimerPage_activityList__sCDm0"}}},[["/EDR",0,1]]]);