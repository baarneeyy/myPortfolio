<script>
    import ProjectCard from "$lib/components/projectCard.svelte"
    import JobCard from "$lib/components/cards/jobCard.svelte"
    import SocialsCard from "$lib/components/cards/SocialsCard.svelte"
</script>


<div class="font-bold sectionHeader supaText">Simple Layout</div>
<main>
    <div class="text-4xl font-bold sectionHeader">Jobs</div>
    <div class="myCard card bg-base-100 w-96 shadow-xl">
        <div class="card-body items-center text-center">
            <JobCard />
        </div>
    </div>
    <div class="text-4xl font-bold sectionHeader">Projects</div>
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
    <div class="text-4xl font-bold sectionHeader">Socials</div>
    <div class="myCard card bg-base-100 w-96 shadow-xl">
        <div class="card-body items-center text-center">
            <SocialsCard />
        </div>
    </div>
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .myCard {
        border: solid black 4px;
        background-color: #D4BDAC;
        color: #16198A;
        border-color: #3D593B;
        min-width: fit-content;
    }
    .sectionHeader {
        color: #16198A;
        text-align: center;
        margin: 20px;
    }
    .supaText {
        font-size: 3.75rem; /* 60px */
        line-height: 1;
        text-align: left;
    }
</style>