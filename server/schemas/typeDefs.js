const { gql } = require("apollo-server-express");

// ！means that the field is non-nullable.

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    propertyCount: Int
    savedProperties: [Property]
  }
  type Property {
    propertyId: ID!
    address: String
    city: String
    state: String
    zip: String
    price: String
    bedrooms: String
    bathrooms: String
    squareFeet: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input PropertyInput {
    propertyId: String!
    address: String
    city: String
    state: String
    zip: String
    price: String
    bedrooms: String
    bathrooms: String
    squareFeet: String
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProperty(propertyData: PropertyInput): User
    removeProperty(propertyId: ID!): User
  }
`;

module.exports = typeDefs;