'use strict';

app.controller('articleListController', ['$scope', '$location', 'articleSvc', function ($scope, $location, articleSvc) {
    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
        });
    });
}]);
