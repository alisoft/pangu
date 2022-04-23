__NUXT_JSONP__("/zh/docs/features/deployment-targets", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{page:{key:"content:zh:docs:3.features:2.deployment-targets.md",generatedAt:new Date(1650678256080),mtime:new Date(1650678256070),slug:y,title:z,position:"999900030002",to:"\u002Fdocs\u002Ffeatures\u002Fdeployment-targets",draft:k,page:i,language:"zh",category:"features",empty:k,description:s,excerpt:void 0,body:{raw:"---\ntitle: Deployment Targets\ncategory: features\n---\n# Deployment Targets\n\n## Static Hosting\n\nNuxt also works as a static site generator. Statically render your Nuxt application and get all of the benefits of a universal app without a server. The `nuxt generate` command will generate a static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the `dist\u002F` directory. This improves performance as well as SEO and better offline support.\n\n::alert{type=\"info\"}\nDynamic routes are also generated thanks to the [Nuxt Crawler](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#crawler)\n::\n\nFor static sites the target of `static` needs to be added to your `nuxt.config` file.\n\n```js{}[nuxt.config.js]\nexport default {\n  target: 'static' \u002F\u002F default is 'server'\n}\n```\n\n**Running nuxt dev with the static target will improve the developer experience:**\n\n- Remove `req` & `res` from `context`\n- Fallback to client-side rendering on 404, errors and redirects [see SPA fallback](\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation#spa-fallback)\n- `$route.query` will always be equal to `{}` on server-side rendering\n- `process.static` is true\n\n::alert{type=\"info\"}\nWe are also exposing `process.target` for module authors to add logic depending on the user target.\n::\n\n## Server Hosting\n\nServer hosting means running Nuxt on a Node.js server. When the user opens your page, their browser will request that page from the server. Nuxt will handle the request, render the page and send back the resulting page with all its content.\n\nYou might need server hosting if you want to render HTML on each request rather than in advance at generate-time, or if you need [serverMiddleware](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware). \n\n::alert{type=\"info\"}\nYou can still run Nuxt with server hosting with `ssr: false` but Nuxt will not fully render the HTML for each page - leaving that task to the browser. You might choose this option if you need serverMiddleware but do not want fully server-side rendered HTML.\n::\n\nFor server hosting, `target: 'server'` is used, which is the default value. You will use the `build` command to build your application.\n\n```js{}[nuxt.config.js]\nexport default {\n  target: 'server'\n}\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:y},children:[{type:a,value:z}]},{type:a,value:c},{type:b,tag:A,props:{id:B},children:[{type:b,tag:j,props:{href:"#static-hosting"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt also works as a static site generator. Statically render your Nuxt application and get all of the benefits of a universal app without a server. The "},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:" command will generate a static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the "},{type:b,tag:f,props:{},children:[{type:a,value:"dist\u002F"}]},{type:a,value:" directory. This improves performance as well as SEO and better offline support."}]},{type:a,value:c},{type:b,tag:t,props:{type:u},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Dynamic routes are also generated thanks to the "},{type:b,tag:j,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#crawler"},children:[{type:a,value:"Nuxt Crawler"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For static sites the target of "},{type:b,tag:f,props:{},children:[{type:a,value:"static"}]},{type:a,value:" needs to be added to your "},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:" file."}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:d,props:{className:[E]},children:[{type:a,value:F}]},{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:J,props:{},children:[{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:d,props:{className:[e,O,P]},children:[{type:a,value:Q}]},{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,T]},children:[{type:a,value:"'static'"}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,"comment"]},children:[{type:a,value:"\u002F\u002F default is 'server'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:U}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Running nuxt dev with the static target will improve the developer experience:"}]}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Remove "},{type:b,tag:f,props:{},children:[{type:a,value:"req"}]},{type:a,value:" & "},{type:b,tag:f,props:{},children:[{type:a,value:"res"}]},{type:a,value:" from "},{type:b,tag:f,props:{},children:[{type:a,value:"context"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:a,value:"Fallback to client-side rendering on 404, errors and redirects "},{type:b,tag:j,props:{href:"\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation#spa-fallback"},children:[{type:a,value:"see SPA fallback"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"$route.query"}]},{type:a,value:" will always be equal to "},{type:b,tag:f,props:{},children:[{type:a,value:"{}"}]},{type:a,value:" on server-side rendering"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"process.static"}]},{type:a,value:" is true"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{type:u},children:[{type:b,tag:g,props:{},children:[{type:a,value:"We are also exposing "},{type:b,tag:f,props:{},children:[{type:a,value:"process.target"}]},{type:a,value:" for module authors to add logic depending on the user target."}]}]},{type:a,value:c},{type:b,tag:A,props:{id:V},children:[{type:b,tag:j,props:{href:"#server-hosting"},children:[{type:a,value:W}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Server hosting means running Nuxt on a Node.js server. When the user opens your page, their browser will request that page from the server. Nuxt will handle the request, render the page and send back the resulting page with all its content."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You might need server hosting if you want to render HTML on each request rather than in advance at generate-time, or if you need "},{type:b,tag:j,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware"},children:[{type:a,value:"serverMiddleware"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:t,props:{type:u},children:[{type:b,tag:g,props:{},children:[{type:a,value:"You can still run Nuxt with server hosting with "},{type:b,tag:f,props:{},children:[{type:a,value:"ssr: false"}]},{type:a,value:" but Nuxt will not fully render the HTML for each page - leaving that task to the browser. You might choose this option if you need serverMiddleware but do not want fully server-side rendered HTML."}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For server hosting, "},{type:b,tag:f,props:{},children:[{type:a,value:"target: 'server'"}]},{type:a,value:" is used, which is the default value. You will use the "},{type:b,tag:f,props:{},children:[{type:a,value:"build"}]},{type:a,value:" command to build your application."}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:d,props:{className:[E]},children:[{type:a,value:F}]},{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:J,props:{},children:[{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:K}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:L}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:d,props:{className:[e,O,P]},children:[{type:a,value:Q}]},{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,T]},children:[{type:a,value:"'server'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:U}]},{type:a,value:c}]}]}]}]},toc:{title:s,searchDepth:p,depth:p,links:[{id:B,depth:p,text:C},{id:V,depth:p,text:W}]}},template:X},templateOptions:{header:i,footer:i,aside:i,asideClass:s,fluid:k,banner:i},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:Y,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:Z,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:_,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:X,subtitle:"Create fast websites easily",slug:"docs",to:$,icon:"docs.svg",color:"bg-green-500"},{title:aa,subtitle:"Understand everything in Nuxt",slug:"examples",to:ab,icon:"examples.svg",color:"bg-green-600"},{title:ac,subtitle:"Learn with concrete cases",slug:"tutorials",to:ad,icon:"tutorials.svg",color:"bg-green-700"},{title:q,subtitle:v,href:r,icon:w,color:x}]},{title:"Explore",items:[{title:ae,subtitle:"How to Deploy Nuxt",slug:"deployments",to:af,icon:"deployments.svg",color:"bg-indigo-light"},{title:ag,subtitle:"Extend the power of Nuxt",href:ah,icon:"modules.svg",color:"bg-indigo"},{title:ai,subtitle:"Get started with themes",slug:"themes",to:aj,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ak,subtitle:"Latest news about Nuxt",slug:"announcements",to:al,icon:"announcements.svg",color:"bg-mint-lighter"},{title:am,subtitle:"They are Nuxt",slug:"teams",to:an,icon:"teams.svg",color:"bg-mint-light"},{title:ao,subtitle:"All the code we have released",slug:"releases",to:ap,icon:"releases.svg",color:"bg-mint"},{title:aq,subtitle:"They trust us",slug:"sponsors",to:ar,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:as}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:as},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ak,to:al},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aq,to:ar},{title:am,to:an},{title:ac,to:ad},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:$},{title:aa,to:ab},{title:ae,to:af},{title:q,href:r},{title:ag,href:ah},{title:ao,to:ap},{title:Y,to:Z},{title:ai,to:aj}]}],showCookieBanner:k},"1":{lastRelease:at,masterCoursesLink:{title:q,subtitle:v,href:r,icon:w,color:x}},"2":{lastRelease:at,masterCoursesLink:{title:q,subtitle:v,href:r,icon:w,color:x}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"pre-processors",to:"\u002Fexamples\u002Fassets-management\u002Fpre-processors",title:"Pre-processors"},next:{slug:"webpack-assets",to:"\u002Fexamples\u002Fassets-management\u002Fwebpack-assets",title:"webpack Assets"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",_,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","\n","span","token","prose-code-inline","prose-paragraph"," ",true,"prose-a",false,"keyword","module","punctuation","prose-li",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","","alert","info","Learn more with experts","master-courses.svg","bg-green-800","deployment-targets","Deployment Targets","prose-h2","static-hosting","Static Hosting","prose-code","filename","nuxt.config.js","pre","language-js","line-numbers","code","export","default","{","\n  ","literal-property","property","target","operator",":","string","}","server-hosting","Server Hosting","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));