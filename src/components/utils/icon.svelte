<script lang="ts">
	import { icons, type IconSet } from '#shared/data/icons'
	export let id: IconSet = 'logo'
	const Icon = icons[id as 'logo']
</script>

<div class="icon">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
		{@html Icon}
	</svg>
</div>

<style lang="scss">
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1em;
		height: 1em;
		color: currentColor;
		svg {
			fill: currentColor;
		}
	}
</style>
