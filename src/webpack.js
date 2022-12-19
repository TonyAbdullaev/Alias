const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            //...
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    //...
};

