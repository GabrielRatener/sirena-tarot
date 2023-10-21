<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  // @ts-ignore
  const click = (e) => {
    e.stopPropagation()
    e.preventDefault()

    dispatch('click', {})
  }
</script>
<div class="icon-button"
  on:click={(e) => click(e)}
  on:keyup={(e) => click(e)}
>
  <slot />
</div>
<style>
  .icon-button {
    display: inline-block;
  }
</style>
