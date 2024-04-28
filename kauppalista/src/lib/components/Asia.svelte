<script>
        export let teksti; 
</script>
<li>
    <input type="checkbox" />
    {teksti}
    <button>🗑️</button>
</li>

<style>
li {
    display: block;
    padding-top: 10px ;
} 
button {
    background: url(./remove.svg) no-repeat 50% 50%;
}

</style>