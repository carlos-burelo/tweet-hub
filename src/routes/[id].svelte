<script lang="ts">
	import { gql } from '#api/client'
	import { userInfoQuery } from '#api/queries'
	import InfoHeader from '#/elements/info/InfoHeader.svelte'
	import TweetCard from '#/elements/tweet/TweetCard.svelte'
	import Loading from '#/global/Loading.svelte'
	import Menu from '#/global/Menu.svelte'
	import Layout from '#/layout/Layout.svelte'
	import type { MenuLink, User } from '#types'
	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'
	let id = $page.params.id
	let menu: MenuLink[] = [
		{
			name: 'Tweets',
			to: '/' + id + '?tab=tweets',
			defaultPath: '/' + id
		},
		{
			name: 'Respuestas',
			to: '/' + id + '?tab=replies'
		},
		{
			name: 'Fotos',
			to: '/' + id + '?tab=photos'
		},
		{
			name: 'Me gusta',
			to: '/' + id + '?tab=likes'
		}
	]

	let data = gql.query<User>(userInfoQuery, { id })
</script>

<svelte:head>
	{#await data then { user }}
		<title>{user.name}</title>
	{/await}
</svelte:head>

{#await data}
	<Loading />
{:then { user }}
	<Layout title={user.name} back>
		<div class="user" transition:fade>
			<InfoHeader data={user} />
			<section class="menu">
				<Menu items={menu} />
			</section>
			<div class="tweets">
				{#each user.tweets as tweet}
					<TweetCard {tweet} />
				{/each}
			</div>
		</div>
	</Layout>
{/await}

<style>
	.menu,
	.tweets {
		margin-top: 20px;
	}
</style>
