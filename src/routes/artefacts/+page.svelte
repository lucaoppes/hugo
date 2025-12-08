<!-- ARTEFACTS -->

<script>
	import { cart } from '$lib/sharedState.svelte';
	import flow from '$lib/assets/flow.jpg';

	const artefacts = $state([
		{ id: 1, name: 'Product 1', image: flow, price: 10 },
		{ id: 2, name: 'Product 2', image: flow, price: 20 },
		{ id: 3, name: 'Product 3', image: flow, price: 10 },
		{ id: 4, name: 'Product 4', image: flow, price: 20 },
		{ id: 5, name: 'Product 5', image: flow, price: 10 },
		{ id: 6, name: 'Product 6', image: flow, price: 20 },
		{ id: 7, name: 'Product 7', image: flow, price: 10 },
		{ id: 8, name: 'Product 8', image: flow, price: 20 },
		{ id: 9, name: 'Product 9', image: flow, price: 10 }
	]);

	function addToCart(item) {
		if (!cart.length) {
			cart.push({ ...item, quantity: 1 });
			return;
		}

		let elementFound = false;

		cart.forEach((value, index) => {
			if (value.id == item.id) {
				value.quantity += 1;
				elementFound = true;
			}

			if (!elementFound && index + 1 == cart.length) {
				cart.push({ ...item, quantity: 1 });
			}
		});
	}

	$inspect(cart);
</script>

<main>
	<h1>Please have a look at our selection of delectable artefacts:</h1>
	<div id="artefacts">
		{#each artefacts as artefact}
			<article>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<h1>{artefact.name}</h1>
				<div class="info">
					<p>${artefact.price}</p>
					<button onclick={() => addToCart(artefact)}> Add to Cart</button>
				</div>
			</article>
		{/each}
	</div>
</main>

<style>
	main {
		width: 50%;
		margin: auto;
	}

	h1 {
		margin-bottom: 2rem;
	}

	#artefacts {
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.image {
		width: 200px;
		height: 200px;
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.25rem;
	}
</style>
