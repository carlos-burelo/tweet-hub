import resolvers from 'src/pages/api/resolvers';
import typeDefs from 'src/pages/api/typedefs';
import { createServer } from '@graphql-yoga/node'
import { NextApiRequest, NextApiResponse } from 'next'

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  graphiql: {
    endpoint: '/api/graphql',
    title: 'Tweet Hub - API',
    defaultQuery: `{ users { displayName } }`,
  },
})
export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await connect()
  return server.requestListener(req, res)
}
