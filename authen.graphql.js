const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/user/schema");
module.exports = graphqlHTTP({ schema, graphiql: true });
