import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

//gulp.task("default", () => {
gulp.task("transpile", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

gulp.task("watch", () => {
    gulp.watch("src/**/*.js", ["transpile"]);
});
gulp.task("default", ["transpile"]);