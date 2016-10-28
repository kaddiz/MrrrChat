const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer      = require('autoprefixer')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  debug: true,
  // devtool: 'source-map',
  noInfo: true,
  entry: [
    // 'webpack-hot-middleware/client?path=${window.location.protocol + "//" + window.location.host + "/"}/__webpack_hmr&reload=true',
    './src/index'
  ],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /(\.js$|\.jsx)$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', "css!postcss!sass")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', "css!postcss")
      }
      // {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('style', 'css', 'postcss', 'sass') }
    ]
  },
  postcss: () => [autoprefixer]
};
