__NUXT_JSONP__("/zh/docs/concepts/static-site-generation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{page:{key:"content:zh:docs:2.concepts:4.static-site-generation.md",generatedAt:new Date(1650678259863),mtime:new Date(1650678259855),slug:p,title:q,position:"999900020004",to:"\u002Fdocs\u002Fconcepts\u002Fstatic-site-generation",draft:i,page:h,language:"zh",description:r,category:"concepts",empty:i,excerpt:void 0,body:{raw:"---\ntitle: Static Site Generation\ndescription: With static site generation you can render your application during the build phase and deploy it to any static hosting services such as Netlify, GitHub pages, Vercel etc. This means that no server is needed in order to deploy your application.\ncategory: concepts\n---\n# Static Site Generation\n\nWith static site generation you can render your application during the build phase and deploy it to any static hosting services such as Netlify, GitHub pages, Vercel etc. This means that no server is needed in order to deploy your application.\n\n---\n### Generating your site\n\nWhen deploying your site in with [`target:static`](\u002Fdocs\u002Ffeatures\u002Fdeployment-targets#static-hosting) all your `.vue` pages will be generated into HTML and JavaScript files. All calls to APIs will be made and cached in a folder called static inside your generated content so that no calls to your API need to be made on client side navigation.\n\n### Step 1: Browser to CDN\n\nWhen a browser sends the initial request, it will hit the CDN.\n\n### Step 2: CDN to Browser\n\nThe CDN will send the already generated HTML, JavaScript and static assets back to the browser. The content is displayed and the Vue.js hydration kicks in, making it reactive. After this process, the page is interactive.\n\n### Step 3: Browser to Browser\n\nNavigating between pages with [`\u003CNuxtLink\u003E`](\u002Fdocs\u002Ffeatures\u002Fnuxt-components#the-nuxtlink-component) is done on the client side so you don't hit the CDN again and all API calls will be loaded from the already cached static folder even if you hard refresh the browser.\n\n### SPA Fallback\n\nPages that have been excluded from generation, by using the `generate.exclude` property will fallback to being a single page application. These pages will therefore not exist in the CDN and will be rendered on client side in the browser once the user navigates to that page.\n\n::alert{type=\"next\"}\nTo learn more about the [generate property](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#exclude)\n::\n\n### Updating your content\n\nIn order to get new content to your site from your API you will need to regenerate your site again. With most static sites hosting providers you can do this by pushing your changes to your main branch via the git command or via a pull request.\n\n### Preview Mode\n\nThe Preview mode will call your API or your CMS so you can see the changes live before deploying. See the [preview mode](\u002Fdocs\u002Ffeatures\u002Flive-preview) on how to enable this feature.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:p},children:[{type:a,value:q}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:f,props:{id:s},children:[{type:b,tag:d,props:{href:"#generating-your-site"},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When deploying your site in with "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdeployment-targets#static-hosting"},children:[{type:b,tag:j,props:{},children:[{type:a,value:"target:static"}]}]},{type:a,value:" all your "},{type:b,tag:j,props:{},children:[{type:a,value:".vue"}]},{type:a,value:" pages will be generated into HTML and JavaScript files. All calls to APIs will be made and cached in a folder called static inside your generated content so that no calls to your API need to be made on client side navigation."}]},{type:a,value:c},{type:b,tag:f,props:{id:u},children:[{type:b,tag:d,props:{href:"#step-1-browser-to-cdn"},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When a browser sends the initial request, it will hit the CDN."}]},{type:a,value:c},{type:b,tag:f,props:{id:w},children:[{type:b,tag:d,props:{href:"#step-2-cdn-to-browser"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The CDN will send the already generated HTML, JavaScript and static assets back to the browser. The content is displayed and the Vue.js hydration kicks in, making it reactive. After this process, the page is interactive."}]},{type:a,value:c},{type:b,tag:f,props:{id:y},children:[{type:b,tag:d,props:{href:"#step-3-browser-to-browser"},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Navigating between pages with "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Ffeatures\u002Fnuxt-components#the-nuxtlink-component"},children:[{type:b,tag:j,props:{},children:[{type:a,value:"\u003CNuxtLink\u003E"}]}]},{type:a,value:" is done on the client side so you don't hit the CDN again and all API calls will be loaded from the already cached static folder even if you hard refresh the browser."}]},{type:a,value:c},{type:b,tag:f,props:{id:A},children:[{type:b,tag:d,props:{href:"#spa-fallback"},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pages that have been excluded from generation, by using the "},{type:b,tag:j,props:{},children:[{type:a,value:"generate.exclude"}]},{type:a,value:" property will fallback to being a single page application. These pages will therefore not exist in the CDN and will be rendered on client side in the browser once the user navigates to that page."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"next"},children:[{type:b,tag:e,props:{},children:[{type:a,value:"To learn more about the "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate#exclude"},children:[{type:a,value:"generate property"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{id:C},children:[{type:b,tag:d,props:{href:"#updating-your-content"},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"In order to get new content to your site from your API you will need to regenerate your site again. With most static sites hosting providers you can do this by pushing your changes to your main branch via the git command or via a pull request."}]},{type:a,value:c},{type:b,tag:f,props:{id:E},children:[{type:b,tag:d,props:{href:"#preview-mode"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The Preview mode will call your API or your CMS so you can see the changes live before deploying. See the "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Ffeatures\u002Flive-preview"},children:[{type:a,value:"preview mode"}]},{type:a,value:" on how to enable this feature."}]}]},toc:{title:G,searchDepth:H,depth:H,links:[{id:s,depth:g,text:t},{id:u,depth:g,text:v},{id:w,depth:g,text:x},{id:y,depth:g,text:z},{id:A,depth:g,text:B},{id:C,depth:g,text:D},{id:E,depth:g,text:F}]}},template:I},templateOptions:{header:h,footer:h,aside:h,asideClass:G,fluid:i,banner:h},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:J,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:K,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:L,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:I,subtitle:"Create fast websites easily",slug:"docs",to:M,icon:"docs.svg",color:"bg-green-500"},{title:N,subtitle:"Understand everything in Nuxt",slug:"examples",to:O,icon:"examples.svg",color:"bg-green-600"},{title:P,subtitle:"Learn with concrete cases",slug:"tutorials",to:Q,icon:"tutorials.svg",color:"bg-green-700"},{title:k,subtitle:m,href:l,icon:n,color:o}]},{title:"Explore",items:[{title:R,subtitle:"How to Deploy Nuxt",slug:"deployments",to:S,icon:"deployments.svg",color:"bg-indigo-light"},{title:T,subtitle:"Extend the power of Nuxt",href:U,icon:"modules.svg",color:"bg-indigo"},{title:V,subtitle:"Get started with themes",slug:"themes",to:W,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:X,subtitle:"Latest news about Nuxt",slug:"announcements",to:Y,icon:"announcements.svg",color:"bg-mint-lighter"},{title:Z,subtitle:"They are Nuxt",slug:"teams",to:_,icon:"teams.svg",color:"bg-mint-light"},{title:$,subtitle:"All the code we have released",slug:"releases",to:aa,icon:"releases.svg",color:"bg-mint"},{title:ab,subtitle:"They trust us",slug:"sponsors",to:ac,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ad}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ad},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:X,to:Y},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ab,to:ac},{title:Z,to:_},{title:P,to:Q},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:M},{title:N,to:O},{title:R,to:S},{title:k,href:l},{title:T,href:U},{title:$,to:aa},{title:J,to:K},{title:V,to:W}]}],showCookieBanner:i},"1":{lastRelease:ae,masterCoursesLink:{title:k,subtitle:m,href:l,icon:n,color:o}},"2":{lastRelease:ae,masterCoursesLink:{title:k,subtitle:m,href:l,icon:n,color:o}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"server-side-rendering",to:"\u002Fdocs\u002Fconcepts\u002Fserver-side-rendering",title:"Server Side Rendering"},next:{slug:"nuxt-lifecycle",to:"\u002Fdocs\u002Fconcepts\u002Fnuxt-lifecycle",title:"Nuxt Lifecycle"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",L,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","\n","prose-a","prose-paragraph","prose-h3",3,true,false,"prose-code-inline","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Learn more with experts","master-courses.svg","bg-green-800","static-site-generation","Static Site Generation","With static site generation you can render your application during the build phase and deploy it to any static hosting services such as Netlify, GitHub pages, Vercel etc. This means that no server is needed in order to deploy your application.","generating-your-site","Generating your site","step-1-browser-to-cdn","Step 1: Browser to CDN","step-2-cdn-to-browser","Step 2: CDN to Browser","step-3-browser-to-browser","Step 3: Browser to Browser","spa-fallback","SPA Fallback","updating-your-content","Updating your content","preview-mode","Preview Mode","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));