<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const click = () => {
    dispatch('click', {})
  }
</script>
<div class="icon-button"
  on:click={() => click()}
  on:keyup={() => click()}
>
  <slot />
</div>
<style>
  .icon-button {
    display: inline-block;
  }
</style>
