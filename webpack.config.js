const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const ENTRY_PATH= path.join(__dirname, 'src/client/index.jsx');
const OUT_PATH= path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: ENTRY_PATH,
  output: {
    path: OUT_PATH,
    filename: 'bundle.js',
  },
  watch: true,
  resolve: {extensions: ['*','.jsx', '.js']},
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': ['@babel/preset-env', '@babel/preset-react'],

          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
};
