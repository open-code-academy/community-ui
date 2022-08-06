import e from"react";import o from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(e,o){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])},n(e,o)};var t,r=function(){return r=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},r.apply(this,arguments)},f={TRANSPARENT:"transparent",BLACK:"#000",WHITE:"#fff",SLATE:{10:"#f8fafc",20:"#f1f5f9",30:"#e2e8f0",40:"#cbd5e1",50:"#94a3b8",60:"#64748b",70:"#475569",80:"#334155",90:"#1e293b",100:"#0f172a"},GRAY:{10:"#f9fafb",20:"#f3f4f6",30:"#e5e7eb",40:"#d1d5db",50:"#9ca3af",60:"#6b7280",70:"#4b5563",80:"#374151",90:"#1f2937",100:"#111827"},ZINC:{10:"#fafafa",20:"#f4f4f5",30:"#e4e4e7",40:"#d4d4d8",50:"#a1a1aa",60:"#71717a",70:"#52525b",80:"#3f3f46",90:"#27272a",100:"#18181b"},NEUTRAL:{10:"#fafafa",20:"#f5f5f5",30:"#e5e5e5",40:"#d4d4d4",50:"#a3a3a3",60:"#737373",70:"#525252",80:"#404040",90:"#262626",100:"#171717"},STONE:{10:"#fafaf9",20:"#f5f5f4",30:"#e7e5e4",40:"#d6d3d1",50:"#a8a29e",60:"#78716c",70:"#57534e",80:"#44403c",90:"#292524",100:"#1c1917"},RED:{10:"#fef2f2",20:"#fee2e2",30:"#fecaca",40:"#fca5a5",50:"#f87171",60:"#ef4444",70:"#dc2626",80:"#b91c1c",90:"#991b1b",100:"#7f1d1d"},ORANGE:{10:"#fff7ed",20:"#ffedd5",30:"#fed7aa",40:"#fdba74",50:"#fb923c",60:"#f97316",70:"#ea580c",80:"#c2410c",90:"#9a3412",100:"#7c2d12"},AMBER:{10:"#fffbeb",20:"#fef3c7",30:"#fde68a",40:"#fcd34d",50:"#fbbf24",60:"#f59e0b",70:"#d97706",80:"#b45309",90:"#92400e",100:"#78350f"},YELLOW:{10:"#fefce8",20:"#fef9c3",30:"#fef08a",40:"#fde047",50:"#facc15",60:"#eab308",70:"#ca8a04",80:"#a16207",90:"#854d0e",100:"#713f12"},LIME:{50:"#f7fee7",20:"#ecfccb",30:"#d9f99d",40:"#bef264",10:"#a3e635",60:"#84cc16",70:"#65a30d",80:"#4d7c0f",90:"#3f6212",100:"#365314"},GREEN:{50:"#f0fdf4",20:"#dcfce7",30:"#bbf7d0",40:"#86efac",10:"#4ade80",60:"#22c55e",70:"#16a34a",80:"#15803d",90:"#166534",100:"#14532d"},EMERALD:{10:"#ecfdf5",20:"#d1fae5",30:"#a7f3d0",40:"#6ee7b7",50:"#34d399",60:"#10b981",70:"#059669",80:"#047857",90:"#065f46",100:"#064e3b"},TEAL:{10:"#f0fdfa",20:"#ccfbf1",30:"#99f6e4",40:"#5eead4",50:"#2dd4bf",60:"#14b8a6",70:"#0d9488",80:"#0f766e",90:"#115e59",100:"#134e4a"},CYAN:{10:"#ecfeff",20:"#cffafe",30:"#a5f3fc",40:"#67e8f9",50:"#22d3ee",60:"#06b6d4",70:"#0891b2",80:"#0e7490",90:"#155e75",100:"#164e63"},SKY:{10:"#f0f9ff",20:"#e0f2fe",30:"#bae6fd",40:"#7dd3fc",50:"#38bdf8",60:"#0ea5e9",70:"#0284c7",80:"#0369a1",90:"#075985",100:"#0c4a6e"},BLUE:{10:"#eff6ff",20:"#dbeafe",30:"#bfdbfe",40:"#93c5fd",50:"#60a5fa",60:"#3b82f6",70:"#2563eb",80:"#1d4ed8",90:"#1e40af",100:"#1e3a8a"},INDIGO:{10:"#eef2ff",20:"#e0e7ff",30:"#c7d2fe",40:"#a5b4fc",50:"#818cf8",60:"#6366f1",70:"#4f46e5",80:"#4338ca",90:"#3730a3",100:"#312e81"},VIOLET:{10:"#f5f3ff",20:"#ede9fe",30:"#ddd6fe",40:"#c4b5fd",50:"#a78bfa",60:"#8b5cf6",70:"#7c3aed",80:"#6d28d9",90:"#5b21b6",100:"#4c1d95"},PURPLE:{10:"#faf5ff",20:"#f3e8ff",30:"#e9d5ff",40:"#d8b4fe",50:"#c084fc",60:"#a855f7",70:"#9333ea",80:"#7e22ce",90:"#6b21a8",100:"#581c87"},FUCHSIA:{10:"#fdf4ff",20:"#fae8ff",30:"#f5d0fe",40:"#f0abfc",50:"#e879f9",60:"#d946ef",70:"#c026d3",80:"#a21caf",90:"#86198f",100:"#701a75"},PINK:{10:"#fdf2f8",20:"#fce7f3",30:"#fbcfe8",40:"#f9a8d4",50:"#f472b6",60:"#ec4899",70:"#db2777",80:"#be185d",90:"#9d174d",100:"#831843"},ROSE:{10:"#fff1f2",20:"#ffe4e6",30:"#fecdd3",40:"#fda4af",50:"#fb7185",60:"#f43f5e",70:"#e11d48",80:"#be123c",90:"#9f1239",100:"#881337"}},a={default:"default",xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl",xxl:"xxl","3xl":"3xl"},d=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];for(var n={},t=function(e){for(var o in e)e.hasOwnProperty(o)&&("[object Object]"===Object.prototype.toString.call(e[o])?n[o]=d(n[o],e[o]):n[o]=e[o])},r=0;r<e.length;r++)t(e[r]);return n},c={buttonTheme:{fontSize:{default:".75rem",xs:".5rem",sm:".625rem",md:".75rem",lg:"1rem",xl:"1.25rem",xxl:"1.5rem","3xl":"2rem"},buttonPadding:{default:".7rem 1.4rem",xs:".25rem .5rem",sm:".5rem 1.0rem",md:".7rem 1.4rem",lg:"1rem 2rem",xl:"1.2rem 2.4rem",xxl:"1.5rem 3rem","3xl":"2rem 4rem"},buttonThemes:{PRIMARY:{backgroundColor:f.CYAN[60],borderColor:f.CYAN[60],contentColor:f.WHITE,disabledContentColor:f.GRAY[60],disabledBorderColor:f.GRAY[60],disabledBackgroundColor:f.GRAY[30]},SECONDARY:{backgroundColor:f.PINK[60],borderColor:f.PINK[60],contentColor:f.WHITE,disabledContentColor:f.GRAY[60],disabledBorderColor:f.GRAY[60],disabledBackgroundColor:f.GRAY[30]},ERROR:{backgroundColor:f.RED[60],borderColor:f.RED[60],contentColor:f.WHITE,disabledContentColor:f.GRAY[60],disabledBorderColor:f.GRAY[60],disabledBackgroundColor:f.GRAY[30]},INFO:{backgroundColor:f.BLUE[70],borderColor:f.BLUE[70],contentColor:f.WHITE,disabledContentColor:f.GRAY[60],disabledBorderColor:f.GRAY[60],disabledBackgroundColor:f.GRAY[30]},SUCCESS:{backgroundColor:f.GREEN[70],borderColor:f.GREEN[70],contentColor:f.WHITE,disabledContentColor:f.GRAY[60],disabledBorderColor:f.GRAY[60],disabledBackgroundColor:f.GRAY[30]},WARNING:{backgroundColor:f.YELLOW[50],borderColor:f.YELLOW[50],contentColor:f.WHITE,disabledContentColor:f.GRAY[60],disabledBorderColor:f.GRAY[60],disabledBackgroundColor:f.GRAY[30]}}}},l=new Map,i=function(){return t};function u(o){return function(f){function a(e){var o=f.call(this,e)||this;return o.state={theme:{},localTheme:{}},l.set(o,o),o.state={theme:d(t,e.localTheme),localTheme:e.localTheme||{}},o}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=e}n(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}(a,f),a.prototype.componentWillUnmount=function(){l.delete(this)},a.prototype.render=function(){return e.createElement(o,r({},this.props,{theme:this.state.theme,localTheme:this.state.localTheme}))},a}(e.Component)}var b=function(e){return t=d(t,e),l&&l.forEach((function(e){var o=e.state;e.setState(r({theme:d(t,o.localTheme)},e.state))})),t};t=c;var s,m,h=u(o.button((function(e){var o=e.styles;return"".concat(o)}))),C=function(o){return e.createElement(h,r({},o))};!function(e){e.SOLID="solid",e.OUTLINE="outline"}(s||(s={})),function(e){e.PILL="pill",e.ROUNDED="rounded",e.RECTANGLE="rectangle"}(m||(m={}));var R=function(e){switch(e.buttonVariant){case s.OUTLINE:return f.TRANSPARENT;case s.SOLID:default:return E(e)}},E=function(e){var o=e.buttonTheme,n=e.disabled,t=e.theme,r=(null==o?void 0:o.backgroundColor)||(null==t?void 0:t.buttonTheme.buttonThemes.PRIMARY.backgroundColor);return n?(null==o?void 0:o.disabledBackgroundColor)||(null==t?void 0:t.buttonTheme.buttonThemes.PRIMARY.disabledBackgroundColor):r},p=function(e){var o=e.buttonTheme,n=e.disabled,t=e.theme,r=(null==o?void 0:o.borderColor)||(null==t?void 0:t.buttonTheme.buttonThemes.PRIMARY.borderColor);return n?(null==o?void 0:o.disabledBorderColor)||(null==t?void 0:t.buttonTheme.buttonThemes.PRIMARY.disabledBorderColor):r},v=function(e){switch(e.buttonVariant){case s.OUTLINE:return p(e);case s.SOLID:default:return T(e)}},T=function(e){var o=e.disabled,n=e.buttonTheme,t=e.theme,r=(null==n?void 0:n.contentColor)||(null==t?void 0:t.buttonTheme.buttonThemes.PRIMARY.contentColor);return o?(null==n?void 0:n.disabledContentColor)||(null==t?void 0:t.buttonTheme.buttonThemes.PRIMARY.disabledContentColor):r},A=function(e){var o=e.buttonShape,n=e.borderRadius;if(n)return n;switch(o){case m.PILL:return"100rem";case m.RECTANGLE:return"0";case m.ROUNDED:return".5rem";default:return"0"}},g=function(e){var o,n,t,r,f,a;return"\n    padding: ".concat(e.buttonPadding||(null===(t=null===(n=null===(o=e.theme)||void 0===o?void 0:o.buttonTheme)||void 0===n?void 0:n.buttonPadding)||void 0===t?void 0:t.default),";\n    width: fit-content;\n    font-size: ").concat(e.fontSize||(null===(a=null===(f=null===(r=e.theme)||void 0===r?void 0:r.buttonTheme)||void 0===f?void 0:f.fontSize)||void 0===a?void 0:a.default),";\n    color: ").concat(v(e),";\n    background-color: ").concat(R(e),";\n    border: solid 0.125rem ").concat(p(e),";\n    cursor: ").concat(e.disabled?"not-allowed":"pointer",";\n    box-sizing: content-box;\n    border-radius: ").concat(A(e),";\n")},Y=u(o(C)((function(e){return"\n  ".concat(g(e),"\n\n  position: relative;\n  transition: all 0.4s;\n  overflow: hidden;\n  \n\n  &:focus,\n  &:active {\n    outline: ").concat(p(e),";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: -3%;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 100%;\n    width: 0;\n    opacity: 1;\n    z-index: -1;\n    transition: all 0.15s ease;\n  }\n\n  &:hover::after {\n    content: '';\n    position: absolute;\n    top: -3%;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: ").concat(E(e),";\n    height: 110%;\n    width: 110%;\n    opacity: 1;\n    z-index: -1;\n  }\n\n  &:hover {\n    border: solid 0.125rem ").concat(p(e),";\n    color: ").concat(T(e),";\n  }")}))),I=function(o){return e.createElement(Y,r({},o),o.children)},x=u(o(C)((function(e){return"\n  ".concat(g(e),"\n  \n  position: relative;\n  transition: all 0.2s;\n  \n  &:hover {\n    border: solid 0.125rem ").concat(p(e),";\n    box-shadow: 0px 0px 5px ").concat(f.GRAY[80],"\n  }")}))),O=function(o){return e.createElement(x,r({},o),o.children)};export{I as AnimatedButton,C as BaseButton,m as ButtonShapes,s as ButtonVariant,f as Colors,O as PlainButton,a as Size,b as applyCustomTheme,A as getBorderRadius,i as getGlobalTheme,R as getInitialBackgroundColor,p as getInitialBorderColor,v as getInitialTextColor,d as merge,E as resolveBackgroundColor,T as resolveTextColor,g as textButtonStyles,u as themed};
//# sourceMappingURL=index.js.map
