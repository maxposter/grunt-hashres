/*
 * grunt-hashres
 * https://github.com/DramaFever/grunt-hashres
 *
 * Copyright (c) 2015 Darrel Herbst
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    hashres: {
      mapfiles: {
        options: {
          fileNameFormat: '${name}.${hash}.${ext}'
        },
        src : ['myscripts.min.js', 'myscripts.min.js.map'],
        dest: ['*.html', '*.js']
      }
    }
  });

  grunt.loadTasks('../../../tasks');

};
