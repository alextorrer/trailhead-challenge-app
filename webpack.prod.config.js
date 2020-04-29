//Node
const path = require('path'); //Nos permite acceder a donde estamos en las carpetas. Ya sea local o en la nube.
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = { //Aqui se tiene toda la configuración de lo que va a suceder. Modulo para exportar.
    entry: {
        main: './src/index.js' //Punto de entrada, ahi vive el código inicial
    },
    output: { //A donde se va a mandar el proyecto ya compilado listo para producción
        path: path.join(__dirname, 'dist'), //Hacia donde se va a enviar. Resolve es para saber donde se encuentra. __dirname para crear una carpeta 'dist' cuando sepa donde se encuentre.
        publicPath: '/',
        filename: '[name].js', //Archivo listo para producción
    },
    target: 'web',
    devtool: 'source-map',
    optimization: {
        minimizer:[/* 
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }), */
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: { //Modulo con las reglas necesarias para utilizar. En este caso, babel.
        rules: [
            {
                //Estructura de babel
                test: /\,js?$/, //Permite identificar los archivos según se encuentran en nuestro entorno
                exclude: /node_modules/, //Excluir la carpeta de node modules
                use: {
                    loader: 'babel-loader' //loader como configuración establecida
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [ //plugins a utilizar
        new HtmlWebpackPlugin( //Permite trabajar con los archivos HTML
            {
                template: './public/index.html', //Donde se encuentra el Template principal
                filename: './index.html', //El nombre que tendrá el archivo
                excludeChunks: [ 'server' ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}