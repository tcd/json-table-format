import { assert } from "chai"

import { getKeys } from "@lib"

import * as cases from "@cases"

describe("getKeys()", function () {

    it("case 2", function () {
        let caseData = cases.CASE_2
        const want = caseData.keys
        const have = getKeys(JSON.parse(caseData.input))
        assert.sameMembers(have, want)
    })

})
