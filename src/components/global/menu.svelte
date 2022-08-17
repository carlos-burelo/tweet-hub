<script lang="ts">
	import { page } from '$app/stores'
	import type { MenuLink } from '#types'
	export let items: MenuLink[] = []

	$: ({
		url: { pathname, search }
	} = $page)
	$: fullUrl = pathname + search
	export let onChange: (path: string) => void = onClick
	function onClick(path: string) {
		console.log(path)
	}
</script>

<div class="menu">
	{#each items as { name, to, defaultPath }}
		<a
			on:click={() => onChange(name)}
			href={to}
			class:active={to === fullUrl || defaultPath === fullUrl || to === pathname}
		>
			{name}
		</a>
	{/each}
</div>

<style lang="scss">
	.menu {
		display: flex;
		height: var(--header-height);
		scroll-padding: 0 36px;
		overflow-x: auto;
		-ms-scroll-snap-type: x mandatory;
		scroll-snap-type: x mandatory;
		overflow-y: hidden;
		flex-wrap: nowrap;
		flex-shrink: 1;
		flex-grow: 1;
		flex-direction: row;
		padding-block: 5px;
		border-bottom: solid 1px var(--border-color);
		gap: 10px;
	}
	a {
		@include center;
		flex-grow: 1;
		border-radius: var(--min-radius);
		font-weight: 500;
		background-color: var(--background-color);
		&:hover,
		&.active {
			background-color: var(--background-blue);
			color: var(--foreground-blue);
		}
	}
</style>
