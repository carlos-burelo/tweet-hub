<script lang="ts">
	import tweetStore from '#stores/tweetStore'
	import { tokenizer } from '#utils/highlight'

	let editor: HTMLDivElement

	function onWrite() {
		let caret = getSelection() as Selection & { modify: (...arg: string[]) => void }
		caret.extend(editor, 0)
		let position = caret.toString().length
		editor.innerHTML = tokenizer(editor.textContent || '', 'tw')
		while (position-- > 0) caret.modify('move', 'forward', 'character')
	}
</script>

<section class="container">
	<div
		contenteditable="true"
		placeholder="¿Que estas pensando?"
		bind:textContent={$tweetStore.text}
		bind:this={editor}
		on:keyup={onWrite}
	/>
</section>
