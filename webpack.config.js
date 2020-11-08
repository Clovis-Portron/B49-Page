
const path = require('path');
module.exports = {
    entry: {
        index: path.resolve(__dirname, 'client/index.js'),
        App: path.resolve(__dirname, 'app/App.jsx'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader"
            },

        ]
    }
};