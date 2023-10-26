<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  // @ts-ignore
  const click = (e) => {
    e.stopPropagation()

    dispatch('click', {})
  }

</script>
<button class="icon-button"
  on:click={(e) => click(e)}
  on:keyup={(e) => click(e)}
>
  <slot />
</button>
<style>
  .icon-button {
    display: inline-block;
    background-color: transparent;
    border-width: 0px;
    outline: none;
  }
</style>
