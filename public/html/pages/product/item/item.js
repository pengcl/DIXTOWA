'use strict';
app.controller('productItemController', ['$scope', '$location', 'productSvc', function ($scope, $location, productSvc) {
  $(window).on('scroll', function (e) {
    $scope.$apply(function () {
      $scope.scrollTop = e.currentTarget.scrollY;
    });
  });
}]);
