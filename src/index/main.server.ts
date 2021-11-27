import { createSSRApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vant from "vant";
import App from "./App.vue";
import "vant/lib/index.css";

export default function () {
  const app = createSSRApp(App);

  app.use(Vant);
  app.component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
  };
}
