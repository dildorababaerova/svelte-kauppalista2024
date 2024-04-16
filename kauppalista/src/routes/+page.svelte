<script>
    let jutut  = ["Leipä", "Tee", "Voi"]

let uusiAsia = '';

function lisääAsia() {
    jutut.push(uusiAsia);
    jutut = jutut;
    uusiAsia = '';
}
</script>

<div class= "komponentti">
<h1>Kauppalista</h1>
<ul>
    {#each jutut as juttu}
        <li>{juttu}</li>
    {/each}
</ul>
<form class="uusi">
    <label for="uusi-asia">Lisää uusi asia</label>
    <br>
    <input id="uusi-asia" type="text" bind:value={uusiAsia} />
    <button on:click|preventDefault={lisääAsia}>Lisää</button>
</form>

</div>
<style>
    h1 {
        background-color: hwb(221 48% 26% / 0.911);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    ul {
        color: blueviolet;
        font-size: 200%;
        background-color: bisque;
    }

</style>

 

    
