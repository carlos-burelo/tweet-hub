<script>
	import NavLink from './NavLink.svelte'
	import BrandLogo from '../../global/Logo.svelte'
	import Account from './Account.svelte'
</script>

<nav>
	<div class="logo">
		<BrandLogo />
	</div>
	<ul>
		<NavLink to="/" title="Inicio" />
		<NavLink to="/trends" title="Tendiencias" />
		<NavLink to="/notifications" title="Notificaciones" />
		<NavLink to="/lists" title="Listas" />
		<NavLink to="/groups" title="Grupos" />
	</ul>
	<Account />
</nav>

<style lang="scss">
	nav {
		top: 0;
		position: sticky;
		display: grid;
		height: var(--nav-height);
		width: var(--nav-width);
		align-content: space-around;
		justify-content: start;
		background-color: var(--background);
		z-index: var(--z-navigation);
		@include lg {
			justify-content: center;
		}
		@include sm {
			border-top: solid 1px var(--border-color);
			align-items: center;
			justify-content: normal;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			top: inherit;
		}
	}
	ul {
		display: grid;
		gap: 15px;
		@include sm {
			width: 100%;
			grid-template-columns: repeat(5, 1fr);
		}
	}
	.logo {
		font-size: 40px;
		height: 50px;
		width: 50px;
		@include lg {
			@include center;
			font-size: 35px;
		}
		@include sm {
			display: none;
		}
	}
</style>
