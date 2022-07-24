__NUXT_JSONP__("/api/commands/add", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{page:{key:"content:en:3.api:5.commands:add.md",generatedAt:new Date(1658636991102),mtime:new Date(1658636991095),slug:n,title:o,position:"000300059999",to:"\u002Fapi\u002Fcommands\u002Fadd",draft:j,page:k,language:"en",empty:j,description:p,excerpt:q,body:{raw:"# `nuxi add`\n\nScaffold an entity into your Nuxt application.\n\n```{bash}\nnpx nuxi add [--cwd] [--force] \u003CTEMPLATE\u003E \u003CNAME\u003E\n```\n\nOption        | Default          | Description\n-------------------------|-----------------|------------------\n`TEMPLATE` | - | Specify a template of the file to be generated.\n`NAME` | - | Specify a name of the file that will be created.\n`--cwd` | `.` | The directory of the target application.\n`--force` | `false` | Force override file if it already exists.\n\n**Example:**\n\n```{bash}\nnpx nuxi add component TheHeader\n```\n\nThe `add` command generates new elements:\n\n* **component**: `npx nuxi add component TheHeader`\n* **composable**: `npx nuxi add composable foo`\n* **layout**: `npx nuxi add layout custom`\n* **plugin**: `npx nuxi add plugin analytics`\n* **page**: `npx nuxi add page about` or `npx nuxi add page \"category\u002F[id]\"`\n* **middleware**: `npx nuxi add middleware auth`\n* **api**: `npx nuxi add api hello` (CLI will generate file under `\u002Fserver\u002Fapi`)\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxi-add"},children:[{type:b,tag:d,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,u],dataLine:v},children:[{type:b,tag:w,props:{},children:[{type:a,value:"npx nuxi add [--cwd] [--force] \u003CTEMPLATE\u003E \u003CNAME\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:"prose-table",props:{},children:[{type:a,value:c},{type:b,tag:"prose-thead",props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Option"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Default"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Description"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"prose-tbody",props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"TEMPLATE"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Specify a template of the file to be generated."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"NAME"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Specify a name of the file that will be created."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"--cwd"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"."}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The directory of the target application."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"--force"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"false"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Force override file if it already exists."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Example:"}]}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{className:[t,u],dataLine:v},children:[{type:b,tag:w,props:{},children:[{type:a,value:"npx nuxi add component TheHeader\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"The "},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:" command generates new elements:"}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"component"}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add component TheHeader"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"composable"}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add composable foo"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"layout"}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add layout custom"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"plugin"}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add plugin analytics"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"page"}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add page about"}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add page \"category\u002F[id]\""}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"middleware"}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add middleware auth"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:d,props:{},children:[{type:a,value:"npx nuxi add api hello"}]},{type:a,value:" (CLI will generate file under "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fserver\u002Fapi"}]},{type:a,value:")"},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:z,searchDepth:A,depth:A,links:[]}},template:B},templateOptions:{header:k,footer:k,aside:k,asideClass:z,fluid:j,banner:j},_img:{}}],fetch:{"0":{headerLinks:[{title:B,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:y,to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:C,slug:"examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:C,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"kit",to:"\u002Fapi\u002Fadvanced\u002Fkit",title:"Kit Utilities"},next:{slug:"analyze",to:"\u002Fapi\u002Fcommands\u002Fanalyze",title:"nuxi analyze"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:q}}("text","element","\n","prose-code-inline","prose-td","prose-strong","prose-li",": ","prose-tr",false,true,"prose-paragraph","prose-th","add","nuxi add","Scaffold an entity into your Nuxt application.",void 0,"prose-code","pre","language-text","line-numbers","bash","code","-","api","",2,"Docs","Examples")));