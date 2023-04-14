import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
      password
      savedProperties {
        _id
        address
        city
        state
        zipcode
        price
        bedrooms
        bathrooms
        squareFeet
        image
      }
    }
  }
`

export const QUERY_PROPERTIES = gql`
query properties {
    properties {
      _id
      address
      city
      state
      zipcode
      price
      bedrooms
      bathrooms
      squareFeet
      image
    }
  }
`