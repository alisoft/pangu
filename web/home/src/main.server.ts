import { createSSRApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

export default function () {
  const app = createSSRApp(App);

  app.component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
  };
}
