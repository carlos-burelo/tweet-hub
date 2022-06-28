// # Tweet interfaces

export interface Tweet {
  id: string
  author: User
  authorId: string
  createdAt: string
  updatedAt: string
  content: Content
  reactions: Reactions
  hashtags: string[]
  mentions: string[]
}
export interface Content {
  text: string
  media: string[]
}

export interface Reactions {
  like: Reaction
  comments: Reaction
  shares: Reaction
  retweets: Reaction
}
interface Reaction {
  count: number
  users: User[]
}
interface TweetInput extends Omit<Tweet, 'id' | 'createdAt' | 'updatedAt' | 'reactions'> { }

// # User interfaces

export interface User {
  id: string
  avatar: string
  displayName: string
  userName: string
  bio: string
  createdAt: string
  website?: string
  following: User[]
  followers: User[]
}
interface UserInput extends Omit<User, 'id' | 'createdAt' | 'following' | 'followers'> { }

// # Comment interfaces

export interface Comment {
  id: string
  author: User
  createdAt: string
  updatedAt: string
  content: Content
  reactions: Reactions
}
interface CommentInput extends Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'reactions'> { }
