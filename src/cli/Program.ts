import { readFileSync, writeFileSync } from "fs"
import chalk from "chalk"
import getStdin from "get-stdin"

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
        this.inputFile = null
        this.inputString = null
        this.outputString = null

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
            this.parser = new Parser(this.inputString)
            this.outputString = new Parser(this.inputString).format()
            this.emitOutput()
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

        if (this.flags.overwrite == true) {
            this.config.outputSetting = OutputSetting.OVERWRITE_FILE
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

    private emitOutput(): void {
        if (this.config.outputSetting == OutputSetting.STDOUT) {
            console.log(this.outputString)
            return null
        }
        if (this.flags.overwrite != true) {
            console.log(this.outputString)
            return null
        }
        if (this.flags.overwrite === true) {
            if (this.outputString === null || this.outputString === "") {
                return null
            } else {
                writeFileSync(this.inputFile, this.outputString)
                console.log("file formatted: " + chalk.blue(this.inputFile))
                return null
            }
        }
        // TODO: check for errors if we get this far.
        console.log(this.outputString)
        return null
    }

}
