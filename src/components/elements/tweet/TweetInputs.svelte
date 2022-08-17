<script lang="ts">
	import EmojiPicker from '#/global/EmojiPicker.svelte'
	import Icon from '#/utils/Icon.svelte'
	import { avalibleGifTypes, avalibleImageTypes } from '#data/constants'
	import tweetStore from '#stores/tweetStore'
	import { parseFileList } from '#utils/image'
	import PollModal from '../polls/PollModal.svelte'
	import SnippetModal from '../snippet/SnippetModal.svelte'

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
	const onChangeEmoji = () => {
		showEmojiPicker = false
	}
	const onClosePoll = () => {
		showPollForm = false
	}
	const onCloseSnippet = () => {
		showSnippetEditor = false
	}
	$: showEmojiPicker = false
	$: showPollForm = false
	$: showSnippetEditor = false
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
	<button class="emoji" title="Agregar un emoji" on:click={() => (showEmojiPicker = true)}>
		<Icon id="emoji" />
	</button>
	<button title="Crear una encuesta" on:click={() => (showPollForm = true)}>
		<Icon id="poll" />
	</button>
	<!-- <button title="Crear un snippet" on:click={() => (showSnippetEditor = true)}>
		<Icon id="code" />
	</button> -->
</div>

{#if showEmojiPicker}
	<EmojiPicker onClose={onChangeEmoji} />
{/if}
{#if showPollForm}
	<PollModal onClose={onClosePoll} />
{/if}
{#if showSnippetEditor}
	<SnippetModal onClose={onCloseSnippet} />
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
	.emoji {
		@include sm {
			// no son necesarios en mobile
			display: none;
		}
	}
</style>
