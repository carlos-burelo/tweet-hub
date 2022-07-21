<script lang="ts">
	import { user } from '#data/mocks/users'
	export let size: number = 40
	export let border: boolean = false
	export let active: boolean = false
	export let src: string = user.image
	const styles = `
    max-width: ${size}px;
    max-height: ${size}px; 
    border-radius: 50%;
    outline-color: ${active ? 'var(--primary-color)' : 'trasnparent'};
  `
</script>

<img {src} width={size} height={size} alt="avatar" class={border ? 'border' : ''} style={styles} />

<style>
	.border {
		outline: 2px solid var(--foreground);
	}
</style>
