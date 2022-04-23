__NUXT_JSONP__("/zh/docs/internals-glossary/internals-nuxt", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {data:[{page:{key:"content:zh:docs:6.internals-glossary:4.internals-nuxt.md",generatedAt:new Date(1650678297591),mtime:new Date(1650678297585),slug:"internals-nuxt",title:t,position:"999900060004",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-nuxt",draft:k,page:i,language:"zh",navigation:{title:"Nuxt Class"},description:"This is the core container which allows all modules and classes communicate with each other. All modules have access to Nuxt instance using this.nuxt.",category:"internals-glossary",empty:k,excerpt:void 0,body:{raw:"---\ntitle: The Nuxt class\nnavigation.title: Nuxt Class\ndescription: This is the core container which allows all modules and classes communicate with each other. All modules have access to Nuxt instance using this.nuxt.\ncategory: internals-glossary\n---\n# The Nuxt class\n\nThis is the core container which allows all modules and classes communicate with each other. All modules have access to Nuxt instance using `this.nuxt`.\n\n---\n\n- Source: **[core\u002Fnuxt.js](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fcore\u002Fsrc\u002Fnuxt.js)**\n\n## Hooks\n\nWe can register hooks on certain life cycle events.\n\n```js\nnuxt.hook('ready', async nuxt =\u003E {\n  \u002F\u002F Your custom code here\n})\n```\n\n| Plugin   | Arguments              | When                                                                           |\n| -------- | ---------------------- | ------------------------------------------------------------------------------ |\n| `ready`  | (nuxt)                 | Nuxt is ready to work (`ModuleContainer` and `Renderer` ready).                |\n| `error`  | (error)                | An unhandled error when calling hooks.                                         |\n| `close`  | (nuxt)                 | Nuxt instance is gracefully closing.                                           |\n| `listen` | (server, {host, port}) | Nuxt **internal** server starts listening. (Using `nuxt start` or `nuxt dev`). |\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-nuxt-class"},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:u,props:{class:"d-heading-description"},children:[{type:a,value:"This is the core container which allows all modules and classes communicate with each other. All modules have access to Nuxt instance using "},{type:b,tag:g,props:{},children:[{type:a,value:"this.nuxt"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:"prose-li",props:{},children:[{type:a,value:c},{type:a,value:"Source: "},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fcore\u002Fsrc\u002Fnuxt.js",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"core\u002Fnuxt.js"}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-h2",props:{id:y},children:[{type:b,tag:x,props:{href:"#hooks"},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"We can register hooks on certain life cycle events."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:A},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:v}]},{type:b,tag:d,props:{className:[e,"method","function","property-access"]},children:[{type:a,value:"hook"}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:"("}]},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"'ready'"}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:","}]},{type:a,value:l},{type:b,tag:d,props:{className:[e,"keyword"]},children:[{type:a,value:"async"}]},{type:a,value:l},{type:b,tag:d,props:{className:[e,"parameter"]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:d,props:{className:[e,"arrow","operator"]},children:[{type:a,value:"=\u003E"}]},{type:a,value:l},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:"{"}]},{type:a,value:"\n  "},{type:b,tag:d,props:{className:[e,"comment"]},children:[{type:a,value:"\u002F\u002F Your custom code here"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:"}"}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:")"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"prose-table",props:{},children:[{type:a,value:c},{type:b,tag:"prose-thead",props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"Plugin"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"Arguments"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"When"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-tbody",props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ready"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt is ready to work ("},{type:b,tag:g,props:{},children:[{type:a,value:"ModuleContainer"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"Renderer"}]},{type:a,value:" ready)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"error"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"(error)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"An unhandled error when calling hooks."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"close"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt instance is gracefully closing."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"listen"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"(server, {host, port})"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt "},{type:b,tag:w,props:{},children:[{type:a,value:"internal"}]},{type:a,value:" server starts listening. (Using "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt start"}]},{type:a,value:" or "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt dev"}]},{type:a,value:")."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:C,searchDepth:p,depth:p,links:[{id:y,depth:p,text:z}]}},template:D},templateOptions:{header:i,footer:i,aside:i,asideClass:C,fluid:k,banner:i},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:E,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:F,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:G,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:D,subtitle:"Create fast websites easily",slug:"docs",to:H,icon:"docs.svg",color:"bg-green-500"},{title:I,subtitle:"Understand everything in Nuxt",slug:"examples",to:J,icon:"examples.svg",color:"bg-green-600"},{title:K,subtitle:"Learn with concrete cases",slug:"tutorials",to:L,icon:"tutorials.svg",color:"bg-green-700"},{title:m,subtitle:q,href:n,icon:r,color:s}]},{title:"Explore",items:[{title:M,subtitle:"How to Deploy Nuxt",slug:"deployments",to:N,icon:"deployments.svg",color:"bg-indigo-light"},{title:O,subtitle:"Extend the power of Nuxt",href:P,icon:"modules.svg",color:"bg-indigo"},{title:Q,subtitle:"Get started with themes",slug:"themes",to:R,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:S,subtitle:"Latest news about Nuxt",slug:"announcements",to:T,icon:"announcements.svg",color:"bg-mint-lighter"},{title:U,subtitle:"They are Nuxt",slug:"teams",to:V,icon:"teams.svg",color:"bg-mint-light"},{title:W,subtitle:"All the code we have released",slug:"releases",to:X,icon:"releases.svg",color:"bg-mint"},{title:Y,subtitle:"They trust us",slug:"sponsors",to:Z,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:_}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:_},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:S,to:T},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:Y,to:Z},{title:U,to:V},{title:K,to:L},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:H},{title:I,to:J},{title:M,to:N},{title:m,href:n},{title:O,href:P},{title:W,to:X},{title:E,to:F},{title:Q,to:R}]}],showCookieBanner:k},"1":{lastRelease:$,masterCoursesLink:{title:m,subtitle:q,href:n,icon:r,color:s}},"2":{lastRelease:$,masterCoursesLink:{title:m,subtitle:q,href:n,icon:r,color:s}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"custom-loading-component",to:"\u002Fexamples\u002Floading\u002Fcustom-loading-component",title:"Custom Loading Component"},next:{slug:"internals-renderer",to:"\u002Fdocs\u002Finternals-glossary\u002Finternals-renderer",title:"The Renderer class"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",G,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","List"])},mutations:[]}}("text","element","\n","span","token","prose-td","prose-code-inline","punctuation",true,"prose-tr",false," ","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-th",2,"Learn more with experts","master-courses.svg","bg-green-800","The Nuxt class","prose-paragraph",".","prose-strong","prose-a","hooks","Hooks","nuxt","(nuxt)","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));