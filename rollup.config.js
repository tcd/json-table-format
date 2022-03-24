import typescript from "@rollup/plugin-typescript"
// import commonjs from "@rollup/plugin-commonjs"

/** @type {import('typescript').CompilerOptions} */
const tsOptions = {
    downlevelIteration: true,
}

/** @type {import('rollup').RollupOptions} */
const config = {
    // input: [
    //     "./src/main.ts",
    //     "./src/Program.ts",
    // ],
    input: "./src/main.ts",
    output: [
        {
            // dir: "dist",
            format: "cjs",
            file: "./bin/json-table-format.js",
            inlineDynamicImports: true,
        },
        {
            // dir: "dist",
            format: "esm",
            file: "./bin/json-table-format.mjs",
            inlineDynamicImports: true,
        },
    ],
    external: [
        "meow",
    ],
    plugins: [
        typescript({
            tsconfig: "tsconfig.rollup.json",
            exclude: "./test/**/*.ts",
            // inlineSources: true,
        }),
        // commonjs({ extensions: [".js", ".ts"] }) // the ".ts" extension is required
    ],
}

export default config
