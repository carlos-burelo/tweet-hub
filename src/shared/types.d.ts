export interface TimeStamps {
  createdAt: DateTime
  updatedAt: DateTime
}
export interface Unique {
  id: ID
}
export interface Details {
  description: string
}

// USER INTERFACES
export interface AuthorRef {
  authorId: ID
  author: User
}
export interface AccountData extends Details {
  name: string
  handle: string
  avatar: Image
  cover: Image
}
// TWEET INTERFACES

export interface Tweet extends TimeStamps, AuthorRef, Unique {
  from?: UserBasicData
  entities?: Entities
  content: Content
  comments: Comment[]
  metrics: Metrics
}

export type TweetInput = Omit<Tweet, 'author' | 'from' | 'id' | 'comments' | 'createdAt' | 'updatedAt' | 'metrics' | 'entities' | 'content'> & Content


interface Metrics {
  likes: MetricCounter
  retweets: MetricCounter
}

interface MetricCounter {
  count: number
  data: UserBasicData[]
}
export interface Entities {
  hashtags: string[] // == null && []
  mentions: UserBasicData[] // == null && []
  links: Url[] // == null && []
}
export interface Content {
  text?: string
  markup?: Markup
  media?: Image[]
  poll?: Poll
  snippets?: Snippet[] // the limit is (3)
}

export interface Poll extends TimeStamps {
  expiredAt: DateTime
  question: string
  options: Option[]
}
export interface Option extends Partial<Unique> {
  id: ID
  label: string
  value: Float
  users: UserBasicData[]
}
export interface Snippet {
  language: Languages
  content: Pick<Content, 'markup' | 'text'>
}
export type Languages = 'js' | 'ts' | 'md' | 'html' | 'css' | 'scss'

export interface User extends TimeStamps, Unique, AccountData {
  website?: string
  following: UserBasicData[]
  followers: UserBasicData[]
  tweets?: Tweet[] // use resolver()
  groups?: Group[] // use resolver()
}

export type UserBasicData = Unique & Omit<AccountData, 'cover'>


export interface Group extends TimeStamps, AuthorRef, Unique, AccountData {
  members: UserBasicData[]
  tweets: Tweet[]
  type: Enviroment
}
export interface Comment extends TimeStamps, Unique, AuthorRef {
  tweetId: ID
  content: Content
  entities: Entities
  metrics: Metrics
  replyTo?: Comment
}
export interface List extends Unique, AuthorRef, TimeStamps {
  title: string
  type: Enviroment
  image: Image
  pinned: boolean
  items: ListItems
}

export interface ListItems {
  users: UserBasicData[]
  tweets: Tweet[]
}
export type NotificationT = 'mention' | 'recomendation' | 'retweet' | 'like' | 'follow' | 'comment'
export interface NotificationI extends TimeStamps, Details, Unique {
  type: NotificationT
  title: string
  author: UserBasicData
  ref: Url
}
export interface Trend extends TimeStamps, Unique, Details {
  title: string
  image?: Image
  type: string // ex: 'User','Hashtag', 'Movie', 'New', etc
}
export interface Status extends AuthorRef, Unique, TimeStamps {
  expiredAt: DateTime
  image: Image
  views: UserBasicData[]
}
export type Account = Pick<User, 'avatar' | 'cover' | 'createdAt' | 'description' | 'website' | 'name'> & Pick<Group, 'type' | 'members'>
// GENERIC export typeS FOR APLICATION TYPING
export interface MenuLink {
  name: string
  to: string
  defaultPath?: string
}
export interface MediaStore {
  relativeUrl: Url
  size: number
  raw: File
}
export type Info = Partial<User> & Partial<Group>


// # utilities

export type Props<T> = { props: T }