(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"/QEs":function(t,e,n){"use strict";n.r(e);var r=n("ODXe"),o=n("q1tI"),a=n.n(o),i=n("Z/Ii"),c=n("3fX4"),u=n("rA8r"),l=n("wlLw"),s=n("Mbfr"),f=n.n(s),p=a.a.createElement,d=function(t){var e=t.cycle;return p("option",{className:"PeriodOption",value:e},"".concat(60/e," min"))};e.default=function(){var t=Object(l.d)(),e=Object(r.a)(t,2),n=e[0],s=e[1],v=Object(o.useState)(2),y=v[0],b=v[1],h=Object(o.useCallback)((function(t){var e=t.currentTarget.value,n=Number(e);if(!Object(u.a)(n))throw new Error("Invalid cycle");b(n),s({data:{sprintCycle:n},type:"settings/sprintCycle/set"})}),[]);return Object(o.useEffect)((function(){Object(l.b)().then((function(t){s({data:t,type:"settings/whole/set"}),b(t.sprintCycle)}))}),[]),Object(o.useEffect)((function(){n&&Object(l.c)(n)}),[n]),n?p("div",{className:"SettingsPage ".concat(f.a.root)},p(i.a,{title:"Settings"}),p("div",{className:"ui-container"},p("h1",null,"Settings"),p("h2",null,"Sprint"),p("label",null,"Period: ",p("select",{onChange:h,value:y},u.b.map((function(t){return p(d,{cycle:t,key:t})}))))),p(c.a,null)):p(a.a.Fragment,null,"\u2026")}},"3fX4":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("hkoD"),i=n.n(a),c=o.a.createElement,u=function(t){var e=t.link,n=t.children,o=Object(r.useState)(""),a=o[0],u=o[1],l=Object(r.useMemo)((function(){return e===a}),[a]);return Object(r.useEffect)((function(){return u(window.location.pathname)}),[]),c("a",{className:i.a.TabItem,"data-on":l,href:e},n)};e.a=function(){return c("div",{className:"MainTabs ".concat(i.a.root)},c("div",{className:"ui-container ".concat(i.a.container)},c(u,{link:"/"},"\ud83c\udfe0"),c(u,{link:"/logs"},"\ud83d\udcca"),c(u,{link:"/settings"},"\u2699")))}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],p=r[l]||new Set;p.has(s)?a=!1:(p.add(s),r[l]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=a.default();function v(t){var e=t.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}v.rewind=d.rewind,e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},Mbfr:function(t,e,n){t.exports={root:"settings_root__2QauL"}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},ODXe:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||a()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("a1gu"),c=n("Nsbk"),u=n("7W2i"),l=n("RIqP");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){u(v,l);var f,d=(f=v,function(){var t,e=c(f);if(s()){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function v(t){var a;return r(this,v),a=d.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(v,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(v,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(f.Component)}},"Z/Ii":function(t,e,n){"use strict";var r=n("8Kt/"),o=n.n(r),a=n("q1tI"),i=n.n(a).a.createElement;e.a=function(t){var e=t.title,n=e?"".concat(e," | ").concat("Pomolife"):"Pomolife";return i(o.a,null,i("title",null,n),i("link",{rel:"shortcut icon",type:"image/png",href:"/images/icons/icon-512x512.png"}),i("link",{rel:"apple-touch-icon",type:"image/png",href:"/images/icons/icon-512x512.png"}),i("link",{rel:"manifest",href:"/manifest.json"}),i("meta",{name:"theme-color",content:"#003366"}),i("meta",{name:"version",content:"v".concat("0.3.2")}))}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},hkoD:function(t,e,n){t.exports={root:"MainTabs_root__3ViLH",container:"MainTabs_container__2feLD",TabItem:"MainTabs_TabItem__2jizr"}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},rA8r:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=[1,2,4,6,12,60];function o(t){return r.includes(t)}},rrX4:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n("/QEs")}])},wlLw:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return y}));var o=n("o0o1"),a=n.n(o),i=n("q1tI"),c=n("rA8r");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s="pomolife-settings",f={sprintCycle:2};function p(){var t,e,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=localStorage.getItem(s)){r.next=3;break}return r.abrupt("return",f);case 3:if(e=JSON.parse(t),n=Number(e.sprintCycle),Object(c.a)(n)){r.next=7;break}throw new Error("Invalid sprint cycle");case 7:return r.abrupt("return",{sprintCycle:n});case 8:case"end":return r.stop()}}),null,null,null,Promise)}function d(t){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e=JSON.stringify(t),localStorage.setItem(s,e);case 2:case"end":return n.stop()}}),null,null,null,Promise)}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i.useReducer)((function(t,e){var n=e.data,r=e.type;return"settings/whole/set"===r?l({},n):"settings/sprintCycle/set"===r?l({},t,{sprintCycle:n.sprintCycle}):t}),t)}var y=Object(i.createContext)([null,function(){}])}},[["rrX4",0,1,2]]]);