<script>
  // @ts-nocheck
  import Fa from 'svelte-fa'
  import { faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
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
        <Fa icon={faClock} scale={1.1} />
        <span class="post-icon">{formatEventTime(event.dias, event.start, event.end)}</span>
        <br/>
        <Fa icon={faMapPin} scale={1.1} />
        <a target="blank" class="post-icon cool-link" href={`https://maps.google.com/?q=${event.ubicacion}`}>{getLocationHead(event.ubicacion)}</a>
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

  a.post-icon {
    color: black;
    
  }

</style>
