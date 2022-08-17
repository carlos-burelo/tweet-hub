<script>
	export let title = 'input 1'
	export let id = 'input'
	export let placeholder = 'input 1'
	let value = '😃'
</script>

<div class="field">
	<label for={id}>{title}</label>
	<input type="text" bind:value {placeholder} />
</div>

<style lang="scss">
	input {
		@include full-content;
	}
</style>
