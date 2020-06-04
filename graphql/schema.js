const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    name: String!
    age: Int!
    email: String!
  }

  type Test {
    count: Int!
    users: [User!]!
  }

  input UserInput {
    name: String!
    email: String!
  }

  input TodoInput {
    title: String!
  }

  type Todo {
    title: String!
    id: ID!
    done: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    test: Test!
    random(min: Int!, max: Int!, count: Int!): [Float!]!
    getTodos: [Todo!]
  }

  type Mutation {
    addTestUser(user: UserInput!): User!
    createTodo(todo: TodoInput!): Todo!
    completeTodo(id: ID!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`);
