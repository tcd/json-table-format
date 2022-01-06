import { JsonDataType, Lengths } from "../types"

export class JsonData {

    public inputString: string
    public inputJson: any

    public jsonDataType: JsonDataType

    public keyLengths?: Lengths
    public valueLengths?: Lengths

    private _isInvalid: boolean

    constructor(inputString: string) {
        this._isInvalid   = false
        this.jsonDataType = JsonDataType.OTHER
        this.inputString  = inputString
        this.parseJson()
    }

    public isValid(): boolean {

        if (this._isInvalid) {
            return false
        }

        if (this.jsonDataType == JsonDataType.OTHER)  { return false }
        if (this.jsonDataType == JsonDataType.OBJECT) { return false }

        if (this.jsonDataType == JsonDataType.ARRAY) {
            return true
        }

        return false
    }

    private parseJson(): void {
        try {
            let inputJson = JSON.parse(this.inputString)
            this.inputJson = inputJson
        } catch (error) {
            this._isInvalid = true
        }
    }

}
