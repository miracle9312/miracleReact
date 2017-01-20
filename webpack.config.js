/**
 * Created by miracle on 2017/1/12.
 */
var path = require('path');
/*const OpenBrowserPlugin = require('open-browser-webpack-plugin');*/


module.exports = {
    entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080',path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    resolve:{
        extensions:['','.js','.jsx'],
    },

    module:{
        loaders:[
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            }
            ]
    },
};