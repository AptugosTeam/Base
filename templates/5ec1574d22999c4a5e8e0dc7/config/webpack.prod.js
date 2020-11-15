const Dotenv = require('dotenv-webpack')
const {GenerateSW} = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [
    new Dotenv({
      path: './config/.env.production',
    }),
    new GenerateSW(),
    new CopyPlugin({
      patterns: [
        {
          from: 'dist/robots.txt',
        },
        {
          from: 'dist/img', to: 'img'
        }
      ],
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      name: false,
    }
  }
}
