<script lang="ts">
	import GroupCard from '#/elements/groups/GroupCard.svelte'
	import SidebarWrapper from './SidebarSection.svelte'
	import UserCard from '#/elements/users/UserCard.svelte'
	import feedStore from '#stores/feedStore'
</script>

<div class="container">
	<aside>
		<SidebarWrapper title="A quien seguir?" more="/top">
			{#each $feedStore.users as user}
				<UserCard {user} />
			{/each}
		</SidebarWrapper>
		{#if $feedStore.groups.length > 0}
			<SidebarWrapper title="Unete a una comunidad">
				{#each $feedStore.groups as group}
					<GroupCard {group} />
				{/each}
			</SidebarWrapper>
		{/if}
	</aside>
</div>

<style lang="scss">
	.container {
		overflow: hidden;
		position: sticky;
		top: calc(var(--header-height) + 10px);
		height: calc(100vh - (var(--header-height) + 20px));
		border-radius: var(--mid-radius);
		@include md {
			display: none;
		}
	}
	aside {
		width: 100%;
		height: 100%;
		margin-top: 10px;
		overflow-y: scroll;
		border-radius: var(--mid-radius);
		display: grid;
		gap: 15px;
		@include custom-scrollbar;
		max-height: -webkit-fill-available;
	}
</style>
