(window.webpackJsonp=window.webpackJsonp||[]).push([[24,27,154],{496:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));o(39);function n(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var o=t.replace(/\./g,"\\."),n=document.querySelector("#".concat(o)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var o=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),o}(e);window.scrollTo(0,n)}))}},497:function(t,e,o){var content=o(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("5ad8d911",content,!0,{sourceMap:!1})},517:function(t,e,o){"use strict";o(497)},518:function(t,e,o){var n=o(45)((function(i){return i[1]}));n.push([t.i,'code[data-v-0e782acc]{background-color:rgba(243,244,246,var(--tw-bg-opacity));border-radius:.375rem;font-weight:400;font-size:.875rem;line-height:1.25rem;padding:3px 6px}.dark code[data-v-0e782acc],code[data-v-0e782acc]{--tw-bg-opacity:1}.dark code[data-v-0e782acc]{background-color:rgba(1,42,53,var(--tw-bg-opacity))}a code[data-v-0e782acc]{border:1px dashed transparent;pointer-events:none}a code[data-v-0e782acc]:hover{--tw-border-opacity:1;border-color:rgba(0,220,130,var(--tw-border-opacity))}tbody code[data-v-0e782acc]{font-size:12px;line-height:1}h1 a:hover code[data-v-0e782acc],h2 a:hover code[data-v-0e782acc],h3 a:hover code[data-v-0e782acc],h4 a:hover code[data-v-0e782acc]{--tw-border-opacity:1;border-color:rgba(107,114,128,var(--tw-border-opacity))}.dark h1 a:hover code[data-v-0e782acc],.dark h2 a:hover code[data-v-0e782acc],.dark h3 a:hover code[data-v-0e782acc],.dark h4 a:hover code[data-v-0e782acc]{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}h1 a code[data-v-0e782acc],h2 a code[data-v-0e782acc],h3 a code[data-v-0e782acc],h4 a code[data-v-0e782acc]{font-size:inherit;position:relative}h1 a code[data-v-0e782acc]:before,h2 a code[data-v-0e782acc]:before,h3 a code[data-v-0e782acc]:before,h4 a code[data-v-0e782acc]:before{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity));border-radius:.375rem;pointer-events:none;position:absolute;top:-2px;left:-2px;z-index:-1;content:"";width:calc(100% + 4px);height:calc(100% + 4px)}.dark h1 a code[data-v-0e782acc]:before,.dark h2 a code[data-v-0e782acc]:before,.dark h3 a code[data-v-0e782acc]:before,.dark h4 a code[data-v-0e782acc]:before{--tw-bg-opacity:1;background-color:rgba(1,42,53,var(--tw-bg-opacity))}',""]),n.locals={},t.exports=n},539:function(t,e,o){"use strict";o.r(e);o(517);var n=o(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("code",[t._t("default")],2)}),[],!1,null,"0e782acc",null);e.default=component.exports},561:function(t,e,o){"use strict";o.r(e);o(12),o(9),o(8),o(17),o(18);var n=o(7),c=o(49),r=o(0);o(28),o(39),o(27);function l(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var o=t.replace(/\./g,"\\."),n=document.querySelector("#".concat(o)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var o=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),o}(e);window.scrollTo(0,n)}))}function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(r.defineComponent)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(t){var e=Object(r.reactive)({activeLink:"",exactActiveLink:"",showMobileToc:!1}),o=function(){var t=Object(r.ref)(),e=Object(r.ref)([]),o=Object(r.ref)([]),n=function(t){return t.forEach((function(t){var o=t.target.id;t.isIntersecting?e.value.push(o):e.value=e.value.filter((function(t){return t!==o}))}))};return Object(r.watch)(e,(function(t,e){0===t.length?o.value=e:o.value=t})),Object(r.onBeforeMount)((function(){return t.value=new IntersectionObserver(n)})),Object(r.onBeforeUnmount)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:o,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}(),n=o.activeHeadings,d=o.updateHeadings;Object(r.onMounted)((function(){return d([].concat(Object(c.a)(document.querySelectorAll(".docus-content h1")),Object(c.a)(document.querySelectorAll(".docus-content h2")),Object(c.a)(document.querySelectorAll(".docus-content h3"))))}));var f=Object(r.computed)((function(){var e=Object(c.a)(t.toc);return e.shift(),e}));return v(v({},Object(r.toRefs)(e)),{},{activeHeadings:n,scrollToHeading:l,filteredToc:f})}}),m=o(2),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.toc.length?o("div",{staticClass:"sticky z-10 px-4 text-sm border-dashed top-header d-border-header d-blur-header d-page-mobile-toc-bg"},[o("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[o("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),o("IconChevronRight",{staticClass:"w-4 h-4 d-tertiary-text transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),o("ul",{staticClass:"pb-4 overflow-x-hidden font-medium",class:[t.showMobileToc?"flex flex-col":"hidden"]},t._l(t.filteredToc,(function(link){return o("li",{key:link.id,on:{click:function(e){t.showMobileToc=!1}}},[o("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--blogpost-scroll-margin-block")}}},[t._v(t._s(link.text))])])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:o(272).default})},953:function(t,e,o){"use strict";o.r(e);var n=o(49),c=(o(39),o(28),o(0)),r=o(496),l=Object(c.defineComponent)({props:{page:{type:Object,required:!0}},setup:function(){Object(c.onMounted)((function(){if(window.location.hash){var t=window.location.hash.replace("#","");setTimeout((function(){Object(r.a)(t,"--blogpost-scroll-margin-block")}),300)}setTimeout((function(){[].concat(Object(n.a)(document.querySelectorAll(".docus-content h1")),Object(n.a)(document.querySelectorAll(".docus-content h2")),Object(n.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.href.split("#").pop();Object(r.a)(e,"--blogpost-scroll-margin-block")}))}))}),300)}));return{today:(new Date).toISOString().split("T")[0],formatDateByLocale:function(t,e){var o=t||"en";return new Date(e).toLocaleDateString(o,{year:"numeric",month:"long",day:"numeric"})}}},computed:{imgUrl:function(){return this.page.imgUrl||"https://source.unsplash.com/random"}},templateOptions:{aside:!1,fluid:!0}}),d=o(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"py-16 sm:py-24 relative"},[o("div",{staticClass:"relative max-w-2xl mx-auto"},[o("NuxtLink",{staticClass:"absolute top-0 left-0 px-4 -mt-12 sm:-mt-16",attrs:{to:t.$contentLocalePath("/blog")}},[o("span",{staticClass:"\n            text-sm\n            sm:text-base\n            leading-none\n            text-gray-900\n            dark:text-gray-100\n            hover:d-secondary-text\n            font-medium\n          "},[t._v("← Back")])]),t._v(" "),o("div",{staticClass:"mb-6 px-4"},[o("h1",{staticClass:"flex-1 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"},[t._v("\n          "+t._s(t.page.title)+"\n        ")]),t._v(" "),o("p",{staticClass:"my-4 text-base font-medium d-secondary-text"},[t._v("\n          "+t._s(t.page.description)+"\n        ")]),t._v(" "),o("div",{staticClass:"flex sm:flex-row items-center"},[t.page.date?o("time",{staticClass:"font-medium mr-2 text-sm d-tertiary-text",attrs:{datetime:t.page.date}},[t._v("\n            "+t._s(t.formatDateByLocale(t.$i18n.locale,t.page.date))+"\n          ")]):o("div",{staticClass:"font-medium mr-2 text-sm text-yellow-600 dark:text-yellow-500"},[t._v("\n            ⚠️ Please add\n            "),o("ProseCodeInline",[t._v("date: "+t._s(t.today))]),t._v("\n            in the page front-matter`\n          ")],1),t._v(" "),t.page.authors&&t.page.authors.length?o("div",{staticClass:"text-sm d-tertiary-text"},[t._v("|")]):t._e(),t._v(" "),o("div",{staticClass:"flex ml-4 sm:ml-2"},t._l(t.page.authors,(function(e,n){return o("a",{key:n,staticClass:"flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2 hover:d-secondary-text",attrs:{href:e.link,target:"_blank",rel:"noopener noindex nofollow"}},[o("NuxtImg",{staticClass:"rounded-full border d-border-tertiary inline-block h-8 w-8 sm:mr-1",attrs:{height:"32",width:"32",src:e.avatarUrl,alt:e.name,title:e.name}}),t._v(" "),o("span",{staticClass:"hidden sm:inline-block font-medium text-sm"},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),0)])])],1),t._v(" "),o("div",{staticClass:"max-w-4xl mx-auto"},[o("div",{staticClass:"aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 mb-8"},[o("NuxtImg",{attrs:{src:t.imgUrl,alt:t.page.title}})],1)]),t._v(" "),o("div",{staticClass:"max-w-2xl mx-auto"},[o("BlogpostToc",{staticClass:"mb-8",attrs:{toc:t.page.body.toc.links,title:t.page.body.toc.title}}),t._v(" "),o("DocusContent",{staticClass:"px-4 docus-content",attrs:{document:t.page}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProseCodeInline:o(539).default,BlogpostToc:o(561).default,DocusContent:o(506).default})}}]);