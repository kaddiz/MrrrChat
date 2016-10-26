var ENV = process.env.NODE_ENV
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  debug: true,
  devtool: ENV != "production" ? "inline-sourcemap" : null,
  entry: "./src/index.js",
  resolve: {
    root:               path.join(__dirname, 'src'),
    extensions:         ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/build/",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: 'sasslint',
      },
    ],
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /(node_modules)/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', "css!sass")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', "css-loader")
      }
    ]
  },
  plugins: (ENV === "production" ? [
    // new webpack.ProvidePlugin({
    //   React: 'react',
    //   ReactDOM: 'react-dom',
    // }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.UglifyJsPlugin({minimize: true, compress: { warnings: false }}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ] : [
    // new webpack.ProvidePlugin({
    //   React: 'react',
    //   ReactDOM: 'react-dom'
    // }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("development")
       }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
