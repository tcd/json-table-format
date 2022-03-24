import { readFileSync } from "fs"
import chalk from "chalk"
import getStdin from "get-stdin"
// import { writeFileSync } from "fs"

import { InputSetting, OutputSetting, CliFlags, CliConfig } from "@types"
import { Parser } from "@src/lib/Parser"

export class Program {

    public args: string[]
    public flags: CliFlags
    public config: CliConfig

    public inputFile?: string
    public inputString?: string
    public outputString?: string

    public parser?: Parser

    constructor(args: any, flags: any) {
        this.args   = args
        this.flags  = flags
        this.config = {
            tabWidth:      4,
            inputSetting:  InputSetting.FILE,
            outputSetting: OutputSetting.STDOUT,
        }
        this.configure()
    }

    public async main() {
        try {
            await this.getInput()
            // console.log(this.inputString)
            this.parser = new Parser(this.inputString)
            this.outputString = new Parser(this.inputString).format()
            // console.log(this.outputString)
            console.log(this.parser.dumpProperties())
            process.exit(0)
        } catch (e) {
            if (e.code == "ENOENT") {
                console.error(chalk.red(`error - unable to find file: `) + chalk.italic(`"${this.inputFile}"`))
            } else {
                console.error(chalk.red("error: " + e.message))
            }
            process.exit(1)
        }
    }

    private configure(): void {
        if (this.flags.stdin == true) {
            this.config.inputSetting = InputSetting.STDIN
        } else {
            this.inputFile = this.args[0]
        }
    }

    private async getInput(): Promise<void> {
        if (this.config.inputSetting == InputSetting.STDIN) {
            this.inputString = await getStdin()
            return null
        }
        if (this.config.inputSetting == InputSetting.FILE) {
            this.inputString = readFileSync(this.inputFile).toString()
            return null
        }
        this.inputString = ""
    }

}
