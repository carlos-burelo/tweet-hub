<script lang="ts">
	import { fade } from 'svelte/transition'
	export let value = 0
	export let label = 'Op1'
	export let checked = false
	const vote = () => (checked = !checked)
</script>

<div class="content" class:checked on:click={vote}>
	<div class="progress" transition:fade>
		<div class="bar" style="width: {value}%;">
			{label}
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		display: grid;
		cursor: pointer;
		.progress .bar {
			background-color: transparent;
			color: var(--foreground);
			outline: none;
		}
	}
	.checked {
		opacity: 1;
		.progress .bar {
			background-color: var(--primary-color);
			outline: solid 1px var(--primary-color);
		}
	}
	.progress {
		width: 100%;
		height: 40px;
		background-color: var(--background-card);
		position: relative;
		border: solid 1px var(--border-card);
	}
	.bar {
		height: 100%;
		font-size: 17px;
		font-weight: 700;
		line-height: 0;
		@include middle;
		padding-inline-start: 10px;
		color: var(--background);
	}
	.progress,
	.bar {
		border-radius: var(--min-radius);
	}
</style>
