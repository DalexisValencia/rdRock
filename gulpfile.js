const { src, dest, gulp, watch, series } = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const del = require('del');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
/* :::: START RUN SERVER :::: */
exports.serve = function() {
    connect.server(
        {
            port: 8888,
            livereload: true
        }
    );
}

function run() {
    exports.serve();
}
/* :::: END RUN SERVER :::: */
exports.clear = function() {
    compileScss();
    watcher();
    run();
    // return del([
    //     'public/**',
    // ]).then(()=>{
    //     moveFiles();
    //     compileNormalize();
    //     compileScss();
    //     compileHtml();
    //     compileJS();
    //     watcher();
    //     run();
    // });
}
// function clearAssets() {
//     return del(['public/assets/**/*.*', 'public/assets/*.*']);
// }
// function moveFiles(){
//     return src('src/assets/**/*.*', 'src/assets/*.*')
//     .pipe(dest('public/assets'));
// }
// function compileHtml(){
//     return src('src/*.html')
//     .pipe(dest('public/'))
//     .pipe(connect.reload());
// }

/* :::: START WORK WITH SCSS :::: */
// function clearCss() {
//     return del(['public/css/main.css']);
// }
// function compileNormalize(){
//     return src('src/scss/normalize.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('public/css/'))
//         .pipe(connect.reload());
// }
function compileScss() {
    return src(['scss/**/*.scss','scss/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        // .pipe(cleanCSS())
        .pipe(dest('css/'))
        .pipe(connect.reload());
}
/* :::: END WORK WITH SCSS :::: */

// function clearJS() {
//     return del(['public/js/main.js']);
// }
// function compileJS() {
//     return src('src/js/*.js')
//     .pipe(concat('main.js'))
//     .pipe(minify())
//     .pipe(dest('public/js/'))
//     .pipe(connect.reload());
// }
function watcher() {
    watch(['scss/*.scss', 'scss/**/*.scss'], {ignoreInitial: true}, series(compileScss));
    connect.reload();
}

exports.default = function(){
    exports.clear();
}
