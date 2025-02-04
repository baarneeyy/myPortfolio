<script>
    import { onMount } from 'svelte';
    
    /*
        TODOS:
            1. Learn quillJS from docs
            2. Minimize functions in editor
            3. Alongside modal.svelte -> create a message/mail sender
    */
    
    let editorContainer;
    let quill; // Declare quill to access it later if needed

    onMount(async () => {
        // Dynamically import Quill to avoid SSR issues
        const Quill = (await import('quill')).default;
        import('quill/dist/quill.snow.css');

        quill = new Quill(editorContainer, {
        theme: 'snow',
        modules: {
            toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']
            ]
        }
        });

        quill.on('text-change', () => {
        console.log('Editor content:', quill.root.innerHTML);
        });
    });
</script>
  
<div bind:this={editorContainer}></div>
  
<style>
    div {
        height: 400px;
    }
</style>
  