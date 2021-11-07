import { createRouter } from "vue-router";

const routes = [
  { path: "/", redirect: "/demo" },
  { path: "/about", component: () => import("../views/About.vue") },
  { path: "/demo", component: () => import("../views/Demo.vue") },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
