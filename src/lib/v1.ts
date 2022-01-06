export const v1 = (input: string): string => {
    // let fixedBraces = input.replace(/\n\s*\{/gm, " {")
    let result = input
    // result = result.replace(/",\n\s*"/gm, '", "')      //            double quote, comma, newline, double quote
    // result = result.replace(/"\n\s*\}/gm, '" }')       //            double quote,        newline, closing bracket
    result = result.replace(/(?:(?<=(?:"|\d|(?:true|false)),?))(\n\s*)/gm, ' ')
    result = result.replace(/(?<!^)\{\n\s*"/gm, '{ "') // (indented) opening bracket,     newline, string

    return result
}
