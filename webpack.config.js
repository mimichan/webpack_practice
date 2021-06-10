const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//CleanWebpackPluginだけを読み込みますよ
// const { default: my } = require('./src/modules/my');

module.exports = {
  entry:"./src/javascripts/main.js",
  output:{
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/main.js',
  },
  module:{
    rules:[
      {
        test:/\.css/,//.cssというファイルを検知する
        use:[
          {
            loader: MiniCssExtractPlugin.loader,//jsを通してhtmlに注入される
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/my.css',
    }),
    new HtmlwebpackPlugin({
      template: './src/templates/index.html',//こちらのhtmlにビルドされたものが全て読み込まれる。
    }),
    new CleanWebpackPlugin(),
  ],
}
