<script lang="ts">
	import Gallery from '#components/global/gallery.svelte'
	import LinkPreview from '#components/global/link-preview.svelte'
	import { tokenizer } from '#utils/text'
	import MediaGallery from '../media/media-gallery.svelte'
	export let text: string = ''
	export let media: string[] = []
	const render = (text: string) => tokenizer(text)
	const hasUrl = text.match(
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
	)
	const isMesageBox = text.length < 50 && media.length === 0
	$: showGallery = false
</script>

<section class="content-area">
	<p class={isMesageBox ? 'short' : 'large'}>
		{@html render(text)}
	</p>
	<div class="media" on:click={() => (showGallery = true)}>
		{#if media.length > 0}
			<Gallery {media} />
		{/if}
	</div>
</section>

{#if showGallery}
	<MediaGallery {media} onClose={() => (showGallery = false)} />
{/if}

{#if hasUrl}
	<LinkPreview url={hasUrl[0]} />
{/if}

<style lang="scss">
	p {
		border-radius: var(--mid-radius);
		font-weight: 500;
		color: var(--foreground);
		:global(mark) {
			font-weight: 600;
		}
	}
	.short {
		min-height: 300px;
		background-color: var(--background-card);
		padding: 10px;
		font-size: 30px;
		line-height: 1.3;
		text-align: center;
		@include center;
		@include full-content;
	}
	.large {
		font-size: 18px;
		padding-block: 5px;
	}
	.media {
		margin-top: 5px;
	}
</style>
