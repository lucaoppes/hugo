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
	<h1>Please have a look at our selection of delectable artefacts:</h1>
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions, a11y_no_static_element_interactions -->
	<div id="artefacts">
		{#each artefacts as artefact, index (artefact.id)}
			<article onclick={() => selectArtefact(index)}>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<h1 id="title">{artefact.title}</h1>
				<!-- <button onclick={() => artefact.dialog.showModal()}>Open</button> -->

				<div class="info">
					<p>${artefact.price}</p>
					<button onclick={(e) => addToCart(e, artefact)}> Add to Cart</button>
				</div>
			</article>
		{/each}
	</div>

	{#if showModal}
		<ArtefactModal {currentlySelected} bind:showModal />
	{/if}
</main>

<style>
	main {
		width: 60%;
		margin: auto;
	}

	h1 {
		margin-bottom: 2rem;
	}

	article {
		width: 15rem;
		height: 25rem;
		/* background-color: black; */
		padding: 0.5rem;
		align-items: center;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

	article:hover {
		box-shadow: 0.5rem 0.5rem 3rem #833097;
	}

	#artefacts {
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.image {
		height: 200px;
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
</style>
