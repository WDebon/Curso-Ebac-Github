const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));

function styles(){
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("./dist/styles"));

}

function images(){
    return gulp.src("./src/images/**/*",{encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));

}

exports.default = gulp.parallel(styles,images);
exports.watch = function(){
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles)) // dentro do parallel, as funções vão ser executadas a cada mudança
};