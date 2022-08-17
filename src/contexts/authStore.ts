import { writable } from "svelte/store"

export const authStore = writable<any>({})

export const isLoggedIn = writable(false)