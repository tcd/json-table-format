import { getKeyLengths, getKeys } from "@lib"

export const v2 = (input: string): any => {
    const json = JSON.parse(input)
    let keys = getKeys(json)
    let keyLengths = getKeyLengths(json)

    console.log(keyLengths)

    let result = input

    return result
}
