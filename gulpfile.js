var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// npm install gulp browser-sync gulp-sass --save-dev 
/*gulp.task(@"styles", @func)
    takes a task name "styles" and callback function that checks the scss directories
    main sass file for changes, it then 'pipes' that file into the gulp-sass compiler
    and 'pipes' the result of that into your projects css directory.
    Then it pipes that file into your borwser-sync module and reloads the page with the
    new content.
visually: gulp.src ==>gulp-sass *compiles the sass* ==> autoprefix sass ==> gulp.dest *compiled sass goes here* ==> reloads browser.
*/
gulp.task('styles',function(){
    gulp.src("./scss/main.scss")
    .pipe(sass().on('error', function(err) {
        console.error('\x07'); // so it doesn't just fail (literally) silently!
        sass.logError.bind(this)(err);
      }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/assets/css'))
});
/*
gulp.task(@'serve' @func)
    thos initializes a server at our base directory.
    Next call gulp.watch to watch for any changes to our .scss directory for all .scss files,
        if a change occurs call the styles task to recompile the .scss
    Next call gulp.watch to check for any changes to ALL changes to ALL directorys with html files
    and reload the browser
*/
gulp.task('watch_scss', function(){
    gulp.watch('./scss/**/*.scss',['styles']);
})


// Creates a default task which when called will call all tasks in order from the passed in array
gulp.task('default',['watch_scss']);