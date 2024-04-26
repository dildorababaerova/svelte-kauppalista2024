/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ylgxxbs9ji1i4f6",
    "created": "2024-04-26 21:03:49.467Z",
    "updated": "2024-04-26 21:03:49.467Z",
    "name": "ostoslistat",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3aqsjgur",
        "name": "nimi",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, nimi FROM kauppalistat WHERE nimi LIKE '%ostos%'"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ylgxxbs9ji1i4f6");

  return dao.deleteCollection(collection);
})
