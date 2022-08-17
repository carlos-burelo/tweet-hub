<script lang="ts">
	import Modal from '#/global/Modal.svelte'
	import PollForm from './PollForm.svelte'

	export let onClose: () => void
</script>

<Modal title="Crea una encuesta" {onClose}>
	<PollForm onSubmit={onClose} />
</Modal>
