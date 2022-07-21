<script lang="ts">
	import BrandLogo from './brand-logo.svelte'

	export let url: string
	const { hostname } = new URL(url)
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
	<div class="preview">
		<BrandLogo />
	</div>
	<div class="data">
		<h3 class="title">Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>
		<p class="description">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eaque velit officia
			accusantium sequi molestiae cupiditate! Quaerat ipsa minus sunt.
		</p>
		<p class="host">🔗 {hostname}</p>
	</div>
</a>

<style lang="scss">
	a {
		display: grid;
		grid-template-columns: 0.9fr 3fr;
		background-color: var(--background-card);
		border-radius: var(--min-radius);

		@include sm {
			grid-template-columns: 1.2fr 3fr;
		}
	}
	.preview {
		background-color: var(--background-card);
		border-radius: var(--min-radius);
		@include center;
		font-size: 60px;
		color: var(--text);
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
		@include sm {
			-webkit-line-clamp: 1;
		}
	}
	.description {
		font-size: 14px;
		@include text-wrap;
		line-height: 1.6;
		@include sm {
			line-height: 1.4;
		}
	}
	.host {
		font-size: 14px;
	}
</style>
