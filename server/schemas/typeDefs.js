const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type User {
    _id: ID
    username: String!
    email: String
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
  # input PropertyInput {
  #   _id: String
  #   address: String
  #   city: String
  #   state: String
  #   zipcode: String
  #   price: String
  #   bedrooms: String
  #   bathrooms: String
  #   squareFeet: String
  #   image: String
  # }
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    me: User
    properties:[Property]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProperty(propertyData: String!): User
    removeProperty(propertyId: ID!): User
    # change to ID if not working
  }

`;

module.exports = typeDefs;
