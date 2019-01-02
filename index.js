require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    }
})

server.listen().then(({ url }) => {
    console.log(`��  Server ready at ${url}`)
})