(self.webpackChunktil=self.webpackChunktil||[]).push([[724],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8070:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),o=n(6010),a=n(2210),l=n(6016);const c="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e){var{as:t,id:n}=e,u=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["as","id"]);const{navbar:{hideOnScroll:m}}=(0,l.L)();return"h1"!==t&&n?r.createElement(t,s({},u,{className:(0,o.Z)("anchor",m?i:c),id:n}),u.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,s({},u,{id:void 0}))}},5034:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ae});var r=n(7294),o=n(3905),a=n(1098);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e){var t;if((null==(t=e.props)?void 0:t.mdxType)&&e.props.originalType){const t=e.props,{mdxType:n,originalType:o}=t,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["mdxType","originalType"]);return r.createElement(e.props.originalType,a)}return e}var i=n(358),s=n(6010),u=n(9526),m=n(6016);function p(){const{prism:e}=(0,m.L)(),{colorMode:t}=(0,u.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d,f,h=n(5319),v=n(7594),g=n.n(v);const y=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),b=RegExp("\\{(?<range>[\\d,-]+)\\}"),E={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){const n=e.map((e=>{const{start:n,end:r}=E[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function O(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&b.test(a)){const e=a.match(b).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=g()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(E),t)}}(r,o),c=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),m=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${d},`:u[t]?i[u[t]].start=d:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const p={};return Object.entries(i).forEach((([e,{range:t}])=>{g()(t).forEach((t=>{null!=(d=p)[f=t]||(d[f]=[]),p[t].push(e)}))})),{lineClassNames:p,code:n}}const N="codeBlockContainer_Ckt0";function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function C(e){var{as:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["as"]);const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(p());return r.createElement(t,j({},n,{style:o,className:(0,s.Z)(n.className,N,h.k.common.codeBlock)}))}const w={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L({children:e,className:t}){return r.createElement(C,{as:"pre",tabIndex:0,className:(0,s.Z)(w.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:w.codeBlockLines},e))}var x=n(7806);const T={attributes:!0,characterData:!0,childList:!0,subtree:!0};function B(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n=T){const o=(0,x.zX)(t),a=(0,x.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const P={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var H={Prism:n(7410).Z,theme:P};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var A=/\r\n|\r|\n/,Z=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=S({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=S({},n,{backgroundColor:null}),o};function M(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const R=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=S({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?S({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),_(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),_(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=S({},M(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?S({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),_(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],m=n[l][a];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=z(u,m.type),m.alias&&(u=z(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(A),d=p.length;c.push({types:u,content:p[0]});for(var f=1;f<d;f++)Z(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return Z(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),D="codeLine_lJS_",V="codeLineNumber_Tfdd",$="codeLineContent_feaV";function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function q({line:e,classNames:t,showLineNumbers:n,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=o({line:e,className:(0,s.Z)(t,n&&D)}),c=e.map(((e,t)=>r.createElement("span",W({key:t},a({token:e,key:t})))));return r.createElement("span",W({},l),n?r.createElement(r.Fragment,null,r.createElement("span",{className:V}),r.createElement("span",{className:$},c)):c,r.createElement("br",null))}var F=n(2210);const U={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function G({code:e,className:t}){const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,F.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,F.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,F.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",t,U.copyButton,n&&U.copyButtonCopied),onClick:l},r.createElement("span",{className:U.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:U.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:U.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Y="wordWrapButtonIcon_Bwma",Q="wordWrapButtonEnabled_EoeP";function X({className:e,onClick:t,isEnabled:n}){const o=(0,F.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,s.Z)("clean-btn",e,n&&Q),"aria-label":o,title:o},r.createElement("svg",{className:Y,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function K({children:e,className:t="",metastring:n,title:o,showLineNumbers:a,language:l}){const{prism:{defaultLanguage:c,magicComments:i}}=(0,m.L)();var u;const d=null!=(u=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))?u:c,f=p(),h=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return B(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),v=function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.match(y))?void 0:t.groups.title)?n:""}(n)||o,{lineClassNames:g,code:b}=O(e,{metastring:n,language:d,magicComments:i}),E=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(C,{as:"div",className:(0,s.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`)},v&&r.createElement("div",{className:w.codeBlockTitle},v),r.createElement("div",{className:w.codeBlockContent},r.createElement(R,J({},H,{theme:f,code:b,language:null!=d?d:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:o})=>r.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,s.Z)(e,w.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.Z)(w.codeBlockLines,E&&w.codeBlockLinesWithNumbering)},t.map(((e,t)=>r.createElement(q,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:g[t],showLineNumbers:E}))))))),r.createElement("div",{className:w.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&r.createElement(X,{className:w.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),r.createElement(G,{className:w.codeButton,code:b}))))}function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te(e){var{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children"]);const o=(0,i.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?K:L;return r.createElement(l,ee({key:String(o)},n),a)}function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}var re=n(1984);function oe(){return oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}var le=n(2647);const ce="details_lb9f",ie="isBrowser_bmU9",se="collapsibleContent_i85q";function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function me(e){return!!e&&("SUMMARY"===e.tagName||me(e.parentElement))}function pe(e,t){return!!e&&(e===t||pe(e.parentElement,t))}function de(e){var{summary:t,children:n}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["summary","children"]);const a=(0,i.Z)(),l=(0,r.useRef)(null),{collapsed:c,setCollapsed:u}=(0,le.u)({initialState:!o.open}),[m,p]=(0,r.useState)(o.open);return r.createElement("details",ue({},o,{ref:l,open:m,"data-collapsed":c,className:(0,s.Z)(ce,a&&ie,o.className),onMouseDown:e=>{me(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;me(t)&&pe(t,l.current)&&(e.preventDefault(),c?(u(!1),p(!0)):u(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(le.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),p(!e)}},r.createElement("div",{className:se},n)))}const fe="details_b_Ee";function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}function ve(e){var t=he({},function(e){if(null==e)throw new TypeError("Cannot destructure "+e);return e}(e));return r.createElement(de,he({},t,{className:(0,s.Z)("alert alert--info",fe,t.className)}))}function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}var ye=n(8070);function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function Ee(e){return r.createElement(ye.Z,be({},e))}const ke="containsTaskList_mC6p";function Oe(){return Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}const Ne="img_ev3q";function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}const Ce="admonition_LlT9",we="admonitionHeading_tbUL",Le="admonitionIcon_kALy",xe="admonitionContent_S0QG";function Te(){return Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}const Be={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(F.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(F.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(F.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(F.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(F.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Pe={secondary:"note",important:"info",success:"tip",warning:"danger"};function He(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);var o;return Te({},e,{title:null!=(o=e.title)?o:t,children:n})}function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_e.apply(this,arguments)}const Se={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?c(e):e));return r.createElement(a.Z,l({},e),t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",ne({},e)):r.createElement(te,ne({},e))},a:function(e){return r.createElement(re.Z,oe({},e))},pre:function(e){var t;return r.createElement(te,ae({},(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:ae({},e)))},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(ve,ge({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",Oe({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ke))}));var t},img:function(e){return r.createElement("img",je({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,Ne))}));var t},h1:e=>r.createElement(Ee,_e({as:"h1"},e)),h2:e=>r.createElement(Ee,_e({as:"h2"},e)),h3:e=>r.createElement(Ee,_e({as:"h3"},e)),h4:e=>r.createElement(Ee,_e({as:"h4"},e)),h5:e=>r.createElement(Ee,_e({as:"h5"},e)),h6:e=>r.createElement(Ee,_e({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=He(e),l=function(e){var t;const n=null!=(t=Pe[e])?t:e;return Be[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),Be.info)}(n),c=null!=o?o:l.label,{iconComponent:i}=l,u=null!=a?a:r.createElement(i,null);return r.createElement("div",{className:(0,s.Z)(h.k.common.admonition,h.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,Ce)},r.createElement("div",{className:we},r.createElement("span",{className:Le},u),c),r.createElement("div",{className:xe},t))},mermaid:n(369).Z};function Ae({children:e}){return r.createElement(o.Zo,{components:Se},e)}},9908:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294),o=n(6010),a=n(5574);const l="tableOfContents_bqdL";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e){var{className:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["className"]);return r.createElement("div",{className:(0,o.Z)(l,"thin-scrollbar",t)},r.createElement(a.Z,c({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7294),o=n(6016);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e){const t=e.map((e=>a({},e,{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["parentIndex"]);n>=0?t[n].children.push(o):r.push(o)})),r}function c({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[a({},e,{children:r})]:r}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,{anchorTopOffset:t}){const n=e.find((e=>i(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:null!=(r=e[e.indexOf(n)-1])?r:null;var r}var o;return null!=(o=e[e.length-1])?o:null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),i=s(c,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}const p=r.memo((function e({toc:t,className:n,linkClassName:o,isChild:a}){return t.length?r.createElement("ul",{className:a?void 0:n},t.map((t=>r.createElement("li",{key:t.id},r.createElement("a",{href:`#${t.id}`,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:t.value}}),r.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:o}))))):null}));function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:u}=e,f=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const h=(0,o.L)(),v=null!=s?s:h.tableOfContents.minHeadingLevel,g=null!=u?u:h.tableOfContents.maxHeadingLevel,y=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)((()=>c({toc:l(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return m((0,r.useMemo)((()=>{if(a&&i)return{linkClassName:a,linkActiveClassName:i,minHeadingLevel:v,maxHeadingLevel:g}}),[a,i,v,g])),r.createElement(p,d({toc:y,className:n,linkClassName:a},f))}}}]);