const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };

// A brief explanation over type defs and resolvers. 

// The typeDefs property is being imported from the typeDefs.js module and contains the schema definition for the API. The resolvers property is imported from the resolvers.js module and contains the functions that resolve the queries and mutations defined in the typeDefs.

// So by exporting these two properties as an object, the index.js file can import them together and pass them to the ApolloServer constructor to create the GraphQL server. This approach keeps the schema and resolvers separate, making it easier to maintain and modify them separately.