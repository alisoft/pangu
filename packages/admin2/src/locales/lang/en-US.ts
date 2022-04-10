import globals from './global/en-US';
import routes from './routes/en-US';
import pages from './pages/en-US';
import antd from 'ant-design-vue/lib/locale/en_US';
import dayjs from 'dayjs/locale/eu';

import settingDrawerLocales from '@/components/setting-drawer/locales/en-US';

import dashboardAnalysis from '@/views/dashboard/analysis/locales/en-US';
import dashboardMonitor from '@/views/dashboard/monitor/locales/en-US';

import basicFormLocales from '@/views/form/basic-form/locales/en-US';
import stepFormLocales from '@/views/form/step-form/locales/en-US';
import advanceFormLocales from '@/views/form/advance-form/locales/en-US';

const locales = {
  localeName: 'enUS',
  dayjsLocaleName: 'eu',
  antd,
  dayjs,

  ...globals,
  ...routes,
  ...pages,
  ...settingDrawerLocales,

  ...dashboardAnalysis,
  ...dashboardMonitor,

  ...basicFormLocales,
  ...stepFormLocales,
  ...advanceFormLocales,
};

export default locales;
