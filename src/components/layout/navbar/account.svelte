<script>
	import Avatar from '#components/global/avatar.svelte'
	import Icon from '#components/utils/icon.svelte'
	import { user } from '#data/mocks/users'
</script>

<div class="account">
	<div class="user">
		<Avatar size={35} />
		<div class="data">
			<strong class="name">{user.name}</strong>
			<p class="username">{user.userName}</p>
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
		font-size: 14px;
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
