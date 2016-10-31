var gulp = require('gulp'),
	clean = require('gulp-clean')

gulp.task('css', function() {
	return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/font-awesome/css/font-awesome.min.css']).pipe(gulp.dest('public/css/plugins'));
});

gulp.task('fonts', function() {
	return gulp.src(['bower_components/bootstrap/dist/fonts/*', 'bower_components/font-awesome/fonts/*']).pipe(gulp.dest('public/css/fonts'));
});

gulp.task('cleanBowerFiles', ['css', 'fonts'], function() {
	return gulp.src('bower_components').pipe(clean({
		force: true
	}));
});

gulp.task('default', ['css', 'fonts', 'cleanBowerFiles']); //release version