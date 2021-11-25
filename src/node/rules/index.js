const { shield, rule, and, or } = require("graphql-shield");

const isAuthenticated = rule()(async (parent, args, ctx) => {
  return !!ctx.user;
});

const isAdmin = rule()(async (parent, args, ctx) => {
  return ctx.user.role === "admin";
});

const isUser = rule()(async (parent, args, ctx) => {
  return ctx.user.role === "user";
});

const isOwner = rule()(async (parent, args, ctx) => {
  return ctx.user.items.some((id) => id === parent.id);
});

module.exports = shield({
  RootQueryType: {
    user: isAuthenticated,
    users: isAuthenticated,
  },
  Mutation: {
    addUser: isAuthenticated,
    updateUser: isAuthenticated,
    deleteUser: isAuthenticated,
  },
});
