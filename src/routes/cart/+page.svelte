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
		{#each cart as artefact, index}
			<article>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<div>
					<h2>{artefact.name}</h2>
					<p>${artefact.price}</p>
					<button
						class="quantityAdjust"
						onclick={() => (artefact.quantity == 1 ? null : artefact.quantity--)}>-</button
					>

					<p id="quantity">x{artefact.quantity}</p>
					<button class="quantityAdjust" onclick={() => artefact.quantity++}>+</button>

					<button id="remove" onclick={() => cart.splice(index, 1)}>Remove</button>
				</div>
			</article>
		{/each}
		<h1>Total is ${cart.reduce((accum, value) => accum + value.price * value.quantity, 0)}</h1>
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
		width: 104px;
		height: 104px;
	}

	.quantityAdjust {
		font-size: 0.75rem;
		padding: 0.25rem;
		width: 1.5rem;
		height: 1.5rem;
	}

	#quantity {
		display: inline;
		padding: 0.25rem;
	}

	#remove {
		display: block;
		font-size: 0.75rem;
		margin-top: 0.25rem;
	}
</style>
