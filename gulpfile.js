const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //nmp install --save-dev gulp-sass
const sourcemaps = require('gulp-sourcemaps'); //nmp install --save-dev gulp-sourcemaps
const uglify = require('gulp-uglify'); //npm install --save-dev gulp-uglify
const obfuscate = require('gulp-obfuscate'); //npm install --save-dev gulp-obfuscate
const imagemin = require('gulp-imagemin'); //npm install --save-dev gulp-obfuscate

function compileJs(){
    return gulp.src('./source/scripts/*.js') //*Início
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts')); //!Destino
}

function compileimages(){
    return gulp.src('./source/imgs/*') //*Início
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imgs/')) //!Destino
}

function compileSass(){
    return gulp.src('./source/styles/main.scss')//*Início
    .pipe(sourcemaps.init()) //ou *.scss para todas
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps')) //não precisa botar o caminho inteiro por causa do local do return
    .pipe(gulp.dest('./build/styles')); //!Destino
}

exports.default = function(){ //npm run gulp watch
    console.log("||Watching||");
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false} ,gulp.series(compileSass)); //vai dar um constante watch no sass
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false} ,gulp.series(compileJs)); //vai dar um constante watch no sass
    gulp.watch('./source/imgs/*', {ignoreInitial:false} ,gulp.series(compileimages)); //vai dar um constante watch no sass
}
