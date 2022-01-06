import { fixString } from "fixjson"

import { v1 } from "./lib"

export const format = (input: string): string => {
    let formattedString = fixString(input)
    return v1(formattedString)
}
