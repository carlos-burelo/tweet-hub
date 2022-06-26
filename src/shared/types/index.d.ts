// # Tweet interfaces

export interface Tweet {
  id: string // Tweet ID
  author: User // User ID
  authorId: string // User ID
  createdAt: string // Tweet creation date
  updatedAt: string // Tweet update date
  content: Content // Tweet content  
  reactions: Reactions // Tweet reactions
  hashtags: string[] // Tweet hashtags
  mentions: string[] // Tweet mentions
}
export interface Content {
  text: string // Tweet text
  media: string[] // Tweet media
}

export interface Reactions {
  like: Reaction
  comments: Reaction
  shares: Reaction
  retweets: Reaction
}
interface Reaction {
  count: number // Number of likes
  users: User[] // List of id users who liked the tweet
}
interface TweetInput extends Omit<Tweet, 'id' | 'createdAt' | 'updatedAt' | 'reactions'> { }

// # User interfaces

export interface User {
  id: string // User ID
  avatar: string // User avatar
  displayName: string // User display name
  userName: string // User username
  bio: string // User bio
  createdAt: string // User creation date
  website?: string // User website
  following: User[] // List of users the user is following
  followers: User[] // List of users who follow the user
}
interface UserInput extends Omit<User, 'id' | 'createdAt' | 'following' | 'followers'> { }

// # Comment interfaces

export interface Comment {
  id: string // Comment ID
  author: User // Comment author
  createdAt: string // Comment creation date
  updatedAt: string // Comment update date
  content: Content // Comment content
  reactions: Reactions // Comment reactions
}
interface CommentInput extends Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'reactions'> { }
