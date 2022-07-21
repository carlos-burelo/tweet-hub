import type { MediaInput } from '#types'

export interface TweetStore {
  text: string
  media?: MediaInput[]
}
