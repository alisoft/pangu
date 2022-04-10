import { createSSRApp } from 'vue';
// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/dist/antd.variable.less';
import router from '@/router';
import store from '@/store';
import locale from './locales';
import App from './App.vue';

import { ProProvider, PageContainer, TransformVnode } from './components';
import { applyComponents } from './component';
import { useIcons } from './icons';
import Authority from './utils/authority/authority.vue';
import './app.less';
import '@/router/router-guards';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

export default function () {
  const app = createSSRApp(App);

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
