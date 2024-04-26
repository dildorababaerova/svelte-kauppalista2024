/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "01u6egl1ll6j50e",
    "created": "2024-04-26 20:02:43.162Z",
    "updated": "2024-04-26 20:02:43.162Z",
    "name": "ostoslistat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vzchnuyr",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("01u6egl1ll6j50e");

  return dao.deleteCollection(collection);
})
