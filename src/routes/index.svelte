<script>
	import Wrapper from '#components/layout/wrapper.svelte'
	import { tweets } from '#data/mocks/tweets'
	import TweetBox from '#components/elements/tweet/tweet-box.svelte'
	import TweetCard from '#components/elements/tweet/tweet-card.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Wrapper>
	<section class="container">
		<section class="feed">
			<TweetBox />
			{#each tweets as tweet}
				<TweetCard {tweet} />
			{/each}
		</section>
	</section>
</Wrapper>
