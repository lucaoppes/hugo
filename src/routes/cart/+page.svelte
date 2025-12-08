<!-- CART -->

<script>
	import { cart } from '$lib/sharedState.svelte';

	$inspect(cart);
</script>

<main>
	{#if cart.length === 0}
		<h1>Cart is Empty</h1>
	{:else}
		<h1>Cart:</h1>
		{#each cart as artefact}
			<article>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<div>
					<h2>{artefact.name}</h2>
					<p>${artefact.price}</p>
					<p>x{artefact.quantity}</p>
				</div>
			</article>
		{/each}
	{/if}
</main>

<style>
	main {
		width: 50%;
		margin: auto;
	}

	article {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.image {
		width: 100px;
		height: 100px;
	}
</style>
