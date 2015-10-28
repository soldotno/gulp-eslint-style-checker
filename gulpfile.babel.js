import gulp from 'gulp';
import { styleCheck } from './lib/eslintChecker';

gulp.task('style-check', () => {
  return styleCheck('**/*.js');
});

gulp.task('default', ['style-check']);
