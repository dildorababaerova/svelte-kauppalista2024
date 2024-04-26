/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1jno42e93zm9tqs",
    "created": "2024-04-26 21:06:33.368Z",
    "updated": "2024-04-26 21:06:33.368Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "erg9dncs",
        "name": "nimi",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1000,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_jA4zIzY` ON `test` (`nimi`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("1jno42e93zm9tqs");

  return dao.deleteCollection(collection);
})
