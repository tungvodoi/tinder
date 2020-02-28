const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    id: String
    username: String
  }
  type Location {
    long: Int
    lati: Int
  }

  #   input LocationInput{
  #     long: Int
  #     lati: Int
  #   }

  type Query {
    login(username: String, password: String): String
    getAllUSer: [User],
    encounter(userId: String): [User]
  }
  type Mutation {
    register(username: String): User
    reportLocation(userId: String, long: Int, lati: Int): Location
  }
`;

module.exports = typeDefs;
