# json-table-format

## Goals

### given this input

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

### produce this output

```json
{ 
    "firstName": { "type": "string",  "description": "The person's first name." },
    "lastName":  { "type": "string",  "description": "The person's last name." },
    "age":       { "type": "integer", "description": "Age in years which must be equal to or greater than zero.", "minimum": 0 }
}
```


## Usage

First, install:

```bash
npm install -g json-table-format
```

Second, use:

```bash
# prints to STDOUT by default
json-table-format ./path/to/file.json

# or you can format the file in-place
json-table-format ./path/to/file.json --overwrite
```


## References

- [JSON Lines](https://jsonlines.org/examples/)
- [rhysd/fixjson](https://github.com/rhysd/fixjson)
