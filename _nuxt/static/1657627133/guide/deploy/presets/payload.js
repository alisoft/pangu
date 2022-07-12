__NUXT_JSONP__("/guide/deploy/presets", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{page:{key:"content:en:2.guide:5.deploy:3.presets.md",generatedAt:new Date(1657627209398),mtime:new Date(1657627209389),slug:"presets",title:u,position:"000200050003",to:"\u002Fguide\u002Fdeploy\u002Fpresets",draft:m,page:o,language:"en",empty:m,description:v,excerpt:w,body:{raw:"# Deployment Presets\n\nIn addition to Node.js servers and static hosting services, a Nuxt 3 project can be deployed with several well-tested presets and minimal amount of configuration.\n\nYou can use the [Nuxt config](\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config) to explicitly set the preset to use:\n\n```js [nuxt.config.js|ts]\nexport default {\n  nitro: {\n    preset: 'node-server'\n  }\n}\n```\n\nOr directly use the `NITRO_PRESET` environment variable when running `nuxt build`:\n\n```bash\nNITRO_PRESET=node-server nuxt build\n```\n\n🔎 Check [the Nitro deployment](https:\u002F\u002Fnitro.unjs.io\u002Fdeploy\u002F) for all possible deployment presets and providers.\n\n## Supported Hosting Providers\n\nNuxt 3 can be deployed to several cloud providers with a minimal amount of configuration:\n\n- :IconCloud{class=\"h-5 w-4 inline mb-2\"} [AWS](\u002Fguide\u002Fdeploy\u002Fproviders\u002Faws)\n- :LogoAzure{class=\"h-5 w-4 inline mb-2\"} [Azure](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fazure)\n- :LogoCloudFlare{class=\"h-5 w-4 inline mb-2\"} [CloudFlare](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fcloudflare)\n- :IconCloud{class=\"h-5 w-4 inline mb-2\"} [Digital Ocean](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fdigitalocean)\n- :LogoFirebase{class=\"h-5 w-4 inline mb-2\"} [Firebase](\u002Fguide\u002Fdeploy\u002Fproviders\u002Ffirebase)\n- :IconCloud{class=\"h-5 w-4 inline mb-2\"} [heroku](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fheroku)\n- :IconCloud{class=\"h-5 w-4 inline mb-2\"} [layer0](\u002Fguide\u002Fdeploy\u002Fproviders\u002Flayer0)\n- :LogoNetlify{class=\"h-5 w-4 inline mb-2\"} [Netlify](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fnetlify)\n- :IconCloud{class=\"h-5 w-4 inline mb-2\"} [Render](\u002Fguide\u002Fdeploy\u002Fproviders\u002Frender)\n- :IconCloud{class=\"h-5 w-4 inline mb-2\"} [Stormkit](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fstormkit)\n- :LogoVercel{class=\"h-5 w-4 inline mb-2\"} [Vercel](\u002Fguide\u002Fdeploy\u002Fproviders\u002Fvercel)\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"deployment-presets"},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:n,props:{class:"d-heading-description"},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"You can use the "},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config"},children:[{type:a,value:"Nuxt config"}]},{type:a,value:" to explicitly set the preset to use:"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{className:["filename"]},children:[{type:a,value:"nuxt.config.js|ts"}]},{type:b,tag:y,props:{className:[z,"language-js"]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:e,props:{className:[f,B,C]},children:[{type:a,value:"export"}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,B,C]},children:[{type:a,value:"default"}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:"\n  nitro"},{type:b,tag:e,props:{className:[f,r]},children:[{type:a,value:s}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:"\n    preset"},{type:b,tag:e,props:{className:[f,r]},children:[{type:a,value:s}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,"string"]},children:[{type:a,value:"'node-server'"}]},{type:a,value:"\n  "},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Or directly use the "},{type:b,tag:F,props:{},children:[{type:a,value:G}]},{type:a,value:" environment variable when running "},{type:b,tag:F,props:{},children:[{type:a,value:"nuxt build"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:y,props:{className:[z,"language-bash"]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:e,props:{className:[f,"assign-left","variable"]},children:[{type:a,value:G}]},{type:b,tag:e,props:{className:[f,r]},children:[{type:a,value:"="}]},{type:a,value:"node-server nuxt build\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"🔎 Check "},{type:b,tag:d,props:{href:"https:\u002F\u002Fnitro.unjs.io\u002Fdeploy\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"the Nitro deployment"}]},{type:a,value:" for all possible deployment presets and providers."}]},{type:a,value:c},{type:b,tag:"prose-h2",props:{id:H},children:[{type:b,tag:d,props:{href:"#supported-hosting-providers"},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt 3 can be deployed to several cloud providers with a minimal amount of configuration:"}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:J},children:[{type:a,value:K}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:"logo-azure",props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fazure"},children:[{type:a,value:"Azure"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:"logo-cloud-flare",props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fcloudflare"},children:[{type:a,value:"CloudFlare"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fdigitalocean"},children:[{type:a,value:"Digital Ocean"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:"logo-firebase",props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Ffirebase"},children:[{type:a,value:"Firebase"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fheroku"},children:[{type:a,value:"heroku"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Flayer0"},children:[{type:a,value:"layer0"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:"logo-netlify",props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fnetlify"},children:[{type:a,value:"Netlify"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Frender"},children:[{type:a,value:"Render"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fstormkit"},children:[{type:a,value:"Stormkit"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:"logo-vercel",props:{className:[h,i,j,k]},children:[]},{type:a,value:c},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fvercel"},children:[{type:a,value:"Vercel"}]},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:L,searchDepth:t,depth:t,links:[{id:H,depth:t,text:I}]}},template:M},templateOptions:{header:o,footer:o,aside:o,asideClass:L,fluid:m,banner:m},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:N,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:O,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:M,subtitle:"Create fast websites easily",slug:"docs",to:P,icon:"docs.svg",color:"bg-green-500"},{title:Q,subtitle:"Understand everything in Nuxt",slug:"examples",to:R,icon:"examples.svg",color:"bg-green-600"},{title:S,subtitle:"Learn with concrete cases",slug:"tutorials",to:T,icon:"tutorials.svg",color:"bg-green-700"},{title:U,subtitle:"Learn more with experts",href:V,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:W,subtitle:"How to Deploy Nuxt",slug:"deployments",to:X,icon:"deployments.svg",color:"bg-indigo-light"},{title:Y,subtitle:"Extend the power of Nuxt",href:Z,icon:"modules.svg",color:"bg-indigo"},{title:_,subtitle:"Get started with themes",slug:"themes",to:$,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aa,subtitle:"Latest news about Nuxt",slug:"announcements",to:ab,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ac,subtitle:"They are Nuxt",slug:"teams",to:ad,icon:"teams.svg",color:"bg-mint-light"},{title:ae,subtitle:"All the code we have released",slug:"releases",to:af,icon:"releases.svg",color:"bg-mint"},{title:ag,subtitle:"They trust us",slug:"sponsors",to:ah,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ai}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ai},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aa,to:ab},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ag,to:ah},{title:ac,to:ad},{title:S,to:T},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:P},{title:Q,to:R},{title:W,to:X},{title:U,href:V},{title:Y,href:Z},{title:ae,to:af},{title:N,to:O},{title:_,to:$}]}],showCookieBanner:m},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"static-hosting",to:"\u002Fguide\u002Fdeploy\u002Fstatic-hosting",title:"Static Hosting"},next:{slug:"aws",to:J,title:K}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:w}}("text","element","\n","prose-a","span","token","prose-li","h-5","w-4","inline","mb-2","icon-cloud",false,"prose-paragraph",true," ","punctuation","operator",":",2,"Deployment Presets","In addition to Node.js servers and static hosting services, a Nuxt 3 project can be deployed with several well-tested presets and minimal amount of configuration.",void 0,"prose-code","pre","line-numbers","code","keyword","module","{","}","prose-code-inline","NITRO_PRESET","supported-hosting-providers","Supported Hosting Providers","\u002Fguide\u002Fdeploy\u002Fproviders\u002Faws","AWS","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));