const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  entry: ['./js/index.js', './styles/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return `${path.relative(path.dirname(resourcePath), context)}/`;
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: 'html-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
        generator: {
          filename: '[path][name]-[hash][ext]',
        },
      },
      {
        test: /\.(mp4|gif|png|jpe?g|svg)$/i,
        type: 'asset',
        generator: {
          filename: '[path][name]-[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img/favicon'),
          to: path.resolve(__dirname, 'dist/img/favicon'),
        },
      ],
    }),
    ...glob.sync('./src/*.html').map((htmlFile) => {
      return new HtmlWebpackPlugin({
        inject: true,
        filename: path.basename(htmlFile),
        template: path.basename(htmlFile),
      });
    }),
  ],
};
