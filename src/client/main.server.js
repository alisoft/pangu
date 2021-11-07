import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import Vant from "vant";
import createRouter from "./router";
import App from "./App.vue";
import store from "./store";
import i18n from "./locales";

import "vant/lib/index.css";
import "./assets/style/index.scss";

export default function () {
  const app = createSSRApp(App);
  const router = createRouter(createMemoryHistory());

  app.use(Vant);
  app.use(router);
  app.use(store);
  app.use(i18n);

  return {
    app,
    router,
  };
}
