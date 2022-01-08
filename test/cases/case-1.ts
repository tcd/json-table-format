import { JsonDataType } from "../../src/types"

export const CASE_1 = {
    type: JsonDataType.OBJECT,
    input:
`
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
`,
    output:
`
{
    "firstName": { "type": "string",  "description": "The person's first name." },
    "lastName":  { "type": "string",  "description": "The person's last name." },
    "age":       { "type": "integer", "description": "Age in years which must be equal to or greater than zero.", "minimum": 0 }
}
`,
    keys: [
        "type",
        "description",
        "minimum",
    ],
    topKeys: [
        "firstName",
        "lastName",
        "age",
    ],
    keyLengths: {
        "type": 6,
        "description": 13,
        "minimum": 9,
    },
    valueLengths: {
        "type": 9,
        "description": 59,
        "minimum": 1,
    },
}
