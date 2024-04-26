/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3s4386tgwusmyt2")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("ap0beayb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pnjb5kvw",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3s4386tgwusmyt2")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ap0beayb",
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
  }))

  // remove
  collection.schema.removeField("pnjb5kvw")

  return dao.saveCollection(collection)
})
