import meow from 'meow';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class Program {
    constructor(args, flags) {
        this.args = args;
        this.flags = flags;
        this.config = {
            inputSetting: "stdin",
            outputSetting: "stdout",
        };
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("args:", this.args);
                console.log("flags:", this.flags);
                process.exit(0);
            }
            catch (e) {
                console.error("Error:", e.message);
                process.exit(1);
            }
        });
    }
}

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
});
new Program(cli.input, cli.flags).main();
