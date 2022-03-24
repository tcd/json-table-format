import meow from 'meow';
import { readFileSync } from 'fs';
import chalk from 'chalk';
import getStdin from 'get-stdin';
import lodash from 'lodash';

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

var JsonDataType;
(function (JsonDataType) {
    JsonDataType["ARRAY"] = "array";
    JsonDataType["OBJECT"] = "object";
    JsonDataType["OTHER"] = "other";
})(JsonDataType || (JsonDataType = {}));
var InputSetting;
(function (InputSetting) {
    InputSetting["STDIN"] = "stdin";
    InputSetting["FILE"] = "file";
})(InputSetting || (InputSetting = {}));
var OutputSetting;
(function (OutputSetting) {
    OutputSetting["STDOUT"] = "stdout";
    OutputSetting["NEW_FILE"] = "new-file";
    OutputSetting["OVERWRITE_FILE"] = "overwrite-file";
})(OutputSetting || (OutputSetting = {}));

const { isString: isString$2, isNumber: isNumber$2, isBoolean } = lodash;
const isObject = (x) => {
    if (x === null) {
        return false;
    }
    if (x === undefined) {
        return false;
    }
    if (isString$2(x)) {
        return false;
    }
    if (isNumber$2(x)) {
        return false;
    }
    if (isBoolean(x)) {
        return false;
    }
    if (Array.isArray(x)) {
        return false;
    }
    return true;
};
const isMeasurable = (x) => {
    if (x === null) {
        return true;
    }
    if (x === undefined) {
        return true;
    }
    if (isString$2(x)) {
        return true;
    }
    if (isNumber$2(x)) {
        return true;
    }
    if (isBoolean(x)) {
        return true;
    }
    if (Array.isArray(x)) {
        return true;
    }
    return false;
};

const determineJsonDataType = (json) => {
    if (JSON.stringify(json) === "{}") {
        return JsonDataType.OTHER;
    }
    if (isJsonArray(json)) {
        return JsonDataType.ARRAY;
    }
    if (isJsonObjectArray(json)) {
        return JsonDataType.OBJECT;
    }
    return JsonDataType.OTHER;
};
const isJsonArray = (json) => {
    if (!Array.isArray(json)) {
        return false;
    }
    for (let y of json) {
        if (!isObject(y)) {
            return false;
        }
    }
    return true;
};
const isJsonObjectArray = (json) => {
    if (Array.isArray(json)) {
        return false;
    }
    for (let object in json) {
        for (let value of object) {
            if (!isMeasurable(value)) {
                return false;
            }
        }
    }
    return true;
};

