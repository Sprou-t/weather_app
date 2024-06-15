// This file defines how Webpack should process, bundle, and optimize the assets and modules in your project.

// Loaders: css and stylesheets
// plugins: HtmlWebpackPlugin
// devtools: inline-source-map & devserver & barbell & linter & prettier

const path = require('path'); // Imports the path module from Node.js, which provides functions for working with file and directory paths. rerquire for webpack.config file, import/export for JS file
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/assets/index/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // path.resolve is a method provided by Node.js's path module. It's used to resolve/combine a sequence of path segments into an absolute path.
  },

  module: {
    // tranasfor specific files into specific modules to be imported & used
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // If we had our own dist/index.html then it would be overwritten! In order to preserve our own HTML,
      // we provide webpack with a template html file in src, then specify the o/p html filename
    }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    // devServer option allows you to configure the behavior of the webpack development server
    static: './dist',
    watchFiles: ['src/**/*'], // watch all the subdirectories & files in source directory
  },

  optimization: {
    // added only when there is more than one entrypoint on a single HTML page. W/o this there will be issues
    runtimeChunk: 'single',
  },
};
