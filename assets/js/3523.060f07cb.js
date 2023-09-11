"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=u(n),d=a,m=y["".concat(p,".").concat(d)]||y[d]||c[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});n(7294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o={slug:"TIL",title:"TypeORM orIgnore \uba54\uc18c\ub4dc\ub85c Upsert\uc2dc \uc911\ubcf5 \ub370\uc774\ud130 INSERT \uac80\uc99d \ucc98\ub9ac",authors:"HyunTaek5",tags:["TypeORM","NestJS","SQL","TypeScript"]},l=void 0,i={permalink:"/TIL/blog/TIL",source:"@site/blog/2023-09-12.md",title:"TypeORM orIgnore \uba54\uc18c\ub4dc\ub85c Upsert\uc2dc \uc911\ubcf5 \ub370\uc774\ud130 INSERT \uac80\uc99d \ucc98\ub9ac",description:"\uae30\uc874 Upsert \ubc29\uc2dd",date:"2023-09-12T00:00:00.000Z",formattedDate:"September 12, 2023",tags:[{label:"TypeORM",permalink:"/TIL/blog/tags/type-orm"},{label:"NestJS",permalink:"/TIL/blog/tags/nest-js"},{label:"SQL",permalink:"/TIL/blog/tags/sql"},{label:"TypeScript",permalink:"/TIL/blog/tags/type-script"}],readingTime:1.525,hasTruncateMarker:!1,authors:[{name:"HyunTaek Oh",title:"Web Developer in EP",url:"https://github.com/HyunTaek5",imageURL:"https://github.com/HyunTaek5.png",key:"HyunTaek5"}],frontMatter:{slug:"TIL",title:"TypeORM orIgnore \uba54\uc18c\ub4dc\ub85c Upsert\uc2dc \uc911\ubcf5 \ub370\uc774\ud130 INSERT \uac80\uc99d \ucc98\ub9ac",authors:"HyunTaek5",tags:["TypeORM","NestJS","SQL","TypeScript"]},nextItem:{title:"Welcome",permalink:"/TIL/blog/welcome"}},p={authorsImageUrls:[void 0]},u=[{value:"\uae30\uc874 Upsert \ubc29\uc2dd",id:"\uae30\uc874-upsert-\ubc29\uc2dd",level:2},{value:"\ubcc0\uacbd\ub41c Upsert \ubc29\uc2dd",id:"\ubcc0\uacbd\ub41c-upsert-\ubc29\uc2dd",level:2}],s={toc:u};function c(e){var{components:t}=e,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"\uae30\uc874-upsert-\ubc29\uc2dd"}),"\uae30\uc874 Upsert \ubc29\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc800\uc7a5\ud558\ub824\ub294 \ub370\uc774\ud130\ub97c \uc870\ud68c \ucffc\ub9ac\ub97c \ud1b5\ud574\uc11c \uc911\ubcf5 \uc870\ud68c\ud558\uc5ec \ud574\ub2f9 \uc870\uac74\uc5d0 \ubd80\ud568\ud558\ub294 \ub370\uc774\ud130\uac00 \uc788\ub2e4\uba74, INSERT \ud558\uc9c0\uc54a\uace0, \ud574\ub2f9 \ub370\uc774\ud130 \ub9ac\ud134\ud558\ub294 \ubc29\uc2dd")),(0,r.kt)("p",null,"\ucf54\ub4dc \uc608\uc2dc)"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-Typescript"}),"\n/**\n* Upsert\ud6c4 \ud574\ub2f9 \ub370\uc774\ud130 \ub9ac\ud134\n* \n* @param data UpdateDataDto\n* \n* @returns result DataEntity\n*/\nasync upsertData(dto: UpdateDataDto):Promise<DataEntity> {\n    const findDuplicateData = await this.dataRepository.findOne(\n        where: {\n            title: dto.title\n        }\n    );\n\n    if(!findDuplicateData) {\n        const data = new DataEntity();\n\n        data.title = dto.title;\n        \n        const {id} = await this.dataRepository.save(data);\n\n        return this.dataRepository.findOne(\n            where: {\n                id: id\n            }\n        );\n    } else {\n        return findDuplicateData;\n    }\n}\n")),(0,r.kt)("h2",a({},{id:"\ubcc0\uacbd\ub41c-upsert-\ubc29\uc2dd"}),"\ubcc0\uacbd\ub41c Upsert \ubc29\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc911\ubcf5\ub418\uba74 \uc548\ub418\ub294 \uc5d4\ud2f0\ud2f0 \ud074\ub798\uc2a4\uc758 \ud574\ub2f9 \uce7c\ub7fc\uc5d0 Unique \ub370\ucf54\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec Unique_key \uc138\ud305"),(0,r.kt)("li",{parentName:"ul"},"\uc800\uc7a5\ud558\ub824\ub294 \ub370\uc774\ud130\ub97c TypeORM QueryBuilder API\uc758 orIgnore \uba54\uc18c\ub4dc\ub97c \ucd94\uac00\ud558\uc5ec INSERT \ucffc\ub9ac \uc2e4\ud589",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \uc800\uc7a5\ud558\ub824\ub294 \ub370\uc774\ud130\uac00 \uc911\ubcf5\ub418\uc5c8\ub2e4\uba74, \ud574\ub2f9 INSERT \ucffc\ub9ac \uc2e4\ud589 ignore \ucc98\ub9ac\ub428"))),(0,r.kt)("li",{parentName:"ul"},"\uc800\uc7a5\ud558\ub824\ub358 \ub370\uc774\ud130\ub85c \uc870\ud68c\ud574\uc11c \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130 \ub9ac\ud134\ud558\ub294 \ubc29\uc2dd")),(0,r.kt)("p",null,"\ucf54\ub4dc \uc608\uc2dc)"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-TypeScript"}),"/**  \n * Upsert\ud6c4 \ud574\ub2f9 \ub370\uc774\ud130 \ub9ac\ud134\n *  \n * @param dto UpdateDataDto  \n * \n * @returns result DataEntity\n */\nasync upsertData(dto: UpdateDataDto): Promise<DataEntity> {  \n  const data = new DataEntity();  \n  \n  data.id = null;  \n  data.\btitle = dto.title;  \n  \n  await this.dataRepository  \n    .createQueryBuilder('data')  \n    .insert()  \n    .values(data)\n    .orIgnore()  \n    .execute();  \n  \n  return this.getOneByTitle(title);  \n}\n")))}c.isMDXComponent=!0}}]);