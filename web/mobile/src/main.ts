import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import "./registerServiceWorker";
import Vant from "vant";
import App from "./App.vue";
import createRouter from "./router";

import "vant/lib/index.css";

const app = createApp(App);
const router = createRouter(createWebHistory("/mobile/"));

app.use(Vant);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
