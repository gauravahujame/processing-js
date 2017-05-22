'use strict';

module.exports = function(grunt){

  /* Configure */
  var configs = {

    css_combine_files : [
      'src/vendor/css/font-awesome.min.css',
      'src/vendor/css/ie8.css',
      'src/vendor/css/ie9.css',
      'src/vendor/css/main.css',
      'src/css/combined.css'],

    js_combine_files : [
      'src/vendor/js/p5js/**',
      'src/vendor/js/ie/respond.min.js',
      'src/vendor/js/ie/respond.min.js',
      'src/vendor/js/jquery.min.js',
      'src/vendor/js/skel.min.js',
      'src/vendor/js/util.js',
      'src/vendor/js/main.js',
      'src/js/main.js'],

    js_hint_files : [
      'src/js/main.js'],

    watch_files : [
      'src/less/*',
      'src/js/*',
      'src/vendor/css/*',
      'src/vendor/js/*',
      'src/vendor/fonts/*',
      'src/vendor/images/*',
      'src/vendor/ico/*']
  }

  /* Init
  ============================ */
  grunt.initConfig({
    less: {
      production: {
        files: {
          "src/css/combined.css" : "src/less/main.less"
        }
      }
    },
    jshint: {
      beforeconcat: configs.js_hint_files
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: configs.js_combine_files,
        dest: 'src/js/compiled.js',
      },
    },
    uglify: {
        my_target: {
          files: {
            'dist/js/compiled.min.js' : 'src/js/compiled.js'
          }
        }
    },
    cssmin: {
      combine: {
        files: {
          'dist/css/main.min.css' : configs.css_combine_files
        }
      }
    },
    watch: {
      src: {
        files: configs.watch_files,
        tasks: ['build']
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/vendor/images',
          dest: 'dist/images',
          src: ['**/*']
        },
        {
          expand: true,
          dot: true,
          cwd: 'src/vendor/fonts',
          dest: 'dist/fonts',
          src: ['**/*']
        },
        {
          expand: true,
          dot: true,
          cwd: 'src/vendor/ico',
          dest: 'dist/ico',
          src: ['**/*']
        },
        {
          expand: true,
          dot: true,
          cwd: 'src/vendor/p5js',
          dest: 'dist/p5js',
          src: ['**/*']
        }]
      }
    }
  });

  // Add plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('build', ['less','cssmin','concat','uglify','jshint','copy']);
  grunt.registerTask('default', ['less','cssmin','concat','uglify','jshint','copy']);

  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
  });

};
