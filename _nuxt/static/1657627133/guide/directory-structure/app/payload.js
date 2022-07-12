__NUXT_JSONP__("/guide/directory-structure/app", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{page:{key:"content:en:2.guide:3.directory-structure:15.app.md",generatedAt:new Date(1657627207898),mtime:new Date(1657627207860),slug:"app",title:m,position:"000200030015",to:"\u002Fguide\u002Fdirectory-structure\u002Fapp",draft:n,page:p,language:"en",icon:"IconFile",head:{title:t},empty:n,description:"The app.vue file is the main component in your Nuxt 3 applications.",excerpt:u,body:{raw:"---\nicon: IconFile\ntitle: app.vue\nhead.title: App file\n---\n\n# App file\n\nThe `app.vue` file is the main component in your Nuxt 3 applications.\n\n## Minimal usage\n\nWith Nuxt 3, the [`pages\u002F`](\u002Fguide\u002Fdirectory-structure\u002Fpages) directory is optional. If not present, Nuxt won't include [vue-router](https:\u002F\u002Frouter.vuejs.org\u002F) dependency. This is useful when working on a landing page or an application that does not need routing.\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003Ch1\u003EHello World!\u003C\u002Fh1\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n## Usage with pages\n\nIf you have a [`pages\u002F`](\u002Fguide\u002Fdirectory-structure\u002Fpages) directory, to display the current page, use the `\u003CNuxtPage\u003E` component:\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CNuxtLayout\u003E\n      \u003CNuxtPage\u002F\u003E\n    \u003C\u002FNuxtLayout\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=info}\nSince Nuxt 3 uses [`\u003CSuspense\u003E`](https:\u002F\u002Fvuejs.org\u002Fguide\u002Fbuilt-ins\u002Fsuspense.html#suspense) inside `\u003CNuxtPage\u003E`, we recommend to wrap it into a single root element.\n::\n\n::alert{type=warning}\nRemember that `app.vue` acts as the main component of your Nuxt application. Anything you add to it (JS and CSS) will be global and included in every page.\n::\n\nIf you want to have the possibility to customize the structure around the page between pages, check out the [`layouts\u002F`](\u002Fguide\u002Fdirectory-structure\u002Flayouts) directory.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"app-file"},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:k,props:{class:"d-heading-description"},children:[{type:a,value:"The "},{type:b,tag:i,props:{},children:[{type:a,value:m}]},{type:a,value:" file is the main component in your Nuxt 3 applications."}]},{type:a,value:g},{type:b,tag:v,props:{id:w},children:[{type:b,tag:j,props:{href:"#minimal-usage"},children:[{type:a,value:x}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"With Nuxt 3, the "},{type:b,tag:j,props:{href:y},children:[{type:b,tag:i,props:{},children:[{type:a,value:z}]}]},{type:a,value:" directory is optional. If not present, Nuxt won't include "},{type:b,tag:j,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[A,B,C],target:D},children:[{type:a,value:"vue-router"}]},{type:a,value:" dependency. This is useful when working on a landing page or an application that does not need routing."}]},{type:a,value:g},{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[F]},children:[{type:a,value:m}]},{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:J,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:"Hello World!"},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:v,props:{id:L},children:[{type:b,tag:j,props:{href:"#usage-with-pages"},children:[{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"If you have a "},{type:b,tag:j,props:{href:y},children:[{type:b,tag:i,props:{},children:[{type:a,value:z}]}]},{type:a,value:" directory, to display the current page, use the "},{type:b,tag:i,props:{},children:[{type:a,value:N}]},{type:a,value:" component:"}]},{type:a,value:g},{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[F]},children:[{type:a,value:m}]},{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:J,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:"NuxtPage"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:R,props:{type:"info"},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Since Nuxt 3 uses "},{type:b,tag:j,props:{href:"https:\u002F\u002Fvuejs.org\u002Fguide\u002Fbuilt-ins\u002Fsuspense.html#suspense",rel:[A,B,C],target:D},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u003CSuspense\u003E"}]}]},{type:a,value:" inside "},{type:b,tag:i,props:{},children:[{type:a,value:N}]},{type:a,value:", we recommend to wrap it into a single root element."}]}]},{type:a,value:g},{type:b,tag:R,props:{type:"warning"},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Remember that "},{type:b,tag:i,props:{},children:[{type:a,value:m}]},{type:a,value:" acts as the main component of your Nuxt application. Anything you add to it (JS and CSS) will be global and included in every page."}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"If you want to have the possibility to customize the structure around the page between pages, check out the "},{type:b,tag:j,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Flayouts"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"layouts\u002F"}]}]},{type:a,value:" directory."}]}]},toc:{title:S,searchDepth:r,depth:r,links:[{id:w,depth:r,text:x},{id:L,depth:r,text:M}]}},template:T},templateOptions:{header:p,footer:p,aside:p,asideClass:S,fluid:n,banner:n},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:U,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:V,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:T,subtitle:"Create fast websites easily",slug:"docs",to:W,icon:"docs.svg",color:"bg-green-500"},{title:X,subtitle:"Understand everything in Nuxt",slug:"examples",to:Y,icon:"examples.svg",color:"bg-green-600"},{title:Z,subtitle:"Learn with concrete cases",slug:"tutorials",to:_,icon:"tutorials.svg",color:"bg-green-700"},{title:$,subtitle:"Learn more with experts",href:aa,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:ab,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ac,icon:"deployments.svg",color:"bg-indigo-light"},{title:ad,subtitle:"Extend the power of Nuxt",href:ae,icon:"modules.svg",color:"bg-indigo"},{title:af,subtitle:"Get started with themes",slug:"themes",to:ag,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ah,subtitle:"Latest news about Nuxt",slug:"announcements",to:ai,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aj,subtitle:"They are Nuxt",slug:"teams",to:ak,icon:"teams.svg",color:"bg-mint-light"},{title:al,subtitle:"All the code we have released",slug:"releases",to:am,icon:"releases.svg",color:"bg-mint"},{title:an,subtitle:"They trust us",slug:"sponsors",to:ao,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ap}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ap},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ah,to:ai},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:an,to:ao},{title:aj,to:ak},{title:Z,to:_},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:W},{title:X,to:Y},{title:ab,to:ac},{title:$,href:aa},{title:ad,href:ae},{title:al,to:am},{title:U,to:V},{title:af,to:ag}]}],showCookieBanner:n},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"gitignore",to:"\u002Fguide\u002Fdirectory-structure\u002Fgitignore",title:".gitignore"},next:{slug:"nuxtignore",to:"\u002Fguide\u002Fdirectory-structure\u002Fnuxtignore",title:".nuxtignore"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:u}}("text","element","span","token","tag","punctuation","\n","\u003E","prose-code-inline","prose-a","prose-paragraph","\u003C","app.vue",false,"\u003C\u002F",true,"template",2,"\n  ","App file",void 0,"prose-h2","minimal-usage","Minimal usage","\u002Fguide\u002Fdirectory-structure\u002Fpages","pages\u002F","nofollow","noopener","noreferrer","_blank","prose-code","filename","pre","language-html","line-numbers","code","h1","usage-with-pages","Usage with pages","\u003CNuxtPage\u003E","div","\n    ","NuxtLayout","alert","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));