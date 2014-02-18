'use strict';

var config = {
  'host': 'localhost',
  'port': 3000,
  'app': 'tmp',                  // Directory to host the application
  'assets': 'assets',            // Directory that contains your css, fonts, images, js, templates
  'services': [ 'beers' ],       // An array of services that your app will use
  'bootstrap': 'test/bootstrap', // Dirctory containing bootstrap data
  'data': 'tmp/data'             // Directory to copy bootstrap data to
};

module.exports = config;
