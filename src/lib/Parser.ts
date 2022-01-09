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

/** Collects information required for formatting */
export class Parser extends Processor {

    public jsonDataType: JsonDataType
    public isInvalid: boolean

    constructor(inputString: string) {
        super()
        this.isInvalid = false
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
                this._parseArray()
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

    public dumpProperties(): any {
        return {
            ...super.dumpProperties(),
            jsonDataType: this.jsonDataType,
            isInvalid: this.isInvalid,
        }
    }
}
