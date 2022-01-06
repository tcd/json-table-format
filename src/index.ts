import { fixString } from "fixjson"

import { v2 } from "@lib"

export const format = (input: string): string => {
    let formattedString = fixString(input)
    return v2(formattedString)
}