const getKeys_array = (json) => {
    try {
        const notUniqueKeys = json.flatMap(x => Object.keys(x));
        const uniqueKeys = [...new Set(notUniqueKeys)];
        return uniqueKeys;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
const getKeys_object = (json) => {
    try {
        const notUniqueKeys = Object.values(json).flatMap(x => Object.keys(x));
        const uniqueKeys = [...new Set(notUniqueKeys)];
        return uniqueKeys;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
const getTopKeys = (json) => {
    try {
        const notUniqueKeys = Object.keys(json);
        const uniqueKeys = [...new Set(notUniqueKeys)];
        return uniqueKeys;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};

const { isString: isString$1, isNumber: isNumber$1 } = lodash;
const getLength = (x) => {
    if (x === undefined) {
        return -1;
    }
    if (Array.isArray(x)) {
        return -1;
    }
    if (x === null) {
        return 4;
    }
    if (x === true) {
        return 4;
    }
    if (x === false) {
        return 5;
    }
    if (isString$1(x)) {
        return x.length + 2;
    }
    if (isNumber$1(x)) {
        return `${x}`.length;
    }
    return -1;
};

const getLongestValueLengths_array = (json) => {
    let result = {};
    let keys = getKeys_array(json);
    for (let object of json) {
        for (let key of keys) {
            let longestLength = result[key];
            let value = object[key];
            let currentLength = getLength(value);
            if (longestLength === null
                || longestLength === undefined
                || currentLength > longestLength) {
                result[key] = currentLength;
            }
        }
    }
    return result;
};
const getLongestValueLengths_object = (json) => {
    let objects = Object.values(json);
    return getLongestValueLengths_array(objects);
};
const getLongestKeyLengths_1 = (values) => {
    let result = {};
    for (let value of values) {
        result[value] = getLength(value);
    }
    return result;
};

class Processor {
    constructor() {
        this.inputString = null;
        this.inputJson = null;
        this.topKeys = [];
        this.keys = [];
        this.keyLengths = {};
        this.valueLengths = {};
    }
    dumpProperties() {
        return {
            inputString: this.inputString,
            inputJson: this.inputJson,
            elementCount: this.elementCount,
            keys: this.keys,
            keyLengths: this.keyLengths,
            valueLengths: this.valueLengths,
            topKeys: this.topKeys,
            longestTopKeyLength: this.longestTopKeyLength,
        };
    }
}

const { isString, isNumber } = lodash;
class ArrayFormatter extends Processor {
    constructor(parser) {
        super();
        this.output = "";
        this.parser = parser;
        this.inputJson = parser.inputJson;
        this.topKeys = parser.topKeys;
        this.keys = parser.keys;
        this.keyLengths = parser.keyLengths;
        this.valueLengths = parser.valueLengths;
    }
    format() {
        this._addToOutput("[\n");
        let topEntryCount = Object.entries(this.inputJson).length;
        let i = 1;
        for (let object of this.inputJson) {
            let isLastTopEntry = (i === topEntryCount);
            let objectEntries = Object.entries(object);
            let entryCount = objectEntries.length;
            let j = 1;
            this._addToOutput("    {");
            for (const [key, value] of objectEntries) {
                let isLastEntry = (j === entryCount);
                let longestKeyLength = this.keyLengths[key] + 1;
                let longestValueLength = this.valueLengths[key] + 2;
                let keyText = "";
                keyText += " ";
                keyText += `"${key}":`.padEnd(longestKeyLength, " ");
                let valueText = "";
                if (isString(value)) {
                    valueText += ` "${value}",`.padEnd(longestValueLength, " ");
                }
                else if (isNumber(value)) {
                    valueText += ` ${value},`.padStart(longestValueLength, " ");
                }
                else {
                    valueText += ` ${value},`.padEnd(longestValueLength, " ");
                }
                if (isLastEntry) {
                    valueText = valueText.replace(/,(\s*)$/, (...args) => {
                        return args[1];
                    });
                }
                this._addToOutput(keyText);
                this._addToOutput(valueText);
                j++;
            }
            if (isLastTopEntry) {
                this._addToOutput(" }\n");
            }
            else {
                this._addToOutput(" },\n");
            }
            i++;
        }
        this._addToOutput("]\n");
        return this.output;
    }
    _addToOutput(string) {
        this.output = this.output + string;
    }
    dumpProperties() {
        return Object.assign(Object.assign({}, this.parser.dumpProperties()), { output: this.output });
    }
}

class Parser extends Processor {
    constructor(inputString) {
        super();
        this.isInvalid = false;
        this.jsonDataType = JsonDataType.OTHER;
        this.inputString = inputString;
        this._parseJson();
    }
    format() {
        let output = "";
        if (!this.isValid()) {
            return output;
        }
        switch (this.jsonDataType) {
            case JsonDataType.ARRAY:
                return new ArrayFormatter(this).format();
            case JsonDataType.OBJECT:
                return output;
            default:
                return output;
        }
    }
    isValid() {
        if (this.isInvalid) {
            return false;
        }
        if (this.jsonDataType === JsonDataType.OTHER) {
            return false;
        }
        if (this.jsonDataType === JsonDataType.OBJECT) {
            return true;
        }
        if (this.jsonDataType === JsonDataType.ARRAY) {
            return true;
        }
        return false;
    }
    _parseJson() {
        try {
            let inputJson = JSON.parse(this.inputString);
            this.inputJson = inputJson;
        }
        catch (error) {
            this.isInvalid = true;
            return;
        }
        this.jsonDataType = determineJsonDataType(this.inputJson);
        if (!this.isValid()) {
            return;
        }
        switch (this.jsonDataType) {
            case JsonDataType.ARRAY:
                this._parseArray();
                break;
            case JsonDataType.OBJECT:
                this._parseObject();
                break;
        }
    }
    _parseArray() {
        this.keys = getKeys_array(this.inputJson);
        this.keyLengths = getLongestKeyLengths_1(this.keys);
        this.valueLengths = getLongestValueLengths_array(this.inputJson);
    }
    _parseObject() {
        this.keys = getKeys_object(this.inputJson);
        this.keyLengths = getLongestKeyLengths_1(this.keys);
        this.valueLengths = getLongestValueLengths_object(this.inputJson);
        this.topKeys = getTopKeys(this.inputJson);
    }
    dumpProperties() {
        return Object.assign(Object.assign({}, super.dumpProperties()), { jsonDataType: this.jsonDataType, isInvalid: this.isInvalid });
    }
}

class Program {
    constructor(args, flags) {
        this.args = args;
        this.flags = flags;
        this.config = {
            tabWidth: 4,
            inputSetting: InputSetting.FILE,
            outputSetting: OutputSetting.STDOUT,
        };
        this.configure();
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getInput();
                this.parser = new Parser(this.inputString);
                this.outputString = new Parser(this.inputString).format();
                console.log(this.parser.dumpProperties());
                process.exit(0);
            }
            catch (e) {
                if (e.code == "ENOENT") {
                    console.error(chalk.red(`error - unable to find file: `) + chalk.italic(`"${this.inputFile}"`));
                }
                else {
                    console.error(chalk.red("error: " + e.message));
                }
                process.exit(1);
            }
        });
    }
    configure() {
        if (this.flags.stdin == true) {
            this.config.inputSetting = InputSetting.STDIN;
        }
        else {
            this.inputFile = this.args[0];
        }
    }
    getInput() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.config.inputSetting == InputSetting.STDIN) {
                this.inputString = yield getStdin();
                return null;
            }
            if (this.config.inputSetting == InputSetting.FILE) {
                this.inputString = readFileSync(this.inputFile).toString();
                return null;
            }
            this.inputString = "";
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
await new Program(cli.input, cli.flags).main();
