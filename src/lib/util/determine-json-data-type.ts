import { JsonDataType } from "@types"
import {
    isMeasurable,
    isObject,
} from "./is-object"

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
