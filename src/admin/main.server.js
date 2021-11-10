import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import ElementPlus from "element-plus";
import App from "./App.vue";
import { createAppRouter } from "./router";
import store from "./store";

import "@/assets/style/index.scss"; // global css
import "element-plus/dist/index.css";
// import zhCn from "element-plus/es/locale/lang/zh-cn";

//global mixin
import elementMixin from "@/mixins/elementMixin";
import commonMixin from "@/mixins/commonMixin";

//svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import SvgIcon from "@/icons/SvgIcon.vue";
const req = require.context("./icons/nav-bar", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);

//global mount moment-mini
import $momentMini from "moment-mini";

import Vant from "vant";
import i18n from "./locales";

import "vant/lib/index.css";
import "./assets/style/index.scss";

export default function () {
  const app = createSSRApp(App);
  const router = createAppRouter(createMemoryHistory("/admin/"));

  app.config.globalProperties.$momentMini = $momentMini;
  app.use(Vant);
  // app.use(ElementPlus, { size: "mini", locale: zhCn });
  app.use(ElementPlus, { size: "mini" });
  app.mixin(elementMixin);
  app.mixin(commonMixin);
  app.component("svg-icon", SvgIcon);
  app.use(router);
  app.use(store);
  app.use(i18n);

  return {
    app,
    router,
  };
}
