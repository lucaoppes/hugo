<!-- LAYOUT -->

<script>
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import title from '$lib/assets/hmpLogo.png?enhanced&w=400';
	import { randomTexts } from '$lib/artefactsList';
	import { onMount } from 'svelte';
	let { children } = $props();
	import SecretsDialog from '$lib/components/secretsDialog.svelte';
	import theEverything from '$lib/home/theEverything.png?enhanced&w=1500';
	import { addedToCart, cart } from '$lib/sharedState.svelte';

	let showModal = $state(false);

	function randomText() {
		return randomTexts[Math.floor(Math.random() * randomTexts.length)];
	}

	onMount(() => {
		const el = document.getElementById('everything');

		if (el) {
			el.addEventListener('click', () => {
				showModal = true;
			});
			el.style.color = 'gold';
			el.style.cursor = 'pointer';
		}
	});

	$inspect(addedToCart);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SecretsDialog src={theEverything} bind:showModal />

<div>
	<enhanced:img src={title} alt="" fetchpriority="high" />
</div>

<div id="random-text">
	{@html randomText()}
</div>

<nav>
	<a href="{base}/" aria-current={page.url.pathname === `${base}/`}>HOME</a>
	<a href="{base}/artefacts" aria-current={page.url.pathname === `${base}/artefacts`}>ARTEFACTS</a>
	<a href="{base}/cart"
		><span aria-current={page.url.pathname === `${base}/cart`}>CART</span><sup
			>{cart.reduce((accum, value) => accum + value.quantity, 0)}</sup
		></a
	>
</nav>

{@render children()}

<style>
	#random-text {
		text-align: center;
		font-size: 1.5rem;
		margin: 0.5rem auto;
	}

	nav {
		display: flex;
		justify-content: center;
		padding: 1rem;
		gap: 1rem;
		background-color: #492b48;
		max-width: 50rem;
		margin: 0 auto 2rem auto;
	}

	a {
		text-decoration: none;
		color: white;
		font-weight: bolder;
		font-size: 1.5rem;
	}

	[aria-current='true'] {
		text-decoration: underline;
	}

	div {
		width: 400px;
		margin: auto;
	}

	picture {
		width: inherit;
	}

	img {
		width: inherit;
		height: auto;
	}

	@media only screen and (max-width: 700px) {
		div {
			width: 100%;
		}

		nav {
			width: 100%;
		}
	}
</style>
