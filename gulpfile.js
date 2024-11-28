const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const fs = require('fs');

// Paths
const paths = {
	scss: {
		watch: './assets/scss/**/*.scss',
		src: './assets/scss/styles.scss',
		dest: './dist'
	},
	js: {
		watch: './assets/js/**/*.js',
		src: './assets/js/*.js',
		dest: './dist'
	},
	css: {
		watch: './assets/external/css/**/*.css',
		src: './assets/external/css/*.css',
		dest: './dist/external/css'  // Updated to 'external/css'
	}
};

// Ensure `dist` and `dist/external/css` directories exist
function ensureDistDir() {
	if (!fs.existsSync(paths.scss.dest)) {
		fs.mkdirSync(paths.scss.dest, { recursive: true });
	}
	if (!fs.existsSync(paths.css.dest)) {
		fs.mkdirSync(paths.css.dest, { recursive: true });
	}
}

// Compile and minify SCSS
function styles(done) {
	ensureDistDir();
	console.log("Starting SCSS compilation...");
	return gulp.src(paths.scss.src)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.scss.dest))
		.on('end', () => {
			console.log("SCSS compiled successfully!");
			done();
		});
}

// Minify and uglify JS
function scripts(done) {
	ensureDistDir();
	console.log("Starting JS minification...");
	return gulp.src(paths.js.src)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.js.dest))
		.on('end', () => {
			console.log("JS minified successfully!");
			done();
		});
}

// Minify external CSS
function minifyExternalCss(done) {
	ensureDistDir();
	console.log("Starting external CSS minification...");
	return gulp.src(paths.css.src)
		.pipe(sourcemaps.init())
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.css.dest))  // Now writes to 'external/css'
		.on('end', () => {
			console.log("External CSS minified successfully!");
			done();
		});
}

// Watch for changes in SCSS, JS, and external CSS files
function watchFiles() {
	gulp.watch(paths.scss.watch, styles);
	gulp.watch(paths.js.watch, scripts);
	gulp.watch(paths.css.watch, minifyExternalCss);
}

// Define complex tasks
const build = gulp.series(styles, scripts, minifyExternalCss);  // Run styles, then scripts, then external CSS
const watch = gulp.parallel(watchFiles);

// Export tasks
exports.styles = styles;
exports.scripts = scripts;
exports.minifyExternalCss = minifyExternalCss;
exports.build = build;
exports.watch = watch;
exports.default = watch;
