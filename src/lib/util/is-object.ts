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

export const isMeasurable = (x: any): boolean => {

    if (x === null)      { return true }
    if (x === undefined) { return true }

    if (isString(x))      { return true }
    if (isNumber(x))      { return true }
    if (isBoolean(x))     { return true }
    if (Array.isArray(x)) { return true }

    return false
}
