import { assert } from "chai"

import { JsonDataType } from "@types"
import {
    determineJsonDataType as func
} from "@lib"

import * as cases from "@cases"

describe("determineJsonDataType()", function () {
    describe("invalid cases", function () {
        it("empty object - OTHER", function () {
            const have = func({})
            assert.equal(have, JsonDataType.OTHER)
        })
    })
    describe("valid cases", function () {
        it("case 1 - OBJECT", function () {
            let { input, type } = cases.CASE_1
            const have = func(JSON.parse(input))
            assert.equal(have, type)
        })
        it("case 2 - ARRAY", function () {
            let { input, type } = cases.CASE_2
            const have = func(JSON.parse(input))
            assert.equal(have, type)
        })
        it("case 3 - OBJECT", function () {
            let { input, type } = cases.CASE_3
            const have = func(JSON.parse(input))
            assert.equal(have, type)
        })
    })
})
