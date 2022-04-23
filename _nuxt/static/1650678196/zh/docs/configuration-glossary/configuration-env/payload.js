__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-env", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:9.configuration-env.md",generatedAt:new Date(1650678283509),mtime:new Date(1650678283494),slug:"configuration-env",title:X,position:"999900050009",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-env",draft:u,page:q,language:"zh",navigation:{title:j},description:Y,menu:j,category:"configuration-glossary",empty:u,excerpt:void 0,body:{raw:"---\ntitle: The env property\nnavigation.title: env\ndescription: Share environment variables between client and server.\nmenu: env\ncategory: configuration-glossary\n---\n\n# The env property\n\nShare environment variables between client and server.\n\n---\n\n- Type: `Object`\n\n\u003E Nuxt lets you create environment variables client side, also to be shared from server side.\n\nThe env property defines environment variables that should be available on the client side. They can be assigned using server side environment variables, the [dotenv module](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fdotenv-module) ones or similar.\n\n::alert\nFor nuxt versions \u003E 2.12+, in cases where environment variables are required at runtime (not build time) it is recommended to subsitute the `env` property with [runtimeConfig properties](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config): `publicRuntimeOptions` and `privateRuntimeOptions`. \n\u003Cbr\u003E\nLearn more with our tutorial about [moving from @nuxtjs\u002Fdotenv to runtime config](\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config\u002F).\n::\n\n**Make sure to read about `process.env` and `process.env == {}` below for better troubleshooting.**\n\n```js{}[nuxt.config.js]\nexport default {\n  env: {\n    baseUrl: process.env.BASE_URL || 'http:\u002F\u002Flocalhost:3000'\n  }\n}\n```\n\nThis lets you create a `baseUrl` property that will be equal to the `BASE_URL` server side environment variable if available or defined. If not, `baseUrl` in client side will be equal to `'http:\u002F\u002Flocalhost:3000'`. The server side variable BASE_URL is therefore copied to the client side via the `env` property in the `nuxt.config.js`. Alternatively, the other value is defined (http:\u002F\u002Flocalhost:3000).\n\nThen, I can access my `baseUrl` variable in 2 ways:\n\n1. Via `process.env.baseUrl`.\n2. Via `context.env.baseUrl`, see [context API](\u002Fdocs\u002Finternals-glossary\u002Fcontext).\n\nYou can use the `env` property for giving a public token for example.\n\nFor the example above, we can use it to configure [axios](https:\u002F\u002Fgithub.com\u002Fmzabriskie\u002Faxios).\n\n```js{}[plugins\u002Faxios.js]\nimport axios from 'axios'\n\nexport default axios.create({\n  baseURL: process.env.baseUrl\n})\n```\n\nThen, in your pages, you can import axios like this: `import axios from '~\u002Fplugins\u002Faxios'`\n\n## Automatic injection of environment variables\n\nIf you define environment variables starting with `NUXT_ENV_` in the build phase (e.g. `NUXT_ENV_COOL_WORD=freezing nuxt build` or `SET NUXT_ENV_COOL_WORD=freezing & nuxt build` for the Windows console, they'll be automatically injected into the process environment. Be aware that they'll potentially take precedence over defined variables in your `nuxt.config.js` with the same name.\n\n## process.env == {}\n\nNote that Nuxt uses webpack's `definePlugin` to define the environmental variable. This means that the actual `process` or `process.env` from Node.js is neither available nor defined. Each of the `env` properties defined in nuxt.config.js is individually mapped to `process.env.xxxx` and converted during compilation.\n\nMeaning, `console.log(process.env)` will output `{}` but `console.log(process.env.your_var)` will still output your value. When webpack compiles your code, it replaces all instances of `process.env.your_var` with the value you've set it to, e.g.: `env.test = 'testing123'`. If you use `process.env.test` in your code somewhere, it is actually translated to 'testing123'.\n\nbefore\n\n```js\nif (process.env.test == 'testing123')\n```\n\nafter\n\n```js\nif ('testing123' == 'testing123')\n```\n\n## serverMiddleware\n\nAs [serverMiddleware](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware) is decoupled from the main Nuxt build, `env` variables defined in `nuxt.config.js` are not available there.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-env-property"},children:[{type:a,value:X}]},{type:a,value:e},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:Y}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:D,props:{},children:[{type:a,value:e},{type:a,value:"Type: "},{type:b,tag:f,props:{},children:[{type:a,value:"Object"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt lets you create environment variables client side, also to be shared from server side."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The env property defines environment variables that should be available on the client side. They can be assigned using server side environment variables, the "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fdotenv-module",rel:[E,F,G],target:H},children:[{type:a,value:"dotenv module"}]},{type:a,value:" ones or similar."}]},{type:a,value:e},{type:b,tag:"alert",props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"For nuxt versions \u003E 2.12+, in cases where environment variables are required at runtime (not build time) it is recommended to subsitute the "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" property with "},{type:b,tag:l,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-runtime-config"},children:[{type:a,value:"runtimeConfig properties"}]},{type:a,value:": "},{type:b,tag:f,props:{},children:[{type:a,value:"publicRuntimeOptions"}]},{type:a,value:Z},{type:b,tag:f,props:{},children:[{type:a,value:"privateRuntimeOptions"}]},{type:a,value:".\n"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nLearn more with our tutorial about "},{type:b,tag:l,props:{href:"\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config\u002F"},children:[{type:a,value:"moving from @nuxtjs\u002Fdotenv to runtime config"}]},{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Make sure to read about "},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:Z},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" below for better troubleshooting."}]}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[$]},children:[{type:a,value:w}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ab}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:J}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:J}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:ad}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"||"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ae}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This lets you create a "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" property that will be equal to the "},{type:b,tag:f,props:{},children:[{type:a,value:ad}]},{type:a,value:" server side environment variable if available or defined. If not, "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" in client side will be equal to "},{type:b,tag:f,props:{},children:[{type:a,value:ae}]},{type:a,value:". The server side variable BASE_URL is therefore copied to the client side via the "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" property in the "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:". Alternatively, the other value is defined ("},{type:b,tag:l,props:{href:af,rel:[E,F,G],target:H},children:[{type:a,value:af}]},{type:a,value:")."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then, I can access my "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" variable in 2 ways:"}]},{type:a,value:e},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:e},{type:b,tag:D,props:{},children:[{type:a,value:e},{type:a,value:ag},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.baseUrl"}]},{type:a,value:k},{type:a,value:e}]},{type:a,value:e},{type:b,tag:D,props:{},children:[{type:a,value:e},{type:a,value:ag},{type:b,tag:f,props:{},children:[{type:a,value:"context.env.baseUrl"}]},{type:a,value:", see "},{type:b,tag:l,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Fcontext"},children:[{type:a,value:"context API"}]},{type:a,value:k},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You can use the "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" property for giving a public token for example."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"For the example above, we can use it to configure "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fmzabriskie\u002Faxios",rel:[E,F,G],target:H},children:[{type:a,value:ah}]},{type:a,value:k}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:c,props:{className:[$]},children:[{type:a,value:"plugins\u002Faxios.js"}]},{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"import"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:a,value:ah}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'axios'"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ab}]},{type:a,value:" axios"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"method","function",p]},children:[{type:a,value:"create"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:J}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:"baseURL"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then, in your pages, you can import axios like this: "},{type:b,tag:f,props:{},children:[{type:a,value:"import axios from '~\u002Fplugins\u002Faxios'"}]}]},{type:a,value:e},{type:b,tag:R,props:{id:ai},children:[{type:b,tag:l,props:{href:"#automatic-injection-of-environment-variables"},children:[{type:a,value:aj}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"If you define environment variables starting with "},{type:b,tag:f,props:{},children:[{type:a,value:"NUXT_ENV_"}]},{type:a,value:" in the build phase (e.g. "},{type:b,tag:f,props:{},children:[{type:a,value:"NUXT_ENV_COOL_WORD=freezing nuxt build"}]},{type:a,value:ak},{type:b,tag:f,props:{},children:[{type:a,value:"SET NUXT_ENV_COOL_WORD=freezing & nuxt build"}]},{type:a,value:" for the Windows console, they'll be automatically injected into the process environment. Be aware that they'll potentially take precedence over defined variables in your "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:" with the same name."}]},{type:a,value:e},{type:b,tag:R,props:{id:al},children:[{type:b,tag:l,props:{href:"#processenv--"},children:[{type:a,value:I}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Note that Nuxt uses webpack's "},{type:b,tag:f,props:{},children:[{type:a,value:"definePlugin"}]},{type:a,value:" to define the environmental variable. This means that the actual "},{type:b,tag:f,props:{},children:[{type:a,value:am}]},{type:a,value:ak},{type:b,tag:f,props:{},children:[{type:a,value:_}]},{type:a,value:" from Node.js is neither available nor defined. Each of the "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" properties defined in nuxt.config.js is individually mapped to "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.xxxx"}]},{type:a,value:" and converted during compilation."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Meaning, "},{type:b,tag:f,props:{},children:[{type:a,value:"console.log(process.env)"}]},{type:a,value:" will output "},{type:b,tag:f,props:{},children:[{type:a,value:"{}"}]},{type:a,value:" but "},{type:b,tag:f,props:{},children:[{type:a,value:"console.log(process.env.your_var)"}]},{type:a,value:" will still output your value. When webpack compiles your code, it replaces all instances of "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.your_var"}]},{type:a,value:" with the value you've set it to, e.g.: "},{type:b,tag:f,props:{},children:[{type:a,value:"env.test = 'testing123'"}]},{type:a,value:". If you use "},{type:b,tag:f,props:{},children:[{type:a,value:"process.env.test"}]},{type:a,value:" in your code somewhere, it is actually translated to 'testing123'."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"before"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,an]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"test"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ap}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"after"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,m,an]},children:[{type:a,value:ao}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:S}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ap}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:R,props:{id:aq},children:[{type:b,tag:l,props:{href:"#servermiddleware"},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"As "},{type:b,tag:l,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware"},children:[{type:a,value:T}]},{type:a,value:" is decoupled from the main Nuxt build, "},{type:b,tag:f,props:{},children:[{type:a,value:j}]},{type:a,value:" variables defined in "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:" are not available there."}]}]},toc:{title:ar,searchDepth:t,depth:t,links:[{id:ai,depth:t,text:aj},{id:al,depth:t,text:I},{id:aq,depth:t,text:T}]}},template:as},templateOptions:{header:q,footer:q,aside:q,asideClass:ar,fluid:u,banner:q},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:at,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:au,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:av,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:as,subtitle:"Create fast websites easily",slug:"docs",to:aw,icon:"docs.svg",color:"bg-green-500"},{title:ax,subtitle:"Understand everything in Nuxt",slug:"examples",to:ay,icon:"examples.svg",color:"bg-green-600"},{title:az,subtitle:"Learn with concrete cases",slug:"tutorials",to:aA,icon:"tutorials.svg",color:"bg-green-700"},{title:B,subtitle:U,href:C,icon:V,color:W}]},{title:"Explore",items:[{title:aB,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aC,icon:"deployments.svg",color:"bg-indigo-light"},{title:aD,subtitle:"Extend the power of Nuxt",href:aE,icon:"modules.svg",color:"bg-indigo"},{title:aF,subtitle:"Get started with themes",slug:"themes",to:aG,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aH,subtitle:"Latest news about Nuxt",slug:"announcements",to:aI,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aJ,subtitle:"They are Nuxt",slug:"teams",to:aK,icon:"teams.svg",color:"bg-mint-light"},{title:aL,subtitle:"All the code we have released",slug:"releases",to:aM,icon:"releases.svg",color:"bg-mint"},{title:aN,subtitle:"They trust us",slug:"sponsors",to:aO,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aP}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aP},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aH,to:aI},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aN,to:aO},{title:aJ,to:aK},{title:az,to:aA},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aw},{title:ax,to:ay},{title:aB,to:aC},{title:B,href:C},{title:aD,href:aE},{title:aL,to:aM},{title:at,to:au},{title:aF,to:aG}]}],showCookieBanner:u},"1":{lastRelease:aQ,masterCoursesLink:{title:B,subtitle:U,href:C,icon:V,color:W}},"2":{lastRelease:aQ,masterCoursesLink:{title:B,subtitle:U,href:C,icon:V,color:W}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"configuration-dir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-dir",title:"The dir Property"},next:{slug:"configuration-extend-plugins",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-extend-plugins",title:"The extendPlugins Property"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",av,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","List"])},mutations:[]}}("text","element","span","token","\n","prose-code-inline","punctuation","prose-paragraph"," ","env",".","prose-a","keyword","module","operator","property-access",true,"baseUrl","string",2,false,"prose-code","nuxt.config.js","pre","language-js","line-numbers","code","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-li","nofollow","noopener","noreferrer","_blank","process.env == {}","{","\n  ","literal-property","property",":","}","(",")","prose-h2","'testing123'","serverMiddleware","Learn more with experts","master-courses.svg","bg-green-800","The env property","Share environment variables between client and server."," and ","process.env","filename","export","default"," process","BASE_URL","'http:\u002F\u002Flocalhost:3000'","http:\u002F\u002Flocalhost:3000","Via ","axios","automatic-injection-of-environment-variables","Automatic injection of environment variables"," or ","processenv--","process","control-flow","if","==","servermiddleware","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));