__NUXT_JSONP__("/guide/directory-structure/middleware", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au){return {data:[{page:{key:"content:2.guide:3.directory-structure:8.middleware.md",generatedAt:new Date(1658583558112),mtime:new Date(1658583558096),slug:P,title:P,position:"000200030008",to:"\u002Fguide\u002Fdirectory-structure\u002Fmiddleware",draft:w,page:x,language:"en",icon:"IconDirectory",head:{title:Q},empty:w,description:"Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.",excerpt:R,body:{raw:"---\nicon: IconDirectory\ntitle: 'middleware'\nhead.title: Middleware directory\n---\n\n# Middleware directory\n\nNuxt provides a customizable **route middleware** framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.\n\n::alert{type=info}\nRoute middleware run within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.\n::\n\nThere are three kinds of route middleware:\n\n1. Anonymous (or inline) route middleware, which are defined directly in the pages where they are used.\n2. Named route middleware, which are placed in the `middleware\u002F` directory and will be automatically loaded via asynchronous import when used on a page. (**Note**: The route middleware name is normalized to kebab-case, so `someMiddleware` becomes `some-middleware`.)\n3. Global route middleware, which are placed in the `middleware\u002F` directory (with a `.global` suffix) and will be automatically run on every route change.\n\nThe first two kinds of route middleware can be [defined in `definePageMeta`](\u002Fguide\u002Fdirectory-structure\u002Fpages).\n\n## Format\n\nRoute middleware are navigation guards that receive the current route and the next route as arguments.\n\n```js\nexport default defineNuxtRouteMiddleware((to, from) =\u003E {\n  if (to.params.id === '1') {\n    return abortNavigation()\n  }\n  return navigateTo('\u002F')\n})\n```\n\nNuxt provides two globally available helpers that can be returned directly from the middleware:\n\n1. `navigateTo (route: string | Route, options: { redirectCode: number, replace: boolean )` - Redirects to the given route, within plugins or middleware. It can also be called directly to perform page navigation.\n2. `abortNavigation (err?: string | Error)` - Aborts the navigation, with an optional error message.\n\nUnlike navigation guards in [the vue-router docs](https:\u002F\u002Frouter.vuejs.org\u002Fguide\u002Fadvanced\u002Fnavigation-guards.html#global-before-guards), a third `next()` argument is not passed, and redirects or route cancellation is handled by returning a value from the middleware. Possible return values are:\n\n* nothing - does not block navigation and will move to the next middleware function, if any, or complete the route navigation\n* `return navigateTo('\u002F')` or `return navigateTo({ path: '\u002F' })` - redirects to the given path and will set the redirect code to [`302` Found](https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F302) if the redirect happens on the server side\n* `return navigateTo('\u002F', { redirectCode: 301 })` - redirects to the given path and will set the redirect code to [`301` Moved Permanently](https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F301) if the redirect happens on the server side\n\n::ReadMore{link=\"\u002Fapi\u002Futils\u002Fnavigate-to\"}\n::\n\n* `return abortNavigation()` - stops the current navigation\n* `return abortNavigation(error)` - rejects the current navigation with an error\n\n::ReadMore{link=\"\u002Fapi\u002Futils\u002Fabort-navigation\"}\n::\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Frouting\"}\n::\n\n::alert{type=warning}\nWe recommend using the helper functions above for performing redirects or stopping navigation. Other possible return values described in [the vue-router docs](https:\u002F\u002Frouter.vuejs.org\u002Fguide\u002Fadvanced\u002Fnavigation-guards.html#global-before-guards) may work but there may be breaking changes in future.\n::\n\n## Adding middleware dynamically\n\nIt is possible to add global or named route middleware manually using the `addRouteMiddleware()` helper function, such as from within a plugin.\n\n```ts\nexport default defineNuxtPlugin(() =\u003E {\n  addRouteMiddleware('global-test', () =\u003E {\n    console.log('this global middleware was added in a plugin and will be run on every route change')\n  }, { global: true })\n\n  addRouteMiddleware('named-test', () =\u003E {\n    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')\n  })\n})\n```\n\n## Example: a named route middleware\n\n```bash\n-| middleware\u002F\n---| auth.ts\n```\n\nIn your page file, you can reference this route middleware\n\n```vue\n\u003Cscript setup\u003E\ndefinePageMeta({\n  middleware: [\"auth\"]\n  \u002F\u002F or middleware: 'auth'\n})\n\u003C\u002Fscript\u003E\n```\n\nNow, before navigation to that page can complete, the `auth` route middleware will be run.\n\n:LinkExample{link=\"\u002Fexamples\u002Frouting\u002Fmiddleware\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"middleware-directory"},children:[{type:a,value:Q}]},{type:a,value:e},{type:b,tag:k,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt provides a customizable "},{type:b,tag:S,props:{},children:[{type:a,value:"route middleware"}]},{type:a,value:" framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route."}]},{type:a,value:e},{type:b,tag:T,props:{type:"info"},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Route middleware run within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app."}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"There are three kinds of route middleware:"}]},{type:a,value:e},{type:b,tag:U,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:a,value:"Anonymous (or inline) route middleware, which are defined directly in the pages where they are used."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:a,value:"Named route middleware, which are placed in the "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" directory and will be automatically loaded via asynchronous import when used on a page. ("},{type:b,tag:S,props:{},children:[{type:a,value:"Note"}]},{type:a,value:": The route middleware name is normalized to kebab-case, so "},{type:b,tag:h,props:{},children:[{type:a,value:"someMiddleware"}]},{type:a,value:" becomes "},{type:b,tag:h,props:{},children:[{type:a,value:"some-middleware"}]},{type:a,value:".)"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:a,value:"Global route middleware, which are placed in the "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" directory (with a "},{type:b,tag:h,props:{},children:[{type:a,value:".global"}]},{type:a,value:" suffix) and will be automatically run on every route change."},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The first two kinds of route middleware can be "},{type:b,tag:o,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fpages"},children:[{type:a,value:"defined in "},{type:b,tag:h,props:{},children:[{type:a,value:W}]}]},{type:a,value:u}]},{type:a,value:e},{type:b,tag:J,props:{id:X},children:[{type:b,tag:o,props:{href:"#format"},children:[{type:a,value:Y}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Route middleware are navigation guards that receive the current route and the next route as arguments."}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:z,props:{className:[A,"language-js"]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,p,K]},children:[{type:a,value:Z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,K]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"defineNuxtRouteMiddleware"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,K]},children:[{type:a,value:"from"}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",n]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,p,L]},children:[{type:a,value:"if"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"params"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"id"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"==="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'1'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,p,L]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"abortNavigation"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,p,L]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"navigateTo"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'\u002F'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Nuxt provides two globally available helpers that can be returned directly from the middleware:"}]},{type:a,value:e},{type:b,tag:U,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"navigateTo (route: string | Route, options: { redirectCode: number, replace: boolean )"}]},{type:a,value:" - Redirects to the given route, within plugins or middleware. It can also be called directly to perform page navigation."},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"abortNavigation (err?: string | Error)"}]},{type:a,value:" - Aborts the navigation, with an optional error message."},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Unlike navigation guards in "},{type:b,tag:o,props:{href:ac,rel:[E,F,G],target:H},children:[{type:a,value:ad}]},{type:a,value:", a third "},{type:b,tag:h,props:{},children:[{type:a,value:"next()"}]},{type:a,value:" argument is not passed, and redirects or route cancellation is handled by returning a value from the middleware. Possible return values are:"}]},{type:a,value:e},{type:b,tag:ae,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:a,value:"nothing - does not block navigation and will move to the next middleware function, if any, or complete the route navigation"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"return navigateTo('\u002F')"}]},{type:a,value:" or "},{type:b,tag:h,props:{},children:[{type:a,value:"return navigateTo({ path: '\u002F' })"}]},{type:a,value:af},{type:b,tag:o,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F302",rel:[E,F,G],target:H},children:[{type:b,tag:h,props:{},children:[{type:a,value:"302"}]},{type:a,value:" Found"}]},{type:a,value:ag},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"return navigateTo('\u002F', { redirectCode: 301 })"}]},{type:a,value:af},{type:b,tag:o,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTTP\u002FStatus\u002F301",rel:[E,F,G],target:H},children:[{type:b,tag:h,props:{},children:[{type:a,value:"301"}]},{type:a,value:" Moved Permanently"}]},{type:a,value:ag},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:N,props:{link:"\u002Fapi\u002Futils\u002Fnavigate-to"},children:[]},{type:a,value:e},{type:b,tag:ae,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"return abortNavigation()"}]},{type:a,value:" - stops the current navigation"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"return abortNavigation(error)"}]},{type:a,value:" - rejects the current navigation with an error"},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:N,props:{link:"\u002Fapi\u002Futils\u002Fabort-navigation"},children:[]},{type:a,value:e},{type:b,tag:N,props:{link:"\u002Fguide\u002Ffeatures\u002Frouting"},children:[]},{type:a,value:e},{type:b,tag:T,props:{type:"warning"},children:[{type:b,tag:k,props:{},children:[{type:a,value:"We recommend using the helper functions above for performing redirects or stopping navigation. Other possible return values described in "},{type:b,tag:o,props:{href:ac,rel:[E,F,G],target:H},children:[{type:a,value:ad}]},{type:a,value:" may work but there may be breaking changes in future."}]}]},{type:a,value:e},{type:b,tag:J,props:{id:ah},children:[{type:b,tag:o,props:{href:"#adding-middleware-dynamically"},children:[{type:a,value:ai}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"It is possible to add global or named route middleware manually using the "},{type:b,tag:h,props:{},children:[{type:a,value:"addRouteMiddleware()"}]},{type:a,value:" helper function, such as from within a plugin."}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:z,props:{className:[A,"language-ts"]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"defineNuxtPlugin"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'global-test'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'this global middleware was added in a plugin and will be run on every route change'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:" global"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'named-test'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'this named middleware was added in a plugin and would override any existing middleware of the same name'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:J,props:{id:ao},children:[{type:b,tag:o,props:{href:"#example-a-named-route-middleware"},children:[{type:a,value:ap}]}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:z,props:{className:[A,"language-bash"]},children:[{type:b,tag:B,props:{},children:[{type:a,value:"-"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aq}]},{type:a,value:" middleware\u002F\n---"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aq}]},{type:a,value:" auth.ts\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"In your page file, you can reference this route middleware"}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:z,props:{className:[A,"language-html"]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003C"}]},{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:"\n  middleware"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"auth\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F or middleware: 'auth'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Now, before navigation to that page can complete, the "},{type:b,tag:h,props:{},children:[{type:a,value:"auth"}]},{type:a,value:" route middleware will be run."}]},{type:a,value:e},{type:b,tag:"link-example",props:{link:"\u002Fexamples\u002Frouting\u002Fmiddleware"},children:[]}]},toc:{title:as,searchDepth:v,depth:v,links:[{id:X,depth:v,text:Y},{id:ah,depth:v,text:ai},{id:ao,depth:v,text:ap}]}},template:"Docs"},templateOptions:{header:x,footer:x,aside:x,asideClass:as,fluid:w,banner:w},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:at,to:"\u002Fguide\u002Fdirectory-structure\u002Flayouts",title:at},next:{slug:au,to:"\u002Fguide\u002Fdirectory-structure\u002Fnode_modules",title:au}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4"])},mutations:R}}("text","element","span","token","\n","punctuation"," ","prose-code-inline","(",")","prose-paragraph","prose-li","function","operator","prose-a","keyword","{","\n  ","string","}",".",2,false,true,"prose-code","pre","line-numbers","code",",","=\u003E","nofollow","noopener","noreferrer","_blank","tag","prose-h2","module","control-flow","\n    ","read-more","script","middleware","Middleware directory",void 0,"prose-strong","alert","prose-ol","middleware\u002F","definePageMeta","format","Format","export","default","to","property-access","return","https:\u002F\u002Frouter.vuejs.org\u002Fguide\u002Fadvanced\u002Fnavigation-guards.html#global-before-guards","the vue-router docs","prose-ul"," - redirects to the given path and will set the redirect code to "," if the redirect happens on the server side","adding-middleware-dynamically","Adding middleware dynamically","addRouteMiddleware","builtin","console","log",":","example-a-named-route-middleware","Example: a named route middleware","|","\u003E","","layouts","node_modules")));