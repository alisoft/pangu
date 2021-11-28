import "ant-design-vue/dist/antd.less";
import { createApp } from "vue";
import router from "./router/index.client";
import store from "./store";
import locale from "./locales";
import App from "./App.vue";

import { ProProvider, PageContainer, TransformVnode } from "./components";
import { applyComponents } from "./component";
import { useIcons } from "./icons";
import Authority from "./utils/authority/authority.vue";
import "./app.less";
import "./router/router-guards";

const app = createApp(App);

applyComponents(app)
  .use(router)
  .use(locale as any)
  .use(store)
  .use(ProProvider)
  .component(PageContainer.name, PageContainer)
  .component(TransformVnode.name, TransformVnode)
  .component(Authority.name, Authority);

useIcons(app);

router.isReady().then(() => {
  app.mount("#app");
});
