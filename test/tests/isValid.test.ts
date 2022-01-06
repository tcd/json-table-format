import { assert } from "chai"

import { isValid } from "@lib"

import * as cases from "@cases"

describe("isValid()", function () {

    it("case 1", function () {
        let caseData = cases.CASE_1
        const have = isValid(JSON.parse(caseData.input))
        assert.isFalse(have)
    })

    it("case 2", function () {
        let caseData = cases.CASE_2
        const have = isValid(JSON.parse(caseData.input))
        assert.isTrue(have)
    })

    it("case 3", function () {
        let caseData = cases.CASE_3
        const have = isValid(JSON.parse(caseData.input))
        assert.isFalse(have)
    })

})
