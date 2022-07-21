<script lang="ts">
	import Icon from '#components/utils/icon.svelte'
	import type { MediaInput } from '#shared/types'
	import tweetStore from '#stores/tweet-box-store'

	let images: MediaInput[] = []

	const removeHandler = (index: number) => {
		tweetStore.updateMedia(images.filter((_, i) => i !== index))
	}
	tweetStore.subscribe(({ media }) => {
		images = media as MediaInput[]
	})
</script>

{#if images.length > 0}
	<div class="mediaHandler">
		{#each images as img, index}
			<div class="img">
				<img src={img.url} alt="s" />
				<button class="remove" on:click={() => removeHandler(index)}>
					<Icon id="close" />
				</button>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.mediaHandler {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
		gap: 10px;
		.img {
			position: relative;
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
