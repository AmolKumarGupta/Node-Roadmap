const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type RootQuery {
        hello: String,
        world: Int
    }

    type User {
        _id: ID!,
        email: String!
    }

    input UserInput {
        email: String!,
        password: String!
    }

    type RootMutation {
        createUser(userInput: UserInput): User!
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);
