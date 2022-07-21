<script lang="ts">
	import Icon from '#components/utils/icon.svelte'
	import Search from '#components/global/search.svelte'
	export let title: string = 'Inicio'
	export let backButton: boolean = false
</script>

<header class="container">
	<div class="main">
		<div class="head">
			{#if backButton}
				<a class="back" href="/">
					<Icon id="back" />
				</a>
			{/if}
			<span class="title">
				{title}
			</span>
		</div>
		<button class="action">
			<Icon id="config" />
		</button>
	</div>
	<div class="search">
		<Search />
	</div>
</header>

<style lang="scss">
	.container {
		padding-inline: 10px;
		height: var(--header-height);
		background-color: var(--background-translucent);
		backdrop-filter: blur(10px);
		position: sticky;
		top: 0;
		width: 100%;
		align-items: center;
		display: grid;
		grid-template-columns: var(--grid-cols);
		gap: 20px;
		z-index: var(--z-navigation);
		@include md {
			justify-content: center;
		}
	}
	.search {
		@include full-content;
		padding-block: 10px;
		@include md {
			display: none;
		}
	}
	.main {
		@include space-between;
	}
	.head {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.title {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
	}
	.back {
		width: calc(var(--header-height) - 15px);
		height: calc(var(--header-height) - 15px);
		border-radius: var(--round);
		font-size: 20px;
		margin-right: 15px;
		padding: 6px;
		background-color: transparent;
		&:hover {
			background-color: var(--background-card);
		}
	}
	.action {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 20px;
		background-color: transparent;
		width: calc(var(--header-height) - 15px);
		height: calc(var(--header-height) - 15px);
	}
</style>
