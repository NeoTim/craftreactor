(function(){
  var gulp  = require('gulp');
  var $     = require('gulp-load-plugins')({lazy:false});
  var bower = require('main-bower-files');
$.livereload();
$.livereload.listen();

var paths = {
  index: './client/index.html',
  root: './client',
  html: './client/**/*.html',
  scripts: './client/app/**/*.js',
  styles: './client/app/**/*.css'
}

gulp.task('dev', $.sequence('inject', 'server:dev', 'watch'));
gulp.task('deploy', $.sequence('inject', 'server:deploy', 'watch'));

gulp.task('default', $.sequence('inject', 'server:dev', 'watch'));
gulp.task('server:dev', startServer('development'));
gulp.task('server:deploy', startServer('production'));
gulp.task('watch', startWatch);
gulp.task('inject', startInject)


function startServer(env){
  return function() {
    process.env.NODE_ENV = env;
    require('./server');

  }

}
function startWatch(){
  gulp.watch('./client/**/*.css', $.livereload.changed);
  gulp.watch('./client/**/*.js', $.livereload.changed);
  gulp.watch('./client/**/*.html', $.livereload.changed);
}

function startInject(){
  var target      = gulp.src( paths.index );
  var scripts     = gulp.src( paths.scripts, {read:false} );
  var styles      = gulp.src( paths.styles, {read:false} );
  var bowerFiles  = gulp.src( bower(), {read:false} );

  return target
    .pipe( $.inject( scripts,  {relative:true}) )
    .pipe( $.inject( styles,  {relative:true}) )
    .pipe( $.inject( bowerFiles,  {name:'vendor', relative:true}) )
    .pipe( gulp.dest( paths.root ) );
}

})();