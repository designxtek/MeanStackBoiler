var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json', {
    out: '/app.js'
});

var paths = {
  scripts: 'src/**/*.ts',
};

gulp.task('scripts', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    
    return tsResult.js.pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);