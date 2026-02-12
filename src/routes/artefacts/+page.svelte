<!-- ARTEFACTS -->
<script>
	import { cart } from '$lib/sharedState.svelte';
	import { artefacts } from '$lib/artefactsList';
	import ArtefactModal from './artefactModal.svelte';

	let showModal = $state(false);
	let currentlySelected = $state();

	function addToCart(e, item) {
		e.stopPropagation();

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

	function selectArtefact(index) {
		currentlySelected = artefacts[index];
		showModal = true;
	}

	// $inspect(currentlySelected);
	// $inspect(cart);
</script>

<main>
	<!-- <h1>Please have a look at our selection of delectable artefacts:</h1> -->
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions, a11y_no_static_element_interactions -->
	<div id="artefacts">
		{#each artefacts as artefact, index (artefact.id)}
			<article onclick={() => selectArtefact(index)}>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<h1 id="title">{artefact.title}</h1>
				<!-- <button onclick={() => artefact.dialog.showModal()}>Open</button> -->

				<div class="info">
					<p>
						${artefact.price.toFixed(2)}
						{#if !artefact.available}
							<span>(SOLD OUT)</span>
						{/if}
					</p>
					<button disabled={!artefact.available} onclick={(e) => addToCart(e, artefact)}>
						Add to Cart</button
					>
				</div>
			</article>
		{/each}
	</div>

	{#if showModal}
		<ArtefactModal {currentlySelected} bind:showModal {addToCart} />
	{/if}
</main>

<style>
	main {
		width: 70%;
		margin: auto;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
	}

	article {
		width: 18rem;
		height: 25rem;
		/* background-color: black; */
		padding: 1rem;
		align-items: center;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		background-color: #492b48;
		border-radius: 1rem;
	}

	article:hover {
		box-shadow: 0.5rem 0.5rem 3rem #491755;
	}

	#artefacts {
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.image {
		height: 200px;
		width: auto;
		margin-bottom: 0.5rem;
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
		width: 100%;
	}

	p > span {
		display: block;
		color: rgb(173, 17, 17);
	}

	@media only screen and (max-width: 600px) {
		main {
			width: 100%;
			padding: 0.5rem;
		}

		article {
			width: 100%;
			height: fit-content;
		}

		.image {
			width: 100%;
			height: auto;
		}
	}
</style>
