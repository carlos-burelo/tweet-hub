<script lang="ts">
	import { getActiveToken, tokenizer } from '#utils/text'
	import { users } from '#data/mocks/users'
	import UserList from '#components/global/user-list.svelte'

	let input: HTMLTextAreaElement
	let html: string = ''
	let text: string = ''
	let show: boolean = false
	let left: number = 0

	const handleInput = () => {
		const { value, selectionEnd = 0 } = input
		left = selectionEnd
		const { word } = getActiveToken(value, selectionEnd)
		const hasMention = /^@\w{1,15}$/.test(word)
		html = tokenizer(value)
		show = hasMention
		const mention = word.slice(1)
		if (show && mention.length > 0) {
			results = users.filter((user) => user.userName.includes(mention))
		} else {
			results = []
		}
	}
	const handleSelection = (user: string) => {
		const { value, selectionEnd = 0 } = input
		const { word, range } = getActiveToken(value, selectionEnd)
		const [index] = range
		const prefix = value.substring(0, index)
		const suffix = value.substring(index + word.length)
		const newValue = prefix + `@${user}` + suffix
		input.value = newValue
		html = tokenizer(newValue)
		input.focus()
		show = false
	}
	let results: any[]
</script>

<div class="container">
	<div class="render" placeholder="Que estas pensando?">
		{@html html}
	</div>
	<textarea
		bind:this={input}
		bind:value={text}
		on:keyup={handleInput}
		on:change={() => (html = input.value)}
	/>
	<UserList top={40} {left} {results} {show} {handleSelection} />
</div>

<style lang="scss">
	.container {
		max-height: 500px;
		min-height: 120px;
		position: relative;
	}
	textarea {
		height: 120px;
		color: transparent;
		cursor: text;
		caret-color: var(--foreground);
	}
	textarea,
	.render {
		-webkit-user-modify: read-write-plaintext-only;
		font-size: 17px;
		padding: 10px;
		font-weight: 400;
		line-height: 1.5;
		font-family: system-ui;
	}
	.render {
		text-rendering: optimizeSpeed;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 120px;
		color: var(--foreground);
		border-radius: var(--min-radius);
		z-index: -1;
	}
	[placeholder]:empty::before {
		content: attr(placeholder);
		color: var(--foreground);
	}

	[placeholder]:empty:focus::before {
		content: '';
	}
</style>
