const path = require('path')
function resolve(dir) {
  return path.join(__dirname, './', dir)
}
//Analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist',
  assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  configureWebpack: config => { //简单配置
    const myConfig = {}
    if (process.env.NODE_ENV === 'production') {
      myConfig.plugins = []

      //analyzer
      myConfig.plugins.push(
        new BundleAnalyzerPlugin()
      )
    }
    return myConfig
  },
  chainWebpack: config => { //高级配置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'))
  },
  devServer: {
    open: true, // 自动启动浏览器
    port: 8080, // 端口号
    https: false,
    hotOnly: false, // 热更新
    proxy: {
      '^/api': {
        target: 'http://47.106.250.72:8888',
        ws: false,   //开启WebSocket
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //需要rewrite的,
        }
      }
    }
  }
}


