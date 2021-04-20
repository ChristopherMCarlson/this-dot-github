module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/this-dot-github/'
  : '/',

  transpileDependencies: [
    'vuetify'
  ]
}
