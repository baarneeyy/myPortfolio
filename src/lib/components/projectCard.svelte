<script>
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    
    let props = $props();

    let gitRepo = "https://github.com/Baarneeyy/BottleBuddy";

    function gitClick() {
        window.location.href = gitRepo;
    }
</script>

<main class="collapse">
    <input type="radio" name={props.name} checked={props.checked}/>
    <div class="collapse-title text-4xl md:text-5xl font-bold text-center">BottleBuddy</div>
    <div class="collapse-content text-base md:text-lg leading-relaxed mt-4">
        <p class="text-xl md:text-2xl font-medium mt-4">Project Stack:</p>
        <div class="projectStack">
            <div class="badge">react-native</div>
            <div class="badge">expo</div>
            <div class="badge">pocketbase</div>
        </div>
        <a href="https://google.com/">Type: mobile app</a>
        <p class="text-xl md:text-2xl font-medium mt-4">Description:</p>
        <p class="description">
            Wolt-like delivery&pickup app for plastic bottles
        </p>
        <p class="text-xl md:text-2xl font-medium mt-4">Current Status:</p>
        <p class="description">Develop & Implement Order screen -&gt ver0.1.0 done</p>
        <div class="projectBtnBar">
            <div>
                <button class="btn" onclick={gitClick}>
                    <DiGithubBadge />
                </button>
            </div>
            <button class="btn">MoreInfo</button>
        </div>
    </div>
</main>

<style>
    main {
        border: solid black 4px;
        background-color: #D4BDAC;
        color: #16198A;
        border-color: #3D593B;
    }

    .collapse-content {
        margin-left: 2vw;
    }

    .projectStack {
        margin-left: 2vw;
        margin-top: 1vh
    }

    .description {
        margin-left: 2vw;
        margin-top: 1vh
    }

    .projectBtnBar {
        display: flex;
        justify-content: space-around;
        margin-top: 2vh;
    }
</style>