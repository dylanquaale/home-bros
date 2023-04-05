import { gql } from "@apollo/client";

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        propertyCount
        savedProperties {
            propertyId
            address
            city
            state
            zip
            price
            bedrooms
            bathrooms
            squareFeet
            image
            link
        }
    }
}
`;
