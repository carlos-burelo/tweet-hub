import type { User, Content, TimeStamps } from "#types"

export interface Comment extends TimeStamps {
  id: string
  tweetId: string
  authorId: string
  author: User
  content: Content
}