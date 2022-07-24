__NUXT_JSONP__("/api/components/nuxt-page", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {data:[{page:{key:"content:en:3.api:2.components:1.nuxt-page.md",generatedAt:new Date(1658636986661),mtime:new Date(1658636986633),slug:"nuxt-page",title:t,position:"000300020001",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-page",draft:m,page:n,language:"en",empty:m,description:"\u003CNuxtPage\u003E is a built-in component that comes with Nuxt. NuxtPage component is required to display top-level or nested pages located in the \u002Fpages directory.",excerpt:H,body:{raw:"# `\u003CNuxtPage\u003E`\n\n `\u003CNuxtPage\u003E` is a built-in component that comes with Nuxt. `NuxtPage` component is required to display top-level or nested pages located in the `\u002Fpages` directory.\n\n`NuxtPage` is a wrapper around [`\u003CRouterView\u003E`](https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#router-view-props) component from Vue Router. `NuxtPage` component accepts same `name` and `route` props.\n\n- **name:** type: `string`\n\n`name` helps `RouterView` render the component with the corresponding name in the matched route record's components option.\n\n- **route:** type: `RouteLocationNormalized`\n\n`route` is a route location that has all of its components resolved.\n\n\u003E **Nuxt automatically resolves the `name` and `route` by scanning and rendering all Vue component files found in the `\u002Fpages` directory.**\n\nApart from the `name` and `route`, `NuxtPage` component also accepts `pageKey` props.\n\n- **pageKey:** type: `string` or `function`\n\n`pageKey` helps control when the `NuxtPage` component is re-rendered.\n\n## Example\n\nFor example, passing `static` key, `NuxtPage` component is rendered only once when it is mounted.\n\n```html\n\u003C!-- static key --\u003E\n\u003CNuxtPage page-key=“static” \u002F\u003E\n```\n\nAlternatively, `pageKey` can be passed as a `key` value via `definePageMeta` from the `\u003Cscript\u003E` section of your Vue component in the `\u002Fpages` directory.\n\n```js\n\u003Cscript setup\u003E\ndefinePageMeta({\n  key: route =\u003E route.fullPath\n})\n\u003C\u002Fscript\u003E\n```\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fpages?file=app.vue\" blank}\n\n## Custom props\n\nIn addition, `NuxtPage` also accepts custom props that you may need to pass further down the hierarchy. These custom props are accessible via `attrs` in the Nuxt app.\n\n```html\n\u003CNuxtPage :foobar=“123” \u002F\u003E\n```\n\nFor example, in above example, value of `foobar` will be available using `attrs.foobar`.\n\n::ReadMore{link=\"\u002Fguide\u002Fdirectory-structure\u002Fapp\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtpage"},children:[{type:b,tag:d,props:{},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:" is a built-in component that comes with Nuxt. "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" component is required to display top-level or nested pages located in the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" is a wrapper around "},{type:b,tag:w,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002Fapi\u002F#router-view-props",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:d,props:{},children:[{type:a,value:"\u003CRouterView\u003E"}]}]},{type:a,value:" component from Vue Router. "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" component accepts same "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"name:"}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" helps "},{type:b,tag:d,props:{},children:[{type:a,value:"RouterView"}]},{type:a,value:" render the component with the corresponding name in the matched route record's components option."}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"route:"}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:"RouteLocationNormalized"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" is a route location that has all of its components resolved."}]},{type:a,value:c},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Nuxt automatically resolves the "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" by scanning and rendering all Vue component files found in the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:v}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Apart from the "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" component also accepts "},{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"pageKey:"}]},{type:a,value:A},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:" helps control when the "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" component is re-rendered."}]},{type:a,value:c},{type:b,tag:K,props:{id:L},children:[{type:b,tag:w,props:{href:"#example"},children:[{type:a,value:M}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For example, passing "},{type:b,tag:d,props:{},children:[{type:a,value:"static"}]},{type:a,value:" key, "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" component is rendered only once when it is mounted."}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,N]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:e,props:{className:[f,"comment"]},children:[{type:a,value:"\u003C!-- static key --\u003E"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:b,tag:e,props:{className:[f,q]},children:[{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:r}]},{type:a,value:i}]},{type:a,value:k},{type:b,tag:e,props:{className:[f,O]},children:[{type:a,value:"page-key"}]},{type:b,tag:e,props:{className:[f,P]},children:[{type:b,tag:e,props:{className:[f,h,Q]},children:[{type:a,value:R}]},{type:a,value:"“static”"}]},{type:a,value:k},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:S}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Alternatively, "},{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:" can be passed as a "},{type:b,tag:d,props:{},children:[{type:a,value:T}]},{type:a,value:" value via "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:" from the "},{type:b,tag:d,props:{},children:[{type:a,value:"\u003Cscript\u003E"}]},{type:a,value:" section of your Vue component in the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,"language-js"]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:r}]},{type:a,value:"script setup"},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:V}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,C]},children:[{type:a,value:U}]},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"("}]},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"{"}]},{type:a,value:"\n  "},{type:b,tag:e,props:{className:[f,"function-variable",C]},children:[{type:a,value:T}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:":"}]},{type:a,value:k},{type:b,tag:e,props:{className:[f,"parameter"]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:e,props:{className:[f,"arrow",j]},children:[{type:a,value:"=\u003E"}]},{type:a,value:" route"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:W}]},{type:b,tag:e,props:{className:[f,"property-access"]},children:[{type:a,value:"fullPath"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"}"}]},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:")"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:r}]},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:"\u002F"}]},{type:a,value:"script"},{type:b,tag:e,props:{className:[f,j]},children:[{type:a,value:V}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"button-link",props:{":blank":"true",href:"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fpages?file=app.vue"},children:[{type:a,value:"Open on StackBlitz"}]},{type:a,value:c},{type:b,tag:K,props:{id:X},children:[{type:b,tag:w,props:{href:"#custom-props"},children:[{type:a,value:Y}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In addition, "},{type:b,tag:d,props:{},children:[{type:a,value:i}]},{type:a,value:" also accepts custom props that you may need to pass further down the hierarchy. These custom props are accessible via "},{type:b,tag:d,props:{},children:[{type:a,value:"attrs"}]},{type:a,value:" in the Nuxt app."}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,N]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:e,props:{className:[f,q]},children:[{type:b,tag:e,props:{className:[f,q]},children:[{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:r}]},{type:a,value:i}]},{type:a,value:k},{type:b,tag:e,props:{className:[f,O]},children:[{type:a,value:":foobar"}]},{type:b,tag:e,props:{className:[f,P]},children:[{type:b,tag:e,props:{className:[f,h,Q]},children:[{type:a,value:R}]},{type:a,value:"“123”"}]},{type:a,value:k},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:S}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For example, in above example, value of "},{type:b,tag:d,props:{},children:[{type:a,value:"foobar"}]},{type:a,value:" will be available using "},{type:b,tag:d,props:{},children:[{type:a,value:"attrs.foobar"}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Fdirectory-structure\u002Fapp"},children:[]}]},toc:{title:Z,searchDepth:s,depth:s,links:[{id:L,depth:s,text:M},{id:X,depth:s,text:Y}]}},template:_},templateOptions:{header:n,footer:n,aside:n,asideClass:Z,fluid:m,banner:m},_img:{}}],fetch:{"0":{headerLinks:[{title:_,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:$,slug:"examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:$,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"use-state",to:"\u002Fapi\u002Fcomposables\u002Fuse-state",title:"useState"},next:{slug:"nuxt-layout",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-layout",title:"\u003CNuxtLayout\u003E"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:H}}("text","element","\n","prose-code-inline","span","token","prose-paragraph","punctuation","NuxtPage","operator"," ","route",false,true,"name","prose-strong","tag","\u003C",2,"\u003CNuxtPage\u003E","\u002Fpages"," directory.","prose-a"," and ","prose-ul","prose-li"," type: ","pageKey","function","prose-code","pre","line-numbers","code",void 0," props.","string","prose-h2","example","Example","language-html","attr-name","attr-value","attr-equals","=","\u002F\u003E","key","definePageMeta","\u003E",".","custom-props","Custom props","","Docs","Examples")));