<script lang="ts">
	import TweetCard from '#/elements/tweet/TweetCard.svelte'
	import Loading from '#/global/Loading.svelte'
	import Layout from '#/layout/Layout.svelte'
	import { gql } from '#api/client'
	import { tweetQuery } from '#api/queries'
	import { page } from '$app/stores'
	import type { Tweet } from '#types'

	let id = $page.params.id
	const data = gql.query<Tweet>(tweetQuery, { id })
</script>

<svelte:head>
	{#await data then { tweet }}
		<title>{tweet.author.name}</title>
	{/await}
</svelte:head>

{#await data}
	<Loading />
{:then { tweet }}
	<Layout title={tweet.author.name} back>
		<div class="tweet">
			<TweetCard {tweet} />
		</div>
	</Layout>
{/await}
