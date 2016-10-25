var scsslint = require('gulp-scss-lint');
var plumber = require('gulp-plumber');

module.exports = function (gulp, plugins, path, onError) {
    return function () {
        var autoprefixerOptions = {
            browsers: ['last 2 versions'],
        };

        var plumberOptions = {
            errorHandler: onError,
        };

        return gulp.src(path.SRC_SCSS)
            .pipe(plugins.plumber(plumberOptions))
            .pipe(plugins.sourcemaps.init())
            .pipe(scsslint({
                'config': './gulp/config/scsslint.yml'
            }))
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer(autoprefixerOptions))
            .pipe(plugins.cssnano())
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(plugins.rename(path.MINIFIED_CSS))
            .pipe(gulp.dest(path.DEST_CSS))
            .pipe(plugins.notify({
                title: 'CSS',
                message: 'Success'
            }));
    };
};