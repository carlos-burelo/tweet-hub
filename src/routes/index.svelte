<script lang="ts">
	import TweetForm from '#/elements/forms/TweetForm.svelte'
	import TweetCard from '#/elements/tweet/TweetCard.svelte'
	import Loading from '#/global/Loading.svelte'
	import Layout from '#/layout/Layout.svelte'
	import { fade } from 'svelte/transition'
	import feedStore from '#stores/feedStore'
	import type { User, Group, Tweet } from '#types'

	// export let tweets: Tweet[] = []
	// export let groups: Group[] = []
	// export let users: User[] = []
	import { tweets } from '#mocks/tweets'
	import { groups } from '#mocks/groups'
	import { users } from '#mocks/users'

	feedStore.set({ users, groups, tweets })
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Layout>
	<section class="container">
		<TweetForm />
		<section class="feed" transition:fade>
			{#if $feedStore.tweets.length === 0}
				<Loading />
			{:else}
				{#each $feedStore.tweets as tweet}
					<TweetCard {tweet} />
				{/each}
			{/if}
		</section>
	</section>
</Layout>

<style>
	.container {
		display: grid;
		grid-template-rows: auto 1fr;
	}
	.feed {
		margin-top: 20px;
	}
</style>
