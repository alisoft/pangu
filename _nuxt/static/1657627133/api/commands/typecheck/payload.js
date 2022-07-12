__NUXT_JSONP__("/api/commands/typecheck", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{page:{key:"content:en:3.api:5.commands:typecheck.md",generatedAt:new Date(1657627225266),mtime:new Date(1657627225262),slug:k,title:l,position:"000300059999",to:"\u002Fapi\u002Fcommands\u002Ftypecheck",draft:e,page:f,language:"en",empty:e,description:g,excerpt:m,body:{raw:"# `nuxi typecheck`\n\n```{bash}\nnpx nuxi typecheck [rootDir]\n```\n\nThe `typecheck` command runs [`vue-tsc`](https:\u002F\u002Fgithub.com\u002Fjohnsoncodehk\u002Fvolar\u002Ftree\u002Fmaster\u002Fpackages\u002Fvue-tsc) to check types throughout your app.\n\nOption        | Default          | Description\n-------------------------|-----------------|------------------\n`rootDir` | `.` | The directory of the target application.\n\nThis command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a `.env` file or as a command-line argument.\n\n::alert\nYou can also enable type-checking at build or development time with [the `typescript.typeCheck` option in your `nuxt.config` file](\u002Fapi\u002Fconfiguration\u002Fnuxt.config#typescript).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxi-typecheck"},children:[{type:b,tag:d,props:{},children:[{type:a,value:l}]}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"],dataLine:"bash"},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"npx nuxi typecheck [rootDir]\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"The "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" command runs "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fjohnsoncodehk\u002Fvolar\u002Ftree\u002Fmaster\u002Fpackages\u002Fvue-tsc",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:d,props:{},children:[{type:a,value:"vue-tsc"}]}]},{type:a,value:" to check types throughout your app."}]},{type:a,value:c},{type:b,tag:"prose-table",props:{},children:[{type:a,value:c},{type:b,tag:"prose-thead",props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Option"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Default"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Description"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-tbody",props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"rootDir"}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"The directory of the target application."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"This command sets "},{type:b,tag:d,props:{},children:[{type:a,value:"process.env.NODE_ENV"}]},{type:a,value:" to "},{type:b,tag:d,props:{},children:[{type:a,value:"production"}]},{type:a,value:". To override, define "},{type:b,tag:d,props:{},children:[{type:a,value:"NODE_ENV"}]},{type:a,value:" in a "},{type:b,tag:d,props:{},children:[{type:a,value:".env"}]},{type:a,value:" file or as a command-line argument."}]},{type:a,value:c},{type:b,tag:"alert",props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"You can also enable type-checking at build or development time with "},{type:b,tag:n,props:{href:"\u002Fapi\u002Fconfiguration\u002Fnuxt.config#typescript"},children:[{type:a,value:"the "},{type:b,tag:d,props:{},children:[{type:a,value:"typescript.typeCheck"}]},{type:a,value:" option in your "},{type:b,tag:d,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:" file"}]},{type:a,value:p}]}]}]},toc:{title:g,searchDepth:q,depth:q,links:[]}},template:r},templateOptions:{header:f,footer:f,aside:f,asideClass:g,fluid:e,banner:e},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:s,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:t,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:r,subtitle:"Create fast websites easily",slug:"docs",to:u,icon:"docs.svg",color:"bg-green-500"},{title:v,subtitle:"Understand everything in Nuxt",slug:"examples",to:w,icon:"examples.svg",color:"bg-green-600"},{title:x,subtitle:"Learn with concrete cases",slug:"tutorials",to:y,icon:"tutorials.svg",color:"bg-green-700"},{title:z,subtitle:"Learn more with experts",href:A,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:B,subtitle:"How to Deploy Nuxt",slug:"deployments",to:C,icon:"deployments.svg",color:"bg-indigo-light"},{title:D,subtitle:"Extend the power of Nuxt",href:E,icon:"modules.svg",color:"bg-indigo"},{title:F,subtitle:"Get started with themes",slug:"themes",to:G,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:H,subtitle:"Latest news about Nuxt",slug:"announcements",to:I,icon:"announcements.svg",color:"bg-mint-lighter"},{title:J,subtitle:"They are Nuxt",slug:"teams",to:K,icon:"teams.svg",color:"bg-mint-light"},{title:L,subtitle:"All the code we have released",slug:"releases",to:M,icon:"releases.svg",color:"bg-mint"},{title:N,subtitle:"They trust us",slug:"sponsors",to:O,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:P}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:P},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:H,to:I},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:N,to:O},{title:J,to:K},{title:x,to:y},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:u},{title:v,to:w},{title:B,to:C},{title:z,href:A},{title:D,href:E},{title:L,to:M},{title:s,to:t},{title:F,to:G}]}],showCookieBanner:e},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"preview",to:"\u002Fapi\u002Fcommands\u002Fpreview",title:"nuxi preview"},next:{slug:"upgrade",to:"\u002Fapi\u002Fcommands\u002Fupgrade",title:"nuxi upgrade"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:m}}("text","element","\n","prose-code-inline",false,true,"","prose-paragraph","prose-th","prose-td","typecheck","nuxi typecheck",void 0,"prose-a","prose-tr",".",2,"Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));