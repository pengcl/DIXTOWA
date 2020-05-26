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
    var $concept = $('.section-concept')[0];
    var $video = $('.section-video')[0];
    var $catalog = $('.section-catalog')[0];
    var $product = $('.section-product')[0];
    $scope.scrollY = 0;
    $scope.page = 0;
    $scope.zero = true;
    $scope.one = false;
    $scope.two = false;
    $scope.three = false;
    $scope.four = false;
    $scope.fire = false;
    $scope.setHeight = function () {
        $banner.css('height', $('body')[0].clientHeight);
        // $('.section-video').css('height', $('body')[0].clientHeight);
    };
    $scope.setHeight();
    $(window).on('scroll', function (e) {
        $scope.$apply(function () {
            $scope.scrollTop = e.currentTarget.scrollY;
            $scope.scrollY = $scope.scrollTop + $('body')[0].clientHeight / 1.5;
            if($scope.scrollY > $banner[0].offsetTop && $scope.scrollY < $concept.offsetTop){
                $scope.page = 0;
                $scope.zero = true;
            }
            if($scope.scrollY > $concept.offsetTop && $scope.scrollY < $video.offsetTop){
                $scope.page = 1;
                $scope.one = true;
            }
            if($scope.scrollY > $video.offsetTop && $scope.scrollY < $catalog.offsetTop){
                $scope.page = 2;
                $scope.two = true;
            }
            if($scope.scrollY > $catalog.offsetTop && $scope.scrollY < $product.offsetTop){
                $scope.page = 3;
                $scope.three = true;
            }
            if($scope.scrollY > $product.offsetTop){
                $scope.page = 5;
                $scope.fire = true;
            }
            //$scope.page = Math.round($scope.scrollY / $('body')[0].clientHeight);
        });
    });
}]);
