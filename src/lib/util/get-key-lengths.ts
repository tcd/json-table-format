import { getKeys, getValueLength } from "."

export type KeyLengths = {
    [key: string]: number
}

export const getKeyLengths = (x): any => {
    let result = {}
    let keys = getKeys(x)
    // console.log(keys) // [ 'type', 'description', 'required', 'optional', 'minimum' ]
    for (let object of x) {
        // console.log(object) // these are objects
        for (let key of keys) {
            let longestLength = result[key]
            let value = object[key]
            let currentLength = getValueLength(value)
            console.log(`longestLength: ${longestLength}, currentLength: ${currentLength}`)
            if (
                   longestLength === null
                || longestLength === undefined
                || currentLength > longestLength
            ) {
                result[key] = currentLength
            }
        }
    }
    // console.log(result)
    return result
}
