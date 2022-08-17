<script lang="ts">
	import { tokenizer } from '#utils/highlight'

	let editor: HTMLDivElement

	function onWrite() {
		let caret = getSelection() as Selection & { modify: (...arg: string[]) => void }
		caret.extend(editor, 0)
		let position = caret.toString().length
		editor.innerHTML = tokenizer(editor.textContent || '', 'ts')
		while (position-- > 0) caret.modify('move', 'forward', 'character')
	}
</script>

<section class="container">
	<div contenteditable="true" bind:this={editor} on:keyup={onWrite} />
</section>

<style>
	div {
		min-height: 450px;
	}
</style>
