(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"01NQ":function(e,t){e.exports=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}},"4ysm":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return function(t){t.preventDefault(),window.location.href=e}}},"6z0O":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a}));var n=r("UHNZ"),i=Object(n.a)("FIELD_FILLED"),o=Object(n.a)("FORM_SUBMITTED"),a=Object(n.a)("SHORT_FORM_SUBMITTED");Object(n.a)("PROGRESSIVE_DISCLOSURE_SUBMITTED"),Object(n.a)("PROGRESSIVE_DISCLOSURE_NEXT_FIELD")},"8+MO":function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return p}));var n=r("LHL8"),i=r("mstN"),o=r("+ST/"),a=r("Xskg");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){return a.b[e]},p=function(e,t){return Object.entries(e).reduce((function(e,r){var a=Object(i.a)(r,2),c=a[0],l=a[1];return Object(o.isType)("object",l)?s(s({},e),{},Object(n.a)({},c,s(s({},l),{},{errorMsg:t({id:l.errorMsg})}))):s(s({},e),{},Object(n.a)({},c,t({id:l})))}),{})}},"8Pvc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("QMqX"),i=r("ERkP"),o=r("IeIk"),a=r("3v8f"),c=r("blh4"),s=r("8HIL"),l=r("V0VH"),p=r("iY3x");function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}r("PdLh"),r("j/s1"),r("41F8"),r("lgfb"),r("uIIz"),r("Zzc8"),r("veNL"),r("+ST/"),r("HZt4"),r("P6bS"),r("wUAy"),r("VRT8"),r("xIsn"),r("dXku"),r("Qg07"),r("C+fP"),r("VNLi"),r("R+r0"),r("blkX"),r("ph8j"),r("xam2"),r("wQqz"),r("cbIG"),r("JPJE"),r("HIPp"),r("1gKc");var d,f,O,b,m,g=u(i),y={top:"translate3d(0, -100%, 0)",right:"translate3d(100%, 0, 0)",bottom:"translate3d(0, 100%, 0)"},j=c.styled.div(d||(d=c.taggedTemplateLiteral(["\n  background: ",";\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100%;\n  max-width: 100%;\n  width: ",";\n  will-change: transform;\n  z-index: 4000;\n  transition: 300ms;\n  overflow-x: hidden;\n  transform: ",";\n\n  ","\n"])),l.nuDSColor("white"),(function(e){return e.width}),(function(e){return e.open?"translate3d(0, 0, 0)":y[e.direction]}),s.tablet768(f||(f=c.taggedTemplateLiteral(["\n    transform: ",";\n  "])),(function(e){return e.open?"translate3d(0, 0, 0)":y[e.desktopDirection]})));j.propTypes={desktopDirection:o.PropTypes.string.isRequired,direction:o.PropTypes.string.isRequired,open:o.PropTypes.bool.isRequired,width:o.PropTypes.string.isRequired},j.displayName="DrawerContainer";var h=c.styled.div(m||(m=c.taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3000;\n  overflow: hidden;\n\n  ",";\n\n  transform: translate3d(0, 0, 0);\n  background: ",";\n  transition: opacity 50ms ease-out 0s, transform 50ms ease-in-out 0s;\n"])),(function(e){return e.open?c.css(O||(O=c.taggedTemplateLiteral(["\n      opacity: 1;\n      pointer-events: auto;\n    "]))):c.css(b||(b=c.taggedTemplateLiteral(["\n    opacity: 0;\n    pointer-events: none;\n  "])))}),l.nuDSColor("black","defaultT70"));h.propTypes={open:o.PropTypes.bool.isRequired},h.displayName="BodyOverlay";var P,v,C=i.createContext({hideCloseButton:!1,toggleCloseButton:function(){}});var w=c.styled.header(v||(v=c.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  padding: 1rem;\n  flex-shrink: 0;\n\n  & > button {\n    height: 3rem;\n  }\n\n ","\n"])),l.nuDSColor("white"),(function(e){if(e.hideCloseButton)return c.css(P||(P=c.taggedTemplateLiteral(["\n    & > button {\n      display: none;\n    }\n  "])))}));w.propTypes={hideCloseButton:o.PropTypes.bool.isRequired},w.displayName="DrawerHeaderWrapper";var E=function(e){var t=e.children,r=e.className,n=i.useContext(C);return g.default.createElement(w,{className:r,hideCloseButton:n.hideCloseButton},t)};E.defaultProps={className:void 0},E.propTypes={children:o.PropTypes.node.isRequired,className:o.PropTypes.string};var T,N=function(e){var t=e.onClick,r=e.title,n=i.useRef(null);return i.useEffect((function(){n&&n.current&&n.current.focus()}),[]),g.default.createElement(p.default,{ref:n,variant:"basic",styleVariant:"primary",onClick:t,iconProps:{name:"x",title:r}})};N.defaultProps={title:"Close"},N.propTypes={onClick:o.PropTypes.func.isRequired,title:o.PropTypes.string};var R=c.styled.div(T||(T=c.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n"])));R.displayName="DrawerContentWrapper";var x=function(e){var t=e.children,r=e.className;return g.default.createElement(R,{className:r},t)};x.defaultProps={className:void 0},x.propTypes={children:o.PropTypes.node.isRequired,className:o.PropTypes.string};var S=i.forwardRef((function(e,t){var r=e.open,o=e.onClose,c=e.children,s=e.direction,l=e.desktopDirection,p=e.id,u=e.lockScroll,d=e.width,f=e.className,O=i.useContext(C),b=i.useState(O.hideCloseButton),m=n.slicedToArray(b,2),y=m[0],P=m[1];i.useEffect((function(){var e,t=(e=o,function(t){27===t.keyCode&&e()});return r&&window.addEventListener("keydown",t,!1),function(){window.removeEventListener("keydown",t,!1)}}),[r,o]);var v=i.useCallback((function(e){"dialog"===e.target.getAttribute("role")&&o()}),[o]);return g.default.createElement(C.Provider,{value:{hideCloseButton:y,toggleCloseButton:function(){P(!y)}}},g.default.createElement(h,{ref:t,className:f,role:"dialog",onClick:v,open:r},g.default.createElement(j,{open:r,direction:s,desktopDirection:l,id:p,width:d},r&&c({DrawerHeader:E,DrawerCloseButton:N,DrawerContent:x}))),g.default.createElement(a.default,{lockScroll:u,open:r}))}));S.defaultProps={className:void 0,direction:"right",desktopDirection:"right",lockScroll:!0,width:"30rem"},S.propTypes={children:o.PropTypes.func.isRequired,className:o.PropTypes.string,desktopDirection:o.PropTypes.oneOf(["top","right","bottom"]),direction:o.PropTypes.oneOf(["top","right","bottom"]),id:o.PropTypes.string.isRequired,lockScroll:o.PropTypes.bool,onClose:o.PropTypes.func.isRequired,open:o.PropTypes.bool.isRequired,width:o.PropTypes.string},t.ESCAPE_KEY_CODE=27,t.default=S},CbWr:function(e,t,r){"use strict";var n=r("LHL8"),i=(r("ERkP"),r("hNT8")),o=r.n(i),a=r("AEx+"),c=r.n(a),s=r("8Pvc"),l=r.n(s),p=(r("IeIk"),r("bCbD")),u=r("FN3h"),d=r("jg1C"),f=function(){return Object(d.jsx)(c.a,{padding:"8x",children:Object(d.jsx)(u.a,{$variant:"heading2",$lines:4,$highlightColor:"white",marginBottom:{xs:"3x",lg:"2x"},maxWidth:"80%"})})};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=o()((function(){return Promise.all([r.e(9),r.e(10),r.e(11),r.e(17),r.e(111)]).then(r.bind(null,"87UH"))}),{ssr:!1,loading:f,loadableGenerated:{webpack:function(){return["87UH"]},modules:["../patterns/ProspectRegistrationDrawer/ProspectRegistrationDrawer.js -> patterns/CompanyProspectRegistrationForm/CompanyProspectRegistrationForm"]}}),g=o()((function(){return Promise.all([r.e(9),r.e(10),r.e(11),r.e(17),r.e(112)]).then(r.bind(null,"hGNd"))}),{ssr:!1,loading:f,loadableGenerated:{webpack:function(){return["hGNd"]},modules:["../patterns/ProspectRegistrationDrawer/ProspectRegistrationDrawer.js -> patterns/NewCompanyProspectRegistrationForm/NewCompanyProspectRegistrationForm"]}});function y(e){var t=e.permanent,r=e.propsDrawerHeader,n=e.prospectRegistrationNewForm,i=Object(p.b)(),o=i.isDrawerOpen,a=i.closeDrawer,s=function(e){(e||!e&&!t)&&a()};return Object(d.jsx)(l.a,{id:"prospect-registration-drawer",direction:"bottom",open:o,onClose:s,width:n?"50rem":"30rem",children:function(e){var t=e.DrawerHeader,i=e.DrawerCloseButton,a=e.DrawerContent;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(c.a,{children:Object(d.jsxs)(a,{children:[Object(d.jsx)(c.a,b(b({},r),{},{marginBottom:"10x",children:Object(d.jsx)(t,{children:Object(d.jsx)(i,{onClick:function(){s(!0)}})})})),o&&(n?Object(d.jsx)(g,{}):Object(d.jsx)(m,{}))]})})})}})}y.defaultProps={permanent:!1,propsDrawerHeader:{width:"100%"},prospectRegistrationNewForm:!1};t.a=y},FN3h:function(e,t,r){"use strict";var n=r("17x9"),i=r.n(n),o=r("j/s1"),a=r("AEx+"),c=r.n(a),s=r("8HIL"),l={xs:{heading2:{fontSize:1.75,lineHeight:1.16},heading4:{fontSize:1.25,lineHeight:1.25}},md:{heading2:{fontSize:3,lineHeight:1.16},heading4:{fontSize:1.5,lineHeight:1.32}}},p={purple:"138, 5, 190",white:"255, 255, 255"},u=function(e,t){return Object(o.keyframes)(["to{background-position:300% 0,",";}"],Array.from(Array(e).keys()).map((function(e){return"0 calc(".concat(e," * 1em + ").concat(t/2,"px + 0.1em + ").concat(e," * ").concat(t,"px)")})).join(", "))},d=function(e){var t=e.fontSize,r=void 0===t?1:t,n=e.lineHeight,i=void 0===n?1.16:n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"purple",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,s=Math.floor(16*r*(i-1)),l=p[a];return Object(o.css)(["width:100%;height:calc(1em * "," + ","px * ",");font-size:","rem;margin-bottom:","px;background-image:linear-gradient( 100deg,rgba(",",0) 20%,rgba(",",0.5) 50%,rgba(",",0) 70% ),",";background-repeat:no-repeat;background-size:25% 300%,70% 0.8em,100% 0.8em,100% 0.8em,80% 0.8em;background-position:0,",";animation:"," 1s linear infinite;"],c,s,c,r,s,l,l,l,Array.from(Array(c).keys()).map((function(){return"linear-gradient(#ddd 0.8em, transparent 0)"})).join(", "),Array.from(Array(c).keys()).map((function(e){return"0 calc(".concat(e," * 1em + ").concat(s/2,"px + 0.1em + ").concat(e," * ").concat(s,"px)")})).join(", "),u(c,s))},f=Object(o.default)(c.a).withConfig({displayName:"SkeletonForTypography",componentId:"sc-in8y7q-0"})(["",""],(function(e){var t,r;return Object(s.breakpointsMedia)({xs:d(l.xs[e.$variant],e.$highlightColor,(null===(t=e.$lines)||void 0===t?void 0:t.xs)||e.$lines),md:d(l.md[e.$variant],e.$highlightColor,(null===(r=e.$lines)||void 0===r?void 0:r.md)||e.$lines)})}));f.propTypes={highlightColor:i.a.string};t.a=f},QL4c:function(e,t,r){"use strict";r.d(t,"b",(function(){return h}));var n=r("LHL8"),i=r("mstN"),o=(r("ERkP"),r("sbnS")),a=r.n(o),c=r("vpUC"),s=r.n(c),l=r("01NQ"),p=r.n(l),u=r("+UJI"),d=r("xBdO"),f=r("8rrz"),O=r("jg1C");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=["xs","sm","md","lg","xl"],g=a.a.breakpoints,y=function(e){return function(e){return!!e.match(/https?:\/\//)}(e)?e:Object(f.a)(e,"webp")},j=function(e){var t=e.src,r=e.srcSet;if(t)return Object(O.jsx)(s.a,{children:Object(O.jsx)("link",{rel:"preload",as:"image",href:y(t)})});var o=m.filter((function(e){return!!r[e]})),a=o.reduce((function(e,t,r){var n=[],i=g[o[r+1]];return n.push("(min-width:".concat(g[t],"px)")),i&&n.push("(max-width:".concat(i-.1,"px)")),e[t]=n.join(" and "),e}),{}),c=o.reduce((function(e,t){var n=r[t];if("string"===typeof n)e.push({href:y(n),media:a[t]});else{var o=Object.entries(n).map((function(e){var t=Object(i.a)(e,2),r=t[0],n=t[1];return"".concat(y(n)," ").concat(r)}));e.push({imagesrcset:o.join(","),media:a[t]})}return e}),[]);return Object(O.jsx)(s.a,{children:c.map((function(e){return Object(O.jsx)("link",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rel:"preload",as:"image"},e),e.media)}))})};t.a=j;var h=p()(d.b,u.b);j.defaultProps={src:void 0,srcSet:void 0}},WiRQ:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("LHL8");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a={imageMobile:"xs",imageTablet:"md",imageDesktop:"lg"};function c(e){return Object.entries(e[0]).reduce((function(e,t){var r,i=a[t[0]],c=null===(r=t[1])||void 0===r?void 0:r.url;return void 0===c?e:o(o({},e),{},Object(n.a)({},i,{"1x":c,"2x":c,"3x":c}))}),{})}},Xskg:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n={prospectType:"COMMON.APPLICATION.ERROR_MESSAGES.PROSPECT_TYPE",name:"COMMON.APPLICATION.ERROR_MESSAGES.NAME",cpf:"COMMON.APPLICATION.ERROR_MESSAGES.CPF",cnpj:"COMMON.APPLICATION.ERROR_MESSAGES.CNPJ",phone:"COMMON.APPLICATION.ERROR_MESSAGES.PHONE",email:"COMMON.APPLICATION.ERROR_MESSAGES.EMAIL",emailConfirmation:"COMMON.APPLICATION.ERROR_MESSAGES.EMAIL_CONFIRMATION",accepted:"COMMON.APPLICATION.ERROR_MESSAGES.PRIVACY_POLICY",generic:"COMMON.APPLICATION.ERROR_MESSAGES.GENERIC"},i={email:{label:"COMMON.APPLICATION.LABEL.EMAIL",type:"email",validations:{required:n.email,email:n.email}},emailConfirmation:{type:"email",label:"COMMON.APPLICATION.LABEL.EMAIL_CONFIRMATION",validations:{required:n.email,email:n.email,equalsTo:{errorMsg:n.emailConfirmation,params:{target:"email"}}}},name:{type:"text",label:"COMMON.APPLICATION.LABEL.NAME",validations:{required:n.name,personName:n.name}},cpf:{type:"tel",label:"COMMON.APPLICATION.LABEL.CPF",validations:{required:n.cpf,cpf:n.cpf}},cnpj:{type:"tel",label:"COMMON.APPLICATION.LABEL.CNPJ",validations:{required:n.cnpj,cnpj:n.cnpj}},phone:{type:"tel",label:"COMMON.APPLICATION.LABEL.PHONE",validations:{required:n.phone,phone:n.phone}}}},hdzV:function(e,t,r){"use strict";var n=r("17x9"),i=r.n(n),o=r("j/s1").default.div.withConfig({displayName:"style__SafeAnchorOffset",componentId:"sc-chnne5-0"})(["display:block;position:relative;visibility:hidden;top:",";"],(function(e){return e.offsetTop}));o.defaultProps={offsetTop:"-6.25rem"},o.propTypes={id:i.a.string.isRequired,offsetTop:i.a.string};t.a=o},ieOr:function(e,t,r){"use strict";var n=r("LHL8"),i=r("ERkP"),o=r.n(i),a=r("dDsW"),c=r("iY3x"),s=r.n(c),l=r("2F3a"),p=r.n(l),u=r("C+fP"),d=r.n(u),f=r("AEx+"),O=r.n(f),b=r("DzHN"),m=r("pEv3"),g=r("6z0O"),y=r("bCbD"),j=r("8+MO"),h=r("jg1C");function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e){var t=e.formSubmitButtonLabel,r=e.formTitle,i=e.initialField,o=e.propsFormBox,c=e.propsFormButton,l=e.prospectTypeKey,u=Object(a.a)().formatMessage,f=Object(y.b)().openDrawer,P=i.toUpperCase(),C=Object(j.a)(i),w=Object(m.j)(l),E=function(e){e.target.value&&Object(g.a)({prospectType:w.type,field:"".concat(i,"_short")})};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(b.a.Step,{noValidate:!0,onSubmit:function(e){var t=e.values,r=e.setSubmitting;Object(g.c)({prospectType:w.type}),f({initialField:i,initialFieldValue:t[i]}),r(!1)},initialValues:Object(n.a)({},i,""),enableReinitialize:!0,children:function(e){var n=e.isDisabled,a=e.isSubmitting;return Object(h.jsxs)(O.a,v(v({id:"short-form",marginRight:{md:0}},o),{},{children:[Object(h.jsx)(d.a,{tag:"h3",variant:"heading4",color:"black.default",marginBottom:"8x",intlKey:r}),Object(h.jsx)(p.a,{id:"field-".concat(i),name:i,type:C.type,label:u({id:"COMMON.APPLICATION.LONG_LABEL.".concat(P)}),syncValidations:Object(j.b)(C.validations,u),onBlur:E}),Object(h.jsx)(O.a,v(v({},c),{},{children:Object(h.jsx)(s.a,{type:"submit",variant:"contained",styleVariant:"primary",extended:!0,disabled:n||a,intlKey:t,iconProps:{name:"arrow-right"}})}))]}))}})})})}C.defaultProps={formSubmitButtonLabel:"COMMON.WIDGET.SHORT_FORM.CONTINUE_BUTTON",formTitle:"SHORT_FORM.MULTI_PRODUCT.FORM_TITLE",initialField:"cpf",propsFormBox:{backgroundColor:"white.default",borderRadius:"1rem",margin:"auto",maxWidth:"20.625rem",padding:"1.5rem",position:"relative"},propsFormButton:{marginHorizontal:"0",maxWidth:"100%"},prospectTypeKey:m.f},t.a=o.a.memo(C)},sbnS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("8HIL");var n=r("HZt4");r("41F8"),r("PdLh"),r("blh4"),r("j/s1"),r("ERkP"),r("lgfb"),r("uIIz"),r("Zzc8"),r("veNL"),r("P6bS"),r("wUAy"),r("VRT8"),t.default=n.nuDSTheme,t.gutter=n.gutter,t.margin=n.margin,t.typography=n.typography,t.zIndexes=n.zIndexes}}]);
//# sourceMappingURL=8b428a8f8b491e19df25c6b2ee95b45618cd1a81.c2a6abbcd69f72c26d6d.js.map