const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname);
const ROOT_PATH = path.resolve(__dirname); //源码目录
const VIEWS_PATH = path.resolve(__dirname, '../static/view/'); //模板目录
console.log(ROOT_PATH);

//生成环境
const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);

module.exports = {
    entry: path.resolve(__dirname, '../static/module/index/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: "index.js"
    },
    mode: NODE_ENV,
    plugins: [
        new HtmlWebpackPlugin({template: VIEWS_PATH + '/index/index.html'})
    ]
};