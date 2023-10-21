<script>
	import bio from '$lib/data/bio.yaml'

</script>
<section>
	<h1 class="titulo-pagina">{bio.titulo}</h1>
	<p>{bio.descripcion}</p>
	{#each bio.secciones as seccion}
		<div class="seccion">
			<h3>{seccion.titulo}</h3>
			<p>{seccion.descripcion}</p>
		</div>
	{/each}
</section>
