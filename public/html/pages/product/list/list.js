'use strict';
app.controller('productListController', ['$scope', '$location', 'productSvc', function ($scope, $location, productSvc) {
    $scope.totalPages = 5;
    $scope.page = 1;
    productSvc.list().then(function success(res) {
        $scope.products = res;
    });
    $scope.$on('tab', function (e, data) {
        $scope.tab = data;
        console.log($scope.tab);
    });

    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
        });
    });
}]);
