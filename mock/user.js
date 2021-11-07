module.exports = [
  {
    url: "/v1/auth/login",
    method: "POST",
    response: () => {
      return {
        code: 20000,
        title: "mock请求测试",
      };
    },
  },
  {
    url: "/v1/users/getUserInfo",
    method: "get",
    response: () => {
      return {
        code: 20000,
        data: {
          roles: ["admin"],
          introduction: "I am a super administrator",
          avatar:
            "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          name: "Super Admin",
        },
      };
    },
  },
];
