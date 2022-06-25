import { createServer } from '@graphql-yoga/node'
import { NextApiRequest, NextApiResponse } from 'next'

const server = createServer({
  schema: {
    typeDefs: `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello world!'
      }
    }
  },

  graphiql: {
    endpoint: '/api/graphql',
    title: 'Tweet Hub - API'
  }
})
export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return server.requestListener(req, res)
}