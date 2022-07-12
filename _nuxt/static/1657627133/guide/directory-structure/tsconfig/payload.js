__NUXT_JSONP__("/guide/directory-structure/tsconfig", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O){return {data:[{page:{key:"content:en:2.guide:3.directory-structure:19.tsconfig.md",generatedAt:new Date(1657627208963),mtime:new Date(1657627208954),slug:i,title:j,position:"000200030019",to:"\u002Fguide\u002Fdirectory-structure\u002Ftsconfig",draft:d,page:h,language:"en",icon:"IconFile",head:{title:k},empty:d,description:"Nuxt automatically generates a .nuxt\u002Ftsconfig.json file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults. You can benefit from this by creating a tsconfig.json in the root of your project with the following content:",excerpt:l,body:{raw:"---\nicon: IconFile\ntitle: tsconfig.json\nhead.title: TypeScript configuration file\n---\n\n# TypeScript configuration file\n\nNuxt [automatically generates](\u002Fguide\u002Fconcepts\u002Ftypescript) a `.nuxt\u002Ftsconfig.json` file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults. You can benefit from this by creating a `tsconfig.json` in the root of your project with the following content:\n\n```json\n{\n  \"extends\": \".\u002F.nuxt\u002Ftsconfig.json\"\n}\n```\n\nAs you need to, you can customize the contents of this file. However, note that if you need to customize your `paths`, this will override the auto-generated path aliases. Instead, we recommend that you add any path aliases you need to the `alias` property within your `nuxt.config`, where they will get picked up and added to the autogenerated `tsconfig`.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"typescript-configuration-file"},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:m,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt "},{type:b,tag:"prose-a",props:{href:"\u002Fguide\u002Fconcepts\u002Ftypescript"},children:[{type:a,value:"automatically generates"}]},{type:a,value:" a "},{type:b,tag:c,props:{},children:[{type:a,value:".nuxt\u002Ftsconfig.json"}]},{type:a,value:" file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults. You can benefit from this by creating a "},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:" in the root of your project with the following content:"}]},{type:a,value:e},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-json","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:f,props:{className:[g,n]},children:[{type:a,value:"{"}]},{type:a,value:"\n  "},{type:b,tag:f,props:{className:[g,"property"]},children:[{type:a,value:"\"extends\""}]},{type:b,tag:f,props:{className:[g,"operator"]},children:[{type:a,value:":"}]},{type:a,value:" "},{type:b,tag:f,props:{className:[g,"string"]},children:[{type:a,value:"\".\u002F.nuxt\u002Ftsconfig.json\""}]},{type:a,value:e},{type:b,tag:f,props:{className:[g,n]},children:[{type:a,value:"}"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"As you need to, you can customize the contents of this file. However, note that if you need to customize your "},{type:b,tag:c,props:{},children:[{type:a,value:"paths"}]},{type:a,value:", this will override the auto-generated path aliases. Instead, we recommend that you add any path aliases you need to the "},{type:b,tag:c,props:{},children:[{type:a,value:"alias"}]},{type:a,value:" property within your "},{type:b,tag:c,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:", where they will get picked up and added to the autogenerated "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:"."}]}]},toc:{title:o,searchDepth:p,depth:p,links:[]}},template:q},templateOptions:{header:h,footer:h,aside:h,asideClass:o,fluid:d,banner:d},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:r,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:s,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:q,subtitle:"Create fast websites easily",slug:"docs",to:t,icon:"docs.svg",color:"bg-green-500"},{title:u,subtitle:"Understand everything in Nuxt",slug:"examples",to:v,icon:"examples.svg",color:"bg-green-600"},{title:w,subtitle:"Learn with concrete cases",slug:"tutorials",to:x,icon:"tutorials.svg",color:"bg-green-700"},{title:y,subtitle:"Learn more with experts",href:z,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:A,subtitle:"How to Deploy Nuxt",slug:"deployments",to:B,icon:"deployments.svg",color:"bg-indigo-light"},{title:C,subtitle:"Extend the power of Nuxt",href:D,icon:"modules.svg",color:"bg-indigo"},{title:E,subtitle:"Get started with themes",slug:"themes",to:F,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:G,subtitle:"Latest news about Nuxt",slug:"announcements",to:H,icon:"announcements.svg",color:"bg-mint-lighter"},{title:I,subtitle:"They are Nuxt",slug:"teams",to:J,icon:"teams.svg",color:"bg-mint-light"},{title:K,subtitle:"All the code we have released",slug:"releases",to:L,icon:"releases.svg",color:"bg-mint"},{title:M,subtitle:"They trust us",slug:"sponsors",to:N,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:O}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:O},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:G,to:H},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:M,to:N},{title:I,to:J},{title:w,to:x},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:t},{title:u,to:v},{title:A,to:B},{title:y,href:z},{title:C,href:D},{title:K,to:L},{title:r,to:s},{title:E,to:F}]}],showCookieBanner:d},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"package",to:"\u002Fguide\u002Fdirectory-structure\u002Fpackage",title:"package.json"},next:{slug:"node-server",to:"\u002Fguide\u002Fdeploy\u002Fnode-server",title:"Node.js Server"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:l}}("text","element","prose-code-inline",false,"\n","span","token",true,"tsconfig","tsconfig.json","TypeScript configuration file",void 0,"prose-paragraph","punctuation","",2,"Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));