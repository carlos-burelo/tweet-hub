<script lang="ts">
	import Avatar from '#/global/Avatar.svelte'
	import Name from '#/global/Name.svelte'
	import Username from '#/global/UserName.svelte'
	import Icon from '#/utils/Icon.svelte'
	import TweetActions from './TweetActions.svelte'
	import TweetContent from './TweetContent.svelte'
	import type { Tweet } from '#types'
	import TimeAgo from '#/global/TimeAgo.svelte'

	export let tweet: Tweet
	let {
		author: { handle, name, avatar },
		content,
		entities
	} = tweet
</script>

<article class="tweet">
	<div class="user">
		<Avatar src={avatar} size={40} />
	</div>
	<section class="content">
		<div class="head">
			<div class="user-info">
				<Name {name} />
				<Username {handle} />
				<TimeAgo time={tweet.createdAt} />
			</div>
			<a href={'/tw/' + tweet.id} class="view">
				<Icon id="more" />
			</a>
		</div>
		<div class="render">
			<TweetContent {content} {entities} />
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
