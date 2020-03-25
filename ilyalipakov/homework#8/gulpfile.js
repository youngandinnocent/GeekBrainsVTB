const { dest, src, series, parallel, task, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const less = require('gulp-less');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const include = require('gulp-include');
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const ghPages = require('gulp-gh-pages');

const smartGrid = require('smart-grid');

const babel = require('gulp-babel');

const path = require('path');
const gridOptPath = './settings.js';

const grid = done => {
  delete require.cache[path.resolve(gridOptPath)];
  let options = require(gridOptPath);
  smartGrid('./dev/styles/', options);
  done();
};

const clear = () => {
  return src('./build', { read: false, allowEmpty: true }).pipe(clean());
};

const styles = () => {
  return src('./dev/styles/main.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'ie >= 11'],
        cascade: false,
      })
    )
    .pipe(concat('main.css'))
    .pipe(gcmq())
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/styles'))
    .pipe(browserSync.stream());
};

const html = () => {
  return src('./dev/*.html')
    .pipe(replace('.less', '.css'))
    .pipe(dest('./build/'))
    .pipe(browserSync.stream());
};

const js = () => {
  return src('./dev/js/index.js')
    .pipe(include())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/js'))
    .pipe(browserSync.stream());
};

const img = () => {
  return src('./dev/img/**/*').pipe(dest('./build/img'));
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './build/',
    },
  });
  watch('./dev/styles/**/*.less', styles);
  watch('./dev/*.html', html);
  watch('./dev/js/**/*.js', js);
  watch('./dev/img', img);
  watch(gridOptPath, grid);
};

const deploy = () => {
  return src('./build/**/*').pipe(
    ghPages({
      remoteUrl: 'git@github.com:MarsFM/slider',
      branch: 'gh-pages',
    })
  );
};

const build = series(clear, parallel(styles, html, img, js));
const watches = parallel(watchFiles);

task('grid', grid);
task('build', build);
task('watch', series(build, watches));
task('deploy', deploy);
