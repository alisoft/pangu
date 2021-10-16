import { createApp } from "vue";
import Demo from "./views/Demo.vue";
import "./registerServiceWorker";
import store from "./store";
import i18n from "./locales";

import "./assets/style/index.scss";

createApp(Demo).use(store).use(i18n).mount("#app");
