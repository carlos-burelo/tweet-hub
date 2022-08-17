<script lang="ts">
	export let text = ''
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let disabled = false
	type Handler = (() => void) | undefined
	export let onClick: Handler = () => console.log('click')
</script>

<button class={size} {disabled} on:click={onClick}>
	{text}
</button>

<style>
	button {
		background-color: var(--primary-color);
	}
</style>
