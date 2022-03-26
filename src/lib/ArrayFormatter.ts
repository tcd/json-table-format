// import { isNumber, isString } from "lodash"
import lodash from "lodash"
const { isString, isNumber } = lodash

import { Parser } from "./Parser"
import { Processor } from "./Processor"

export class ArrayFormatter extends Processor {

    public output: string
    public parser: Parser

    constructor(parser: Parser) {
        super()
        this.output       = ""
        this.parser       = parser
        this.inputJson    = parser.inputJson
        this.topKeys      = parser.topKeys
        this.keys         = parser.keys
        this.keyLengths   = parser.keyLengths
        this.valueLengths = parser.valueLengths
    }

    public format(): string {
        this._addToOutput("[\n")
        let topEntryCount = Object.entries(this.inputJson).length
        let i = 1
        for (let object of this.inputJson) {
            let isLastTopEntry = (i === topEntryCount)
            let objectEntries  = Object.entries(object)
            let entryCount     = objectEntries.length
            let j = 1
            this._addToOutput("    {")
            for (const [key, value] of objectEntries) {
                let isLastEntry        = (j === entryCount)
                let longestKeyLength   = this.keyLengths[key] + 1
                let longestValueLength = this.valueLengths[key] + 2

                let keyText = ""
                keyText += " "
                // if (!isLastEntry) {
                //     longestKeyLength += 1
                // }
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
                    valueText = valueText.replace(/,(\s*)$/, (...args) => {
                        // console.log(args)
                        return args[1]
                    })
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
        return this.output
    }

    private _addToOutput(string: string) {
        this.output = this.output + string
    }

    public dumpProperties(): any {
        return {
            ...this.parser.dumpProperties(),
            output: this.output,
        }
    }
}
