const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  //   entry: path.resolve(__dirname, "src/index.js"),
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  //   配置loader
  module: {
    rules: [
      // ES6语法转化
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //   less 解析
      {
        test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
        use: [
          // 数组中loader执行是从下到上，从右到左顺序执行
          "vue-style-loader", // 创建style标签，添加上js中的css代码  vue-style-loader是syle-loader的增强版
          "css-loader", // 将css以commonjs方式整合到js文件中
          "less-loader", // 将less文件解析成css文件
        ],
      },
      //   打包图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[hash:8].[ext]",
          },
        }, ],
      },
      // 配置loader 处理vue文件
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  //   配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    // 自动清理dist文件夹的插件
    new CleanWebpackPlugin(),
    // vue 相关插件
    new VueLoaderPlugin(),
    new CopyPlugin([ //为了把public下除了index.html文件外的其余所有，给dist目录下拷贝一份
      {
        from: path.resolve(__dirname, 'src/public'),
        to: path.resolve(__dirname, 'dist'),
        ignore: ['index.html']
      }
    ]),
  ],
  mode: "development",
  devServer: {
    port: 8000,
    open: true, //自动打开浏览器
    quiet: true, //输出少量的提示信息
  },
  //   定位出错所在的原始代码行
  devtool: "cheap-module-eval-source-map",
  // 解决导入省略后缀名称
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      //给路径取别名,以后导入vue的时候，默认是在找'vue/dist/vue.esm.js'
      // 'vue$':'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src') //取别名，让@代替根路径下的src  '/src'
    }
  },
};