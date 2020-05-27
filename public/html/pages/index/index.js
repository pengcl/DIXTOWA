'use strict';
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    // 设定路由
    $routeProvider
        .when('/index', { //app首页
            templateUrl: 'pages/index/index.html',
            controller: "indexController"
        });
}]).controller('indexController', ['$scope', '$location', 'productSvc', function ($scope, $location, productSvc) {
    var $banner = $('#banner');
    $scope.setHeight = function () {
        $banner.css('height', $('body')[0].clientHeight);
    };
    $scope.setHeight();
    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
        });
    });
    new WOW().init();
}]);
