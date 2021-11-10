import { createStore } from "vuex";
import getters from "./getters";
import app from "./modules/app";
import permission from "./modules/permission";
import tagsView from "./modules/tagsView";
import user from "./modules/user";

export default createStore({
  modules: {
    app,
    permission,
    tagsView,
    user,
  },
  getters,
});
