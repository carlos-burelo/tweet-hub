import type { Tweet, User } from "#types"

export interface Group {
  id: string
  authorId: string
  author: User
  userName: string
  name: string
  description: string
  image: string
  banner: string
  members: User[]
  tweets: Tweet[]
  type: 'public' | 'private'
  createdAt: string
  updatedAt: string
}