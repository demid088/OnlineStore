const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const PluginTransformReactJsx = require("@babel/plugin-transform-react-jsx")

const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development'
const devtool = (mode === 'development') ? 'source-map' : undefined;
const target = (mode === 'development') ? 'web' : 'browserslist';

console.log(mode + ' mode')

module.exports = {
  mode,
  devtool,
  target,
  devServer: {
    static: './dist',
    open: true,
    // port: 3000,
  },
  entry: {
    script: path.resolve(__dirname, 'src', 'jsx', 'index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Online Store 2',
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: '',
      // inject: 'body',
      scriptLoading: 'blocking',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    })
  ],
  optimization: {
    // minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.jsx$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              // "@babel/plugin-transform-react-jsx-source",
            ],
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[hash][ext]'
        },
      },
    ],
  },
}

