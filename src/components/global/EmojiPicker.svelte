<script lang="ts">
	import Icon from '#/utils/Icon.svelte'
	import { faces } from '#data/emojis'
	export let onClose: (e?: string) => void
</script>

<div class="container">
	<div class="head">
		<div class="info">
			<h1>Emoji Picker</h1>
			<button class="close" on:click={() => onClose()}>
				<Icon id="close" />
			</button>
		</div>
		<div class="categories">
			<button>😃</button>
			<button>🏞️</button>
			<button>🍔</button>
			<button>🏃</button>
			<button>🚄</button>
			<button>💿</button>
			<button>#️⃣</button>
			<button>🌐</button>
		</div>
	</div>
	<div class="content">
		{#each faces as emoji}
			<div class="emoji" on:click={() => onClose(emoji)} title="Agregar {emoji}">
				{emoji}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 500px;
		max-height: 400px;
		padding: 10px;
		border: solid 1px var(--border-color);
		border-radius: var(--min-radius);
		overflow-y: scroll;
		position: absolute;
		z-index: var(--z-float);
		@include custom-scrollbar;
		top: 100%;
		background-color: var(--background);
	}
	.head {
		padding-bottom: 10px;
		border-bottom: solid 1px var(--border-color);
		position: sticky;
		top: 0;
		@include header-styles;
	}
	.info {
		@include space-between;
	}
	.categories {
		display: flex;
		gap: 5px;
		button {
			font-size: 17px;
			padding: 8px;
			height: 33px;
			width: 33px;
		}
	}
	button,
	.emoji {
		&:hover {
			background-color: var(--background-card-hvr);
		}
	}
	.content {
		margin-top: 10px;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		word-wrap: break-word;
		gap: 5px;
	}
	.emoji {
		cursor: pointer;
		@include center;
		height: 33px;
		width: 33px;
		font-size: 17px;
		padding: 8px;
		border-radius: var(--min-radius);
	}
	.close {
		padding: 8px;
	}
</style>
