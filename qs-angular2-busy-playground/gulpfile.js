/* eslint-disable */
const shell = require('gulp-shell');

var gulp = require('gulp'),
  path = require('path'),
  runSequence = require('run-sequence');

const print = require('gulp-print').default;

const rootFolder = path.join(__dirname);
const styleFolder = path.join(rootFolder, 'projects', 'qs-angular2-busy', 'src', 'lib', 'style');
const distFolder = path.join(rootFolder, 'dist', 'qs-angular2-busy');

gulp.task('ngbuild', shell.task('ng build qs-angular2-busy --prod'));

gulp.task('less', shell.task(`lessc ${styleFolder}/busy.less ${distFolder}/styles/busy.css`));



gulp.task('buildlib', function (callback) {
  runSequence('ngbuild', 'less', callback);
});

gulp.task('default', ['buildlib']);

// qs-angular2-busy-playground; ng serve

// publish:
// gulp
// cd dist/qs-angular2-busy
// npm publish
