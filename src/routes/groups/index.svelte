<script lang="ts">
	import GroupCard from '#/elements/groups/GroupCard.svelte'
	import Search from '#/global/Search.svelte'
	import Layout from '#/layout/Layout.svelte'
	import { fade } from 'svelte/transition'
	import { gql } from '#api/client'
	import { groupsQuery } from '#api/queries'
	import Loading from '#/global/Loading.svelte'
	import type { Group } from '#types'
	const data = gql.query<Group[]>(groupsQuery)
</script>

<svelte:head>
	<title>Grupos</title>
</svelte:head>

<Layout title="Grupos" sidebar={false}>
	<div class="header">
		<h1 class="title">Descubre una comunidad</h1>
		<div class="controls">
			<div class="search">
				<Search placeholder="Buscar grupo 🔍" />
			</div>
			<button class="btn">
				<div class="icon-btn">➕</div>
				<span class="text-btn">Nuevo grupo</span>
			</button>
		</div>
	</div>
	<section class="section">
		<h2 class="subtitle">✨ Grupos populares</h2>
		{#await data}
			<Loading />
		{:then response}
			<div class="groups" transition:fade>
				{#each response.groups as group}
					<GroupCard {group} />
				{/each}
			</div>
		{/await}
	</section>
	<section class="section">
		<h2 class="subtitle">🔏 Grupos privados</h2>
		{#await data}
			<Loading />
		{:then response}
			<div class="groups" transition:fade>
				{#each response.groups as group}
					<GroupCard {group} />
				{/each}
			</div>
		{/await}
	</section>
</Layout>

<style lang="scss">
	.groups {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
	}
	.section {
		margin-bottom: 20px;
	}
	.title {
		font-size: 30px;
		color: var(--primary-color);
		@include md {
			font-size: 22px;
		}
	}
	.subtitle {
		font-size: 20px;
		line-height: 2;
		@include md {
			font-size: 18px;
		}
	}
	.header {
		@include space-between;
		margin-bottom: 30px;
	}
	.controls {
		@include separe;
	}
	.btn {
		@include separe;
		@include sm {
			padding: 8px;
			.text-btn {
				display: none;
			}
		}
	}
</style>
