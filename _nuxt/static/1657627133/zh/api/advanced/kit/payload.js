__NUXT_JSONP__("/zh/api/advanced/kit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{page:{key:"content:zh:3.api:4.advanced:2.kit.md",generatedAt:new Date(1657627224149),mtime:new Date(1657627224127),slug:"kit",title:u,position:"000300040002",to:"\u002Fapi\u002Fadvanced\u002Fkit",draft:p,page:q,language:"zh",empty:p,description:s,excerpt:v,body:{raw:"# Kit Utilities\n\n::ReadMore{link=\"\u002Fguide\u002Fgoing-further\u002Fkit\"}\n::\n\n## Utilities\n\n### Modules\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fmodule)\n\n- `installModule(module, inlineOptions)`\n\n### Programmatic usage\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Floader)\n\n- `loadNuxt(loadOptions)`\n- `buildNuxt(nuxt)`\n- `loadNuxtConfig(loadOptions)`\n\n### Compatibility\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fcompatibility.ts)\n\n- `checkNuxtCompatibility(constraints)`\n- `assertNuxtCompatibility(constraints)`\n- `hasNuxtCompatibility(constraints)`\n- `isNuxt2()`\n- `isNuxt3()`\n- `getNuxtVersion()`\n\n### Components\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fcomponents.ts)\n\n- `addComponentsDir(dir)`\n- `addComponent(componentObject)`\n\n### Context\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fcontext.ts)\n\n- `useNuxt()`\n\n### Plugins\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fplugin.ts)\n\n- `addPlugin(pluginOptions, { append? })`\n- `addPluginTemplate(pluginOptions, { append? })`\n\n### Templates\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Ftemplate.ts)\n\n- `addTemplate(templateOptions)`\n\n### Server\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fserver.ts)\n\n- ~~`addServerMiddleware(serverMiddleware)`~~\n- `addServerHandler (handler)`\n- `addDevServerHandler (handler)`\n\n### Resolving\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fresolve.ts)\n\n- `resolvePath (path, resolveOptions?)`\n- `resolveAlias (path, aliases?)`\n- `findPath (paths, resolveOptions?)`\n- `createResolver (base)`\n\n### Builder\n\n[source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fbuild.ts)\n\n- `extendWebpackConfig(callback, options?)`\n- `extendViteConfig(callback, options?)`\n- `addWebpackPlugin(webpackPlugin, options?)`\n- `addVitePlugin(vitePlugin, options?)`\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"kit-utilities"},children:[{type:a,value:u}]},{type:a,value:b},{type:c,tag:"read-more",props:{link:"\u002Fguide\u002Fgoing-further\u002Fkit"},children:[]},{type:a,value:b},{type:c,tag:"prose-h2",props:{id:w},children:[{type:c,tag:f,props:{href:"#utilities"},children:[{type:a,value:x}]}]},{type:a,value:b},{type:c,tag:g,props:{id:y},children:[{type:c,tag:f,props:{href:"#modules"},children:[{type:a,value:r}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fmodule",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"installModule(module, inlineOptions)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:z},children:[{type:c,tag:f,props:{href:"#programmatic-usage"},children:[{type:a,value:A}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Floader",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"loadNuxt(loadOptions)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"buildNuxt(nuxt)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"loadNuxtConfig(loadOptions)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:B},children:[{type:c,tag:f,props:{href:"#compatibility"},children:[{type:a,value:C}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fcompatibility.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"checkNuxtCompatibility(constraints)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"assertNuxtCompatibility(constraints)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"hasNuxtCompatibility(constraints)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"isNuxt2()"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"isNuxt3()"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"getNuxtVersion()"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:D},children:[{type:c,tag:f,props:{href:"#components"},children:[{type:a,value:E}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fcomponents.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addComponentsDir(dir)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addComponent(componentObject)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:F},children:[{type:c,tag:f,props:{href:"#context"},children:[{type:a,value:G}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fcontext.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"useNuxt()"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:H},children:[{type:c,tag:f,props:{href:"#plugins"},children:[{type:a,value:I}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fplugin.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addPlugin(pluginOptions, { append? })"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addPluginTemplate(pluginOptions, { append? })"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:J},children:[{type:c,tag:f,props:{href:"#templates"},children:[{type:a,value:K}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Ftemplate.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addTemplate(templateOptions)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:L},children:[{type:c,tag:f,props:{href:"#server"},children:[{type:a,value:M}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fserver.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:"del",props:{},children:[{type:c,tag:e,props:{},children:[{type:a,value:"addServerMiddleware(serverMiddleware)"}]}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addServerHandler (handler)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addDevServerHandler (handler)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:N},children:[{type:c,tag:f,props:{href:"#resolving"},children:[{type:a,value:O}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fresolve.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"resolvePath (path, resolveOptions?)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"resolveAlias (path, aliases?)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"findPath (paths, resolveOptions?)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"createResolver (base)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:g,props:{id:P},children:[{type:c,tag:f,props:{href:"#builder"},children:[{type:a,value:Q}]}]},{type:a,value:b},{type:c,tag:h,props:{},children:[{type:c,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fkit\u002Fsrc\u002Fbuild.ts",rel:[i,j,k],target:l},children:[{type:a,value:m}]}]},{type:a,value:b},{type:c,tag:n,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"extendWebpackConfig(callback, options?)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"extendViteConfig(callback, options?)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addWebpackPlugin(webpackPlugin, options?)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"addVitePlugin(vitePlugin, options?)"}]},{type:a,value:b}]},{type:a,value:b}]}]},toc:{title:s,searchDepth:t,depth:t,links:[{id:w,depth:t,text:x,children:[{id:y,depth:o,text:r},{id:z,depth:o,text:A},{id:B,depth:o,text:C},{id:D,depth:o,text:E},{id:F,depth:o,text:G},{id:H,depth:o,text:I},{id:J,depth:o,text:K},{id:L,depth:o,text:M},{id:N,depth:o,text:O},{id:P,depth:o,text:Q}]}]}},template:R},templateOptions:{header:q,footer:q,aside:q,asideClass:s,fluid:p,banner:p},_img:{}}],fetch:{"0":{headerLinks:[{title:"发现",items:[{title:S,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:T,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:R,subtitle:"Create fast websites easily",slug:"docs",to:U,icon:"docs.svg",color:"bg-green-500"},{title:V,subtitle:"Understand everything in Nuxt",slug:"examples",to:W,icon:"examples.svg",color:"bg-green-600"},{title:X,subtitle:"Learn with concrete cases",slug:"tutorials",to:Y,icon:"tutorials.svg",color:"bg-green-700"},{title:Z,subtitle:"Learn more with experts",href:_,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:$,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aa,icon:"deployments.svg",color:"bg-indigo-light"},{title:r,subtitle:"Extend the power of Nuxt",href:ab,icon:"modules.svg",color:"bg-indigo"},{title:ac,subtitle:"Get started with themes",slug:"themes",to:ad,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ae,subtitle:"Latest news about Nuxt",slug:"announcements",to:af,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ag,subtitle:"They are Nuxt",slug:"teams",to:ah,icon:"teams.svg",color:"bg-mint-light"},{title:ai,subtitle:"All the code we have released",slug:"releases",to:aj,icon:"releases.svg",color:"bg-mint"},{title:ak,subtitle:"They trust us",slug:"sponsors",to:al,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:am}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:am},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ae,to:af},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ak,to:al},{title:ag,to:ah},{title:X,to:Y},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:U},{title:V,to:W},{title:$,to:aa},{title:Z,href:_},{title:r,href:ab},{title:ai,to:aj},{title:S,to:T},{title:ac,to:ad}]}],showCookieBanner:p},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"hooks",to:"\u002Fapi\u002Fadvanced\u002Fhooks",title:"Lifecycle Hooks"},next:{slug:"add",to:"\u002Fapi\u002Fcommands\u002Fadd",title:"nuxi add"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:v}}("text","\n","element","prose-li","prose-code-inline","prose-a","prose-h3","prose-paragraph","nofollow","noopener","noreferrer","_blank","source code","prose-ul",3,false,true,"Modules","",2,"Kit Utilities",void 0,"utilities","Utilities","modules","programmatic-usage","Programmatic usage","compatibility","Compatibility","components","Components","context","Context","plugins","Plugins","templates","Templates","server","Server","resolving","Resolving","builder","Builder","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));