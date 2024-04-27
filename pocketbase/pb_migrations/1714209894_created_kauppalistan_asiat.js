/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8potbzof082zyfd",
    "created": "2024-04-27 09:24:54.124Z",
    "updated": "2024-04-27 09:24:54.124Z",
    "name": "kauppalistan_asiat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "guxg0vfe",
        "name": "lista",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "9oq7j8094wtmaha",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "n5velwen",
        "name": "nro",
        "type": "number",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 10000,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "deyan9zq",
        "name": "teksti",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "p5mq5fqb",
        "name": "ostettu",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8potbzof082zyfd");

  return dao.deleteCollection(collection);
})
