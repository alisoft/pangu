import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vant from "vant";
import "./registerServiceWorker";
import App from "./App.vue";

import "vant/lib/index.css";

const app = createApp(App);
app.use(Vant);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
