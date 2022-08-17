<script lang="ts">
	import Avatar from '#/global/Avatar.svelte'
	import MemberCount from '#/global/MemberCount.svelte'
	import type { Info } from '#types'

	export let data: Info
	let avatarSize = 120
	let defaults = data.members ? 'Unirse' : 'Seguir'
	let dateMsg = data.members ? 'Creado hace' : 'Se unió hace'
	let buttonMessage: string = defaults
</script>

<header class="container">
	<section class="cover" style="background-image: url({data.cover});" />
	<div class="info">
		<div class="avatar">
			<Avatar src={data.avatar} size={avatarSize} border active />
		</div>
		<div class="details">
			<div class="meta">
				<h1 class="title">{data.name}</h1>
				<p class="description">{data.description}</p>
			</div>
			<button class="action">{buttonMessage}</button>
		</div>
		<div class="data">
			{#if data.website}
				🌐 <a class="website" href={data.website}>{new URL(data.website).host}</a>
			{/if}
			{#if data.members}
				<MemberCount count={data.members.length} />
			{/if}
			<p class="date">
				📅 {dateMsg}
				{data.createdAt}
			</p>
		</div>
	</div>
</header>

<style lang="scss">
	.container {
		--avatar-height: 120px;
	}
	.container,
	.info {
		position: relative;
	}
	.data {
		margin-top: 20px;
		@include separe;
	}
	.cover {
		height: 240px;
		border-radius: var(--min-radius);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		@include md {
			height: 200px;
		}
	}
	.website {
		color: var(--primary-color);
	}
	.avatar {
		position: absolute;
		transform: translateY(-50%);
		background-color: var(--background);
		border-radius: var(--round);
		left: 20px;
		@include center;
	}
	.details {
		padding-top: 10px;
		margin-left: calc(var(--avatar-height) + 40px);
		@include space-between;
		@include md {
			margin-left: 0;
			padding-top: calc(var(--avatar-height) / 2 + 10px);
		}
	}
	.title {
		font-size: 25px;
		@include md {
			font-size: 20px;
		}
	}
	.title,
	.description {
		@include text-wrap(1);
	}
	.meta {
		max-width: 70%;
	}
	.action {
		@include md {
			position: absolute;
			top: 20px;
			right: 20px;
		}
	}
</style>
