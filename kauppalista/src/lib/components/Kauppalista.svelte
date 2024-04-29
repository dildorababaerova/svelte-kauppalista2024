<script>
	import Asia from "./Asia.svelte";
    export let lists;
</script>

<ul>
    {#each lists as list}
        <Asia teksti={list.teksti} id={list.id} />
    {/each}
</ul> 
<style>
    ul {
        color: #8a2be2;
        background-color: rgba(96, 224, 213, 0.556);
        font-size: 100%;
    }
</style>