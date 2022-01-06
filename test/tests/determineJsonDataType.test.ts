import { assert } from "chai"

import { JsonDataType } from "@types"
import {
    determineJsonDataType as func
} from "@lib"

import * as cases from "@cases"

describe("determineJsonDataType()", () => {
    describe("invalid cases", () => {
        it("empty object - OTHER", () => {
            const have = func({})
            assert.equal(have, JsonDataType.OTHER)
        })
    })
    describe("valid cases", () => {
        it("case 1 - OBJECT", () => {
            let { input, type } = cases.CASE_1
            const have = func(JSON.parse(input))
            assert.equal(have, type)
        })
        it("case 2 - ARRAY", () => {
            let { input, type } = cases.CASE_2
            const have = func(JSON.parse(input))
            assert.equal(have, type)
        })
        it("case 3 - OBJECT", () => {
            let { input, type } = cases.CASE_3
            const have = func(JSON.parse(input))
            assert.equal(have, type)
        })
    })
})
