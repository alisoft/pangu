__NUXT_JSONP__("/docs/configuration-glossary/configuration-plugins", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:22.configuration-plugins.md",generatedAt:new Date(1650678268591),mtime:new Date(1650678268581),slug:"configuration-plugins",title:"The plugins Property",position:"999900050022",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-plugins",draft:x,page:t,language:"en",navigation:{title:r},description:S,menu:r,category:"configuration-glossary",empty:x,excerpt:void 0,body:{raw:"---\ntitle: The plugins Property\nnavigation.title: plugins\ndescription: Use vue.js plugins with the plugins option of Nuxt.\nmenu: plugins\ncategory: configuration-glossary\n---\n# The plugins property\n\nUse vue.js plugins with the plugins option of Nuxt.\n\n---\n\n**Note**: Since Nuxt 2.4, `mode` has been introduced as option of `plugins` to specify plugin type, possible value are: `client` or `server`. `ssr: false` will be adapted to `mode: 'client'` and deprecated in next major release.\n\n- Type: `Array`\n  - Items: `String` or `Object`\n\nIf the item is an object, the properties are:\n\n- src: `String` (path of the file)\n- mode: `String` (can be `client` or `server`) _If defined, the file will be included only on the respective (client or server) side._\n\n**Note**: Old version\n\n- Type: `Array`\n  - Items: `String` or `Object`\n\nIf the item is an object, the properties are:\n\n- src: `String` (path of the file)\n- ssr: `Boolean` (default to `true`) _If false, the file will be included only on the client-side._\n\n\u003E The plugins property lets you add Vue.js plugins easily to your main application.\n\n```js{}[nuxt.config.js]\nexport default {\n  plugins: [\n    { src: '~\u002Fplugins\u002Fboth-sides.js' },\n    { src: '~\u002Fplugins\u002Fclient-only.js', mode: 'client' },\n    { src: '~\u002Fplugins\u002Fserver-only.js', mode: 'server' }\n  ]\n}\n```\n\n```js{}[nuxt.config.js]\nexport default {\n  plugins: ['@\u002Fplugins\u002Fant-design-vue']\n}\n```\n\n```js{}[plugins\u002Fant-design-vue.js]\nimport Vue from 'vue'\nimport Antd from 'ant-design-vue'\nimport 'ant-design-vue\u002Fdist\u002Fantd.css' \u002F\u002F Per Ant Design's docs\n\nVue.use(Antd)\n```\n\nNote that the css was [imported as per Ant Design Documentation](https:\u002F\u002Fvue.ant.design\u002Fdocs\u002Fvue\u002Fgetting-started\u002F#3.-Use-antd's-Components 'External tip relevant to building plugins')\n\nAll the paths defined in the `plugins` property will be **imported** before initializing the main application.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-plugins-property"},children:[{type:a,value:"The plugins property"}]},{type:a,value:e},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:D,props:{},children:[{type:a,value:T}]},{type:a,value:": Since Nuxt 2.4, "},{type:b,tag:h,props:{},children:[{type:a,value:E}]},{type:a,value:" has been introduced as option of "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" to specify plugin type, possible value are: "},{type:b,tag:h,props:{},children:[{type:a,value:U}]},{type:a,value:y},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:". "},{type:b,tag:h,props:{},children:[{type:a,value:"ssr: false"}]},{type:a,value:" will be adapted to "},{type:b,tag:h,props:{},children:[{type:a,value:"mode: 'client'"}]},{type:a,value:" and deprecated in next major release."}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:W},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:Y},{type:b,tag:h,props:{},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:h,props:{},children:[{type:a,value:Z}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:u}]},{type:a,value:aa},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"mode: "},{type:b,tag:h,props:{},children:[{type:a,value:u}]},{type:a,value:" (can be "},{type:b,tag:h,props:{},children:[{type:a,value:U}]},{type:a,value:y},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:ab},{type:b,tag:ac,props:{},children:[{type:a,value:"If defined, the file will be included only on the respective (client or server) side."}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:D,props:{},children:[{type:a,value:T}]},{type:a,value:": Old version"}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:W},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:Y},{type:b,tag:h,props:{},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:h,props:{},children:[{type:a,value:Z}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:u}]},{type:a,value:aa},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"ssr: "},{type:b,tag:h,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:" (default to "},{type:b,tag:h,props:{},children:[{type:a,value:"true"}]},{type:a,value:ab},{type:b,tag:ac,props:{},children:[{type:a,value:"If false, the file will be included only on the client-side."}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"The plugins property lets you add Vue.js plugins easily to your main application."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[G]},children:[{type:a,value:ad}]},{type:b,tag:H,props:{className:[I,J]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ag}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'~\u002Fplugins\u002Fboth-sides.js'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'~\u002Fplugins\u002Fclient-only.js'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'client'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'~\u002Fplugins\u002Fserver-only.js'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'server'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:w}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:w}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[G]},children:[{type:a,value:ad}]},{type:b,tag:H,props:{className:[I,J]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'@\u002Fplugins\u002Fant-design-vue'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:w}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[G]},children:[{type:a,value:"plugins\u002Fant-design-vue.js"}]},{type:b,tag:H,props:{className:[I,J]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:aj}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'vue'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:al}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'ant-design-vue'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'ant-design-vue\u002Fdist\u002Fantd.css'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F Per Ant Design's docs"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,"method","function","property-access"]},children:[{type:a,value:"use"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:")"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"Note that the css was "},{type:b,tag:"prose-a",props:{href:"https:\u002F\u002Fvue.ant.design\u002Fdocs\u002Fvue\u002Fgetting-started\u002F#3.-Use-antd's-Components",rel:["nofollow","noopener","noreferrer"],target:"_blank",title:"External tip relevant to building plugins"},children:[{type:a,value:"imported as per Ant Design Documentation"}]}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"All the paths defined in the "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" property will be "},{type:b,tag:D,props:{},children:[{type:a,value:"imported"}]},{type:a,value:" before initializing the main application."}]}]},toc:{title:am,searchDepth:an,depth:an,links:[]}},template:ao},templateOptions:{header:t,footer:t,aside:t,asideClass:am,fluid:x,banner:t},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:ap,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aq,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ar,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ao,subtitle:"Create fast websites easily",slug:"docs",to:as,icon:"docs.svg",color:"bg-green-500"},{title:at,subtitle:"Understand everything in Nuxt",slug:"examples",to:au,icon:"examples.svg",color:"bg-green-600"},{title:av,subtitle:"Learn with concrete cases",slug:"tutorials",to:aw,icon:"tutorials.svg",color:"bg-green-700"},{title:B,subtitle:P,href:C,icon:Q,color:R}]},{title:"Explore",items:[{title:ax,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ay,icon:"deployments.svg",color:"bg-indigo-light"},{title:az,subtitle:"Extend the power of Nuxt",href:aA,icon:"modules.svg",color:"bg-indigo"},{title:aB,subtitle:"Get started with themes",slug:"themes",to:aC,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aD,subtitle:"Latest news about Nuxt",slug:"announcements",to:aE,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aF,subtitle:"They are Nuxt",slug:"teams",to:aG,icon:"teams.svg",color:"bg-mint-light"},{title:aH,subtitle:"All the code we have released",slug:"releases",to:aI,icon:"releases.svg",color:"bg-mint"},{title:aJ,subtitle:"They trust us",slug:"sponsors",to:aK,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aL}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aL},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aD,to:aE},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aJ,to:aK},{title:aF,to:aG},{title:av,to:aw},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:as},{title:at,to:au},{title:ax,to:ay},{title:B,href:C},{title:az,href:aA},{title:aH,to:aI},{title:ap,to:aq},{title:aB,to:aC}]}],showCookieBanner:x},"1":{lastRelease:aM,masterCoursesLink:{title:B,subtitle:P,href:C,icon:Q,color:R}},"2":{lastRelease:aM,masterCoursesLink:{title:B,subtitle:P,href:C,icon:Q,color:R}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"configuration-modulesdir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-modulesdir",title:"The modulesDir Property"},next:{slug:"configuration-render",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-render",title:"The render Property"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ar,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","\n"," ","punctuation","prose-code-inline","keyword","module","string","prose-paragraph","prose-li","literal-property","property","operator",":","plugins","prose-ul",true,"String","{","}",false," or ",",","maybe-class-name","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-strong","mode","prose-code","filename","pre","language-js","line-numbers","code","\n  ","\n    ","src","import","Learn more with experts","master-courses.svg","bg-green-800","Use vue.js plugins with the plugins option of Nuxt.","Note","client","server","Type: ","Array","Items: ","Object","If the item is an object, the properties are:","src: "," (path of the file)",") ","prose-em","nuxt.config.js","export","default","[","]","imports","Vue","from","Antd","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));