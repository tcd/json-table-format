import { Lengths } from "../types"

export class Processor {

    public inputString: any
    public inputJson: any

    public elementCount?: number

    public keys: string[]
    public keyLengths: Lengths
    public valueLengths: Lengths

    public topKeys: string[]
    public longestTopKeyLength: number

    constructor() {
        this.inputString  = null
        this.inputJson    = null
        this.topKeys      = []
        this.keys         = []
        this.keyLengths   = {}
        this.valueLengths = {}
    }

    public dumpProperties(): any {
        return {
            inputString: this.inputString,
            inputJson: this.inputJson,
            elementCount: this.elementCount,
            keys: this.keys,
            keyLengths: this.keyLengths,
            valueLengths: this.valueLengths,
            topKeys: this.topKeys,
            longestTopKeyLength: this.longestTopKeyLength,
        }
    }

}
