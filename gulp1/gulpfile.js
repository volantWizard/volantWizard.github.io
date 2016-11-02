var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat');


gulp.task('testLess',function (){
    gulp.src('css/less1.less')
    	.pipe(less())
    	.pipe(gulp.dest('src/css'))
});
gulp.task('testconcat',function (){
    gulp.src('js/*.js')
    	.pipe(concat('output.js'))
    	.pipe(gulp.dest('src/js'))
});
