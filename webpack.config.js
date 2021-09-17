const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output : {
    path     : path.join(__dirname, '/dist'),
    filename : 'index.bundle.js',
  },
  devServer : {
    historyApiFallback : true,
    port               : 4000,
    open               : true,
    hot                : true,
  },
  module : {
    rules : [
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use     : [ 'babel-loader', 'eslint-loader' ],
      },
      {
        test : /\.scss$/,
        use  : [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins : [ new MiniCssExtractPlugin() ],
};
