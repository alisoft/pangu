__NUXT_JSONP__("/zh/docs/get-started/commands", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd){return {data:[{page:{key:"content:zh:docs:1.get-started:4.commands.md",generatedAt:new Date(1650678228095),mtime:new Date(1650678228055),slug:"commands",title:"Commands and Deployment",position:"999900010004",to:"\u002Fdocs\u002Fget-started\u002Fcommands",draft:H,page:y,language:"zh",description:U,category:"get-started",video:"hYdXzIGDlYA",empty:H,excerpt:void 0,body:{raw:"---\ntitle: Commands and Deployment\ndescription: Nuxt comes with a set of useful commands, both for development and production purpose.\ncategory: get-started\nvideo: hYdXzIGDlYA\n---\n# Commands and deployment\n\nNuxt comes with a set of useful commands, both for development and production purpose.\n\n---\n\n## Using in package.json\n\nYou should have these commands in your `package.json`:\n\n```json\n\"scripts\": {\n  \"dev\": \"nuxt\",\n  \"build\": \"nuxt build\",\n  \"start\": \"nuxt start\",\n  \"generate\": \"nuxt generate\"\n}\n```\n\nYou can launch your commands via `yarn \u003Ccommand\u003E` or `npm run \u003Ccommand\u003E` (example: `yarn dev` \u002F `npm run dev`).\n\n## Development Environment\n\nTo launch Nuxt in development mode with [hot module replacement](https:\u002F\u002Fwebpack.js.org\u002Fconcepts\u002Fhot-module-replacement\u002F) on `http:\u002F\u002Flocalhost:3000`:\n\n\n\n::code-group\n```bash [Yarn]\nyarn dev\n```\n```bash [NPM]\nnpm run dev\n```\n::\n\n## List of Commands\n\nYou can run different commands depending on the [target](\u002Fdocs\u002Ffeatures\u002Fdeployment-targets):\n\n### target: `server` (default value)\n\n- **nuxt dev** - Launch the development server.\n- **nuxt build** - Build and optimize your application with webpack for production.\n- **nuxt start** - Start the production server (after running `nuxt build`). Use it for Node.js hosting like Heroku, Digital Ocean, etc.\n\n### target: `static`\n\n- **nuxt dev** - Launch the development server.\n- **nuxt generate** - Build the application (if needed), generate every route as a HTML file and statically export to `dist\u002F` directory (used for static hosting).\n- **nuxt start** - serve the `dist\u002F` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying.\n\n## Webpack Config Inspection\n\nYou can inspect the webpack config used by Nuxt to build the project (similar to [vue inspect](https:\u002F\u002Fcli.vuejs.org\u002Fguide\u002Fwebpack.html#inspecting-the-project-s-webpack-config)).\n\n- **nuxt webpack [query...]**\n\n**Arguments:**\n\n- `--name`: Bundle name to inspect. (client, server, modern)\n- `--dev`: Inspect webpack config for dev mode\n- `--depth`: Inspection depth. Defaults to 2 to prevent verbose output.\n- `--no-colors`: Disable ANSI colors (disabled by default when TTY is not available or when piping to a file)\n\n**Examples:**\n\n- `nuxt webpack`\n- `nuxt webpack devtool`\n- `nuxt webpack resolve alias`\n- `nuxt webpack module rules`\n- `nuxt webpack module rules test=.jsx`\n- `nuxt webpack module rules test=.pug oneOf use.0=raw`\n- `nuxt webpack plugins constructor.name=WebpackBar options reporter`\n- `nuxt webpack module rules loader=vue-`\n- `nuxt webpack module rules \"loader=.*-loader\"`\n\n## Production Deployment\n\nNuxt lets you choose between Server or Static deployments.\n\n### Server Deployment\n\nTo deploy a SSR application we use `target: 'server'`, where server is the default value.\n\n::code-group\n```bash [Yarn]\nyarn build\n```\n```bash [NPM]\nnpm run build\n```\n::\n\nNuxt will create a `.nuxt` directory with everything inside ready to be deployed on your server hosting.\n\n::alert{type=\"info\"}\nWe recommend putting `.nuxt` in `.npmignore` or `.gitignore`.\n::\n\nOnce your application is built you can use the `start` command to see a production version of your application.\n\n::code-group\n```bash [Yarn]\nyarn start\n```\n```bash [NPM]\nnpm run start\n```\n::\n\n### Static Deployment (Pre-rendered)\n\nNuxt gives you the ability to host your web application on any static hosting.\n\nTo deploy a static generated site make sure you have `target: 'static'` in your `nuxt.config.js` (for Nuxt \u003E= 2.13):\n\n```js{}[nuxt.config.js]\nexport default {\n  target: 'static'\n}\n```\n\n::code-group\n```bash [Yarn]\nyarn generate\n```\n```bash [NPM]\nnpm run generate\n```\n::\n\nNuxt will create a `dist\u002F` directory with everything inside ready to be deployed on a static hosting service.\n\nAs of Nuxt v2.13 there is a crawler installed that will now crawl your link tags and generate your routes when using the command `nuxt generate` based on those links.\n\n\n::alert{type=\"warning\"}\n**Warning:** Dynamic routes are ignored by the `generate` command when using Nuxt \u003C= v2.12: [API Configuration generate](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate)\n::\n\n::alert{type=\"info\"}\nWhen generating your web application with `nuxt generate`, [the context](\u002Fdocs\u002Finternals-glossary\u002Fcontext) given to [asyncData](\u002Fdocs\u002Ffeatures\u002Fdata-fetching#async-data) and [fetch](\u002Fdocs\u002Ffeatures\u002Fdata-fetching#the-fetch-hook) will not have `req` and `res`.\n::\n\n#### **Fail on Error**\n\nTo return a non-zero status code when a page error is encountered and let the CI\u002FCD fail the deployment or build, you can use the `--fail-on-error` argument.\n\n::code-group\n```bash [Yarn]\nyarn generate --fail-on-error\n```\n```bash [NPM]\nnpm run generate --fail-on-error\n```\n::\n\n## What's next?\n\n::alert{type=\"next\"}\nRead our [Deployment Guides](\u002Fdeployments) to find examples for deployments to popular hosts.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"commands-and-deployment"},children:[{type:a,value:"Commands and deployment"}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:U}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:v,props:{id:V},children:[{type:b,tag:i,props:{href:"#using-in-packagejson"},children:[{type:a,value:W}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You should have these commands in your "},{type:b,tag:e,props:{},children:[{type:a,value:"package.json"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:k,props:{className:[l,"language-json"]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:"\"scripts\""}]},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:X}]},{type:a,value:z},{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:"\"dev\""}]},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,A]},children:[{type:a,value:"\"nuxt\""}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:"\"build\""}]},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,A]},children:[{type:a,value:"\"nuxt build\""}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:"\"start\""}]},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,A]},children:[{type:a,value:"\"nuxt start\""}]},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:d,props:{className:[f,w]},children:[{type:a,value:"\"generate\""}]},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,A]},children:[{type:a,value:"\"nuxt generate\""}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:Y}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can launch your commands via "},{type:b,tag:e,props:{},children:[{type:a,value:"yarn \u003Ccommand\u003E"}]},{type:a,value:Z},{type:b,tag:e,props:{},children:[{type:a,value:"npm run \u003Ccommand\u003E"}]},{type:a,value:" (example: "},{type:b,tag:e,props:{},children:[{type:a,value:"yarn dev"}]},{type:a,value:" \u002F "},{type:b,tag:e,props:{},children:[{type:a,value:"npm run dev"}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:v,props:{id:$},children:[{type:b,tag:i,props:{href:"#development-environment"},children:[{type:a,value:aa}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To launch Nuxt in development mode with "},{type:b,tag:i,props:{href:"https:\u002F\u002Fwebpack.js.org\u002Fconcepts\u002Fhot-module-replacement\u002F",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"hot module replacement"}]},{type:a,value:" on "},{type:b,tag:e,props:{},children:[{type:a,value:"http:\u002F\u002Flocalhost:3000"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:C}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:" dev\n"}]}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:E}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:F}]},{type:a,value:" run dev\n"}]}]}]}]},{type:a,value:c},{type:b,tag:v,props:{id:af},children:[{type:b,tag:i,props:{href:"#list-of-commands"},children:[{type:a,value:ag}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can run different commands depending on the "},{type:b,tag:i,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdeployment-targets"},children:[{type:a,value:ah}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:I,props:{id:ai},children:[{type:b,tag:i,props:{href:"#target-server-default-value"},children:[{type:a,value:aj},{type:b,tag:e,props:{},children:[{type:a,value:"server"}]},{type:a,value:" (default value)"}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:ak}]},{type:a,value:al},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:am}]},{type:a,value:" - Build and optimize your application with webpack for production."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:an}]},{type:a,value:" - Start the production server (after running "},{type:b,tag:e,props:{},children:[{type:a,value:am}]},{type:a,value:"). Use it for Node.js hosting like Heroku, Digital Ocean, etc."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:I,props:{id:ao},children:[{type:b,tag:i,props:{href:"#target-static"},children:[{type:a,value:aj},{type:b,tag:e,props:{},children:[{type:a,value:"static"}]}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:ak}]},{type:a,value:al},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:O}]},{type:a,value:" - Build the application (if needed), generate every route as a HTML file and statically export to "},{type:b,tag:e,props:{},children:[{type:a,value:P}]},{type:a,value:" directory (used for static hosting)."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:an}]},{type:a,value:" - serve the "},{type:b,tag:e,props:{},children:[{type:a,value:P}]},{type:a,value:" directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:ap},children:[{type:b,tag:i,props:{href:"#webpack-config-inspection"},children:[{type:a,value:aq}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You can inspect the webpack config used by Nuxt to build the project (similar to "},{type:b,tag:i,props:{href:"https:\u002F\u002Fcli.vuejs.org\u002Fguide\u002Fwebpack.html#inspecting-the-project-s-webpack-config",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"vue inspect"}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"nuxt webpack "},{type:b,tag:d,props:{},children:[{type:a,value:"query..."}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Arguments:"}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"--name"}]},{type:a,value:": Bundle name to inspect. (client, server, modern)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"--dev"}]},{type:a,value:": Inspect webpack config for dev mode"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"--depth"}]},{type:a,value:": Inspection depth. Defaults to 2 to prevent verbose output."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"--no-colors"}]},{type:a,value:": Disable ANSI colors (disabled by default when TTY is not available or when piping to a file)"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Examples:"}]}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack devtool"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack resolve alias"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack module rules"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack module rules test=.jsx"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack module rules test=.pug oneOf use.0=raw"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack plugins constructor.name=WebpackBar options reporter"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack module rules loader=vue-"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt webpack module rules \"loader=.*-loader\""}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:ar},children:[{type:b,tag:i,props:{href:"#production-deployment"},children:[{type:a,value:as}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt lets you choose between Server or Static deployments."}]},{type:a,value:c},{type:b,tag:I,props:{id:at},children:[{type:b,tag:i,props:{href:"#server-deployment"},children:[{type:a,value:au}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To deploy a SSR application we use "},{type:b,tag:e,props:{},children:[{type:a,value:"target: 'server'"}]},{type:a,value:", where server is the default value."}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:C}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:" build\n"}]}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:E}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:F}]},{type:a,value:" run build\n"}]}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:av},{type:b,tag:e,props:{},children:[{type:a,value:aw}]},{type:a,value:" directory with everything inside ready to be deployed on your server hosting."}]},{type:a,value:c},{type:b,tag:J,props:{type:ax},children:[{type:b,tag:g,props:{},children:[{type:a,value:"We recommend putting "},{type:b,tag:e,props:{},children:[{type:a,value:aw}]},{type:a,value:" in "},{type:b,tag:e,props:{},children:[{type:a,value:".npmignore"}]},{type:a,value:Z},{type:b,tag:e,props:{},children:[{type:a,value:".gitignore"}]},{type:a,value:ay}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Once your application is built you can use the "},{type:b,tag:e,props:{},children:[{type:a,value:"start"}]},{type:a,value:" command to see a production version of your application."}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:C}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:" start\n"}]}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:E}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:F}]},{type:a,value:" run start\n"}]}]}]}]},{type:a,value:c},{type:b,tag:I,props:{id:az},children:[{type:b,tag:i,props:{href:"#static-deployment-pre-rendered"},children:[{type:a,value:aA}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt gives you the ability to host your web application on any static hosting."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To deploy a static generated site make sure you have "},{type:b,tag:e,props:{},children:[{type:a,value:"target: 'static'"}]},{type:a,value:" in your "},{type:b,tag:e,props:{},children:[{type:a,value:aB}]},{type:a,value:" (for Nuxt \u003E= 2.13):"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:aB}]},{type:b,tag:k,props:{className:[l,"language-js"]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,aC,aD]},children:[{type:a,value:"export"}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,aC,aD]},children:[{type:a,value:"default"}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:X}]},{type:a,value:z},{type:b,tag:d,props:{className:[f,"literal-property",w]},children:[{type:a,value:ah}]},{type:b,tag:d,props:{className:[f,x]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:d,props:{className:[f,A]},children:[{type:a,value:"'static'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:Y}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:C}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:" generate\n"}]}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:E}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:F}]},{type:a,value:" run generate\n"}]}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:av},{type:b,tag:e,props:{},children:[{type:a,value:P}]},{type:a,value:" directory with everything inside ready to be deployed on a static hosting service."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"As of Nuxt v2.13 there is a crawler installed that will now crawl your link tags and generate your routes when using the command "},{type:b,tag:e,props:{},children:[{type:a,value:O}]},{type:a,value:" based on those links."}]},{type:a,value:c},{type:b,tag:J,props:{type:"warning"},children:[{type:b,tag:g,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Warning:"}]},{type:a,value:" Dynamic routes are ignored by the "},{type:b,tag:e,props:{},children:[{type:a,value:"generate"}]},{type:a,value:" command when using Nuxt \u003C= v2.12: "},{type:b,tag:i,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-generate"},children:[{type:a,value:"API Configuration generate"}]}]}]},{type:a,value:c},{type:b,tag:J,props:{type:ax},children:[{type:b,tag:g,props:{},children:[{type:a,value:"When generating your web application with "},{type:b,tag:e,props:{},children:[{type:a,value:O}]},{type:a,value:", "},{type:b,tag:i,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Fcontext"},children:[{type:a,value:"the context"}]},{type:a,value:" given to "},{type:b,tag:i,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdata-fetching#async-data"},children:[{type:a,value:"asyncData"}]},{type:a,value:aE},{type:b,tag:i,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdata-fetching#the-fetch-hook"},children:[{type:a,value:"fetch"}]},{type:a,value:" will not have "},{type:b,tag:e,props:{},children:[{type:a,value:"req"}]},{type:a,value:aE},{type:b,tag:e,props:{},children:[{type:a,value:"res"}]},{type:a,value:ay}]}]},{type:a,value:c},{type:b,tag:"prose-h4",props:{id:"fail-on-error"},children:[{type:b,tag:i,props:{href:"#fail-on-error"},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Fail on Error"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To return a non-zero status code when a page error is encountered and let the CI\u002FCD fail the deployment or build, you can use the "},{type:b,tag:e,props:{},children:[{type:a,value:"--fail-on-error"}]},{type:a,value:" argument."}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:C}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:D}]},{type:a,value:" generate --fail-on-error\n"}]}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{className:[n]},children:[{type:a,value:E}]},{type:b,tag:k,props:{className:[l,p]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,q]},children:[{type:a,value:F}]},{type:a,value:" run generate --fail-on-error\n"}]}]}]}]},{type:a,value:c},{type:b,tag:v,props:{id:aF},children:[{type:b,tag:i,props:{href:"#whats-next"},children:[{type:a,value:aG}]}]},{type:a,value:c},{type:b,tag:J,props:{type:"next"},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Read our "},{type:b,tag:i,props:{href:Q},children:[{type:a,value:"Deployment Guides"}]},{type:a,value:" to find examples for deployments to popular hosts."}]}]}]},toc:{title:aH,searchDepth:t,depth:t,links:[{id:V,depth:t,text:W},{id:$,depth:t,text:aa},{id:af,depth:t,text:ag,children:[{id:ai,depth:K,text:"target: server (default value)"},{id:ao,depth:K,text:"target: static"}]},{id:ap,depth:t,text:aq},{id:ar,depth:t,text:as,children:[{id:at,depth:K,text:au},{id:az,depth:K,text:aA}]},{id:aF,depth:t,text:aG}]}},template:aI},templateOptions:{header:y,footer:y,aside:y,asideClass:aH,fluid:H,banner:y},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:aJ,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aK,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aL,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aI,subtitle:"Create fast websites easily",slug:"docs",to:aM,icon:"docs.svg",color:"bg-green-500"},{title:aN,subtitle:"Understand everything in Nuxt",slug:"examples",to:aO,icon:"examples.svg",color:"bg-green-600"},{title:aP,subtitle:"Learn with concrete cases",slug:"tutorials",to:aQ,icon:"tutorials.svg",color:"bg-green-700"},{title:L,subtitle:R,href:M,icon:S,color:T}]},{title:"Explore",items:[{title:aR,subtitle:"How to Deploy Nuxt",slug:"deployments",to:Q,icon:"deployments.svg",color:"bg-indigo-light"},{title:aS,subtitle:"Extend the power of Nuxt",href:aT,icon:"modules.svg",color:"bg-indigo"},{title:aU,subtitle:"Get started with themes",slug:"themes",to:aV,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aW,subtitle:"Latest news about Nuxt",slug:"announcements",to:aX,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aY,subtitle:"They are Nuxt",slug:"teams",to:aZ,icon:"teams.svg",color:"bg-mint-light"},{title:a_,subtitle:"All the code we have released",slug:"releases",to:a$,icon:"releases.svg",color:"bg-mint"},{title:ba,subtitle:"They trust us",slug:"sponsors",to:bb,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:bc}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:bc},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aW,to:aX},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ba,to:bb},{title:aY,to:aZ},{title:aP,to:aQ},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aM},{title:aN,to:aO},{title:aR,to:Q},{title:L,href:M},{title:aS,href:aT},{title:a_,to:a$},{title:aJ,to:aK},{title:aU,to:aV}]}],showCookieBanner:H},"1":{lastRelease:bd,masterCoursesLink:{title:L,subtitle:R,href:M,icon:S,color:T}},"2":{lastRelease:bd,masterCoursesLink:{title:L,subtitle:R,href:M,icon:S,color:T}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"dynamic-pages",to:"\u002Fexamples\u002Frouting\u002Fdynamic-pages",title:"Dynamic Pages"},next:{slug:"nested-pages",to:"\u002Fexamples\u002Frouting\u002Fnested-pages",title:"Nested Pages"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aL,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections"])},mutations:[]}}("text","element","\n","span","prose-code-inline","token","prose-paragraph","prose-li","prose-a","prose-code","pre","line-numbers","code","filename","prose-strong","language-bash","function",":"," ",2,"punctuation","prose-h2","property","operator",true,"\n  ","string","code-group","Yarn","yarn","NPM","npm","prose-ul",false,"prose-h3","alert",3,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite",",","nuxt generate","dist\u002F","\u002Fdeployments","Learn more with experts","master-courses.svg","bg-green-800","Nuxt comes with a set of useful commands, both for development and production purpose.","using-in-packagejson","Using in package.json","{","}"," or ",").","development-environment","Development Environment","nofollow","noopener","noreferrer","_blank","list-of-commands","List of Commands","target","target-server-default-value","target: ","nuxt dev"," - Launch the development server.","nuxt build","nuxt start","target-static","webpack-config-inspection","Webpack Config Inspection","production-deployment","Production Deployment","server-deployment","Server Deployment","Nuxt will create a ",".nuxt","info",".","static-deployment-pre-rendered","Static Deployment (Pre-rendered)","nuxt.config.js","keyword","module"," and ","whats-next","What's next?","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));