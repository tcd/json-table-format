export const CASE_1 = {
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
`
}
