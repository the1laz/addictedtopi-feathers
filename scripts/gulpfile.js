var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var file        = require('gulp-file');
var fs          = require('fs');
var path        = require('path');


function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

gulp.task('default', ['watch']);

gulp.task('build',function() {
  gulp.src('docs/**/*').pipe(gulp.dest('pages'));
  var folders = getFolders('../boards');
  folders.map(function(folder){
    return gulp.src(path.join('../boards',folder,'datasheet/board.json')).pipe(gulp.dest(path.join('pages/datasheet/boards',folder)));
  });
  console.log(fs.readdirSync('pages/datasheet/boards'));
  file('boards.json',JSON.stringify({'boards':fs.readdirSync('pages/datasheet/boards')}),{src:true}).pipe(gulp.dest('pages/datasheet'));
  console.log(fs.readdirSync('pages/datasheet/boards'));
});

gulp.task('watch', function() {
  gulp.watch('../boards/**/datasheet/board.json', ['build']);
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./pages/**/*")
.pipe(deploy())
//  return gutil.log('Gulp is running!')
});
