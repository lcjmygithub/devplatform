// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, './', dir)
// }

module.exports = {
    // devServer: {
    //     port: "8080",//代理端口
    //     open: false,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    //     proxy: {
    //         '/api': {//代理api/
    //             target: "http://123.56.24.229:8081",//服务器api地址
    //             changeOrigin: true,//是否跨域
    //             // ws: true, // proxy websockets
    //             pathRewrite: {//重写路径
    //                 "^/api": ''
    //             }
    //         }
    //     }
    // },
    //  configureWebpack: {
    //         resolve: {
    //           extensions: ['.js', '.vue', '.json'],
    //           alias: {
    //             'vue$': 'vue/dist/vue.esm.js',
    //             '@': resolve('src'),
    //           }
    //       }
    //   },
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './'
}

