'use strict';

var _ = require('lodash'),
    fs     = require('fs-extra'),
    colors = require('colors'),
    config = require('./config');


// Make a copy of the data so that we can reset the database
fs.copy( config.bootstrap, config.data, function(err) {
    if (err) {
        return console.error( 'Couldn\'t find bootstrap directory... Are you sure that\'s the correct path?\n' );
    }
    console.log( 'Bootstraping application' );
    console.log( 'Copied '.grey + config.bootstrap.green + ' to '.grey + config.data.green );
});


// Read the data directory to see what resources we have
exports.resources = function() {

    fs.readdir(config.data, function(err, files){
        if (err) {
            return console.error( 'No resources found... Is your data located at '.red + config.data.red + ' ?'.red );
        }

        _.remove(files, function(file){
            return file.indexOf('.') !== -1;
        });

        console.log( 'Available resources:' + files );
    });

};

// Serve up a resouce/index
exports.findAll = function(req, res){
    var index = config.app + req.path + '/index.json';
    res.status(200).sendfile( index );
};

// Server up a resource/:id
exports.findById = function(req, res) {
    var file = config.app + req.path + '.json';
    res.status(200).sendfile( file );
};

// Add a resource/:id
exports.addRecord = function(req, res){

};

// Update a resource/:id
exports.updateRecord = function(req, res){

};

// Delete a resource/:id
exports.deleteRecord = function(req, res){

};
