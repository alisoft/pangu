(window.webpackJsonp=window.webpackJsonp||[]).push([[40,98,101],{286:function(t,e,n){"use strict";n.r(e);n(26),n(191),n(19),n(9);var r={h1:["h1","prose-h1"],h2:["h2","prose-h2"],h3:["h3","prose-h3"],h4:["h4","prose-h4"],h5:["h5","prose-h5"],h6:["h6","prose-h6"],hr:["hr","prose-hr"],p:["p","prose-paragraph"],ul:["ul","prose-ul"],ol:["ol","prose-ol"],blockquote:["blockquote","prose-blockquote"],img:["img","prose-img"],a:["a","prose-a"],code:["code","prose-code-inline"]},o=function(t){return t.flatMap((function(t){return r[t]}))},l=o(["p","h1","h2","h3","h4","h5","h6","li"]);function c(t,e){var n,r;return(null==t?void 0:t.tag)===e||(null==t||null===(n=t.componentOptions)||void 0===n?void 0:n.tag)===e||(null==t||null===(r=t.asyncMeta)||void 0===r?void 0:r.tag)===e}function d(t){var e,n;return t.children||(null==t||null===(e=t.componentOptions)||void 0===e?void 0:e.children)||(null==t||null===(n=t.asyncMeta)||void 0===n?void 0:n.children)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];if(Array.isArray(t))return t.flatMap((function(t){return f(t,e)}));e=o(e);var n=t;return e.some((function(e){return c(t,e)}))&&(n=d(t)||t,l.some((function(e){return c(t,e)}))&&(n=[n])),n}var h={name:"Markdown",functional:!0,props:{use:{type:[String,Object,Function,Array],default:"default"},unwrap:{type:String,default:""}},render:function(t,e){var n,r,slot=e.props.use||"default",o="string"==typeof slot?e.parent.$scopedSlots[slot]||e.parent.$slots[slot]||(null===(n=e.parent.$parent)||void 0===n?void 0:n.$scopedSlots[slot])||(null===(r=e.parent.$parent)||void 0===r?void 0:r.$slots[slot]):slot;if("function"==typeof o&&(o=o()),"string"==typeof o)return[o];if(o&&e.props.unwrap){var l=e.props.unwrap.split(/[,\s]/),d=Array.isArray(o)&&o[0];o=e.scopedSlots.between&&d&&!d.text&&!["span","strong","em","a","code"].some((function(t){return c(d,t)}))?o.flatMap((function(t,i){return 0===i?f(t,l):[e.scopedSlots.between(),f(t,l)]})):function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];return(Array.isArray(t)?t:[t]).flatMap((function(t){return f(t,e)})).flatMap((function(t){return f(t,e)})).filter((function(t){return!t.text||!!t.text.trim()}))}(o,l)}return o}},v=h,x=n(4),component=Object(x.a)(v,undefined,undefined,!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n.r(e);var r=n(3),o=Object(r.b)({props:{tag:{type:String,default:"div"}}}),l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"Component",staticClass:"relative w-full d-container-content"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},503:function(t,e,n){"use strict";n.r(e);var r=n(3),o=Object(r.b)({props:{category:{type:String,default:"Category"}}}),l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("section",{staticClass:"py-24 md:py-40 text-white light:text-secondary-black"},[n("NuxtContainer",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"flex flex-col w-full items-center col-span-12"},[n("div",{staticClass:"mb-2"},[n("span",{staticClass:"text-cloud-dark dark:text-cloud-light font-bold text-lg"},[t._v(t._s(t.category))])]),t._v(" "),n("h2",{staticClass:"font-normal text-center font-serif text-display-6 md:text-display-5 2xl:text-display-4 mb-2"},[n("Markdown",{attrs:{use:"title",unwrap:"p"}})],1),t._v(" "),n("p",{staticClass:"font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-12"},[n("Markdown",{attrs:{use:"description",unwrap:"p"}})],1),t._v(" "),n("div",{staticClass:"grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},[t._t("default")],2),t._v(" "),n("Markdown",{attrs:{use:"bottom"}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Markdown:n(286).default,NuxtContainer:n(395).default})}}]);