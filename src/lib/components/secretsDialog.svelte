<script>
	let { showModal = $bindable(), src, alt } = $props();

	let dialog = $state();

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<dialog
	class="dialogFadeAnimation"
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={() => dialog.close()}
>
	<enhanced:img id="image" {src} {alt} />
</dialog>

<style>
	#image {
		max-height: 90dvh;
		width: auto;
	}

	#image:focus {
		outline: none;
	}

	dialog {
		background: transparent;
		margin: auto;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.795);
	}
</style>
