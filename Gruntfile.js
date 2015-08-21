'use strict';

module.exports = function (grunt) {

    // Load tasks
    grunt.loadNpmTasks('grunt-shell');

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            start: {
                command: [
                    'npm start'
                ].join('&&')
            },
            test : {
                command: 'ls'
            }
        }
    });

    // Grunt tasks
    grunt.registerTask('start', ['shell:start']);
    grunt.registerTask('test', ['shell:test']);

};
