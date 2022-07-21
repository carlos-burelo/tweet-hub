<script lang="ts">
	export let media: string[] = []
	let length: number = media.length
	let gridArea = ''
	let grid = { rows: 1, cols: 1 }
	let limitUp = length > 4 ? 4 : length
	if (length == 1) (gridArea = `"img0"`), (grid = { rows: 1, cols: 1 })
	if (media.length == 2) (gridArea = `"img0 img1"`), (grid = { rows: 1, cols: 2 })
	if (length == 3) (gridArea = `"img0 img2" "img1 img2"`), (grid = { rows: 2, cols: 2 })
	if (length >= 4) (gridArea = `"img0 img1" "img2 img3"`), (grid = { rows: 2, cols: 2 })
	let styles = `
    grid-template-areas: ${gridArea};
    grid-template-columns: repeat(${grid.cols}, 1fr); 
    grid-template-rows: repeat(${grid.rows}, 1fr);
  `
	$: images = media.filter((_, i) => i < limitUp)
</script>

<div class="content-area" style={styles}>
	{#each images as image, index}
		{#if media.length > limitUp && index == limitUp - 1}
			<span>
				<img loading="lazy" alt="a" src={image} style="grid-area: img{index}; position: inherit;" />
			</span>
		{:else}
			<img loading="lazy" alt="a" src={image} style="grid-area: img{index};" />
		{/if}
	{/each}
</div>

<style lang="scss">
	span {
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
	}
	span,
	img {
		cursor: pointer;
	}
	.content-area {
		display: grid;
		gap: 10px;
	}
	img {
		height: 100%;
		object-fit: cover;
		position: relative;
	}
</style>
