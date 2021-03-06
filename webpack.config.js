
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path')

var isDev = process.argv.join().indexOf('development') !== -1

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname,'./dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: isDev ? './index.html' : '../index.html',
            template: './src/index.html',
            minify: {
                removeComments: true,//清除HTML注释
                collapseWhitespace: true,//压缩HTML
                removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
                removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
                removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
                minifyJS: true,//压缩页面JS
                minifyCSS: true//压缩页面CSS
            }
        }),
        new UglifyJsPlugin() // 压缩js
    ],
    module: {
        rules: [
            { test: /\.jsx?$/, use: [ {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                }
            } ] },
            { test: /\.html$/, use: ['html-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/, use: [ { 
                loader: 'url-loader', 
                options: {
                    limit: 10000
                } 
            } ]}
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'./src/'),
        port: 3000,
        open: 'http://localhost:3000'
    }
}