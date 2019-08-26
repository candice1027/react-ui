const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config')
const path = require('path')
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = Object.assign({},base,{
    mode: 'production',
    entry: {
      example: './src/example.tsx'
    },
    output: {
      path: path.resolve(__dirname,'example'),
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    plugins:[
      new HtmlWebpackPlugin({
        template: 'example.html',
        filename: 'example.html'
      })
    ]
}) 