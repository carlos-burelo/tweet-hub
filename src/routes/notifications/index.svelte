<script lang="ts">
	import NotificationCard from '#/elements/notifications/NotificationCard.svelte'
	import Menu from '#/global/Menu.svelte'
	import Layout from '#/layout/Layout.svelte'
	import notificationStore from '#stores/notificationStore'
	import type { MenuLink, NotificationI } from '#types'
	import { fade } from 'svelte/transition'
	const menu: MenuLink[] = [
		{
			name: 'Todas',
			to: '/notifications?q=all',
			defaultPath: '/notifications'
		},
		{
			name: 'Menciones',
			to: '/notifications?q=mentions'
		}
	]
	export let notifications: NotificationI[] = []
	notificationStore.set(notifications)
</script>

<svelte:head>
	<title>Notificaciones</title>
</svelte:head>

<Layout title="Notificaciones">
	<div class="menu" slot="menu">
		<Menu items={menu} />
	</div>
	<div class="notifications" transition:fade>
		{#each $notificationStore as notification}
			<NotificationCard {notification} />
		{/each}
	</div>
</Layout>

<style lang="scss">
	.menu {
		position: sticky;
		top: var(--header-height);
		@include header-styles;
		z-index: var(--z-navigation);
	}
</style>
