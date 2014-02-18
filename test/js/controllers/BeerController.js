beerApp.controller( 'BeerController', function BeerController($scope, $routeParams, $http) {

    $http.get('/data/beers/' + $routeParams.id )
        .success(function(beer){
            $scope.title = 'Mmmm... ' + beer.brewery + '\'s ' + beer.name;
            $scope.beer = beer;
        }).error(function(err){
            console.log(err);
        });

});
