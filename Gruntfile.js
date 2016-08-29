module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/main.js',
        dest: 'main.min.js'
      }
    },
    watch: {
      css: {
        files: ['src/css/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('up', ['connect:server', 'watch']);

  // Default task(s).
//  grunt.registerTask('default', ['connect:target:keepalive']);

};