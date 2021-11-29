import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Country {
    code: ID!
    name: String!
    emoji: String!
  }
  type Query {
    countries: [Country!]!
  }
`
