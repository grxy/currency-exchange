import path from 'path';

const config = {
    devServer: {
        contentBase: 'public/',
        historyApiFallback: {
            index: 'index.html'
        },
        inline: true,
        port: 8888
    },
    devtool: 'source-map',
    entry: {
        index: 'services/server/index'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./public'),
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['.js', '.less'],
        modules: [
            'node_modules',
            path.resolve('./src')
        ]
    },
    target: 'node',
    watchOptions: {
        poll: true
    }
};

export default config;
