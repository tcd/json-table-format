import { isNumber, isString } from "lodash"
import { JsonDataType } from "@types"
import {
    determineJsonDataType,
    getLongestKeyLengths_1,
    getKeys_array,
    getKeys_object,
    getTopKeys,
    getLongestValueLengths_array,
    getLongestValueLengths_object,
    ArrayFormatter,
} from "@lib"

import { Processor } from "./Processor"

export class Parser extends Processor {

    public jsonDataType: JsonDataType
    public output: string
    public isInvalid: boolean

    constructor(inputString: string) {
        super()
        this.output = ""
        this.jsonDataType = JsonDataType.OTHER
        this.inputString = inputString
        this._parseJson()
    }

    public format(): string {
        let output = ""
        if (!this.isValid()) { return output }
        switch (this.jsonDataType) {
            case JsonDataType.ARRAY:
                return new ArrayFormatter(this).format()
            case JsonDataType.OBJECT:
                return output
            default:
                return output
        }
    }

    public isValid(): boolean {
        if (this.isInvalid) { return false }
        if (this.jsonDataType === JsonDataType.OTHER)  { return false }
        if (this.jsonDataType === JsonDataType.OBJECT) { return true  }
        if (this.jsonDataType === JsonDataType.ARRAY)  { return true  }
        return false
    }

    private _parseJson(): void {
        try {
            let inputJson = JSON.parse(this.inputString)
            this.inputJson = inputJson
        } catch (error) {
            this.isInvalid = true
            return
        }

        this.jsonDataType = determineJsonDataType(this.inputJson)

        if (!this.isValid()) {
            return
        }

        switch (this.jsonDataType) {
            case JsonDataType.ARRAY:
                new ArrayFormatter(this).format()
                break
            case JsonDataType.OBJECT:
                this._parseObject()
                break
            default:
                break
        }
    }

    private _parseArray(): void {
        this.keys         = getKeys_array(this.inputJson)
        this.keyLengths   = getLongestKeyLengths_1(this.keys)
        this.valueLengths = getLongestValueLengths_array(this.inputJson)
    }

    private _parseObject(): void {
        this.keys         = getKeys_object(this.inputJson)
        this.keyLengths   = getLongestKeyLengths_1(this.keys)
        this.valueLengths = getLongestValueLengths_object(this.inputJson)
        this.topKeys      = getTopKeys(this.inputJson)
    }

    private _formatArray(): void {
        this._addToOutput("[\n")
        let topEntryCount = Object.entries(this.inputJson).length
        let i = 1
        for (let object of this.inputJson) {
            let isLastTopEntry = (i === topEntryCount)
            let objectEntries = Object.entries(object)
            let entryCount    = objectEntries.length
            let j = 1
            this._addToOutput("    {")
            for (const [key, value] of objectEntries) {
                let isLastEntry = (j === entryCount)
                let longestKeyLength = this.keyLengths[key] + 1
                let longestValueLength = this.valueLengths[key] + 2

                let keyText = ""
                keyText += " "
                keyText += `"${key}":`.padEnd(longestKeyLength, " ")

                let valueText = ""
                if (isString(value)) {
                    valueText += ` "${value}",`.padEnd(longestValueLength, " ")
                } else if (isNumber(value)) {
                    valueText += ` ${value},`.padStart(longestValueLength, " ")
                } else {
                    valueText += ` ${value},`.padEnd(longestValueLength, " ")
                }
                if (isLastEntry) {
                    valueText = valueText.replace(/,(\s*)$/, (...args) => args[1])
                }

                this._addToOutput(keyText)
                this._addToOutput(valueText)

                j++
            }
            if (isLastTopEntry) {
                this._addToOutput(" }\n")
            } else {
                this._addToOutput(" },\n")
            }
            i++
        }
        this._addToOutput("]\n")
    }

    private _formatObject(): void {
        this._addToOutput("{\n")
        this._addToOutput("}\n")
    }

    private _addToOutput(string: string) {
        this.output = this.output + string
    }

    private _removeFromOutput(length: number) {
        this.output = this.output.slice(0, (length * -1))
    }

    public dumpProperties(): any {
        return {
            ...super.dumpProperties(),
            output: this.output,
            jsonDataType: this.jsonDataType,
            isInvalid: this.isInvalid,
        }
    }
}
