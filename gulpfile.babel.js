import gulp from 'gulp';
import minimist from 'minimist';
import { styleCheck } from './lib/eslintChecker';

const knownOptions = {
  string: 'config',
  default: '',
};

const options = minimist(process.argv.slice(2), knownOptions);

gulp.task('style-check', () => {
  return styleCheck('**/*.js', options.config);
});

gulp.task('default', ['style-check']);
