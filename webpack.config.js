const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => ({
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
    },
    mode: env.development ? "development" : "production",
    devtool: env.development ? "source-map" : false,
    module: {
        rules: [
            { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CopyPlugin({
            patterns: [
                { from: "public/images", to: "images" },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
});
