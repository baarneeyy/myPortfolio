<script>
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
    <div class="header">
        <div>insert img l8r</div>
        <a href="/"> / Tomi</a>
    </div>
    <div class="mainsec">
        <h1>i <s>(break)</s> make stuff</h1>
    </div>
    <div class="sections">
        <!-- create element design for listing out things; card/link style -->
        <button on:click={handleJobs}>
            <p>my jobs</p>
            <p>{showJobs}</p>
        </button>
        <button on:click={handleProjects}>
            <p>my projects</p>
            <p>{showProjects}</p>
        </button>
        <button on:click={handleSocials}>
            <p>my socials</p>
            <p>{showSocials}</p>
            <p>{something}</p>
        </button>
    </div>

    {#if showJobs }
        <ul>
            <li>
                <a href="binaryconfidence.com">QA Lead @ Binary Confidence</a>
            </li>
        </ul>
    {:else if showProjects}
        <ul>
            <li>
                BottleBuddy
            </li>
        </ul>
    {:else if showSocials}
        <ul>
            <li>
                <a href="https://github.com/Baarneeyy">github: u/Baarneeyy</a>
            </li>
            <li>
                <a href="mailto:tom.vseteckaa@gmail.com">mail: tom.vseteckaa@gmail.com</a>
            </li>
        </ul>
    {/if}

    <div class="legalShit">
        <h2>Tomáš Všetečka</h2>
        <br>
        <h3>Služby</h3>
        <ol>
            <li>Počítačové služby a služby súvisiace s počítačovým spracovaním údajov</li>
        </ol>
        
        <h3>Cenník</h3>
        <ul>
            <li>manuálny testing vášho software-u = 75€/MD</li>
            <li>pripráva kostry automatizovaného testovania software-u = 75€/MD</li>
            <li>monitoring software-u pomocou, na mieru vytvorenej testing suite = 2400€/Mesiac</li>	
        </ul>
        
        <h3>Údaje</h3>
        <ul>
            <li>tel.č.: +421949082647</li>
            <li>IČO: 56022417</li>
            <li>Sídlo: Šášovská 3018/16, 85106 Bratislava</li>
        </ul>
        <h4>Todo</h4>
        <ul>
            <li>popisky ku "produktom"</li>
            <li>view that changes based on the three top-side buttons</li>
            <li>legal sk chujoviny pridať do mini card</li>
        </ul>
    </div>
</main>