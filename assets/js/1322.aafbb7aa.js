"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1322],{7958:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(1252),s=a(4683),c=a(1984),i=a(2210);const m="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP";function d({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:g},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:b},e.title)))))))}var E=a(6847);function f({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return n.createElement(E.Zo,{component:f,props:e})}function v({sidebar:e}){const t=(0,s.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(h,{sidebar:e}):n.createElement(d,{sidebar:e}):null}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},k.apply(this,arguments)}function N(e){const{sidebar:t,toc:a,children:s}=e,c=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["sidebar","toc","children"]),i=t&&t.items.length>0;return n.createElement(r.Z,k({},c),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},1322:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n,l,r=a(7294),s=a(6010),c=a(2210);var i=a(4285),m=a(5319),o=a(7958),u=a(7558);const g="tag_Nnez";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function b({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:g},r.createElement(u.Z,p({},e)))))),r.createElement("hr",null))}function d({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=(n=t)[l=a]||(n[l]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(b,{key:e.letter,letterEntry:e}))))}var E=a(6894);function f({tags:e,sidebar:t}){const a=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(i.FG,{className:(0,s.Z)(m.k.wrapper.blogPages,m.k.page.blogTagsListPage)},r.createElement(i.d,{title:a}),r.createElement(E.Z,{tag:"blog_tags_list"}),r.createElement(o.Z,{sidebar:t},r.createElement("h1",null,a),r.createElement(d,{tags:e})))}},7558:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(6010),r=a(1984);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m({permalink:e,label:t,count:a}){return n.createElement(r.Z,{href:e,className:(0,l.Z)(s,a?i:c)},t,a&&n.createElement("span",null,a))}}}]);