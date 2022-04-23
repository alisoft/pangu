__NUXT_JSONP__("/docs/configuration-glossary/configuration-alias", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:1.configuration-alias.md",generatedAt:new Date(1650678260315),mtime:new Date(1650678260306),slug:"configuration-alias",title:"The alias Property",position:"999900050001",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-alias",draft:y,page:v,language:"en",navigation:{title:J},description:aa,menu:J,category:"configuration-glossary",empty:y,excerpt:void 0,body:{raw:"---\ntitle: The alias Property\nnavigation.title: alias\ndescription: Nuxt allows you to use aliases to access custom directories within your JavaScript and CSS\nmenu: alias\ncategory: configuration-glossary\n---\n# The alias property\n\nNuxt allows you to use aliases to access custom directories within your JavaScript and CSS\n\n---\n\n- Type: `Object`\n- Default:\n  ```js\n  {\n    '~~': `\u003CrootDir\u003E`,\n    '@@': `\u003CrootDir\u003E`,\n    '~': `\u003CsrcDir\u003E`,\n    '@': `\u003CsrcDir\u003E`,\n    'assets': `\u003CsrcDir\u003E\u002Fassets`, \u002F\u002F (unless you have set a custom `dir.assets`)\n    'static': `\u003CsrcDir\u003E\u002Fstatic`, \u002F\u002F (unless you have set a custom `dir.static`)\n  }\n  ```\n\nThis option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS.\n\n```js{}[nuxt.config.js]\nimport { resolve } from 'path'\nexport default {\n  alias: {\n    'images': resolve(__dirname, '.\u002Fassets\u002Fimages'),\n    'style': resolve(__dirname, '.\u002Fassets\u002Fstyle'),\n    'data': resolve(__dirname, '.\u002Fassets\u002Fother\u002Fdata')\n  }\n}\n```\n\n```html{}[components\u002Fexample.vue]\n\u003Ctemplate\u003E\n  \u003Cimg src=\"~images\u002Fmain-bg.jpg\"\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nimport data from 'data\u002Ftest.json'\n\n\u002F\u002F etc.\n\u003C\u002Fscript\u003E\n\n\u003Cstyle\u003E\n@import '~style\u002Fvariables.scss';\n@import '~style\u002Futils.scss';\n@import '~style\u002Fbase.scss';\n\nbody {\n  background-image: url('~images\u002Fmain-bg.jpg');\n}\n\u003C\u002Fstyle\u003E\n```\n\n::alert{type=\"warning\"}\nWithin a Webpack context (image sources, CSS - but _not_ JavaScript) you must prefix your alias with `~` (as in the example above).\n::\n\n::alert{type=\"info\"}\nIf you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your `paths` object within `tsconfig.json`.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-alias-property"},children:[{type:a,value:"The alias property"}]},{type:a,value:f},{type:b,tag:z,props:{class:"d-heading-description"},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:ab,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:A,props:{},children:[{type:a,value:"Object"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ab,props:{},children:[{type:a,value:f},{type:a,value:"Default:"},{type:a,value:f},{type:b,tag:K,props:{},children:[{type:b,tag:L,props:{className:[M,ac]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'~~'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'@@'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'~'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'@'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'assets'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u003CsrcDir\u003E\u002Fassets"}]},{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F (unless you have set a custom `dir.assets`)"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'static'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u003CsrcDir\u003E\u002Fstatic"}]},{type:b,tag:c,props:{className:[d,j,h]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F (unless you have set a custom `dir.static`)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"This option lets you define aliases to directories within your project (in addition to the ones above). These aliases can be used within your JavaScript and CSS."}]},{type:a,value:f},{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[af]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:L,props:{className:[M,ac]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" resolve "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:ai}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'path'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,"literal-property",l]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'images'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'.\u002Fassets\u002Fimages'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'style'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'.\u002Fassets\u002Fstyle'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:"'data'"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'.\u002Fassets\u002Fother\u002Fdata'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[af]},children:[{type:a,value:"components\u002Fexample.vue"}]},{type:b,tag:L,props:{className:[M,"language-html"]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"img"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]},{type:a,value:"~images\u002Fmain-bg.jpg"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ak}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"data"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:ai}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'data\u002Ftest.json'"}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\u002F\u002F etc."}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:b,tag:c,props:{className:[d,"language-css"]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'~style\u002Fvariables.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'~style\u002Futils.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"'~style\u002Fbase.scss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:"body"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"background-image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,h,Y]},children:[{type:a,value:"'~images\u002Fmain-bg.jpg'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:al,props:{type:"warning"},children:[{type:b,tag:z,props:{},children:[{type:a,value:"Within a Webpack context (image sources, CSS - but "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"not"}]},{type:a,value:" JavaScript) you must prefix your alias with "},{type:b,tag:A,props:{},children:[{type:a,value:"~"}]},{type:a,value:" (as in the example above)."}]}]},{type:a,value:f},{type:b,tag:al,props:{type:"info"},children:[{type:b,tag:z,props:{},children:[{type:a,value:"If you are using TypeScript and want to use the alias you define within your TypeScript files, you will need to add the aliases to your "},{type:b,tag:A,props:{},children:[{type:a,value:"paths"}]},{type:a,value:" object within "},{type:b,tag:A,props:{},children:[{type:a,value:"tsconfig.json"}]},{type:a,value:"."}]}]}]},toc:{title:am,searchDepth:an,depth:an,links:[]}},template:ao},templateOptions:{header:v,footer:v,aside:v,asideClass:am,fluid:y,banner:v},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:ap,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aq,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ar,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ao,subtitle:"Create fast websites easily",slug:"docs",to:as,icon:"docs.svg",color:"bg-green-500"},{title:at,subtitle:"Understand everything in Nuxt",slug:"examples",to:au,icon:"examples.svg",color:"bg-green-600"},{title:av,subtitle:"Learn with concrete cases",slug:"tutorials",to:aw,icon:"tutorials.svg",color:"bg-green-700"},{title:H,subtitle:Z,href:I,icon:_,color:$}]},{title:"Explore",items:[{title:ax,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ay,icon:"deployments.svg",color:"bg-indigo-light"},{title:az,subtitle:"Extend the power of Nuxt",href:aA,icon:"modules.svg",color:"bg-indigo"},{title:aB,subtitle:"Get started with themes",slug:"themes",to:aC,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aD,subtitle:"Latest news about Nuxt",slug:"announcements",to:aE,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aF,subtitle:"They are Nuxt",slug:"teams",to:aG,icon:"teams.svg",color:"bg-mint-light"},{title:aH,subtitle:"All the code we have released",slug:"releases",to:aI,icon:"releases.svg",color:"bg-mint"},{title:aJ,subtitle:"They trust us",slug:"sponsors",to:aK,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aL}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aL},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aD,to:aE},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aJ,to:aK},{title:aF,to:aG},{title:av,to:aw},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:as},{title:at,to:au},{title:ax,to:ay},{title:H,href:I},{title:az,href:aA},{title:aH,to:aI},{title:ap,to:aq},{title:aB,to:aC}]}],showCookieBanner:y},"1":{lastRelease:aM,masterCoursesLink:{title:H,subtitle:Z,href:I,icon:_,color:$}},"2":{lastRelease:aM,masterCoursesLink:{title:H,subtitle:Z,href:I,icon:_,color:$}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"nuxt3-beta",to:"\u002Fannouncements\u002Fnuxt3-beta",title:"Introducing Nuxt 3 Beta"},next:{slug:"html-head",to:"\u002Fexamples\u002Fseo\u002Fhtml-head",title:"SEO HTML Head"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ar,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","punctuation","\n"," ","string","tag","template-punctuation","`","property",":",",","\n  ","operator","string-property","\u003E","template-string","keyword","module",true,"{","}",false,"prose-paragraph","prose-code-inline","function","(",")","\u003C","\n\n",";","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","alias","prose-code","pre","line-numbers","code","comment","\n    ","resolve","__dirname","\u003C\u002F","script","style","atrule","rule","@import","url","Learn more with experts","master-courses.svg","bg-green-800","Nuxt allows you to use aliases to access custom directories within your JavaScript and CSS","prose-li","language-js","\u003CrootDir\u003E","\u003CsrcDir\u003E","filename","import","imports","from","template","\"","alert","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));