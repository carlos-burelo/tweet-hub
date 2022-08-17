<script lang="ts">
	import Icons from '#/utils/Icon.svelte'
	import type { IconSet } from '#data/icons'

	export let to = ''
	export let title = ''
	const iconMap: { [k: string]: IconSet } = {
		'/': 'home',
		'/trends': 'trends',
		'/notifications': 'notifications',
		'/lists': 'lists',
		'/inbox': 'inbox',
		'/groups': 'groups'
	}
</script>

<li>
	<a href={to}>
		<Icons id={iconMap[to]} />
		<span>{title}</span>
	</a>
</li>

<style lang="scss">
	li {
		width: fit-content;
		@include sm {
			width: 100%;
		}
	}
	a {
		display: flex;
		gap: 10px;
		align-items: center;
		padding: 8px 15px;
		border-radius: var(--min-radius);
		@include lg {
			height: 46px;
		}
		@include sm {
			width: 100%;
			justify-content: center;
		}
		&:hover {
			background-color: var(--background-card);
		}
	}
	span {
		font-weight: 500;
		@include lg {
			display: none;
		}
	}
</style>
