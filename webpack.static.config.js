'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    // 'babel-polyfill',
    'es6-shim',
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-f722ad2b070b2cdac64c.min.js',
    publicPath: './'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-f722ad2b070b2cdac64c.min.css'),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0", "react"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }, {
      test: /\.jpg$/,
      loader: "file-loader"
    },{
      test: /\.(jpeg|png)$/,
      loader: 'url-loader',
      options: {
        limit: 2500000
      },
      // An array of paths or an individual path
      include: path.join(__dirname, 'app/img')
    },{
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    },{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },{
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
