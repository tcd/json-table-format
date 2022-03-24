import {
    MeasurableJsonArrayType,
    MeasurableJsonObjectType,
} from "@types"
import {
    getKeys_array,
    getLength,
} from "@lib"

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
    // let result = {}
    // for (let value of values) {
    //     result[value] = getLength(value)
    // }
    // return result
    // return values.reduce((previous, current) => ({...previous, [current]: getLength(current)}), {})
    return values.reduce((x, y) => ({...x, [y]: getLength(y)}), {})
}
