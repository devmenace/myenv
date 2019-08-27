const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
const dir = {
    src: 'www/site/public/',
    build: 'www/build/'
};


const php =
    function php() {
        return gulp.series(
            shell.task([
                'echo STARTING PHP DEV SERVER',
                'php -S 127.0.0.1:80 -t www/site/public/',
            ])   //?
        )();
    };

// Browser sync server
const bsp =
    function bsp() {
        browserSync.init({
            port: 8080,
            proxy: 'localhost',
            baseDir: 'www/site/public/',
            ui: {
                port: 3020
            }
        });
        gulp.watch(dir.src + '**/*.php').on('change', browserSync.reload);
        gulp.watch(dir.src + 'assets/css/*.css').on('change', browserSync.reload);
        gulp.watch(dir.src + 'assets/js/*.js').on('change', browserSync.reload);
    };

gulp.task('default', gulp.parallel(
    gulp.series(bsp),
    gulp.series(php)
));

exports.php = php;
exports.bsp = bsp;
exports.default = 'default';

