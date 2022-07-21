<script lang="ts">
	import Icon from '#components/utils/icon.svelte'
</script>

<div class="box">
	<input type="search" placeholder="Buscar en tweetHub" />
	<div class="icon">
		<Icon id="search" />
	</div>
</div>

<style lang="scss">
	.box {
		position: relative;
		--height: 34px;
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
		background-color: var(--background-card);
	}
</style>
