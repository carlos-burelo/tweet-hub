<script lang="ts">
  export let text: string = ''
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let disabled = false
</script>

<button class={size} {disabled}>
  {text}
</button>

<style>
  button {
    background-color: var(--primary-color);
  }
</style>
