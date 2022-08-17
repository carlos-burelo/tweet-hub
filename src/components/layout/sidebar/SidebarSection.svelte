<script lang="ts">
	export let title = ''
	export let more = ''
</script>

<section>
	<h3 class="head">{title}</h3>
	<slot />
	<a class="more" href={more}>ver más</a>
</section>

<style lang="scss">
	section {
		margin-inline: 10px;
		background-color: var(--background-card);
		border-radius: var(--min-radius);
		display: grid;
		gap: 15px;
	}
	.head {
		padding: 10px;
		position: sticky;
		top: 0;
		background-color: #080a0d;
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
