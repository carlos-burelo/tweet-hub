export interface Content {
  text: string
  media?: string[]
  entities?: {
    hashtags: string[],
    mentions: User[],
  }
}
export interface TimeStamps {
  createdAt: string
  updatedAt: string
}

export interface MediaInput {
  url: string
  size: number
  raw: File
}