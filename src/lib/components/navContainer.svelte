<script>
    import ProjectCard from "./projectCard.svelte";
    import Modal from "./modal.svelte";
    import { fade } from "svelte/transition";


    let props = $props();

    let showModal = $state(false);

    import "../../app.css";

</script>

<main>
    {#if props.jobs }
        <ul class="navContainer">
            <li>
                <a href="binaryconfidence.com">QA Lead @ Binary Confidence</a>
            </li>
        </ul>
    {:else if props.projects}
        <ul class="navContainer">
            <div transition:fade>
                <ProjectCard name="projects" checked="checked"/>
                <ProjectCard name="projects"/>
                <ProjectCard name="projects"/>
            </div>
        </ul>
    {:else if props.socials}
        <ul class="navContainer">
            <li>
                <a href="https://github.com/Baarneeyy">github: u/Baarneeyy</a>
            </li>
            <li>
                <a href="mailto:tom.vseteckaa@gmail.com">mail: tom.vseteckaa@gmail.com</a>
            </li>
        </ul>
        <button class="btn" onclick={() => (showModal = true)}>open modal</button>
        <Modal bind:showModal/>
    {/if}
</main>