/**
 * The longest lengths for all values in an object
 */
export type Lengths = {
    [key: string]: number
}

/**
 * Primitive JSON value types for which length can be measured
 */
export type MeasurablePrimitiveType =
    | string
    | number
    | boolean
    | null

/**
 * @example
 *
 * ```json
 *     { "firstName": "Alice", "age": 69, "awesome": true }
 * ```
 */
export type MeasurableObjectType = {
    [key: string]: MeasurablePrimitiveType
}

/**
 * If this is the top-level data in JSON, we can format it
 *
 * @example
 *
 * ```json
 * [
 *     { "firstName": "Alice", "age": 69 },
 *     { "firstName": "Bob",   "age": 27 }
 * ]
 * ```
 */
export type MeasurableJsonArrayType = MeasurableObjectType[]

/**
 * If this is the top-level data in JSON, we can format it
 *
 * @example
 *
 * ```json
 * {
 *     "name": { "type": "string",  "description": "Legal name."  },
 *     "age":  { "type": "integer", "description": "Age in years" }
 * }
 * ```
 */
export type MeasurableJsonObjectType = {
    [key: string]: MeasurableObjectType
}

/**
 * JSON data that we can not format
 */
export type ImmeasurableJsonType = any

/**
 * Determines if & how JSON data can be formatted
 */
export enum JsonDataType {
    /** @see {@link MeasurableJsonArrayType}  */
    ARRAY = "array",
    /** @see {@link MeasurableJsonObjectType} */
    OBJECT = "object",
    /** @see {@link ImmeasurableJsonType} */
    OTHER = "other",
}

// =============================================================================
// CLI
// =============================================================================

export enum InputSetting {
    STDIN = "stdin",
    FILE = "file",
}

export enum OutputSetting {
    STDOUT = "stdout",
    NEW_FILE = "new-file",
    OVERWRITE_FILE = "overwrite-file",
}

export interface CliFlags {
    overwrite: boolean
    stdin: boolean
}

export interface Config {
    tabWidth: number
}

export interface CliConfig extends Config {
    inputSetting: InputSetting
    outputSetting: OutputSetting
}
