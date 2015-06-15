/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: false,
        livereloadOnError: false
    },
    amd: {
        files: ['./src/**/*.js'],
        tasks: ['wrap', 'jshint']
    },
    jasmine: {
        files: ['./tests/src/*.spec.js', 'src/mvc/**/*.js'],
        tasks: ['jasmine_node']
    }
};
