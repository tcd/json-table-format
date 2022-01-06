import { assert } from "chai"

import { Formatter } from "@lib"

import { JsonDataType } from "@types"
import * as cases from "@cases"

const newFormatter = () => new Formatter(`[{ "name": "Clay" }]`)

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

    // it("case 2 - ARRAY", function () {
    //     let caseData = cases.CASE_2
    //     let f = new Formatter(caseData.input)
    //     // assert.isEmpty(f._errors)
    //     // assert.isFalse(f._isInvalid)
    //     f.format()
    //     // assert.isEmpty(f._errors)
    //     // assert.isFalse(f._isInvalid)
    //     assert.equal(f.jsonDataType, JsonDataType.ARRAY)
    //     // assert.isTrue(f.isValid())
    // })

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

    // describe("case 2 - ARRAY", function () {
    //     let caseData = cases.CASE_2
    //     let formatter = new Formatter(caseData.input)
    //     // formatter.format()
    //     // assert.isTrue(formatter.isValid())
    //     it("constructor()", function () {
    //         let formatter = new Formatter(caseData.input)
    //         assert.equal(formatter.jsonDataType, JsonDataType.OTHER)
    //         assert.isFalse(formatter._isInvalid)
    //     })
    //     it("constructor()", function () {
    //         let formatter = new Formatter(caseData.input)
    //         assert.equal(formatter.jsonDataType, JsonDataType.OTHER)
    //     })
    // })

    // describe("basic functionality", function () {
    //     it("constructor()", function () {
    //         let f = newFormatter()
    //         assert.equal(f.jsonDataType, JsonDataType.OTHER)
    //         assert.isFalse(f._isInvalid)
    //     })
    //     it("constructor()", function () {
    //         let f = newFormatter()
    //     })
    // })

})
