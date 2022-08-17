<script lang="ts">
	import MediaPreview from '#/elements/media/MediaPreview.svelte'
	import TweetInputs from '#/elements/tweet/TweetInputs.svelte'
	import Avatar from '#/global/Avatar.svelte'
	import ContentField from '#/global/ContentField.svelte'
	import Button from '#/utils/Button.svelte'
	// import { gql } from '#api/client'
	// import { createTweetMutation } from '#api/mutations'
	import tweetStore from '#stores/tweetStore'
	import feedStore from '#stores/feedStore'
	// import type { Tweet } from '#types'

	let disabled: boolean
	tweetStore.subscribe(s => (disabled = s.text?.length == 0))
	async function postTweet() {
		// const response = await gql.mutation<Tweet>(createTweetMutation, {
		// text: $tweetStore.text || '',
		// authorId: '3whnETjC2TAuTWC5W8OD'
		// })
		tweetStore.setText('') // reset text
		// console.log(response)
		console.log('before', $feedStore)
		// feedStore.set([response.createTweet, ...$feedStore])
		console.log('after: ', $feedStore)
	}
</script>

<div class="container">
	<Avatar />
	<section>
		<ContentField />
		<MediaPreview />
		<div>
			<TweetInputs />
			<Button text="Publicar" {disabled} onClick={postTweet} />
		</div>
	</section>
</div>

<style lang="scss">
	.container {
		@include separe;
		align-items: flex-start;
	}
	section {
		@include full-content;
		display: grid;
		gap: 10px;
	}
	div {
		@include space-between;
	}
</style>
