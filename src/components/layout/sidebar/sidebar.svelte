<script>
	import GroupCard from '#components/elements/groups/group-card.svelte'
	import SidebarWrapper from './sidebar-wrapper.svelte'
	import { groups } from '#data/mocks/groups'
</script>

<aside>
	<SidebarWrapper title="Unete a una comunidad">
		{#each groups as group}
			<GroupCard {group} />
		{/each}
	</SidebarWrapper>
	<SidebarWrapper title="A quien seguir?">
		{#each groups as group}
			<GroupCard {group} />
		{/each}
	</SidebarWrapper>
</aside>

<style lang="scss">
	aside {
		width: 100%;
		height: calc(100vh - (var(--header-height) + 20px));
		position: sticky;
		top: calc(var(--header-height) + 10px);
		margin-top: 10px;
		@include custom-scrollbar;
		overflow-y: scroll;
		border-radius: var(--mid-radius);
		display: grid;
		gap: 15px;
		@include md {
			display: none;
		}
	}
</style>
