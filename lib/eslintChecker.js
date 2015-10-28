import gulp from 'gulp';
import eslint from 'gulp-eslint';
import fs from 'fs';

export function styleCheck(targetsToCheck, customConfig) {
  let configPath = './node_modules/gulp-eslint-style-checker/eslintrc.json';
  let sources;
  let esLintStat;

  // Use custom config.
  if (customConfig) {
    esLintStat = fs.statSync(customConfig);

    // But only if an actual file.
    if (esLintStat.isFile()) {
      configPath = customConfig;
    }
  }

  if (Array.isArray(targetsToCheck)) {
    sources = gulp.src(targetsToCheck);
  } else {
    sources = gulp.src([targetsToCheck]);
  }

  return sources
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint({configFile: configPath}))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.formatEach())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
}
