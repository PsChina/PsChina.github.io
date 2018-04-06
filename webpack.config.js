const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry:path.resolve(__dirname,'src/entry.js'),
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test:/.html$/,use:['html-loader'] },
            { test:/.js$/,use:['babel-loader'] },
            { test:/.css$/,use:['style-loader','css-loader'] },
            { test:/.(png|jpg|gif|svg|eot|ttf|woff)$/,use:['url-loader'] }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html'),
            output:__dirname,
            filename:'index.html'
        })
    ],
    devServer:{
        port:8080,
        host:'192.168.199.183',
        contentBase:__dirname,
        open:true
    }
}