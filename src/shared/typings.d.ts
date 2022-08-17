export interface TimeStamp {
  createdAt: DateTime
}
export interface ExpireDate {
  expiredAt: DateTime
}

export interface Unique {
  id: ID
}
export interface Url {
  host: string
  title: string
  description: string
  url: string
}
export type Image = string

//
// GLOBAL INTERFACES
//
export interface Content {
  markup: string
  media?: Image[]
}
export interface Entities {
  hashtags?: string[] // == null && []
  mentions?: Account[] // == null && []
  urls?: Url[] // == null && []
}
export interface Reactions {
  likes: {
    count: number
    users: Account[]
  }
  comments: {
    count: number
    users: Account[]
  }
  retweets: {
    count: number
    users: Account[]
  }
}
//
//  USER INTERFACES
//
export interface Account extends Unique {
  name: string
  handle: string
  avatar: Image
}
export interface User extends Account, TimeStamp {
  cover: Image
  bio: string
  website?: string
  groups: Account[]
  tweets: Tweet[]
  followers: Account[]
  following: Account[]
}
//
//  TWEET INTERFACES
//
export interface Tweet extends TimeStamp, Reactions, Unique {
  answerTo?: Omit<Account, 'avatar'>
  author: Account
  content: Content
  entities: Entities
}
//
//  GROUP INTERFACES
//
export interface Group extends Account, TimeStamp {
  bio: string
  members: Account[]
  cover: Image
  tweets: Tweet[]
  type: 'private' | 'public'
  author: Account
}
//
// POLL INTERFACES
//
export interface Poll extends ExpireDate {
  question: string
  options: Option[]
}

export interface Option extends Unique {
  title: string
  votes: Account[]
  count: number
}
export type OptionInput = Omit<PollOption, 'id' | 'votes' | 'value'>
