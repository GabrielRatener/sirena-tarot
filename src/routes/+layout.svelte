<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import nav from '$lib/data/nav.json'
	import contacto from '$lib/data/contacto.json'
	import './styles.scss';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}

	$: currentNavItem = nav.navigacion.find((nav) => nav.url === $page.url.pathname)

</script>
<svelte:head>
	<title>{nav.descripcion} - {currentNavItem?.titulo}</title>
	<meta name="description" content={currentNavItem?.descripcion} />
</svelte:head>
<div class="app">
	<nav>
		<ul>
			{#each nav.navigacion as navItem}
				<li aria-current={($page.url.pathname === navItem.url )? 'true' : undefined}>
					<a href={navItem.url}>{navItem.titulo}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<main>
		<slot />
	</main>
	<footer>
		<p>Llama <b>{contacto.numero}</b> para contactar {contacto.nombre} por una lectura</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
