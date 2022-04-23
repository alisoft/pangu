__NUXT_JSONP__("/docs/get-started/directory-structure", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{page:{key:"content:en:docs:1.get-started:3.directory-structure.md",generatedAt:new Date(1650678233101),mtime:new Date(1650678233060),slug:v,title:w,position:"999900010003",to:"\u002Fdocs\u002Fget-started\u002Fdirectory-structure",draft:n,page:l,language:"en",description:x,category:"get-started",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F03_directory_structure?fontsize=14&hidenavigation=1&theme=dark",empty:n,excerpt:void 0,body:{raw:"---\ntitle: Directory Structure\ndescription: The default Nuxt application structure is intended to provide a great starting point for both small and large applications. You are free to organize your application however you like and can create other directories as and when you need them.\ncategory: get-started\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F03_directory_structure?fontsize=14&hidenavigation=1&theme=dark\n---\n# Directory Structure\n\nThe default Nuxt application structure is intended to provide a great starting point for both small and large applications. You are free to organize your application however you like and can create other directories as and when you need them.\n\n---\n\nLet's create the directories and files that do not exist in our project yet.\n\n```bash\nmkdir components assets static\ntouch nuxt.config.js\n```\n\nThese are the main directories and files that we use when building a Nuxt application. You will find an explanation of each of them below.\n\n::alert{type=\"info\"}\nCreating directories with these names enables features in your Nuxt project.\n::\n\n## Directories\n\n### The pages directory\n\nThe `pages` directory contains your application's views and routes. As you've learned in the last chapter, Nuxt reads all the `.vue` files inside this directory and uses them to create the application router.\n\n::alert{type=\"next\"}\nLearn more about the [pages directory](\u002Fdocs\u002Fdirectory-structure\u002Fpages)\n::\n\n### The components directory\n\nThe `components` directory is where you put all your Vue.js components which are then imported into your pages.\n\nWith Nuxt you can create your components and auto import them into your .vue files meaning there is no need to manually import them in the script section. Nuxt will scan and auto import these for you once you have components set to true.\n\n::alert{type=\"next\"}\nLearn more about the [components directory](\u002Fdocs\u002Fdirectory-structure\u002Fcomponents)\n::\n\n### The assets directory\n\nThe `assets` directory contains your uncompiled assets such as your styles, images, or fonts.\n\n::alert{type=\"next\"}\nLearn more about the [assets directory](\u002Fdocs\u002Fdirectory-structure\u002Fassets)\n::\n\n### The static directory\n\nThe `static` directory is directly mapped to the server root and contains files that have to keep their names (e.g. `robots.txt`) _or_ likely won't change (e.g. the favicon)\n\n::alert{type=\"next\"}\nLearn more about the [static directory](\u002Fdocs\u002Fdirectory-structure\u002Fstatic)\n::\n\n### The nuxt.config.js file\n\nThe `nuxt.config.js` file is the single point of configuration for Nuxt. If you want to add modules or override default settings, this is the place to apply the changes.\n\n::alert{type=\"next\"}\nLearn more about the [nuxt.config.js file](\u002Fdocs\u002Fdirectory-structure\u002Fnuxt-config)\n::\n\n### The package.json file\n\nThe `package.json` file contains all the dependencies and scripts for your application.\n\n## More about the project structures\n\nThere are more helpful directories and files, including [content](\u002Fdocs\u002Fdirectory-structure\u002Fcontent), [layouts](\u002Fdocs\u002Fdirectory-structure\u002Flayouts), [middleware](\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware), [modules](\u002Fdocs\u002Fdirectory-structure\u002Fmodules), [plugins](\u002Fdocs\u002Fdirectory-structure\u002Fplugins) and [store](\u002Fdocs\u002Fdirectory-structure\u002Fstore) . As they aren't necessary for small applications, they are not covered here.\n\n::alert{type=\"next\"}\nTo learn about all directories in detail, feel free to read the [Directory Structure book](\u002Fdocs\u002Fdirectory-structure\u002Fnuxt).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:v},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:x}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Let's create the directories and files that do not exist in our project yet."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:y,props:{className:[z,A]},children:[{type:a,value:"mkdir"}]},{type:a,value:" components assets static\n"},{type:b,tag:y,props:{className:[z,A]},children:[{type:a,value:"touch"}]},{type:a,value:" nuxt.config.js\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"These are the main directories and files that we use when building a Nuxt application. You will find an explanation of each of them below."}]},{type:a,value:c},{type:b,tag:g,props:{type:"info"},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Creating directories with these names enables features in your Nuxt project."}]}]},{type:a,value:c},{type:b,tag:B,props:{id:C},children:[{type:b,tag:d,props:{href:"#directories"},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:h,props:{id:E},children:[{type:b,tag:d,props:{href:"#the-pages-directory"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:i},{type:b,tag:f,props:{},children:[{type:a,value:"pages"}]},{type:a,value:" directory contains your application's views and routes. As you've learned in the last chapter, Nuxt reads all the "},{type:b,tag:f,props:{},children:[{type:a,value:".vue"}]},{type:a,value:" files inside this directory and uses them to create the application router."}]},{type:a,value:c},{type:b,tag:g,props:{type:j},children:[{type:b,tag:e,props:{},children:[{type:a,value:m},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fpages"},children:[{type:a,value:"pages directory"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{id:G},children:[{type:b,tag:d,props:{href:"#the-components-directory"},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:i},{type:b,tag:f,props:{},children:[{type:a,value:"components"}]},{type:a,value:" directory is where you put all your Vue.js components which are then imported into your pages."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"With Nuxt you can create your components and auto import them into your .vue files meaning there is no need to manually import them in the script section. Nuxt will scan and auto import these for you once you have components set to true."}]},{type:a,value:c},{type:b,tag:g,props:{type:j},children:[{type:b,tag:e,props:{},children:[{type:a,value:m},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fcomponents"},children:[{type:a,value:"components directory"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{id:I},children:[{type:b,tag:d,props:{href:"#the-assets-directory"},children:[{type:a,value:J}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:i},{type:b,tag:f,props:{},children:[{type:a,value:"assets"}]},{type:a,value:" directory contains your uncompiled assets such as your styles, images, or fonts."}]},{type:a,value:c},{type:b,tag:g,props:{type:j},children:[{type:b,tag:e,props:{},children:[{type:a,value:m},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fassets"},children:[{type:a,value:"assets directory"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{id:K},children:[{type:b,tag:d,props:{href:"#the-static-directory"},children:[{type:a,value:L}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:i},{type:b,tag:f,props:{},children:[{type:a,value:"static"}]},{type:a,value:" directory is directly mapped to the server root and contains files that have to keep their names (e.g. "},{type:b,tag:f,props:{},children:[{type:a,value:"robots.txt"}]},{type:a,value:") "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"or"}]},{type:a,value:" likely won't change (e.g. the favicon)"}]},{type:a,value:c},{type:b,tag:g,props:{type:j},children:[{type:b,tag:e,props:{},children:[{type:a,value:m},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fstatic"},children:[{type:a,value:"static directory"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{id:M},children:[{type:b,tag:d,props:{href:"#the-nuxtconfigjs-file"},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:i},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt.config.js"}]},{type:a,value:" file is the single point of configuration for Nuxt. If you want to add modules or override default settings, this is the place to apply the changes."}]},{type:a,value:c},{type:b,tag:g,props:{type:j},children:[{type:b,tag:e,props:{},children:[{type:a,value:m},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt-config"},children:[{type:a,value:"nuxt.config.js file"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{id:O},children:[{type:b,tag:d,props:{href:"#the-packagejson-file"},children:[{type:a,value:P}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:i},{type:b,tag:f,props:{},children:[{type:a,value:"package.json"}]},{type:a,value:" file contains all the dependencies and scripts for your application."}]},{type:a,value:c},{type:b,tag:B,props:{id:Q},children:[{type:b,tag:d,props:{href:"#more-about-the-project-structures"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There are more helpful directories and files, including "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fcontent"},children:[{type:a,value:"content"}]},{type:a,value:o},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts"},children:[{type:a,value:"layouts"}]},{type:a,value:o},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware"},children:[{type:a,value:"middleware"}]},{type:a,value:o},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fmodules"},children:[{type:a,value:"modules"}]},{type:a,value:o},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fplugins"},children:[{type:a,value:"plugins"}]},{type:a,value:" and "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fstore"},children:[{type:a,value:"store"}]},{type:a,value:" . As they aren't necessary for small applications, they are not covered here."}]},{type:a,value:c},{type:b,tag:g,props:{type:j},children:[{type:b,tag:e,props:{},children:[{type:a,value:"To learn about all directories in detail, feel free to read the "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt"},children:[{type:a,value:"Directory Structure book"}]},{type:a,value:"."}]}]}]},toc:{title:S,searchDepth:p,depth:p,links:[{id:C,depth:p,text:D,children:[{id:E,depth:k,text:F},{id:G,depth:k,text:H},{id:I,depth:k,text:J},{id:K,depth:k,text:L},{id:M,depth:k,text:N},{id:O,depth:k,text:P}]},{id:Q,depth:p,text:R}]}},template:T},templateOptions:{header:l,footer:l,aside:l,asideClass:S,fluid:n,banner:l},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:U,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:V,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:W,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:T,subtitle:"Create fast websites easily",slug:"docs",to:X,icon:"docs.svg",color:"bg-green-500"},{title:Y,subtitle:"Understand everything in Nuxt",slug:"examples",to:Z,icon:"examples.svg",color:"bg-green-600"},{title:_,subtitle:"Learn with concrete cases",slug:"tutorials",to:$,icon:"tutorials.svg",color:"bg-green-700"},{title:q,subtitle:s,href:r,icon:t,color:u}]},{title:"Explore",items:[{title:aa,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ab,icon:"deployments.svg",color:"bg-indigo-light"},{title:ac,subtitle:"Extend the power of Nuxt",href:ad,icon:"modules.svg",color:"bg-indigo"},{title:ae,subtitle:"Get started with themes",slug:"themes",to:af,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ag,subtitle:"Latest news about Nuxt",slug:"announcements",to:ah,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ai,subtitle:"They are Nuxt",slug:"teams",to:aj,icon:"teams.svg",color:"bg-mint-light"},{title:ak,subtitle:"All the code we have released",slug:"releases",to:al,icon:"releases.svg",color:"bg-mint"},{title:am,subtitle:"They trust us",slug:"sponsors",to:an,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ao}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ao},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ag,to:ah},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:am,to:an},{title:ai,to:aj},{title:_,to:$},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:X},{title:Y,to:Z},{title:aa,to:ab},{title:q,href:r},{title:ac,href:ad},{title:ak,to:al},{title:U,to:V},{title:ae,to:af}]}],showCookieBanner:n},"1":{lastRelease:ap,masterCoursesLink:{title:q,subtitle:s,href:r,icon:t,color:u}},"2":{lastRelease:ap,masterCoursesLink:{title:q,subtitle:s,href:r,icon:t,color:u}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"active-link-classes",to:"\u002Fexamples\u002Frouting\u002Factive-link-classes",title:"Active Link Classes"},next:{slug:"dynamic-pages",to:"\u002Fexamples\u002Frouting\u002Fdynamic-pages",title:"Dynamic Pages"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",W,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections"])},mutations:[]}}("text","element","\n","prose-a","prose-paragraph","prose-code-inline","alert","prose-h3","The ","next",3,true,"Learn more about the ",false,", ",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Learn more with experts","master-courses.svg","bg-green-800","directory-structure","Directory Structure","The default Nuxt application structure is intended to provide a great starting point for both small and large applications. You are free to organize your application however you like and can create other directories as and when you need them.","span","token","function","prose-h2","directories","Directories","the-pages-directory","The pages directory","the-components-directory","The components directory","the-assets-directory","The assets directory","the-static-directory","The static directory","the-nuxtconfigjs-file","The nuxt.config.js file","the-packagejson-file","The package.json file","more-about-the-project-structures","More about the project structures","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));