import type { NotificationI } from "#types"
import { writable } from "svelte/store"

export default writable<NotificationI[]>([])