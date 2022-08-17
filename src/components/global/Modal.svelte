<script lang="ts">
	import Icon from '#/utils/Icon.svelte'
	import { scale } from 'svelte/transition'
	export let onClose: () => void
	export let title: string
</script>

<div class="overlay">
	<div class="content" transition:scale>
		<div class="header">
			<h1 class="title">
				{title}
			</h1>
			<button on:click={onClose} class="close">
				<Icon id="close" />
			</button>
		</div>
		<div class="body">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.overlay {
		background-color: var(--background-translucent);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: var(--z-modal);
		@include center;
	}
	.content {
		min-width: 400px;
		max-width: 600px;
		background-color: var(--background);
		padding: 20px;
		border: solid 1px var(--border-color);
		border-radius: var(--min-radius);
	}
	.header {
		@include space-between;
		margin-bottom: 20px;
		position: sticky;
		top: 0;
	}
	.title {
		font-size: 20px;
	}
	.close {
		padding: 10px;
	}
</style>
