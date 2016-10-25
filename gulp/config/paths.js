//Paths
module.exports = {

    /* SRC */
    SRC_JS: './server/static/js/app.js',
    SRC_SCSS: './server/static/scss/styles.scss',

    /* NAMES */
    MINIFIED_CSS: 'styles.min.css',


    /* DESTINATIONS */
    DEST_JS: './server/static/js',
    DEST_CSS: './server/static/css',


    /* WATCH */
    WATCH: ['src/js/*.js', 'src/js/**/*.js', 'src/scss/*.scss', 'src/scss/**/*.scss', 'views/**/*.twig'],
};