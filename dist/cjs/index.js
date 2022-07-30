"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e),r=n(t),f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},f(e,t)};var a=function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)};function d(e,t,n,o){return new(n||(n=Promise))((function(r,f){function a(e){try{i(o.next(e))}catch(e){f(e)}}function d(e){try{i(o.throw(e))}catch(e){f(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}i((o=o.apply(e,t||[])).next())}))}function i(e,t){var n,o,r,f,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return f={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function d(f){return function(d){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&f[0]?o.return:f[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,f[1])).done)return r;switch(o=0,r&&(f=[2&f[0],r.value]),f[0]){case 0:case 1:r=f;break;case 4:return a.label++,{value:f[1],done:!1};case 5:a.label++,o=f[1],f=[0];continue;case 7:f=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==f[0]&&2!==f[0])){a=0;continue}if(3===f[0]&&(!r||f[1]>r[0]&&f[1]<r[3])){a.label=f[1];break}if(6===f[0]&&a.label<r[1]){a.label=r[1],r=f;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(f);break}r[2]&&a.ops.pop(),a.trys.pop();continue}f=t.call(e,a)}catch(e){f=[6,e],o=0}finally{n=r=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([f,d])}}}var u,c=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},o=function(e){for(var t in e)e.hasOwnProperty(t)&&("[object Object]"===Object.prototype.toString.call(e[t])?n[t]=c(n[t],e[t]):n[t]=e[t])},r=0;r<e.length;r++)o(e[r]);return n},l=function(){return u};function s(e){return function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={theme:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(n,t),n.prototype.componentDidMount=function(){return d(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,l()];case 1:return e=t.sent(),this.setState({theme:e}),[2]}}))}))},n.prototype.render=function(){return o.default.createElement(e,a({},this.props,{theme:this.state.theme}))},n}(o.default.Component)}u=c(require("./defaultTheme").default,function(){var e;try{return null===(e=require("/community-ui.config.ts"))||void 0===e?void 0:e.default}catch(e){return require("../../../community-ui.config").default}}());var b,v,p=s(r.default.button((function(e){var t=e.styles;return"".concat(t)}))),h=function(e){return o.default.createElement(p,a({},e))},m={TRANSPARENT:"transparent",BLACK:"#000",WHITE:"#fff",SLATE:{10:"#f8fafc",20:"#f1f5f9",30:"#e2e8f0",40:"#cbd5e1",50:"#94a3b8",60:"#64748b",70:"#475569",80:"#334155",90:"#1e293b",100:"#0f172a"},GRAY:{10:"#f9fafb",20:"#f3f4f6",30:"#e5e7eb",40:"#d1d5db",50:"#9ca3af",60:"#6b7280",70:"#4b5563",80:"#374151",90:"#1f2937",100:"#111827"},ZINC:{10:"#fafafa",20:"#f4f4f5",30:"#e4e4e7",40:"#d4d4d8",50:"#a1a1aa",60:"#71717a",70:"#52525b",80:"#3f3f46",90:"#27272a",100:"#18181b"},NEUTRAL:{10:"#fafafa",20:"#f5f5f5",30:"#e5e5e5",40:"#d4d4d4",50:"#a3a3a3",60:"#737373",70:"#525252",80:"#404040",90:"#262626",100:"#171717"},STONE:{10:"#fafaf9",20:"#f5f5f4",30:"#e7e5e4",40:"#d6d3d1",50:"#a8a29e",60:"#78716c",70:"#57534e",80:"#44403c",90:"#292524",100:"#1c1917"},RED:{10:"#fef2f2",20:"#fee2e2",30:"#fecaca",40:"#fca5a5",50:"#f87171",60:"#ef4444",70:"#dc2626",80:"#b91c1c",90:"#991b1b",100:"#7f1d1d"},ORANGE:{10:"#fff7ed",20:"#ffedd5",30:"#fed7aa",40:"#fdba74",50:"#fb923c",60:"#f97316",70:"#ea580c",80:"#c2410c",90:"#9a3412",100:"#7c2d12"},AMBER:{10:"#fffbeb",20:"#fef3c7",30:"#fde68a",40:"#fcd34d",50:"#fbbf24",60:"#f59e0b",70:"#d97706",80:"#b45309",90:"#92400e",100:"#78350f"},YELLOW:{10:"#fefce8",20:"#fef9c3",30:"#fef08a",40:"#fde047",50:"#facc15",60:"#eab308",70:"#ca8a04",80:"#a16207",90:"#854d0e",100:"#713f12"},LIME:{50:"#f7fee7",20:"#ecfccb",30:"#d9f99d",40:"#bef264",10:"#a3e635",60:"#84cc16",70:"#65a30d",80:"#4d7c0f",90:"#3f6212",100:"#365314"},GREEN:{50:"#f0fdf4",20:"#dcfce7",30:"#bbf7d0",40:"#86efac",10:"#4ade80",60:"#22c55e",70:"#16a34a",80:"#15803d",90:"#166534",100:"#14532d"},EMERALD:{10:"#ecfdf5",20:"#d1fae5",30:"#a7f3d0",40:"#6ee7b7",50:"#34d399",60:"#10b981",70:"#059669",80:"#047857",90:"#065f46",100:"#064e3b"},TEAL:{10:"#f0fdfa",20:"#ccfbf1",30:"#99f6e4",40:"#5eead4",50:"#2dd4bf",60:"#14b8a6",70:"#0d9488",80:"#0f766e",90:"#115e59",100:"#134e4a"},CYAN:{10:"#ecfeff",20:"#cffafe",30:"#a5f3fc",40:"#67e8f9",50:"#22d3ee",60:"#06b6d4",70:"#0891b2",80:"#0e7490",90:"#155e75",100:"#164e63"},SKY:{10:"#f0f9ff",20:"#e0f2fe",30:"#bae6fd",40:"#7dd3fc",50:"#38bdf8",60:"#0ea5e9",70:"#0284c7",80:"#0369a1",90:"#075985",100:"#0c4a6e"},BLUE:{10:"#eff6ff",20:"#dbeafe",30:"#bfdbfe",40:"#93c5fd",50:"#60a5fa",60:"#3b82f6",70:"#2563eb",80:"#1d4ed8",90:"#1e40af",100:"#1e3a8a"},INDIGO:{10:"#eef2ff",20:"#e0e7ff",30:"#c7d2fe",40:"#a5b4fc",50:"#818cf8",60:"#6366f1",70:"#4f46e5",80:"#4338ca",90:"#3730a3",100:"#312e81"},VIOLET:{10:"#f5f3ff",20:"#ede9fe",30:"#ddd6fe",40:"#c4b5fd",50:"#a78bfa",60:"#8b5cf6",70:"#7c3aed",80:"#6d28d9",90:"#5b21b6",100:"#4c1d95"},PURPLE:{10:"#faf5ff",20:"#f3e8ff",30:"#e9d5ff",40:"#d8b4fe",50:"#c084fc",60:"#a855f7",70:"#9333ea",80:"#7e22ce",90:"#6b21a8",100:"#581c87"},FUCHSIA:{10:"#fdf4ff",20:"#fae8ff",30:"#f5d0fe",40:"#f0abfc",50:"#e879f9",60:"#d946ef",70:"#c026d3",80:"#a21caf",90:"#86198f",100:"#701a75"},PINK:{10:"#fdf2f8",20:"#fce7f3",30:"#fbcfe8",40:"#f9a8d4",50:"#f472b6",60:"#ec4899",70:"#db2777",80:"#be185d",90:"#9d174d",100:"#831843"},ROSE:{10:"#fff1f2",20:"#ffe4e6",30:"#fecdd3",40:"#fda4af",50:"#fb7185",60:"#f43f5e",70:"#e11d48",80:"#be123c",90:"#9f1239",100:"#881337"}};m.CYAN[60],m.CYAN[60],m.GRAY[60],m.GRAY[60],m.GRAY[30],m.PINK[60],m.PINK[60],m.GRAY[60],m.GRAY[60],m.GRAY[30],m.RED[60],m.RED[60],m.GRAY[60],m.GRAY[60],m.GRAY[30],m.BLUE[70],m.BLUE[70],m.GRAY[60],m.GRAY[60],m.GRAY[30],m.GREEN[70],m.GREEN[70],m.GRAY[60],m.GRAY[60],m.GRAY[30],m.YELLOW[50],m.YELLOW[50],m.GRAY[60],m.GRAY[60],m.GRAY[30],exports.ButtonVariant=void 0,(b=exports.ButtonVariant||(exports.ButtonVariant={})).SOLID="solid",b.OUTLINE="outline",exports.ButtonShapes=void 0,(v=exports.ButtonShapes||(exports.ButtonShapes={})).PILL="pill",v.ROUNDED="rounded",v.RECTANGLE="rectangle";var x=function(e){switch(e.buttonVariant){case exports.ButtonVariant.OUTLINE:return m.TRANSPARENT;case exports.ButtonVariant.SOLID:return R(e)}},R=function(e){var t,n,o,r,f,a,d=e.buttonTheme,i=e.disabled,u=e.theme,c=(null==d?void 0:d.backgroundColor)||(null===(o=null===(n=null===(t=null==u?void 0:u.buttonTheme)||void 0===t?void 0:t.buttonThemes)||void 0===n?void 0:n.PRIMARY)||void 0===o?void 0:o.backgroundColor);return i?(null==d?void 0:d.disabledBackgroundColor)||(null===(a=null===(f=null===(r=null==u?void 0:u.buttonTheme)||void 0===r?void 0:r.buttonThemes)||void 0===f?void 0:f.PRIMARY)||void 0===a?void 0:a.disabledBackgroundColor):c},A=function(e){var t,n,o,r,f,a,d=e.buttonTheme,i=e.disabled,u=e.theme,c=(null==d?void 0:d.borderColor)||(null===(o=null===(n=null===(t=null==u?void 0:u.buttonTheme)||void 0===t?void 0:t.buttonThemes)||void 0===n?void 0:n.PRIMARY)||void 0===o?void 0:o.borderColor);return i?(null==d?void 0:d.disabledBorderColor)||(null===(a=null===(f=null===(r=null==u?void 0:u.buttonTheme)||void 0===r?void 0:r.buttonThemes)||void 0===f?void 0:f.PRIMARY)||void 0===a?void 0:a.disabledBorderColor):c},E=function(e){switch(e.buttonVariant){case exports.ButtonVariant.OUTLINE:return A(e);case exports.ButtonVariant.SOLID:return y(e)}},y=function(e){var t,n,o,r,f,a,d=e.disabled,i=e.buttonTheme,u=e.theme,c=(null==i?void 0:i.contentColor)||(null===(o=null===(n=null===(t=null==u?void 0:u.buttonTheme)||void 0===t?void 0:t.buttonThemes)||void 0===n?void 0:n.PRIMARY)||void 0===o?void 0:o.contentColor);return d?(null==i?void 0:i.disabledContentColor)||(null===(a=null===(f=null===(r=null==u?void 0:u.buttonTheme)||void 0===r?void 0:r.buttonThemes)||void 0===f?void 0:f.PRIMARY)||void 0===a?void 0:a.disabledContentColor):c},T=function(e){var t=e.buttonShape,n=e.borderRadius;if(e.buttonPadding,n)return n;switch(t){case exports.ButtonShapes.PILL:return"100rem";case exports.ButtonShapes.RECTANGLE:return"0";case exports.ButtonShapes.ROUNDED:return".5rem";default:return"0"}},g=function(e){var t,n,o,r,f,a;return"\n    padding: ".concat(e.buttonPadding||(null===(o=null===(n=null===(t=e.theme)||void 0===t?void 0:t.buttonTheme)||void 0===n?void 0:n.buttonPadding)||void 0===o?void 0:o.default),";\n    width: fit-content;\n    font-size: ").concat(e.fontSize||(null===(a=null===(f=null===(r=e.theme)||void 0===r?void 0:r.buttonTheme)||void 0===f?void 0:f.fontSize)||void 0===a?void 0:a.default),";\n    color: ").concat(E(e),";\n    background-color: ").concat(x(e),";\n    border: solid 0.125rem ").concat(A(e),";\n    cursor: ").concat(e.disabled?"not-allowed":"pointer",";\n    box-sizing: content-box;\n    border-radius: ").concat(T(e),";\n")},Y=s(r.default(h)((function(e){return"\n  ".concat(g(e),"\n\n  position: relative;\n  transition: all 0.4s;\n  overflow: hidden;\n  \n\n  &:focus,\n  &:active {\n    outline: ").concat(A(e),";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: -3%;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 100%;\n    width: 0;\n    opacity: 1;\n    z-index: -1;\n    transition: all 0.15s ease;\n  }\n\n  &:hover::after {\n    content: '';\n    position: absolute;\n    top: -3%;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: ").concat(R(e),";\n    height: 110%;\n    width: 110%;\n    opacity: 1;\n    z-index: -1;\n  }\n\n  &:hover {\n    border: solid 0.125rem ").concat(A(e),";\n    color: ").concat(y(e),";\n  }")}))),B=s(r.default(h)((function(e){return"\n  ".concat(g(e),"\n  \n  position: relative;\n  transition: all 0.2s;\n  \n  &:hover {\n    border: solid 0.125rem ").concat(A(e),";\n    box-shadow: 0px 0px 5px ").concat(m.GRAY[80],"\n  }")})));exports.AnimatedButton=function(e){return o.default.createElement(Y,a({},e),e.children)},exports.BaseButton=h,exports.Colors=m,exports.PlainButton=function(e){return o.default.createElement(B,a({},e),e.children)},exports.Size={default:"default",xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl",xxl:"xxl","3xl":"3xl"},exports.getBorderRadius=T,exports.getInitialBackgroundColor=x,exports.getInitialBorderColor=A,exports.getInitialTextColor=E,exports.getTheme=l,exports.merge=c,exports.resolveBackgroundColor=R,exports.resolveTextColor=y,exports.textButtonStyles=g,exports.themed=s;
//# sourceMappingURL=index.js.map
