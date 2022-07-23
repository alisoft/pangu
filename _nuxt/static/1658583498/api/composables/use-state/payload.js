__NUXT_JSONP__("/api/composables/use-state", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{page:{key:"content:3.api:1.composables:use-state.md",generatedAt:new Date(1658583560505),mtime:new Date(1658583560497),slug:"use-state",title:m,position:"000300019999",to:"\u002Fapi\u002Fcomposables\u002Fuse-state",draft:o,page:p,language:"en",empty:o,description:t,excerpt:x,body:{raw:"# `useState`\n\n```ts\nuseState\u003CT\u003E(init?: () =\u003E T | Ref\u003CT\u003E): Ref\u003CT\u003E\nuseState\u003CT\u003E(key: string, init?: () =\u003E T | Ref\u003CT\u003E): Ref\u003CT\u003E\n```\n\n* **key**: A unique key ensuring that data fetching is properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file and line number of the instance of `useState` will be generated for you.\n* **init**: A function that provides initial value for the state when not initiated. This function can also return a `Ref`.\n* **T**: (typescript only) Specify the type of state\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Fstate-management\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"usestate"},children:[{type:b,tag:u,props:{},children:[{type:a,value:m}]}]},{type:a,value:f},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-ts","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"builtin"]},children:[{type:a,value:"string"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:","}]},{type:a,value:" init"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:G}]},{type:a,value:": A unique key ensuring that data fetching is properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file and line number of the instance of "},{type:b,tag:u,props:{},children:[{type:a,value:m}]},{type:a,value:" will be generated for you."},{type:a,value:f}]},{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:C}]},{type:a,value:": A function that provides initial value for the state when not initiated. This function can also return a "},{type:b,tag:u,props:{},children:[{type:a,value:"Ref"}]},{type:a,value:"."},{type:a,value:f}]},{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:g}]},{type:a,value:": (typescript only) Specify the type of state"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Fstate-management"},children:[]}]},toc:{title:t,searchDepth:H,depth:H,links:[]}},template:"Docs"},templateOptions:{header:p,footer:p,aside:p,asideClass:t,fluid:o,banner:o},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"use-router",to:"\u002Fapi\u002Fcomposables\u002Fuse-router",title:"useRouter"},next:{slug:"nuxt-page",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-page",title:"\u003CNuxtPage\u003E"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:x}}("text","element","span","token","operator","\n","T","punctuation"," ","constant","\u003C","\u003E","useState",":",false,true,"(",")"," Ref","","prose-code-inline","prose-li","prose-strong",void 0,"generic-function","function","generic","class-name","init","?","=\u003E","|","key",2)));