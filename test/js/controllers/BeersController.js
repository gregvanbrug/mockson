beerApp.controller( 'BeersController', function BeersController($scope, $http) {

    $scope.title = 'Mmmm... Beers...';
    $scope.beers = [];

    $http.get('/data/beers')
        .success(function(beers){
            $scope.beers = beers;
        }).error(function(err){
            console.log(err);
        });

});
