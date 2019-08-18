const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: {
        search: './assets/js/search.js',
        map: './assets/js/mymap.js',
        index: './assets/js/index.js'
      },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
             
        ]
    }
    ,
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 8080,
            files: [
                './*.html',
                './assets/css/*.css',
                './assets/js/*.js',
                './bundle/*.js',
                './bundle/*.css',
            ],
            server: { baseDir: ['./'] }
        })

    ]
};