__NUXT_JSONP__("/api/composables/use-async-data", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{page:{key:"content:en:3.api:1.composables:use-async-data.md",generatedAt:new Date(1657627224876),mtime:new Date(1657627224825),slug:"use-async-data",title:x,position:"000300019999",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data",draft:C,page:D,language:"en",empty:C,description:T,excerpt:U,body:{raw:"# `useAsyncData`\n\nWithin your pages, components, and plugins you can use useAsyncData to get access to data that resolves asynchronously.\n\n## Type\n\n```ts [Signature]\nfunction useAsyncData(\n  handler: (nuxtApp?: NuxtApp) =\u003E Promise\u003CDataT\u003E,\n  options?: AsyncDataOptions\u003CDataT\u003E\n): AsyncData\u003CDataT\u003E\nfunction useAsyncData(\n  key: string,\n  handler: (nuxtApp?: NuxtApp) =\u003E Promise\u003CDataT\u003E,\n  options?: AsyncDataOptions\u003CDataT\u003E\n): Promise\u003CAsyncData\u003CDataT\u003E\u003E\n\ntype AsyncDataOptions\u003CDataT\u003E = {\n  server?: boolean\n  lazy?: boolean\n  default?: () =\u003E DataT | Ref\u003CDataT\u003E\n  transform?: (input: DataT) =\u003E DataT\n  pick?: string[]\n  watch?: WatchSource[]\n  initialCache?: boolean\n}\n\ntype AsyncData\u003CDataT\u003E = {\n  data: Ref\u003CDataT\u003E\n  pending: Ref\u003Cboolean\u003E\n  refresh: () =\u003E Promise\u003Cvoid\u003E\n  error: Ref\u003Cany\u003E\n}\n```\n\n## Params\n\n* **key**: a unique key to ensure that data fetching can be properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file name and line number of the instance of `useAsyncData` will be generated for you.\n* **handler**: an asynchronous function that returns a value\n* **options**:\n  * _lazy_: whether to resolve the async function after loading the route, instead of blocking navigation (defaults to `false`)\n  * _default_: a factory function to set the default value of the data, before the async function resolves - particularly useful with the `lazy: true` option\n  * _server_: whether to fetch the data on the server (defaults to `true`)\n  * _transform_: a function that can be used to alter `handler` function result after resolving\n  * _pick_: only pick specified keys in this array from the `handler` function result\n  * _watch_: watch reactive sources to auto-refresh\n  * _initialCache_: When set to `false`, will skip payload cache for initial fetch. (defaults to `true`)\n\nUnder the hood, `lazy: false` uses `\u003CSuspense\u003E` to block the loading of the route before the data has been fetched. Consider using `lazy: true` and implementing a loading state instead for a snappier user experience.\n\n## Return values\n\n* **data**: the result of the asynchronous function that is passed in\n* **pending**: a boolean indicating whether the data is still being fetched\n* **refresh**: a function that can be used to refresh the data returned by the `handler` function\n* **error**: an error object if the data fetching failed\n\nBy default, Nuxt waits until a `refresh` is finished before it can be executed again. Passing `true` as parameter skips that wait.\n\n## Example\n\n```ts\nconst { data, pending, error, refresh } = await useAsyncData(\n  'mountains',\n  () =\u003E $fetch('https:\u002F\u002Fapi.nuxtjs.dev\u002Fmountains')\n)\n```\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Fdata-fetching\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"useasyncdata"},children:[{type:b,tag:j,props:{},children:[{type:a,value:x}]}]},{type:a,value:f},{type:b,tag:L,props:{class:"d-heading-description"},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:E,props:{id:F},children:[{type:b,tag:G,props:{href:"#type"},children:[{type:a,value:V}]}]},{type:a,value:f},{type:b,tag:W,props:{},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:"Signature"}]},{type:b,tag:X,props:{className:[Y,Z]},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,M,s]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" AsyncData"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"\n  key"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,M,s]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003E\u003E"}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"AsyncDataOptions"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:"\n  server"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:a,value:"\n  lazy"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" DataT "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"|"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n  transform"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"input"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" DataT"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" DataT\n  pick"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:"\n  watch"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" WatchSource"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:"\n  initialCache"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:"\n  data"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n  pending"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,M,s]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n  error"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"any"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:E,props:{id:aj},children:[{type:b,tag:G,props:{href:"#params"},children:[{type:a,value:ak}]}]},{type:a,value:f},{type:b,tag:R,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:"key"}]},{type:a,value:": a unique key to ensure that data fetching can be properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file name and line number of the instance of "},{type:b,tag:j,props:{},children:[{type:a,value:x}]},{type:a,value:" will be generated for you."},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:z}]},{type:a,value:": an asynchronous function that returns a value"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:"options"}]},{type:a,value:i},{type:a,value:f},{type:b,tag:R,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"lazy"}]},{type:a,value:": whether to resolve the async function after loading the route, instead of blocking navigation (defaults to "},{type:b,tag:j,props:{},children:[{type:a,value:al}]},{type:a,value:m},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:ag}]},{type:a,value:": a factory function to set the default value of the data, before the async function resolves - particularly useful with the "},{type:b,tag:j,props:{},children:[{type:a,value:am}]},{type:a,value:" option"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"server"}]},{type:a,value:": whether to fetch the data on the server (defaults to "},{type:b,tag:j,props:{},children:[{type:a,value:S}]},{type:a,value:m},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"transform"}]},{type:a,value:": a function that can be used to alter "},{type:b,tag:j,props:{},children:[{type:a,value:z}]},{type:a,value:" function result after resolving"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"pick"}]},{type:a,value:": only pick specified keys in this array from the "},{type:b,tag:j,props:{},children:[{type:a,value:z}]},{type:a,value:" function result"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"watch"}]},{type:a,value:": watch reactive sources to auto-refresh"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"initialCache"}]},{type:a,value:": When set to "},{type:b,tag:j,props:{},children:[{type:a,value:al}]},{type:a,value:", will skip payload cache for initial fetch. (defaults to "},{type:b,tag:j,props:{},children:[{type:a,value:S}]},{type:a,value:m},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:L,props:{},children:[{type:a,value:"Under the hood, "},{type:b,tag:j,props:{},children:[{type:a,value:"lazy: false"}]},{type:a,value:" uses "},{type:b,tag:j,props:{},children:[{type:a,value:"\u003CSuspense\u003E"}]},{type:a,value:" to block the loading of the route before the data has been fetched. Consider using "},{type:b,tag:j,props:{},children:[{type:a,value:am}]},{type:a,value:" and implementing a loading state instead for a snappier user experience."}]},{type:a,value:f},{type:b,tag:E,props:{id:an},children:[{type:b,tag:G,props:{href:"#return-values"},children:[{type:a,value:ao}]}]},{type:a,value:f},{type:b,tag:R,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:"data"}]},{type:a,value:": the result of the asynchronous function that is passed in"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:"pending"}]},{type:a,value:": a boolean indicating whether the data is still being fetched"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:Q}]},{type:a,value:": a function that can be used to refresh the data returned by the "},{type:b,tag:j,props:{},children:[{type:a,value:z}]},{type:a,value:" function"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:v,props:{},children:[{type:a,value:"error"}]},{type:a,value:": an error object if the data fetching failed"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:L,props:{},children:[{type:a,value:"By default, Nuxt waits until a "},{type:b,tag:j,props:{},children:[{type:a,value:Q}]},{type:a,value:" is finished before it can be executed again. Passing "},{type:b,tag:j,props:{},children:[{type:a,value:S}]},{type:a,value:" as parameter skips that wait."}]},{type:a,value:f},{type:b,tag:E,props:{id:ap},children:[{type:b,tag:G,props:{href:"#example"},children:[{type:a,value:aq}]}]},{type:a,value:f},{type:b,tag:W,props:{},children:[{type:b,tag:X,props:{className:[Y,Z]},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"const"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:" pending"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:" error"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:" refresh "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"await"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'mountains'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"$fetch"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'https:\u002F\u002Fapi.nuxtjs.dev\u002Fmountains'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Fdata-fetching"},children:[]}]},toc:{title:ar,searchDepth:B,depth:B,links:[{id:F,depth:B,text:V},{id:aj,depth:B,text:ak},{id:an,depth:B,text:ao},{id:ap,depth:B,text:aq}]}},template:as},templateOptions:{header:D,footer:D,aside:D,asideClass:ar,fluid:C,banner:C},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:at,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:au,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:"Testimonials",subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:as,subtitle:"Create fast websites easily",slug:"docs",to:av,icon:"docs.svg",color:"bg-green-500"},{title:aw,subtitle:"Understand everything in Nuxt",slug:"examples",to:ax,icon:"examples.svg",color:"bg-green-600"},{title:ay,subtitle:"Learn with concrete cases",slug:"tutorials",to:az,icon:"tutorials.svg",color:"bg-green-700"},{title:aA,subtitle:"Learn more with experts",href:aB,icon:"master-courses.svg",color:"bg-green-800"}]},{title:"Explore",items:[{title:aC,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aD,icon:"deployments.svg",color:"bg-indigo-light"},{title:aE,subtitle:"Extend the power of Nuxt",href:aF,icon:"modules.svg",color:"bg-indigo"},{title:aG,subtitle:"Get started with themes",slug:"themes",to:aH,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aI,subtitle:"Latest news about Nuxt",slug:"announcements",to:aJ,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aK,subtitle:"They are Nuxt",slug:"teams",to:aL,icon:"teams.svg",color:"bg-mint-light"},{title:aM,subtitle:"All the code we have released",slug:"releases",to:aN,icon:"releases.svg",color:"bg-mint"},{title:aO,subtitle:"They trust us",slug:"sponsors",to:aP,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aQ}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aQ},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aI,to:aJ},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aO,to:aP},{title:aK,to:aL},{title:ay,to:az},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:av},{title:aw,to:ax},{title:aC,to:aD},{title:aA,href:aB},{title:aE,href:aF},{title:aM,to:aN},{title:at,to:au},{title:aG,to:aH}]}],showCookieBanner:C},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"edge-channel",to:"\u002Fguide\u002Fgoing-further\u002Fedge-channel",title:"Edge Channel"},next:{slug:"use-cookie",to:"\u002Fapi\u002Fcomposables\u002Fuse-cookie",title:"useCookie"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","Alert","CodeGroup","ProseEm","ProseBlockquote","ProseOl","ProseImg","NeedContribution","ReadMore","LinkExample","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel","Sandbox"])},mutations:U}}("text","element","span","token","operator","\n","punctuation"," ",":","prose-code-inline","\u003C","prose-li",")","\u003E","?","builtin","(","DataT","function","keyword",",","prose-strong","prose-em","useAsyncData","\n  ","handler","=\u003E",2,false,true,"prose-h2","type","prose-a","Promise","string","boolean"," Ref","prose-paragraph","function-variable","=","{","}","refresh","prose-ul","true","Within your pages, components, and plugins you can use useAsyncData to get access to data that resolves asynchronously.",void 0,"Type","prose-code","pre","language-ts","line-numbers","code","nuxtApp"," NuxtApp","\n  options"," AsyncDataOptions","AsyncData","\n\n","class-name","default","[","]","params","Params","false","lazy: true","return-values","Return values","example","Example","","Docs","Showcases","\u002Fshowcases","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners")));