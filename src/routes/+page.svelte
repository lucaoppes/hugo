<!-- HOME -->

<script>
	import Zoom from 'svelte-medium-image-zoom';
	import '$lib/zoomStyles.css';
	import shopOutside from '$lib/assets/shopOutside.png';
	import hugo from '$lib/assets/hugoIntro.png';
	import sam from '$lib/assets/samIntro.png';
	import george from '$lib/assets/georgeIntro.png';
	import shopPolaroid from '$lib/assets/shopPolaroid.png';
	import infiniteEverything from '$lib/assets/theEverything.png';

	let is_zoomed = $state(false);
</script>

<main>
	<Zoom {is_zoomed} on_zoom_change={(z) => (is_zoomed = z)} duration={1}>
		<img id="everything" src={infiniteEverything} alt="" />
	</Zoom>

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
		<Zoom>
			<enhanced:img id="shop" src={shopPolaroid} alt="" />
		</Zoom>

		<div id="intro-text">
			<h1>WHO ARE WE?</h1>
			<p>
				Welcome to Hugo's Mind Palace! The best and most convenient thrift shop in the entirety of
				existence! Located right on a cozy little blue planet in the euclidian reality Sphere 8008
				right in the western loop of <span
					onclick={() => {
						is_zoomed = true;
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
		<Zoom>
			<enhanced:img class="crew-member" src={hugo} alt="" />
		</Zoom>
		<Zoom>
			<enhanced:img class="crew-member" src={sam} alt="" />
		</Zoom>
		<Zoom>
			<enhanced:img class="crew-member" src={george} alt="" />
		</Zoom>
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

	#everything {
		visibility: hidden;
		position: absolute;
		width: 1px;
		height: 1px;
	}
</style>
