var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

gulp.task('sass-compile', function(){
    return gulp.src('app/scss//**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/css/'))
})

gulp.task('watch', function(){
    gulp.watch('./app/scss/**/*.scss', gulp.series('sass-compile'))
})