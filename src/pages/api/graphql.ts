import { resolvers, typeDefs } from '#server/graphql'
import { createServer } from '@graphql-yoga/node'
import { NextApiRequest, NextApiResponse } from 'next'

const server = createServer({
  schema: {
    typeDefs,
    resolvers
  },

  graphiql: {
    endpoint: '/api/graphql',
    title: 'Tweet Hub - API'
  }
})
export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return server.requestListener(req, res)
}