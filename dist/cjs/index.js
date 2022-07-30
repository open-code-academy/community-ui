"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),o=require("styled-components");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r=t(o),a=function(e,o){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])},a(e,o)};var d=function(){return d=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},d.apply(this,arguments)};function f(e,o,t,n){return new(t||(t=Promise))((function(r,a){function d(e){try{l(n.next(e))}catch(e){a(e)}}function f(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var o;e.done?r(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(d,f)}l((n=n.apply(e,o||[])).next())}))}function l(e,o){var t,n,r,a,d={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:f(0),throw:f(1),return:f(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function f(a){return function(f){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;d;)try{if(t=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return d.label++,{value:a[1],done:!1};case 5:d.label++,n=a[1],a=[0];continue;case 7:a=d.ops.pop(),d.trys.pop();continue;default:if(!(r=d.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){d=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){d.label=a[1];break}if(6===a[0]&&d.label<r[1]){d.label=r[1],r=a;break}if(r&&d.label<r[2]){d.label=r[2],d.ops.push(a);break}r[2]&&d.ops.pop(),d.trys.pop();continue}a=o.call(e,d)}catch(e){a=[6,e],n=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,f])}}}var i,c=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];for(var t={},n=function(e){for(var o in e)e.hasOwnProperty(o)&&("[object Object]"===Object.prototype.toString.call(e[o])?t[o]=c(t[o],e[o]):t[o]=e[o])},r=0;r<e.length;r++)n(e[r]);return t},u={TRANSPARENT:"transparent",BLACK:"#000",WHITE:"#fff",SLATE:{10:"#f8fafc",20:"#f1f5f9",30:"#e2e8f0",40:"#cbd5e1",50:"#94a3b8",60:"#64748b",70:"#475569",80:"#334155",90:"#1e293b",100:"#0f172a"},GRAY:{10:"#f9fafb",20:"#f3f4f6",30:"#e5e7eb",40:"#d1d5db",50:"#9ca3af",60:"#6b7280",70:"#4b5563",80:"#374151",90:"#1f2937",100:"#111827"},ZINC:{10:"#fafafa",20:"#f4f4f5",30:"#e4e4e7",40:"#d4d4d8",50:"#a1a1aa",60:"#71717a",70:"#52525b",80:"#3f3f46",90:"#27272a",100:"#18181b"},NEUTRAL:{10:"#fafafa",20:"#f5f5f5",30:"#e5e5e5",40:"#d4d4d4",50:"#a3a3a3",60:"#737373",70:"#525252",80:"#404040",90:"#262626",100:"#171717"},STONE:{10:"#fafaf9",20:"#f5f5f4",30:"#e7e5e4",40:"#d6d3d1",50:"#a8a29e",60:"#78716c",70:"#57534e",80:"#44403c",90:"#292524",100:"#1c1917"},RED:{10:"#fef2f2",20:"#fee2e2",30:"#fecaca",40:"#fca5a5",50:"#f87171",60:"#ef4444",70:"#dc2626",80:"#b91c1c",90:"#991b1b",100:"#7f1d1d"},ORANGE:{10:"#fff7ed",20:"#ffedd5",30:"#fed7aa",40:"#fdba74",50:"#fb923c",60:"#f97316",70:"#ea580c",80:"#c2410c",90:"#9a3412",100:"#7c2d12"},AMBER:{10:"#fffbeb",20:"#fef3c7",30:"#fde68a",40:"#fcd34d",50:"#fbbf24",60:"#f59e0b",70:"#d97706",80:"#b45309",90:"#92400e",100:"#78350f"},YELLOW:{10:"#fefce8",20:"#fef9c3",30:"#fef08a",40:"#fde047",50:"#facc15",60:"#eab308",70:"#ca8a04",80:"#a16207",90:"#854d0e",100:"#713f12"},LIME:{50:"#f7fee7",20:"#ecfccb",30:"#d9f99d",40:"#bef264",10:"#a3e635",60:"#84cc16",70:"#65a30d",80:"#4d7c0f",90:"#3f6212",100:"#365314"},GREEN:{50:"#f0fdf4",20:"#dcfce7",30:"#bbf7d0",40:"#86efac",10:"#4ade80",60:"#22c55e",70:"#16a34a",80:"#15803d",90:"#166534",100:"#14532d"},EMERALD:{10:"#ecfdf5",20:"#d1fae5",30:"#a7f3d0",40:"#6ee7b7",50:"#34d399",60:"#10b981",70:"#059669",80:"#047857",90:"#065f46",100:"#064e3b"},TEAL:{10:"#f0fdfa",20:"#ccfbf1",30:"#99f6e4",40:"#5eead4",50:"#2dd4bf",60:"#14b8a6",70:"#0d9488",80:"#0f766e",90:"#115e59",100:"#134e4a"},CYAN:{10:"#ecfeff",20:"#cffafe",30:"#a5f3fc",40:"#67e8f9",50:"#22d3ee",60:"#06b6d4",70:"#0891b2",80:"#0e7490",90:"#155e75",100:"#164e63"},SKY:{10:"#f0f9ff",20:"#e0f2fe",30:"#bae6fd",40:"#7dd3fc",50:"#38bdf8",60:"#0ea5e9",70:"#0284c7",80:"#0369a1",90:"#075985",100:"#0c4a6e"},BLUE:{10:"#eff6ff",20:"#dbeafe",30:"#bfdbfe",40:"#93c5fd",50:"#60a5fa",60:"#3b82f6",70:"#2563eb",80:"#1d4ed8",90:"#1e40af",100:"#1e3a8a"},INDIGO:{10:"#eef2ff",20:"#e0e7ff",30:"#c7d2fe",40:"#a5b4fc",50:"#818cf8",60:"#6366f1",70:"#4f46e5",80:"#4338ca",90:"#3730a3",100:"#312e81"},VIOLET:{10:"#f5f3ff",20:"#ede9fe",30:"#ddd6fe",40:"#c4b5fd",50:"#a78bfa",60:"#8b5cf6",70:"#7c3aed",80:"#6d28d9",90:"#5b21b6",100:"#4c1d95"},PURPLE:{10:"#faf5ff",20:"#f3e8ff",30:"#e9d5ff",40:"#d8b4fe",50:"#c084fc",60:"#a855f7",70:"#9333ea",80:"#7e22ce",90:"#6b21a8",100:"#581c87"},FUCHSIA:{10:"#fdf4ff",20:"#fae8ff",30:"#f5d0fe",40:"#f0abfc",50:"#e879f9",60:"#d946ef",70:"#c026d3",80:"#a21caf",90:"#86198f",100:"#701a75"},PINK:{10:"#fdf2f8",20:"#fce7f3",30:"#fbcfe8",40:"#f9a8d4",50:"#f472b6",60:"#ec4899",70:"#db2777",80:"#be185d",90:"#9d174d",100:"#831843"},ROSE:{10:"#fff1f2",20:"#ffe4e6",30:"#fecdd3",40:"#fda4af",50:"#fb7185",60:"#f43f5e",70:"#e11d48",80:"#be123c",90:"#9f1239",100:"#881337"}},s={buttonTheme:{fontSize:{default:".75rem",xs:".5rem",sm:".625rem",md:".75rem",lg:"1rem",xl:"1.25rem",xxl:"1.5rem","3xl":"2rem"},buttonPadding:{default:".7rem 1.4rem",xs:".25rem .5rem",sm:".5rem 1.0rem",md:".7rem 1.4rem",lg:"1rem 2rem",xl:"1.2rem 2.4rem",xxl:"1.5rem 3rem","3xl":"2rem 4rem"},buttonThemes:{PRIMARY:{backgroundColor:u.CYAN[60],borderColor:u.CYAN[60],contentColor:u.WHITE,disabledContentColor:u.GRAY[60],disabledBorderColor:u.GRAY[60],disabledBackgroundColor:u.GRAY[30]},SECONDARY:{backgroundColor:u.PINK[60],borderColor:u.PINK[60],contentColor:u.WHITE,disabledContentColor:u.GRAY[60],disabledBorderColor:u.GRAY[60],disabledBackgroundColor:u.GRAY[30]},ERROR:{backgroundColor:u.RED[60],borderColor:u.RED[60],contentColor:u.WHITE,disabledContentColor:u.GRAY[60],disabledBorderColor:u.GRAY[60],disabledBackgroundColor:u.GRAY[30]},INFO:{backgroundColor:u.BLUE[70],borderColor:u.BLUE[70],contentColor:u.WHITE,disabledContentColor:u.GRAY[60],disabledBorderColor:u.GRAY[60],disabledBackgroundColor:u.GRAY[30]},SUCCESS:{backgroundColor:u.GREEN[70],borderColor:u.GREEN[70],contentColor:u.WHITE,disabledContentColor:u.GRAY[60],disabledBorderColor:u.GRAY[60],disabledBackgroundColor:u.GRAY[30]},WARNING:{backgroundColor:u.YELLOW[50],borderColor:u.YELLOW[50],contentColor:u.WHITE,disabledContentColor:u.GRAY[60],disabledBorderColor:u.GRAY[60],disabledBackgroundColor:u.GRAY[30]}}}},b=function(){return i};function v(e){return function(o){function t(){var e=null!==o&&o.apply(this,arguments)||this;return e.state={theme:{}},e}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=e}a(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}(t,o),t.prototype.componentDidMount=function(){return f(this,void 0,void 0,(function(){var e;return l(this,(function(o){switch(o.label){case 0:return[4,b()];case 1:return e=o.sent(),this.setState({theme:e}),[2]}}))}))},t.prototype.render=function(){return n.default.createElement(e,d({},this.props,{theme:this.state.theme}))},t}(n.default.Component)}i=c(s,function(){var e;try{return null===(e=require("/community-ui.config.ts"))||void 0===e?void 0:e.default}catch(e){try{return require("../../../community-ui.config").default}catch(e){return{}}}}());var p,h,m=v(r.default.button((function(e){var o=e.styles;return"".concat(o)}))),C=function(e){return n.default.createElement(m,d({},e))};exports.ButtonVariant=void 0,(p=exports.ButtonVariant||(exports.ButtonVariant={})).SOLID="solid",p.OUTLINE="outline",exports.ButtonShapes=void 0,(h=exports.ButtonShapes||(exports.ButtonShapes={})).PILL="pill",h.ROUNDED="rounded",h.RECTANGLE="rectangle";var x=function(e){switch(e.buttonVariant){case exports.ButtonVariant.OUTLINE:return u.TRANSPARENT;case exports.ButtonVariant.SOLID:return R(e)}},R=function(e){var o,t,n,r,a,d,f=e.buttonTheme,l=e.disabled,i=e.theme,c=(null==f?void 0:f.backgroundColor)||(null===(n=null===(t=null===(o=null==i?void 0:i.buttonTheme)||void 0===o?void 0:o.buttonThemes)||void 0===t?void 0:t.PRIMARY)||void 0===n?void 0:n.backgroundColor);return l?(null==f?void 0:f.disabledBackgroundColor)||(null===(d=null===(a=null===(r=null==i?void 0:i.buttonTheme)||void 0===r?void 0:r.buttonThemes)||void 0===a?void 0:a.PRIMARY)||void 0===d?void 0:d.disabledBackgroundColor):c},E=function(e){var o,t,n,r,a,d,f=e.buttonTheme,l=e.disabled,i=e.theme,c=(null==f?void 0:f.borderColor)||(null===(n=null===(t=null===(o=null==i?void 0:i.buttonTheme)||void 0===o?void 0:o.buttonThemes)||void 0===t?void 0:t.PRIMARY)||void 0===n?void 0:n.borderColor);return l?(null==f?void 0:f.disabledBorderColor)||(null===(d=null===(a=null===(r=null==i?void 0:i.buttonTheme)||void 0===r?void 0:r.buttonThemes)||void 0===a?void 0:a.PRIMARY)||void 0===d?void 0:d.disabledBorderColor):c},g=function(e){switch(e.buttonVariant){case exports.ButtonVariant.OUTLINE:return E(e);case exports.ButtonVariant.SOLID:return A(e)}},A=function(e){var o,t,n,r,a,d,f=e.disabled,l=e.buttonTheme,i=e.theme,c=(null==l?void 0:l.contentColor)||(null===(n=null===(t=null===(o=null==i?void 0:i.buttonTheme)||void 0===o?void 0:o.buttonThemes)||void 0===t?void 0:t.PRIMARY)||void 0===n?void 0:n.contentColor);return f?(null==l?void 0:l.disabledContentColor)||(null===(d=null===(a=null===(r=null==i?void 0:i.buttonTheme)||void 0===r?void 0:r.buttonThemes)||void 0===a?void 0:a.PRIMARY)||void 0===d?void 0:d.disabledContentColor):c},T=function(e){var o=e.buttonShape,t=e.borderRadius;if(e.buttonPadding,t)return t;switch(o){case exports.ButtonShapes.PILL:return"100rem";case exports.ButtonShapes.RECTANGLE:return"0";case exports.ButtonShapes.ROUNDED:return".5rem";default:return"0"}},B=function(e){var o,t,n,r,a,d;return"\n    padding: ".concat(e.buttonPadding||(null===(n=null===(t=null===(o=e.theme)||void 0===o?void 0:o.buttonTheme)||void 0===t?void 0:t.buttonPadding)||void 0===n?void 0:n.default),";\n    width: fit-content;\n    font-size: ").concat(e.fontSize||(null===(d=null===(a=null===(r=e.theme)||void 0===r?void 0:r.buttonTheme)||void 0===a?void 0:a.fontSize)||void 0===d?void 0:d.default),";\n    color: ").concat(g(e),";\n    background-color: ").concat(x(e),";\n    border: solid 0.125rem ").concat(E(e),";\n    cursor: ").concat(e.disabled?"not-allowed":"pointer",";\n    box-sizing: content-box;\n    border-radius: ").concat(T(e),";\n")},y=v(r.default(C)((function(e){return"\n  ".concat(B(e),"\n\n  position: relative;\n  transition: all 0.4s;\n  overflow: hidden;\n  \n\n  &:focus,\n  &:active {\n    outline: ").concat(E(e),";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: -3%;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 100%;\n    width: 0;\n    opacity: 1;\n    z-index: -1;\n    transition: all 0.15s ease;\n  }\n\n  &:hover::after {\n    content: '';\n    position: absolute;\n    top: -3%;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: ").concat(R(e),";\n    height: 110%;\n    width: 110%;\n    opacity: 1;\n    z-index: -1;\n  }\n\n  &:hover {\n    border: solid 0.125rem ").concat(E(e),";\n    color: ").concat(A(e),";\n  }")}))),I=v(r.default(C)((function(e){return"\n  ".concat(B(e),"\n  \n  position: relative;\n  transition: all 0.2s;\n  \n  &:hover {\n    border: solid 0.125rem ").concat(E(e),";\n    box-shadow: 0px 0px 5px ").concat(u.GRAY[80],"\n  }")})));exports.AnimatedButton=function(e){return n.default.createElement(y,d({},e),e.children)},exports.BaseButton=C,exports.Colors=u,exports.PlainButton=function(e){return n.default.createElement(I,d({},e),e.children)},exports.Size={default:"default",xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl",xxl:"xxl","3xl":"3xl"},exports.getBorderRadius=T,exports.getInitialBackgroundColor=x,exports.getInitialBorderColor=E,exports.getInitialTextColor=g,exports.getTheme=b,exports.merge=c,exports.resolveBackgroundColor=R,exports.resolveTextColor=A,exports.textButtonStyles=B,exports.themed=v;
//# sourceMappingURL=index.js.map
