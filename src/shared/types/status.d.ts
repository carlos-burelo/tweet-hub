import type { User } from "#types"

export interface Status {
  image: string
  user: User
  createdAt: string
  expiredAt: string
}