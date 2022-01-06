import { isObject } from "@lib"

export const isValid = (x: any): boolean => {
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

// export const isValid = (x: any): boolean => {
//
//     if (Array.isArray(x)) {
//         for (let y in x) {
//             if (!isObject(y)) { return false }
//         }
//         return true
//     }
//
//     let keys
//     try {
//         keys = Object.keys(x)
//     } catch (error) {
//         return false
//     }
//
//     if (!(keys?.length > 0)) {
//         return false
//     }
//
//     for (let y of x) {
//         if (!isObject(y)) { return false }
//     }
//
//     return true
// }

// export const isValid = (x: any): boolean => {
//
//     if (Array.isArray(x)) {
//         for (let y in x) {
//             if (isString(y))      { return false }
//             if (isNumber(y))      { return false }
//             if (isBoolean(y))     { return false }
//             if (isNaN(y))         { return false }
//             if (Array.isArray(y)) { return false }
//
//             let keys = Object.keys(y)
//             if (keys.length > 0) {
//
//             }
//         }
//         return true
//     }
//
//     return false
// }
