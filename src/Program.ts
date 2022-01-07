import * as yargs from "yargs"
import { writeFileSync } from "fs"
import meow from "meow"

export type InputSetting  = "stdin"  | "file"
export type OutputSetting = "stdout" | "new-file" | "overwrite-file"

export interface Config {
    inputSetting: InputSetting
    outputSetting: OutputSetting
}

export class Program {

    public args: string[]
    public flags: any
    public config: Config

    constructor(args: any, flags: any) {
        this.args   = args
        this.flags  = flags
        this.config = {
            inputSetting:  "stdin",
            outputSetting: "stdout",
        }
    }

    public async main() {
        try {
            console.log("args:",  this.args)
            console.log("flags:", this.flags)
            process.exit(0)
        } catch (e) {
            console.error("Error:", e.message)
            process.exit(1)
        }
    }

}
