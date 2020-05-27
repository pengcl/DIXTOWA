'use strict';
app.controller('conceptController', ['$scope', function ($scope) {
    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
        });
    });
    new WOW().init();
}]);
