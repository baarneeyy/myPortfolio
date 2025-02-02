<script>
    import { onMount } from "svelte";
    let { children } = $props();

    onMount(() => {
        if (!sessionStorage.getItem("reloaded")) {
            sessionStorage.setItem("reloaded", "true");
            location.reload();
        }
    });
</script>

{@render children()}