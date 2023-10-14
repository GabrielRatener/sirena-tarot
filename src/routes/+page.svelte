<script>
	import servicios from '$lib/data/servicios.json'
</script>

<section>
	<h1>{servicios.descripcion}</h1>
	<ul class="lista-estrella">
		{#each servicios.servicios as servicio}
			<li>
				<h5>{servicio.titulo}</h5>
				<span>${servicio.precio}</span>
				<p>{servicio.descripcion}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

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
