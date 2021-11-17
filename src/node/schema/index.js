const { buildSchema } = require("graphql");

// 使用 GraphQL Schema Language 创建一个 schema
export default buildSchema(`
  type Query {
    hello: String
  }
`);
