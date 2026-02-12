<!-- CART -->

<script>
	import { cart } from '$lib/sharedState.svelte';

	// $inspect(cart);
</script>

<main>
	{#if cart.length === 0}
		<h1>Cart is Empty</h1>
	{:else}
		<!-- <h1>Cart:</h1> -->
		{#each cart as artefact, index}
			<article>
				<button id="remove" onclick={() => cart.splice(index, 1)}>X</button>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<div id="information">
					<h2>{artefact.title}</h2>
					<div id="priceAndQuantity">
						<p>${artefact.price}</p>
						<div>
							<button
								class="quantityAdjust"
								onclick={() => (artefact.quantity == 1 ? null : artefact.quantity--)}>-</button
							>
							<p id="quantity">x{artefact.quantity}</p>
							<button class="quantityAdjust" onclick={() => artefact.quantity++}>+</button>
						</div>
					</div>
				</div>
			</article>
		{/each}
		<h1>
			Total is ${cart.reduce((accum, value) => accum + value.price * value.quantity, 0).toFixed(2)}
		</h1>
	{/if}
</main>

<style>
	main {
		width: 50rem;
		margin: auto;
	}

	article {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		margin-bottom: 1rem;
		background-color: #492b48;
		border-radius: 1rem;
		padding: 1rem;
		width: 25rem;
		min-height: 8rem;
	}

	.image {
		width: 104px;
		height: auto;
	}

	.quantityAdjust {
		font-size: 0.75rem;
		padding: 0.25rem;
		width: 1.5rem;
		height: 1.5rem;
	}

	#information {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 100%;
	}

	#priceAndQuantity {
		display: flex;
		flex-direction: row;
		margin-top: auto;
		justify-content: space-between;
	}

	#quantity {
		display: inline;
	}

	#remove {
		margin-top: -1rem;
		margin-bottom: -1rem;
		margin-left: -1rem;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	h1 {
		color: gold;
	}

	@media only screen and (max-width: 600px) {
		main {
			width: 100%;
			padding: 0.5rem;
		}

		article {
			width: 100%;
		}

		.image {
			width: 150px;
			height: auto;
		}
	}
</style>
