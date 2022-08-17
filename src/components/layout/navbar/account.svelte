<script>
	import Avatar from '#/global/Avatar.svelte'
	import Icon from '#/utils/Icon.svelte'
	import { auth } from '#api/firebase'
	import { user } from '#mocks/users'
	import { authStore } from '#stores/authStore'
	// console.log($authStore)
</script>

<div class="account">
	<div class="user">
		<Avatar src={user.avatar} size={35} />
		<div class="data">
			<strong class="name">{user.name}</strong>
			<p class="username">@{user.handle}</p>
		</div>
	</div>
	<div class="more">
		<Icon id="more" />
	</div>
</div>

<style lang="scss">
	.account {
		display: flex;
		align-items: center;
		justify-content: space-between;
		@include lg {
			justify-content: center;
		}
		@include sm {
			display: none;
		}
	}
	.user {
		display: flex;
		gap: 10px;
	}
	.data {
		display: block;
	}
	.name {
		font-size: 15px;
	}
	.username {
		line-height: 1em;
		color: var(--text);
		// font-size: 14px;
	}
	.name,
	.username {
		@include text-wrap(1);
		max-width: 90%;
	}
	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px;
		cursor: pointer;
		border-radius: var(--round);
		&:hover {
			background-color: var(--primary-trasnlucent);
			color: var(--primary-color);
		}
	}
	.data,
	.more {
		@include lg {
			display: none;
		}
	}
</style>
