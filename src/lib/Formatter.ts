import {
    JsonDataType,
    Lengths
} from "@types"
import {
    determineJsonDataType,
    getLongestKeyLengths_1,
    getKeys_array,
    getKeys_object,
    getTopKeys,
    getLongestValueLengths_array,
    getLongestValueLengths_object,
} from "@lib"

export class Formatter {

    public output: string

    public inputString: string
    public inputJson: any

    public jsonDataType: JsonDataType

    public elementCount?: number

    public keys: string[]
    public keyLengths?: Lengths
    public valueLengths?: Lengths

    public topKeys?: string[]
    public longestTopKeyLength?: number

    public isInvalid: boolean

    constructor(inputString: string) {
        this._setDefaultPropertyValues()
        this.inputString = inputString
        this._parseJson()
    }

    public format(): string {
        if (!this.isValid()) { return this.output }
        switch (this.jsonDataType) {
            case JsonDataType.ARRAY:
                this._formatArray()
                break
            case JsonDataType.OBJECT:
                this._formatObject()
                break
            default:
                break
        }
        return this.output
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
        this.keys = getKeys_array(this.inputJson)
        this.keyLengths = getLongestKeyLengths_1(this.keys)
        this.valueLengths = getLongestValueLengths_array(this.inputJson)
    }

    private _parseObject(): void {
        this.keys = getKeys_object(this.inputJson)
        this.topKeys = getTopKeys(this.inputJson)
        this.keyLengths = getLongestKeyLengths_1(this.keys)
        this.valueLengths = getLongestValueLengths_object(this.inputJson)
    }

    private _formatArray(): void {
        this._addToOutput("[")
        this._addToOutput("\n")
        this._addToOutput("]")
        this._addToOutput("\n")
    }

    private _formatObject(): void {
        this._addToOutput("{")
        this._addToOutput("\n")
        this._addToOutput("{")
        this._addToOutput("\n")
    }

    private _addToOutput(string: string) {
        this.output = this.output + string
    }


    private _setDefaultPropertyValues() {
        this.jsonDataType  = JsonDataType.OTHER
        this.output        = ""
        this.inputString   = null
        this.inputJson     = null
        this.isInvalid    = false
        this.topKeys      = []
        this.keys         = []
        this.keyLengths   = {}
        this.valueLengths = {}
    }

    public dumpProperties(): any {
        return {
            output: this.output,
            inputString: this.inputString,
            inputJson: this.inputJson,
            jsonDataType: this.jsonDataType,
            elementCount: this.elementCount,
            keys: this.keys,
            keyLengths: this.keyLengths,
            valueLengths: this.valueLengths,
            topKeys: this.topKeys,
            longestTopKeyLength: this.longestTopKeyLength,
            isInvalid: this.isInvalid,
        }
    }
}
