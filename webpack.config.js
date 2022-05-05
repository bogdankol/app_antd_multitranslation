const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
    //   {
    //     test: /\.(png|jp(e*)g|svg|gif)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: 'images/[hash]-[name].[ext]',
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    //   },
    // {
    //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    //     loader: require.resolve('url-loader'),
    //     options: {
    //         limit: 10000,
    //         name: 'static/media/[name.[hash:8].[ext]'
    //     }
    // }
    ],
  },
  //...
};