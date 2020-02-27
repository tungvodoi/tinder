const gql = require("graphql-tag")

const typeDefs = gql`
  type User {
    id: String
    username: String
  }

  type Query {
    login(username: String, password: String): String
  }
  type Mutation {
    register(username: String, password: String, email: String): User
  }
`;

module.exports = typeDefs;
