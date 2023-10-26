<script>
  // @ts-nocheck
  import Fa from 'svelte-fa'
  import { faLocationPin, faClock } from '@fortawesome/free-solid-svg-icons';
  import eventos from '$lib/data/eventos.yaml'
  import { formatEventTime, getLocationHead } from '$lib/utils'
  
	export let data;

</script>
<section>
	<h1 class="titulo-pagina">{eventos.titulo}</h1>
  <p>{eventos.descripcion}</p>
  <ul class="contactos lista-estrella">
    {#each data.events as event}
      <li>
        <h3>{event.titulo}</h3>
        <Fa icon={faClock} scale={1.1} translateY={0.35} style="vertical-align: top" />
        <span class="post-icon">
          {#each formatEventTime(event) as part, index}
            {#if index > 0}
              <br class="mobile-only" />
            {/if}
            <span>{part}</span>
          {/each}
        </span>
        <br>
        <Fa icon={faLocationPin} scale={1.1} translateY={0.35} style="vertical-align: top" />
        <a
          target="blank"
          class="post-icon cool-link"
          href={`https://maps.google.com/?q=${event.ubicacion}`}
        >
          {getLocationHead(event.ubicacion)}
        </a>
        {#if event.descripcion}
          <p>{event.descripcion}</p>
        {/if}
      </li>
    {/each}
  </ul>
</section>
<style>

  .post-icon {
    display: inline-block;
    margin-left: 10px;
  }

  a.cool-link {
    color: black;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }

</style>
