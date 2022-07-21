<script lang="ts">
	import Navbar from '#components/layout/navbar/navbar.svelte'
	import '../app.scss'
</script>

<div class="container">
	<Navbar />
	<section class="content">
		<slot />
	</section>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: var(--nav-width) 1fr;
		padding-inline: var(--layout-padding);
	}
	.content {
		width: 100%;
		@include sm {
			padding-bottom: calc(var(--header-height) + 20px);
		}
	}
</style>
