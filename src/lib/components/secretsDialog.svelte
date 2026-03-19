<script>
	let { showModal = $bindable(), src, alt } = $props();

	let dialog = $state();

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<dialog bind:this={dialog} onclose={() => (showModal = false)} onclick={() => dialog.close()}>
	<enhanced:img id="image" {src} {alt} />
</dialog>

<style>
	dialog:open {
		opacity: 1;
	}

	dialog {
		opacity: 0;
		background: transparent;
		margin: auto;
		transition: all 0.5s allow-discrete;
	}

	#image {
		max-height: 90dvh;
		width: auto;
		-webkit-tap-highlight-color: transparent;
	}

	#image:focus {
		outline: none;
	}

	@starting-style {
		dialog:open {
			opacity: 0;
		}
	}
</style>
