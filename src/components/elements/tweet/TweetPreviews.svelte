<script lang="ts">
	import Icon from '#/utils/Icon.svelte'
	import tweetStore from '#stores/tweetStore'
	// import type { MediaStore } from '#types'

	let images: any[] = []

	const removeHandler = (index: number) => {
		tweetStore.updateMedia(images.filter((_, i) => i !== index))
	}
	tweetStore.subscribe(({ media }) => {
		images = media as any[]
	})
</script>

{#if images.length > 0}
	<div class="mediaHandler">
		{#each images as img, index}
			<div class="img">
				<img src={img.relativeUrl} alt="s" />
				<button class="remove" loading="lazy" on:click={() => removeHandler(index)}>
					<Icon id="close" />
				</button>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.mediaHandler {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		.img {
			position: relative;
			width: 100%;
			height: 100%;
		}
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.remove {
		position: absolute;
		top: 5px;
		right: 5px;
		background-color: var(--background-translucent);
		padding: 8px;
		border-radius: var(--round);
	}
</style>
