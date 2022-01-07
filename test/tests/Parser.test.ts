import { assert } from "chai"

import { JsonDataType } from "@types"
import { Parser } from "@lib"
import * as cases from "@cases"

describe("Parser", function () {

    it("case 1 - OBJECT", function () {
        let caseData = cases.CASE_1
        let f = new Parser(caseData.input)
        let output = f.format()
        assert.equal(f.jsonDataType, JsonDataType.OBJECT)
        assert.sameMembers(f.keys, caseData.keys)
        assert.sameMembers(f.topKeys, caseData.topKeys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        // assert.equal(output.trim(), caseData.output.trim())
    })

    it("case 2 - ARRAY", function () {
        let caseData = cases.CASE_2
        let f = new Parser(caseData.input)
        let output = f.format()
        assert.equal(f.jsonDataType, JsonDataType.ARRAY)
        assert.sameMembers(f.keys, caseData.keys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        assert.equal(output.trim(), caseData.output.trim())
    })

    it("case 3 - OBJECT", function () {
        let caseData = cases.CASE_3
        let f = new Parser(caseData.input)
        let output = f.format()
        assert.equal(f.jsonDataType, JsonDataType.OBJECT)
        assert.sameMembers(f.keys, caseData.keys)
        assert.sameMembers(f.topKeys, caseData.topKeys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        // assert.equal(f.output.trim(), caseData.output.trim())
    })

    it("case 4 - ARRAY", function () {
        let caseData = cases.CASE_4
        let f = new Parser(caseData.input)
        let output = f.format()
        assert.equal(f.jsonDataType, JsonDataType.ARRAY)
        assert.sameMembers(f.keys, caseData.keys)
        assert.deepEqual(f.keyLengths, caseData.keyLengths)
        assert.deepEqual(f.valueLengths, caseData.valueLengths)
        assert.equal(output.trim(), caseData.output.trim())
    })

    it("case 5 - big ARRAY", function () {
        let caseData = cases.CASE_5
        let f = new Parser(caseData.input)
        let output = f.format()
        assert.equal(f.jsonDataType, JsonDataType.ARRAY)
        // assert.sameMembers(f.keys, caseData.keys)
        // assert.deepEqual(f.keyLengths, caseData.keyLengths)
        // assert.deepEqual(f.valueLengths, caseData.valueLengths)
        assert.equal(output.trim(), caseData.output.trim())
    })

})
