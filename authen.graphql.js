const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
module.exports = graphqlHTTP({ schema, graphiql: true });
