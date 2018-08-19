const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: path.join(__dirname + '/src/client/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname + 'build')
    },
    module: { 
        rules: [
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['react']
                }
              }
            ],
        }
        ]
    },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html"
    })
  ]
};