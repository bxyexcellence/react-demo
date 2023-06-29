const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack")
module.exports = (mode) => ({
  entry: './src/index.tsx',
  mode: mode,
  output: {
    path: path.resolve(process.cwd(), "./dist"),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
    alias: {
      "&": path.resolve(process.cwd(), "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ttf|eot|wav|mp3|mp4|avi|svg|woff(2)?)(\?[^('|")]*)?$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ["@babel/preset-typescript"],
              ["@babel/preset-react"]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ template: './index.html' }),
    new miniCssExtractPlugin({
      filename:'[name].[hash].css'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      productionSourceMap: false
    }
  })
  ],
  devServer: {
    port: 3001,
    hot: true
  },
})