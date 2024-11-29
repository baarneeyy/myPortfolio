<script>
    import ProjectCard from "./projectCard.svelte";
    import Modal from "./modal.svelte";
    import { fade } from "svelte/transition";
    import GoInbox from 'svelte-icons/go/GoInbox.svelte';
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';

    let props = $props();

    let showModal = $state(false);

    import "../../app.css";

    //TODO -> IMPLEMENT PROJECT FILTER/SEARCH

</script>

<main>
    {#if props.jobs }
        <ul class="navContainer">
            <li>
                <a href="https://binaryconfidence.com">QA Lead @ Binary Confidence</a>
            </li>
        </ul>
    {:else if props.projects}
        <ul class="navContainer">
            <div transition:fade>
                <ProjectCard 
                    name="BottleBuddy" 
                    itemName="project"
                    projectType="mobile app" 
                    description="Wolt-like delivery&pickup app for plastic bottles"
                    checked="checked"
                    repo="https://github.com/Baarneeyy/BottleBuddy"
                
                />
                <ProjectCard 
                    name="Maestro" 
                    itemName="project"
                    projectType="web-app"
                    description="Utility website '100 gadgets' style"
                    repo="https://github.com/Baarneeyy/maestro"
                />
                <ProjectCard name="projects"
                    itemName="project"
                />
            </div>
        </ul>
    {:else if props.socials}
        <div class="btnPair">
            <button class="btn btn-secondary mr-4">
                <DiGithubBadge/>
            </button>
            <a class="btn" role="button" href="https://github.com/Baarneeyy">github: u/Baarneey</a>
        </div>
        <div class="btnPair">
            <button class="btn btn-secondary mr-4">
                <GoInbox/>
            </button>
            <button class="btn" onclick={() => (showModal = true)}>mail: tomas@vsetecka.sk</button>
        </div>
        <Modal bind:showModal/>
    {/if}
</main>

<style>
    .btnPair {
        display: flex;
        flex-direction: row;
        padding: 6px;
    }
</style>