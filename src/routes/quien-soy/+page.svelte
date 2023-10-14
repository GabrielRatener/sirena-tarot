<script>
	import bio from '$lib/data/bio.json'
</script>
<div class="text-column">
	<h1>{bio.descripcion}</h1>

	{#each bio.secciones as seccion}
		<div class="seccion">
			<h3>{seccion.titulo}</h3>
			<p>{seccion.descripcion}</p>
		</div>
	{/each}
</div>
