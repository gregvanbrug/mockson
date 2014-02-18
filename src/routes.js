'use strict';

var config = require('./config');

exports.index = function(req, res){
    res.status(200).sendfile( config.app + '/index.html' );
};

exports.assets = function(req, res){
    res.status(200).sendfile( config.app + '/' + config.assets + '/' + req.params[0] );
};
