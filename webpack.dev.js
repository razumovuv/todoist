const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist/public'),
        },
        historyApiFallback: true,
        liveReload: true,
        hot: true,
        open: true,
        port: 8080,
    },
    entry: {
        app: path.resolve(__dirname, './client/src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist/public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '...'],
        alias: {
            '@': path.resolve(__dirname, 'client/src'),
            '@assets': path.resolve(__dirname, 'client/src/assets'),
            '@components': path.resolve(__dirname, 'client/src/components'),
            '@views': path.resolve(__dirname, 'client/src/views'),
            '@styles': path.resolve(__dirname, 'client/src/styles'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                './client/src/templates/template.html',
            ),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
