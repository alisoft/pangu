import{i as D,r as c,g as _,h as w,j as g,k as b,l as C,m as P}from"./entry-b1521372.mjs";const x=e=>D(e)?e:c(e),z=()=>null;function O(e,i,a={}){var d,h,y,m,v;if(typeof e!="string")throw new TypeError("asyncData key must be a string");if(typeof i!="function")throw new TypeError("asyncData handler must be a function");a={server:!0,default:z,...a},a.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),a.lazy=(h=(d=a.lazy)!=null?d:a.defer)!=null?h:!1,a.initialCache=(y=a.initialCache)!=null?y:!0;const r=_(),f=C();if(f&&!f._nuxtOnBeforeMountCbs){const s=f._nuxtOnBeforeMountCbs=[];f&&(w(()=>{s.forEach(t=>{t()}),s.splice(0,s.length)}),g(()=>s.splice(0,s.length)))}const l=()=>a.initialCache&&r.payload.data[e]!==void 0,n={data:x((m=r.payload.data[e])!=null?m:a.default()),pending:c(!l()),error:c((v=r.payload._errors[e])!=null?v:null)};n.refresh=(s={})=>r._asyncDataPromises[e]?r._asyncDataPromises[e]:s._initial&&l()?r.payload.data[e]:(n.pending.value=!0,r._asyncDataPromises[e]=Promise.resolve(i(r)).then(t=>{a.transform&&(t=a.transform(t)),a.pick&&(t=R(t,a.pick)),n.data.value=t,n.error.value=null}).catch(t=>{n.error.value=t,n.data.value=P(a.default())}).finally(()=>{n.pending.value=!1,r.payload.data[e]=n.data.value,n.error.value&&(r.payload._errors[e]=!0),delete r._asyncDataPromises[e]}),r._asyncDataPromises[e]);const u=()=>n.refresh({_initial:!0}),p=a.server!==!1&&r.payload.serverRendered;{p&&r.isHydrating&&e in r.payload.data?n.pending.value=!1:f&&r.payload.serverRendered&&(r.isHydrating||a.lazy)?f._nuxtOnBeforeMountCbs.push(u):u(),a.watch&&b(a.watch,()=>n.refresh());const s=r.hook("app:data:refresh",t=>{if(!t||t.includes(e))return n.refresh()});f&&g(s)}const o=Promise.resolve(r._asyncDataPromises[e]).then(()=>n);return Object.assign(o,n),o}function B(e,i,a={}){return O(e,i,{...a,lazy:!0})}function R(e,i){const a={};for(const r of i)a[r]=e[r];return a}export{B as u};
