import { assert } from "chai"

import { getValueLength } from "@src/lib"

describe("getValueLength()", function () {

    describe("exceptions", function () {

        it("returns '-1' for undefined", function () {
            const have = getValueLength(undefined)
            assert.equal(have, -1)
        })

        it("returns '-1' for arrays", function () {
            const have = getValueLength([1, 2, 3])
            assert.equal(have, -1)
        })

    })

    describe("valid cases", function () {

        it("works on 'true'", function () {
            const have = getValueLength(true)
            assert.equal(have, 4)
        })

        it("works on 'false'", function () {
            const have = getValueLength(false)
            assert.equal(have, 5)
        })

        it("works on positive integers", function () {
            const have = getValueLength(420)
            assert.equal(have, 3)
        })

        it("works on negative integers", function () {
            const have = getValueLength(-420)
            assert.equal(have, 4)
        })

    })


})
