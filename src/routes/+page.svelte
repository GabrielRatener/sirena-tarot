<script>
	import servicios from '$lib/data/servicios.yaml'

</script>

<section>
	<h1 class="titulo-pagina">{servicios.titulo}</h1>
	<p>{servicios.descripcion}</p>
	<ul class="lista-estrella">
		{#each servicios.servicios as servicio}
			<li>
				<h3>{servicio.titulo}</h3>
				<p>
					${20 * servicio.precio} pesos Mexicanos
					<br/>
					o ${servicio.precio} dollares Americanos
				</p>
				<p>{servicio.descripcion}</p>
			</li>
		{/each}
	</ul>
</section>

<style>

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
