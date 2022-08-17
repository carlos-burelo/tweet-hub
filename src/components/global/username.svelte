<script lang="ts">
	export let handle = 'unknown'
</script>

<a href={handle} class="link">@{handle}</a>

<style lang="scss">
	.link {
		line-height: 1;
		font-size: 1em;
		cursor: pointer;
		color: var(--text);
	}
</style>
