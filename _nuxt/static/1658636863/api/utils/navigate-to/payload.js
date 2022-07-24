__NUXT_JSONP__("/api/utils/navigate-to", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{page:{key:"content:en:3.api:3.utils:navigate-to.md",generatedAt:new Date(1658636988407),mtime:new Date(1658636988397),slug:"navigate-to",title:j,position:"000300039999",to:"\u002Fapi\u002Futils\u002Fnavigate-to",draft:x,page:y,language:"en",empty:x,description:"navigateTo is a router helper function that allows creating programmatic navigation for users to navigate within Nuxt application.",excerpt:Q,body:{raw:"# `navigateTo`\n\n`navigateTo` is a router helper function that allows creating programmatic navigation for users to navigate within Nuxt application.\n\n`navigateTo` is available on both server side and client side. It can be used within plugins, middleware or can be called directly to perform page navigation.\n\n## Usage\n\n```ts\nnavigateTo (route: string | Route, { redirectCode = 302, replace = false })\n```\n\n`route` can be a plain string or a route object to redirect to.\n\n::alert{type=\"warning\"}\nMake sure to use always `await` or `return` on result of `navigateTo()` when calling it.\n::\n\n## Examples\n\n### Within a Vue component\n\n```vue\n\u003Cscript setup\u003E\n\u002F\u002F string\nreturn navigateTo('\u002Fsearch')\n\n\u002F\u002F route object\nreturn navigateTo({ path: '\u002Fsearch' })\n\n\u002F\u002F route object with query parameters\nreturn navigateTo({\n    path: '\u002Fsearch',\n    query: {\n        name: name.value,\n        type: type.value\n    }\n})\n\u003C\u002Fscript\u003E\n```\n\n### Within route middleware\n\n```js\nexport default defineNuxtRouteMiddleware((to, from) =\u003E {\n  \u002F\u002F set the redirect code to 301 Moved Permanently\n  return navigateTo('\u002Fsearch', { redirectCode: 301 })\n})\n```\n\n```js\n\u003Cscript setup\u003E\n    await navigateTo('\u002F', { replace: true })\n\u003C\u002Fscript\u003E\n```\n\n::ReadMore{link=\"\u002Fguide\u002Fdirectory-structure\u002Fmiddleware\"}\n::\n\n### Options\n\n#### `redirectCode`\n\n- Type: Number\n\n`navigateTo` redirects to the given path and sets the redirect code to [`302` Found](https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F302) by default when the redirect takes place on the server side.\n\nThis default behavior can be modified by providing different `redirectCode` as an optional parameter. Commonly [`301` Moved Permanently](https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F301) can be used for permant redirections.\n\n#### `replace`\n\n- Type: Boolean\n\nBy default, `navigateTo` pushes the given route into Vue router instance on client-side.\n\nThis behavior can be changed by setting `replace` to `true`, to indicate that given route should be replaced.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"navigateto"},children:[{type:b,tag:i,props:{},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:b,tag:i,props:{},children:[{type:a,value:j}]},{type:a,value:" is a router helper function that allows creating programmatic navigation for users to navigate within Nuxt application."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:j}]},{type:a,value:" is available on both server side and client side. It can be used within plugins, middleware or can be called directly to perform page navigation."}]},{type:a,value:f},{type:b,tag:R,props:{id:S},children:[{type:b,tag:k,props:{href:"#usage"},children:[{type:a,value:T}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,"language-ts"]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"builtin"]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"|"}]},{type:a,value:" Route"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:" redirectCode "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" replace "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"false"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:U}]},{type:a,value:" can be a plain string or a route object to redirect to."}]},{type:a,value:f},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Make sure to use always "},{type:b,tag:i,props:{},children:[{type:a,value:Z}]},{type:a,value:" or "},{type:b,tag:i,props:{},children:[{type:a,value:v}]},{type:a,value:" on result of "},{type:b,tag:i,props:{},children:[{type:a,value:"navigateTo()"}]},{type:a,value:" when calling it."}]}]},{type:a,value:f},{type:b,tag:R,props:{id:K},children:[{type:b,tag:k,props:{href:"#examples"},children:[{type:a,value:D}]}]},{type:a,value:f},{type:b,tag:L,props:{id:_},children:[{type:b,tag:k,props:{href:"#within-a-vue-component"},children:[{type:a,value:$}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,"language-html"]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\u002F\u002F string"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\u002F\u002F route object"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:" path"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\u002F\u002F route object with query parameters"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n    path"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n    query"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n        name"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:" name"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n        type"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:" type"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:ad}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:L,props:{id:af},children:[{type:b,tag:k,props:{href:"#within-route-middleware"},children:[{type:a,value:ag}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,ah]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,p,N]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,N]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"defineNuxtRouteMiddleware"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"to"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,N]},children:[{type:a,value:"from"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",h]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\u002F\u002F set the redirect code to 301 Moved Permanently"}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:" redirectCode"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:A,props:{className:[B,ah]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:"script setup"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:Z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'\u002F'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:" replace"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F"}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Fdirectory-structure\u002Fmiddleware"},children:[]},{type:a,value:f},{type:b,tag:L,props:{id:al},children:[{type:b,tag:k,props:{href:"#options"},children:[{type:a,value:am}]}]},{type:a,value:f},{type:b,tag:an,props:{id:"redirectcode"},children:[{type:b,tag:k,props:{href:"#redirectcode"},children:[{type:b,tag:i,props:{},children:[{type:a,value:ao}]}]}]},{type:a,value:f},{type:b,tag:ap,props:{},children:[{type:a,value:f},{type:b,tag:aq,props:{},children:[{type:a,value:f},{type:a,value:"Type: Number"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:j}]},{type:a,value:" redirects to the given path and sets the redirect code to "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F302",rel:[ar,as,at],target:au},children:[{type:b,tag:i,props:{},children:[{type:a,value:X}]},{type:a,value:" Found"}]},{type:a,value:" by default when the redirect takes place on the server side."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"This default behavior can be modified by providing different "},{type:b,tag:i,props:{},children:[{type:a,value:ao}]},{type:a,value:" as an optional parameter. Commonly "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F301",rel:[ar,as,at],target:au},children:[{type:b,tag:i,props:{},children:[{type:a,value:aj}]},{type:a,value:" Moved Permanently"}]},{type:a,value:" can be used for permant redirections."}]},{type:a,value:f},{type:b,tag:an,props:{id:O},children:[{type:b,tag:k,props:{href:"#replace"},children:[{type:b,tag:i,props:{},children:[{type:a,value:O}]}]}]},{type:a,value:f},{type:b,tag:ap,props:{},children:[{type:a,value:f},{type:b,tag:aq,props:{},children:[{type:a,value:f},{type:a,value:"Type: Boolean"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"By default, "},{type:b,tag:i,props:{},children:[{type:a,value:j}]},{type:a,value:" pushes the given route into Vue router instance on client-side."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"This behavior can be changed by setting "},{type:b,tag:i,props:{},children:[{type:a,value:O}]},{type:a,value:" to "},{type:b,tag:i,props:{},children:[{type:a,value:ak}]},{type:a,value:", to indicate that given route should be replaced."}]}]},toc:{title:av,searchDepth:J,depth:J,links:[{id:S,depth:J,text:T},{id:K,depth:J,text:D,children:[{id:_,depth:P,text:$},{id:af,depth:P,text:ag},{id:al,depth:P,text:am}]}]}},template:aw},templateOptions:{header:y,footer:y,aside:y,asideClass:av,fluid:x,banner:x},_img:{}}],fetch:{"0":{headerLinks:[{title:aw,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:D,slug:K,to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:D,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"define-page-meta",to:"\u002Fapi\u002Futils\u002Fdefine-page-meta",title:"definePageMeta"},next:{slug:"refresh-nuxt-data",to:"\u002Fapi\u002Futils\u002Frefresh-nuxt-data",title:"refreshNuxtData"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:Q}}("text","element","span","token","punctuation","\n"," ","operator","prose-code-inline","navigateTo","prose-a","prose-paragraph","(",":",")","keyword","function",",","{","}","string","return","control-flow",false,true,"prose-code","pre","line-numbers","code","Examples","tag","script","\u003E","comment","'\u002Fsearch'",2,"examples","prose-h3","\u003C","module","replace",3,void 0,"prose-h2","usage","Usage","route","=","number","302","boolean","await","within-a-vue-component","Within a Vue component","\n\n",".","property-access","value","\n    ","within-route-middleware","Within route middleware","language-js","\n  ","301","true","options","Options","prose-h4","redirectCode","prose-ul","prose-li","nofollow","noopener","noreferrer","_blank","","Docs")));