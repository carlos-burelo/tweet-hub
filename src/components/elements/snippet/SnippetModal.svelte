<script lang="ts">
	import Modal from '#/global/Modal.svelte'
	import SnippetEditor from './SnippetEditor.svelte'
	export let onClose: () => void
</script>

<Modal title="Escriba un snippet" {onClose}>
	<SnippetEditor />
</Modal>
