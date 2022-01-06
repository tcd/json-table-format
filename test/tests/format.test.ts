import * as assert from "assert"

import { format } from "@src/index"

import * as cases from "@cases"

describe("format()", function () {

    // describe("invalid inputs", function () {
    // })

    describe("end goals", function () {

        it("should format an object properly", function () {
            let caseData = cases.CASE_1
            const want = caseData.output
            const have = format(caseData.input)
            assert.equal(have, want)
        })

        it("should format an array of objects properly", function () {
            let caseData = cases.CASE_2
            const want = caseData.output
            const have = format(caseData.input)
            assert.equal(have, want)
        })

    })

})
