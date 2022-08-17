<script lang="ts">
	import Icon from '#/utils/Icon.svelte'
	// import { gql } from '#api/client'
	// export let id: string
	async function like() {
		// const res = await gql.mutation(
		// 	`like(id: $id){
		// 		id
		// 	}`,
		// 	{ id }
		// )
		// console.log(res)
	}
</script>

<div class="actions">
	<button class="blue"><Icon id="comment" /></button>
	<button class="green"><Icon id="retweet" /></button>
	<button on:click={like} class="rose"><Icon id="like" /></button>
	<button class="blue"><Icon id="share" /></button>
</div>

<style lang="scss">
	.actions {
		margin-top: 10px;
		@include column-grid(4, 10px);
	}
	button {
		padding: 10px 20px;
		color: var(--text);
		font-size: 16px;
		&:hover,
		&:focus {
			&.blue {
				background-color: var(--background-blue);
				color: var(--foreground-blue);
			}
			&.green {
				background-color: var(--background-green);
				color: var(--foreground-green);
			}
			&.rose {
				background-color: var(--background-rose);
				color: var(--foreground-rose);
			}
		}
	}
</style>
