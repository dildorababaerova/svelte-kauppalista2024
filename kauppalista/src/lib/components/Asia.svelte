<script>
    import {enhance} from '$app/forms';
    export let teksti;
    export let id;
</script>
<li>
    <form method="POST" action="?/delete" use:enhance>
        <input type="hidden" name="asia-id" value={id}/>
        <input type="checkbox">
        <span>{teksti}</span>
        <button>🗑️</button>
    </form>
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