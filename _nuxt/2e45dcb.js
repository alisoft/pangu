(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,98],{286:function(t,r,o){"use strict";o.r(r);o(26),o(191),o(19),o(9);var e={h1:["h1","prose-h1"],h2:["h2","prose-h2"],h3:["h3","prose-h3"],h4:["h4","prose-h4"],h5:["h5","prose-h5"],h6:["h6","prose-h6"],hr:["hr","prose-hr"],p:["p","prose-paragraph"],ul:["ul","prose-ul"],ol:["ol","prose-ol"],blockquote:["blockquote","prose-blockquote"],img:["img","prose-img"],a:["a","prose-a"],code:["code","prose-code-inline"]},n=function(t){return t.flatMap((function(t){return e[t]}))},c=n(["p","h1","h2","h3","h4","h5","h6","li"]);function d(t,r){var o,e;return(null==t?void 0:t.tag)===r||(null==t||null===(o=t.componentOptions)||void 0===o?void 0:o.tag)===r||(null==t||null===(e=t.asyncMeta)||void 0===e?void 0:e.tag)===r}function l(t){var r,o;return t.children||(null==t||null===(r=t.componentOptions)||void 0===r?void 0:r.children)||(null==t||null===(o=t.asyncMeta)||void 0===o?void 0:o.children)}function w(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];if(Array.isArray(t))return t.flatMap((function(t){return w(t,r)}));r=n(r);var o=t;return r.some((function(r){return d(t,r)}))&&(o=l(t)||t,c.some((function(r){return d(t,r)}))&&(o=[o])),o}var v={name:"Markdown",functional:!0,props:{use:{type:[String,Object,Function,Array],default:"default"},unwrap:{type:String,default:""}},render:function(t,r){var o,e,slot=r.props.use||"default",n="string"==typeof slot?r.parent.$scopedSlots[slot]||r.parent.$slots[slot]||(null===(o=r.parent.$parent)||void 0===o?void 0:o.$scopedSlots[slot])||(null===(e=r.parent.$parent)||void 0===e?void 0:e.$slots[slot]):slot;if("function"==typeof n&&(n=n()),"string"==typeof n)return[n];if(n&&r.props.unwrap){var c=r.props.unwrap.split(/[,\s]/),l=Array.isArray(n)&&n[0];n=r.scopedSlots.between&&l&&!l.text&&!["span","strong","em","a","code"].some((function(t){return d(l,t)}))?n.flatMap((function(t,i){return 0===i?w(t,c):[r.scopedSlots.between(),w(t,c)]})):function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];return(Array.isArray(t)?t:[t]).flatMap((function(t){return w(t,r)})).flatMap((function(t){return w(t,r)})).filter((function(t){return!t.text||!!t.text.trim()}))}(n,c)}return n}},f=v,y=o(4),component=Object(y.a)(f,undefined,undefined,!1,null,null,null);r.default=component.exports},289:function(t,r,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("77deb3d4",content,!0,{sourceMap:!1})},292:function(t,r,o){"use strict";o(289)},293:function(t,r,o){var e=o(57)((function(i){return i[1]}));e.push([t.i,".alert.success[data-v-ca643460]{background-color:rgba(208,252,222,var(--tw-bg-opacity));color:rgba(0,187,106,var(--tw-text-opacity))}.alert.success[data-v-ca643460],.dark .alert.success[data-v-ca643460]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.success[data-v-ca643460]{background-color:rgba(4,115,66,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(140,250,183,var(--tw-text-opacity))}.alert.success[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(176,252,203,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.success[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(19,77,46,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.success[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(55,233,144,var(--tw-border-opacity))}.dark .alert.success[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(0,153,86,var(--tw-border-opacity))}.alert.info[data-v-ca643460]{background-color:rgba(240,249,255,var(--tw-bg-opacity));color:rgba(2,132,199,var(--tw-text-opacity))}.alert.info[data-v-ca643460],.dark .alert.info[data-v-ca643460]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.info[data-v-ca643460]{background-color:rgba(7,89,133,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(186,230,253,var(--tw-text-opacity))}.alert.info[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(224,242,254,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.info[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(12,74,110,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.info[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(56,189,248,var(--tw-border-opacity))}.dark .alert.info[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(3,105,161,var(--tw-border-opacity))}.alert.warning[data-v-ca643460]{background-color:rgba(255,251,235,var(--tw-bg-opacity));color:rgba(217,119,6,var(--tw-text-opacity))}.alert.warning[data-v-ca643460],.dark .alert.warning[data-v-ca643460]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.warning[data-v-ca643460]{background-color:rgba(146,64,14,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(254,243,199,var(--tw-text-opacity))}.alert.warning[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(254,243,199,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.warning[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(120,53,15,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.warning[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(251,191,36,var(--tw-border-opacity))}.dark .alert.warning[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(180,83,9,var(--tw-border-opacity))}.alert.danger[data-v-ca643460]{background-color:rgba(254,242,242,var(--tw-bg-opacity));color:rgba(220,38,38,var(--tw-text-opacity))}.alert.danger[data-v-ca643460],.dark .alert.danger[data-v-ca643460]{--tw-bg-opacity:1;--tw-text-opacity:1}.dark .alert.danger[data-v-ca643460]{background-color:rgba(153,27,27,var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:rgba(254,226,226,var(--tw-text-opacity))}.alert.danger[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(254,226,226,var(--tw-bg-opacity));--tw-shadow-color:0,0,0;--tw-shadow:none;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:currentColor}.dark .alert.danger[data-v-ca643460] code{--tw-bg-opacity:1;background-color:rgba(127,29,29,var(--tw-bg-opacity));--tw-bg-opacity:0.5}.alert.danger[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(248,113,113,var(--tw-border-opacity))}.dark .alert.danger[data-v-ca643460] a:hover code{--tw-border-opacity:1;border-color:rgba(185,28,28,var(--tw-border-opacity))}.alert[data-v-ca643460] a,.alert[data-v-ca643460] strong{font-weight:600;color:currentColor}.alert[data-v-ca643460] a{border-style:none;-webkit-text-decoration-line:underline;text-decoration-line:underline}.alert[data-v-ca643460] a code{border:1px dashed transparent}.alert[data-v-ca643460] p{margin:0!important}.dark .alert[data-v-ca643460] a{color:currentColor}",""]),e.locals={},t.exports=e},296:function(t,r,o){"use strict";o.r(r);o(30);var e=o(3),n=Object(e.b)({props:{icon:{type:String,default:""},type:{type:String,default:"info",validator:function(t){return["info","success","warning","danger"].includes(t)}}}}),c=(o(292),o(4)),component=Object(c.a)(n,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"p-4 mt-4 mb-4 rounded-lg alert text-sm leading-relaxed",class:[t.type]},[o("div",{staticClass:"flex items-start"},[t.icon?o("InjectComponent",{staticClass:"inline-flex mr-2 w-5 h-5 justify-center items-center text-1.2rem",attrs:{component:t.icon}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),o("div",{staticClass:"flex-grow alert-content"},[o("Markdown",{attrs:{unwrap:"p"},scopedSlots:t._u([{key:"between",fn:function(){return[o("br")]},proxy:!0}])})],1)],1)])}),[],!1,null,"ca643460",null);r.default=component.exports;installComponents(component,{InjectComponent:o(193).default,Markdown:o(286).default})},352:function(t,r,o){"use strict";o.r(r);var e=o(353),n=o.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){o.d(r,t,(function(){return e[t]}))}(c);r.default=n.a},353:function(t,r){},464:function(t,r,o){"use strict";o.d(r,"a",(function(){return e})),o.d(r,"b",(function(){return n}));var e=function(){var t=this,r=t.$createElement;return(t._self._c||r)("Alert",{attrs:{icon:"🤖"}},[t._v("\n  This section is auto-generated from the source code.\n")])},n=[]},468:function(t,r,o){"use strict";o.r(r);var e=o(464),n=o(352);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(r,t,(function(){return n[t]}))}(c);var d=o(4),component=Object(d.a)(n.default,e.a,e.b,!1,null,null,null);r.default=component.exports,installComponents(component,{Alert:o(296).default})}}]);