/**
 * Created by miracle on 2017/1/12.
 */
var path = require('path');
var webpack = require('webpack')
/*const OpenBrowserPlugin = require('open-browser-webpack-plugin');*/


module.exports = {
    entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080',path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './bundle.js',
    },
    resolve:{
        alias:{
            component:__dirname+'/app/component',
            images:__dirname+'/app/images',
        },
        extensions:['','.js','.jsx'],
    },

    plugins: [
        /*定义全局变量*/
        new webpack.DefinePlugin({
            API:JSON.stringify('localhost:8080')
        }),
    ],

    module:{
        loaders:[
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                loader: "react-hot!babel"
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]',
            }
            ]
    },
    //作用：为了能够访问子路由
    devServer: {
        historyApiFallback: true,
    }

    /*new webpack.DefinePlugin({
        API: JSON.stringify('/api')
    }),*/
};