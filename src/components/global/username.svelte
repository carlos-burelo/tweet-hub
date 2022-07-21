<script lang="ts">
	export let username: string = 'unknown'
</script>

<span>@{username}</span>

<style>
	span {
		line-height: 1;
		font-size: 14px;
		color: var(--text);
	}
</style>
