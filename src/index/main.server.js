import { createSSRApp } from "vue";
import Vant from "vant";
import App from "./App.vue";
import "vant/lib/index.css";

export default function () {
  const app = createSSRApp(App);

  app.use(Vant);

  return {
    app,
  };
}
