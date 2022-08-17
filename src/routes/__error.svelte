<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ error, status }) => {
		return {
			props: {
				title: `Error ${status}`,
				error
			}
		}
	}
</script>

<script lang="ts">
	import BrandLogo from '#/global/Logo.svelte'
	import Layout from '#/layout/Layout.svelte'
</script>

<svelte:head>
	<title>Page not found</title>
</svelte:head>

<Layout title="Pagina no encontrada">
	<div class="container">
		<div class="logo">
			<BrandLogo />
		</div>
		<div class="main">
			<h2>404</h2>
			<h1>Page not found</h1>
			<p>The page you are looking for does not exist.</p>
		</div>
	</div>
</Layout>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		gap: 15px;
	}
	.logo {
		color: var(--foreground-rose);
		font-size: 120px;
	}
	h1 {
		color: var(--foreground-rose);
	}
	h2 {
		font-size: 30px;
	}
</style>
