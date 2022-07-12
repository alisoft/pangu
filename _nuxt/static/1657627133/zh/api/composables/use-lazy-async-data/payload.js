__NUXT_JSONP__("/zh/api/composables/use-lazy-async-data", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{page:{key:"content:zh:3.api:1.composables:use-lazy-async-data.md",generatedAt:new Date(1657627220487),mtime:new Date(1657627220483),slug:"use-lazy-async-data",title:k,position:"000300019999",to:"\u002Fapi\u002Fcomposables\u002Fuse-lazy-async-data",draft:l,page:o,language:"zh",empty:l,description:r,excerpt:C,body:{raw:"# `useLazyAsyncData`\n\n## Description\n\nBy default, [useAsyncData](\u002Fapi\u002Fcomposables\u002Fuse-async-data) blocks navigation until its async handler is resolved.\n\n`useLazyAsyncData` provides a wrapper around `useAsyncData` that triggers navigation before the handler is resolved by setting the `lazy` option to `true`.\n\n\u003E `useLazyAsyncData` has the same signature as `useAsyncData`.\n\n:ReadMore{link=\"\u002Fapi\u002Fcomposables\u002Fuse-async-data\"}\n\n## Example\n\n```vue\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    {{ pending ? 'Loading' : count }}\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript setup\u003E\n\u002F* Navigation will occur before fetching is complete.\n  Handle pending and error states directly within your component's template\n*\u002F\nconst { pending, data: count } = useLazyAsyncData('count', () =\u003E $fetch('\u002Fapi\u002Fcount'))\n\nwatch(count, (newCount) =\u003E {\n  \u002F\u002F Because count starts out null, you won't have access\n  \u002F\u002F to its contents immediately, but you can watch it.\n})\n\u003C\u002Fscript\u003E\n```\n\n:ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Fdata-fetching#uselazyasyncdata\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"uselazyasyncdata"},children:[{type:b,tag:i,props:{},children:[{type:a,value:k}]}]},{type:a,value:f},{type:b,tag:D,props:{id:E},children:[{type:b,tag:s,props:{href:"#description"},children:[{type:a,value:F}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"By default, "},{type:b,tag:s,props:{href:G},children:[{type:a,value:u}]},{type:a,value:" blocks navigation until its async handler is resolved."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:k}]},{type:a,value:" provides a wrapper around "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" that triggers navigation before the handler is resolved by setting the "},{type:b,tag:i,props:{},children:[{type:a,value:"lazy"}]},{type:a,value:" option to "},{type:b,tag:i,props:{},children:[{type:a,value:"true"}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:k}]},{type:a,value:" has the same signature as "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:H}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:I,props:{link:G},children:[]},{type:a,value:f},{type:b,tag:D,props:{id:J},children:[{type:b,tag:s,props:{href:"#example"},children:[{type:a,value:K}]}]},{type:a,value:f},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-html","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n    {{ pending ? 'Loading' : count }}\n  "},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F* Navigation will occur before fetching is complete.\n  Handle pending and error states directly within your component's template\n*\u002F"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"keyword"]},children:[{type:a,value:"const"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:" pending"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:":"}]},{type:a,value:" count "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"'count'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,R,p]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"$fetch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"'\u002Fapi\u002Fcount'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"watch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"count"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"newCount"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,R,p]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Because count starts out null, you won't have access"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F to its contents immediately, but you can watch it."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{link:"\u002Fguide\u002Ffeatures\u002Fdata-fetching#uselazyasyncdata"},children:[]}]},toc:{title:r,searchDepth:q,depth:q,links:[{id:E,depth:q,text:F},{id:J,depth:q,text:K}]}},template:T},templateOptions:{header:o,footer:o,aside:o,asideClass:r,fluid:l,banner:l},_img:{}}],fetch:{"0":{headerLinks:[{title:"发现",items:[{title:U,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:V,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:T,subtitle:"Create fast websites easily",slug:"docs",to:W,icon:"docs.svg",color:"bg-green-500"},{title:X,subtitle:"Understand everything in Nuxt",slug:"examples",to:Y,icon:"examples.svg",color:"bg-green-600"},{title:Z,subtitle:"Learn with concrete cases",slug:"tutorials",to:_,icon:"tutorials.svg",color:"bg-green-700"},{title:$,subtitle:"Learn more with experts",href:aa,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:ab,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ac,icon:"deployments.svg",color:"bg-indigo-light"},{title:ad,subtitle:"Extend the power of Nuxt",href:ae,icon:"modules.svg",color:"bg-indigo"},{title:af,subtitle:"Get started with themes",slug:"themes",to:ag,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:ah,subtitle:"Latest news about Nuxt",slug:"announcements",to:ai,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aj,subtitle:"They are Nuxt",slug:"teams",to:ak,icon:"teams.svg",color:"bg-mint-light"},{title:al,subtitle:"All the code we have released",slug:"releases",to:am,icon:"releases.svg",color:"bg-mint"},{title:an,subtitle:"They trust us",slug:"sponsors",to:ao,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ap}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ap},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:ah,to:ai},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:an,to:ao},{title:aj,to:ak},{title:Z,to:_},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:W},{title:X,to:Y},{title:ab,to:ac},{title:$,href:aa},{title:ad,href:ae},{title:al,to:am},{title:U,to:V},{title:af,to:ag}]}],showCookieBanner:l},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"use-hydration",to:"\u002Fapi\u002Fcomposables\u002Fuse-hydration",title:"useHydration"},next:{slug:"use-lazy-fetch",to:"\u002Fapi\u002Fcomposables\u002Fuse-lazy-fetch",title:"useLazyFetch"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:C}}("text","element","span","token","punctuation","\n","tag"," ","prose-code-inline","\u003E","useLazyAsyncData",false,"(",")",true,"operator",2,"","prose-a","prose-paragraph","useAsyncData","\u003C","\n  ","\u003C\u002F","script","comment",",","function",void 0,"prose-h2","description","Description","\u002Fapi\u002Fcomposables\u002Fuse-async-data",".","read-more","example","Example","template","div","\n\n","{","}","string","arrow","=\u003E","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));