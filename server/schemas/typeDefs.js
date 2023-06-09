// Import the gql function from the apollo-server-express module
const { gql } = require('apollo-server-express');

// Define the GraphQL schema using the gql function
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedProperties: [Property]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Property {
    _id: ID
    address: String
    city: String
    state: String
    zipcode: String
    price: Float
    bedrooms: Int
    bathrooms: Float
    squareFeet: Int
    image: String
  }
  type Query {
    me: User
    properties:[Property]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUserEmail(email: String!): User
    updateUserUsername(username: String!): User
    updateUserPassword(password: String!): User
    saveProperty(propertyData: String!): User
    removeProperty(propertyId: String!): User
  }
`;

// Export the typeDefs schema for use in the server.js file
module.exports = typeDefs;
