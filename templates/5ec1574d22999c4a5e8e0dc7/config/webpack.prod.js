// production config
const { merge } = require('webpack-merge')
const { resolve } = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './front-end/index.tsx',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../', 'build'),
    publicPath: '/',
  },
  devtool: false,
  plugins: [
    new GenerateSW(),
    new CopyPlugin({
      patterns: [
        {
          from: 'dist/robots.txt',
        },
        {
          from: 'dist/manifest.json',
        },
        {
          from: 'dist/img',
          to: 'img',
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
})
