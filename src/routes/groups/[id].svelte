<script lang="ts">
	import Layout from '#/layout/Layout.svelte'
	import { page } from '$app/stores'
	import Menu from '#/global/Menu.svelte'
	import InfoHeader from '#/elements/info/InfoHeader.svelte'
	import Loading from '#/global/Loading.svelte'
	import { gql } from '#api/client'
	import type { MenuLink, Group } from '#types'
	import { groupQuery } from '#api/queries'
	let id = $page.params.id
	let menu: MenuLink[] = [
		{
			name: 'Tweets',
			to: '/groups/' + id + '?tab=tweets',
			defaultPath: '/groups/' + id
		},
		{
			name: 'Miembros',
			to: '/groups/' + id + '?tab=members'
		},
		{
			name: 'Encuestas',
			to: '/groups/' + id + '?tab=events'
		},
		{
			name: 'Fotos',
			to: '/groups/' + id + '?tab=photos'
		}
	]
	const data = gql.query<Group>(groupQuery, { handle: id })
</script>

<svelte:head>
	{#await data then { group }}
		<title>{group.name}</title>
	{/await}
</svelte:head>

{#await data}
	<Loading />
{:then { group }}
	<Layout title={group.name} back>
		<InfoHeader data={group} />
		<section class="menu">
			<Menu items={menu} />
		</section>
	</Layout>
{/await}

<style>
	.menu {
		margin-top: 20px;
	}
</style>
