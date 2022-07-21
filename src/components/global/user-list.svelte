<script lang="ts">
	import Avatar from '#components/global/avatar.svelte'
	import Username from './username.svelte'

	export let top: number = 0
	export let left: number = 0
	export let results: any[] = []
	export let show: boolean = false
	export let handleSelection = (user: string) => {}
</script>

{#if show && results.length > 0}
	<ul style="top: {top}px; left: {left > 35 ? 35 : left}ch">
		{#each results as user}
			<li on:click={() => handleSelection(user.userName)}>
				<Avatar src={user.avatar} size={30} />
				<div class="info">
					<span>{user.name}</span>
					<Username username={user.userName} />
				</div>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	ul {
		position: absolute;
		left: 0px;
		width: 100%;
		max-width: 220px;
		border-radius: 0.5rem;
		background-color: rgba(17, 24, 39, 1);
	}
	li {
		padding: 8px;
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		&:hover {
			background-color: var(--background-card);
		}
	}
	.info {
		display: flex;
		flex-direction: column;
	}
</style>
