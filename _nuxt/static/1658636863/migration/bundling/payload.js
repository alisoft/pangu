__NUXT_JSONP__("/migration/bundling", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:[{page:{key:"content:en:migration:10.bundling.md",generatedAt:new Date(1658637023693),mtime:new Date(1658637023677),slug:"bundling",title:p,position:"999900100000",to:"\u002Fmigration\u002Fbundling",draft:k,page:l,language:"en",head:{title:"Nuxt 2 to Nuxt 3: Build Tooling",titleTemplate:n},empty:k,description:q,excerpt:r,body:{raw:"---\nhead.title: 'Nuxt 2 to Nuxt 3: Build Tooling'\nhead.titleTemplate: ''\n---\n\n# Build Tooling\n\nWe use the following build tools by default:\n\n- [Vite](https:\u002F\u002Fvitejs.dev\u002F) or [webpack](https:\u002F\u002Fwebpack.js.org\u002F)\n- [Rollup](https:\u002F\u002Frollupjs.org\u002F)\n- [PostCSS](https:\u002F\u002Fpostcss.org\u002F)\n- [esbuild](https:\u002F\u002Fesbuild.github.io\u002F)\n\nFor this reason, most of your previous `build` configuration in `nuxt.config` will now be ignored, including any custom babel configuration.\n\nIf you need to configure any of Nuxt's build tools, you can do so in your `nuxt.config`, using the new top-level `vite`, `webpack` and `postcss` keys.\n\nIn addition, Nuxt ships with TypeScript support. [Find out more](\u002Fguide\u002Fconcepts\u002Ftypescript).\n\n## Steps\n\n1. Remove `@nuxt\u002Ftypescript-build` and `@nuxt\u002Ftypescript-runtime` from your dependencies and modules.\n1. Remove any unused babel dependencies from your project.\n1. Remove any explicit core-js dependencies.\n1. Migrate `require` to `import`.\n\n\u003C!-- TODO: Enabling webpack builder --\u003E\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"build-tooling"},children:[{type:a,value:p}]},{type:a,value:b},{type:c,tag:m,props:{class:"d-heading-description"},children:[{type:a,value:q}]},{type:a,value:b},{type:c,tag:"prose-ul",props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:f,props:{href:"https:\u002F\u002Fvitejs.dev\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Vite"}]},{type:a,value:" or "},{type:c,tag:f,props:{href:"https:\u002F\u002Fwebpack.js.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:s}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:f,props:{href:"https:\u002F\u002Frollupjs.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Rollup"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:f,props:{href:"https:\u002F\u002Fpostcss.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"PostCSS"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:f,props:{href:"https:\u002F\u002Fesbuild.github.io\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"esbuild"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:m,props:{},children:[{type:a,value:"For this reason, most of your previous "},{type:c,tag:d,props:{},children:[{type:a,value:"build"}]},{type:a,value:" configuration in "},{type:c,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:" will now be ignored, including any custom babel configuration."}]},{type:a,value:b},{type:c,tag:m,props:{},children:[{type:a,value:"If you need to configure any of Nuxt's build tools, you can do so in your "},{type:c,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:", using the new top-level "},{type:c,tag:d,props:{},children:[{type:a,value:"vite"}]},{type:a,value:", "},{type:c,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:u},{type:c,tag:d,props:{},children:[{type:a,value:"postcss"}]},{type:a,value:" keys."}]},{type:a,value:b},{type:c,tag:m,props:{},children:[{type:a,value:"In addition, Nuxt ships with TypeScript support. "},{type:c,tag:f,props:{href:"\u002Fguide\u002Fconcepts\u002Ftypescript"},children:[{type:a,value:"Find out more"}]},{type:a,value:v}]},{type:a,value:b},{type:c,tag:"prose-h2",props:{id:w},children:[{type:c,tag:f,props:{href:"#steps"},children:[{type:a,value:x}]}]},{type:a,value:b},{type:c,tag:"prose-ol",props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Remove "},{type:c,tag:d,props:{},children:[{type:a,value:"@nuxt\u002Ftypescript-build"}]},{type:a,value:u},{type:c,tag:d,props:{},children:[{type:a,value:"@nuxt\u002Ftypescript-runtime"}]},{type:a,value:" from your dependencies and modules."},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Remove any unused babel dependencies from your project."},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Remove any explicit core-js dependencies."},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:a,value:"Migrate "},{type:c,tag:d,props:{},children:[{type:a,value:"require"}]},{type:a,value:" to "},{type:c,tag:d,props:{},children:[{type:a,value:"import"}]},{type:a,value:v},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]},toc:{title:n,searchDepth:o,depth:o,links:[{id:w,depth:o,text:x}]}},template:y},templateOptions:{header:l,footer:l,aside:l,asideClass:n,fluid:k,banner:k},_img:{}}],fetch:{"0":{headerLinks:[{title:y,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:z,slug:"examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:z,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"runtime-config",to:"\u002Fmigration\u002Fruntime-config",title:"Runtime Config"},next:{slug:"server",to:"\u002Fmigration\u002Fserver",title:"Server"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:r}}("text","\n","element","prose-code-inline","prose-li","prose-a","nofollow","noopener","noreferrer","_blank",false,true,"prose-paragraph","",2,"Build Tooling","We use the following build tools by default:",void 0,"webpack","nuxt.config"," and ",".","steps","Steps","Docs","Examples")));