__NUXT_JSONP__("/zh/api/composables/use-head", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE){return {data:[{page:{key:"content:zh:3.api:1.composables:use-head.md",generatedAt:new Date(1657627218679),mtime:new Date(1657627218664),slug:"use-head",title:q,position:"000300019999",to:"\u002Fapi\u002Fcomposables\u002Fuse-head",draft:r,page:u,language:"zh",empty:r,description:B,excerpt:J,body:{raw:"# `useHead`\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Fhead-management\"}\n\nNuxt provides a composable to update the head properties of your page with an [`MetaObject`](\u002Fapi\u002Fcomposables\u002Fuse-head\u002F#metaobject) of meta properties with keys corresponding to meta tags:\n\n`title`, `base`, `script`, `style`, `meta` and `link`, as well as `htmlAttrs` and `bodyAttrs`. Alternatively, you can pass a function returning the object for reactive metadata.\n\n```js\nuseHead(options: MetaObject)\n```\n\n::alert{icon=👉}\n**`useHead` only works during `setup`**.\n::\n\n## Example\n\nThe example below changes the website's title in the `meta` and inserts a Google Font using the `link` property.\n\n```js\nexport default {\n  setup () {\n    useHead({\n      meta: [\n        { name: 'title' content: 'Nuxt 3 - The Hybrid Vue Framework' }\n      ],\n      link: [\n        { rel: 'preconnect', href: 'https:\u002F\u002Ffonts.googleapis.com' },\n        { rel: 'preconnect', href: 'https:\u002F\u002Ffonts.gstatic.com', crossorigin: '' },\n        { rel: 'stylesheet', href: 'https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto&display=swap', crossorigin: '' },\n      ]\n    })\n  }\n}\n```\n\n## `MetaObject`\n\n* **charset**: the character encoding in which the document is encoded =\u003E `\u003Cmeta charset=\"\u003Cvalue\u003E\" \u002F\u003E` (default: `'utf-8'`)\n* **viewport**: configuration of the viewport (the area of the window in which web content can be seen) =\u003E `\u003Cmeta name=\"viewport\" content=\"\u003Cvalue\u003E\" \u002F\u003E` (default: `'width=device-width, initial-scale=1'`)\n* **meta**: array, each item maps to a newly-created `\u003Cmeta\u003E` element, where object properties map to attributes.\n* **link**: array, each item maps to a newly-created `\u003Clink\u003E` element, where object properties map to attributes.\n* **style**: array, each item maps to a newly-created `\u003Cstyle\u003E` element, where object properties map to attributes.\n* **script**: array, each item maps to a newly-created `\u003Cscript\u003E` element, where object properties map to attributes.\n\nAll elements in the meta object are optional. You can also pass only single values.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"usehead"},children:[{type:b,tag:f,props:{},children:[{type:a,value:q}]}]},{type:a,value:g},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Fhead-management"},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Nuxt provides a composable to update the head properties of your page with an "},{type:b,tag:C,props:{href:"\u002Fapi\u002Fcomposables\u002Fuse-head\u002F#metaobject"},children:[{type:b,tag:f,props:{},children:[{type:a,value:v}]}]},{type:a,value:" of meta properties with keys corresponding to meta tags:"}]},{type:b,tag:s,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"title"}]},{type:a,value:w},{type:b,tag:f,props:{},children:[{type:a,value:"base"}]},{type:a,value:w},{type:b,tag:f,props:{},children:[{type:a,value:K}]},{type:a,value:w},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:w},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:M},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:", as well as "},{type:b,tag:f,props:{},children:[{type:a,value:"htmlAttrs"}]},{type:a,value:M},{type:b,tag:f,props:{},children:[{type:a,value:"bodyAttrs"}]},{type:a,value:". Alternatively, you can pass a function returning the object for reactive metadata."}]},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"options"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"maybe-class-name"]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:b,tag:"alert",props:{icon:"👉"},children:[{type:b,tag:s,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:q}]},{type:a,value:" only works during "},{type:b,tag:f,props:{},children:[{type:a,value:S}]}]},{type:a,value:"."}]}]},{type:b,tag:T,props:{id:U},children:[{type:b,tag:C,props:{href:"#example"},children:[{type:a,value:V}]}]},{type:b,tag:s,props:{},children:[{type:a,value:"The example below changes the website's title in the "},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" and inserts a Google Font using the "},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:" property."}]},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,W,X]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,W,X]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n      meta"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" name"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'title'"}]},{type:a,value:" content"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'Nuxt 3 - The Hybrid Vue Framework'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n      link"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'https:\u002F\u002Ffonts.googleapis.com'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'https:\u002F\u002Ffonts.gstatic.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'stylesheet'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto&display=swap'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g}]}]}]},{type:b,tag:T,props:{id:ae},children:[{type:b,tag:C,props:{href:"#metaobject"},children:[{type:b,tag:f,props:{},children:[{type:a,value:v}]}]}]},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"charset"}]},{type:a,value:": the character encoding in which the document is encoded =\u003E "},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cmeta charset=\"\u003Cvalue\u003E\" \u002F\u003E"}]},{type:a,value:af},{type:b,tag:f,props:{},children:[{type:a,value:"'utf-8'"}]},{type:a,value:t},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"viewport"}]},{type:a,value:": configuration of the viewport (the area of the window in which web content can be seen) =\u003E "},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cmeta name=\"viewport\" content=\"\u003Cvalue\u003E\" \u002F\u003E"}]},{type:a,value:af},{type:b,tag:f,props:{},children:[{type:a,value:"'width=device-width, initial-scale=1'"}]},{type:a,value:t},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cmeta\u003E"}]},{type:a,value:z},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:E}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Clink\u003E"}]},{type:a,value:z},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:L}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cstyle\u003E"}]},{type:a,value:z},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:K}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cscript\u003E"}]},{type:a,value:z},{type:a,value:g}]},{type:a,value:g}]},{type:b,tag:s,props:{},children:[{type:a,value:"All elements in the meta object are optional. You can also pass only single values."}]}]}]},toc:{title:B,searchDepth:A,depth:A,links:[{id:U,depth:A,text:V},{id:ae,depth:A,text:v}]}},template:ag},templateOptions:{header:u,footer:u,aside:u,asideClass:B,fluid:r,banner:r},_img:{}}],fetch:{"0":{headerLinks:[{title:"发现",items:[{title:ah,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ai,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ag,subtitle:"Create fast websites easily",slug:"docs",to:aj,icon:"docs.svg",color:"bg-green-500"},{title:ak,subtitle:"Understand everything in Nuxt",slug:"examples",to:al,icon:"examples.svg",color:"bg-green-600"},{title:am,subtitle:"Learn with concrete cases",slug:"tutorials",to:an,icon:"tutorials.svg",color:"bg-green-700"},{title:ao,subtitle:"Learn more with experts",href:ap,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:aq,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ar,icon:"deployments.svg",color:"bg-indigo-light"},{title:as,subtitle:"Extend the power of Nuxt",href:at,icon:"modules.svg",color:"bg-indigo"},{title:au,subtitle:"Get started with themes",slug:"themes",to:av,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aw,subtitle:"Latest news about Nuxt",slug:"announcements",to:ax,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ay,subtitle:"They are Nuxt",slug:"teams",to:az,icon:"teams.svg",color:"bg-mint-light"},{title:aA,subtitle:"All the code we have released",slug:"releases",to:aB,icon:"releases.svg",color:"bg-mint"},{title:aC,subtitle:"They trust us",slug:"sponsors",to:aD,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aE}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aE},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aw,to:ax},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aC,to:aD},{title:ay,to:az},{title:am,to:an},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aj},{title:ak,to:al},{title:aq,to:ar},{title:ao,href:ap},{title:as,href:at},{title:aA,to:aB},{title:ah,to:ai},{title:au,to:av}]}],showCookieBanner:r},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"use-fetch",to:"\u002Fapi\u002Fcomposables\u002Fuse-fetch",title:"useFetch"},next:{slug:"use-hydration",to:"\u002Fapi\u002Fcomposables\u002Fuse-hydration",title:"useHydration"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:J}}("text","element","span","token","punctuation","prose-code-inline","\n"," ","operator",":","string",",","prose-strong","{","}","prose-li","useHead",false,"prose-paragraph",")",true,"MetaObject",", ","\n        ",": array, each item maps to a newly-created "," element, where object properties map to attributes.",2,"","prose-a","meta","link","function","("," rel"," href",void 0,"script","style"," and ","prose-code","pre","language-js","line-numbers","code","setup","prose-h2","example","Example","keyword","module","\n  ","\n    ","[","\n      ","]","'preconnect'"," crossorigin","''","metaobject"," (default: ","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));