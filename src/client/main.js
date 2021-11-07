import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import Vant from "vant";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import i18n from "./locales";
import createRouter from "./router";

import "vant/lib/index.css";
import "./assets/style/index.scss";

const app = createApp(App);
const router = createRouter(createWebHistory());

app.use(Vant);
app.use(router);
app.use(store);
app.use(i18n);

router.isReady().then(() => {
  app.mount("#app");
});
