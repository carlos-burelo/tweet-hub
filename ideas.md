# SERVER PROCESS ALL TASK

# Tweet Model

```graphql
type Tweet {
  id: ID!
  authorId: ID!
  author: User!
  createdAt: String!
  updatedAt: String!
  content: {
    text: String # Original text
    markup: String # html rendered in server [Markdown]
    poll: Poll
    media: [String] # image/gif gallery
    snippets: [Snippet]
  }
  entities: { # parse in server
    hashtags: [String]
    mentions: [User]
    links: [String] # Only show first Match
  }
}

type Poll {
  createdAt: DateTime
  updatedAt: DateTime
  expiredAt: DateTime
  question: String
  options: PollOption
}
type PollOption {
  id: ID # Hash for vote the option using Crypto
  label: String
  value: Float
  votes: [User] # useResolver
}
type Snippet {
  language: String # 'md','js','ts,'html','css','scss'
  content: {
    text: String # raw text
    markup: String # html rendered in the server
  }
}
```

# BACKEND STRUCTURE

```
api/
  |- models/
    |- tweet/
      |- tweet.schema.ts
      |- tweet.typedefs.ts
      |- tweet.resolver.ts
    |- user/
      |- user.schema.ts # User Mongoose Model
      |- user.typedefs.ts # User GraphQL Type Definition
      |- user.resolver.ts  # User GraphQL Resolver
    |-
```
