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
		max-width: none;
		max-height: 100dvh;
		width: 100dvw;
		height: 100dvh;
		overscroll-behavior: contain;
		background: transparent;
		text-align: center;
		transition: all 0.75s allow-discrete;
		opacity: 0;
	}

	dialog::backdrop {
		overscroll-behavior: contain;
		background-color: rgba(0, 0, 0, 0.795);
	}

	#image {
		max-height: 100%;
		width: auto;
	}

	@starting-style {
		dialog:open {
			opacity: 0;
		}
	}
</style>
