<script>
    import '../app.css'

    let { children } = $props();

    import { beforeNavigate, goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let previousUrl = null;

    onMount(() => {
        previousUrl = $page.url.href;
    });

    beforeNavigate(({ to }) => {
        if (previousUrl && to.url.href !== previousUrl) {
        window.location.href = to.url.href; // Force full reload
        }
    });
</script>

{@render children()}