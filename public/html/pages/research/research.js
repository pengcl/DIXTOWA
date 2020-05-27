'use strict';
app.controller('researchController', ['$scope', function ($scope) {
    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
        });
    });
    new WOW().init();
}]);
