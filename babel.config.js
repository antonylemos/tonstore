module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@app': './src/app',
          '@ui': './src/ui'
        }
      }]
    ]
  }
};
