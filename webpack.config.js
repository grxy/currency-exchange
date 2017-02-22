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
        path: './',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['.js', '.less'],
        modules: [
            'node_modules',
            path.resolve('./src')
        ]
    },
    watchOptions: {
        poll: true
    }
};

const configs = [
    {
        ...config,
        entry: {
            'private/server': ['babel-polyfill', 'services/server/index'],
        },
        target: 'node'
    },
    {
        ...config,
        entry: {
            'public/app': 'index'
        }
    }
];

export default configs;
