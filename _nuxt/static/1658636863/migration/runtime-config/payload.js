__NUXT_JSONP__("/migration/runtime-config", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{page:{key:"content:en:migration:8.runtime-config.md",generatedAt:new Date(1658637023569),mtime:new Date(1658637023561),slug:R,title:S,position:"999900080000",to:"\u002Fmigration\u002Fruntime-config",draft:t,page:u,language:"en",head:{title:"Nuxt 2 to Nuxt 3: Runtime Config",titleTemplate:G},empty:t,description:T,excerpt:U,body:{raw:"---\nhead.title: 'Nuxt 2 to Nuxt 3: Runtime Config'\nhead.titleTemplate: ''\n---\n\n# Runtime Config\n\nIf you wish to reference environment variables within your Nuxt 3 app, you will need to use runtime config.\n\nWhen referencing these variables within your components, you will have to use the `useRuntimeConfig` composable in your setup method (or Nuxt plugin). In the `server\u002F` portion of your app, you can use `useRuntimeConfig` without any import.\n\n[Read more about runtime config](\u002Fguide\u002Ffeatures\u002Fruntime-config).\n\n## Migration\n\n1. Add any environment variables that you use in your app to the `runtimeConfig` property of the `nuxt.config` file.\n1. Migrate `process.env` to `useRuntimeConfig` throughout the Vue part of your app.\n\n## Example\n\n::code-group\n\n```ts [nuxt.config.ts]\nimport { defineNuxtConfig } from 'nuxt'\n\nexport default defineNuxtConfig({\n  runtimeConfig: {\n    \u002F\u002F Private config that is only available on the server\n    apiSecret: '123',\n    \u002F\u002F Config within public will be also exposed to the client\n    public: {\n      apiBase: '\u002Fapi'\n    }\n  },\n})\n```\n\n```vue [pages\u002Findex.vue]\n\u003Cscript setup\u003E\n  const config = useRuntimeConfig()\n  \n  \u002F\u002F instead of process.env you will now access config.public.apiBase\n  console.log(config.public.apiBase)\n\u003C\u002Fscript\u003E\n```\n\n```ts [server\u002Fapi\u002Fhello.ts]\nconst config = useRuntimeConfig()\n\nexport default (req, res) =\u003E {\n  \u002F\u002F In server, you can now access config.apiSecret, in addition to config.public\n  console.log(config.apiSecret)\n  console.log(config.public.apiBase)\n}\n```\n\n```ini [.env]\n# Runtime config values are automatically replaced by matching environment variables at runtime\nNUXT_API_SECRET=api_secret_token\nNUXT_PUBLIC_API_BASE=https:\u002F\u002Fnuxtjs.org\n```\n\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:R},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:H,props:{class:"d-heading-description"},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:a,value:"When referencing these variables within your components, you will have to use the "},{type:b,tag:j,props:{},children:[{type:a,value:p}]},{type:a,value:" composable in your setup method (or Nuxt plugin). In the "},{type:b,tag:j,props:{},children:[{type:a,value:"server\u002F"}]},{type:a,value:" portion of your app, you can use "},{type:b,tag:j,props:{},children:[{type:a,value:p}]},{type:a,value:" without any import."}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:b,tag:I,props:{href:"\u002Fguide\u002Ffeatures\u002Fruntime-config"},children:[{type:a,value:"Read more about runtime config"}]},{type:a,value:h}]},{type:a,value:f},{type:b,tag:V,props:{id:W},children:[{type:b,tag:I,props:{href:"#migration"},children:[{type:a,value:X}]}]},{type:a,value:f},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:f},{type:b,tag:Y,props:{},children:[{type:a,value:f},{type:a,value:"Add any environment variables that you use in your app to the "},{type:b,tag:j,props:{},children:[{type:a,value:"runtimeConfig"}]},{type:a,value:" property of the "},{type:b,tag:j,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:" file."},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Y,props:{},children:[{type:a,value:f},{type:a,value:"Migrate "},{type:b,tag:j,props:{},children:[{type:a,value:"process.env"}]},{type:a,value:" to "},{type:b,tag:j,props:{},children:[{type:a,value:p}]},{type:a,value:" throughout the Vue part of your app."},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:V,props:{id:Z},children:[{type:b,tag:I,props:{href:"#example"},children:[{type:a,value:_}]}]},{type:a,value:f},{type:b,tag:"code-group",props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:"nuxt.config.ts"}]},{type:b,tag:x,props:{className:[y,$]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" defineNuxtConfig "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"'nuxt'"}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"defineNuxtConfig"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n  runtimeConfig"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u002F\u002F Private config that is only available on the server"}]},{type:a,value:"\n    apiSecret"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"'123'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u002F\u002F Config within public will be also exposed to the client"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n      apiBase"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"'\u002Fapi'"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:"pages\u002Findex.vue"}]},{type:b,tag:x,props:{className:[y,"language-html"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C"}]},{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ae}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n  \n  "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u002F\u002F instead of process.env you will now access config.public.apiBase"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,E,"class-name"]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,"method",n,O]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,C]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]}]},{type:a,value:f}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:"server\u002Fapi\u002Fhello.ts"}]},{type:b,tag:x,props:{className:[y,$]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ae}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ac}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"req"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:" res"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u002F\u002F In server, you can now access config.apiSecret, in addition to config.public"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"apiSecret"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:".env"}]},{type:b,tag:x,props:{className:[y,"language-ini"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Runtime config values are automatically replaced by matching environment variables at runtime"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,N]},children:[{type:a,value:"NUXT_API_SECRET"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,aj,ak]},children:[{type:a,value:"api_secret_token"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,N]},children:[{type:a,value:"NUXT_PUBLIC_API_BASE"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,aj,ak]},children:[{type:a,value:"https:\u002F\u002Fnuxtjs.org"}]},{type:a,value:f}]}]}]}]}]},toc:{title:G,searchDepth:F,depth:F,links:[{id:W,depth:F,text:X},{id:Z,depth:F,text:_}]}},template:al},templateOptions:{header:u,footer:u,aside:u,asideClass:G,fluid:t,banner:t},_img:{}}],fetch:{"0":{headerLinks:[{title:al,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:am,slug:"examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:am,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"component-options",to:"\u002Fmigration\u002Fcomponent-options",title:"Component Options"},next:{slug:"bundling",to:"\u002Fmigration\u002Fbundling",title:"Build Tooling"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:U}}("text","element","span","token","punctuation","\n"," ",".","keyword","prose-code-inline","(","operator",")","function","\n  ","useRuntimeConfig","{","}","comment",false,true,"prose-code","filename","pre","line-numbers","code",":","\n    ","tag","=","console",2,"","prose-paragraph","prose-a","string",",","public","script","attr-name","property-access","log","config","runtime-config","Runtime Config","If you wish to reference environment variables within your Nuxt 3 app, you will need to use runtime config.",void 0,"prose-h2","migration","Migration","prose-li","example","Example","language-ts","\n\n","export","default","\u003E","const"," config ","apiBase","builtin","key","value","attr-value","Docs","Examples")));