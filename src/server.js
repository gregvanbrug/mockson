'use strict';

var _  = require('lodash'),
    express  = require('express'),
    config   = require('./config'),
    services = require('./services'),
    routes   = require('./routes'),
    app      = express();

app.configure(function(){
    app.use( express.logger('default') );
    app.use( express.bodyParser() );
});

// Serve up the Data
// var resources = [ 'beers', 'breweries' ];
var resources = config.services;

_.forEach( resources, function(service) {
    app.get( '/data/' + service, services.findAll );
    app.get( '/data/' + service + '/:id', services.findById );
    app.post( '/data/' + service, services.addRecord );
    app.put( '/data/' + service + '/:id', services.updateRecord );
    app.delete( '/data/' + service + '/:id', services.deleteRecord );
    console.log('Created service: ' + service);
});

// Serve up the App
app.get( '/', routes.index );
app.get( '/assets/*', routes.assets );

app.listen( config.port, config.host );
console.log('Server running at http://' + config.host + ':' + config.port + '...\n' );
