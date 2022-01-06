import { assert } from "chai"

import {
    getLongestValueLengths_array,
    getLongestValueLengths_object,
} from "@lib"
import * as cases from "@cases"

describe("getLongestValueLengths()", function () {
    it("case 1", function () {
        let caseData = cases.CASE_1
        const want = caseData.valueLengths
        const have = getLongestValueLengths_object(JSON.parse(caseData.input))
        assert.deepEqual(have, want)
    })
    it("case 2", function () {
        let caseData = cases.CASE_2
        const want: any = caseData.valueLengths
        const have: any = getLongestValueLengths_array(JSON.parse(caseData.input))
        assert.deepEqual(have, want)
    })
    it("case 3", function () {
        let caseData = cases.CASE_3
        const want = caseData.valueLengths
        const have = getLongestValueLengths_object(JSON.parse(caseData.input))
        assert.deepEqual(have, want)
    })
})
