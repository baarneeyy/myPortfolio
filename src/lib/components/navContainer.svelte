<script>
    import ProjectCard from "./projectCard.svelte";
    import { fade } from "svelte/transition";

    let props = $props();

    let showModal = $state(false);

    import "../../app.css";
    import JobCard from "./cards/jobCard.svelte";
    import SocialsCard from "./cards/socialsCard.svelte";

    /*
        TODO:
            1. Create a more easily maintainable structure  
    */

</script>

<main>
    {#if props.jobs }
        <ul class="navContainer">
            <JobCard />
        </ul>
    {:else if props.projects}
        <ul class="navContainer">
            <div transition:fade>
                <ProjectCard 
                    name="BottleBuddy" 
                    itemName="project"
                    projectType="cross-platform service" 
                    description="Wolt-like delivery&pickup app for plastic bottles."
                    checked="checked"
                    repo="https://github.com/baarneeyy/svelteBuddy"
                    stack = 'sveltekit-supabase'
                    descrip="POC-v0.1.0 done; shelved atm"
                
                />
                <ProjectCard 
                    name="Maestro" 
                    itemName="project"
                    projectType="web-app"
                    description="Non-ai based personal assistant."
                    repo="https://github.com/Baarneeyy/maestro"
                    stack = 'svelte'
                    descrip="Not in active development"
                />
            </div>
        </ul>
    {:else if props.socials}
        <SocialsCard />
    {/if}
</main>

<style>
    .btnPair {
        display: flex;
        flex-direction: row;
        padding: 6px;
    }
</style>