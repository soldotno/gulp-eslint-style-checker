import gulp from 'gulp';
import eslint from 'gulp-eslint';
import fs from 'fs';
import path from 'path';

export function styleCheck(targetsToCheck) {
  let sources;
  let pathToEslint = './node_modules/gulp-eslint-style-checker/eslintrc.json';
  const localConfig = path.join(__dirname, '/../eslintrc.json');
  const esLintStat = fs.statSync(localConfig);

  if (esLintStat.isFile()) {
    pathToEslint = localConfig;
  }

  if (Array.isArray(targetsToCheck)) {
    sources = gulp.src(targetsToCheck);
  } else {
    sources = gulp.src([targetsToCheck]);
  }

  return sources
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint({configFile: pathToEslint}))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.formatEach())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
}
