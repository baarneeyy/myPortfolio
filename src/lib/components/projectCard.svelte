<script>
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    
    let props = $props();

    let gitRepo = props.repo;

    let techStack = props.stack;
    let stack1 = techStack.split('-');

    function gitClick() {
        window.location.href = gitRepo;
    }
</script>

<main class="collapse">
    <input type="radio" name={props.itemName} checked={props.checked}/>
    <div class="collapse-title text-4xl md:text-5xl font-bold text-center">{props.name}</div>
    <div class="collapse-content text-base md:text-lg leading-relaxed mt-4">
        <p class="text-xl md:text-2xl font-medium mt-4">Project Stack:</p>
        <div class="projectStack">
            {#each stack1 as item}
                <div class="badge">{item}</div>
            {/each}
        </div>
        <a href="https://google.com/">Type: {props.projectType}</a>
        <p class="text-xl md:text-2xl font-medium mt-4">Description:</p>
        <p class="description">
            {props.description}
        </p>
        <p class="text-xl md:text-2xl font-medium mt-4">Current Status:</p>
        <p class="description">{props.descrip}</p>
        <div class="projectBtnBar">
            <div>
                <button class="btn" onclick={gitClick}>
                    <DiGithubBadge />
                </button>
            </div>
            <button class="btn" disabled="disabled">MoreInfo</button>
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