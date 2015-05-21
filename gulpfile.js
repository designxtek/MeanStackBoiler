var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
  scripts: '**/*.ts',
  src: './src/'
};

gulp.task('scripts', function() {
    var tsResult = gulp.src(paths.src + '**/*.ts')
        .pipe(ts({
            module: 'commonjs',
            target: "es5"
          }));
  return tsResult.js.pipe(gulp.dest(paths.src));
});

gulp.task('watch', function() {
  gulp.watch([paths.scripts, '!typings{,/**}', '!node_modules{,/**}'], ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);