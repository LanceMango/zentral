module.exports = {
    cache: true,
    debug: true,
    devtool: 'cheap-module-inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            },
        ],
    },
    resolve: {
        modulesDirectories: ['node_modules'],
    },
    output: {
        filename: 'app.min.js',
    },
}