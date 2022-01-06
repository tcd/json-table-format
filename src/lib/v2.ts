import { getKeyLengths, getKeys } from "."

export const v2 = (input: string): any => {
    const json = JSON.parse(input)
    let keys = getKeys(json)
    let keyLengths = getKeyLengths(json)

    console.log(keyLengths)

    // let fixedBraces = input.replace(/\n\s*\{/gm, " {")
    let result = input
    // result = result.replace(/",\n\s*"/gm, '", "')      //            double quote, comma, newline, double quote
    // result = result.replace(/"\n\s*\}/gm, '" }')       //            double quote,        newline, closing bracket
    result = result.replace(/(?:(?<=(?:"|\d|(?:true|false)),?))(\n\s*)/gm, ' ')
    result = result.replace(/(?<!^)\{\n\s*"/gm, '{ "') // (indented) opening bracket,     newline, string

    return result
}
