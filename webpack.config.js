const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:"./src/index.js",
  output:{
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
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
    new MiniCssExtractPlugin(),
    new HtmlwebpackPlugin({
      template: './src/index.html',//こちらのhtmlにビルドされたものが全て読み込まれる。
    }),
  ],
}
