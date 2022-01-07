const path = require("path")
const webpack = require("webpack")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const webpackConfig = {
    mode: "production",
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname, "bin"),
        publicPath: "/",
        filename: "json-table-format.js",
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [__dirname, "src", "node_modules"],
        plugins: [
            new TsconfigPathsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ]
    },
}
module.exports = webpackConfig
