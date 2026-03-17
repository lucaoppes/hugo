<!-- CART -->

<script>
	import { cart } from '$lib/sharedState.svelte';
	import { dimensionInputs } from '$lib/artefactsList';

	let checkout = $state(true);
	let dimension = $state();

	function submitForm() {
		const value = dimensionInputs.find((value) => value.input == dimension);

		if (value) {
			window.open(value.destination);
		}
	}
</script>

<main>
	{#if checkout}
		<form onsubmit={submitForm}>
			<input required type="text" placeholder="First Name" />
			<input required type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<input required type="text" placeholder="Dimension" bind:value={dimension} />
			<button onclick={() => (checkout = false)}>Back</button>
			<button type="submit">Purchase</button>
		</form>
	{:else if cart.length === 0}
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
			<button onclick={() => (checkout = true)}>Checkout</button>
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
	}

	h1 {
		color: gold;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	input {
		padding: 1rem;
	}

	@media only screen and (max-width: 700px) {
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
