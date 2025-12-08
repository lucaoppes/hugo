<!-- LAYOUT -->

<script>
	import favicon from '/favicon.svg';
	import './layout.css';
	import { page } from '$app/state';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="{base}/" aria-current={page.url.pathname === `${base}/`}>HOME</a>
	<a href="{base}/artefacts" aria-current={page.url.pathname === `${base}/artefacts`}>ARTEFACTS</a>
	<a href="{base}/cart" aria-current={page.url.pathname === `${base}/cart`}>CART</a>
</nav>

{@render children()}

<style>
	nav {
		display: flex;
		justify-content: center;
		padding: 1rem;
		gap: 1rem;
		margin-bottom: 3rem;
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
</style>
