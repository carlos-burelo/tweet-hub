<script lang="ts">
	import { users } from '#mocks/users'
	import { tokenizer } from '#utils/code'
	import Avatar from '#/global/Avatar.svelte'
	import { getActiveToken } from '#utils/text'
	import tweetStore from '#stores/tweetStore'

	export let content = ''
	let editor: HTMLDivElement
	let readonly = ''
	let show = false
	let position = 0
	let selected = 0
	let list: HTMLUListElement

	function onWrite() {
		let { anchorOffset: caretPosition } = getSelection() as Selection
		position = caretPosition
		const { word } = getActiveToken(content, caretPosition)
		const hasMention = /^@\w{1,15}$/.test(word)
		readonly = tokenizer(content || '', 'tw')
		show = hasMention && word.length > 1
		tweetStore.setText(editor.textContent || '')
		console.log('Cordenadas de la card: ', list.getBoundingClientRect())
	}
	function onSelect(mentioned: string) {
		const { word, range } = getActiveToken(content, position)
		const [index] = range
		const prefix = editor.textContent?.substring(0, index)
		const suffix = editor.textContent?.substring(index + word.length)
		const newValue = prefix + `@${mentioned}` + suffix
		editor.textContent = newValue
		readonly = tokenizer(newValue || '', 'tw')
		editor.focus()
		const newRange = getSelection()
		const lastLine = editor.textContent.length
		newRange?.collapse(editor.childNodes[editor.childNodes.length - 1], lastLine)
		show = false
	}
</script>

<div class="box">
	<div
		class="render"
		contenteditable="true"
		bind:innerHTML={readonly}
		placeholder="¿Que estas pensando?"
		on:drop|preventDefault
	/>
	<div
		class="input"
		contenteditable="true"
		bind:textContent={content}
		bind:this={editor}
		on:input|preventDefault={onWrite}
		on:drop|preventDefault
	/>
	{#if show}
		<ul bind:this={list}>
			{#each users as user, index}
				<li class:active={selected === index} on:click={() => onSelect(user.handle)}>
					<div class="image">
						<Avatar src={user.avatar} size={35} />
					</div>
					<div class="data">
						<div class="name">{user.name}</div>
						<p class="handle">@{user.handle}</p>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.box {
		background-color: var(--background-card);
		position: relative;
		border-radius: var(--min-radius);
		min-height: 100px;
	}
	.render,
	.input {
		padding: 10px;
		font-size: 17px;
	}
	.render {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		user-select: none;
		z-index: -1;
		:global(i) {
			font-style: normal;
			color: var(--primary-color);
		}
		&:empty:before {
			content: attr(placeholder);
			pointer-events: none;
			display: block; /* For Firefox */
			color: var(--text);
		}
		:global(i) {
			font-family: inherit;
			font-weight: inherit;
		}
	}
	.input {
		position: relative;
		color: transparent;
		caret-color: #ffffff;
	}
	ul {
		max-width: 250px;
		display: grid;
		gap: 5px;
		position: absolute;
		left: 0;
		top: 110%;
		z-index: var(--z-float);
		padding: 10px;
		background-color: var(--background);
	}
	.data {
		div,
		p {
			line-height: 1.3;
			font-size: 14px;
		}
		div {
			font-weight: 600;
		}
	}
	li {
		@include separe;
		padding: 5px 10px;
		cursor: pointer;
		&.active,
		&:hover {
			background-color: var(--background-card);
		}
	}
</style>
