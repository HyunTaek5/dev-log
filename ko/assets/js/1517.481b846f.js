"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(g,l(l({ref:t},i),{},{components:r})):n.createElement(g,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});r(7294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["HyunTaek5"],tags:["docusaurus"]},l=void 0,u={permalink:"/TIL/ko/blog/mdx-blog-post",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 1\uc77c",tags:[{label:"docusaurus",permalink:"/TIL/ko/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"HyunTaek Oh",title:"Web Developer in EP",url:"https://github.com/HyunTaek5",imageURL:"https://github.com/HyunTaek5.png",key:"HyunTaek5"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["HyunTaek5"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/TIL/ko/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/TIL/ko/blog/long-blog-post"}},c={authorsImageUrls:[void 0]},s=[],i={toc:s};function p(e){var{components:t}=e,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return(0,n.kt)("wrapper",o({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Blog posts support ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/markdown-features"}),"Docusaurus Markdown features"),", such as ",(0,n.kt)("a",o({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),(0,n.kt)("admonition",o({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}p.isMDXComponent=!0}}]);