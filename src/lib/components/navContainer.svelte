<script>
    export let jobs;
    export let projects;
    export let socials;

    export let showProject = false;

    import ProjectCard from "./projectCard.svelte";

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
            <li>
                <button on:click={() => showProject = !showProject}>BottleBuddy</button>
            </li>
            {#if showProject}
                <ProjectCard />
            {/if}
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