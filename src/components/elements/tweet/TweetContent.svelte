<script lang="ts">
	import LinkPreview from '#/global/LinkPreview.svelte'
	import PollCard from '../polls/PollCard.svelte'
	import TweetMediaView from './views/TweetMediaView.svelte'
	import TweetTextView from './views/TweetTextView.svelte'
	import type { Entities, Content } from '#types'

	export let entities: Entities
	export let content: Content
	let { media, markup, poll } = content
	let { urls } = entities
	let hasItems = (!!media && media?.length > 0) || (!!urls && urls?.length > 0) || !!poll
</script>

<section class="content-area">
	{#if markup}
		<TweetTextView {markup} other={hasItems} />
	{/if}
	{#if media && media.length > 0}
		<TweetMediaView {media} />
	{/if}
	{#if poll}
		<PollCard {poll} />
	{/if}
	{#if entities && urls && urls.length > 0}
		<LinkPreview url={urls[0]} />
	{/if}
</section>
