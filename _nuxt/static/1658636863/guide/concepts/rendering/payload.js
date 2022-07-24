__NUXT_JSONP__("/guide/concepts/rendering", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){return {data:[{page:{key:"content:en:2.guide:1.concepts:3.rendering.md",generatedAt:new Date(1658636979150),mtime:new Date(1658636979130),slug:t,title:u,position:"000200010003",to:"\u002Fguide\u002Fconcepts\u002Frendering",draft:l,page:m,language:"en",empty:l,description:"Both the browser and server can interpret JavaScript code to render Vue.js components into HTML elements. This step is called rendering. Nuxt supports both client-side and universal rendering. The two approaches have pros and cons that we will cover in this section.",excerpt:v,body:{raw:"# Rendering Modes\n\nBoth the browser and server can interpret JavaScript code to render Vue.js components into HTML elements. This step is called **rendering**. Nuxt supports both **client-side** and **universal** rendering. The two approaches have pros and cons that we will cover in this section.\n\n## Client-side only rendering\n\nOut of the box, a traditional Vue.js application is rendered in the browser (or **client**). Then, Vue.js generates HTML elements after the browser downloads and parses all the JavaScript code containing the instructions to create the current interface.\n\n![Users have to wait for the browser to download, parse and execute the JavaScript before seeing the page's content](\u002Fimg\u002Fconcepts\u002Frendering\u002Flight\u002Fcsr.svg){.dark:hidden}\n![Users have to wait for the browser to download, parse and execute the JavaScript before seeing the page's content](\u002Fimg\u002Fconcepts\u002Frendering\u002Fdark\u002Fcsr.svg){.light:hidden}\n\nWhile this technique allows building complex and dynamic UIs with smooth page transitions, it has different pros and cons:\n\n### Pros\n\n- **Development speed**: When working entirely on the client-side, we don't have to worry about the server compatibility of the code, for example, by using browser-only APIs like the `window` object.\n- **Cheaper:** Running a server adds a cost of infrastructure as you would need to run on a platform that supports JavaScript. We can host Client-only applications on any static server with HTML, CSS, and JavaScript files.\n- **Offline:** Because code entirely runs in the browser, it can nicely keep working while the internet is unavailable.\n\n### Cons\n\n- **Performance**: The user has to wait for the browser to download, parse and run JavaScript files. Depending on the network for the download part and the user's device for the parsing and execution, this can take some time and impact the user's experience.\n- **Search Engine Optimization**: Indexing and updating the content delivered via client-side rendering takes more time than with a server-rendered HTML document. This is related to the performance drawback we discussed, as search engine crawlers won't wait for the interface to be fully rendered on their first try to index the page. Your content will take more time to show and update in search results pages with pure client-side rendering.\n\n### Examples\n\nClient-side rendering is a good choice for heavily interactive **web applications** that don't need indexing or whose users visit frequently. It can leverage browser caching to skip the download phase on subsequent visits, such as **SaaS, back-office applications, or online games**.\n\n## Universal Rendering\n\nWhen the browser requests a URL with universal (client-side + server-side) rendering enabled, the server returns a fully rendered HTML page to the browser. Whether the page has been generated in advance and cached or is rendered on the fly, at some point, Nuxt has run the JavaScript (Vue.js) code in a server environment, producing an HTML document. Users immediately get the content of our application, contrary to client-side rendering. This step is similar to traditional **server-side rendering** performed by PHP or Ruby applications.\n\nTo not lose the benefits of the client-side rendering method, such as dynamic interfaces and pages transitions, the Client loads the javascript code that runs on the Server in the background once the HTML document has been downloaded. The browser interprets it again (hence **Universal rendering**) and Vue.js takes control of the document and enables interactivity.\n\nMaking a static page interactive in the browser is called \"Hydration.\"\n\nUniversal rendering allows a Nuxt application to provide quick page load times while preserving the benefits of client-side rendering. Furthermore, as the content is already present in the HTML document, crawlers can index it without overhead.\n\n![Users can access the static content when the HTML document is loaded. Hydration then allows page's interactivity](\u002Fimg\u002Fconcepts\u002Frendering\u002Flight\u002Fssr.svg){.dark:hidden}\n![Users can access the static content when the HTML document is loaded. Hydration then allows page's interactivity](\u002Fimg\u002Fconcepts\u002Frendering\u002Fdark\u002Fssr.svg){.light:hidden}\n\n### Pros\n\n- **Performance**: Users can get immediate access to the page's content because browsers can display static content much faster than JavaScript-generated one. At the same time, Nuxt preserves the interactivity of a web application when the hydration process happens.\n- **Search Engine Optimization**: Universal rendering delivers the entire HTML content of the page to the browser as a classic server application. Web crawlers can directly index the page's content, which makes Universal rendering a great choice for any content that you want to index quickly.\n\n### Cons\n\n- **Development constraints:** Server and browser environments don't provide the same APIs, and it can be tricky to write code that can run on both sides seamlessly. Fortunately, Nuxt provides guidelines and specific variables to help you determine where a piece of code is executed.\n- **Cost:** A server needs to be running in order to render pages on the fly. This adds a monthly cost like any traditional server. However, the server calls are highly reduced thanks to universal rendering with the browser taking over on client-side navigation.\n\n### Examples\n\nUniversal rendering is very versatile and can fit almost any use case, and is especially appropriate for any content-oriented websites: **blogs, marketing websites, portfolios, e-commerce sites, and marketplaces.**\n\n## Summary\n\nClient-side and universal rendering are different strategies to display an interface in a browser.\n\nBy default, Nuxt uses **universal rendering** to provide better user experience and performance, and to optimize search engine indexing, but you can switch rendering modes in [one line of configuration](\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ssr).\n\n## Coming in Nuxt 3\n\nIn most cases, universal rendering as performed in Nuxt 2 offers a good user and developer experience. However, Nuxt 3 takes universal rendering a step further by introducing hybrid rendering and edge-side rendering.\n\n### Hybrid Rendering\n\nHybrid rendering allows different caching rules per route and decides how the Server should respond to a new request on a given URL.\n\nAt the moment, every page (or **route**) of a Nuxt application must use the same rendering mode, client-side or universal. But in various cases, some pages could be generated at build time, while others should be client-side rendered. For example, think of a content website with an admin section. Every content page should be primarily static and generated once, but the admin section requires registration and behaves more like a dynamic application.\n\n[Read the open RFC discussing implementation and gathering community feedback](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fdiscussions\u002F560)\n\n### Rendering on CDN edge workers\n\nTraditionally, server-side and universal rendering was only possible using Node.js. Nuxt 3 takes it to another level by directly rendering code in CDN edge workers, reducing latency and costs.\n\nNitro is the new [server engine](\u002Fguide\u002Fconcepts\u002Fserver-engine) that powers Nuxt 3. It offers cross-platform support for Node.js, Deno, Workers, and more. Nitro's design is platform-agnostic and allows rendering a Nuxt application at the edge, closer to your users, allowing replication and further optimizations.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"rendering-modes"},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:"Both the browser and server can interpret JavaScript code to render Vue.js components into HTML elements. This step is called "},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:". Nuxt supports both "},{type:b,tag:d,props:{},children:[{type:a,value:"client-side"}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:"universal"}]},{type:a,value:" rendering. The two approaches have pros and cons that we will cover in this section."}]},{type:a,value:c},{type:b,tag:n,props:{id:w},children:[{type:b,tag:f,props:{href:"#client-side-only-rendering"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Out of the box, a traditional Vue.js application is rendered in the browser (or "},{type:b,tag:d,props:{},children:[{type:a,value:"client"}]},{type:a,value:"). Then, Vue.js generates HTML elements after the browser downloads and parses all the JavaScript code containing the instructions to create the current interface."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:y,className:[z],src:"\u002Fimg\u002Fconcepts\u002Frendering\u002Flight\u002Fcsr.svg"},children:[]},{type:a,value:c},{type:b,tag:o,props:{alt:y,className:[A],src:"\u002Fimg\u002Fconcepts\u002Frendering\u002Fdark\u002Fcsr.svg"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"While this technique allows building complex and dynamic UIs with smooth page transitions, it has different pros and cons:"}]},{type:a,value:c},{type:b,tag:h,props:{id:B},children:[{type:b,tag:f,props:{href:"#pros"},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Development speed"}]},{type:a,value:": When working entirely on the client-side, we don't have to worry about the server compatibility of the code, for example, by using browser-only APIs like the "},{type:b,tag:"prose-code-inline",props:{},children:[{type:a,value:"window"}]},{type:a,value:" object."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cheaper:"}]},{type:a,value:" Running a server adds a cost of infrastructure as you would need to run on a platform that supports JavaScript. We can host Client-only applications on any static server with HTML, CSS, and JavaScript files."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Offline:"}]},{type:a,value:" Because code entirely runs in the browser, it can nicely keep working while the internet is unavailable."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{id:C},children:[{type:b,tag:f,props:{href:"#cons"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:": The user has to wait for the browser to download, parse and run JavaScript files. Depending on the network for the download part and the user's device for the parsing and execution, this can take some time and impact the user's experience."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:": Indexing and updating the content delivered via client-side rendering takes more time than with a server-rendered HTML document. This is related to the performance drawback we discussed, as search engine crawlers won't wait for the interface to be fully rendered on their first try to index the page. Your content will take more time to show and update in search results pages with pure client-side rendering."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{id:s},children:[{type:b,tag:f,props:{href:"#examples"},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Client-side rendering is a good choice for heavily interactive "},{type:b,tag:d,props:{},children:[{type:a,value:"web applications"}]},{type:a,value:" that don't need indexing or whose users visit frequently. It can leverage browser caching to skip the download phase on subsequent visits, such as "},{type:b,tag:d,props:{},children:[{type:a,value:"SaaS, back-office applications, or online games"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:n,props:{id:G},children:[{type:b,tag:f,props:{href:"#universal-rendering"},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When the browser requests a URL with universal (client-side + server-side) rendering enabled, the server returns a fully rendered HTML page to the browser. Whether the page has been generated in advance and cached or is rendered on the fly, at some point, Nuxt has run the JavaScript (Vue.js) code in a server environment, producing an HTML document. Users immediately get the content of our application, contrary to client-side rendering. This step is similar to traditional "},{type:b,tag:d,props:{},children:[{type:a,value:"server-side rendering"}]},{type:a,value:" performed by PHP or Ruby applications."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To not lose the benefits of the client-side rendering method, such as dynamic interfaces and pages transitions, the Client loads the javascript code that runs on the Server in the background once the HTML document has been downloaded. The browser interprets it again (hence "},{type:b,tag:d,props:{},children:[{type:a,value:"Universal rendering"}]},{type:a,value:") and Vue.js takes control of the document and enables interactivity."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Making a static page interactive in the browser is called \"Hydration.\""}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Universal rendering allows a Nuxt application to provide quick page load times while preserving the benefits of client-side rendering. Furthermore, as the content is already present in the HTML document, crawlers can index it without overhead."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{alt:I,className:[z],src:"\u002Fimg\u002Fconcepts\u002Frendering\u002Flight\u002Fssr.svg"},children:[]},{type:a,value:c},{type:b,tag:o,props:{alt:I,className:[A],src:"\u002Fimg\u002Fconcepts\u002Frendering\u002Fdark\u002Fssr.svg"},children:[]}]},{type:a,value:c},{type:b,tag:h,props:{id:J},children:[{type:b,tag:f,props:{href:"#pros-1"},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:": Users can get immediate access to the page's content because browsers can display static content much faster than JavaScript-generated one. At the same time, Nuxt preserves the interactivity of a web application when the hydration process happens."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:": Universal rendering delivers the entire HTML content of the page to the browser as a classic server application. Web crawlers can directly index the page's content, which makes Universal rendering a great choice for any content that you want to index quickly."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{id:K},children:[{type:b,tag:f,props:{href:"#cons-1"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Development constraints:"}]},{type:a,value:" Server and browser environments don't provide the same APIs, and it can be tricky to write code that can run on both sides seamlessly. Fortunately, Nuxt provides guidelines and specific variables to help you determine where a piece of code is executed."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cost:"}]},{type:a,value:" A server needs to be running in order to render pages on the fly. This adds a monthly cost like any traditional server. However, the server calls are highly reduced thanks to universal rendering with the browser taking over on client-side navigation."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{id:L},children:[{type:b,tag:f,props:{href:"#examples-1"},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Universal rendering is very versatile and can fit almost any use case, and is especially appropriate for any content-oriented websites: "},{type:b,tag:d,props:{},children:[{type:a,value:"blogs, marketing websites, portfolios, e-commerce sites, and marketplaces."}]}]},{type:a,value:c},{type:b,tag:n,props:{id:M},children:[{type:b,tag:f,props:{href:"#summary"},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Client-side and universal rendering are different strategies to display an interface in a browser."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"By default, Nuxt uses "},{type:b,tag:d,props:{},children:[{type:a,value:"universal rendering"}]},{type:a,value:" to provide better user experience and performance, and to optimize search engine indexing, but you can switch rendering modes in "},{type:b,tag:f,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ssr"},children:[{type:a,value:"one line of configuration"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:n,props:{id:O},children:[{type:b,tag:f,props:{href:"#coming-in-nuxt-3"},children:[{type:a,value:P}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"In most cases, universal rendering as performed in Nuxt 2 offers a good user and developer experience. However, Nuxt 3 takes universal rendering a step further by introducing hybrid rendering and edge-side rendering."}]},{type:a,value:c},{type:b,tag:h,props:{id:Q},children:[{type:b,tag:f,props:{href:"#hybrid-rendering"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Hybrid rendering allows different caching rules per route and decides how the Server should respond to a new request on a given URL."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"At the moment, every page (or "},{type:b,tag:d,props:{},children:[{type:a,value:"route"}]},{type:a,value:") of a Nuxt application must use the same rendering mode, client-side or universal. But in various cases, some pages could be generated at build time, while others should be client-side rendered. For example, think of a content website with an admin section. Every content page should be primarily static and generated once, but the admin section requires registration and behaves more like a dynamic application."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fdiscussions\u002F560",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Read the open RFC discussing implementation and gathering community feedback"}]}]},{type:a,value:c},{type:b,tag:h,props:{id:S},children:[{type:b,tag:f,props:{href:"#rendering-on-cdn-edge-workers"},children:[{type:a,value:T}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Traditionally, server-side and universal rendering was only possible using Node.js. Nuxt 3 takes it to another level by directly rendering code in CDN edge workers, reducing latency and costs."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nitro is the new "},{type:b,tag:f,props:{href:"\u002Fguide\u002Fconcepts\u002Fserver-engine"},children:[{type:a,value:"server engine"}]},{type:a,value:" that powers Nuxt 3. It offers cross-platform support for Node.js, Deno, Workers, and more. Nitro's design is platform-agnostic and allows rendering a Nuxt application at the edge, closer to your users, allowing replication and further optimizations."}]}]},toc:{title:U,searchDepth:k,depth:k,links:[{id:w,depth:k,text:x,children:[{id:B,depth:i,text:p},{id:C,depth:i,text:r},{id:s,depth:i,text:j}]},{id:G,depth:k,text:H,children:[{id:J,depth:i,text:p},{id:K,depth:i,text:r},{id:L,depth:i,text:j}]},{id:M,depth:k,text:N},{id:O,depth:k,text:P,children:[{id:Q,depth:i,text:R},{id:S,depth:i,text:T}]}]}},template:V},templateOptions:{header:m,footer:m,aside:m,asideClass:U,fluid:l,banner:l},_img:{"/_ipx/_/img/concepts/rendering/light/csr.svg":"\u002F_nuxt\u002Fimage\u002Fc475ff.svg","/_ipx/_/img/concepts/rendering/dark/csr.svg":"\u002F_nuxt\u002Fimage\u002F415fc1.svg","/_ipx/_/img/concepts/rendering/light/ssr.svg":"\u002F_nuxt\u002Fimage\u002Fd21e83.svg","/_ipx/_/img/concepts/rendering/dark/ssr.svg":"\u002F_nuxt\u002Fimage\u002F59c22e.svg"}}],fetch:{"0":{headerLinks:[{title:V,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:j,slug:s,to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:j,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"vuejs-development",to:"\u002Fguide\u002Fconcepts\u002Fvuejs-development",title:"Vue.js Development"},next:{slug:"auto-imports",to:"\u002Fguide\u002Fconcepts\u002Fauto-imports",title:"Auto Imports"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:v}}("text","element","\n","prose-strong","prose-paragraph","prose-a","prose-li","prose-h3",3,"Examples",2,false,true,"prose-h2","prose-img","Pros","prose-ul","Cons","examples","rendering","Rendering Modes",void 0,"client-side-only-rendering","Client-side only rendering","Users have to wait for the browser to download, parse and execute the JavaScript before seeing the page's content","dark:hidden","light:hidden","pros","cons","Performance","Search Engine Optimization",".","universal-rendering","Universal Rendering","Users can access the static content when the HTML document is loaded. Hydration then allows page's interactivity","pros-1","cons-1","examples-1","summary","Summary","coming-in-nuxt-3","Coming in Nuxt 3","hybrid-rendering","Hybrid Rendering","rendering-on-cdn-edge-workers","Rendering on CDN edge workers","","Docs")));