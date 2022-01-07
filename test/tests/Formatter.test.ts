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
        assert.sameMembers(f.keys, caseData.keys)
        assert.sameMembers(f.topKeys, caseData.topKeys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        // assert.equal(f.output, caseData.output)
    })

    it("case 2 - ARRAY", function () {
        let caseData = cases.CASE_2
        let f = new Formatter(caseData.input)
        f.format()
        assert.equal(f.jsonDataType, JsonDataType.ARRAY)
        assert.sameMembers(f.keys, caseData.keys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        assert.equal(f.output, caseData.output)
    })

    it("case 3 - OBJECT", function () {
        let caseData = cases.CASE_3
        let f = new Formatter(caseData.input)
        f.format()
        assert.equal(f.jsonDataType, JsonDataType.OBJECT)
        assert.sameMembers(f.keys, caseData.keys)
        assert.sameMembers(f.topKeys, caseData.topKeys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        // assert.equal(f.output, caseData.output)
    })

    it("case 4 - ARRAY", function () {
        let caseData = cases.CASE_4
        let f = new Formatter(caseData.input)
        f.format()
        assert.equal(f.jsonDataType, JsonDataType.ARRAY)
        assert.sameMembers(f.keys, caseData.keys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        assert.equal(f.output, caseData.output)
    })

})
