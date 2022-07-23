__NUXT_JSONP__("/guide/concepts/vuejs-development", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){return {data:[{page:{key:"content:2.guide:1.concepts:2.vuejs-development.md",generatedAt:new Date(1658583556117),mtime:new Date(1658583556094),slug:O,title:P,position:"000200010002",to:"\u002Fguide\u002Fconcepts\u002Fvuejs-development",draft:A,page:B,language:"en",empty:A,description:Q,excerpt:R,body:{raw:"# Vue.js Development\n\nNuxt uses Vue as a frontend framework and adds features such as component auto-imports and file-based routing. Nuxt 3 integrates Vue 3, the new major release of Vue that enables new patterns for Nuxt users.\n\n## Vue.js\n\n\u003E While an in-depth knowledge of Vue is not required to use Nuxt, we recommend that you read the documentation and go through some of the examples on [vuejs.org](https:\u002F\u002Fvuejs.org\u002F).\n\u003E\n\nNuxt has always used Vue as a frontend framework. We chose to build Nuxt on top of Vue for these reasons:\n\n- The reactivity model of Vue, where a change in data automatically triggers a change in the interface.\n- The component-based templating, while keeping HTML as the common language of the web, enables intuitive patterns to keep your interface consistent, yet powerful.\n- From small projects to large web applications, Vue keeps performing well at scale to ensure that your application keeps delivering value to your users.\n\n## Vue with Nuxt\n\n### Single file components\n\n[Vue’s single-file components](https:\u002F\u002Fv3.vuejs.org\u002Fguide\u002Fsingle-file-component.html) (SFC, or `*.vue` files) encapsulate the markup (`\u003Ctemplate\u003E`), logic (`\u003Cscript\u003E`) and styling (`\u003Cstyle\u003E`) of a Vue component. Nuxt provides a zero-config experience for SFCs with [Hot Module Replacement](https:\u002F\u002Fwebpack.js.org\u002Fconcepts\u002Fhot-module-replacement\u002F) that offers a seamless developer experience.\n\n### Components auto-imports\n\nEvery Vue component created in the [`components\u002F` directory](\u002Fguide\u002Fdirectory-structure\u002Fcomponents) of a Nuxt project will be available in your project without having to import it. If a component is not used anywhere, your production’s code will not include it.\n\n### Vue Router\n\nMost applications need multiple pages and a way to navigate between them. This is called **routing**. Nuxt uses a [`pages\u002F` directory](\u002Fguide\u002Fdirectory-structure\u002Fpages) and naming conventions to directly create routes mapped to your files using the official [Vue Router library](https:\u002F\u002Frouter.vuejs.org\u002F).\n\n### Example\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fedit\u002Fgithub-9hzuns?file=app.vue\" blank}\n:button-link[Open on CodeSandbox]{href=\"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fnuxt-3-components-auto-import-2xq9z?file=\u002Fapp.vue\" blank}\n\nThe `app.vue` file is the entry point, which represents the page displayed in the browser window.\n\nInside the `\u003Ctemplate\u003E` of the component, we use the `\u003CWelcome\u003E` component created in the `components\u002F`  directory without having to import it.\n\nTry to replace the `\u003Ctemplate\u003E`’s content with a custom welcome message. The browser window on the right will automatically render the changes without reloading.\n\n::alert{type=\"info\"}\n💡 If you're familiar with Vue, you might be looking for the `main.js` file that creates a Vue app instance. Nuxt automatically handles this behind the scenes.\n::\n\n**If you were a previous user of Nuxt 2 or Vue 2, keep reading to get a feel of the differences between Vue 2 and Vue 3, and how Nuxt integrates those evolutions.**\n\n**Otherwise, go to the next chapter to discover another key feature of Nuxt: [Rendering modes](\u002Fguide\u002Fconcepts\u002Frendering)**.\n\n## Differences with Nuxt 2 \u002F Vue 2\n\nNuxt 3 is based on Vue 3. The new major Vue version introduces several changes that Nuxt takes advantage of:\n\n- Better performance\n- Composition API\n- TypeScript support\n\n### Faster rendering\n\nThe Vue Virtual DOM (VDOM) has been rewritten from the ground up and allows for better rendering performance. On top of that, when working with compiled Single-File Components, the Vue compiler can further optimize them at build time by separating static and dynamic markup.\n\nThis results in faster first rendering (component creation) and updates, and less memory usage. In Nuxt 3, it enables faster server-side rendering as well.\n\n### Smaller bundle\n\nWith Vue 3 and Nuxt 3, a focus has been put on bundle size reduction. With version 3, most of Vue’s functionality, including template directives and built-in components, is tree-shakable. Your production bundle will not include them if you don’t use them.\n\nThis way, a minimal Vue 3 application can be reduced to 12 kb gzipped.\n\n### Composition API\n\nThe only way to provide data and logic to components in Vue 2 was through the Options API, which allows you to return data and methods to a template with pre-defined properties like `data` and `methods`:\n\n```vue\n\u003Cscript\u003E\nexport default {\n  data() {\n    return {\n      count: 0\n    }\n  },\n  methods: {\n    increment(){\n      this.count++\n    }\n  }\n}\n\u003C\u002Fscript\u003E\n```\n\nThe [Composition API](https:\u002F\u002Fvuejs.org\u002Fguide\u002Fextras\u002Fcomposition-api-faq.html) introduced in Vue 3 is not a replacement of the Options API, but it enables better logic reuse throughout an application, and is a more natural way to group code by concern in complex components.\n\nUsed with the `setup` keyword in the `\u003Cscript\u003E` definition, here is the above component rewritten with Composition API and Nuxt 3’s auto-imported Reactivity APIs:\n\n```vue\n\u003Cscript setup\u003E\n  const count = ref(0);\n  const increment = () =\u003E count.value++;\n\u003C\u002Fscript\u003E\n```\n\nThe goal of Nuxt 3 is to provide a great developer experience around the Composition API.\n\n- Use auto-imported [Reactivity functions](https:\u002F\u002Fvuejs.org\u002Fapi\u002Freactivity-core.html) from Vue and Nuxt 3 [built-in composables](\u002Fapi\u002Fcomposables\u002Fuse-async-data).\n- Write your own auto-imported reusable functions in the `composables\u002F` directory.\n\n### TypeScript support\n\nBoth Vue 3 and Nuxt 3 are written in TypeScript. A fully typed codebase prevents mistakes and documents APIs usage. This doesn’t mean that you have to write your application in TypeScript to take advantage of it. With Nuxt 3, you can opt-in by renaming your file from `.js` to `.ts` , or add `\u003Cscript lang=\"ts\"\u003E` in a component.\n\n::alert{type=\"info\"}\n🔎 [Read the details about Typescript in Nuxt 3](\u002Fguide\u002Fconcepts\u002Ftypescript)\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:O},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:Q}]},{type:a,value:c},{type:b,tag:I,props:{id:S},children:[{type:b,tag:h,props:{href:"#vuejs"},children:[{type:a,value:T}]}]},{type:a,value:c},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"While an in-depth knowledge of Vue is not required to use Nuxt, we recommend that you read the documentation and go through some of the examples on "},{type:b,tag:h,props:{href:"https:\u002F\u002Fvuejs.org\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"vuejs.org"}]},{type:a,value:t}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt has always used Vue as a frontend framework. We chose to build Nuxt on top of Vue for these reasons:"}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:"The reactivity model of Vue, where a change in data automatically triggers a change in the interface."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:"The component-based templating, while keeping HTML as the common language of the web, enables intuitive patterns to keep your interface consistent, yet powerful."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:"From small projects to large web applications, Vue keeps performing well at scale to ensure that your application keeps delivering value to your users."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:I,props:{id:U},children:[{type:b,tag:h,props:{href:"#vue-with-nuxt"},children:[{type:a,value:V}]}]},{type:a,value:c},{type:b,tag:l,props:{id:W},children:[{type:b,tag:h,props:{href:"#single-file-components"},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fv3.vuejs.org\u002Fguide\u002Fsingle-file-component.html",rel:[p,q,r],target:s},children:[{type:a,value:"Vue’s single-file components"}]},{type:a,value:" (SFC, or "},{type:b,tag:i,props:{},children:[{type:a,value:"*.vue"}]},{type:a,value:" files) encapsulate the markup ("},{type:b,tag:i,props:{},children:[{type:a,value:K}]},{type:a,value:"), logic ("},{type:b,tag:i,props:{},children:[{type:a,value:Y}]},{type:a,value:") and styling ("},{type:b,tag:i,props:{},children:[{type:a,value:"\u003Cstyle\u003E"}]},{type:a,value:") of a Vue component. Nuxt provides a zero-config experience for SFCs with "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwebpack.js.org\u002Fconcepts\u002Fhot-module-replacement\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Hot Module Replacement"}]},{type:a,value:" that offers a seamless developer experience."}]},{type:a,value:c},{type:b,tag:l,props:{id:Z},children:[{type:b,tag:h,props:{href:"#components-auto-imports"},children:[{type:a,value:_}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Every Vue component created in the "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fcomponents"},children:[{type:b,tag:i,props:{},children:[{type:a,value:$}]},{type:a,value:aa}]},{type:a,value:" of a Nuxt project will be available in your project without having to import it. If a component is not used anywhere, your production’s code will not include it."}]},{type:a,value:c},{type:b,tag:l,props:{id:ab},children:[{type:b,tag:h,props:{href:"#vue-router"},children:[{type:a,value:ac}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Most applications need multiple pages and a way to navigate between them. This is called "},{type:b,tag:L,props:{},children:[{type:a,value:"routing"}]},{type:a,value:". Nuxt uses a "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fpages"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"pages\u002F"}]},{type:a,value:aa}]},{type:a,value:" and naming conventions to directly create routes mapped to your files using the official "},{type:b,tag:h,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[p,q,r],target:s},children:[{type:a,value:"Vue Router library"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:l,props:{id:ad},children:[{type:b,tag:h,props:{href:"#example"},children:[{type:a,value:ae}]}]},{type:a,value:c},{type:b,tag:af,props:{":blank":ag,href:"https:\u002F\u002Fstackblitz.com\u002Fedit\u002Fgithub-9hzuns?file=app.vue"},children:[{type:a,value:"Open on StackBlitz"}]},{type:a,value:c},{type:b,tag:af,props:{":blank":ag,href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fnuxt-3-components-auto-import-2xq9z?file=\u002Fapp.vue"},children:[{type:a,value:"Open on CodeSandbox"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah},{type:b,tag:i,props:{},children:[{type:a,value:"app.vue"}]},{type:a,value:" file is the entry point, which represents the page displayed in the browser window."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Inside the "},{type:b,tag:i,props:{},children:[{type:a,value:K}]},{type:a,value:" of the component, we use the "},{type:b,tag:i,props:{},children:[{type:a,value:"\u003CWelcome\u003E"}]},{type:a,value:" component created in the "},{type:b,tag:i,props:{},children:[{type:a,value:$}]},{type:a,value:"  directory without having to import it."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Try to replace the "},{type:b,tag:i,props:{},children:[{type:a,value:K}]},{type:a,value:"’s content with a custom welcome message. The browser window on the right will automatically render the changes without reloading."}]},{type:a,value:c},{type:b,tag:ai,props:{type:aj},children:[{type:b,tag:g,props:{},children:[{type:a,value:"💡 If you're familiar with Vue, you might be looking for the "},{type:b,tag:i,props:{},children:[{type:a,value:"main.js"}]},{type:a,value:" file that creates a Vue app instance. Nuxt automatically handles this behind the scenes."}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:L,props:{},children:[{type:a,value:"If you were a previous user of Nuxt 2 or Vue 2, keep reading to get a feel of the differences between Vue 2 and Vue 3, and how Nuxt integrates those evolutions."}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:L,props:{},children:[{type:a,value:"Otherwise, go to the next chapter to discover another key feature of Nuxt: "},{type:b,tag:h,props:{href:ak},children:[{type:a,value:"Rendering modes"}]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:I,props:{id:al},children:[{type:b,tag:h,props:{href:"#differences-with-nuxt-2--vue-2"},children:[{type:a,value:am}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt 3 is based on Vue 3. The new major Vue version introduces several changes that Nuxt takes advantage of:"}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:"Better performance"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:C},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:M},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{id:an},children:[{type:b,tag:h,props:{href:"#faster-rendering"},children:[{type:a,value:ao}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The Vue Virtual DOM (VDOM) has been rewritten from the ground up and allows for better rendering performance. On top of that, when working with compiled Single-File Components, the Vue compiler can further optimize them at build time by separating static and dynamic markup."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This results in faster first rendering (component creation) and updates, and less memory usage. In Nuxt 3, it enables faster server-side rendering as well."}]},{type:a,value:c},{type:b,tag:l,props:{id:ap},children:[{type:b,tag:h,props:{href:"#smaller-bundle"},children:[{type:a,value:aq}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"With Vue 3 and Nuxt 3, a focus has been put on bundle size reduction. With version 3, most of Vue’s functionality, including template directives and built-in components, is tree-shakable. Your production bundle will not include them if you don’t use them."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This way, a minimal Vue 3 application can be reduced to 12 kb gzipped."}]},{type:a,value:c},{type:b,tag:l,props:{id:ar},children:[{type:b,tag:h,props:{href:"#composition-api"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The only way to provide data and logic to components in Vue 2 was through the Options API, which allows you to return data and methods to a template with pre-defined properties like "},{type:b,tag:i,props:{},children:[{type:a,value:as}]},{type:a,value:" and "},{type:b,tag:i,props:{},children:[{type:a,value:"methods"}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:at,props:{},children:[{type:b,tag:au,props:{className:[av,aw]},children:[{type:b,tag:ax,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ay}]},{type:a,value:u}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:D}]}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,az]},children:[{type:a,value:c},{type:b,tag:d,props:{className:[e,v,aA]},children:[{type:a,value:"export"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,v,aA]},children:[{type:a,value:"default"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:as}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:w}]},{type:a,value:H},{type:b,tag:d,props:{className:[e,v,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:w}]},{type:a,value:"\n      count"},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:N}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,aB]},children:[{type:a,value:aC}]},{type:a,value:H},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:","}]},{type:a,value:"\n  methods"},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:N}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:w}]},{type:a,value:H},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:aD}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:w}]},{type:a,value:"\n      "},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:"this"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:t}]},{type:b,tag:d,props:{className:[e,aE]},children:[{type:a,value:"count"}]},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:aF}]},{type:a,value:H},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:a,value:c}]}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:aG}]},{type:a,value:u}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:D}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah},{type:b,tag:h,props:{href:"https:\u002F\u002Fvuejs.org\u002Fguide\u002Fextras\u002Fcomposition-api-faq.html",rel:[p,q,r],target:s},children:[{type:a,value:C}]},{type:a,value:" introduced in Vue 3 is not a replacement of the Options API, but it enables better logic reuse throughout an application, and is a more natural way to group code by concern in complex components."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Used with the "},{type:b,tag:i,props:{},children:[{type:a,value:aH}]},{type:a,value:" keyword in the "},{type:b,tag:i,props:{},children:[{type:a,value:Y}]},{type:a,value:" definition, here is the above component rewritten with Composition API and Nuxt 3’s auto-imported Reactivity APIs:"}]},{type:a,value:c},{type:b,tag:at,props:{},children:[{type:b,tag:au,props:{className:[av,aw]},children:[{type:b,tag:ax,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:ay}]},{type:a,value:u}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,"attr-name"]},children:[{type:a,value:aH}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:D}]}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,az]},children:[{type:a,value:x},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:aI}]},{type:a,value:" count "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:aJ}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:"ref"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,aB]},children:[{type:a,value:aC}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:aK}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:aI}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,"function-variable",E]},children:[{type:a,value:aD}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:aJ}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:G}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,"arrow",o]},children:[{type:a,value:"=\u003E"}]},{type:a,value:" count"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:t}]},{type:b,tag:d,props:{className:[e,aE]},children:[{type:a,value:"value"}]},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:aF}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:aK}]},{type:a,value:c}]}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:aG}]},{type:a,value:u}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:D}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The goal of Nuxt 3 is to provide a great developer experience around the Composition API."}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:"Use auto-imported "},{type:b,tag:h,props:{href:"https:\u002F\u002Fvuejs.org\u002Fapi\u002Freactivity-core.html",rel:[p,q,r],target:s},children:[{type:a,value:"Reactivity functions"}]},{type:a,value:" from Vue and Nuxt 3 "},{type:b,tag:h,props:{href:aL},children:[{type:a,value:"built-in composables"}]},{type:a,value:t},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:a,value:"Write your own auto-imported reusable functions in the "},{type:b,tag:i,props:{},children:[{type:a,value:"composables\u002F"}]},{type:a,value:" directory."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{id:aM},children:[{type:b,tag:h,props:{href:"#typescript-support"},children:[{type:a,value:M}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Both Vue 3 and Nuxt 3 are written in TypeScript. A fully typed codebase prevents mistakes and documents APIs usage. This doesn’t mean that you have to write your application in TypeScript to take advantage of it. With Nuxt 3, you can opt-in by renaming your file from "},{type:b,tag:i,props:{},children:[{type:a,value:".js"}]},{type:a,value:" to "},{type:b,tag:i,props:{},children:[{type:a,value:".ts"}]},{type:a,value:" , or add "},{type:b,tag:i,props:{},children:[{type:a,value:"\u003Cscript lang=\"ts\"\u003E"}]},{type:a,value:" in a component."}]},{type:a,value:c},{type:b,tag:ai,props:{type:aj},children:[{type:b,tag:g,props:{},children:[{type:a,value:"🔎 "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fconcepts\u002Ftypescript"},children:[{type:a,value:"Read the details about Typescript in Nuxt 3"}]}]}]}]},toc:{title:aN,searchDepth:z,depth:z,links:[{id:S,depth:z,text:T},{id:U,depth:z,text:V,children:[{id:W,depth:n,text:X},{id:Z,depth:n,text:_},{id:ab,depth:n,text:ac},{id:ad,depth:n,text:ae}]},{id:al,depth:z,text:am,children:[{id:an,depth:n,text:ao},{id:ap,depth:n,text:aq},{id:ar,depth:n,text:C},{id:aM,depth:n,text:M}]}]}},template:"Docs"},templateOptions:{header:B,footer:B,aside:B,asideClass:aN,fluid:A,banner:A},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:aO},{title:"API",to:aL},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"introduction",to:aO,title:"What is Nuxt?"},next:{slug:"rendering",to:ak,title:"Rendering Modes"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote"])},mutations:R}}("text","element","\n","span","token","punctuation","prose-paragraph","prose-a","prose-code-inline"," ","prose-li","prose-h3","tag",3,"operator","nofollow","noopener","noreferrer","_blank",".","script","keyword","{","\n  ","}",2,false,true,"Composition API","\u003E","function","(",")","\n    ","prose-h2","prose-ul","\u003Ctemplate\u003E","prose-strong","TypeScript support",":","vuejs-development","Vue.js Development","Nuxt uses Vue as a frontend framework and adds features such as component auto-imports and file-based routing. Nuxt 3 integrates Vue 3, the new major release of Vue that enables new patterns for Nuxt users.",void 0,"vuejs","Vue.js","vue-with-nuxt","Vue with Nuxt","single-file-components","Single file components","\u003Cscript\u003E","components-auto-imports","Components auto-imports","components\u002F"," directory","vue-router","Vue Router","example","Example","button-link","true","The ","alert","info","\u002Fguide\u002Fconcepts\u002Frendering","differences-with-nuxt-2--vue-2","Differences with Nuxt 2 \u002F Vue 2","faster-rendering","Faster rendering","smaller-bundle","Smaller bundle","composition-api","data","prose-code","pre","language-html","line-numbers","code","\u003C","language-javascript","module","number","0","increment","property-access","++","\u003C\u002F","setup","const","=",";","\u002Fapi\u002Fcomposables\u002Fuse-async-data","typescript-support","","\u002Fguide\u002Fconcepts\u002Fintroduction")));