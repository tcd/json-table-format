import {
    MeasurableJsonArrayType,
    MeasurableJsonObjectType,
} from "@types"
import {
    getKeys,
    getLength,
} from "@lib"

export const getLongestValueLengths = (x: MeasurableJsonArrayType): any => {
    let result = {}
    let keys = getKeys(x)
    for (let object of x) {
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

export const getLongestValueLengths_array = (x: MeasurableJsonArrayType): any => {
    let result = {}
    let keys = getKeys(x)
    for (let object of x) {
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

// export const getLongestValueLengths_object = (x: MeasurableJsonObjectType): any => {
//     let result = {}
//     let keys = getKeys(x)
//     for (let object of x) {
//         for (let key of keys) {
//             let longestLength = result[key]
//             let value = object[key]
//             let currentLength = getLength(value)
//             if (
//                    longestLength === null
//                 || longestLength === undefined
//                 || currentLength > longestLength
//             ) {
//                 result[key] = currentLength
//             }
//         }
//     }
//     return result
// }

export const getLongestKeyLengths_2 = (x: MeasurableJsonArrayType): any => {
    let result = {}
    let keys = getKeys(x)
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
