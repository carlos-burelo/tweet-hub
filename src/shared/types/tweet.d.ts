import type { Content, TimeStamps } from "./global"

interface Tweet extends TimeStamps {
  id: string
  authorId: string
  author: User
  content: Content
}

