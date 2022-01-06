export const CASE_2 = {
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
        "type": "string",
        "description": "The person's last name.",
        "required": true,
        "optional": false
    },
    {
        "type": "integer",
        "description": "Age in years which must be equal to or greater than zero.",
        "required": false,
        "optional": true,
        "minimum": 0
    }
]
`,
    output:
`
[
    { "type": "string",  "description": "The person's first name.",                                  "required": true,  "optional": false              },
    { "type": "string",  "description": "The person's last name.",                                   "required": true,  "optional": false              },
    { "type": "integer", "description": "Age in years which must be equal to or greater than zero.", "required": false, "optional": true, "minimum": 0 }
]
`,
    keys: [
        "type",
        "description",
        "required",
        "optional",
        "minimum",
    ],
    keyLengths: {
        "type": 6,
        "description": 13,
        "required": 10,
        "optional": 10,
        "minimum": 9,
    },
    valueLengths: {
        "type": 9,
        "description": 59,
        "required": 5,
        "optional": 5,
        "minimum": 1,
    },
}
