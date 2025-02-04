<script>
  import QuillEditor from './quillEditor.svelte';

  /*
   TODOS:
      1. remove/fix editor warnings in component file
      2. create&implement this component as a working mail/message sender
  */
  let { showModal = $bindable() } = $props();

  let dialog = $state(); //ModalElement

  $effect(() => {
      if (showModal) dialog.showModal();
  })
</script>

<dialog id="Modal" class="modal" bind:this={dialog} 
    onclose={() => (showModal = false)} 
    onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
  <div class="modal-box">
    <input type="text" placeholder="Email?" class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Subject?" class="input input-bordered w-full max-w-xs mt-4" />
    <div class="modal-action">
      <form method="dialog">
        <QuillEditor />
        <div>
          <button class="btn">Close</button>
          <button class="btn btn-secondary">Send</button>
        </div>
      </form>
    </div>
  </div>
</dialog>