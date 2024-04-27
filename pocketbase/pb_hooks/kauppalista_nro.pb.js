
///<reference path="../pb_data/types.d.ts" />
// fires only for "users" and "articles" collections
onRecordBeforeCreateRequest((e) => {
    if (!e.record.nro) {
        const records = $app.dao().findRecordsByFilter(
        "kauppalistan_asiat",               // collection
        "lista = {:listaId} && nro !=''",  // filter
        "-nro",                                   // sort
        1,                                            // limit
        0,                                             // offset
        { listaId: e.record.get('lista')},                          // optional filter params
    );

    let suurinNumero = 0;
    if (records.length) {
        suurinNumero = records[0].get('nro') || 0;
        console.log(suurinNumero)
    }
    const uusiNumero = suurinNumero + 1;
    e.record.set('nro', uusiNumero);
    $app.dao().saveRecord(e.record);
    
    }
    }, "kauppalistan_asiat");
