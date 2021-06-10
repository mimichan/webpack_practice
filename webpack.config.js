const path = require('path');
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
            loader: 'style-loader'//jsを通してhtmlに注入される
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
}
