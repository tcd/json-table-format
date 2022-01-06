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

export class JsonData {

    public output: string

    public inputString: string
    public inputJson: any

    public jsonDataType: JsonDataType

    private _keys?: string[]
    private _keyLengths?: Lengths
    private _valueLengths?: Lengths

    private _isInvalid: boolean

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
        if (this.jsonDataType == JsonDataType.OTHER)  { return false }
        if (this.jsonDataType == JsonDataType.OBJECT) { return false } // Can't handle these yet
        if (this.jsonDataType == JsonDataType.ARRAY)  { return true  }
        return false
    }

    private _parseJson(): void {
        if (this._isInvalid) { return }

        try {
            let inputJson = JSON.parse(this.inputString)
            this.inputJson = inputJson
        } catch (error) {
            this._isInvalid = true
            return
        }

        determineJsonDataType(this.inputJson)

        if (!this.isValid()) {
            return
        }

        this._keys = getKeys(this.inputJson)
        this._keyLengths = getLongestKeyLengths_1(this._keys)
        this._valueLengths = getLongestValueLengths(this.inputJson)
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
    }
}
