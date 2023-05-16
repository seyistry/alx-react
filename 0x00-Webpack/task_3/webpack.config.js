const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: { import: './modules/header/header.js', dependOn: 'shared' },
    body: { import: './modules/body/body.js', dependOn: 'shared' },
    footer: { import: './modules/footer/footer.js', dependOn: 'shared' },
    shared: 'jquery'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    compress: true,
    port: 8564
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output'
    }),
    new CleanWebpackPlugin()
  ]
};
