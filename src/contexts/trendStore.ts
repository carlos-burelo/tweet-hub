import type { Trend } from "#types"
import { writable } from "svelte/store"

export default writable<Trend[]>([])