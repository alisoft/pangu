import { createApp } from "vue";
import Vant from "vant";
import App from "./App.vue";
import "vant/lib/index.css";

const app = createApp(App);
app.use(Vant);
app.mount("#app");
