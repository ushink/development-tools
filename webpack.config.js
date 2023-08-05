const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV;

module.exports = {
    entry: "./index.js",
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        clean: true,
    },
    module: {
        rules: [
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
          },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{from: "static", to:"static"}],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),

    ]
};
