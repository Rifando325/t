_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95,19],{"2In8":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"8Xbr":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/perguntas",function(){return n("F/EG")}])},Alxx:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))},"F/EG":function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),i=n.n(r),o=n("9ixD"),a=n("blkX"),c=n("g3YJ"),s=n("2Zaa"),u=n("DRS5"),l=n("QTTF"),d=n("ZLJA"),f=n("Cs6l"),p=n("gZyv"),h=n("hdzV"),b=n("0zbb"),j=n("j/s1"),g=n("vcPR"),y=j.default.ul.withConfig({displayName:"List",componentId:"sc-1uvrd6r-0"})(["width:100%;"]);y.displayName="List";var O=j.default.li.withConfig({displayName:"List__ListItem",componentId:"sc-1uvrd6r-1"})(["margin-bottom:",";"],Object(g.b)(1));O.displayName="ListItem";var m=n("LG/d"),x=n.n(m),v=n("jg1C");function w(e){var t=e.children,n=e.href;return Object(v.jsx)(x.a,{href:n,typographyProps:{marginBottom:"16x",variant:"heading4"},children:t})}var _=i.a.memo(w);var C=Object(u.a)(Object(s.a)({routeKey:"FAQ"})((function(){var e=Object(r.useContext)(a.NuDsContext).formatMessage,t=Object(r.useContext)(c.a).setVisibleWhenAllowed,n=Object(r.useState)(0),i=n[0],s=n[1];Object(r.useEffect)((function(){i>2&&t(!0)}),[i]);var u=e({id:"cms.faqPage.faqSection"}),j=u.map((function(e){return e.faqCategory.faqQuestions.map((function(e){return{questionName:b.a.forJSON(e.title),acceptedAnswerText:b.a.forJSON(e.content)}}))})).flat();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{intlKey:"cms.faqPage.pageTitle"}),Object(v.jsx)(d.a,{backgroundColor:"white.dark",children:u.map((function(e){return Object(v.jsxs)(f.a,{justifyContent:"center",blockWidth:"100%",children:[Object(v.jsx)(h.a,{id:e.faqCategory.slug}),Object(v.jsx)(_,{href:"/perguntas#".concat(e.faqCategory.slug),children:e.faqCategoryTitle}),Object(v.jsx)(y,{children:e.faqCategory.faqQuestions.map((function(e){return Object(v.jsx)(O,{children:Object(v.jsx)(p.a,{title:e.title,body:e.content,id:e.slug,handleClick:function(){s(i+1)}})},"question-".concat(e.slug))}))})]},e.faqCategory.slug)}))}),Object(v.jsx)(o.a,{mainEntity:j})]})})));t.default=C},QTTF:function(e,t,n){"use strict";n("ERkP");var r=n("j/s1"),i=n("C+fP"),o=n.n(i),a=n("8HIL"),c=n("ZLJA"),s=n("Cs6l"),u=n("vcPR"),l=n("jg1C"),d=Object(r.default)(c.a).withConfig({displayName:"OldPageSectionHeading__StyledSection",componentId:"sc-1fizt8p-0"})(["",""],Object(a.breakpointsMedia)({lg:Object(r.css)(["padding-top:","px;"],(function(e){return e.theme.menuHeight.desktopLarge}))})),f=Object(r.default)(o.a).withConfig({displayName:"OldPageSectionHeading__StyledTypography",componentId:"sc-1fizt8p-1"})(["font-size:1.875rem;line-height:1.2;letter-spacing:-0.03em;",""],Object(a.breakpointsMedia)({lg:Object(r.css)(["font-size:3rem;line-height:1.16;"])}));function p(e){var t=e.children,n=e.textAlign,r=e.intlKey;return Object(l.jsx)(d,{minHeight:"auto",backgroundColor:"primary.default",children:Object(l.jsx)(s.a,{blockWidth:"100%",padding:{desktop:u.a.vertical(8)},textAlign:n,children:Object(l.jsx)(f,{color:"white",colorVariant:"default",intlKey:r,variant:"heading2",tag:"h1",children:t})})})}p.defaultProps={textAlign:"left",children:void 0,intlKey:""},t.a=p},UFnO:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return i}))},aNP4:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},gZyv:function(e,t,n){"use strict";var r=n("2In8"),i=n("Alxx"),o=n("aNP4"),a=n("UFnO"),c=n("i3ax"),s=n("whUO"),u=n("LHL8"),l=n("ERkP"),d=n("VSrG"),f=n.n(d),p=n("C+fP"),h=n.n(p),b=n("hdzV"),j=n("j/s1"),g=n("V0VH"),y=n("LG/d"),O=n.n(y),m=n("vcPR");var x=j.default.div.withConfig({displayName:"style__Panel",componentId:"sc-qr8wk6-0"})(["width:100%;background-color:",";padding:",";",";",";"],Object(g.nuDSColor)("white"),Object(m.b)(2),(function(e){return e.rounded&&Object(j.css)(["border-radius:4px;"])}),(function(e){return e.shadow&&Object(j.css)(["box-shadow:0 1px 2px rgba(0,0,0,0.15);"])})),v=j.default.div.withConfig({displayName:"style__PanelHeader",componentId:"sc-qr8wk6-1"})(["display:flex;align-items:center;justify-content:space-between;cursor:pointer;"]),w=j.default.div.withConfig({displayName:"style__PanelBody",componentId:"sc-qr8wk6-2"})(["padding-top:","px;display:",";a{color:",";font-size:","px;margin-bottom:","px;outline:none;padding-bottom:8px;cursor:pointer;line-height:1.5;text-decoration:none;}"],(function(e){return e.open?2*e.theme.spacing.unit:0}),(function(e){return e.open?"block":"none"}),Object(g.nuDSColor)("primary"),(function(e){return e.theme.fontSizes[2]}),(function(e){return e.theme.spacing.unit*e.marginBottom})),_=j.default.i.withConfig({displayName:"style__IconWrapper",componentId:"sc-qr8wk6-3"})(["display:flex;padding-left:",";"],Object(m.b)(1)),C=Object(j.default)(O.a).withConfig({displayName:"style__PanelLink",componentId:"sc-qr8wk6-4"})(["flex-grow:1;&:hover{text-decoration:none;}&:focus{outline:none;}"]),P=n("jg1C");function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var i=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var N=function(e){Object(a.a)(n,e);var t=k(n);function n(e){var i;return Object(r.a)(this,n),i=t.call(this,e),Object(u.a)(Object(o.a)(i),"handlePanelHeaderClick",(function(){var e=i.props.handleClick;i.setState((function(e){return{collapsed:!e.collapsed}})),e()})),Object(u.a)(Object(o.a)(i),"renderPanelHeading",(function(e){return Object(P.jsx)(h.a,{variant:"heading4",color:"black",colorVariant:"light",tag:"h3",children:e})})),i.state={collapsed:!0},i}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.body,r=e.id,i=e.rounded,o=e.shadow,a=e.className,c=this.state.collapsed;return Object(P.jsxs)(x,{className:a,rounded:i,shadow:o,children:[r&&Object(P.jsx)(b.a,{id:r,offsetTop:"-120px"}),Object(P.jsxs)(v,{onClick:this.handlePanelHeaderClick,children:[r?Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(C,{href:"#".concat(r),children:this.renderPanelHeading(t)})}):this.renderPanelHeading(t),Object(P.jsx)(_,{children:c?Object(P.jsx)(f.a,{name:"plus",color:"primary"}):Object(P.jsx)(f.a,{name:"minus",color:"primary"})})]}),Object(P.jsx)(w,{open:!c,children:Object(P.jsx)(h.a,{tag:"div",children:Object(P.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})})]})}}]),n}(l.PureComponent);N.defaultProps={id:"",rounded:!0,shadow:!0,className:null,handleClick:function(){}};t.a=N},hdzV:function(e,t,n){"use strict";var r=n("17x9"),i=n.n(r),o=n("j/s1").default.div.withConfig({displayName:"style__SafeAnchorOffset",componentId:"sc-chnne5-0"})(["display:block;position:relative;visibility:hidden;top:",";"],(function(e){return e.offsetTop}));o.defaultProps={offsetTop:"-6.25rem"},o.propTypes={id:i.a.string.isRequired,offsetTop:i.a.string};t.a=o},i3ax:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("i2RQ"),i=n.n(r),o=n("aNP4");function a(e,t){if(t&&("object"===i()(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(o.a)(e)}},whUO:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))}},[["8Xbr",2,1,0,3,4,5,6,7,8,9,10,11,12,13,15]]]);
//# sourceMappingURL=perguntas-f31a8e98ed6515a37b9b.js.map