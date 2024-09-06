<script>
    import NavContainer from "../../lib/components/navContainer.svelte";
    
    export let showJobs = false;
    export let showProjects = false;
    export let showSocials = false;

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
                <p>now what is this</p>
            </div>
        </header>
        <div class="buttonNav">
            <button on:click={handleJobs}>
                <p>my jobs</p>
            </button>
            <button on:click={handleProjects}>
                <p>my projects</p>
            </button>
            <button on:click={handleSocials}>
                <p>my socials</p>
            </button>
        </div>
        <p class="check">{something}</p>
    </div>
    <div class="mainSection contentSide">
        {#if something}
            <NavContainer jobs={showJobs} projects={showProjects} socials={showSocials}/>
        {:else}
            <h1>i <s>(break)</s> make stuff</h1>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
    }
    
    .mainSection {
        border: solid black 4px;
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

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .check {
        text-align: center;
    }

    
</style>