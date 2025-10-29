
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "response",
    "description": "Object specification for assessment output",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "response": {
        "$id": "response@iqb-standard@2.0",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Response",
        "description": "Data structure produced by verona players",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_]+$",
            "description": "Identifier for the data source (variable)",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "status": {
            "type": "string",
            "enum": [
              "UNSET",
              "NOT_REACHED",
              "DISPLAYED",
              "VALUE_CHANGED",
              "DERIVE_ERROR",
              "CODING_COMPLETE",
              "NO_CODING",
              "INVALID",
              "CODING_INCOMPLETE",
              "CODING_ERROR",
              "PARTLY_DISPLAYED",
              "DERIVE_PENDING",
              "INTENDED_INCOMPLETE"
            ],
            "description": "Status as stage in the workflow of creating and coding a variable's value",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "value": {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              {
                "type": "array",
                "items": {
                  "type": [
                    "number",
                    "null"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              {
                "type": "array",
                "items": {
                  "type": [
                    "boolean",
                    "null"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              {
                "type": "number",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              {
                "type": "null",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              {
                "type": "boolean",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            ],
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "subform": {
            "type": "string",
            "description": "If variables i. e. data source ids are not unique in the unit, 'subform' can specify the sub object related to the specific variable.",
            "x-parser-schema-id": "<anonymous-schema-14>"
          },
          "code": {
            "type": "integer",
            "description": "Code representing the category of the value after coding process.",
            "x-parser-schema-id": "<anonymous-schema-15>"
          },
          "score": {
            "type": "integer",
            "description": "This value represents the result evaluation of the code after coding process.",
            "x-parser-schema-id": "<anonymous-schema-16>"
          }
        },
        "required": [
          "id",
          "status",
          "value"
        ],
        "x-parser-schema-id": "response@iqb-standard@2.0"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  