module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://tenapi.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  // configureWebpack: { // 添加此段
  //   externals: {
  //     vue: 'Vue',
  //     'vue-router': 'VueRouter'
  //   }
  // }
}
