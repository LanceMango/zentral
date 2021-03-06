//http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

//Gulp Basic Plugs
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var path = require('./gulp/config/paths.js');

//Get tasks
function getTask(task) {
    return require('./gulp/tasks/' + task)(gulp, plugins, path);
}

//Scripts
gulp.task('webpack', getTask('webpack'));

//SASS
gulp.task('sass', getTask('sass'));

//Watch
gulp.task('watch', function () {
    gulp.watch(path.WATCH, ['webpack', 'sass']);
});

//DEV Tasks
gulp.task('default', ['watch', 'sass']);

//BUILD
gulp.task('build', ['webpack', 'sass']);

