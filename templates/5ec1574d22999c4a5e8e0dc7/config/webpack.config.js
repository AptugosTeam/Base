/*
path: webpack.config.js
completePath: config/webpack.config.js
unique_id: kVphMrug
*/
const { merge } = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const commonConfig = require('./webpack.common.js')

 
const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs]
 
  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`))
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`)
  return merge(commonConfig, envConfig, ...getAddons(addon))
}

 