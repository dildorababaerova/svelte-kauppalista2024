/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b67ojbbz8bg0k1w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v4s95qt4",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b67ojbbz8bg0k1w")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
