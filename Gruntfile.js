module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: [ 'src/*.js' ]
      },
      test: {
        src: [ 'test/js/*.js' ]
      }
    },

    concat: {
      options: {
        process: function(src, filepath) {
          return '// -> ' + filepath + '\n' + src + '\r\n';
        }
      },
      test: {
        src: [ 'test/js/*.js', 'test/js/**/*.js' ],
        dest: 'tmp/assets/js/app.js'
      }
    },

    copy: {
      test: {
        files: [
          { expand: true, flatten: true, cwd: 'test/bower_components', dest: 'tmp/assets/js/libs', src: [ 'angular/angular.js', 'angular-route/angular-route.js' ] },
          { expand: true, cwd: 'test', dest: 'tmp', src: [ '*.html' ] },
          { expand: true, cwd: 'test', dest: 'tmp/assets', src: [ 'templates/**/*' ] },
          // The server does this on first run, but since we're wiping tmp for testing copy it.
          { expand: true, cwd: 'test/bootstrap', dest: 'tmp/data', src: [ '**/*' ] }
        ]
      }
    },

    less_imports: {
      styles: {
        files: {
          'tmp/assets/less/style.less': [
            'test/bower_components/normalize-css/normalize.css',
            'test/less/variables/*.less',
            'test/less/mixins/*.less',
            'test/less/global/*.less',
            'test/less/grid/*.less',
            'test/components/**/less/*.less',
            'test/templates/**/less/*.less'
          ]
        }
      }
    },

    less: {
      theme: {
        options: {
          compile: true
        },
        dest: 'tmp/assets/css/style.css',
        src: [ 'tmp/assets/less/style.less' ]
      }
    },

    autoprefixer: {
      options: {
        browsers: [ 'last 2 version' ]
      },
      files: {
        src: 'tmp/assets/css/style.css'
      },
    },

    clean: {
      tmp: [ 'tmp' ]
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: [ 'jshint:gruntfile' ]
      },
      test: {
        files: [ 'test/**/*' ],
        tasks: [ 'default' ]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task.
  grunt.registerTask('default', [ 'build' ] );
  grunt.registerTask('build', [ 'clean', 'jshint', 'concat', 'less_imports', 'less', 'autoprefixer', 'copy' ] );

};
