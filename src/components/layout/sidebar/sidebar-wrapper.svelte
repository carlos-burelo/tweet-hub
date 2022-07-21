<script lang="ts">
	export let title: string = ''
</script>

<section>
	<h3 class="head">{title}</h3>
	<slot />
	<div class="more">ver más</div>
</section>

<style lang="scss">
	section {
		margin-inline: 10px;
		background-color: var(--background-card);
		border-radius: var(--min-radius);
	}
	h3 {
		padding: 10px;
		position: sticky;
		top: 0;
		@include header-styles;
		border-radius: var(--min-radius) var(--min-radius) 0 0;
		z-index: var(--z-tooltip);
	}

	.more {
		color: var(--primary-color);
		cursor: pointer;
		padding: 10px;
		font-weight: 500;
		border-radius: 0 0 var(--min-radius) var(--min-radius);
		&:hover {
			background-color: var(--background-card);
		}
	}
</style>
