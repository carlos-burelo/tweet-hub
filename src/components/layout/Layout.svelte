<script lang="ts">
	import Header from './header/Header.svelte'
	import Navbar from './navbar/Navbar.svelte'
	import Sidebar from './sidebar/Sidebar.svelte'
	export let title = 'Inicio'
	export let sidebar = true
	export let back = false
</script>

<div class="layoutContainer">
	<Navbar />
	<section class="layoutContent">
		<Header {title} backButton={back} />
		<section class="container" class:grid={sidebar}>
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
	</section>
</div>

<style lang="scss">
	.layoutContainer {
		display: grid;
		grid-template-columns: var(--nav-width) 1fr;
		padding-inline: var(--layout-padding);
	}
	.layoutContent {
		width: 100%;
		@include sm {
			padding-bottom: calc(var(--header-height) + 20px);
		}
	}

	.grid {
		display: grid;
		grid-template-columns: var(--grid-cols);
		gap: 20px;
	}
	.container {
		width: 100%;
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
