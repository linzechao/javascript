module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            dev: {
                options: {
                    livereload: true
                },

                files: [
                    'ruanyf/**/*'
                ]
            }
        }
    });

    grunt.registerTask('dev', ['watch:dev']);
};