/**
 * ## Examples
 *
 * ### @see {@link JsonDataType.OBJECT}
 *
 * ```json
 * {
 *     "firstName": { "type": "string",  "description": "Legal first name."                        },
 *     "age":       { "type": "integer", "description": "Age in years; must be greater than zero." }
 * }
 * ```
 *
 * ### @see {@link JsonDataType.ARRAY}
 *
 * ```json
 * [
 *     { "firstName": "Alice", "age": 69 },
 *     { "firstName": "Bob",   "age": 27 }
 * ]
 * ```
 */
export enum JsonDataType {
    OBJECT = "object",
    /** A single top level array containing objects */
    ARRAY = "array",
    /** Not currently supported */
    OTHER = "other",
}

export type JsonArrayData  = object[]
export type JsonObjectData = { [key: string]: object }
export type JsonOtherData  = any
