import { JsonDataType } from "@types"
import { isObject } from "@lib"

export const determineJsonDataType = (x: object): JsonDataType => {

    if (JSON.stringify(x) === "{}") {
        return JsonDataType.OTHER
    }

    if (isJsonArray(x)) {
        return JsonDataType.ARRAY
    }

    return JsonDataType.OTHER
}

const isJsonArray = (x: object): boolean => {
    if (!Array.isArray(x)) {
        return false
    }
    for (let y of x) {
        if (!isObject(y)) {
            return false
        }
    }
    return true
}

const isJsonObjectArray = (x: object): boolean => {
    if (!Array.isArray(x)) {
        return false
    }
    for (let y of x) {
        if (!isObject(y)) {
            return false
        }
    }
    return true
}
