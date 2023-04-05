import { gql } from "@apollo/client";

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        savedProperties {
            propertyId
            image
            description
            title
            link
        }
    }
}
`;
