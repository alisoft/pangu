__NUXT_JSONP__("/api/components/nuxt-link", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs){return {data:[{page:{key:"content:en:3.api:2.components:4.nuxt-link.md",generatedAt:new Date(1657627226419),mtime:new Date(1657627226395),slug:"nuxt-link",title:r,position:"000300020004",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-link",draft:L,page:U,language:"en",empty:L,description:ad,excerpt:ak,body:{raw:"# `\u003CNuxtLink\u003E`\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Frouting\"}\n::\n\nNuxt provides `\u003CNuxtLink\u003E` component to handle any kind of links within your application.\n\n`\u003CNuxtLink\u003E` is a drop-in replacement for both Vue Router's `\u003CRouterLink\u003E` component and HTML's `\u003Ca\u003E` tag. It intelligently determines whether the link is _internal_ or _external_ and renders it accordingly with available optimizations (prefetching, default attributes, etc.)\n\n## Examples\n\n### Basic usage\n\nIn this example, we use `\u003CNuxtLink\u003E` component to link to a website.\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLink to=\"https:\u002F\u002Fnuxtjs.org\"\u003E\n    Nuxt website\n  \u003C\u002FNuxtLink\u003E\n  \u003C!-- \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\" rel=\"noopener noreferrer\"\u003E...\u003C\u002Fa\u003E --\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fnuxt-link?terminal=dev&file=\u002Fpages\u002Findex.vue\" blank}\n\n### Internal routing\n\nIn this example, we use `\u003CNuxtLink\u003E` component to link to another page of the application.\n\n```vue [pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLink to=\"\u002Fabout\"\u003E\n    About page\n  \u003C\u002FNuxtLink\u003E\n  \u003C!-- \u003Ca href=\"\u002Fabout\"\u003E...\u003C\u002Fa\u003E (+Vue Router & prefetching) --\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fnuxt-link?terminal=dev&file=\u002Fpages\u002Findex.vue\" blank}\n\n### `target` and `rel` attributes\n\nIn this example, we use `\u003CNuxtLink\u003E` with `target`, `rel`, and `noRel` props.\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLink to=\"https:\u002F\u002Ftwitter.com\u002Fnuxt_js\" target=\"_blank\"\u003E\n    Nuxt Twitter\n  \u003C\u002FNuxtLink\u003E\n  \u003C!-- \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fnuxt_js\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E...\u003C\u002Fa\u003E --\u003E\n\n  \u003CNuxtLink to=\"https:\u002F\u002Fdiscord.nuxtjs.org\" target=\"_blank\" rel=\"noopener\"\u003E\n    Nuxt Discord\n  \u003C\u002FNuxtLink\u003E\n  \u003C!-- \u003Ca href=\"https:\u002F\u002Fdiscord.nuxtjs.org\" target=\"_blank\" rel=\"noopener\"\u003E...\u003C\u002Fa\u003E --\u003E\n\n  \u003CNuxtLink to=\"https:\u002F\u002Fgithub.com\u002Fnuxt\" no-rel\u003E\n    Nuxt GitHub\n  \u003C\u002FNuxtLink\u003E\n  \u003C!-- \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt\"\u003E...\u003C\u002Fa\u003E --\u003E\n\n  \u003CNuxtLink to=\"\u002Fcontact\" target=\"_blank\"\u003E\n    Contact page opens in another tab\n  \u003C\u002FNuxtLink\u003E\n  \u003C!-- \u003Ca href=\"\u002Fcontact\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E...\u003C\u002Fa\u003E --\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fnuxt-link?terminal=dev&file=\u002Fpages\u002Findex.vue\" blank}\n\n## Props\n\n- **to**: Any URL or a [route location object](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#routelocationraw) from Vue Router\n- **href**: An alias for `to`. If used with `to`, `href` will be ignored\n- **target**: A `target` attribute value to apply on the link\n- **rel**: A `rel` attribute value to apply on the link. Defaults to `\"noopener noreferrer\"` for external links.\n- **noRel**: If set to `true`, no `rel` attribute will be added to the link\n- **activeClass**: A class to apply on active links. Works the same as [Vue Router's `active-class` prop](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#active-class) on internal links. Defaults to Vue Router's default (`\"router-link-active\"`)\n- **exactActiveClass**: A class to apply on exact active links. Works the same as [Vue Router's `exact-active-class` prop](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#exact-active-class) on internal links. Defaults to Vue Router's default `\"router-link-exact-active\"`)\n- **replace**: Works the same as [Vue Router's `replace` prop](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#replace) on internal links\n- **ariaCurrentValue**: An `aria-current` attribute value to apply on exact active links. Works the same as [Vue Router's `aria-current-value` prop](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#aria-current-value) on internal links\n- **external**: Forces the link to be considered as external (`true`) or internal (`false`). This is helpful to handle edge-cases\n- **custom**: Whether `\u003CNuxtLink\u003E` should wrap its content in an `\u003Ca\u003E` element. It allows taking full control of how a link is rendered and how navigation works when it is clicked. Works the same as [Vue Router's `custom` prop](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#custom)\n\n::alert{icon=👉}\nDefaults can be overwritten, see [overwriting defaults](#overwriting-defaults) if you want to change them.\n::\n\n## Overwriting defaults\n\nYou can overwrite `\u003CNuxtLink\u003E` defaults by creating your own link component using `defineNuxtLink`.\n\n```js [components\u002FMyNuxtLink.js]\nexport default defineNuxtLink({\n  componentName: 'MyNuxtLink',\n  \u002F* see signature below for more *\u002F\n})\n```\n\nYou can then use `\u003CMyNuxtLink \u002F\u003E` component as usual with your new defaults.\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fnuxt-link?terminal=dev&file=\u002Fcomponents\u002FMyNuxtLink.js\" blank}\n\n### `defineNuxtLink` signature\n\n```ts\ndefineNuxtLink({\n  componentName?: string;\n  externalRelAttribute?: string;\n  activeClass?: string;\n  exactActiveClass?: string;\n}) =\u003E Component\n```\n\n- **componentName**: A name for the defined `\u003CNuxtLink\u003E` component.\n- **externalRelAttribute**: A default `rel` attribute value applied on external links. Defaults to `\"noopener noreferrer\"`. Set it to `\"\"` to disable\n- **activeClass**: A default class to apply on active links. Works the same as [Vue Router's `linkActiveClass` option](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#linkactiveclass). Defaults to Vue Router's default (`\"router-link-active\"`)\n- **exactActiveClass**: A default class to apply on exact active links. Works the same as [Vue Router's `linkExactActiveClass` option](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#linkexactactiveclass). Defaults to Vue Router's default (`\"router-link-exact-active\"`)\n\n:LinkExample{link=\"\u002Fexamples\u002Frouting\u002Fnuxt-link\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtlink"},children:[{type:b,tag:g,props:{},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Frouting"},children:[]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:"Nuxt provides "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" component to handle any kind of links within your application."}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" is a drop-in replacement for both Vue Router's "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003CRouterLink\u003E"}]},{type:a,value:" component and HTML's "},{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:" tag. It intelligently determines whether the link is "},{type:b,tag:am,props:{},children:[{type:a,value:"internal"}]},{type:a,value:" or "},{type:b,tag:am,props:{},children:[{type:a,value:an}]},{type:a,value:" and renders it accordingly with available optimizations (prefetching, default attributes, etc.)"}]},{type:a,value:e},{type:b,tag:ae,props:{id:af},children:[{type:b,tag:l,props:{href:"#examples"},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:W,props:{id:ao},children:[{type:b,tag:l,props:{href:"#basic-usage"},children:[{type:a,value:ap}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:ag},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" component to link to a website."}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[X]},children:[{type:a,value:aq}]},{type:b,tag:N,props:{className:[O,ah]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"https:\u002F\u002Fnuxtjs.org"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:"\n    Nuxt website\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u003C!-- \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\" rel=\"noopener noreferrer\"\u003E...\u003C\u002Fa\u003E --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:Y,props:{":blank":J,href:ai},children:[{type:a,value:Z}]},{type:a,value:e},{type:b,tag:W,props:{id:ar},children:[{type:b,tag:l,props:{href:"#internal-routing"},children:[{type:a,value:as}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:ag},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" component to link to another page of the application."}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[X]},children:[{type:a,value:"pages\u002Findex.vue"}]},{type:b,tag:N,props:{className:[O,ah]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"\u002Fabout"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:"\n    About page\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u003C!-- \u003Ca href=\"\u002Fabout\"\u003E...\u003C\u002Fa\u003E (+Vue Router & prefetching) --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:Y,props:{":blank":J,href:ai},children:[{type:a,value:Z}]},{type:a,value:e},{type:b,tag:W,props:{id:at},children:[{type:b,tag:l,props:{href:"#target-and-rel-attributes"},children:[{type:b,tag:g,props:{},children:[{type:a,value:F}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" attributes"}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:ag},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" with "},{type:b,tag:g,props:{},children:[{type:a,value:F}]},{type:a,value:au},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:", and "},{type:b,tag:g,props:{},children:[{type:a,value:av}]},{type:a,value:" props."}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[X]},children:[{type:a,value:aq}]},{type:b,tag:N,props:{className:[O,ah]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"https:\u002F\u002Ftwitter.com\u002Fnuxt_js"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:"\n    Nuxt Twitter\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u003C!-- \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fnuxt_js\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E...\u003C\u002Fa\u003E --\u003E"}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"https:\u002F\u002Fdiscord.nuxtjs.org"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:"\n    Nuxt Discord\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u003C!-- \u003Ca href=\"https:\u002F\u002Fdiscord.nuxtjs.org\" target=\"_blank\" rel=\"noopener\"\u003E...\u003C\u002Fa\u003E --\u003E"}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"no-rel"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:"\n    Nuxt GitHub\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u003C!-- \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt\"\u003E...\u003C\u002Fa\u003E --\u003E"}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"\u002Fcontact"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,f,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:"\n    Contact page opens in another tab\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u003C!-- \u003Ca href=\"\u002Fcontact\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E...\u003C\u002Fa\u003E --\u003E"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:Y,props:{":blank":J,href:ai},children:[{type:a,value:Z}]},{type:a,value:e},{type:b,tag:ae,props:{id:ax},children:[{type:b,tag:l,props:{href:"#props"},children:[{type:a,value:ay}]}]},{type:a,value:e},{type:b,tag:az,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:y}]},{type:a,value:": Any URL or a "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#routelocationraw",rel:[C,A,D],target:q},children:[{type:a,value:"route location object"}]},{type:a,value:" from Vue Router"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aA}]},{type:a,value:": An alias for "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:". If used with "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:au},{type:b,tag:g,props:{},children:[{type:a,value:aA}]},{type:a,value:" will be ignored"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:F}]},{type:a,value:aB},{type:b,tag:g,props:{},children:[{type:a,value:F}]},{type:a,value:" attribute value to apply on the link"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:G}]},{type:a,value:aB},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" attribute value to apply on the link. Defaults to "},{type:b,tag:g,props:{},children:[{type:a,value:aC}]},{type:a,value:" for external links."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:av}]},{type:a,value:": If set to "},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:", no "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" attribute will be added to the link"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aD}]},{type:a,value:": A class to apply on active links. Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#active-class",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"active-class"}]},{type:a,value:Q}]},{type:a,value:" on internal links. Defaults to Vue Router's default ("},{type:b,tag:g,props:{},children:[{type:a,value:aE}]},{type:a,value:K},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aF}]},{type:a,value:": A class to apply on exact active links. Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#exact-active-class",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"exact-active-class"}]},{type:a,value:Q}]},{type:a,value:" on internal links. Defaults to Vue Router's default "},{type:b,tag:g,props:{},children:[{type:a,value:aG}]},{type:a,value:K},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aH}]},{type:a,value:": Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#replace",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:aH}]},{type:a,value:Q}]},{type:a,value:aI},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"ariaCurrentValue"}]},{type:a,value:": An "},{type:b,tag:g,props:{},children:[{type:a,value:"aria-current"}]},{type:a,value:" attribute value to apply on exact active links. Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#aria-current-value",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"aria-current-value"}]},{type:a,value:Q}]},{type:a,value:aI},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:an}]},{type:a,value:": Forces the link to be considered as external ("},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:") or internal ("},{type:b,tag:g,props:{},children:[{type:a,value:"false"}]},{type:a,value:"). This is helpful to handle edge-cases"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aJ}]},{type:a,value:": Whether "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" should wrap its content in an "},{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:" element. It allows taking full control of how a link is rendered and how navigation works when it is clicked. Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#custom",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:Q}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"alert",props:{icon:"👉"},children:[{type:b,tag:B,props:{},children:[{type:a,value:"Defaults can be overwritten, see "},{type:b,tag:l,props:{href:aK},children:[{type:a,value:"overwriting defaults"}]},{type:a,value:" if you want to change them."}]}]},{type:a,value:e},{type:b,tag:ae,props:{id:aL},children:[{type:b,tag:l,props:{href:aK},children:[{type:a,value:aM}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:"You can overwrite "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" defaults by creating your own link component using "},{type:b,tag:g,props:{},children:[{type:a,value:_}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[X]},children:[{type:a,value:"components\u002FMyNuxtLink.js"}]},{type:b,tag:N,props:{className:[O,"language-js"]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,aN,aO]},children:[{type:a,value:"export"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aN,aO]},children:[{type:a,value:"default"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aR}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"'MyNuxtLink'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F* see signature below for more *\u002F"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:"You can then use "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003CMyNuxtLink \u002F\u003E"}]},{type:a,value:" component as usual with your new defaults."}]},{type:a,value:e},{type:b,tag:Y,props:{":blank":J,href:"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fnuxt-link?terminal=dev&file=\u002Fcomponents\u002FMyNuxtLink.js"},children:[{type:a,value:Z}]},{type:a,value:e},{type:b,tag:W,props:{id:aU},children:[{type:b,tag:l,props:{href:"#definenuxtlink-signature"},children:[{type:b,tag:g,props:{},children:[{type:a,value:_}]},{type:a,value:" signature"}]}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:b,tag:N,props:{className:[O,"language-ts"]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aR}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:a,value:"\n  externalRelAttribute"},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:a,value:"\n  activeClass"},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:a,value:"\n  exactActiveClass"},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"=\u003E"}]},{type:a,value:" Component\n"}]}]}]},{type:a,value:e},{type:b,tag:az,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"componentName"}]},{type:a,value:": A name for the defined "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" component."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"externalRelAttribute"}]},{type:a,value:": A default "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" attribute value applied on external links. Defaults to "},{type:b,tag:g,props:{},children:[{type:a,value:aC}]},{type:a,value:". Set it to "},{type:b,tag:g,props:{},children:[{type:a,value:"\"\""}]},{type:a,value:" to disable"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aD}]},{type:a,value:": A default class to apply on active links. Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#linkactiveclass",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"linkActiveClass"}]},{type:a,value:aV}]},{type:a,value:aW},{type:b,tag:g,props:{},children:[{type:a,value:aE}]},{type:a,value:K},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:aF}]},{type:a,value:": A default class to apply on exact active links. Works the same as "},{type:b,tag:l,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#linkexactactiveclass",rel:[C,A,D],target:q},children:[{type:a,value:H},{type:b,tag:g,props:{},children:[{type:a,value:"linkExactActiveClass"}]},{type:a,value:aV}]},{type:a,value:aW},{type:b,tag:g,props:{},children:[{type:a,value:aG}]},{type:a,value:K},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"link-example",props:{link:"\u002Fexamples\u002Frouting\u002Fnuxt-link"},children:[]}]},toc:{title:ad,searchDepth:T,depth:T,links:[{id:af,depth:T,text:V,children:[{id:ao,depth:ac,text:ap},{id:ar,depth:ac,text:as},{id:at,depth:ac,text:"target and rel attributes"}]},{id:ax,depth:T,text:ay},{id:aL,depth:T,text:aM,children:[{id:aU,depth:ac,text:"defineNuxtLink signature"}]}]}},template:aX},templateOptions:{header:U,footer:U,aside:U,asideClass:ad,fluid:L,banner:L},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:aY,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aZ,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aX,subtitle:"Create fast websites easily",slug:"docs",to:a_,icon:"docs.svg",color:"bg-green-500"},{title:V,subtitle:"Understand everything in Nuxt",slug:af,to:a$,icon:"examples.svg",color:"bg-green-600"},{title:ba,subtitle:"Learn with concrete cases",slug:"tutorials",to:bb,icon:"tutorials.svg",color:"bg-green-700"},{title:bc,subtitle:"Learn more with experts",href:bd,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:be,subtitle:"How to Deploy Nuxt",slug:"deployments",to:bf,icon:"deployments.svg",color:"bg-indigo-light"},{title:bg,subtitle:"Extend the power of Nuxt",href:bh,icon:"modules.svg",color:"bg-indigo"},{title:bi,subtitle:"Get started with themes",slug:"themes",to:bj,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:bk,subtitle:"Latest news about Nuxt",slug:"announcements",to:bl,icon:"announcements.svg",color:"bg-mint-lighter"},{title:bm,subtitle:"They are Nuxt",slug:"teams",to:bn,icon:"teams.svg",color:"bg-mint-light"},{title:bo,subtitle:"All the code we have released",slug:"releases",to:bp,icon:"releases.svg",color:"bg-mint"},{title:bq,subtitle:"They trust us",slug:"sponsors",to:br,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:bs}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:aw},{title:"Partnerships",to:bs},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:bk,to:bl},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:bq,to:br},{title:bm,to:bn},{title:ba,to:bb},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:a_},{title:V,to:a$},{title:be,to:bf},{title:bc,href:bd},{title:bg,href:bh},{title:bo,to:bp},{title:aY,to:aZ},{title:bi,to:bj}]}],showCookieBanner:L},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"nuxt-layout",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-layout",title:"\u003CNuxtLayout\u003E"},next:{slug:"nuxt-loading-indicator",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-loading-indicator",title:"\u003CNuxtLoadingIndicator\u003E"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:ak}}("text","element","span","token","\n","punctuation","prose-code-inline","tag","\""," ","\u003E","prose-a","prose-li","prose-strong","NuxtLink","attr-name","_blank","\u003CNuxtLink\u003E","\n  ","attr-value","attr-equals","=","operator","\u003C","to","\u003C\u002F","noopener","prose-paragraph","nofollow","noreferrer","comment","target","rel","Vue Router's ","template","true",")",false,"prose-code","pre","line-numbers","code"," prop",":","string",2,true,"Examples","prose-h3","filename","button-link","Open on StackBlitz","defineNuxtLink","?","builtin",";",3,"","prose-h2","examples","In this example, we use ","language-html","https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fnuxt-link?terminal=dev&file=\u002Fpages\u002Findex.vue","\n\n  ",void 0,"\u003Ca\u003E","prose-em","external","basic-usage","Basic usage","app.vue","internal-routing","Internal routing","target-and-rel-attributes",", ","noRel","https:\u002F\u002Fgithub.com\u002Fnuxt","props","Props","prose-ul","href",": A ","\"noopener noreferrer\"","activeClass","\"router-link-active\"","exactActiveClass","\"router-link-exact-active\"","replace"," on internal links","custom","#overwriting-defaults","overwriting-defaults","Overwriting defaults","keyword","module","function","(","{","\n  componentName","}","definenuxtlink-signature"," option",". Defaults to Vue Router's default (","Docs","Showcases","\u002Fshowcases","\u002Fdocs","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));