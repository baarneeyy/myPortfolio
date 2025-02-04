<script>
    import "../app.css";

    let element = null;
</script>

<main>
    <div class="header">
        <div>insert img l8r</div>
        <a href="/layout/"> / New Layout</a>
    </div>
    <div class="text-3xl font-bold underline">Tomáš Všetečka</div>
    <div class="legalShit">
        <h2>živnostník</h2>
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
    </div>
</main>

<style lang="postcss">
    * {
        font-family: Georgia, 'Times New Roman', Times, serif;
               
    }

    .header {
        text-align: start;
        width: 100%;
    }


    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    }
</style>