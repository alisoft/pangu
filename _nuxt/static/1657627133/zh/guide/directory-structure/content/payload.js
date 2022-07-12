__NUXT_JSONP__("/zh/guide/directory-structure/content", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM){return {data:[{page:{key:"content:zh:2.guide:3.directory-structure:6.content.md",generatedAt:new Date(1657627201175),mtime:new Date(1657627201162),slug:I,title:I,position:"000200030006",to:"\u002Fguide\u002Fdirectory-structure\u002Fcontent",draft:r,page:s,language:"zh",icon:"IconDirectory",head:{title:J},empty:r,description:"The Nuxt Content module reads the content\u002F directory in your project and parses .md, .yml, .csv and .json files to create a file-based CMS for your application.",excerpt:K,body:{raw:"---\nicon: IconDirectory\ntitle: 'content'\nhead.title: Content directory\n---\n\n# Content directory\n\nThe [Nuxt Content module](https:\u002F\u002Fcontent.nuxtjs.org) reads the `content\u002F` directory in your project and parses `.md`, `.yml`, `.csv` and `.json` files to create a file-based CMS for your application.\n\n::list{type=success}\n\n- Render your content with built-in components.\n- Query your content with a MongoDB-like API.\n- Use your Vue components in Markdown files with the MDC syntax.\n- Automatically generate your navigation.\n\n::\n\n## Get started\n\n### Installation\n\nInstall the `@nuxt\u002Fcontent` module in your project:\n\n::code-group\n\n  ```bash [yarn]\n  yarn add --dev @nuxt\u002Fcontent\n  ```\n\n  ```bash [npm]\n  npm install --save-dev @nuxt\u002Fcontent\n  ```\n\n  ```bash [pnpm]\n  pnpm add -D @nuxt\u002Fcontent\n  ```\n\n::\n\nThen, add `@nuxt\u002Fcontent` to the `modules` section of `nuxt.config.ts`:\n\n```ts [nuxt.config.ts]\nimport { defineNuxtConfig } from 'nuxt'\n\nexport default defineNuxtConfig({\n  modules: [\n    '@nuxt\u002Fcontent'\n  ],\n  content: {\n    \u002F\u002F https:\u002F\u002Fcontent.nuxtjs.org\u002Fapi\u002Fconfiguration\n  }\n})\n```\n\n### Create content\n\nPlace your markdown files inside the `content\u002F` directory in the root directory of your project:\n\n```md [content\u002Findex.md]\n# Hello Content\n```\n\nThe module automatically loads and parses them.\n\n### Render pages\n\nTo render content pages, add a [catch-all route](\u002Fguide\u002Fdirectory-structure\u002Fpages\u002F#catch-all-route) using the `ContentDoc` component:\n\n```vue [pages\u002F[...slug].vue]\n\u003Ctemplate\u003E\n  \u003Cmain\u003E\n    \u003CContentDoc \u002F\u003E\n  \u003C\u002Fmain\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n## Documentation\n\n::alert{type=info}\nHead over to \u003Chttps:\u002F\u002Fcontent.nuxtjs.org\u003E to learn more about the Content module features, such as how to build queries and use Vue components in your Markdown files with the MDC syntax.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"content-directory"},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:k,props:{class:"d-heading-description"},children:[{type:a,value:"The "},{type:b,tag:j,props:{href:y,rel:[L,M,N],target:O},children:[{type:a,value:"Nuxt Content module"}]},{type:a,value:" reads the "},{type:b,tag:g,props:{},children:[{type:a,value:P}]},{type:a,value:" directory in your project and parses "},{type:b,tag:g,props:{},children:[{type:a,value:".md"}]},{type:a,value:Q},{type:b,tag:g,props:{},children:[{type:a,value:".yml"}]},{type:a,value:Q},{type:b,tag:g,props:{},children:[{type:a,value:".csv"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:".json"}]},{type:a,value:" files to create a file-based CMS for your application."}]},{type:a,value:e},{type:b,tag:"list",props:{type:"success"},children:[{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:e},{type:a,value:"Render your content with built-in components."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:e},{type:a,value:"Query your content with a MongoDB-like API."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:e},{type:a,value:"Use your Vue components in Markdown files with the MDC syntax."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:e},{type:a,value:"Automatically generate your navigation."},{type:a,value:e}]},{type:a,value:e}]}]},{type:a,value:e},{type:b,tag:R,props:{id:S},children:[{type:b,tag:j,props:{href:"#get-started"},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:z,props:{id:U},children:[{type:b,tag:j,props:{href:"#installation"},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Install the "},{type:b,tag:g,props:{},children:[{type:a,value:W}]},{type:a,value:" module in your project:"}]},{type:a,value:e},{type:b,tag:"code-group",props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[n]},children:[{type:a,value:X}]},{type:b,tag:o,props:{className:[p,A]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:a,value:" --dev @nuxt\u002Fcontent\n"}]}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[n]},children:[{type:a,value:Z}]},{type:b,tag:o,props:{className:[p,A]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"install"}]},{type:a,value:" --save-dev @nuxt\u002Fcontent\n"}]}]}]},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[n]},children:[{type:a,value:_}]},{type:b,tag:o,props:{className:[p,A]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:a,value:" -D @nuxt\u002Fcontent\n"}]}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Then, add "},{type:b,tag:g,props:{},children:[{type:a,value:W}]},{type:a,value:" to the "},{type:b,tag:g,props:{},children:[{type:a,value:"modules"}]},{type:a,value:" section of "},{type:b,tag:g,props:{},children:[{type:a,value:$}]},{type:a,value:B}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[n]},children:[{type:a,value:$}]},{type:b,tag:o,props:{className:[p,"language-ts"]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"import"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:" defineNuxtConfig "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"from"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"'nuxt'"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"defineNuxtConfig"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:"\n  modules"},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"'@nuxt\u002Fcontent'"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:"\n  content"},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F https:\u002F\u002Fcontent.nuxtjs.org\u002Fapi\u002Fconfiguration"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:")"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:z,props:{id:ac},children:[{type:b,tag:j,props:{href:"#create-content"},children:[{type:a,value:ad}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Place your markdown files inside the "},{type:b,tag:g,props:{},children:[{type:a,value:P}]},{type:a,value:" directory in the root directory of your project:"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[n]},children:[{type:a,value:"content\u002Findex.md"}]},{type:b,tag:o,props:{className:[p,"language-md"]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,"title","important"]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"#"}]},{type:a,value:" Hello Content"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The module automatically loads and parses them."}]},{type:a,value:e},{type:b,tag:z,props:{id:ae},children:[{type:b,tag:j,props:{href:"#render-pages"},children:[{type:a,value:af}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"To render content pages, add a "},{type:b,tag:j,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fpages\u002F#catch-all-route"},children:[{type:a,value:"catch-all route"}]},{type:a,value:" using the "},{type:b,tag:g,props:{},children:[{type:a,value:ag}]},{type:a,value:" component:"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[n]},children:[{type:a,value:"pages\u002F[...slug].vue"}]},{type:b,tag:o,props:{className:[p,"language-html"]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:ag}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:R,props:{id:ak},children:[{type:b,tag:j,props:{href:"#documentation"},children:[{type:a,value:G}]}]},{type:a,value:e},{type:b,tag:"alert",props:{type:"info"},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Head over to "},{type:b,tag:j,props:{href:y,rel:[L,M,N],target:O},children:[{type:a,value:y}]},{type:a,value:" to learn more about the Content module features, such as how to build queries and use Vue components in your Markdown files with the MDC syntax."}]}]}]},toc:{title:al,searchDepth:x,depth:x,links:[{id:S,depth:x,text:T,children:[{id:U,depth:H,text:V},{id:ac,depth:H,text:ad},{id:ae,depth:H,text:af}]},{id:ak,depth:x,text:G}]}},template:am},templateOptions:{header:s,footer:s,aside:s,asideClass:al,fluid:r,banner:r},_img:{}}],fetch:{"0":{headerLinks:[{title:"发现",items:[{title:an,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ao,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:am,subtitle:"Create fast websites easily",slug:"docs",to:ap,icon:"docs.svg",color:"bg-green-500"},{title:aq,subtitle:"Understand everything in Nuxt",slug:"examples",to:ar,icon:"examples.svg",color:"bg-green-600"},{title:as,subtitle:"Learn with concrete cases",slug:"tutorials",to:at,icon:"tutorials.svg",color:"bg-green-700"},{title:au,subtitle:"Learn more with experts",href:av,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:aw,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ax,icon:"deployments.svg",color:"bg-indigo-light"},{title:ay,subtitle:"Extend the power of Nuxt",href:az,icon:"modules.svg",color:"bg-indigo"},{title:aA,subtitle:"Get started with themes",slug:"themes",to:aB,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aC,subtitle:"Latest news about Nuxt",slug:"announcements",to:aD,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aE,subtitle:"They are Nuxt",slug:"teams",to:aF,icon:"teams.svg",color:"bg-mint-light"},{title:aG,subtitle:"All the code we have released",slug:"releases",to:aH,icon:"releases.svg",color:"bg-mint"},{title:aI,subtitle:"They trust us",slug:"sponsors",to:aJ,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aK}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aK},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aC,to:aD},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aI,to:aJ},{title:aE,to:aF},{title:as,to:at},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:G,to:ap},{title:aq,to:ar},{title:aw,to:ax},{title:au,href:av},{title:ay,href:az},{title:aG,to:aH},{title:an,to:ao},{title:aA,to:aB}]}],showCookieBanner:r},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:aL,to:"\u002Fguide\u002Fdirectory-structure\u002Fcomposables",title:aL},next:{slug:aM,to:"\u002Fguide\u002Fdirectory-structure\u002Flayouts",title:aM}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4"])},mutations:K}}("text","element","span","token","\n","punctuation","prose-code-inline"," ","tag","prose-a","prose-paragraph","function","prose-code","filename","pre","line-numbers","code",false,true,"prose-li","keyword","\n  ","\u003E",2,"https:\u002F\u002Fcontent.nuxtjs.org","prose-h3","language-bash",":","{","}","\n    ","\u003C","Documentation",3,"content","Content directory",void 0,"nofollow","noopener","noreferrer","_blank","content\u002F",", ","prose-h2","get-started","Get started","installation","Installation","@nuxt\u002Fcontent","yarn","add","npm","pnpm","nuxt.config.ts","string","operator","create-content","Create content","render-pages","Render pages","ContentDoc","template","main","\u003C\u002F","documentation","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners","composables","layouts")));