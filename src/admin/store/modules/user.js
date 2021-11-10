import { loginReq, logoutReq } from "@/apis/user";
import { setToken, removeToken } from "@/utils/auth";

const getDefaultState = () => {
  return {
    //token: getToken(),
    username: "",
    avatar: "",
    roles: [],
  };
};

const state = getDefaultState();

const mutations = {
  M_username: (state, username) => {
    state.username = username;
  },
  M_roles: (state, roles) => {
    state.roles = roles;
  },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // }
};

const actions = {
  // user login
  // eslint-disable-next-line no-unused-vars
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      loginReq(data)
        .then((res) => {
          setToken(res.tokens?.access.token);
          commit("M_username", res.user.name);
          commit("M_roles", [res.user.role]);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // user logout
  logout() {
    return new Promise((resolve, reject) => {
      logoutReq()
        .then(() => {
          removeToken(); // must remove  token  first
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // remove token
  resetToken() {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
