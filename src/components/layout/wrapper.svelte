<script lang="ts">
	import Header from './header/header.svelte'
	import Sidebar from './sidebar/sidebar.svelte'
	export let title = 'Inicio'
	export let sidebar: boolean = true
</script>

<Header {title} />
<section class="container">
	<div class="main">
		{#if $$slots.menu}
			<slot name="menu" class="open-menu" />
		{/if}
		<div class="content">
			<slot />
		</div>
	</div>
	{#if sidebar}
		<Sidebar />
	{/if}
</section>

<style lang="scss">
	.container {
		width: 100%;
		grid-template-columns: var(--grid-cols);
		display: grid;
		gap: 20px;
		@include md {
			justify-content: center;
		}
	}
	.main {
		padding: var(--content-padding);
	}
	.content {
		margin-top: 20px;
	}
</style>
