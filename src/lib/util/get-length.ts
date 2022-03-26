// import {
//     isString,
//     isNumber,
// } from "lodash"
import lodash from "lodash"
const { isString, isNumber } = lodash

export const VALUE_LENGTHS = {
    "true":  4,
    "false": 5,
    "null":  4,
}

/**
 * Returns the length of a value when represented in JSON
 */
export const getLength = (x: any): number => {

    if (x === undefined)  { return -1 }
    if (Array.isArray(x)) { return -1 }

    if (x === null) { return 4 }

    if (x === true)  { return 4 }
    if (x === false) { return 5 }

    if (isString(x)) {
        return x.length + 2 // for the double quotes
    }

    if (isNumber(x)) {
        return `${x}`.length
    }

    return -1 // didn't get an accurate length; might be an object
}
