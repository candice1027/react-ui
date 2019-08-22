var path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebapckPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname,'dist/lib'),
        compress: true,
        port: 9000,
    },
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'reactui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/ ,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebapckPlugin({
            title: 'my first ts file',
            filename: 'assets/index.html',   
        })
    ]
}