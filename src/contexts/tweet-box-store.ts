import type { MediaInput, TweetStore } from '#types'
import { writable, type Writable, } from 'svelte/store'

type OptionalFields = Partial<TweetStore>

interface TweetBoxStore extends Writable<OptionalFields> {
  setText: (text: string) => void
  setMedia: (media: MediaInput[]) => void
  updateMedia: (media: MediaInput[]) => void
}

function Store(initial: TweetStore): TweetBoxStore {
  const { subscribe, set, update } = writable(initial)

  function setText(text: string) {
    update(store => {
      store.text = text
      return store
    })
  }
  function setMedia(media: MediaInput[]) {
    update(store => {
      store.media = store.media ? store.media.concat(media) : media
      return store
    })
  }
  function updateMedia(media: MediaInput[]) {
    update(store => {
      store.media = media
      return store
    })
  }

  return {
    subscribe,
    setText,
    setMedia,
    updateMedia,
    set,
    update,
  }

}

export default Store({
  text: '',
  media: [],
})