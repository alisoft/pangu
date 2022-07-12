__NUXT_JSONP__("/getting-started/migration", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{page:{key:"content:en:1.getting-started:2.migration.md",generatedAt:new Date(1657627203968),mtime:new Date(1657627203956),slug:"migration",title:n,position:"000100020000",to:"\u002Fgetting-started\u002Fmigration",draft:g,page:h,language:"en",empty:g,description:o,excerpt:p,body:{raw:"# Migration Guide\n\nAlready have a Nuxt project to migrate? These migration guides are for users wanting to upgrade their Nuxt application to Nuxt 3 or take the first step in that direction with Nuxt Bridge.\n\n- [**From Nuxt 2 to Nuxt 3**](\u002Fmigration\u002Foverview)\n- [From Nuxt 2 to Nuxt Bridge](\u002Fbridge\u002Foverview)\n\n## Feature Comparison\n\nIn the table below, there is a quick comparison between 3 versions of Nuxt:\n\nFeature \u002F Version        | Nuxt 2          | Nuxt Bridge      | Nuxt 3\n-------------------------|-----------------|------------------|---------\nVue                      | 2               | 2                | 3\nStability                | 😊 Stable      | 😌 Semi-stable   | 😬 Unstable\nPerformance              | 🏎 Fast        | ✈️ Faster        | 🚀 Fastest\nNitro Engine             | ❌             | ✅               | ✅\nESM support              | 🌙 Partial     | 👍 Better        | ✅\nTypeScript               | ☑️ Opt-in      | 🚧 Partial       | ✅\nComposition API          | ❌             | 🚧 Partial       | ✅\nOptions API              | ✅             | ✅               | ✅\nComponents Auto Import   | ✅             | ✅               | ✅\n`\u003Cscript setup\u003E` syntax  | ❌             | 🚧 Partial       | ✅\nAuto Imports             | ❌             | ✅               | ✅\nWebpack                  | 4              | 4                | 5\nVite                     | ⚠️ Partial     | 🚧 Partial       | ✅\nNuxi CLI                 | ❌ Old         | ✅ nuxi          | ✅ nuxi\nStatic sites             | ✅             | ✅               | 🚧 Experimental\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"migration-guide"},children:[{type:a,value:n}]},{type:a,value:b},{type:c,tag:q,props:{class:"d-heading-description"},children:[{type:a,value:o}]},{type:a,value:b},{type:c,tag:"prose-ul",props:{},children:[{type:a,value:b},{type:c,tag:r,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{href:"\u002Fmigration\u002Foverview"},children:[{type:c,tag:"prose-strong",props:{},children:[{type:a,value:"From Nuxt 2 to Nuxt 3"}]}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:r,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{href:"\u002Fbridge\u002Foverview"},children:[{type:a,value:"From Nuxt 2 to Nuxt Bridge"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-h2",props:{id:s},children:[{type:c,tag:l,props:{href:"#feature-comparison"},children:[{type:a,value:t}]}]},{type:a,value:b},{type:c,tag:q,props:{},children:[{type:a,value:"In the table below, there is a quick comparison between 3 versions of Nuxt:"}]},{type:a,value:b},{type:c,tag:"prose-table",props:{},children:[{type:a,value:b},{type:c,tag:"prose-thead",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Feature \u002F Version"}]},{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Nuxt 2"}]},{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Nuxt Bridge"}]},{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Nuxt 3"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-tbody",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Vue"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"3"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Stability"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"😊 Stable"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"😌 Semi-stable"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"😬 Unstable"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Performance"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🏎 Fast"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"✈️ Faster"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🚀 Fastest"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Nitro Engine"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"ESM support"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🌙 Partial"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"👍 Better"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"TypeScript"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"☑️ Opt-in"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Composition API"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Options API"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Components Auto Import"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:"prose-code-inline",props:{},children:[{type:a,value:"\u003Cscript setup\u003E"}]},{type:a,value:" syntax"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Auto Imports"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Webpack"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"5"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Vite"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"⚠️ Partial"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Nuxi CLI"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"❌ Old"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Static sites"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🚧 Experimental"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]}]},toc:{title:x,searchDepth:m,depth:m,links:[{id:s,depth:m,text:t}]}},template:y},templateOptions:{header:h,footer:h,aside:h,asideClass:x,fluid:g,banner:g},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:z,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:A,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:y,subtitle:"Create fast websites easily",slug:"docs",to:B,icon:"docs.svg",color:"bg-green-500"},{title:C,subtitle:"Understand everything in Nuxt",slug:"examples",to:D,icon:"examples.svg",color:"bg-green-600"},{title:E,subtitle:"Learn with concrete cases",slug:"tutorials",to:F,icon:"tutorials.svg",color:"bg-green-700"},{title:G,subtitle:"Learn more with experts",href:H,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:I,subtitle:"How to Deploy Nuxt",slug:"deployments",to:J,icon:"deployments.svg",color:"bg-indigo-light"},{title:K,subtitle:"Extend the power of Nuxt",href:L,icon:"modules.svg",color:"bg-indigo"},{title:M,subtitle:"Get started with themes",slug:"themes",to:N,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:O,subtitle:"Latest news about Nuxt",slug:"announcements",to:P,icon:"announcements.svg",color:"bg-mint-lighter"},{title:Q,subtitle:"They are Nuxt",slug:"teams",to:R,icon:"teams.svg",color:"bg-mint-light"},{title:S,subtitle:"All the code we have released",slug:"releases",to:T,icon:"releases.svg",color:"bg-mint"},{title:U,subtitle:"They trust us",slug:"sponsors",to:V,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:W}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:W},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:O,to:P},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:U,to:V},{title:Q,to:R},{title:E,to:F},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:B},{title:C,to:D},{title:I,to:J},{title:G,href:H},{title:K,href:L},{title:S,to:T},{title:z,to:A},{title:M,to:N}]}],showCookieBanner:g},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"quick-start",to:"\u002Fgetting-started\u002Fquick-start",title:"Quick Start"},next:{slug:"introduction",to:"\u002Fguide\u002Fconcepts\u002Fintroduction",title:"What is Nuxt?"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:p}}("text","\n","element","prose-td","✅","prose-tr",false,true,"prose-th","❌","🚧 Partial","prose-a",2,"Migration Guide","Already have a Nuxt project to migrate? These migration guides are for users wanting to upgrade their Nuxt application to Nuxt 3 or take the first step in that direction with Nuxt Bridge.",void 0,"prose-paragraph","prose-li","feature-comparison","Feature Comparison","2","4","✅ nuxi","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));