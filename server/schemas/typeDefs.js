const { gql } = require("apollo-server-express");

// ！means that the field is non-nullable.
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    propertyCount: Int
    savedProperties: [Book]
  }
  type Property {
    propertyId: ID!
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input propertyInput {
    propertyId: String!
    description: String!
    title: String!
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProperty(propertyData: propertyInput): User
    removeBook(propertyId: ID!): User
  }
`;

module.exports = typeDefs;