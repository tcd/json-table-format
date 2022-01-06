import { isObject } from "@lib"

export const isJsonObjectArray = (x: any): boolean => {
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
