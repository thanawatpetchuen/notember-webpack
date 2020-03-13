const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel', 'babel-plugin-styled-components', '@babel/plugin-syntax-dynamic-import'],
          },
        },
        {
          loader: 'stylelint-custom-processor-loader',
        }],
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin([
      { from: 'public', to: '.', ignore: ['index.html'] },
    ]),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
    }),
  ],
};
