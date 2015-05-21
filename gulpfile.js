var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

var paths = {
  scripts: 'src/**/*.ts',
};

gulp.task('scripts', function() {
    var tsResult = gulp.src('src/**/**.ts')
        .pipe(ts(tsProject));
    
    return tsResult.js.pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);