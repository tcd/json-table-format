import meow from "meow"
import { CliConfig, Program } from "./Program"

const cli = meow(`
    Usage
      $ json-table-format <input>

    Options
      --overwrite  Overwrite the input file
      --stdin      Format input from STDIN instead of a file

    Examples
      $ json-table-format ./package.json --overwrite

      $ cat ./package.json | json-table-format --stdin
`, {
    // @ts-ignore:next-line
    importMeta: import.meta,
    flags: {
        overwrite: {
            type: "boolean",
            default: false,
        },
        stdin: {
            type: "boolean",
            default: false,
        },
    },
})

new Program(
    cli.input,
    cli.flags as unknown as CliConfig,
).main()
