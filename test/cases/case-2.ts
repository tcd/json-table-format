export const CASE_2 = {
    input:
`
[
    {
        "type": "string",
        "description": "The person's first name."
    },
    {
        "type": "string",
        "description": "The person's last name."
    },
    {
        "description": "Age in years which must be equal to or greater than zero.",
        "type": "integer",
        "minimum": 0
    }
]
`,
    output:
`
[
    { "type": "string",  "description": "The person's first name." },
    { "type": "string",  "description": "The person's last name." },
    { "type": "integer", "description": "Age in years which must be equal to or greater than zero.", "minimum": 0 }
]
`
}
