<script lang="ts">
	import Avatar from '#/global/Avatar.svelte'
	import Icon from '#/utils/Icon.svelte'
	import type { IconSet } from '#data/icons'
	import { tokenizer } from '#utils/text'
	import type { NotificationI } from '#types'

	export let notification: NotificationI
	const { title, author, description, type, ref } = notification
	let iconMap: { [k: string]: IconSet } = {
		mention: 'person',
		like: 'heart',
		comment: 'message',
		retweet: 'load',
		recomendation: 'star'
	}
</script>

<a href={ref} class="card">
	<div class="type">
		<Icon id={iconMap[type]} />
	</div>
	<div class="account">
		<Avatar src={author.avatar} />
	</div>
	<div class="details">
		<div class="title">{@html tokenizer(title)}</div>
		<p class="description">
			{description}
		</p>
	</div>
</a>

<style lang="scss">
	.card {
		padding: 10px;
		align-items: center;
		@include separe;
	}
	.type,
	.account {
		min-width: 50px;
		@include center;
	}
	.type {
		font-size: 25px;
	}
	.description {
		font-size: 14px;
		@include text-wrap;
	}
</style>
