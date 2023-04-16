import { gql } from "@apollo/client";
// log user in by id user name email password
// token is the jst token
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`
// add a user to graphql tag
// will return two fields token and user
// String to authenticate the token
// when executed username email and password must be in the variables
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`
// save property returns multiple fields id,username, email,
// saveProperties is an array of objects each saved property returns the fields below
export const SAVE_PROPERTY = gql`
mutation saveProperty($propertyData: String!){
    saveProperty(propertyData: $propertyData) {
        _id
        username
        email
        savedProperties {
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
    }
}
`

// remove property will remove property by id 
export const REMOVE_PROPERTY = gql`
mutation removeProperty($propertyId: String!){
    removeProperty(propertyId: $propertyId) {
        _id
        username
        email
        savedProperties {
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
    }
}
`
// update user email by using a string
export const UPDATE_USER_EMAIL = gql`
mutation updateUserEmail($email: String!){
    updateUserEmail(email: $email) {
        _id
        username
        email
    }
}
`
// update user name by using a string 
export const UPDATE_USER_USERNAME = gql`
mutation updateUserUsername($username: String!){
    updateUserUsername(username: $username) {
        _id
        username
        email
    }
}
`
// update user password by using a string
export const UPDATE_USER_PASSWORD = gql`
mutation updateUserPassword($password: String!){
    updateUserPassword(password: $password) {
        _id
        username
        email
    }
}
`
