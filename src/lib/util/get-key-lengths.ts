import { getKeys, getValueLength } from "@lib"

export const getKeyLengths = (x): any => {
    let result = {}
    let keys = getKeys(x)
    for (let object of x) {
        for (let key of keys) {
            let longestLength = result[key]
            let value = object[key]
            let currentLength = getValueLength(value)
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

export const getValueLengths_2 = (x: any): any => {
    let result = {}
    let keys = getKeys(x)
    for (let key of keys) {
        result[key] = getValueLength(key)
    }
    return result
}

// export const getValueLengths_1 = (x: string[]): any => {
//     let result = {}
//     let keys = getKeys(x)
//     for (let key of keys) {
//         result[key] = getValueLength(key)
//     }
//     return result
// }
