/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("03xvctatrunbne0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "03xvctatrunbne0",
    "created": "2024-04-26 19:56:26.662Z",
    "updated": "2024-04-26 19:56:26.662Z",
    "name": "ostoslistat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iupcjllq",
        "name": "nimi",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
