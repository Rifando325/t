(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"0STy":function(e,t,r){"use strict";var n=r("mstN"),i=r("ERkP"),o=r.n(i),s=r("iK9c"),a=r("g3YJ"),c=o.a.createContext({items:[],addItem:function(){},removeItem:function(){},selected:void 0,setSelected:function(){}}),l=r("dDsW"),u=r("LG/d"),f=r.n(u),p=r("blkX"),d=r("Ir6W"),h=r("4zXJ"),b=r("j/s1"),v=r("AEx+"),g=r.n(v),O=r("8HIL"),m=r("V0VH"),j=Object(b.default)(g.a).withConfig({displayName:"style__StyledNavbar",componentId:"sc-1fd744j-0"})(["position:sticky;white-space:pre;color:white;scroll-behavior:smooth;text-align:center;width:100%;transform:translate3d(0,100%,0);transition:transform ease-out 300ms;will-change:transform;bottom:0;padding:"," "," calc(env(safe-area-inset-bottom) + ",");background-color:",";overflow-y:hidden;-webkit-overflow-scrolling:touch;"," &.visible{transform:translate3d(0,0,0);}& .selected{position:relative;}& .selected::after{content:'';position:absolute;background-color:white;width:4px;height:4px;border-radius:4px;top:calc(100% + 2px);left:50%;transform:translateX(-50%);}"],Object(m.spacing)("4x"),Object(m.spacing)("8x"),Object(m.spacing)("4x"),Object(m.nuDSColor)("black","default"),Object(O.breakpointsMedia)({xs:Object(b.css)(["overflow-x:auto;"]),lg:Object(b.css)(["overflow:hidden;"])}));j.displayName="StyledNavbar";var y=r("jg1C"),w=function(e){var t=e.isVisible,r=e.onClick,o=Object(i.useContext)(p.NuDsContext).formatMessage,s=Object(i.useContext)(c),a=s.items,u=s.selected,b=Object(i.useRef)(),v=Object(l.a)();return Object(i.useEffect)((function(){var e=b.current;if(e&&document&&u){var t=document.querySelector('[href="#navigation-item-'.concat(u,'"]')).offsetLeft;e.scrollLeft=t-32}}),[u]),Object(y.jsx)(j,{tag:"nav",ref:b,className:t?"visible":"","aria-label":Object(h.f)(v,"QUICK_NAV","LABEL"),children:Object.entries(a).map((function(e,t){var i=Object(n.a)(e,2),s=i[0],a=i[1];return Object(y.jsx)(f.a,{className:s===u?"selected":"",typographyProps:{variant:"paragraph1",strong:!0},color:"white",href:"#navigation-item-".concat(s),marginLeft:"".concat(t>0?"".concat(32,"px"):"0x"),onClick:function(e){Object(d.a)(e),r&&r(a)},children:o({id:a,optional:!0})},s)}))})};w.defaultProps={onClick:void 0};var k=Object(i.memo)(w),x=r("NVT0"),V=b.default.div.withConfig({displayName:"SafeAnchorOffset",componentId:"sc-1ardyad-0"})(["position:relative;",""],Object(O.breakpointsMedia)({xs:Object(b.css)(["top:-","px;"],x.a.menuHeight.mobile),md:Object(b.css)(["top:-","px;"],x.a.menuHeight.tablet),lg:Object(b.css)(["top:-","px;"],x.a.menuHeight.desktop)}));V.displayName="SafeAnchorOffset";var C=V,S=function(){var e=Object(i.useState)({}),t=e[0],r=e[1],n=Object(i.useState)(),o=n[0],s=n[1];return{items:t,addItem:function(e){var n=e.id,i=e.intlKey;t[n]=i,r(t)},removeItem:function(e){delete t[e],r(t)},selected:o,setSelected:s}};function I(e){var t=e.children,r=e.isAnchorAllowed,o=e.onClick,l=Object(i.useContext)(a.a).isVisible,u=Object(i.useState)(!1),f=u[0],p=u[1],d=Object(s.a)({intersectionOptions:{triggerOnce:!1,threshold:.01,initialInView:!0}}),h=Object(n.a)(d,2),b=h[0],v=h[1];return Object(i.useEffect)((function(){p(!v)}),[v]),Object(y.jsxs)(c.Provider,{value:S(),children:[Object(y.jsx)("span",{ref:b}),t,(!l||r)&&Object(y.jsx)(k,{isVisible:f,onClick:o})]})}I.defaultProps={onClick:void 0},I.Item=function(e){var t=e.id,r=e.intlKey,o=e.children,a=Object(i.useContext)(c),l=Object(i.useRef)(),u=Object(i.useMemo)((function(){var e=l.current;return e?.5*window.innerHeight/e.offsetHeight:.5}),[l.current]),f=Object(s.a)({intersectionOptions:{triggerOnce:!1,threshold:u>=1?1:u,rootMargin:"70px"}}),p=Object(n.a)(f,2),d=p[0],h=p[1],b=Object(i.useCallback)((function(e){l.current=e,d(e)}),[d]);return Object(i.useEffect)((function(){return a.addItem({id:t,intlKey:r}),function(){a.removeItem(t)}}),[]),Object(i.useEffect)((function(){h&&a.setSelected(t)}),[h]),Object(y.jsxs)("div",{ref:b,children:[Object(y.jsx)(C,{id:"navigation-item-".concat(t),"aria-hidden":"true"}),o]})};t.a=I},NVT0:function(e,t,r){"use strict";var n=[12,14,18,20,24,32,48,64,96,112,128],i={fontSizes:n,fontSize:n,typography:[{fontFamily:"Graphik-Regular",sources:[{url:"/fonts/Graphik/variants/Graphik-Regular.woff2",format:"woff2"},{url:"/fonts/Graphik/variants/Graphik-Regular.woff",format:"woff"},{url:"/fonts/Graphik/variants/Graphik-Regular.ttf",format:"truetype"},{url:"/fonts/Graphik/variants/Graphik-Regular.svg#Graphik-Regular",format:"svg"},{url:"/fonts/Graphik/variants/Graphik-Regular.eot?#iefix",format:"embedded-opentype"}]},{fontFamily:"Graphik-Medium",sources:[{url:"/fonts/Graphik/variants/Graphik-Medium.woff2",format:"woff2"},{url:"/fonts/Graphik/variants/Graphik-Medium.woff",format:"woff"}]}],lineHeights:[.9,1,1.125,1.25,1.5],fontWeights:{normal:400,semibold:600,bold:700},radii:[0,2,4,8],borders:[0,"1px solid","2px solid"],measures:["20em","30em","34em"],pageMaxWidth:"1328px",spacing:{unit:16},menuHeight:{mobile:64,tablet:64,desktop:56,desktopLarge:56},zIndexes:{nav:9,navMobilePanel:8,languageBar:2}};t.a=i},iK9c:function(e,t,r){"use strict";var n=r("LHL8"),i=r("ERkP");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=new Map,a=new Map,c=0;function l(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(a.has(r)||(c+=1,a.set(r,c.toString())),a.get(r)):"0":e[t]);var r})).toString()}function u(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=l(e),r=s.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},s.set(t,r)}return r}(r),i=n.id,o=n.observer,a=n.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),s.delete(i))}}function f(e){return"function"!==typeof e.children}var p=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),f(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=n.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var n=this.props,s=n.children,a=n.as,c=n.tag,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(a||c||"div",o({ref:this.handleNode},l),s)},n}(i.Component);p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var d=r("LEAp"),h=void 0;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(){var e=Object(i.useRef)(null),t=Object(i.useState)(!1),r=t[0],n=t[1],o=function(e,t){var r,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now;return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];n?(clearTimeout(r),r=setTimeout((function(){i()-n>=t&&(e.apply(h,s),n=i())}),t-(i()-n))):(e.apply(h,s),n=i())}}((function(){var t=e.current;Boolean(t)&&(t.getBoundingClientRect().top<=window.innerHeight&&(n(!0),window.removeEventListener("scroll",o)))}),1e3);return[Object(i.useCallback)((function(t){t&&(e.current=t,o(),window.addEventListener("scroll",o,{passive:!0}))}),[]),r]}var O,m={isBrowserEnv:d.a,preferScroll:!1,intersectionOptions:{triggerOnce:!0,rootMargin:"300px 0px"}},j=(O=function(e){var t=void 0===e?{}:e,r=t.threshold,n=t.delay,o=t.trackVisibility,s=t.rootMargin,a=t.root,c=t.triggerOnce,l=t.skip,f=t.initialInView,p=Object(i.useRef)(),d=Object(i.useState)({inView:!!f}),h=d[0],b=d[1],v=Object(i.useCallback)((function(e){void 0!==p.current&&(p.current(),p.current=void 0),l||e&&(p.current=u(e,(function(e,t){b({inView:e,entry:t}),t.isIntersecting&&c&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:s,threshold:r,trackVisibility:o,delay:n}))}),[Array.isArray(r)?r.toString():r,a,s,c,l,o,n]);Object(i.useEffect)((function(){p.current||!h.entry||c||l||b({inView:!!f})}));var g=[v,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g},function(e){var t=v(v({},m),e);return t.isBrowserEnv?t.preferScroll||"undefined"===typeof window.IntersectionObserver?g():O(t.intersectionOptions):[null,!1]});t.a=j}}]);
//# sourceMappingURL=b4239cd54d96bb979d0bd244149232fe59c1f440.efcca5f5cb18c3dd543e.js.map