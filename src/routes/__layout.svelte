<script lang="ts">
	import '../shared/styles/global.scss'
	import { onAuthStateChanged } from 'firebase/auth'
	import { auth } from '#api/firebase'
	import { authStore } from '#stores/authStore'

	onAuthStateChanged(auth, state => {
		$authStore = state
	})
</script>

<slot />
