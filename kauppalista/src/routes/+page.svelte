<script>
    export let data; 

let newList = '';

function addList() {
    if (!newList) return;
    data.lists.push(newList);
    data = data;
    newList = '';
}
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
    <form class="new" method="POST">
        <label for="new-list"> Add new list</label>
        <input 
        id = "new-list" 
        name="list" 
        type="text" 
        bind:value={newList}
        required
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


