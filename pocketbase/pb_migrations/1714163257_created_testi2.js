/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b67ojbbz8bg0k1w",
    "created": "2024-04-26 20:27:37.348Z",
    "updated": "2024-04-26 20:27:37.348Z",
    "name": "testi2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v4s95qt4",
        "name": "nimi",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1000,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_J0bOBZZ` ON `testi2` (`nimi`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("b67ojbbz8bg0k1w");

  return dao.deleteCollection(collection);
})
