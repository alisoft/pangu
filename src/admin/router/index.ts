import { createWebHistory } from "vue-router";
import { createAppRouter } from "./routers";

export default createAppRouter(createWebHistory("/admin/"));
