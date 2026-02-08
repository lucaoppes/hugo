<script>
	import Zoom from 'svelte-medium-image-zoom';
	import '$lib/zoomStyles.css';
	let dialog = $state();
	let { showModal = $bindable(), currentlySelected, addToCart } = $props();

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	<div id="content">
		<Zoom>
			<enhanced:img class="image2" src={currentlySelected.image} alt="" />
		</Zoom>
		<div id="information">
			<div>
				<h1>{currentlySelected.title}</h1>
				<h3>{currentlySelected.subTitle}</h3>
				<div><b>ORIGIN:</b> {currentlySelected.origin}</div>
			</div>
			<div>{currentlySelected.description}</div>
			<div id="buttonAndPrice">
				${currentlySelected.price}
				<button onclick={(e) => addToCart(e, currentlySelected)}> Add to Cart</button>
			</div>
		</div>
	</div>
</dialog>

<style>
	.image2 {
		width: 20rem;
		margin: auto 0;
	}

	dialog {
		width: 64rem;
		border: none;
		padding: 0;
		margin: auto;
		background-color: #ffe8f8;
		transition: all 0.2s;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	#content {
		display: flex;
		flex-direction: row;
		padding: 1rem;
		gap: 1rem;
	}

	#information {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
	}

	#information * {
		margin: 0;
	}

	#buttonAndPrice {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
	}
</style>
