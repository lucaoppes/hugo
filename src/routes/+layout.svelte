<!-- LAYOUT -->

<script>
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import title from '$lib/assets/hmpLogo.png';
	import { randomTexts } from '$lib/artefactsList';

	let { children } = $props();

	function randomValue() {
		return randomTexts[Math.floor(Math.random() * randomTexts.length)];
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>
	<enhanced:img src={title} alt="" />
</div>

<div id="random-text">{randomValue()}</div>

<nav>
	<a href="{base}/" aria-current={page.url.pathname === `${base}/`}>HOME</a>
	<a href="{base}/artefacts" aria-current={page.url.pathname === `${base}/artefacts`}>ARTEFACTS</a>
	<a href="{base}/cart" aria-current={page.url.pathname === `${base}/cart`}>CART</a>
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

	a[aria-current='true'] {
		text-decoration: underline;
	}

	div {
		width: 400px;
		margin: auto;
	}

	img {
		width: inherit;
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
