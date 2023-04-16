import { gql } from "@apollo/client";

// retrieve users profile info 
// return an object with the several fields that are listed below 
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

// retrieve the properties
//return an property object with the several fields that are listed below 
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
