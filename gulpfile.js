var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var browserSync = require("browser-sync").create();

var config = {
	port: 3000,
	paths: {
		dist: "./dist",
		mainJs: "./src/js/matrix.js"
	}
}

gulp.task("js", function() {
    browserify({ entries: config.paths.mainJs, debug: true })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source("matrix.js"))
		.pipe(gulp.dest(config.paths.dist + "/js"))
        .on("error", console.error.bind(console))
		.pipe(browserSync.stream());
})

gulp.task("browserSync", function() {
	browserSync.init({
		port: config.port,
		server: {
			baseDir: "./"
		}
	});
});
	
gulp.task("default", ["browserSync"], function() {
	gulp.watch(config.paths.mainJs, ["js"]);
})