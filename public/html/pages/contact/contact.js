'use strict';
app.controller('contactController', ['$scope', function ($scope) {

    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
        });
    });
}]);
