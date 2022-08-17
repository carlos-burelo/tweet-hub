<script lang="ts">
	import type { Poll } from '#types'
	import { scale } from 'svelte/transition'
	export let poll: Poll
	let { options, question } = poll
	let selected = '0'
	type OnChangeEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement
	}
	function vote(e: OnChangeEvent) {
		selected = e.currentTarget.value
	}
	console.log(selected)
</script>

<article>
	<h3>{question}</h3>
	<section class="bars">
		{#each options as { title, count, id }}
			<label class="bg">
				<input checked={selected == id} type="radio" name="opts" value={id} on:change={vote} />
				<div class="fg" class:selected={selected == id} style="width: {count}%" transition:scale />
				<div class="head">
					<p class="label">{title}</p>
					<p class="percent">{count}%</p>
				</div>
			</label>
		{/each}
	</section>
</article>

<style lang="scss">
	.bars {
		display: grid;
		gap: 15px;
		margin-top: 15px;
	}
	.bg {
		width: 100%;
		height: 40px;
		position: relative;
		cursor: pointer;
		z-index: 1;
	}
	.head {
		width: 100%;
		padding-inline: 10px;
		font-size: 18px;
		height: 100%;
		@include space-between;
	}
	p {
		color: var(--foreground);
		z-index: 3;
	}

	input {
		cursor: pointer;
		@include absolute-position;
		opacity: 0;
	}
	.fg {
		height: 100%;
		@include absolute-position;
		z-index: 2;
		transition: 300ms ease-in-out background-color;
	}

	.bg,
	.fg {
		background-color: var(--background-card);
		border-radius: var(--min-radius);
	}
	.selected {
		background-color: var(--primary-color);
	}
</style>
