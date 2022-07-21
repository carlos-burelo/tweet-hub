import type { TimeStamps } from "./global"

export interface Trend extends TimeStamps {
  id: string
  title: string
  details: string
  image?: string
  type: string
}