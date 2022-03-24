# json-table-format

## given this input:

```json
{ 
    "firstName": {
        "type": "string",
        "description": "The person's first name."
    },
    "lastName": {
        "type": "string",
        "description": "The person's last name."
    },
    "age": {
        "description": "Age in years which must be equal to or greater than zero.",
        "type": "integer",
        "minimum": 0
    }
}
```

## produce this output:

```json
{ 
    "firstName": { "type": "string",  "description": "The person's first name." },
    "lastName":  { "type": "string",  "description": "The person's last name." },
    "age":       { "type": "integer", "description": "Age in years which must be equal to or greater than zero.", "minimum": 0 }
}
```
