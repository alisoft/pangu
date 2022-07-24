__NUXT_JSONP__("/guide/features/modules", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:[{page:{key:"content:en:2.guide:2.features:13.modules.md",generatedAt:new Date(1658636981532),mtime:new Date(1658636981524),slug:j,title:s,position:"000200020013",to:"\u002Fguide\u002Ffeatures\u002Fmodules",draft:n,page:o,language:"en",empty:n,description:"Nuxt provides a module system to extend the framework core and simplify integrations. You don't need to develop everything from scratch or maintain boilerplate if there is already a Nuxt module for it. Adding Nuxt modules is possible using nuxt.config.",excerpt:A,body:{raw:"# Modules\n\nNuxt provides a module system to extend the framework core and simplify integrations. You don't need to develop everything from scratch or maintain boilerplate if there is already a Nuxt module for it. Adding Nuxt modules is possible using [`nuxt.config`](\u002Fapi\u002Fconfiguration\u002Fnuxt.config#modules).\n\n## Exploring Nuxt Modules\n\nWhen developing production-grade applications with Nuxt you might find that the framework's core functionality is not enough. Nuxt can be extended with configuration options and plugins, but maintaining these customizations across multiple projects can be tedious, repetitive and time-consuming. On the other hand, supporting every project's needs out of the box would make Nuxt very complex and hard to use.\n\nThis is one of the reasons why Nuxt provides a module system that makes it possible to extend the core. Nuxt modules are async functions that sequentially run when starting nuxt in development mode using `nuxi dev` or building a project for production with `nuxi build`. They can override templates, configure webpack loaders, add CSS libraries, and perform many other useful tasks.\n\nBest of all, Nuxt modules can be distributed in npm packages. This makes it possible for them to be reused across projects and shared with the community, helping create an ecosystem of high-quality add-ons.\n\n::ReadMore{link=\"https:\u002F\u002Fmodules.nuxtjs.org\u002F?version=3.x\" title=\"Nuxt 3 Compatible Modules\"}\n::\n\n## The `modules` Property\n\nOnce you have installed the modules you can then add them to your `nuxt.config.ts` file under the `modules` property. Modules developers usually provide additional steps and details for usage.\n\n```ts{}[nuxt.config.ts]\nexport default defineNuxtConfig({\n  modules: [\n    \u002F\u002F Using package name (recommended usage)\n    '@nuxtjs\u002Fexample',\n\n    \u002F\u002F Load a local module\n    '.\u002Fmodules\u002Fexample',\n\n    \u002F\u002F Add module with inline-options\n    ['.\u002Fmodules\u002Fexample', { token: '123' }]\n\n    \u002F\u002F Inline module definition\n    async (inlineOptions, nuxt) =\u003E { }\n  ]\n})\n```\n\n::alert{type=\"warning\" icon=⚠️}\nNuxt modules are now build-time-only, and the `buildModules` property used in Nuxt 2 is deprecated in favor of `modules`.\n::\n\n## Module development\n\nEveryone has the opportunity to develop modules. Read more about developing modules in the [Module Author Guide](\u002Fguide\u002Fgoing-further\u002Fmodules).\n\n::ReadMore{link=\"\u002Fguide\u002Fgoing-further\u002Fmodules\" title=\"Module Author Guide\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:j},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:i,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt provides a module system to extend the framework core and simplify integrations. You don't need to develop everything from scratch or maintain boilerplate if there is already a Nuxt module for it. Adding Nuxt modules is possible using "},{type:b,tag:k,props:{href:"\u002Fapi\u002Fconfiguration\u002Fnuxt.config#modules"},children:[{type:b,tag:h,props:{},children:[{type:a,value:"nuxt.config"}]}]},{type:a,value:t}]},{type:a,value:f},{type:b,tag:u,props:{id:B},children:[{type:b,tag:k,props:{href:"#exploring-nuxt-modules"},children:[{type:a,value:C}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"When developing production-grade applications with Nuxt you might find that the framework's core functionality is not enough. Nuxt can be extended with configuration options and plugins, but maintaining these customizations across multiple projects can be tedious, repetitive and time-consuming. On the other hand, supporting every project's needs out of the box would make Nuxt very complex and hard to use."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"This is one of the reasons why Nuxt provides a module system that makes it possible to extend the core. Nuxt modules are async functions that sequentially run when starting nuxt in development mode using "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxi dev"}]},{type:a,value:" or building a project for production with "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxi build"}]},{type:a,value:". They can override templates, configure webpack loaders, add CSS libraries, and perform many other useful tasks."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Best of all, Nuxt modules can be distributed in npm packages. This makes it possible for them to be reused across projects and shared with the community, helping create an ecosystem of high-quality add-ons."}]},{type:a,value:f},{type:b,tag:D,props:{link:"https:\u002F\u002Fmodules.nuxtjs.org\u002F?version=3.x",title:"Nuxt 3 Compatible Modules"},children:[]},{type:a,value:f},{type:b,tag:u,props:{id:E},children:[{type:b,tag:k,props:{href:"#the-modules-property"},children:[{type:a,value:"The "},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:" Property"}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Once you have installed the modules you can then add them to your "},{type:b,tag:h,props:{},children:[{type:a,value:F}]},{type:a,value:" file under the "},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:" property. Modules developers usually provide additional steps and details for usage."}]},{type:a,value:f},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:F}]},{type:b,tag:"pre",props:{className:["language-ts","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"defineNuxtConfig"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n  modules"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Using package name (recommended usage)"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'@nuxtjs\u002Fexample'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Load a local module"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Add module with inline-options"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" token"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'123'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F Inline module definition"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"async"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"inlineOptions"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" nuxt"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"alert",props:{icon:"⚠️",type:"warning"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Nuxt modules are now build-time-only, and the "},{type:b,tag:h,props:{},children:[{type:a,value:"buildModules"}]},{type:a,value:" property used in Nuxt 2 is deprecated in favor of "},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:t}]}]},{type:a,value:f},{type:b,tag:u,props:{id:M},children:[{type:b,tag:k,props:{href:"#module-development"},children:[{type:a,value:N}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Everyone has the opportunity to develop modules. Read more about developing modules in the "},{type:b,tag:k,props:{href:O},children:[{type:a,value:P}]},{type:a,value:t}]},{type:a,value:f},{type:b,tag:D,props:{link:O,title:P},children:[]}]},toc:{title:Q,searchDepth:m,depth:m,links:[{id:B,depth:m,text:C},{id:E,depth:m,text:"The modules Property"},{id:M,depth:m,text:N}]}},template:R},templateOptions:{header:o,footer:o,aside:o,asideClass:Q,fluid:n,banner:n},_img:{}}],fetch:{"0":{headerLinks:[{title:R,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:S,slug:"examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:S,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:s,href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"teleports",to:"\u002Fguide\u002Ffeatures\u002Fteleports",title:"Teleports"},next:{slug:"nuxt",to:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt",title:".nuxt"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:A}}("text","element","span","token","punctuation","\n"," ","prose-code-inline","prose-paragraph","modules","prose-a","\n    ",2,false,true,"comment","string",",","Modules",".","prose-h2","keyword","{","operator","\n\n    ","}",void 0,"exploring-nuxt-modules","Exploring Nuxt Modules","read-more","the-modules-property","nuxt.config.ts","(",":","[","'.\u002Fmodules\u002Fexample'","]",")","module-development","Module development","\u002Fguide\u002Fgoing-further\u002Fmodules","Module Author Guide","","Docs","Examples")));