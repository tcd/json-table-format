import {
    JsonDataType,
    Lengths
} from "@types"
import {
    determineJsonDataType,
    getKeys,
    getLongestKeyLengths_1,
    getLongestValueLengths
} from "@lib"

export class Formatter {

    public output: string

    public inputString: string
    public inputJson: any

    public jsonDataType: JsonDataType

    public _keys: string[]
    public _keyLengths?: Lengths
    public _valueLengths?: Lengths

    public _topKeys?: string[]
    public _longestTopKeyLength?: number

    public _isInvalid: boolean
    public _errors: any[]

    constructor(inputString: string) {
        this._setDefaultPropertyValues()
        this.inputString = inputString
        this._parseJson()
    }

    public format(): string {
        if (!this.isValid()) { return this.output }
        return this.output
    }

    public isValid(): boolean {
        if (this._isInvalid) { return false }
        if (this.jsonDataType === JsonDataType.OTHER)  { return false }
        if (this.jsonDataType === JsonDataType.OBJECT) { return true  } // Can't handle these yet
        if (this.jsonDataType === JsonDataType.ARRAY)  { return true  }
        return false
    }

    private _parseJson(): void {
        try {
            let inputJson = JSON.parse(this.inputString)
            this.inputJson = inputJson
        } catch (error) {
            this._errors.push(error)
            this._isInvalid = true
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
        this._keys = getKeys(this.inputJson)
        this._keyLengths = getLongestKeyLengths_1(this._keys)
        this._valueLengths = getLongestValueLengths(this.inputJson)
        console.log({
            _keys: this._keys,
            _keyLengths: this._keyLengths,
            _valueLengths: this._valueLengths,
        })
    }

    private _parseObject(): void {

    }

    private _setDefaultPropertyValues() {
        this.jsonDataType  = JsonDataType.OTHER
        this.output        = null
        this.inputString   = null
        this.inputJson     = null
        this._isInvalid    = false
        this._keys         = []
        this._keyLengths   = {}
        this._valueLengths = {}
        this._errors       = []
    }

    public dumpProperties(): any {
        return {
            output: this.output,
            inputString: this.inputString,
            inputJson: this.inputJson,
            jsonDataType: this.jsonDataType,
            _keys: this._keys,
            _keyLengths: this._keyLengths,
            _valueLengths: this._valueLengths,
            _topKeys: this._topKeys,
            _longestTopKeyLength: this._longestTopKeyLength,
            _isInvalid: this._isInvalid,
            _errors: this._errors,
        }
    }
}
