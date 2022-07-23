__NUXT_JSONP__("/guide/concepts/auto-imports", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{page:{key:"content:2.guide:1.concepts:4.auto-imports.md",generatedAt:new Date(1658583556342),mtime:new Date(1658583556328),slug:R,title:S,position:"000200010004",to:"\u002Fguide\u002Fconcepts\u002Fauto-imports",draft:x,page:y,language:"en",empty:x,description:T,excerpt:U,body:{raw:"# Auto Imports\n\nNuxt auto-imports helper functions, composables and Vue APIs to use across your application without explicitly importing them. Based on the directory structure, every Nuxt application can also use auto-imports for its own components, composables and plugins. Components, composables or plugins can use these functions.\n\nContrary to a classic global declaration, Nuxt preserves typings and IDEs completions and hints, and only includes what is actually used in your production code.\n\n::alert{type=info icon=💡}\nIn the documentation, every function that is not explicitly imported is auto-imported by Nuxt and can be used as-is in your code.\nYou can find a reference for auto-imported [composables](\u002Fapi\u002Fcomposables\u002Fuse-async-data) and [utilities](\u002Fapi\u002Futils\u002F$fetch) in the API section.\n::\n\n::alert{type=warning}\nAuto imports don't currently work within the [server directory](\u002Fguide\u002Fdirectory-structure\u002Fserver).\n::\n\n## Nuxt auto-imports\n\nNuxt auto-imports functions and composables to perform [data fetching](\u002Fguide\u002Ffeatures\u002Fdata-fetching), get access to the [app context](\u002Fapi\u002Fcomposables\u002Fuse-nuxt-app) and [runtime config](\u002Fguide\u002Ffeatures\u002Fruntime-config), manage [state](\u002Fguide\u002Ffeatures\u002Fstate-management) or define components and plugins.\n\n```vue\n\u003Cscript setup\u003E\n  \u002F* useAsyncData() and $fetch() are auto-imported *\u002F\n  const { data, refresh, pending } = await useAsyncData('\u002Fapi\u002Fhello', () =\u003E $fetch('\u002Fapi\u002Fhello'))\n\u003C\u002Fscript\u003E\n```\n\n## Vue auto-imports\n\nVue 3 exposes Reactivity APIs like `ref` or `computed`, as well as lifecycle hooks and helpers that are auto-imported by Nuxt.\n\n```vue\n\u003Cscript setup\u003E\n  \u002F* ref() and computed() are auto-imported *\u002F\n  const count = ref(1)\n  const double = computed(() =\u003E count.value * 2)\n\u003C\u002Fscript\u003E\n```\n\n## Directory-based auto-imports\n\nNuxt directly auto-imports files created in defined directories:\n\n- `components\u002F` for [Vue components](\u002Fguide\u002Fdirectory-structure\u002Fcomponents).\n- `composables\u002F` for [Vue composables](\u002Fguide\u002Fdirectory-structure\u002Fcomposables).\n\n## Explicit imports\n\nNuxt exposes every auto-import with the `#imports` alias that can be used to make the import explicit if needed:\n\n```vue\n\u003Cscript setup\u003E\n  import { ref, computed } from '#imports'\n\n  const count = ref(1)\n  const double = computed(() =\u003E count.value * 2)\n\u003C\u002Fscript\u003E\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:R},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:n,props:{class:"d-heading-description"},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Contrary to a classic global declaration, Nuxt preserves typings and IDEs completions and hints, and only includes what is actually used in your production code."}]},{type:a,value:f},{type:b,tag:V,props:{type:"info",icon:"💡"},children:[{type:b,tag:n,props:{},children:[{type:a,value:"In the documentation, every function that is not explicitly imported is auto-imported by Nuxt and can be used as-is in your code.\nYou can find a reference for auto-imported "},{type:b,tag:h,props:{href:W},children:[{type:a,value:"composables"}]},{type:a,value:X},{type:b,tag:h,props:{href:"\u002Fapi\u002Futils\u002F$fetch"},children:[{type:a,value:"utilities"}]},{type:a,value:" in the API section."}]}]},{type:a,value:f},{type:b,tag:V,props:{type:"warning"},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Auto imports don't currently work within the "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fserver"},children:[{type:a,value:"server directory"}]},{type:a,value:t}]}]},{type:a,value:f},{type:b,tag:z,props:{id:Y},children:[{type:b,tag:h,props:{href:"#nuxt-auto-imports"},children:[{type:a,value:Z}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt auto-imports functions and composables to perform "},{type:b,tag:h,props:{href:"\u002Fguide\u002Ffeatures\u002Fdata-fetching"},children:[{type:a,value:"data fetching"}]},{type:a,value:", get access to the "},{type:b,tag:h,props:{href:"\u002Fapi\u002Fcomposables\u002Fuse-nuxt-app"},children:[{type:a,value:"app context"}]},{type:a,value:X},{type:b,tag:h,props:{href:"\u002Fguide\u002Ffeatures\u002Fruntime-config"},children:[{type:a,value:"runtime config"}]},{type:a,value:", manage "},{type:b,tag:h,props:{href:"\u002Fguide\u002Ffeatures\u002Fstate-management"},children:[{type:a,value:"state"}]},{type:a,value:" or define components and plugins."}]},{type:a,value:f},{type:b,tag:C,props:{},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:p},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:"\u002F* useAsyncData() and $fetch() are auto-imported *\u002F"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" refresh"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" pending "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,"control-flow"]},children:[{type:a,value:"await"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"useAsyncData"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M,j]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"$fetch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:z,props:{id:ac},children:[{type:b,tag:h,props:{href:"#vue-auto-imports"},children:[{type:a,value:ad}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Vue 3 exposes Reactivity APIs like "},{type:b,tag:w,props:{},children:[{type:a,value:P}]},{type:a,value:" or "},{type:b,tag:w,props:{},children:[{type:a,value:Q}]},{type:a,value:", as well as lifecycle hooks and helpers that are auto-imported by Nuxt."}]},{type:a,value:f},{type:b,tag:C,props:{},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:p},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:"\u002F* ref() and computed() are auto-imported *\u002F"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M,j]},children:[{type:a,value:N}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:z,props:{id:am},children:[{type:b,tag:h,props:{href:"#directory-based-auto-imports"},children:[{type:a,value:an}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt directly auto-imports files created in defined directories:"}]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:ao,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"components\u002F"}]},{type:a,value:ap},{type:b,tag:h,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fcomponents"},children:[{type:a,value:"Vue components"}]},{type:a,value:t},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ao,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"composables\u002F"}]},{type:a,value:ap},{type:b,tag:h,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fcomposables"},children:[{type:a,value:"Vue composables"}]},{type:a,value:t},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{id:aq},children:[{type:b,tag:h,props:{href:"#explicit-imports"},children:[{type:a,value:ar}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt exposes every auto-import with the "},{type:b,tag:w,props:{},children:[{type:a,value:"#imports"}]},{type:a,value:" alias that can be used to make the import explicit if needed:"}]},{type:a,value:f},{type:b,tag:C,props:{},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:G,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:p},{type:b,tag:c,props:{className:[d,o,as]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:" ref"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" computed "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,as]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"'#imports'"}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M,j]},children:[{type:a,value:N}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:f}]}]}]}]},toc:{title:at,searchDepth:s,depth:s,links:[{id:Y,depth:s,text:Z},{id:ac,depth:s,text:ad},{id:am,depth:s,text:an},{id:aq,depth:s,text:ar}]}},template:"Docs"},templateOptions:{header:y,footer:y,aside:y,asideClass:at,fluid:x,banner:x},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:W},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"rendering",to:"\u002Fguide\u002Fconcepts\u002Frendering",title:"Rendering Modes"},next:{slug:"server-engine",to:"\u002Fguide\u002Fconcepts\u002Fserver-engine",title:"Server Engine"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg"])},mutations:U}}("text","element","span","token","punctuation","\n"," ","prose-a","tag","operator","script","(",")","prose-paragraph","keyword","\n  ","\u003E","function",2,".","const","=","prose-code-inline",false,true,"prose-h2",",","number","prose-code","pre","language-html","line-numbers","code","\u003C","attr-name","setup","language-javascript","string","arrow","=\u003E","\u003C\u002F","ref","computed","auto-imports","Auto Imports","Nuxt auto-imports helper functions, composables and Vue APIs to use across your application without explicitly importing them. Based on the directory structure, every Nuxt application can also use auto-imports for its own components, composables and plugins. Components, composables or plugins can use these functions.",void 0,"alert","\u002Fapi\u002Fcomposables\u002Fuse-async-data"," and ","nuxt-auto-imports","Nuxt auto-imports","comment","{","}","'\u002Fapi\u002Fhello'","vue-auto-imports","Vue auto-imports"," count ","1"," double "," count","property-access","value","*","2","directory-based-auto-imports","Directory-based auto-imports","prose-li"," for ","explicit-imports","Explicit imports","module","")));