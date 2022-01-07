import { JsonDataType } from "@types"

export const CASE_4 = {
    type: JsonDataType.ARRAY,
    input: `[{"id":1,"name":"Sword","physical":true,"elemental":false,"game_order":1},{"id":2,"name":"Spear","physical":true,"elemental":false,"game_order":2},{"id":3,"name":"Dagger","physical":true,"elemental":false,"game_order":3},{"id":4,"name":"Axe","physical":true,"elemental":false,"game_order":4},{"id":5,"name":"Bow","physical":true,"elemental":false,"game_order":5},{"id":6,"name":"Staff","physical":true,"elemental":false,"game_order":6},{"id":7,"name":"Fire","physical":false,"elemental":true,"game_order":7},{"id":8,"name":"Ice","physical":false,"elemental":true,"game_order":8},{"id":9,"name":"Lightning","physical":false,"elemental":true,"game_order":9},{"id":10,"name":"Wind","physical":false,"elemental":true,"game_order":10},{"id":11,"name":"Light","physical":false,"elemental":true,"game_order":11},{"id":12,"name":"Dark","physical":false,"elemental":true,"game_order":12}]`,
    output:
`
[
    { "id":  1, "name": "Sword",     "physical": true,  "elemental": false, "game_order":  1 },
    { "id":  2, "name": "Spear",     "physical": true,  "elemental": false, "game_order":  2 },
    { "id":  3, "name": "Dagger",    "physical": true,  "elemental": false, "game_order":  3 },
    { "id":  4, "name": "Axe",       "physical": true,  "elemental": false, "game_order":  4 },
    { "id":  5, "name": "Bow",       "physical": true,  "elemental": false, "game_order":  5 },
    { "id":  6, "name": "Staff",     "physical": true,  "elemental": false, "game_order":  6 },
    { "id":  7, "name": "Fire",      "physical": false, "elemental": true,  "game_order":  7 },
    { "id":  8, "name": "Ice",       "physical": false, "elemental": true,  "game_order":  8 },
    { "id":  9, "name": "Lightning", "physical": false, "elemental": true,  "game_order":  9 },
    { "id": 10, "name": "Wind",      "physical": false, "elemental": true,  "game_order": 10 },
    { "id": 11, "name": "Light",     "physical": false, "elemental": true,  "game_order": 11 },
    { "id": 12, "name": "Dark",      "physical": false, "elemental": true,  "game_order": 12 }
]
`,
    keys: [
        "id",
        "name",
        "physical",
        "elemental",
        "game_order",
    ],
    keyLengths: {
        "id": 4,
        "name": 6,
        "physical": 10,
        "elemental": 11,
        "game_order": 12,
    },
    valueLengths: {
        "id": 2,
        "name": 11,
        "physical": 5,
        "elemental": 5,
        "game_order": 2,
    },
}
