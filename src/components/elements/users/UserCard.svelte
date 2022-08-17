<script lang="ts">
	import Avatar from '#/global/Avatar.svelte'
	import UserName from '#/global/UserName.svelte'
	import type { User } from '#types'

	export let user: User
	const { name, handle, avatar } = user
</script>

<div class="card">
	<div class="body">
		<Avatar src={avatar} />
		<div class="data">
			<h5 class="title">{name}</h5>
			<UserName {handle} />
		</div>
	</div>
	<button>Follow</button>
</div>

<style lang="scss">
	.card {
		@include space-between;
		padding: 10px;
		&:hover {
			background-color: var(--background-card);
		}
	}
	.title {
		line-height: 1;
		font-size: 14px;
	}
	.body {
		@include middle;
		gap: 10px;
	}
</style>
