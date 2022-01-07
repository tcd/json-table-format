import { JsonDataType } from "@types"

export const CASE_2 = {
    type: JsonDataType.ARRAY,
    input:
`
[
    {
        "type": "string",
        "description": "The person's first name.",
        "required": true,
        "optional": false
    },
    {
        "type": "integer",
        "description": "Age in years which must be equal to or greater than zero.",
        "required": false,
        "optional": true,
        "minimum": 0
    },
    {
        "type": "string",
        "description": "The person's last name.",
        "required": true,
        "optional": false
    },
    {
        "type": "integer",
        "description": "Favorite number",
        "required": true,
        "optional": true,
        "maximum": 0
    }
]
`,
    output:
`
[
    { "type": "string",  "description": "The person's first name.",                                  "required": true,  "optional": false },
    { "type": "integer", "description": "Age in years which must be equal to or greater than zero.", "required": false, "optional": true,  "minimum": 0 },
    { "type": "string",  "description": "The person's last name.",                                   "required": true,  "optional": false },
    { "type": "integer", "description": "Favorite number",                                           "required": true,  "optional": true,  "maximum": 0 }
]
`,
    keys: [
        "type",
        "description",
        "required",
        "optional",
        "minimum",
        "maximum",
    ],
    keyLengths: {
        "type": 6,
        "description": 13,
        "required": 10,
        "optional": 10,
        "minimum": 9,
        "maximum": 9,
    },
    valueLengths: {
        "type": 9,
        "description": 59,
        "required": 5,
        "optional": 5,
        "minimum": 1,
        "maximum": 1,
    },
}
