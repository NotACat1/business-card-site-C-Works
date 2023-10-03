const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pagesDir = path.resolve(`${__dirname}/src/pages`);

const files = ['service', 'services'];
const templateParameters = {};
files.forEach((file) => {
  templateParameters[`${file}Data`] = require(`./src/data/${file}-data.json`);
});

function generateEntries() {
  const entries = {};
  const pages = fs.readdirSync(pagesDir);
  pages.forEach((page) => {
    const entryName = page;
    const entryPath = path.resolve(`${pagesDir}/${page}/script.js`);
    entries[entryName] = entryPath;
  });
  return entries;
}

function generateHtmlPlugins() {
  const pages = fs.readdirSync(pagesDir);
  return pages.map((page) => {
    const template = path.resolve(`${pagesDir}/${page}/index.html`);
    return new HtmlWebpackPlugin({
      template,
      filename: `${page}.html`,
      chunks: [page],
      templateParameters,
    });
  });
}

module.exports = {
  entry: generateEntries(),
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname + '/src/blocks'),
      '@components': path.resolve(__dirname + '/src/components'),
      '@fonts': path.resolve(__dirname + '/src/fonts'),
      '@images': path.resolve(__dirname + '/src/images'),
      '@scss': path.resolve(__dirname + '/src/scss'),
      '@varibles': path.resolve(__dirname + '/src/scss/varibles'),
      '@mixins': path.resolve(__dirname + '/src/scss/mixins'),
      '@templates': path.resolve(__dirname + '/src/templates'),
      '@utills': path.resolve(__dirname + '/src/utills'),
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.ejs$/i,
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            let result;
            try {
              result = _.template(content)(templateParameters);
            } catch (error) {
              loaderContext.emitError(error);
              return content;
            }
            return result;
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'resolve-url-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'resolve-url-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext][query]',
        },
      },
      {
        test: /\.(mp4|mp3)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), ...generateHtmlPlugins()],
};
