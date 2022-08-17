import { writable, type Writable } from 'svelte/store'
import type { MediaStore } from '#types'


export interface TweetStore {
	text: string
	media?: MediaStore[]
}

type OptionalFields = Partial<TweetStore>

interface TweetBoxStore extends Writable<OptionalFields> {
	setText: (text: string) => void
	setMedia: (media: MediaStore[]) => void
	updateMedia: (media: MediaStore[]) => void
}

function Store(initial: TweetStore): TweetBoxStore {
	const { subscribe, set, update } = writable(initial)

	function setText(text: string) {
		update(store => {
			store.text = text
			return store
		})
	}
	function setMedia(media: MediaStore[]) {
		update(store => {
			store.media = store.media ? store.media.concat(media) : media
			return store
		})
	}
	function updateMedia(media: MediaStore[]) {
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
		update
	}
}

export default Store({
	text: '',
	media: []
})
