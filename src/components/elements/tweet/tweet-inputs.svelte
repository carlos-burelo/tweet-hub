<script lang="ts">
	import EmojiPicker from '#components/global/emoji-picker.svelte'
	import Icon from '#components/utils/icon.svelte'
	import { avalibleGifTypes, avalibleImageTypes } from '#shared/data/constants'
	import tweetStore from '#stores/tweet-box-store'
	import { parseFileList } from '#utils/image'

	let gifs: FileList
	let images: FileList

	const onChangeImage = () => {
		const imageArray = parseFileList(images)
		images.length > 0 && tweetStore.setMedia(imageArray)
	}
	const onChangeGif = () => {
		const gifArray = parseFileList(gifs)
		gifs.length > 0 && tweetStore.setMedia(gifArray)
	}
	const onChangeEmoji = (emoji: string | undefined) => {
		showEmojiPicker = false
		// if (emoji) {
		// 	tweetStore.addText(emoji)
		// }
	}
	$: showEmojiPicker = false
</script>

<div class="inputs">
	<button title="Subir una imagen">
		<input
			type="file"
			bind:files={images}
			on:change={onChangeImage}
			accept={avalibleImageTypes}
			multiple
		/>
		<Icon id="image" />
	</button>
	<button title="Subir un gif">
		<input
			type="file"
			bind:files={gifs}
			on:change={onChangeGif}
			accept={avalibleGifTypes}
			multiple
		/>
		<Icon id="gif" />
	</button>
	<button title="Agregar un emoji" on:click={() => (showEmojiPicker = true)}>
		<Icon id="emoji" />
	</button>
	<button title="Crear una encuesta">
		<Icon id="poll" />
	</button>
</div>

{#if showEmojiPicker}
	<EmojiPicker onClose={onChangeEmoji} />
{/if}

<style lang="scss">
	.inputs {
		@include separe(10px);
	}
	button {
		padding: 8px;
		font-size: 17px;
		color: var(--foreground-blue);
		position: relative;
		@include center;
		input {
			opacity: 0;
			cursor: pointer;
			@include center;
			@include absolute-position;
		}
		&:hover {
			background-color: var(--background-blue);
		}
	}
</style>
