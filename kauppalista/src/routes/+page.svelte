<script>
import { enhance } from '$app/forms';
   
    export let data; 
    export let form;

</script>

<div class komponentti>
<h1>Kauppalista</h1>
    <ul>
        {#each data.lists as list}
        <li>
            <input type="checkbox" />
            {list}
        </li>
        {/each}
    </ul>
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
    ul {
        color: #8a2be2;
        background-color: rgba(96, 224, 213, 0.556);
        font-size: 100%;
        
    }

    label, li {
        display: block;
        padding-top: 10px ; 
    }

</style>


