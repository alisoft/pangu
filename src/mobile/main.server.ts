import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import Vant from "vant";
import createRouter from "./router";
import App from "./App.vue";

import "vant/lib/index.css";

export default function () {
  const app = createSSRApp(App);
  const router = createRouter(createMemoryHistory("/mobile/"));

  app.use(Vant);
  app.use(router);

  return {
    app,
    router,
  };
}
