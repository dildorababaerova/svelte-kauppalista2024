import PocketBase from 'pocketbase';

export async function lataaKauppalista(listaId) {
    const pb = getPocketBase();
    
    console.log( 'Ladataan lista ${listaId} palvelimelta...', {listaId})
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
    return response.items.map((x) =>x.teksti);
}

export async function luoKauppalistanAsia(listaId, teksti) {
    if (!teksti) throw Error ('Lista ei saa olla tyhjä');
    
    const pb = getPocketBase();
    console.log('Lisätään listalle ${listaId} asia: ${teksti}',  {listaId}, {teksti})
    const asiat = pb.collection('kauppalistan_asiat');

    const response = await asiat.getList
        (1, 100, {
        filter: pb.filter(
        'lista = {:listaId} && teksti = {:teksti} ', {
        listaId,
        teksti,
        }),
        });
    if (response.items.length) throw Error ('On jo listassa');
    await asiat.create({lista: listaId, teksti});
}

function getPocketBase() {
    return new PocketBase('http://127.0.0.1:8090'); 
}