(window.webpackJsonp=window.webpackJsonp||[]).push([[35,192],{511:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("359c0ec8",content,!0,{sourceMap:!1})},549:function(t,e,n){"use strict";(function(t){function n(){let t=null,e=!1;const n=e=>{if(t&&t!==e)throw new Error("Context conflict")};return{use:()=>t,set:(o,r)=>{r||n(o),t=o,e=!0},unset:()=>{t=null,e=!1},call:(o,r)=>{n(o),t=o;try{return r()}finally{e||(t=null)}},async callAsync(n,o){t=n;const r=()=>{t=n},l=()=>t===n?r:void 0;f.add(l);try{const n=o();return e||(t=null),await n}finally{f.delete(l)}}}}function o(){const t={};return{get:e=>(t[e]||(t[e]=n()),t[e],t[e])}}Object.defineProperty(e,"__esModule",{value:!0});const r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==t?t:"undefined"!=typeof window?window:{},l=r.__unctx__||(r.__unctx__=o()),c=t=>l.get(t),d="__unctx_async_handlers__",f=r[d]||(r[d]=new Set);e.createContext=n,e.createNamespace=o,e.defaultNamespace=l,e.executeAsync=function(t){const e=[];for(const t of f){const n=t();n&&e.push(n)}return[t(),()=>{for(const t of e)t()}]},e.getContext=c,e.useContext=t=>c(t).use,e.withAsyncContext=function(t,e){return e||console.warn("[unctx] `withAsyncContext` needs transformation for async context support in",t,"\n",t.toString()),t}}).call(this,n(36))},550:function(t,e,n){"use strict";n(511)},551:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,".highlight-underline[data-v-ae77f522]{transition:left .15s,top .15s,width .15s,height .15s}",""]),o.locals={},t.exports=o},565:function(t,e,n){"use strict";n.r(e);n(60);var o=n(0),r=Object(o.defineComponent)({props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},mounted:function(){this.updateHighlightUnderlinePosition()},methods:{updateTabs:function(i){var t=this;this.$emit("update",i),this.$nextTick((function(){return t.updateHighlightUnderlinePosition()}))},updateHighlightUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.top="".concat(t.offsetTop,"px"),e.style.width="".concat(t.clientWidth,"px"),e.style.height="".concat(t.clientHeight,"px")}}}}),l=(n(550),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative text-white rounded-t-lg d-code-group-header-bg"},[n("div",{staticClass:"relative z-0 px-2"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:""+i+label,ref:"tabs",refInFor:!0,staticClass:"\n        relative\n        px-3\n        py-1.5\n        xs:py-3\n        my-1.5\n        xs:my-0\n        text-sm\n        font-mono font-medium\n        tracking-tight\n        focus:outline-none\n      ",class:[t.activeTabIndex===i?"active text-gray-800 dark:text-white":"d-prose-code-filename-text"],on:{click:function(e){return t.updateTabs(i)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"absolute -z-1 highlight-underline h-full xs:py-1.5"},[n("span",{staticClass:"flex w-full h-full d-code-group-tab rounded-md"})])],2),t._v(" "),t._t("footer")],2)}),[],!1,null,"ae77f522",null);e.default=component.exports},601:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));n(43),n(44),n(136),n(22),n(8),n(47);var o=n(549),r={h1:["h1","prose-h1"],h2:["h2","prose-h2"],h3:["h3","prose-h3"],h4:["h4","prose-h4"],h5:["h5","prose-h5"],h6:["h6","prose-h6"],hr:["hr","prose-hr"],p:["p","prose-paragraph"],ul:["ul","prose-ul"],ol:["ol","prose-ol"],blockquote:["blockquote","prose-blockquote"],img:["img","prose-img"],a:["a","prose-a"],code:["code","prose-code-inline"]},l=function(t){return t.flatMap((function(t){return r[t]}))},c=l(["p","h1","h2","h3","h4","h5","h6","li"]);function d(t,e){var n,o;return(null==t?void 0:t.tag)===e||(null==(n=null==t?void 0:t.componentOptions)?void 0:n.tag)===e||(null==(o=null==t?void 0:t.asyncMeta)?void 0:o.tag)===e}function f(t){var e,n;return t.children||(null==(e=null==t?void 0:t.componentOptions)?void 0:e.children)||(null==(n=null==t?void 0:t.asyncMeta)?void 0:n.children)}function h(t){if(!t)return"";if(Array.isArray(t))return t.map(h).join("");if("text"===t.type)return t.value;if(t.text)return t.text;var e=f(t);return Array.isArray(e)?e.map(h).join(""):""}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];if(Array.isArray(t))return t.flatMap((function(t){return v(t,e)}));e=l(e);var n=t;return e.some((function(e){return d(t,e)}))&&(n=f(t)||t,c.some((function(e){return d(t,e)}))&&(n=[n])),n}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];return(Array.isArray(t)?t:[t]).flatMap((function(t){return v(t,e)})).flatMap((function(t){return v(t,e)})).filter((function(t){return!t.text||!!t.text.trim()}))}Object(o.createContext)()},634:function(t,e,n){var content=n(861);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("6d49ff99",content,!0,{sourceMap:!1})},860:function(t,e,n){"use strict";n(634)},861:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,".code-group[data-v-355ff316] pre{border-top-left-radius:0!important;border-top-right-radius:0!important}.code-group[data-v-355ff316]{margin-top:1rem;margin-bottom:1rem}.code-group[data-v-355ff316] >.code-block:not(.active),.code-group[data-v-355ff316] >.docus-highlight:not(.active){display:none}.code-group[data-v-355ff316]  .docus-highlight{margin-top:0}.code-group[data-v-355ff316]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}.first-tab[data-v-355ff316]  .code-block:nth-child(2),.first-tab[data-v-355ff316]  .docus-highlight:nth-child(2){display:block}",""]),o.locals={},t.exports=o},939:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(279),n(22),n(8),n(136),n(35),n(24),n(0)),l=n(601),c=Object(r.defineComponent)({data:function(){return{activeTabIndex:0,counter:0}},computed:{tabs:function(){return this.calculateTabs()}},watch:{activeTabIndex:function(t,e){var n=this.$el.querySelectorAll(".code-group > .code-block, .code-group > .prose .docus-highlight, .code-group > .docus-highlight");e<n.length&&n[e].classList.remove("active"),n[t].classList.add("active")}},updated:function(){var t=this,e=this.calculateTabs();JSON.stringify(e)!==JSON.stringify(this.tabs)&&this.$nextTick((function(){t.updateActiveTab(),t.$refs["tabs-header"].updateHighlightUnderlinePosition()}))},created:function(){this.updateActiveTab()},methods:{updateActiveTab:function(){var t=this.tabs.findIndex((function(t){return t.active}));this.activeTabIndex=t<0?0:t},calculateTabs:function(){return this.$slots.default.flatMap((function(slot){var t,e,n;return null!==(t=slot.data)&&void 0!==t&&null!==(e=t.attrs)&&void 0!==e&&null!==(n=e.class)&&void 0!==n&&n.includes("prose")?slot.children:slot})).filter((function(slot){var t,e,n;return(null===(t=slot.data)||void 0===t||null===(e=t.attrs)||void 0===e||null===(n=e.class)||void 0===n?void 0:n.includes("docus-highligh"))||Object(l.b)(slot,"code-block")||Object(l.b)(slot,"prose-code")})).map((function(slot){var t,e,n,r,l,c,d,f=(null===(t=slot.asyncMeta)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.attrs)||(null===(n=slot.componentOptions)||void 0===n?void 0:n.propsData)||{},h=slot.children||(null===(r=slot.componentOptions)||void 0===r?void 0:r.children)||(null===(l=slot.asyncMeta)||void 0===l?void 0:l.children)||[],v=Object(o.a)(h,1)[0];return{label:f.label||(null==v||null===(c=v.children)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.text)||"untitled",active:void 0!==f.active}}))}}}),d=(n(860),n(2)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group",class:[0==t.activeTabIndex&&"first-tab"]},[n("TabsHeader",{ref:"tabs-header",attrs:{"active-tab-index":t.activeTabIndex,tabs:t.tabs},on:{update:function(e){t.activeTabIndex=e}}}),t._v(" "),t._t("default")],2)}),[],!1,null,"355ff316",null);e.default=component.exports;installComponents(component,{TabsHeader:n(565).default})}}]);