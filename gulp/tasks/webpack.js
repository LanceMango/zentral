var webpack = require('webpack-stream');
var webpackConfig = require("../config/webpack.config.js");
var plumber = require('gulp-plumber');

module.exports = function (gulp, plugins, path) {
    return function () {

        return gulp.src(path.SRC_JS)
            .pipe(plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(webpack(webpackConfig))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.notify({
                title: 'WEBPACK',
                message: 'Success'
            }))
            .pipe(gulp.dest(path.DEST_JS))
    };
};