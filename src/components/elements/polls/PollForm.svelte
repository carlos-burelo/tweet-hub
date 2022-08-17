<script lang="ts">
	import Button from '#/utils/Button.svelte'
	import Icon from '#/utils/Icon.svelte'
	import type { OptionInput, Poll } from '#types'

	export let onSubmit: () => void
	let options: OptionInput[] = [{ title: 'Opcion 1' }]
	let question = ''

	const add = () => (options = [...options, { title: '' }])
	const remove = (index: number) => (options = options.filter((_, i) => i !== index))
	const create = () => {
		const poll: Poll = {
			question,
			options: options.map(op => ({ title: op.title, id: '111', votes: [], value: 0 }))
		}
		console.log(poll)
		onSubmit()
	}
</script>

<div class="container">
	<h3>Pregunta</h3>
	<input type="text" bind:value={question} placeholder="Titulo de la encuesta" />
	<h3>Opciones</h3>
	<div class="options">
		{#each options as option, index}
			<div class="field">
				<input bind:value={option.title} placeholder="Opcion {index + 1}" />
				<button class="remove" on:click={() => remove(index)}>
					<Icon id="close" />
				</button>
			</div>
		{/each}
	</div>
	<div class="footer">
		<button on:click={add}> Agregar opción </button>
		<Button text="Crear encuesta" onClick={create} />
	</div>
</div>

<style lang="scss">
	input {
		font-weight: 600;
		letter-spacing: 0.5px;
	}
	.footer {
		@include space-between;
		margin-top: 20px;
	}
	.options {
		display: grid;
		gap: 8px;
	}
	.options,
	h3 {
		margin-top: 10px;
	}
	h3 {
		font-size: 16px;
	}
	.field {
		position: relative;
	}
	.remove {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		padding-inline: 10px;
	}
</style>
