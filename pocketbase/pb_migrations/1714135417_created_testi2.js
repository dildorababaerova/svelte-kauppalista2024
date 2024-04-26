/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0o8u7eyp6b277pa",
    "created": "2024-04-26 12:43:37.070Z",
    "updated": "2024-04-26 12:43:37.070Z",
    "name": "testi2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ygfwnw1f",
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
    "indexes": [
      "CREATE INDEX `idx_LBT4Gwn-testi2` ON `testi2` (`nimi`)"
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
  const collection = dao.findCollectionByNameOrId("0o8u7eyp6b277pa");

  return dao.deleteCollection(collection);
})
