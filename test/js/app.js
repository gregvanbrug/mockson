'use strict';

var beerApp = angular.module('beerApp', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'BeersController',
                templateUrl: 'assets/templates/beers.html'
            }).
            when('/beers', {
                controller: 'BeersController',
                templateUrl: 'assets/templates/beers.html'
            }).
            when('/beers/:id', {
                controller: 'BeerController',
                templateUrl: 'assets/templates/beer.html'
            }).
            when('/whiskies', {
                controller: 'WhiskiesController',
                templateUrl: 'assets/templates/whiskies.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    });
