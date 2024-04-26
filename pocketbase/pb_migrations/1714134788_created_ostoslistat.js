/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l7rul8ru7bo2lp7",
    "created": "2024-04-26 12:33:08.586Z",
    "updated": "2024-04-26 12:33:08.586Z",
    "name": "ostoslistat",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m5ekw2mg",
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
      "query": "SELECT id, nimi FROM kauppalistat WHERE nimi LIKE '%ostos%';"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l7rul8ru7bo2lp7");

  return dao.deleteCollection(collection);
})
