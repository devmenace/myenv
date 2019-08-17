const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const source = 'www/public/';

const server =
function server() {
    browserSync.init({
        server: {
            baseDir: source
        }
    });
};
    gulp.watch(source + '*.html').on('change', browserSync.reload);
    gulp.watch(source + 'assets/css/*.css').on('change', browserSync.reload);
    gulp.watch(source + 'assets/js/*.js').on('change', browserSync.reload);
exports.server = server;
