import { writable } from "svelte/store"
import type { Tweet, User, Group } from "#types"

type Feed = {
  users: User[]
  tweets: Tweet[]
  groups: Group[]
}

export default writable<Feed>({
  users: [],
  tweets: [],
  groups: []
})