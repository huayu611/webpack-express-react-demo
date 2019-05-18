module.exports = {
  entry: './client/index.js',
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
  output: {
    path: __dirname + '/public/js',
    publicPath: './',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public/js',
  },
  //如果react要通过CND加速，在这里要禁用react打到JS里去
  // externals : {
  //   "react": "window.React",
  //   "react": "React",
  //   "react-dom": "window.ReactDOM",
  // },

};
