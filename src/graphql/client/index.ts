import { host } from "shared/env"

export default async function query(query: string, variables?: any) {
  let userQuery = `
    query {
      ${query}
    }
  `

  if (variables) {
    for (const key in variables) userQuery = userQuery.replaceAll(`$${key}`, `"${variables[key]}"`)
  }
  const fetcher = async (query: string, variables?: any) => await fetch(`${host}/api/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  }).then(res => res.json())
  const response = await fetcher(userQuery, variables)
  return response.data || null
}