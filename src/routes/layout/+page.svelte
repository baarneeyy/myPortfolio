<script>
    import NavContainer from "../../lib/components/navContainer.svelte";
    import InfoCard from "../../lib/components/infoCard.svelte";
    import { fade } from 'svelte/transition';

    import '@fontsource-variable/roboto-slab';

    export let showJobs = false;
    export let showProjects = false;
    export let showSocials = false;
    export let showInfo = false;

    export let infoBtnIcon = '+'

    //TODO - New modal implementation
    /*
        IDEAS:
        1. convert all handleX() funcs into a singular func w switch stmnt
        2. setup routing -> each handleX() into a separate +page.svelte
    */

    function handleJobs() {
        showJobs = !showJobs;
        showProjects = false;
        showSocials = false;
        showSomething()
    }

    function handleProjects() {
        showProjects = !showProjects;
        showJobs = false;
        showSocials = false;
        showSomething()
    }

    function handleSocials() {
        showSocials = !showSocials;
        showJobs = false;
        showProjects = false;
        showSomething()
    }

    function handleInfo() {
        showInfo = !showInfo;
        if (infoBtnIcon == "+") {
            infoBtnIcon = '-'
        } else if (infoBtnIcon == '-') {
            infoBtnIcon = '+'
        }

    }

    export let something = false;

    export let showSomething = () => {
        something = showJobs || showProjects || showSocials
    };

</script>

<main>
    <div class="navbar">
        <a role="button" class="btn" href="/">legal stuff</a>
        <a role="button" class="btn" href="/blog">blog v0.0.1</a>
        <div class="buttonNav">
            <button on:click={handleJobs} class="btn btn-primary">my jobs</button>
            <button on:click={handleProjects} class="btn btn-secondary">my projects</button>
            <button on:click={handleSocials} class="btn btn-primary">my socials</button>
        </div>
    </div>
    <div class="contentSide">
        <div>
            {#if something}
                {#if showJobs}
                    <div transition:fade>
                        <NavContainer jobs={showJobs} />
                    </div>
                {:else if showProjects}
                    <div transition:fade>
                        <NavContainer projects={showProjects}/>
                    </div>
                {:else if showSocials} 
                    <div transition:fade>
                        <NavContainer socials={showSocials}/>
                    </div>
                {/if}
            {:else}
                <div class="hero-content hero-holder" transition:fade>
                    <h1 class="text-4xl md:text-5xl font-bold">Tomas Vsetecka</h1>
                    <h1 class="text-4xl md:text-5xl font-bold">i <s>(break)</s> make stuff</h1>
                    <button on:click={handleInfo} class="btn btn-secondary">{infoBtnIcon}</button>
                    {#if showInfo}
                        <InfoCard />
                    {/if}
                </div>
            {/if}
        </div>
    </div>
    <footer>
    </footer> 
</main>

<style>
    * {
        font-family: 'Roboto Slab', sans-serif;
    }

    main {
        font-family: 'Roboto Slab', serif;
        width: 100vw;
        height: 100vh;
    }


    .contentSide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .navbar {
        justify-content: space-between;   
    }

    .buttonNav {
        margin-right: 27%;
        display: flex;
        justify-content: space-around;
    }

    .buttonNav > *{
        margin-right: 6vw;
        max-width: fit-content;
    }

    .hero-holder {
        display: flex;
        flex-direction: column;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    /* roboto-slab-latin-400-normal */
    @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/roboto-slab@latest/latin-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/roboto-slab@latest/latin-400-normal.woff) format('woff');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }
</style>