<script>
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
	import { auth } from '#api/firebase'
	import { isLoggedIn, authStore } from '#stores/authStore'
	import { goto } from '$app/navigation'

	async function login() {
		try {
			const googleProvider = new GoogleAuthProvider()
			const { user } = await signInWithPopup(auth, googleProvider)
			$authStore = user
			$isLoggedIn = true
			goto('/')
		} catch (error) {
			console.error(error)
		}
	}
</script>

<button on:click={login}> Login with Google</button>
