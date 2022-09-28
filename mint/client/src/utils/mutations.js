import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }   
`;

export const ADD_ORDER = gql`
    mutation addOrder($listings: [ID]!) {
        addOrder(listings: $listings) {
            purchaseDate
            listings {
                _id
                title
                image
                price
                category {
                    name
                }
                description
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`

export const ADD_LISTING = gql`
    mutation addListing(
        $title: String!
        $image: String!
        $price: Float!
        $description: String!
        $category: String!
    ) {
        addListing(
            title: $title
            image: $image
            price: $price
            description: $description
            category: $category
        ) {
            token
            user {
                _id
            }
        }
    }
`
