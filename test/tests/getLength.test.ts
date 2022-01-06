import { assert } from "chai"

import { getLength } from "@lib"

describe("getLength()", () => {
    describe("invalid cases", () => {
        it("returns '-1' for undefined", () => { assert.equal(getLength(undefined), -1) })
        it("returns '-1' for arrays",    () => { assert.equal(getLength([1, 2, 3]), -1) })
    })
    describe("valid cases", () => {
        it("works on 'true'",            () => { assert.equal(getLength(true),    4) })
        it("works on 'false'",           () => { assert.equal(getLength(false),   5) })
        it("works on positive integers", () => { assert.equal(getLength(420),     3) })
        it("works on negative integers", () => { assert.equal(getLength(-420),    4) })
        it("works on positive decimals", () => { assert.equal(getLength(420.69),  6) })
        it("works on negative decimals", () => { assert.equal(getLength(-420.69), 7) })
    })
})
