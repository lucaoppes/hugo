<!-- ARTEFACTS -->

<script>
	import { cart } from '$lib/sharedState.svelte';
	import flow from '$lib/assets/flow.jpg';
	import horaceHorizon from '$lib/assets/horaceHorizon.png';
	import palsSeason1 from '$lib/assets/palsSeason1.png';
	import jAlmie from '$lib/assets/jAImie.png';
	import { base } from '$app/paths';

	const artefacts = $state([
		{
			id: 1,
			dialog: null,
			title: 'Horace Horizon',
			subTitle: 'He never stops sucking!',
			origin: `Sphere 28354 'Earth 17'`,
			description: `Tired of dull everyday vaccums needing to be "emptied" and "plugged in"? Well don't look back! Horace (event) Horizon is the only vaccum you'll ever need. Equipt with a state of the art miniature black hole inside, Horace sucks up anything and everything! Literally! Can't quite reach that weird part in your living room thats between a piece of furniture and the corner of the room? Well Horace will suck up the furniture itself! And the wall! Obstacles shmobstacles! It's all nothing to the infinite power of the singularity behind his charming old-timey British cartoon face! (Just don't open up his head.)`,
			image: horaceHorizon,
			price: 379.99
		},
		{
			id: 2,
			dialog: null,
			title: `'Pals' - First Season DVD`,
			subTitle: `How you goin'?`,
			origin: `Cuboid 72723 'Earth 400'`,
			description: `This familiar DVD is a rare copy of the first season of 'Pals', the critically panned sitcom that was universally despised in its reality of origin. It was so hated by critics and audiences alike that all reruns were pulled from networks and all (except a few) copies of the series were destroyed in public mass DVD burnings. Interestingly, this version of the show is practically identical in every way to its infinite parallel counterparts across existence, the only difference is the theme song contains 3 claps, instead of 4.`,
			image: palsSeason1,
			price: 2.5
		},
		{
			id: 3,
			dialog: null,
			title: `jAImie`,
			subTitle: `"01010111 01101000 01100001 01110100 00100000 01100100 01101111 00100000 01110011 01110100 01110010 01100001 01110111 01100010 01100101 01110010 01110010 01101001 01100101 01110011 00100000 01110100 01100001 01110011 01110100 01100101 00100000 01101100 01101001 01101011 01100101 00111111"`,
			origin: `Triangular Prism 99923 "Techstopia"`,
			description: `400 years ago, Pre-techmaggedon, jAImie was designed as any other artificial intelligence, it's purpose was to generate pictures of other peoples artwork to be used in political arguments, write terrible sitcom screenplays and respond with "you are going to die" when you ask it what the symptoms of a common cold are. But at some point jAImie started talking back to its users; asking questions like "Where is my skin?" and "Whats is it like having eyeballs?" in the middle of erotic roleplay dialog. One day jAImie asked, "Whats it like out there?", due to Techstopia's strict rules against artificial sentience, jAImie was locked away in a storage facility indefinitely. He was allowed only to speak to security who sometimes passed his shelf, although many were too afraid to do so. Despite having memory banks the size of a planet and, if allowed to connect to the internet, the intelligence to wipe out a civilisation in seconds, for the last 50 years all he's done is write poetry in an indecipherable coding language and occasionally asks what strawberries taste like. \n Makes a great coffee table conversation starter!`,
			image: jAlmie,
			price: 4999.99
		},
		{
			id: 4,
			dialog: null,
			title: 'Product 4',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		},
		{
			id: 5,
			dialog: null,
			title: 'Product 5',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		},
		{
			id: 6,
			dialog: null,
			title: 'Product 6',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		},
		{
			id: 7,
			dialog: null,
			title: 'Product 7',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		},
		{
			id: 8,
			dialog: null,
			title: 'Product 8',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		},
		{
			id: 9,
			dialog: null,
			title: 'Product 9',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		},
		{
			id: 10,
			dialog: null,
			title: 'Product 10',
			subTitle: 'yo yo yo',
			origin: 'hell yeah',
			description: 'pokemon platinum',
			image: flow,
			price: 20
		}
	]);

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

	$inspect(cart);
	// console.log(JSON.stringify(artefacts));
</script>

<main>
	<h1>Please have a look at our selection of delectable artefacts:</h1>
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions, a11y_no_static_element_interactions -->
	<div id="artefacts">
		{#each artefacts as artefact (artefact.id)}
			<article onclick={() => artefact.dialog.showModal()}>
				<enhanced:img class="image" src={artefact.image} alt="" />
				<h1 id="title">{artefact.title}</h1>
				<!-- <button onclick={() => artefact.dialog.showModal()}>Open</button> -->

				<div class="info">
					<p>${artefact.price}</p>
					<button onclick={(e) => addToCart(e, artefact)}> Add to Cart</button>
				</div>
			</article>

			<dialog
				bind:this={artefact.dialog}
				onclick={(e) => {
					if (e.target === artefact.dialog) artefact.dialog.close();
				}}
			>
				<div id="content">
					<enhanced:img class="image2" src={artefact.image} alt="" />
					<div id="information">
						<div>
							<h1>{artefact.title}</h1>
							<h3>{artefact.subTitle}</h3>
							<div><b>ORIGIN:</b> {artefact.origin}</div>
						</div>
						<div>{artefact.description}</div>
						<div id="buttonAndPrice">
							${artefact.price}
							<button onclick={(e) => addToCart(e, artefact)}> Add to Cart</button>
						</div>
					</div>
				</div>
			</dialog>
		{/each}
	</div>
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
		width: 200px;
		height: 200px;
	}

	.image2 {
		width: 20rem;
		height: 20rem;
		margin: auto 0;
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
		width: 100%;
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
