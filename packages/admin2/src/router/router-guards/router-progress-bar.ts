import router from '../index';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: true }); // NProgress Configuration

router.beforeEach((_to, _from, next) => {
  NProgress.start(); // start progress bar
  next();
});

router.afterEach(() => {
  console.log('[afterEach]: progress-bar');
  NProgress.done(); // finish progress bar
});
