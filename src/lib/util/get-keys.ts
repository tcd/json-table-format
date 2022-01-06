import {
    MeasurableJsonArrayType,
    MeasurableJsonObjectType,
} from "@types"

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
