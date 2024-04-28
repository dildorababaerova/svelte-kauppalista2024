<script>
import {enhance} from '$app/forms';
import Kauppalista from '../lib/components/Kauppalista.svelte';
   
    export let data; 
    export let form;

</script>

<div class komponentti>
<h1>Kauppalista</h1>
   <Kauppalista lists={data.lists} />
    {#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
    <form class="new" method="POST" action="?/addNew" use:enhance>
        <label for="new-list"> Add new list</label>
        <input 
        id = "new-list" 
        name="a" 
        type="text" 
        value={form?.list ?? ''}
        
        autofocus
        />
        <button>Add list</button> 
    </form> 
    
</div>
<style>
    h1 {
        background-color: aqua;
        color:blue;
        font-size: 200%;
    }
    

    label {
        display: block;
        padding-top: 10px ; 
    }

</style>


