<script lang="ts">
	import Icon from '#/utils/Icon.svelte'
	export let placeholder = 'Buscar en tweetHub'
</script>

<div class="box">
	<input type="search" {placeholder} />
	<div class="icon">
		<Icon id="search" />
	</div>
</div>

<style lang="scss">
	.box {
		position: relative;
		--height: 34px;
		border-radius: var(--min-radius);
	}
	input {
		padding-left: calc(var(--height) + 10px);
		border-radius: var(--min-radius);
		color: var(--foreground);
	}
	.icon {
		@include absolute-position;
		@include center;
		height: 100%;
		width: var(--height);
		border-radius: var(--min-radius);
		background-color: var(--background-card);
		cursor: pointer;
		transition: 300ms ease-in-out background-color;
		&:hover {
			background-color: var(--background-card-hvr);
		}
	}
</style>
