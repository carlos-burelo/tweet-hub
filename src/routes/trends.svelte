<script lang="ts">
	import TrendCard from '#components/elements/trends/trend-card.svelte'
	import Menu from '#components/global/menu.svelte'
	import Wrapper from '#components/layout/wrapper.svelte'
	import { trends } from '#mocks/trends'
	const menu = [
		{
			name: 'Tendencias',
			to: '/trends?q=all'
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

<Wrapper title="Tendencias">
	<div slot="menu" class="menu">
		<Menu items={menu} />
	</div>
	{#each trends as trend}
		<TrendCard {trend} />
	{/each}
</Wrapper>

<style lang="scss">
	.menu {
		position: sticky;
		top: var(--header-height);
		@include header-styles;
		z-index: var(--z-navigation);
	}
</style>
