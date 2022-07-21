<script lang="ts">
	import Avatar from '#components/global/avatar.svelte'
	import type { Group } from '#types'
	export let group: Group
</script>

<article>
	<div class="banner">
		<img src={group.banner} alt={group.name} />
	</div>
	<div class="data">
		<div class="avatar">
			<Avatar src={group.image} border active />
		</div>
		<div class="details">
			<h3 class="name">{group.name}</h3>
			<div class="info">
				<p class="type">
					{group.type === 'private' ? '🔒 Privado' : '🌐 Publico'}
				</p>
				<p class="members">
					{group.members.length}
					{group.members.length > 1 ? 'Miembros' : 'Miembro'}
				</p>
			</div>
		</div>
	</div>
</article>

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
	article {
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
	.info .members {
		font-size: 14px;
	}
	.name {
		font-weight: 600;
	}
</style>
