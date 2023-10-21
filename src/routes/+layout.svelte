<script>
	import IconButton from '../components/IconButton.svelte'
	import IconClose from 'carbon-icons-svelte/lib/Close.svelte'
	import IconMenu from 'carbon-icons-svelte/lib/Menu.svelte'
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import nav from '$lib/data/nav.yaml'
	import './styles.scss';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	let reveal = false

	const toggleNav = (open = !reveal) => {
		reveal = open
	}

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
	<header>
		<div class="material flex-spread">
			<h1 class="title">{nav.titulo}</h1>
			<nav class={reveal ? 'reveal' : 'hide'}>
				<div class="flex-spread mobile-only">
					<h1 class="title">{nav.titulo}</h1>
					<div class="icon-container">
						<IconButton on:click={() => toggleNav(false)}>
							<IconClose class="nav-icon" />
						</IconButton>
					</div>
				</div>
				<ul>
					{#each nav.navigacion as navItem}
						<li aria-current={($page.url.pathname === navItem.url )? 'true' : undefined}>
							<a href={navItem.url} on:click={() => toggleNav(false)}>{navItem.titulo}</a>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="nav-reveal mobile-only icon-container">
				<IconButton on:click={() => toggleNav(true)}>
					<IconMenu class="nav-icon" />
				</IconButton>
			</div>
		</div>
	</header>
	<main>
		<div class="material">
			<slot />
		</div>
	</main>
	<!-- <footer>
		<div class="material">
			<p>Llama <b>{contacto.numero}</b> para contactar {contacto.nombre} por una lectura</p>
		</div>
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		max-width: 600px;
		min-height: 100vh;
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
