<script lang="ts">
	import Icon from '#/utils/Icon.svelte'
	import type { Trend } from '#types'
	export let trend: Trend
	const { title, description, image, createdAt, type, id } = trend
	const date = Intl.DateTimeFormat('es-EN', { dateStyle: 'medium' }).format(new Date(createdAt))
</script>

<a class="card" href="/trend/{id}">
	<div class="data">
		<div class="meta">
			<p>{type} ◽ {date}</p>
		</div>
		<div class="head">
			<h3 class="title">{title}</h3>
		</div>
		<p class="details">{description}</p>
	</div>
	{#if image}
		<img src={image} alt={title} loading="lazy" />
	{:else}
		<div class="more">
			<Icon id="more" />
		</div>
	{/if}
</a>

<style lang="scss">
	.card {
		padding: 15px;
		cursor: pointer;
		@include separe;
		@include space-between;
		&:hover {
			background-color: var(--background-card);
		}
		.details,
		.title {
			font-size: 15px;
			@include text-wrap;
		}
		img {
			width: 85px;
			height: 85px;
			object-fit: cover;
		}
		.more {
			height: fit-content;
			@include center;
			cursor: pointer;
			padding: 6px;
			border-radius: var(--min-radius);
			&:hover {
				background-color: var(--background-blue);
				color: var(--foreground-blue);
			}
		}
	}
</style>
