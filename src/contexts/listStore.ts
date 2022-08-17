import type { List } from "#types"
import { writable } from "svelte/store"

export default writable<List[]>([])