/*
path: metro.config.js
completePath: front-end/metro.config.js
unique_id: M0SHTfZ3
*/
const { getDefaultConfig } = require('metro-config')
const path = require('path')

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'scss', 'sass'],
      extraNodeModules: {
        "dist": path.resolve(__dirname, "../dist")
      },
    },
    watchFolders: [
      path.resolve(__dirname),
      path.resolve(__dirname, '../dist'),
    ]
  }
})()
