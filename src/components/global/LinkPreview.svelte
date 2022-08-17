<script lang="ts">
	import type { Url } from '#types'
	export let url: Url
	let { description, host, title, url: href } = url
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<div class="preview">🔗</div>
	<div class="data">
		<h3 class="title">{title}</h3>
		<p class="description">{description}</p>
		<p class="host">🔗 {host}</p>
	</div>
</a>

<style lang="scss">
	a {
		--icon: 120px;
		display: grid;
		grid-template-columns: var(--icon) auto;
		background-color: var(--background-card);
		border-radius: var(--min-radius);

		@include sm {
			--icon: 100px;
		}
	}
	.preview {
		background-color: var(--background-card);
		border-radius: var(--min-radius);
		@include center;
		width: var(--icon);
		height: var(--icon);
		font-size: 3em;
		color: var(--text);
		aspect-ratio: 1;
	}
	.data {
		padding: 15px;
		@include sm {
			padding: 10px;
		}
	}
	.title {
		font-size: 15px;
		@include text-wrap;
	}
	.description {
		font-size: 14px;
		@include text-wrap;
		line-height: 1.6;
		@include sm {
			line-height: 1.4;
		}
	}
	.title,
	.description {
		@include sm {
			-webkit-line-clamp: 1;
		}
	}
	.host {
		font-size: 14px;
	}
</style>
