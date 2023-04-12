const { gql } = require('apollo-server-express');

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
    price: String
    bedrooms: String
    bathrooms: String
    squareFeet: String
    image: String
  }
  type Query {
    me: User
    properties:[Property]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProperty(propertyData: String!): User
    removeProperty(propertyId: String!): User
  }

`;

module.exports = typeDefs;
