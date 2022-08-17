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
	$: flex = images.length > 4
	$: grid = images.length <= 4
</script>

{#if images.length > 0}
	<div class="content" class:grid class:flex>
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
	.content {
		gap: 8px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	.flex {
		display: flex;
		@include custom-scrollbar;
		overflow-x: scroll;
		overflow-y: hidden;
		.img {
			min-width: 145px;
		}
	}

	.img {
		position: relative;
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
