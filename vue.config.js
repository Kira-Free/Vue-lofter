module.exports = {
  devServer: {
    proxy: {
      '/axios': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  }
}
