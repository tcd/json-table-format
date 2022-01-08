import { assert } from "chai"

import { getLength } from "../../src/lib"

describe("getLength()", function () {
    describe("invalid cases", function () {
        it("returns '-1' for undefined", function () { assert.equal(getLength(undefined), -1) })
        it("returns '-1' for arrays",    function () { assert.equal(getLength([1, 2, 3]), -1) })
    })
    describe("valid cases", function () {
        it("works on 'true'",            function () { assert.equal(getLength(true),    4) })
        it("works on 'false'",           function () { assert.equal(getLength(false),   5) })
        it("works on positive integers", function () { assert.equal(getLength(420),     3) })
        it("works on negative integers", function () { assert.equal(getLength(-420),    4) })
        it("works on positive decimals", function () { assert.equal(getLength(420.69),  6) })
        it("works on negative decimals", function () { assert.equal(getLength(-420.69), 7) })
    })
})
