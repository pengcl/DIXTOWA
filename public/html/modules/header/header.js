'use strict';

app.controller('headerController', ['$scope', '$location', 'productSvc', function ($scope, $location, productSvc) {
    $scope.show = false;
    $scope.setState = function (state) {
        $scope.show = state;
        console.log($scope.show);
    }
}]);
