import { createSSRApp } from "vue";
import { createAppRouter } from "./router";
import store from "./store";
import "ant-design-vue/lib/style";
import locale from "./locales";
import App from "./App.vue";

import { ProProvider, PageContainer, TransformVnode } from "./components";
import { applyComponents } from "./component";
import { useIcons } from "./icons";
import Authority from "./utils/authority/authority.vue";

import "./app.less";
import "./router/router-guards";
import { createMemoryHistory } from "vue-router";

export default function () {
  const app = createSSRApp(App);
  const router = createAppRouter(createMemoryHistory("/admin/"));

  applyComponents(app)
    .use(router)
    .use(locale as any)
    .use(store)
    .use(ProProvider)
    .component(PageContainer.name, PageContainer)
    .component(TransformVnode.name, TransformVnode)
    .component(Authority.name, Authority);

  useIcons(app);

  return {
    app,
    router,
  };
}
