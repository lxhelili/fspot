const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const path = require('path');
const postcssNormalize = require('postcss-normalize');
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      oneOf: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            { loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [
                postcssNormalize(/* pluginOptions */)
              ]
              } 
            }
          ]
        },
        {
          test: cssModuleRegex,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                  },
              }
            },
            { loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [
                postcssNormalize(/* pluginOptions */)
              ]
              } 
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        }
      ]
    }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app',
      links: ['https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i&display=swap']
    }),
  ],
};

module.exports = config;