const base = require('./webpack.config')
var path = require('path')
var HtmlWebapckPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebapckPlugin({
            title: 'react-ui',
            template: 'index.html'  
        }),
    ]
})
