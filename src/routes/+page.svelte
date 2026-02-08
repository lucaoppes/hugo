<!-- HOME -->

<script>
	import shopOutside from '$lib/assets/shopOutside.png';
	import hugo from '$lib/assets/hugoIntro.png';
	import sam from '$lib/assets/samIntro.png';
	import george from '$lib/assets/georgeIntro.png';
</script>

<main>
	<h1>ABOUT US</h1>

	<iframe
		src="https://www.youtube.com/embed/T8ov902FWLE?si=OKYPBLc4krHPB7OL"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>

	<div id="intro-both">
		<enhanced:img id="shop" src={shopOutside} alt="" />

		<div id="intro-text">
			<h1>WHO ARE WE?</h1>
			<p>
				Heya everyone, we are hugo mind palace and we are super cool and fun and you should
				definitely buy some of our stuff which is 100% legitimately acquired and super high quality
				<br /><br />
				This is a super awesome project and you should definitely support our super awesome project because
				I mean why woulnd't you really
			</p>
		</div>
	</div>

	<h1>MEET THE CREW</h1>

	<div id="the-crew">
		<enhanced:img class="crew-member" src={hugo} alt="" />

		<enhanced:img class="crew-member" src={sam} alt="" />

		<enhanced:img class="crew-member" src={george} alt="" />
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
		width: 30rem;
	}

	.crew-member {
		width: 25rem;
	}
</style>
