<script>
    import { onMount } from "svelte";
    let { children } = $props();

    /*
        Handles current mdsvex err -> .md formatting
        only loads after a reload -> //TODO -> investigate
    */
    onMount(() => {
        if (!sessionStorage.getItem("reloaded")) {
            sessionStorage.setItem("reloaded", "true");
            location.reload();
        }
    });
</script>

{@render children()}