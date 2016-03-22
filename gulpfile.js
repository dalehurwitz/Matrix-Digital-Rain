var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();

var config = {
	port: 3000,
	paths: {
		dist: "./dist",
		mainJs: "./src/js/matrix.js"
	}
}

gulp.task("js", function() {
    gulp.src(config.paths.mainJs)
        .pipe(babel({ presets: ["es2015"] }))
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