const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID!
    title: String!
    image: String!
    price: Number!
    description: String!
    category: Schema.Types.ObjectId
  }

  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    user: User
    listing(category: ID, name: String): [Listing]
    listing(_id: String): Listing
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
`;

module.exports = typeDefs;

