import {
    MeasurableJsonArrayType,
    MeasurableJsonObjectType,
} from "@types"

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
    // let keys = []
    // try {
    //     for (let object in json) {
    //         for (let value of object) {
    //             if (!isMeasurable(value)) {
    //                 return false
    //             }
    //         }
    //     }
    // } catch (error) {
    //     console.error(error)
    //     return []
    // }
}

