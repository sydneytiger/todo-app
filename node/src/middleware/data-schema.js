module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "user",
    "items"
  ],
  "properties": {
    "user": {
      "$id": "#/properties/user",
      "type": "object",
      "title": "The User Schema",
      "required": [
        "firstName",
        "lastName",
        "userName"
      ],
      "properties": {
        "firstName": {
          "$id": "#/properties/user/properties/firstName",
          "type": "string",
          "title": "The Firstname Schema",
          "default": "",
          "examples": [
            "Hong"
          ],
          "pattern": "^(.*)$"
        },
        "lastName": {
          "$id": "#/properties/user/properties/lastName",
          "type": "string",
          "title": "The Lastname Schema",
          "default": "",
          "examples": [
            "Zhang"
          ],
          "pattern": "^(.*)$"
        },
        "userName": {
          "$id": "#/properties/user/properties/userName",
          "type": "string",
          "title": "The Username Schema",
          "default": "",
          "examples": [
            "hongzhang"
          ],
          "pattern": "^(.*)$"
        }
      }
    },
    "items": {
      "$id": "#/properties/items",
      "type": "array",
      "title": "The Items Schema",
      "items": {
        "$id": "#/properties/items/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "name",
          "order"
        ],
        "properties": {
          "name": {
            "$id": "#/properties/items/items/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
              "Garden hose"
            ],
            "pattern": "^(.*)$"
          },
          "order": {
            "$id": "#/properties/items/items/properties/order",
            "type": "integer",
            "title": "The Order Schema",
            "default": 0,
            "examples": [
              1
            ]
          }
        }
      }
    }
  }
}