<script lang="ts">
	import Icons from '#components/utils/icon.svelte'
	export let to = ''
	export let title = ''
	const iconMap: { [k: string]: any } = {
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
			&:nth-child(4) {
				display: none;
			}
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
	}
	span {
		font-weight: 500;
		@include lg {
			display: none;
		}
	}
</style>
