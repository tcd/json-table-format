import { isString, isNumber, isBoolean } from "lodash"

export const isObject = (x: any): boolean => {

    if (x === null)      { return false }
    if (x === undefined) { return false }

    if (isString(x))      { return false }
    if (isNumber(x))      { return false }
    if (isBoolean(x))     { return false }
    if (Array.isArray(x)) { return false }

    return true
}
