(window.webpackJsonp=window.webpackJsonp||[]).push([[102,42],{323:function(t,e,n){"use strict";function r(t=""){return t.toUpperCase()===t}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));const l=["-","_","/","."];function o(t,e=l){const n=[];let o="",c=r(t[0]),d=e.includes(t[0]);for(const l of t.split("")){const t=e.includes(l);t?(n.push(o),o="",c=!1,d=!0):d||c||!r(l)?(o+=l,c=r(l),d=t):(n.push(o),o=l,c=!0,d=!1)}return o&&n.push(o),n}function c(t){return t?t[0].toUpperCase()+t.substr(1):""}},329:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"1em",height:"1em",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);n(26),n(19);var r=n(0),l=n(323),o=Object(r.b)({props:{prev:{type:Object,default:null},next:{type:Object,default:null}},methods:{directory:function(link){var t=link.split("/"),e=t.length>1?t[t.length-2]:"";return e.split("-").map(l.b).join(" ")}}}),c=n(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"flex mb-8 flex-col justify-between font-medium leading-7 xs:space-x-2 xs:flex-row"},[n("div",{staticClass:"flex justify-start items-center w-full xs:w-1/2"},[t.prev?n("NuxtLink",{staticClass:"\n        inline-flex\n        items-center\n        justify-start\n        w-full\n        px-4\n        py-2.5\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:w-auto\n        hover:d-text-primary\n      ",attrs:{to:t.$contentLocalePath(t.prev.to)}},[n("span",{staticClass:"relative flex flex-col items-end truncate"},[n("span",{staticClass:"mb-1 text-xs leading-tight d-secondary-text"},[t._v("\n          "+t._s(t.directory(t.prev.to))+"\n        ")]),t._v(" "),n("span",{staticClass:"flex items-center w-full leading-tight"},[n("IconArrowLeft",{staticClass:"flex-shrink-0 w-4 h-4 mr-2"}),t._v(" "),n("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))])],1)])]):t._e()],1),t._v(" "),n("div",{staticClass:"flex justify-end order-first w-full xs:order-last xs:w-1/2"},[t.next?n("NuxtLink",{staticClass:"\n        inline-flex\n        items-center\n        justify-end\n        w-full\n        px-4\n        py-2.5\n        mb-2\n        truncate\n        border\n        d-border\n        hover:d-border-hover\n        rounded-xl\n        group\n        xs:mb-0 xs:w-auto\n        hover:d-text-primary\n      ",attrs:{to:t.$contentLocalePath(t.next.to)}},[n("span",{staticClass:"relative flex flex-col items-start truncate"},[n("span",{staticClass:"mb-1 text-xs leading-tight d-secondary-text"},[t._v(" "+t._s(t.directory(t.next.to))+" ")]),t._v(" "),n("span",{staticClass:"flex items-center w-full leading-tight"},[n("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]),t._v(" "),n("IconArrowRight",{staticClass:"flex-shrink-0 w-4 h-4 ml-2"})],1)])]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(205).default,IconArrowRight:n(329).default})}}]);