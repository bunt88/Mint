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

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    user: [User]
    listing(_id: String): [Listing]
  }
`;

module.exports = typeDefs;
