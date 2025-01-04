const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //nmp install --save-dev gulp-sass
const sourcemaps = require('gulp-sourcemaps'); //nmp install --save-dev gulp-sourcemaps
const uglify = require('gulp-uglify'); //npm install --save-dev gulp-uglify

function compressJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function compileSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init()) //ou *.scss para todas
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps')) //não precisa botar o caminho inteiro por causa do local do return
    .pipe(gulp.dest('./build/styles'));
}

function defaultFunc(cb){
    console.log("|||Executing Gulp|||");
    cb();
}

function sayHi(cb){ //Tarefa publica pois é exportada
    console.log("||Hello!||");
    sayBye();
    cb();
}

function sayBye(){ //Tarefa privada
    console.log("||Goodbye||");
};

exports.default = defaultFunc; //npm run gulp
exports.sass = compileSass;
exports.javascript = compressJs;
exports.watch = function(){ //npm run gulp watch
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false} ,gulp.series(compileSass)); //vai dar um constante watch no sass
}
exports.teste1 = gulp.parallel(defaultFunc,sayHi)
exports.teste2 = gulp.series(defaultFunc,sayHi)
exports.teste3 = sayHi; //npm run gulp teste3
