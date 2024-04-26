/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f8kigiakjsfts14",
    "created": "2024-04-26 12:27:43.110Z",
    "updated": "2024-04-26 12:27:43.110Z",
    "name": "kauppalistat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hb0z7vgz",
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
  const collection = dao.findCollectionByNameOrId("f8kigiakjsfts14");

  return dao.deleteCollection(collection);
})
