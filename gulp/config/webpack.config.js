module.exports = {
    cache: true,
    debug: true,
    devtool: 'cheap-module-inline-source-map',
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            },
        ],
    },
    resolve: {
        modulesDirectories: ['node_modules', 'server/static/bower_components'],
    },
    output: {
        filename: 'app.min.js',
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
}