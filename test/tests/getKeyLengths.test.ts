import { assert } from "chai"

import { getKeyLengths } from "@lib"

import * as cases from "@cases"

describe("getKeyLengths()", function () {

        // it("case 1", function () {
        //     let caseData = cases.CASE_1
        //     const want = caseData.output
        //     const have = format(caseData.input)
        //     assert.equal(have, want)
        // })

        it("case 2", function () {
            let caseData = cases.CASE_2
            const want: any = caseData.keyLengths
            const have: any = getKeyLengths(JSON.parse(caseData.input))
            assert.deepEqual(have, want)
        })


})
