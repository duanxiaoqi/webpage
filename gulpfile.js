var gulp=require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass',function () {
	return gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'));
})

gulp.task('watch',function() {
	gulp.watch('index.scss',['sass']);
	livereload.listen();
    gulp.watch('./**').on('change', livereload.changed);
})