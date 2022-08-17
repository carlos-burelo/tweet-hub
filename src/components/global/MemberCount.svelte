<script lang="ts">
	export let count = 0
	let suffix: string = count === 1 ? ' miembro' : ' miembros'
</script>

<p class="members">
	👥 {count}
	{suffix}
</p>
