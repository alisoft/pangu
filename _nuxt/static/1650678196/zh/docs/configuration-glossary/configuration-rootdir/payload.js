__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-rootdir", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:24.configuration-rootdir.md",generatedAt:new Date(1650678287543),mtime:new Date(1650678287528),slug:"configuration-rootdir",title:"The rootDir Property",position:"999900050024",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-rootdir",draft:f,page:e,language:"zh",navigation:{title:g},description:n,menu:g,category:"configuration-glossary",empty:f,excerpt:void 0,body:{raw:"---\ntitle: The rootDir Property\nnavigation.title: rootDir\ndescription: Define the workspace of Nuxt application\nmenu: rootDir\ncategory: configuration-glossary\n---\n# The rootDir property\n\nDefine the workspace of Nuxt application\n\n---\n\n- Type: `String`\n- Default: `process.cwd()`\n\nThis property will be overwritten by the nuxt commands(nuxt start, nuxt build etc) if an argument is passed to them. Eg running `nuxt .\u002Fmy-app\u002F` will set the `rootDir` to the absolute path of `.\u002Fmy-app\u002F` from the current\u002Fworking directory.\n\nBecause of that its normally not needed to configure this option unless you will use [Nuxt programmatically](\u002Fdocs\u002Finternals-glossary\u002Fnuxt).\n\n::alert{type=\"info\"}\nBoth `rootDir` as the package root containing the `node_modules` directory need to be within the same directory tree to be able to \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fmodules.html#modules_all_together\"\u003Eresolve dependencies\u003C\u002Fa\u003E. See the [`srcDir` option](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-srcdir) for examples of directory structure when that is not the case.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-rootdir-property"},children:[{type:a,value:"The rootDir property"}]},{type:a,value:c},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Type: "},{type:b,tag:d,props:{},children:[{type:a,value:"String"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Default: "},{type:b,tag:d,props:{},children:[{type:a,value:"process.cwd()"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"This property will be overwritten by the nuxt commands(nuxt start, nuxt build etc) if an argument is passed to them. Eg running "},{type:b,tag:d,props:{},children:[{type:a,value:"nuxt .\u002Fmy-app\u002F"}]},{type:a,value:" will set the "},{type:b,tag:d,props:{},children:[{type:a,value:g}]},{type:a,value:" to the absolute path of "},{type:b,tag:d,props:{},children:[{type:a,value:".\u002Fmy-app\u002F"}]},{type:a,value:" from the current\u002Fworking directory."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Because of that its normally not needed to configure this option unless you will use "},{type:b,tag:p,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt"},children:[{type:a,value:"Nuxt programmatically"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"info"},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Both "},{type:b,tag:d,props:{},children:[{type:a,value:g}]},{type:a,value:" as the package root containing the "},{type:b,tag:d,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:" directory need to be within the same directory tree to be able to "},{type:b,tag:"a",props:{href:"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fmodules.html#modules_all_together"},children:[{type:a,value:"resolve dependencies"}]},{type:a,value:". See the "},{type:b,tag:p,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-srcdir"},children:[{type:b,tag:d,props:{},children:[{type:a,value:"srcDir"}]},{type:a,value:" option"}]},{type:a,value:" for examples of directory structure when that is not the case."}]}]}]},toc:{title:q,searchDepth:r,depth:r,links:[]}},template:s},templateOptions:{header:e,footer:e,aside:e,asideClass:q,fluid:f,banner:e},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:t,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:u,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:v,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:s,subtitle:"Create fast websites easily",slug:"docs",to:w,icon:"docs.svg",color:"bg-green-500"},{title:x,subtitle:"Understand everything in Nuxt",slug:"examples",to:y,icon:"examples.svg",color:"bg-green-600"},{title:z,subtitle:"Learn with concrete cases",slug:"tutorials",to:A,icon:"tutorials.svg",color:"bg-green-700"},{title:i,subtitle:k,href:j,icon:l,color:m}]},{title:"Explore",items:[{title:B,subtitle:"How to Deploy Nuxt",slug:"deployments",to:C,icon:"deployments.svg",color:"bg-indigo-light"},{title:D,subtitle:"Extend the power of Nuxt",href:E,icon:"modules.svg",color:"bg-indigo"},{title:F,subtitle:"Get started with themes",slug:"themes",to:G,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:H,subtitle:"Latest news about Nuxt",slug:"announcements",to:I,icon:"announcements.svg",color:"bg-mint-lighter"},{title:J,subtitle:"They are Nuxt",slug:"teams",to:K,icon:"teams.svg",color:"bg-mint-light"},{title:L,subtitle:"All the code we have released",slug:"releases",to:M,icon:"releases.svg",color:"bg-mint"},{title:N,subtitle:"They trust us",slug:"sponsors",to:O,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:P}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:P},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:H,to:I},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:N,to:O},{title:J,to:K},{title:z,to:A},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:w},{title:x,to:y},{title:B,to:C},{title:i,href:j},{title:D,href:E},{title:L,to:M},{title:t,to:u},{title:F,to:G}]}],showCookieBanner:f},"1":{lastRelease:Q,masterCoursesLink:{title:i,subtitle:k,href:j,icon:l,color:m}},"2":{lastRelease:Q,masterCoursesLink:{title:i,subtitle:k,href:j,icon:l,color:m}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"configuration-render",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-render",title:"The render Property"},next:{slug:"configuration-router",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-router",title:"The router Property"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",v,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","List"])},mutations:[]}}("text","element","\n","prose-code-inline",true,false,"rootDir","prose-paragraph","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Learn more with experts","master-courses.svg","bg-green-800","Define the workspace of Nuxt application","prose-li","prose-a","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));