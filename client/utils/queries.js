import { gql } from "@apollo/client";

export const QUERY_ME = gql`
{
    me{
        _id
        username
        email
    }
}
`
export const QUERY_PROPERTIES = gql`
{
    properties {
    _id
    address
    bathrooms
    bedrooms
    city
    image
    price
    squareFeet
    state
    zipcode
  }
}`