import { assert } from "chai"

import { JsonDataType } from "@types"
import { Formatter } from "@lib"
import * as cases from "@cases"

describe("Formatter", function () {

    it("case 1 - OBJECT", function () {
        let caseData = cases.CASE_1
        let f = new Formatter(caseData.input)
        f.format()
        assert.equal(f.jsonDataType, JsonDataType.OBJECT)
        assert.sameMembers(f._keys, caseData.keys)
        assert.sameMembers(f._topKeys, caseData.topKeys)
        assert.deepEqual(f._keyLengths, caseData.keyLengths)
        assert.deepEqual(f._valueLengths, caseData.valueLengths)
    })

    it("case 2 - ARRAY", function () {
        let caseData = cases.CASE_2
        let f = new Formatter(caseData.input)
        f.format()
        assert.equal(f.jsonDataType, JsonDataType.ARRAY)
        assert.sameMembers(f._keys, caseData.keys)
        assert.deepEqual(f._keyLengths, caseData.keyLengths)
        assert.deepEqual(f._valueLengths, caseData.valueLengths)
    })

    it("case 3 - OBJECT", function () {
        let caseData = cases.CASE_3
        let f = new Formatter(caseData.input)
        f.format()
        assert.equal(f.jsonDataType, JsonDataType.OBJECT)
        assert.sameMembers(f._keys, caseData.keys)
        assert.sameMembers(f._topKeys, caseData.topKeys)
        assert.deepEqual(f._keyLengths, caseData.keyLengths)
        assert.deepEqual(f._valueLengths, caseData.valueLengths)
    })

})
