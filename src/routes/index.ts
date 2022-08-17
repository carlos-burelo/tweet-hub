import { $groups, $tweets, $users } from '#api/firebase'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const tweets = await $tweets.getAll()
  const users = await $users.getAll()
  const groups = $groups.getAll()
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: {
      tweets,
      users,
      groups
    }
  }
}