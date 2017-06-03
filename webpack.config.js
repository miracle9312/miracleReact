/**
 * Created by miracle on 2017/1/12.
 */
var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080',path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './bundle.js',
    },
    resolve:{
        alias:{
            component:__dirname + '/app/component',
            images:__dirname + '/app/images',
            generals:__dirname + '/app/component/generals',
            inteteam:__dirname + '/app/component/inteteam',
        },
        extensions:['','.js','.jsx'],
    },

    plugins: [
        /*定义全局变量*/
        new webpack.DefinePlugin({
            API:JSON.stringify('http://localhost:8080/'),
            miracle:{}
        }),
    ],

    module:{
        loaders:[
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                loader: "react-hot!babel?plugins[]=transform-react-jsx,plugins[]=react-css-modules",
            },
            {
                test: /\.css$/,
                exclude: /globalcss/,
                loader: 'style-loader!css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            },
            {
                test: /globalcss/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
            },
            ]
    },
    //作用：为了能够访问子路由
    devServer: {
        historyApiFallback: true,
    }
};