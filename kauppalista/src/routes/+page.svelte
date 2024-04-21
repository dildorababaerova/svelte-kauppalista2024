<script>
    const listat = ['Kahvi', 'Ananas', 'Mango' ];
</script>

<div>
<h1>Kauppalista</h1>
    <ul>
        {#each listat as lista}
        <li>{lista}</li>
        {/each}
    </ul>
</div>
<style>
    h1 {
        background-color: aqua;
        color:blue;
        font-size: 200%;
    }
    ul {
        color: #8a2be2;
        background-color: rgba(96, 224, 213, 0.556);
        font-size: 100%;
    }

</style>


