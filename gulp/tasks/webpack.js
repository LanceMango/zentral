var webpack = require('webpack-stream');
var webpackConfig = require("../config/webpack.config.js");

module.exports = function (gulp, plugins, path) {
    return function () {

        return gulp.src(path.SRC_JS)
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(path.DEST_JS))
    };
};