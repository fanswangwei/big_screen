'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = '长宁' // page title
const port = 8081 // dev port

module.exports = {
  devServer: {
    port: port,
    open: true,
    // proxy: {
    //   // 代理所有请求路径中包含 /aaa 的请求
    //   // /aaa/login => 会被代理 http://localhost:8888/api/private/v1/aaa/login
    //   // /aaa/login => 将被代理, 先去掉 /aaa 再代理 => http://localhost:8888/api/private/v1/login
    //   '/api/*': {
    //     target: 'http://32.2.25.156:8001/api/',
    //   },
    // },
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('css')
  //     .test(/\.css$/)
  //     .oneOf('vue')
  //     .resourceQuery(/\?vue/)
  //     .use('px2rem')
  //     .loader('px2rem-loader')
  //     .options({
  //       remUnit: 192,
  //     })
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        'src': path.resolve(__dirname, '../src'),
        'components': path.resolve(__dirname, '../src/components'),
        'api': path.resolve(__dirname, '../src/api'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'utils': path.resolve(__dirname, '../src/utils'),
        'store': path.resolve(__dirname, '../src/store'),
        'router': path.resolve(__dirname, '../src/router'),
      },
    },
  },
}
