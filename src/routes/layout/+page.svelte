<script>
    import NavContainer from "../../lib/components/navContainer.svelte";
    import InfoCard from "../../lib/components/infoCard.svelte";
    import { fade } from 'svelte/transition';
    import "../../static/fonts/data-latin.ttf"
    
    export let showJobs = false;
    export let showProjects = false;
    export let showSocials = false;
    export let showInfo = false;

    export let infoBtnIcon = '+'

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
    <div class="mainSection controlSide">
        <header>
            <div class="header">
                <div>insert img l8r</div>
                <a href="/"> / Tomi</a>
            </div>
            <div>
                <h1>Tomi</h1>
                <p>hello there :&rbrack;</p>
            </div>
        </header>
        <div class="buttonNav">
            <button on:click={handleJobs} class="btn btn-primary">
                <p>my jobs</p>
            </button>
            <button on:click={handleProjects} class="btn btn-primary">
                <p>my projects</p>
            </button>
            <button on:click={handleSocials} class="btn btn-primary">
                <p>my socials</p>
            </button>
        </div>
        <p class="check">{something}</p>
    </div>
    <div class="mainSection contentSide">
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
            <div>
                <h1 transition:fade>i <s>(break)</s> make stuff</h1>
                <button on:click={handleInfo}>{infoBtnIcon}</button>
                {#if showInfo}
                    <InfoCard />
                {/if}
            </div>
        {/if}
    </div>
</main>

<style>
    * {
        background-color: #FFF1DB;
        font-family: 'data';
    }

    main {
        display: flex;
    }
    
    .mainSection {
        width: 100vw;
        height: 100vh;
    }

    .controlSide {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .contentSide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .buttonNav {
        display: flex;
        justify-content: center;
    }

    button {
        color: #16198A;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .check {
        text-align: center;
    }

    
    @font-face {
    font-family: 'data';
    src: url('../../static/fonts/data-latin.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
    }

</style>