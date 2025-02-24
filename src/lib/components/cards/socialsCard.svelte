<script>
    import ProjectCard from "$lib/components/projectCard.svelte";
    import Modal from "$lib/components/modal.svelte"
    import { fade } from "svelte/transition";
    import GoInbox from 'svelte-icons/go/GoInbox.svelte';
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';

    let showModal = $state(false);
</script>
<div class="card bg-neutral text-neutral-content w-96">
    <div class="card-body items-center text-center">
        <!--<h2 class="card-title">Socials</h2> -->
        <p>You can also find me here!</p>
        <div class="btnPair">
            <a class="btn btn-secondary mr-4" role="button" href="https://github.com/Baarneeyy">
                <DiGithubBadge/>
            </a>
            <button class="btn" disabled="disabled">github: u/Baarneey</button>
        </div>
        <div class="btnPair">
            <button class="btn btn-secondary mr-4" onclick={() => (showModal = true)}>
                <GoInbox/>
            </button>
            <button class="btn" disabled="disabled">mail: tomas@vsetecka.sk</button>
        </div>
    </div>
</div>
<Modal bind:showModal/>


<style>
    .btnPair {
        display: flex;
        flex-direction: row;
        padding: 6px;
    }
</style>