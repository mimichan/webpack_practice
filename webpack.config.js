const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//CleanWebpackPluginだけを読み込みますよ
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/javascripts/main.js',
  },
  output:{
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/[name]-[hash].js',
  },
  module:{
    rules:[
      {
        test:/\.vue/,
        exclude:/node_modules/,
        use:[
          {
            loader:'vue-loader',
          },
        ]
      },
      {
        test:/\.js/,
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:[
                ['@babel/preset-env',{'targets': '>0.25%, not dead'}],
                '@babel/preset-react',
              ]
            },
          },
        ],
      },
      {
        test:/\.(css|scss|sass)/,//.cssというファイルを検知する
        use:[
          {
            loader: MiniCssExtractPlugin.loader,//jsを通してhtmlに注入される
          },
          {
            loader: 'css-loader',
            options:{
              sourceMap: false
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test:/\.(gif|png|jpe?g|svg)$/i,
        use:[
          {
            loader: 'file-loader',
            options:{
              esModule :false,
              name:'images/[name]-[hash].[ext]',
              publicPath:'/',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test:/\.pug/,
        use:[
          {
            loader:'html-loader',
          },
          {
            loader:'pug-html-loader',
            options:{
              pretty:true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './stylesheets/[name]-[hash].css',
    }),
    new HtmlwebpackPlugin({
      template: './src/templates/index.pug',//こちらのhtmlにビルドされたものが全て読み込まれる。
      filename:'index.html',
    }),
    new HtmlwebpackPlugin({
      template: './src/templates/access.pug',
      filename:'access.html',
    }),
    new HtmlwebpackPlugin({
      template: './src/templates/members/taro.pug',
      filename:'members/taro.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
