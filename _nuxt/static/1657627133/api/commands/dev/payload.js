__NUXT_JSONP__("/api/commands/dev", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{page:{key:"content:en:3.api:5.commands:dev.md",generatedAt:new Date(1657627241250),mtime:new Date(1657627241238),slug:m,title:n,position:"000300059999",to:"\u002Fapi\u002Fcommands\u002Fdev",draft:g,page:h,language:"en",empty:g,description:j,excerpt:o,body:{raw:"# `nuxi dev`\n\n```{bash}\nnpx nuxi dev [rootDir] [--clipboard] [--open, -o] [--no-clear] [--port, -p] [--host, -h] [--https] [--ssl-cert] [--ssl-key]\n```\n\nThe `dev` command starts a development server with hot module replacement at [http:\u002F\u002Flocalhost:3000](https:\u002F\u002Flocalhost:3000)\n\nOption        | Default          | Description\n-------------------------|-----------------|------------------\n`rootDir` | `.` | The root directory of the application to serve.\n`--clipboard` | `false` | Copy URL to clipboard.\n`--open, -o` | `false` | Open URL in browser.\n`--no-clear` | `false` | Does not clear the console after startup.\n`--port, -p` | `3000` | Port to listen.\n`--host, -h` | `localhost` | Hostname of the server.\n`--https` | `false` | Listen with `https` protocol with a self-signed certificate by default.\n`--ssl-cert` |`null` | Specify a certificate for https.\n`--ssl-key` |`null` | Specify the key for the https certificate.\n\nThe port and host can also be set via NUXT_PORT, PORT, NUXT_HOST or HOST environment variables.\n\nThis command sets `process.env.NODE_ENV` to `development`.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxi-dev"},children:[{type:b,tag:e,props:{},children:[{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"],dataLine:"bash"},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"npx nuxi dev [rootDir] [--clipboard] [--open, -o] [--no-clear] [--port, -p] [--host, -h] [--https] [--ssl-cert] [--ssl-key]\n"}]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{},children:[{type:a,value:m}]},{type:a,value:" command starts a development server with hot module replacement at "},{type:b,tag:"prose-a",props:{href:"https:\u002F\u002Flocalhost:3000",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"http:\u002F\u002Flocalhost:3000"}]}]},{type:a,value:c},{type:b,tag:"prose-table",props:{},children:[{type:a,value:c},{type:b,tag:"prose-thead",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Option"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Default"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Description"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-tbody",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"rootDir"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The root directory of the application to serve."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--clipboard"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:i}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Copy URL to clipboard."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--open, -o"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:i}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Open URL in browser."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--no-clear"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:i}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Does not clear the console after startup."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--port, -p"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"3000"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Port to listen."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--host, -h"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"localhost"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hostname of the server."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--https"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:i}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Listen with "},{type:b,tag:e,props:{},children:[{type:a,value:"https"}]},{type:a,value:" protocol with a self-signed certificate by default."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--ssl-cert"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:q}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Specify a certificate for https."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--ssl-key"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:q}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Specify the key for the https certificate."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"The port and host can also be set via NUXT_PORT, PORT, NUXT_HOST or HOST environment variables."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"This command sets "},{type:b,tag:e,props:{},children:[{type:a,value:"process.env.NODE_ENV"}]},{type:a,value:" to "},{type:b,tag:e,props:{},children:[{type:a,value:"development"}]},{type:a,value:p}]}]},toc:{title:j,searchDepth:r,depth:r,links:[]}},template:s},templateOptions:{header:h,footer:h,aside:h,asideClass:j,fluid:g,banner:g},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:t,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:u,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:s,subtitle:"Create fast websites easily",slug:"docs",to:v,icon:"docs.svg",color:"bg-green-500"},{title:w,subtitle:"Understand everything in Nuxt",slug:"examples",to:x,icon:"examples.svg",color:"bg-green-600"},{title:y,subtitle:"Learn with concrete cases",slug:"tutorials",to:z,icon:"tutorials.svg",color:"bg-green-700"},{title:A,subtitle:"Learn more with experts",href:B,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:C,subtitle:"How to Deploy Nuxt",slug:"deployments",to:D,icon:"deployments.svg",color:"bg-indigo-light"},{title:E,subtitle:"Extend the power of Nuxt",href:F,icon:"modules.svg",color:"bg-indigo"},{title:G,subtitle:"Get started with themes",slug:"themes",to:H,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:I,subtitle:"Latest news about Nuxt",slug:"announcements",to:J,icon:"announcements.svg",color:"bg-mint-lighter"},{title:K,subtitle:"They are Nuxt",slug:"teams",to:L,icon:"teams.svg",color:"bg-mint-light"},{title:M,subtitle:"All the code we have released",slug:"releases",to:N,icon:"releases.svg",color:"bg-mint"},{title:O,subtitle:"They trust us",slug:"sponsors",to:P,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:Q}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:Q},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:I,to:J},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:O,to:P},{title:K,to:L},{title:y,to:z},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:v},{title:w,to:x},{title:C,to:D},{title:A,href:B},{title:E,href:F},{title:M,to:N},{title:t,to:u},{title:G,to:H}]}],showCookieBanner:g},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"build",to:"\u002Fapi\u002Fcommands\u002Fbuild",title:"nuxi build"},next:{slug:"generate",to:"\u002Fapi\u002Fcommands\u002Fgenerate",title:"nuxi generate"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:o}}("text","element","\n","prose-td","prose-code-inline","prose-tr",false,true,"false","","prose-paragraph","prose-th","dev","nuxi dev",void 0,".","null",2,"Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));