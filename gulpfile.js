var gulp = require('gulp');
var sass = require('gulp-sass');

//Tarefa responsável pela compilação do SASS para CSS (Execultar: GULP SASS)
gulp.task('sass', function(){
    return gulp.src('./sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
})

//Tarefa que automatiza (escutando) a compilação do SASS (Executar a primeira vez GULP)
gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', ['sass'])
});

//Tarefa padrão ao execultar o comando GULP
gulp.task('default', ['sass', 'watch']);

