/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3s4386tgwusmyt2",
    "created": "2024-04-26 20:19:35.537Z",
    "updated": "2024-04-26 20:19:35.537Z",
    "name": "ostoslistat",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ap0beayb",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, nimi FROM kauppalistat WHERE nimi LIKE '%ostos%';"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3s4386tgwusmyt2");

  return dao.deleteCollection(collection);
})
