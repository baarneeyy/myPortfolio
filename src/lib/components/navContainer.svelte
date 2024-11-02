<script>
    import ProjectCard from "./projectCard.svelte";
    import { fade } from "svelte/transition";

    export let jobs;
    export let projects;
    export let socials;

    import "../../app.css";

</script>

<main>
    {#if jobs }
        <ul class="navContainer">
            <li>
                <a href="binaryconfidence.com">QA Lead @ Binary Confidence</a>
            </li>
        </ul>
    {:else if projects}
        <ul class="navContainer">
            <div transition:fade>
                <ProjectCard />
            </div>
        </ul>
    {:else if socials}
        <ul class="navContainer">
            <li>
                <a href="https://github.com/Baarneeyy">github: u/Baarneeyy</a>
            </li>
            <li>
                <a href="mailto:tom.vseteckaa@gmail.com">mail: tom.vseteckaa@gmail.com</a>
            </li>
        </ul>
    {/if}
</main>