<script>
  // @ts-nocheck
  import Fa from 'svelte-fa'
  import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
  import { invalidate } from '$app/navigation'
  import eventos from '$lib/data/eventos.yaml'
  import contacto from '$lib/data/contacto.yaml'
  import { formatEventTime, getLocationHead } from '$lib/utils'
  
  const time = Date.now()

	export let data;

  if (time > data.expires) {
    invalidate(`ts:${data.timestamp}`)
  }

</script>
<section>
	<h1 class="titulo-pagina">{eventos.titulo}</h1>
  <span style="display: none;">testing: {data.timestamp} ${data.expires} ${time > data.expires}</span>
  {#if data.events.length > 0}
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
          <Fa icon={faLocationDot} scale={1.1} translateY={0.35} style="vertical-align: top" />
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
  {:else}
    <p>{eventos.noHay}</p>
    <p class="contact-wrapper">
      <a class="cool-link" href="/contacto">{contacto.titulo}</a>
    </p>
  {/if}
</section>
<style>

  .contact-wrapper {
    text-align: center;
  }

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
