import PocketBase from 'pocketbase';

function getPocketBase() {
    return new PocketBase('http://127.0.0.1:8090'); 
}

export async function lataaKauppalista(listaId) {
    const pb = getPocketBase();
    
    console.log( `Ladataan lista ${listaId} palvelimelta...`)
    const asiat = pb.collection('kauppalistan_asiat');

    const response = await asiat.getList
        (
        1,
        100, 
        {
        filter: pb.filter('lista = {:listaId}', {listaId}),
        sort: 'nro',
        }
        );
    return response.items.map((x) => {
        return {
            id: x.id,
            teksti: x.teksti
        }
    });
}

export async function luoKauppalistanAsia(listaId, teksti) {
    if (!teksti) throw Error ('Lista ei saa olla tyhjä');
    
    const pb = getPocketBase();
    console.log('Lisätään listalle ${listaId} asia: ${teksti}',  {listaId}, {teksti})
    const asiat = pb.collection('kauppalistan_asiat');

    const response = await asiat.getList
        (
            1, 
            100, 
            {
                filter: pb.filter(
                    'lista = {:listaId} && teksti = {:teksti} ', {
                    listaId,
                    teksti,
                }),
            }
        );
    if (response.items.length) throw Error ('On jo listassa');
    await asiat.create({lista: listaId, teksti});
}



export async function deleteList(listaId) {
	const pb = getPocketBase();
    const asiat = pb.collection('kauppalistan_asiat');
    await asiat.delete(listaId)

	// const index = asiat.findIndex((list) => list.id === listaId);

	// if (index !== -1) {
	// 	asiat.splice(index, 1);
	// }
}
