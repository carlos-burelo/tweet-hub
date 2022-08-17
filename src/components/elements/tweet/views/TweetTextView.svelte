<script lang="ts">
	export let markup = ''
	export let other = false
	let text = markup.replace(/<\/?[^>]+(>|$)/g, '')
	let type = text.length < 50 && !other
</script>

<p class={type ? 'short' : 'large'} bind:innerHTML={markup} contenteditable="false" />

<style lang="scss">
	p {
		color: var(--foreground);
		border-radius: var(--mid-radius);
		:global(mark),
		:global(a) {
			color: var(--primary-color);
		}
		:global(a:hover) {
			text-decoration: underline;
		}
	}
	.short {
		min-height: 300px;
		background-color: var(--background-card);
		padding: 10px;
		font-size: 30px;
		line-height: 1.3;
		text-align: center;
		@include center;
		@include full-content;
	}
	.large {
		font-size: 18px;
		padding-block: 5px;
	}
</style>
