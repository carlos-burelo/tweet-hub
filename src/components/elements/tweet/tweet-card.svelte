<script lang="ts">
	import Avatar from '#components/global/avatar.svelte'
	import Name from '#components/global/name.svelte'
	import Username from '#components/global/username.svelte'
	import Icon from '#components/utils/icon.svelte'
	import type { Tweet } from '#types'
	import TweetActions from './tweet-actions.svelte'
	import TweetContent from './tweet-content.svelte'
	export let tweet: Tweet
	let { author, content } = tweet
</script>

<article class="tweet">
	<div class="user">
		<Avatar size={40} />
	</div>
	<section class="content">
		<div class="head">
			<div class="user-info">
				<Name name={author.name} />
				<Username username={author.userName} />
			</div>
			<a href={'/tweet/' + tweet.id} class="view">
				<Icon id="more" />
			</a>
		</div>
		<div class="render">
			<TweetContent text={content.text} media={content.media} />
		</div>
		<TweetActions />
	</section>
</article>

<style lang="scss">
	.tweet {
		display: flex;
		gap: 10px;
		max-height: 500px;
		margin-bottom: 15px;
	}
	.head {
		@include space-between;
		margin-block: 8px;
	}
	.user {
		min-width: 40px;
	}
	.user-info {
		@include middle;
		gap: 10px;
	}
	.content {
		@include full-content;
	}
	.render {
		margin-top: 10px;
	}
	.view {
		@include center;
		padding: 3px;
		border-radius: var(--min-radius);
		cursor: pointer;
		&:hover {
			background-color: var(--background-blue);
			color: var(--foreground-blue);
		}
	}
</style>
