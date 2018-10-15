const HTMLWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HTMLWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: '/',
        filename: 'index.js'
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_component)/,
                use: {
                    loader: "babel-loader"
                },
            
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              }
        ]
    },
    plugins: [htmlPlugin]
}