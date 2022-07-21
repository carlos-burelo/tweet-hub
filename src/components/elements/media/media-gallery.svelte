<script lang="ts">
	import Icon from '#components/utils/icon.svelte'
	export let onClose: () => void
	export let media: string[]
	$: current = 0
	$: moveTo = (e: any) => {
		if (e.key === 'ArrowLeft') {
			current = (current - 1) % media.length
			if (current < 0) current = media.length - 1
		} else if (e.key === 'ArrowRight') {
			current = (current + 1) % media.length
		}
	}
</script>

<svelte:window on:keydown|preventDefault={moveTo} />
<div class="overlay">
	<button on:click={onClose}>
		<Icon id="close" />
	</button>
	<section class="content">
		<div class="currentImage">
			<img src={media[current]} alt="image {current}" />
		</div>
		<div class="carousel">
			{#each media as image, index}
				<img class="item" src={image} alt="image {index}" on:click={() => (current = index)} />
			{/each}
		</div>
	</section>
</div>

<style lang="scss">
	button {
		position: absolute;
		right: 20px;
		top: 20px;
		padding: 10px;
		font-size: 20px;
	}
	.overlay {
		position: fixed;
		left: 0;
		top: 0;
		background-color: var(--background-translucent);
		z-index: var(--z-modal);
		@include center;
		@include full-content;
		@include sm {
			padding: 10px;
		}
	}
	.currentImage img {
		max-height: 400px;
		min-height: 350px;
		object-fit: cover;
	}
	.content {
		max-width: 650px;
		@include center;
	}
	.carousel {
		width: 100%;
		margin-top: 20px;
		justify-content: center;
		@include separe(15px);
		overflow-x: scroll;
		@include custom-scrollbar;
	}
	.item {
		width: 100px;
		height: 100px;
		object-fit: cover;
		cursor: pointer;
	}
</style>
