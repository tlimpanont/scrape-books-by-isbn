var spawn = require('child_process').spawn;
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var glob = require("glob");
var shell = require('gulp-shell');

gulp.task('test', function() {

    // do tests
    glob("websites/**/test.js", null, function (er, files) {
      var casperChild = spawn('casperjs', ['test'].concat(files));

        casperChild.stdout.on('data', function (data) {
            console.log('CasperJS:', data.toString().slice(0, -1)); // Remove \n
        });

        casperChild.on('close', function (code) {
            var success = code === 0; // Will be 1 in the event of failure
        });
    });

});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('websites/**/test.js', ['test']);
});

// // The default task (called when you run `gulp` from cli)
gulp.task('casperjs:test', ['test', 'watch']);

gulp.task('deploy:vps', function () {
    return gulp.src('')
    .pipe(shell([
        'ssh root@37.46.136.167 "cd ~/../../var/www/; rm -rf scrape; mkdir scrape"',
        'sudo scp -r $PWD/* root@37.46.136.167:~/../../var/www/scrape',
        'forever restartall'
        'echo Your build has been succesfully deployed!'
    ]));
});