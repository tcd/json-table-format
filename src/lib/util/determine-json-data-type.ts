import { JsonDataType } from "@types"
import { isJsonObjectArray } from "@lib"

export const determineJsonDataType = (x: string): JsonDataType => {
    if (isJsonObjectArray(x)) {
        return JsonDataType.ARRAY
    }

    return JsonDataType.OTHER
}
