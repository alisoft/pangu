__NUXT_JSONP__("/zh/api/utils/abort-navigation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{page:{key:"content:zh:3.api:3.utils:abort-navigation.md",generatedAt:new Date(1657627221860),mtime:new Date(1657627221857),slug:"abort-navigation",title:j,position:"000300039999",to:"\u002Fapi\u002Futils\u002Fabort-navigation",draft:f,page:g,language:"zh",empty:f,description:k,excerpt:m,body:{raw:"# `abortNavigation`\n\n```ts\nabortNavigation(err?: Error | string): false\n```\n\n* **err**: Optional error to be thrown by `abortNavigation()`.\n\n::alert{type=\"warning\"}\n`abortNavigation()` is only usable inside a [route middleware handler](\u002Fguide\u002Fdirectory-structure\u002Fmiddleware).\n::\n\nInside a route middleware handler, `abortNavigation()` will abort navigation, and throw an error if one is set as a parameter.\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Frouting\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"abortnavigation"},children:[{type:b,tag:h,props:{},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-ts","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:d,props:{className:[e,"function"]},children:[{type:a,value:j}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"("}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"?"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:p}]},{type:a,value:" Error "},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"|"}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,"builtin"]},children:[{type:a,value:"string"}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:")"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:"prose-li",props:{},children:[{type:a,value:c},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:o}]},{type:a,value:": Optional error to be thrown by "},{type:b,tag:h,props:{},children:[{type:a,value:l}]},{type:a,value:r},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:s,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:l}]},{type:a,value:" is only usable inside a "},{type:b,tag:"prose-a",props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fmiddleware"},children:[{type:a,value:"route middleware handler"}]},{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Inside a route middleware handler, "},{type:b,tag:h,props:{},children:[{type:a,value:l}]},{type:a,value:" will abort navigation, and throw an error if one is set as a parameter."}]},{type:a,value:c},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Frouting"},children:[]}]},toc:{title:k,searchDepth:t,depth:t,links:[]}},template:u},templateOptions:{header:g,footer:g,aside:g,asideClass:k,fluid:f,banner:f},_img:{}}],fetch:{"0":{headerLinks:[{title:"发现",items:[{title:v,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:w,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:u,subtitle:"Create fast websites easily",slug:"docs",to:x,icon:"docs.svg",color:"bg-green-500"},{title:y,subtitle:"Understand everything in Nuxt",slug:"examples",to:z,icon:"examples.svg",color:"bg-green-600"},{title:A,subtitle:"Learn with concrete cases",slug:"tutorials",to:B,icon:"tutorials.svg",color:"bg-green-700"},{title:C,subtitle:"Learn more with experts",href:D,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:E,subtitle:"How to Deploy Nuxt",slug:"deployments",to:F,icon:"deployments.svg",color:"bg-indigo-light"},{title:G,subtitle:"Extend the power of Nuxt",href:H,icon:"modules.svg",color:"bg-indigo"},{title:I,subtitle:"Get started with themes",slug:"themes",to:J,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:K,subtitle:"Latest news about Nuxt",slug:"announcements",to:L,icon:"announcements.svg",color:"bg-mint-lighter"},{title:M,subtitle:"They are Nuxt",slug:"teams",to:N,icon:"teams.svg",color:"bg-mint-light"},{title:O,subtitle:"All the code we have released",slug:"releases",to:P,icon:"releases.svg",color:"bg-mint"},{title:Q,subtitle:"They trust us",slug:"sponsors",to:R,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:S}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:S},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:K,to:L},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:Q,to:R},{title:M,to:N},{title:A,to:B},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:x},{title:y,to:z},{title:E,to:F},{title:C,href:D},{title:G,href:H},{title:O,to:P},{title:v,to:w},{title:I,to:J}]}],showCookieBanner:f},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:T,to:"\u002Fapi\u002Futils\u002F$fetch",title:T},next:{slug:"add-route-middleware",to:"\u002Fapi\u002Futils\u002Fadd-route-middleware",title:"addRouteMiddleware"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:m}}("text","element","\n","span","token",false,true,"prose-code-inline","operator","abortNavigation","","abortNavigation()",void 0,"punctuation","err",":"," ",".","prose-paragraph",2,"Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","$fetch")));