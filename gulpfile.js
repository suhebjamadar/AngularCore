var gulp = require('gulp');

gulp.task('copy', function() {
    /* Copying System Files */
    gulp.src('src/**/*.js').pipe(gulp.dest('wwwroot'));
    gulp.src('package.json').pipe(gulp.dest('wwwroot'));
    gulp.src('package-lock.json').pipe(gulp.dest('wwwroot'));
    gulp.src('favicon.ico').pipe(gulp.dest('wwwroot'));
    gulp.src('contents/**/*', { "base": "." }).pipe(gulp.dest('wwwroot'));

    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('wwwroot'));
});