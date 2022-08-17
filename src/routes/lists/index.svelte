<script lang="ts">
	import ListCard from '#/elements/lists/ListCard.svelte'
	import Layout from '#/layout/Layout.svelte'
	import listStore from '#stores/listStore'
	import type { List } from '#types'
	import { fade } from 'svelte/transition'
	export let lists: List[] = []
	listStore.set(lists)
</script>

<Layout title="Listas" back>
	<div class="lists" transition:fade>
		{#each $listStore as list}
			<ListCard {list} />
		{/each}
	</div>
</Layout>
