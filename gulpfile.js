//引用gulp模块
const gulp = require('gulp');
gulp.task('first', () => {
    console.log('人生中第一个gulp任务');
    gulp.src('./src/css/index.css').pipe(gulp.dest('dist/css'));
})