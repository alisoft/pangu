__NUXT_JSONP__("/zh/guide/features/error-handling", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn){return {data:[{page:{key:"content:zh:2.guide:2.features:7.error-handling.md",generatedAt:new Date(1657627199901),mtime:new Date(1657627199888),slug:ad,title:ae,position:"000200020007",to:"\u002Fguide\u002Ffeatures\u002Ferror-handling",draft:y,page:E,language:"zh",empty:y,description:P,excerpt:af,body:{raw:"# Error Handling\n\n## Handling errors\n\nNuxt 3 is a full-stack framework, which means there are several sources of unpreventable user runtime errors that can happen in different contexts:\n\n1. Errors during the Vue rendering lifecycle (SSR + SPA)\n1. Errors during API or Nitro server lifecycle\n1. Server and client startup errors (SSR + SPA)\n\n### Errors during the Vue rendering lifecycle (SSR + SPA)\n\nYou can hook into Vue errors using [`onErrorCaptured`](https:\u002F\u002Fvuejs.org\u002Fapi\u002Fcomposition-api-lifecycle.html#onerrorcaptured).\n\nIn addition, Nuxt provides a `vue:error` hook that will be called if any errors propagate up to the top level.\n\nIf you are using a error reporting framework, you can provide a global handler through [`vueApp.config.errorHandler`](https:\u002F\u002Fvuejs.org\u002Fapi\u002Fapplication.html#app-config-errorhandler). It will receive all Vue errors, even if they are handled.\n\n#### Example with global error reporting framework\n\n```js\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\n  nuxtApp.vueApp.config.errorHandler = (error, context) =\u003E {\n    \u002F\u002F ...\n  }\n})\n```\n\n### Server and client startup errors (SSR + SPA)\n\nNuxt will call the `app:error` hook if there are any errors in starting your Nuxt application.\n\nThis includes:\n\n* running Nuxt plugins\n* processing `app:created` and `app:beforeMount` hooks\n* mounting the app (on client-side), though you should handle this case with `onErrorCaptured` or with `vue:error`\n* processing the `app:mounted` hook\n\n### Errors during API or Nitro server lifecycle\n\nYou cannot currently define a server-side handler for these errors, but can render an error page (see the next section).\n\n## Rendering an error page\n\nWhen Nuxt encounters a fatal error, whether during the server lifecycle, or when rendering your Vue application (both SSR and SPA), it will either render a JSON response (if requested with `Accept: application\u002Fjson` header) or an HTML error page.\n\nYou can customize this error page by adding `~\u002Ferror.vue` in the source directory of your application, alongside `app.vue`. This page has a single prop - `error` which contains an error for you to handle.\n\nWhen you are ready to remove the error page, you can call the `clearError` helper function, which takes an optional path to redirect to (for example, if you want to navigate to a 'safe' page).\n\n::alert{type=\"warning\"}\nMake sure to check before using anything dependent on Nuxt plugins, such as `$route` or `useRouter`, as if a plugin threw an error, then it won't be re-run until you clear the error.\n::\n\n### Example\n\n```vue [error.vue]\n\u003Ctemplate\u003E\n  \u003Cbutton @click=\"handleError\"\u003EClear errors\u003C\u002Fbutton\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript setup\u003E\nconst props = defineProps({\n  error: Object\n})\n\nconst handleError = () =\u003E clearError({ redirect: '\u002F' })\n\u003C\u002Fscript\u003E\n```\n\n## Error helper methods\n\n### `useError`\n\n* `function useError (): Ref\u003Cany\u003E`\n\nThis function will return the global Nuxt error that is being handled.\n\n::ReadMore{link=\"\u002Fapi\u002Fcomposables\u002Fuse-error\"}\n::\n\n### `throwError`\n\n* `function throwError (err: string | Error): Error`\n\nYou can call this function at any point on client-side, or (on server side) directly within middleware, plugins or `setup()` functions. It will trigger a full-screen error page (as above) which you can clear with `clearError`.\n\n::ReadMore{link=\"\u002Fapi\u002Futils\u002Fthrow-error\"}\n::\n\n### `clearError`\n\n* `function clearError (options?: { redirect?: string }): Promise\u003Cvoid\u003E`\n\nThis function will clear the currently handled Nuxt error. It also takes an optional path to redirect to (for example, if you want to navigate to a 'safe' page).\n\n::ReadMore{link=\"\u002Fapi\u002Futils\u002Fclear-error\"}\n::\n\n## Rendering errors within your app\n\nNuxt also provides a `\u003CNuxtErrorBoundary\u003E` component that allows you to handle client-side errors within your app, without replacing your entire site with an error page.\n\nThis component is responsible for handling errors that occur within its default slot. On client-side, it will prevent the error from bubbling up to the top level, and will render the `#error` slot instead.\n\nThe `#error` slot will receive `error` as a prop. (If you set `error = null` it will trigger re-rendering the default slot; you'll need to ensure that the error is fully resolved first or the error slot will just be rendered a second time.)\n\n::alert{type=\"info\"}\nIf you navigate to another route, the error will be cleared automatically.\n::\n\n### Example\n\n```vue [pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003C!-- some content --\u003E\n  \u003CNuxtErrorBoundary @error=\"someErrorLogger\"\u003E\n    \u003C!-- You use the default slot to render your content --\u003E\n    \u003Ctemplate #error=\"{ error }\"\u003E\n      You can display the error locally here.\n      \u003Cbutton @click=\"error = null\"\u003E\n        This will clear the error.\n      \u003C\u002Fbutton\u003E\n    \u003C\u002Ftemplate\u003E\n  \u003C\u002FNuxtErrorBoundary\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:LinkExample{link=\"\u002Fexamples\u002Fapp\u002Ferror-handling\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:ad},children:[{type:a,value:ae}]},{type:a,value:e},{type:b,tag:F,props:{id:ag},children:[{type:b,tag:k,props:{href:"#handling-errors"},children:[{type:a,value:ah}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt 3 is a full-stack framework, which means there are several sources of unpreventable user runtime errors that can happen in different contexts:"}]},{type:a,value:e},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:Q},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:R},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:S},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{id:ai},children:[{type:b,tag:k,props:{href:"#errors-during-the-vue-rendering-lifecycle-ssr--spa"},children:[{type:a,value:Q}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You can hook into Vue errors using "},{type:b,tag:k,props:{href:"https:\u002F\u002Fvuejs.org\u002Fapi\u002Fcomposition-api-lifecycle.html#onerrorcaptured",rel:[aj,ak,al],target:am},children:[{type:b,tag:g,props:{},children:[{type:a,value:an}]}]},{type:a,value:z}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"In addition, Nuxt provides a "},{type:b,tag:g,props:{},children:[{type:a,value:ao}]},{type:a,value:" hook that will be called if any errors propagate up to the top level."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"If you are using a error reporting framework, you can provide a global handler through "},{type:b,tag:k,props:{href:"https:\u002F\u002Fvuejs.org\u002Fapi\u002Fapplication.html#app-config-errorhandler",rel:[aj,ak,al],target:am},children:[{type:b,tag:g,props:{},children:[{type:a,value:"vueApp.config.errorHandler"}]}]},{type:a,value:". It will receive all Vue errors, even if they are handled."}]},{type:a,value:e},{type:b,tag:"prose-h4",props:{id:"example-with-global-error-reporting-framework"},children:[{type:b,tag:k,props:{href:"#example-with-global-error-reporting-framework"},children:[{type:a,value:"Example with global error reporting framework"}]}]},{type:a,value:e},{type:b,tag:T,props:{},children:[{type:b,tag:U,props:{className:[V,"language-js"]},children:[{type:b,tag:W,props:{},children:[{type:b,tag:c,props:{className:[d,G,ap]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,G,ap]},children:[{type:a,value:"default"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"defineNuxtPlugin"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:"nuxtApp"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,X,o]},children:[{type:a,value:Y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:"\n  nuxtApp"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"vueApp"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"config"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,"method-variable",ar,"method",A,Z]},children:[{type:a,value:"errorHandler"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:" context"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,X,o]},children:[{type:a,value:Y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:as},children:[{type:b,tag:k,props:{href:"#server-and-client-startup-errors-ssr--spa"},children:[{type:a,value:S}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt will call the "},{type:b,tag:g,props:{},children:[{type:a,value:"app:error"}]},{type:a,value:" hook if there are any errors in starting your Nuxt application."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"This includes:"}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"running Nuxt plugins"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"processing "},{type:b,tag:g,props:{},children:[{type:a,value:"app:created"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"app:beforeMount"}]},{type:a,value:" hooks"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"mounting the app (on client-side), though you should handle this case with "},{type:b,tag:g,props:{},children:[{type:a,value:an}]},{type:a,value:" or with "},{type:b,tag:g,props:{},children:[{type:a,value:ao}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:a,value:"processing the "},{type:b,tag:g,props:{},children:[{type:a,value:"app:mounted"}]},{type:a,value:" hook"},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{id:at},children:[{type:b,tag:k,props:{href:"#errors-during-api-or-nitro-server-lifecycle"},children:[{type:a,value:R}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You cannot currently define a server-side handler for these errors, but can render an error page (see the next section)."}]},{type:a,value:e},{type:b,tag:F,props:{id:au},children:[{type:b,tag:k,props:{href:"#rendering-an-error-page"},children:[{type:a,value:av}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"When Nuxt encounters a fatal error, whether during the server lifecycle, or when rendering your Vue application (both SSR and SPA), it will either render a JSON response (if requested with "},{type:b,tag:g,props:{},children:[{type:a,value:"Accept: application\u002Fjson"}]},{type:a,value:" header) or an HTML error page."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You can customize this error page by adding "},{type:b,tag:g,props:{},children:[{type:a,value:"~\u002Ferror.vue"}]},{type:a,value:" in the source directory of your application, alongside "},{type:b,tag:g,props:{},children:[{type:a,value:"app.vue"}]},{type:a,value:". This page has a single prop - "},{type:b,tag:g,props:{},children:[{type:a,value:_}]},{type:a,value:" which contains an error for you to handle."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"When you are ready to remove the error page, you can call the "},{type:b,tag:g,props:{},children:[{type:a,value:C}]},{type:a,value:" helper function, which takes an optional path to redirect to (for example, if you want to navigate to a 'safe' page)."}]},{type:a,value:e},{type:b,tag:aw,props:{type:"warning"},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Make sure to check before using anything dependent on Nuxt plugins, such as "},{type:b,tag:g,props:{},children:[{type:a,value:"$route"}]},{type:a,value:" or "},{type:b,tag:g,props:{},children:[{type:a,value:"useRouter"}]},{type:a,value:", as if a plugin threw an error, then it won't be re-run until you clear the error."}]}]},{type:a,value:e},{type:b,tag:n,props:{id:ax},children:[{type:b,tag:k,props:{href:"#example"},children:[{type:a,value:L}]}]},{type:a,value:e},{type:b,tag:T,props:{},children:[{type:b,tag:c,props:{className:[ay]},children:[{type:a,value:"error.vue"}]},{type:b,tag:U,props:{className:[V,az]},children:[{type:b,tag:W,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:M}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,f,O]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:"Clear errors"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:e},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:aD}]},{type:a,value:" props "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"defineProps"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:"\n  error"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aE}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"known-class-name","class-name"]},children:[{type:a,value:"Object"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:aD}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,ar,A]},children:[{type:a,value:aB}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,X,o]},children:[{type:a,value:Y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:" redirect"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aE}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'\u002F'"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:e}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:F,props:{id:aF},children:[{type:b,tag:k,props:{href:"#error-helper-methods"},children:[{type:a,value:aG}]}]},{type:a,value:e},{type:b,tag:n,props:{id:aH},children:[{type:b,tag:k,props:{href:"#useerror"},children:[{type:b,tag:g,props:{},children:[{type:a,value:aI}]}]}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"function useError (): Ref\u003Cany\u003E"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"This function will return the global Nuxt error that is being handled."}]},{type:a,value:e},{type:b,tag:ab,props:{link:"\u002Fapi\u002Fcomposables\u002Fuse-error"},children:[]},{type:a,value:e},{type:b,tag:n,props:{id:aJ},children:[{type:b,tag:k,props:{href:"#throwerror"},children:[{type:b,tag:g,props:{},children:[{type:a,value:aK}]}]}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"function throwError (err: string | Error): Error"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You can call this function at any point on client-side, or (on server side) directly within middleware, plugins or "},{type:b,tag:g,props:{},children:[{type:a,value:"setup()"}]},{type:a,value:" functions. It will trigger a full-screen error page (as above) which you can clear with "},{type:b,tag:g,props:{},children:[{type:a,value:C}]},{type:a,value:z}]},{type:a,value:e},{type:b,tag:ab,props:{link:"\u002Fapi\u002Futils\u002Fthrow-error"},children:[]},{type:a,value:e},{type:b,tag:n,props:{id:aL},children:[{type:b,tag:k,props:{href:"#clearerror"},children:[{type:b,tag:g,props:{},children:[{type:a,value:C}]}]}]},{type:a,value:e},{type:b,tag:K,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"function clearError (options?: { redirect?: string }): Promise\u003Cvoid\u003E"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"This function will clear the currently handled Nuxt error. It also takes an optional path to redirect to (for example, if you want to navigate to a 'safe' page)."}]},{type:a,value:e},{type:b,tag:ab,props:{link:"\u002Fapi\u002Futils\u002Fclear-error"},children:[]},{type:a,value:e},{type:b,tag:F,props:{id:aM},children:[{type:b,tag:k,props:{href:"#rendering-errors-within-your-app"},children:[{type:a,value:aN}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Nuxt also provides a "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003CNuxtErrorBoundary\u003E"}]},{type:a,value:" component that allows you to handle client-side errors within your app, without replacing your entire site with an error page."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"This component is responsible for handling errors that occur within its default slot. On client-side, it will prevent the error from bubbling up to the top level, and will render the "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" slot instead."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"The "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" slot will receive "},{type:b,tag:g,props:{},children:[{type:a,value:_}]},{type:a,value:" as a prop. (If you set "},{type:b,tag:g,props:{},children:[{type:a,value:aO}]},{type:a,value:" it will trigger re-rendering the default slot; you'll need to ensure that the error is fully resolved first or the error slot will just be rendered a second time.)"}]},{type:a,value:e},{type:b,tag:aw,props:{type:"info"},children:[{type:b,tag:j,props:{},children:[{type:a,value:"If you navigate to another route, the error will be cleared automatically."}]}]},{type:a,value:e},{type:b,tag:n,props:{id:aP},children:[{type:b,tag:k,props:{href:"#example-1"},children:[{type:a,value:L}]}]},{type:a,value:e},{type:b,tag:T,props:{},children:[{type:b,tag:c,props:{className:[ay]},children:[{type:a,value:"pages\u002Findex.vue"}]},{type:b,tag:U,props:{className:[V,az]},children:[{type:b,tag:W,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\u003C!-- some content --\u003E"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:aQ}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"@error"}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,f,O]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"someErrorLogger"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"\u003C!-- You use the default slot to render your content --\u003E"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,f,O]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"{ error }"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:"\n      You can display the error locally here.\n      "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:M}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,f,O]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:"\n        This will clear the error.\n      "},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:"link-example",props:{link:"\u002Fexamples\u002Fapp\u002Ferror-handling"},children:[]}]},toc:{title:P,searchDepth:x,depth:x,links:[{id:ag,depth:x,text:ah,children:[{id:ai,depth:q,text:Q},{id:as,depth:q,text:S},{id:at,depth:q,text:R}]},{id:au,depth:x,text:av,children:[{id:ax,depth:q,text:L}]},{id:aF,depth:x,text:aG,children:[{id:aH,depth:q,text:aI},{id:aJ,depth:q,text:aK},{id:aL,depth:q,text:C}]},{id:aM,depth:x,text:aN,children:[{id:aP,depth:q,text:L}]}]}},template:aR},templateOptions:{header:E,footer:E,aside:E,asideClass:P,fluid:y,banner:y},_img:{}}],fetch:{"0":{headerLinks:[{title:"发现",items:[{title:aS,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aT,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aR,subtitle:"Create fast websites easily",slug:"docs",to:aU,icon:"docs.svg",color:"bg-green-500"},{title:aV,subtitle:"Understand everything in Nuxt",slug:"examples",to:aW,icon:"examples.svg",color:"bg-green-600"},{title:aX,subtitle:"Learn with concrete cases",slug:"tutorials",to:aY,icon:"tutorials.svg",color:"bg-green-700"},{title:aZ,subtitle:"Learn more with experts",href:a_,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:a$,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ba,icon:"deployments.svg",color:"bg-indigo-light"},{title:bb,subtitle:"Extend the power of Nuxt",href:bc,icon:"modules.svg",color:"bg-indigo"},{title:bd,subtitle:"Get started with themes",slug:"themes",to:be,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:bf,subtitle:"Latest news about Nuxt",slug:"announcements",to:bg,icon:"announcements.svg",color:"bg-mint-lighter"},{title:bh,subtitle:"They are Nuxt",slug:"teams",to:bi,icon:"teams.svg",color:"bg-mint-light"},{title:bj,subtitle:"All the code we have released",slug:"releases",to:bk,icon:"releases.svg",color:"bg-mint"},{title:bl,subtitle:"They trust us",slug:"sponsors",to:bm,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:bn}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:bn},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:bf,to:bg},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:bl,to:bm},{title:bh,to:bi},{title:aX,to:aY},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aU},{title:aV,to:aW},{title:a$,to:ba},{title:aZ,href:a_},{title:bb,href:bc},{title:bj,to:bk},{title:aS,to:aT},{title:bd,to:be}]}],showCookieBanner:y},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"state-management",to:"\u002Fguide\u002Ffeatures\u002Fstate-management",title:"State Management"},next:{slug:"plugins",to:"\u002Fguide\u002Ffeatures\u002Fplugins",title:"Plugins"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4"])},mutations:af}}("text","element","span","token","\n","punctuation","prose-code-inline","tag"," ","prose-paragraph","prose-a","\u003E","prose-li","prose-h3","operator","\"",3,"=","\u003C","\u003C\u002F","(",")","template",2,false,".","function","\n  ","clearError","attr-name",true,"prose-h2","keyword","{","\n    ","}","prose-ul","Example","button","attr-value","attr-equals","","Errors during the Vue rendering lifecycle (SSR + SPA)","Errors during API or Nitro server lifecycle","Server and client startup errors (SSR + SPA)","prose-code","pre","line-numbers","code","arrow","=\u003E","property-access","error","comment","script","read-more","#error","error-handling","Error Handling",void 0,"handling-errors","Handling errors","errors-during-the-vue-rendering-lifecycle-ssr--spa","nofollow","noopener","noreferrer","_blank","onErrorCaptured","vue:error","module","parameter","function-variable","server-and-client-startup-errors-ssr--spa","errors-during-api-or-nitro-server-lifecycle","rendering-an-error-page","Rendering an error page","alert","example","filename","language-html","@click","handleError","\n\n","const",":","error-helper-methods","Error helper methods","useerror","useError","throwerror","throwError","clearerror","rendering-errors-within-your-app","Rendering errors within your app","error = null","example-1","NuxtErrorBoundary","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));