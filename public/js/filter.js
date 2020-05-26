'use strict';

/* Filters */
var appFilters = angular.module('appFilters', []);

appFilters.filter('cleanHtml', function () {//订单状态
    return function (content) {
        return content.replace(/<br>/gi,'');
    }
});
