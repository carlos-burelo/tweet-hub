<script lang="ts">
	import Avatar from '#/global/Avatar.svelte'
	import Username from '#/global/UserName.svelte'
	import type { List } from '#types'
	export let list: List
	const { author, id, image, pinned, title } = list
	const { handle, avatar, name } = author
</script>

<a href="/lists/{id}" class="card">
	<div class="data">
		<img class="image" src={image} alt="banner" loading="lazy" />
		<div class="info">
			<h2 class="title">{title}</h2>
			<div class="user">
				<Avatar size={20} src={avatar} />
				<div class="name">{name}</div>
				<Username {handle} />
			</div>
		</div>
	</div>
	<div class="pinned">{pinned ? '📌' : '➕'}</div>
</a>

<style lang="scss">
	.card {
		@include space-between;
		padding: 10px;
	}
	.data,
	.user {
		@include middle;
		gap: 10px;
	}
	.image {
		width: 70px;
		height: 70px;
		object-fit: cover;
	}
	.title {
		font-size: 16px;
	}
</style>
