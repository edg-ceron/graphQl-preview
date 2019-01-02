const { gql } = require('apollo-server');

const typeDefs = gql`
    type Author {
        id: ID,
        info: Person
    }
    type Person {
        name: String,
        age: Int,
        gender: String
    }

    type Query {
        getAuthors: [Author]
        retriveAuthor(id: ID! ): Author
    }
`;

module.exports = typeDefs