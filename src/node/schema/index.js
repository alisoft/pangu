const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const { userService } = require("../services");
const pick = require("../utils/pick");
const { baseTypes } = require("../config/base");

const RoleEnumType = new GraphQLEnumType({
  name: "RoleEnum",
  values: {
    USER: {
      value: "user",
    },
    ADMIN: {
      value: "admin",
    },
  },
});

const PaginationType = (itemType) => {
  return new GraphQLObjectType({
    name: "Pagination",
    fields: () => ({
      results: { type: new GraphQLList(itemType) },
      page: { type: GraphQLInt },
      limit: { type: GraphQLInt },
      totalPages: { type: GraphQLInt },
      totalResults: { type: GraphQLInt },
    }),
  });
};

// 使用 GraphQL Schema Language 创建一个 schema
const UserType = new GraphQLObjectType({
  name: "User",
  //We are wrapping fields in the function as we dont want to execute this util
  //everything is initlized. For example below code will throw error AuthorType not
  //found if not wrapped in a function
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: RoleEnumType },
    isEmailVerified: { type: GraphQLBoolean },
  }),
});

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular
//book or get a particular author.
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      //argument passed by the user while making the query
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument
        //by the user
        return userService.getUserById(args.id);
      },
    },
    users: {
      type: PaginationType(UserType),
      args: {
        name: { type: GraphQLString },
        role: { type: RoleEnumType },
        sortBy: { type: GraphQLString },
        limit: { type: GraphQLInt },
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const filter = pick(args, ["name", "role"]);
        const options = pick(args, ["sortBy", "limit", "page"]);
        return userService.queryUsers(filter, options);
      },
    },
  },
});

//Very similar to RootQuery helps user to add/update to the database.
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        //GraphQLNonNull make these field required
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(RoleEnumType) },
      },
      resolve: async (parent, args) => {
        return await userService.createUser({
          ...args,
          isDel: baseTypes.NORMAL,
        });
      },
    },
    updateUser: {
      type: UserType,
      args: {
        //GraphQLNonNull make these field required
        userId: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        return await userService.updateUserById(args.userId, {
          ...args,
        });
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        //GraphQLNonNull make these field required
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        return await userService.deleteUserById(args.userId);
      },
    },
  },
});

//Creating a new GraphQL Schema, with options query which defines query
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
