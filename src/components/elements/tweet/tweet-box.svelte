<script lang="ts">
	import Avatar from '#components/global/avatar.svelte'
	import Button from '#components/utils/button.svelte'
	import tweetStore from '#stores/tweet-box-store'
	import TweetField from './tweet-field.svelte'
	import TweetInputs from './tweet-inputs.svelte'
	import TweetPreviews from './tweet-previews.svelte'
	let content: string = $tweetStore.text || ''
</script>

<section class="box">
	<div class="user">
		<Avatar size={40} />
	</div>
	<div class="content">
		<pre>{content}</pre>
		<TweetField />
		<TweetPreviews />
		<div class="handlers">
			<div class="input">
				<TweetInputs />
			</div>
			<Button text="Publicar" />
		</div>
	</div>
</section>

<style lang="scss">
	.box {
		border-bottom: 1px solid var(--border-color);
		margin-bottom: 10px;
		position: relative;
	}
	section {
		@include full-content;
		display: flex;
		gap: 10px;
	}
	.content {
		@include full-content;
		margin-bottom: 15px;
	}
	.handlers {
		margin-top: 15px;
		@include space-between;
	}
</style>
