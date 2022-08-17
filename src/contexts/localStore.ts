import { writable } from "svelte/store"

export function createLocalStore(initialValue: any) {
  const { subscribe, set, update } = writable(initialValue)
  const db = localStorage.getItem("tw")

  return {
    subscribe,
    set,
    update,
  }
}