import type { Tweet, User } from "#types"

export interface User {
  id: string
  name: string
  userName: string
  image: string
  bio: string
  location: string
  website: string
  tweets: Tweet[]
  following: User[]
  followers: User[]
}