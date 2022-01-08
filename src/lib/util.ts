import {
    isString,
    isNumber,
    isBoolean,
} from "lodash"

import {
    MeasurableJsonArrayType,
    MeasurableJsonObjectType,
    JsonDataType,
} from "../types"

/**
 * Given an array of objects, returns a unique array of all keys contained in the objects.
 *
 * @param x an array of objects.
 */
 export const getKeys = (x: MeasurableJsonArrayType): string[] => {
    try {
        const notUniqueKeys = x.flatMap(x => Object.keys(x))
        const uniqueKeys = [...new Set(notUniqueKeys)]
        return uniqueKeys
    } catch (error) {
        console.error(error)
        return []
    }
}

/**
 * Given an array of objects, returns a unique array of all keys contained in the objects.
 *
 * @param x an array of objects.
 */
export const getKeys_array = (json: MeasurableJsonArrayType): string[] => {
    try {
        const notUniqueKeys = json.flatMap(x => Object.keys(x))
        const uniqueKeys = [...new Set(notUniqueKeys)]
        return uniqueKeys
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getKeys_object = (json: MeasurableJsonObjectType): string[] => {
    try {
        const notUniqueKeys = Object.values(json).flatMap(x => Object.keys(x))
        const uniqueKeys = [...new Set(notUniqueKeys)]
        return uniqueKeys
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getTopKeys = (json: MeasurableJsonObjectType): string[] => {
    try {
        const notUniqueKeys = Object.keys(json)
        const uniqueKeys = [...new Set(notUniqueKeys)]
        return uniqueKeys
    } catch (error) {
        console.error(error)
        return []
    }
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

export const determineJsonDataType = (json: object): JsonDataType => {

    if (JSON.stringify(json) === "{}") {
        return JsonDataType.OTHER
    }

    if (isJsonArray(json)) {
        return JsonDataType.ARRAY
    }

    if (isJsonObjectArray(json)) {
        return JsonDataType.OBJECT
    }

    return JsonDataType.OTHER
}

const isJsonArray = (json: object): boolean => {
    if (!Array.isArray(json)) {
        return false
    }
    for (let y of json) {
        if (!isObject(y)) {
            return false
        }
    }
    return true
}

const isJsonObjectArray = (json: object): boolean => {
    if (Array.isArray(json)) {
        return false
    }
    for (let object in json) {
        for (let value of object) {
            if (!isMeasurable(value)) {
                return false
            }
        }
    }
    return true
}

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

export const getLongestValueLengths_array = (json: MeasurableJsonArrayType): any => {
    let result = {}
    let keys = getKeys_array(json)
    for (let object of json) {
        for (let key of keys) {
            let longestLength = result[key]
            let value = object[key]
            let currentLength = getLength(value)
            if (
                   longestLength === null
                || longestLength === undefined
                || currentLength > longestLength
            ) {
                result[key] = currentLength
            }
        }
    }
    return result
}

export const getLongestValueLengths_object = (json: MeasurableJsonObjectType): any => {
    let objects = Object.values(json)
    return getLongestValueLengths_array(objects)
}

export const getLongestKeyLengths_2 = (x: MeasurableJsonArrayType): any => {
    let result = {}
    let keys = getKeys_array(x)
    for (let key of keys) {
        result[key] = getLength(key)
    }
    return result
}

export const getLongestKeyLengths_1 = (values: string[]): any => {
    let result = {}
    for (let value of values) {
        result[value] = getLength(value)
    }
    return result
}
