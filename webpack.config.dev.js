const webpack = require('webpack');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry:'./client/index.js',
  output: {
    path: __dirname + '/public/js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    hot: true
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new openBrowserWebpackPlugin({url:'http://localhost:3000'}),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  performance: {
    hints: "warning",
    maxAssetSize: 999999999,
    maxEntrypointSize: 999999999,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
}
