beerApp.controller( 'WhiskiesController', function WhiskiesController($scope, $http) {

    $scope.title = 'Mmmm... Whiskey...';
    $scope.whiskies = [];

    $http.get('/data/whiskies')
        .success(function(whiskies){
            $scope.whiskies = whiskies;
        }).error(function(err){
            console.log(err);
        });

});
