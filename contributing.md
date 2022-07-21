# COMPONENT STYLE GUIDE

```svelte
<script lang="ts"> // lang by default
  export let foo = 1; // the props must have a default value
  export let foobar:SomeObject // the object props may not have a default value
  $: ({foo, bar} = foobar) // the props may be passed in as an object
</script>
```
