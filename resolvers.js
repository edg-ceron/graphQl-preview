const authors = require('./authors')

const resolvers = {
    Query: {
        getAuthors: () => authors,
        retriveAuthor: (obj, { id }) => authors.find(author.id === id)
    }
}

module.exports = resolvers;