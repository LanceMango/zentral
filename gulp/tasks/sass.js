var scsslint = require('gulp-scss-lint');
var plumber = require('gulp-plumber');
var scssLintStylish = require('gulp-scss-lint-stylish');

module.exports = function (gulp, plugins, path, onError) {
    return function () {
        var autoprefixerOptions = {
            browsers: ['last 2 versions'],
        };

        function handleError(err) {
            console.log(err.toString());
            this.emit('end');
        }

        return gulp.src(path.SRC_SCSS)
            .pipe(plugins.plumber({errorHandler: handleError}))
            .pipe(plugins.sourcemaps.init())
            .pipe(scsslint({
                'config': './gulp/config/scsslint.yml',
                customReport: scssLintStylish
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