import { Router } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: true }); // NProgress Configuration

export function applyProgressBar(router: Router) {
  router.beforeEach((_to, _from, next) => {
    NProgress.start(); // start progress bar
    next();
  });

  router.afterEach(() => {
    console.log('[afterEach]: progress-bar');
    NProgress.done(); // finish progress bar
  });
}
