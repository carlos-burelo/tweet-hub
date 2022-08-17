<script lang="ts">
	import { user } from '#mocks/users'

	export let size = 40
	export let border = false
	export let active = false
	export let src: string = user.avatar
</script>

<img
	{src}
	loading="eager"
	alt="avatar"
	class={border ? 'border' : ''}
	style="outline-color: {active
		? 'var(--primary-color)'
		: 'trasnparent'}; width: {size}px;height: {size}px;"
/>

<style>
	img {
		object-fit: cover;
		border-radius: 50%;
	}
	.border {
		outline: 2px solid var(--foreground);
	}
</style>
