<script>
    import ProjectCard from "./projectCard.svelte";
    import Modal from "./modal.svelte";
    import { fade } from "svelte/transition";


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
                    projectType="mobile app" 
                    description="Wolt-like delivery&pickup app for plastic bottles"
                    checked="checked"
                
                />
                <ProjectCard 
                    name="Maestro" 
                    projectType="web-app"
                    description="Utility website '100 gadgets' style"
                />
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