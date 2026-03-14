<!-- HOME -->

<script>
	// import infiniteEverything from '$lib/assets/theEverything.png?enhanced';

	import mediumZoom from 'medium-zoom';
	import { fade } from 'svelte/transition';

	const importedImages = import.meta.glob('$lib/home/*', {
		eager: true,
		query: {
			enhanced: true,
			w: '1500'
		}
	});

	let zoom = null;
	let dialog = $state();
	let showModal = $state(false);

	$effect(() => {
		if (showModal) dialog.showModal();
	});

	function getZoom() {
		if (zoom === null) {
			zoom = mediumZoom({ background: '#000000b3' });
		}

		return zoom;
	}

	function attachZoom(image) {
		const zoom = getZoom();
		zoom.attach(image);

		console.log(zoom);

		return {
			update(newOptions) {
				zoom.update(newOptions);
			},
			destroy() {
				zoom.detach();
			}
		};
	}

	let is_zoomed = $state(false);
</script>

<main>
	<dialog
		bind:this={dialog}
		onclose={() => (showModal = false)}
		onclick={(e) => {
			dialog.close();
		}}
	>
		<enhanced:img
			transition:fade
			id="everything"
			src={Object.entries(importedImages)[4][1].default}
			alt=""
		/>
	</dialog>
	<!-- <Zoom {is_zoomed} on_zoom_change={(z) => (is_zoomed = z)} duration={1}>
		<img id="everything" src={infiniteEverything} alt="" />
	</Zoom> -->

	<!-- <h1>ABOUT US</h1> -->

	<iframe
		src="https://www.youtube.com/embed/T8ov902FWLE?si=OKYPBLc4krHPB7OL"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>

	<div id="intro-both">
		<enhanced:img
			id="shop"
			src={Object.entries(importedImages)[3][1].default}
			alt=""
			use:attachZoom
		/>

		<div id="intro-text">
			<h1>WHO ARE WE?</h1>
			<p>
				Welcome to Hugo's Mind Palace! The best and most convenient thrift shop in the entirety of
				existence! Located right on a cozy little blue planet in the euclidian reality Sphere 8008
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				right in the western loop of
				<span
					onclick={() => {
						showModal = true;
					}}>The Infinite Everything!</span
				> We steal "collect" items from across all realities and safely bring them to you at a reasonable
				price! Using our state of the art Hyperreality zippers, we can hop between worlds to get anything
				you could ever imagine! Literally! Terrifying Technology! Incomprehensible Shapes not meant for
				three dimensional eyes! There'll be only one place you go, and that's Hugo's!
			</p>
		</div>
	</div>

	<h1>MEET THE CREW</h1>

	<div id="the-crew">
		<enhanced:img
			class="crew-member"
			src={Object.entries(importedImages)[1][1].default}
			alt=""
			use:attachZoom
		/>
		<enhanced:img
			class="crew-member"
			src={Object.entries(importedImages)[2][1].default}
			alt=""
			use:attachZoom
		/>
		<enhanced:img
			class="crew-member"
			src={Object.entries(importedImages)[0][1].default}
			alt=""
			use:attachZoom
		/>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 50rem;
		margin: auto;
	}

	iframe {
		width: 800px;
		height: 450px;
	}

	h1 {
		text-align: center;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.25rem;
	}

	span {
		color: gold;
		cursor: pointer;
	}

	dialog {
		max-width: none;
		max-height: 100dvh;
		width: 100dvw;
		height: 100dvh;
		overscroll-behavior: contain;
		background: transparent;
		text-align: center;
	}

	dialog::backdrop {
		overscroll-behavior: contain;
		background: rgba(0, 0, 0, 0.3);
	}

	#everything {
		max-height: 100%;
		width: auto;
	}

	#intro-both {
		width: inherit;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin: 2rem 0;
	}

	#the-crew {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 2rem;
	}

	#shop {
		width: 480px;
		height: auto;
	}

	.crew-member {
		width: 400px;
		height: auto;
	}

	@media only screen and (max-width: 600px) {
		main {
			width: 100%;
			padding: 0.5rem;
		}

		iframe {
			width: 100%;
			aspect-ratio: 16/9;
			height: auto;
		}

		#intro-both {
			flex-direction: column;
		}

		#the-crew {
			flex-direction: column;
		}

		#shop {
			width: 100%;
		}

		.crew-member {
			width: 100%;
			height: auto;
		}
	}
</style>
