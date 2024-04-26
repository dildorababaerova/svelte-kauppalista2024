/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9oq7j8094wtmaha",
    "created": "2024-04-26 21:00:35.535Z",
    "updated": "2024-04-26 21:00:35.535Z",
    "name": "kauppalistat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eb2rsgl2",
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
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9oq7j8094wtmaha");

  return dao.deleteCollection(collection);
})
