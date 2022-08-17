<script lang="ts">
	import MediaGallery from '#/elements/media/MediaGallery.svelte'
	import { fly } from 'svelte/transition'
	import type { Image } from '#types'
	export let media: Image[]
	let a = '',
		c = 0,
		r = 0
	const { length } = media
	let limit = length > 4 ? 4 : length
	if (length == 1) (a = `"img0"`) && (c = 1) && (r = 1)
	if (length == 2) (a = `"img0 img1"`), (c = 2), (r = 1)
	if (length == 3) (a = `"img0 img2" "img1 img2"`), (c = 2), (r = 2)
	if (length >= 4) (a = `"img0 img1" "img2 img3"`), (c = 2), (r = 2)
	const toggleShowGallery = () => (showGallery = !showGallery)
	let showGallery = false
	let current = 0
	let images = media.filter((_, i) => i < limit)
	let styles = `grid-template-areas: ${a};grid-template-columns: repeat(${c}, 1fr);grid-template-rows: repeat(${r}, 1fr);`
	const props = { class: 'img', loading: 'lazy' }
	const onSelect = (index: number) => {
		current = index
	}
</script>

<div class="gallery" on:click={toggleShowGallery} style={styles} transition:fly>
	{#each images as img, i}
		{#if media.length > limit && i == limit - 1}
			<span class="limit" on:click={() => onSelect(i)}>
				<img {...props} alt="item" src={img} style="grid-area: img{i};" />
			</span>
		{:else}
			<img {...props} on:click={() => onSelect(i)} alt="a" src={img} style="grid-area: img{i};" />
		{/if}
	{/each}
</div>

{#if showGallery && media}
	<MediaGallery {media} onClose={toggleShowGallery} {current} />
{/if}

<style lang="scss">
	.gallery {
		display: grid;
		gap: 8px;
	}
	.limit {
		min-height: 100%;
		position: relative;
		&::before {
			@include center;
			@include full-content;
			@include absolute-position;
			background-color: var(--background-translucent);
			border-radius: var(--min-radius);
			z-index: 10;
			content: '🖼️ Ver mas';
			font-size: 20px;
		}
		img {
			position: inherit;
		}
	}
	.limit,
	img {
		cursor: pointer;
	}
	img {
		height: 100%;
		object-fit: cover;
		position: relative;
		min-height: 160px;
	}
</style>
