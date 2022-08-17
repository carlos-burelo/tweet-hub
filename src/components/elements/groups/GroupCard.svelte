<script lang="ts">
	import Avatar from '#/global/Avatar.svelte'
	import MemberCount from '#/global/MemberCount.svelte'
	import type { Group } from '#types'
	export let group: Group
	const { handle, name, cover, avatar, members, type } = group
</script>

<a class="card" href="/groups/{handle}">
	<div class="banner">
		<img src={cover} alt={name} loading="lazy" />
	</div>
	<div class="data">
		<div class="avatar">
			<Avatar src={avatar} border active />
		</div>
		<div class="details">
			<h3 class="name">{name}</h3>
			<div class="info">
				<p class="type">
					{type === 'private' ? '🔒 Privado' : '🌐 Publico'}
				</p>
				<MemberCount count={members.length} />
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	.banner {
		height: 130px;
		margin-bottom: 10px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.card {
		cursor: pointer;
		padding: 10px;
		position: relative;
		&:hover {
			background-color: var(--background-card);
		}
	}
	.avatar {
		top: 0px;
		padding: 20px;
		left: 0;
		position: absolute;
	}
	.info {
		@include space-between;
	}
	.info .type,
	.info {
		font-size: 14px;
	}
	.name {
		font-weight: 600;
		@include text-wrap(1);
	}
</style>
