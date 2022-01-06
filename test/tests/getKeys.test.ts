import { assert } from "chai"

import {
    getKeys_object,
} from "@lib"

import * as cases from "@cases"

describe("getKeys()", function () {

    it("case 1 - OBJECT", function () {
        let { input, keys } = cases.CASE_1
        const want = keys
        const have = getKeys_object(JSON.parse(input))
        assert.sameMembers(have, keys)
    })

    it("case 2 - ARRAY", function () {
        let { input, keys } = cases.CASE_2
        const want = keys
        const have = getKeys_object(JSON.parse(input))
        assert.sameMembers(have, keys)
    })

    it("case 3 - OBJECT", function () {
        let { input, keys } = cases.CASE_3
        const want = keys
        const have = getKeys_object(JSON.parse(input))
        assert.sameMembers(have, keys)
    })

})
