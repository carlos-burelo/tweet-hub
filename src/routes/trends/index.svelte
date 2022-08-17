<script lang="ts">
	import TrendCard from '#/elements/trends/TrendCard.svelte'
	import Menu from '#/global/Menu.svelte'
	import Wrapper from '#/layout/Layout.svelte'
	import type { MenuLink, Trend } from '#types'
	import { fade } from 'svelte/transition'
	import trendStore from '#stores/trendStore'
	export let trends: Trend[] = []
	trendStore.set(trends)
	const menu: MenuLink[] = [
		{
			name: 'Tendencias',
			to: '/trends?q=all',
			defaultPath: '/trends'
		},
		{
			name: 'Desarrollo',
			to: '/trends?q=development'
		},
		{
			name: 'Memes',
			to: '/trends?q=memes'
		},
		{
			name: 'Otros',
			to: '/trends?q=other'
		}
	]
</script>

<svelte:head>
	<title>Tendencias</title>
</svelte:head>

<Wrapper title="Tendencias">
	<div slot="menu" class="menu">
		<Menu items={menu} />
	</div>
	<div class="trends" transition:fade>
		{#each $trendStore as trend}
			<TrendCard {trend} />
		{/each}
	</div>
</Wrapper>

<style lang="scss">
	.menu {
		position: sticky;
		top: var(--header-height);
		@include header-styles;
		z-index: var(--z-navigation);
	}
</style>
