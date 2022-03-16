module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        './src/assets/styles/_vars.scss',
        './src/assets/styles/_mixins.scss'
      ]
    }
  }
}
